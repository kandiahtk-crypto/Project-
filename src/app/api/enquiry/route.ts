import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Missing email service configuration." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const companyName = String(body.companyName || "").trim();
    const contactName = String(body.contactName || "").trim();
    const emailAddress = String(body.emailAddress || "").trim();
    const travelWindow = String(body.travelWindow || "").trim();
    const groupSize = String(body.groupSize || "").trim();
    const programmeType = String(body.programmeType || "").trim();
    const programmeDetails = String(body.programmeDetails || "").trim();

    if (!companyName || !contactName || !emailAddress) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "UK Inbound Ground Transport <onboarding@resend.dev>",
      to: "info@ukinboundgroundtransport.com",
      replyTo: emailAddress,
      subject: `New programme enquiry from ${contactName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #16212B;">
          <h2>New programme enquiry</h2>
          <p><strong>Company name:</strong> ${escapeHtml(companyName)}</p>
          <p><strong>Contact name:</strong> ${escapeHtml(contactName)}</p>
          <p><strong>Email address:</strong> ${escapeHtml(emailAddress)}</p>
          <p><strong>Travel window:</strong> ${escapeHtml(travelWindow || "-")}</p>
          <p><strong>Group size:</strong> ${escapeHtml(groupSize || "-")}</p>
          <p><strong>Programme type:</strong> ${escapeHtml(programmeType || "-")}</p>
          <p><strong>Itinerary and requirements:</strong></p>
          <div style="padding: 14px 16px; background: #F7F7F7; border-radius: 12px; white-space: pre-wrap;">
            ${escapeHtml(programmeDetails || "-")}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry send error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
