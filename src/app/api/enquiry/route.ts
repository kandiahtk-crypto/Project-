import { NextResponse } from "next/server";
import { Resend } from "resend";
import { randomBytes } from "node:crypto";

const inbox = "info@ukinboundgroundtransport.com";
const services = new Set(["Multi-day touring", "Touring series", "Airport transfer", "Cruise movement", "Day hire", "Other group movement"]);
const limits: Record<string, number> = {
  companyName: 120, contactName: 120, emailAddress: 254, phone: 40,
  travelWindow: 100, groupSize: 6, programmeType: 100, serviceType: 40,
  startDate: 10, endDate: 10, pickup: 180, dropoff: 180,
  luggage: 160, vehicleNeeds: 180, itineraryLink: 1000, programmeDetails: 5000,
};
const labels: Record<string, string> = {
  companyName: "Company", contactName: "Contact", emailAddress: "Email",
  phone: "Phone / WhatsApp", serviceType: "Service", programmeType: "Programme type",
  startDate: "First date", endDate: "Last date", travelWindow: "Date flexibility",
  groupSize: "Passengers", pickup: "First pickup / gateway",
  dropoff: "Final drop-off", luggage: "Luggage",
  vehicleNeeds: "Vehicle / accessibility", itineraryLink: "Itinerary link",
  programmeDetails: "Itinerary and requirements",
};
function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function validDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) &&
    new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
}

export async function POST(req: Request) {
  try {
    if (Number(req.headers.get("content-length") || 0) > 16000)
      return NextResponse.json({ success: false, message: "Enquiry is too long." }, { status: 413 });
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey)
      return NextResponse.json({ success: false, message: "Enquiries are temporarily unavailable. Please email us directly." }, { status: 503 });
    const body: unknown = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body))
      return NextResponse.json({ success: false, message: "Invalid enquiry." }, { status: 400 });
    const data = body as Record<string, unknown>;
    if (data.website) return NextResponse.json({ success: true });
    const values: Record<string, string> = {};
    for (const [name, max] of Object.entries(limits)) {
      const raw = data[name];
      if (raw !== undefined && (typeof raw !== "string" || raw.length > max))
        return NextResponse.json({ success: false, message: "Please check the length of your details." }, { status: 400 });
      values[name] = typeof raw === "string" ? raw.trim() : "";
    }
    const required = ["companyName", "contactName", "emailAddress", "groupSize", "serviceType", "startDate", "pickup", "dropoff", "programmeDetails"];
    const count = Number(values.groupSize);
    if (required.some((name) => !values[name]) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress) ||
      !Number.isInteger(count) || count < 1 || count > 5000 ||
      !services.has(values.serviceType) || !validDate(values.startDate) ||
      (values.endDate && (!validDate(values.endDate) || values.endDate < values.startDate)))
      return NextResponse.json({ success: false, message: "Please complete the required fields and check your dates." }, { status: 400 });
    if (values.itineraryLink) {
      try {
        if (new URL(values.itineraryLink).protocol !== "https:") throw new Error("Invalid URL");
      } catch {
        return NextResponse.json({ success: false, message: "Please use a secure https itinerary link." }, { status: 400 });
      }
    }
    let reference = `UKIGT-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${randomBytes(3).toString("hex").toUpperCase()}`;
    // Save the enquiry server-to-server. Email remains the intake fallback if D1 is unavailable.
    try {
      const stored = await fetch("https://ukigt-backend.kandiah-tk.workers.dev/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: values.companyName,
          contact_name: values.contactName,
          email: values.emailAddress,
          phone: values.phone,
          service_type: values.serviceType,
          start_date: values.startDate,
          end_date: values.endDate,
          group_size: count,
          pickup: values.pickup,
          dropoff: values.dropoff,
          details: [
            values.programmeDetails,
            `Programme type: ${values.programmeType || "—"}`,
            `Date flexibility: ${values.travelWindow || "—"}`,
            `Luggage: ${values.luggage || "—"}`,
            `Vehicle / accessibility: ${values.vehicleNeeds || "—"}`,
            `Itinerary link: ${values.itineraryLink || "—"}`,
          ].join("\n").slice(0, 5000),
        }),
        signal: AbortSignal.timeout(6000),
      });
      if (stored.ok) {
        const result = await stored.json() as { reference?: string };
        if (result.reference) reference = result.reference;
      } else {
        console.error("D1 enquiry save failed:", stored.status);
      }
    } catch (error) {
      console.error("D1 enquiry save failed:", error);
    }
    const rows = Object.entries(labels).map(([key, label]) =>
      `<tr><th align="left" style="padding:8px;vertical-align:top">${label}</th><td style="padding:8px;white-space:pre-wrap">${escapeHtml(values[key] || "—")}</td></tr>`
    ).join("");
    const resend = new Resend(apiKey);
    const internal = await resend.emails.send({
      from: `UK Inbound Ground Transport <${inbox}>`, to: [inbox],
      replyTo: values.emailAddress,
      subject: `[${reference}] RFQ: ${values.companyName} · ${values.startDate}`,
      html: `<div style="font-family:Arial,sans-serif;color:#16212b"><h2>Trade RFQ ${reference}</h2><p>Review routing, driver hours, luggage and vehicle suitability before quoting. No booking has been confirmed.</p><table>${rows}</table></div>`,
    });
    if (internal.error) {
      console.error("RFQ delivery failed:", internal.error);
      return NextResponse.json({ success: false, message: "We could not deliver your enquiry. Please email us directly." }, { status: 502 });
    }
    try {
      const receipt = await resend.emails.send({
        from: `UK Inbound Ground Transport <${inbox}>`, to: [values.emailAddress],
        subject: `Programme enquiry received · ${reference}`,
        html: `<div style="font-family:Arial,sans-serif;color:#16212b"><h2>Thank you for your enquiry</h2><p>Dear ${escapeHtml(values.contactName)},</p><p>We received your UK &amp; Ireland transport request. Your reference is <strong>${reference}</strong>.</p><p>Our team will review your dates, routing and group requirements before responding. This acknowledgement is not a quotation or booking confirmation.</p><p>For urgent requests, reply to this email or call us.</p><p>UK Inbound Ground Transport</p></div>`,
      });
      if (receipt.error) console.error("RFQ acknowledgement failed:", receipt.error);
    } catch (error) {
      console.error("RFQ acknowledgement failed:", error);
    }
    return NextResponse.json({ success: true, reference });
  } catch (error) {
    console.error("RFQ error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again or email us directly." }, { status: 500 });
  }
}
