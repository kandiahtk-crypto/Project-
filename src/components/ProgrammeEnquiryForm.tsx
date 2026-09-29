"use client";

import { useState, type FormEvent, type CSSProperties } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ProgrammeEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [reference, setReference] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      companyName: String(formData.get("companyName") || "").trim(),
      contactName: String(formData.get("contactName") || "").trim(),
      emailAddress: String(formData.get("emailAddress") || "").trim(),
      travelWindow: String(formData.get("travelWindow") || "").trim(),
      groupSize: String(formData.get("groupSize") || "").trim(),
      programmeType: String(formData.get("programmeType") || "").trim(),
      programmeDetails: String(formData.get("programmeDetails") || "").trim(),
      serviceType: String(formData.get("serviceType") || "").trim(),
      startDate: String(formData.get("startDate") || "").trim(),
      endDate: String(formData.get("endDate") || "").trim(),
      pickup: String(formData.get("pickup") || "").trim(),
      dropoff: String(formData.get("dropoff") || "").trim(),
      luggage: String(formData.get("luggage") || "").trim(),
      vehicleNeeds: String(formData.get("vehicleNeeds") || "").trim(),
      itineraryLink: String(formData.get("itineraryLink") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit enquiry");
      }

      setStatus("success");
      setReference(result.reference);
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your enquiry. Please try again or contact us directly by phone or WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div style={successBox}>
        <p style={successEyebrow}>Enquiry received</p>
        <p style={successText}>
          Thank you. Your RFQ reference is <strong>{reference}</strong>. We’ve sent
          your programme to our team for review. Please quote this reference if
          you contact us about it. This is an enquiry, not a confirmed booking.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={form}>
      <div style={introBlock}>
        <p style={formEyebrow}>Programme enquiry</p>
        <h3 style={formTitle}>Share your programme details</h3>
        <p style={formText}>
          Give us the core outline and we’ll come back with a clear transport
          approach. Fields marked * are needed to review your request.
        </p>
      </div>

      <div style={section}>
        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="companyName">
              Company name
            </label>
            <input
              id="companyName"
              name="companyName"
              maxLength={120}
              placeholder="Your company"
              required
              style={input}
            />
          </div>

          <div style={fieldWrap}>
            <label style={label} htmlFor="contactName">
              Contact name
            </label>
            <input
              id="contactName"
              name="contactName"
              maxLength={120}
              placeholder="Your full name"
              required
              style={input}
            />
          </div>
        </div>

        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="emailAddress">
              Email address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              maxLength={254}
              placeholder="name@company.com"
              required
              style={input}
            />
          </div>

          <div style={fieldWrap}>
            <label style={label} htmlFor="phone">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={40}
              placeholder="Include country code"
              style={input}
            />
          </div>
        </div>

        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="groupSize">
              Group size
            </label>
            <input
              id="groupSize"
              name="groupSize"
              type="number"
              min={1}
              max={5000}
              required
              placeholder="Approximate passenger count"
              style={input}
            />
          </div>

          <div style={fieldWrap}>
            <label style={label} htmlFor="programmeType">
              Programme type
            </label>
            <input
              id="programmeType"
              name="programmeType"
              placeholder="Series, private group, cruise or other"
              maxLength={100}
              style={input}
            />
          </div>
        </div>

        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="serviceType">Service type *</label>
            <select id="serviceType" name="serviceType" required style={input} defaultValue="">
              <option value="" disabled>Select service</option>
              <option>Multi-day touring</option><option>Touring series</option>
              <option>Airport transfer</option><option>Cruise movement</option>
              <option>Day hire</option><option>Other group movement</option>
            </select>
          </div>
          <div style={fieldWrap}>
            <label style={label} htmlFor="travelWindow">Travel window</label>
            <input id="travelWindow" name="travelWindow" maxLength={100} placeholder="If dates are flexible" style={input} />
          </div>
        </div>
        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="startDate">First travel date *</label>
            <input id="startDate" name="startDate" type="date" required style={input} />
          </div>
          <div style={fieldWrap}>
            <label style={label} htmlFor="endDate">Last travel date</label>
            <input id="endDate" name="endDate" type="date" style={input} />
          </div>
        </div>
        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="pickup">First pickup / gateway *</label>
            <input id="pickup" name="pickup" required maxLength={180} placeholder="Airport, port, hotel or city" style={input} />
          </div>
          <div style={fieldWrap}>
            <label style={label} htmlFor="dropoff">Final drop-off / destination *</label>
            <input id="dropoff" name="dropoff" required maxLength={180} placeholder="Hotel, airport, port or city" style={input} />
          </div>
        </div>
        <div style={gridTwo} className="lead-form-two">
          <div style={fieldWrap}>
            <label style={label} htmlFor="luggage">Luggage</label>
            <input id="luggage" name="luggage" maxLength={160} placeholder="e.g. 40 large cases and cabin bags" style={input} />
          </div>
          <div style={fieldWrap}>
            <label style={label} htmlFor="vehicleNeeds">Vehicle / accessibility needs</label>
            <input id="vehicleNeeds" name="vehicleNeeds" maxLength={180} placeholder="Coach size, mobility or special requirements" style={input} />
          </div>
        </div>
        <div style={fieldWrap}>
          <label style={label} htmlFor="itineraryLink">Itinerary link</label>
          <input id="itineraryLink" name="itineraryLink" type="url" maxLength={1000} placeholder="Optional shared PDF or document URL" style={input} />
          <p style={microText}>Use a link accessible to our team, or email the itinerary after submitting.</p>
        </div>
        <div style={fieldWrap}>
          <label style={label} htmlFor="programmeDetails">
            Itinerary and requirements
          </label>
          <textarea
            id="programmeDetails"
            name="programmeDetails"
            placeholder="Outline itinerary, routing, gateways, hotels, cruise movements or any operational requirements"
            rows={6}
            required
            maxLength={5000}
            style={textarea}
          />
        </div>
        <div style={{ display: "none" }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div style={footerRow}>
        <button
          type="submit"
          style={button}
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Sending enquiry..."
            : "Submit programme enquiry"}
        </button>

        {status === "error" && <p style={errorText}>{errorMessage}</p>}

        <p style={microText}>
          Submitting an RFQ does not reserve a vehicle or confirm a price. For urgent movements, call us directly.
        </p>
      </div>
    </form>
  );
}

const form: CSSProperties = {
  display: "grid",
  gap: 28,
};

const introBlock: CSSProperties = {
  display: "grid",
  gap: 8,
};

const formEyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(22,33,43,0.54)",
};

const formTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.35rem, 3vw, 1.8rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.03em",
  color: "#16212B",
  fontWeight: 650,
};

const formText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(22,33,43,0.70)",
};

const section: CSSProperties = {
  display: "grid",
  gap: 18,
};

const gridTwo: CSSProperties = {
  display: "grid",
  gap: 18,
};

const fieldWrap: CSSProperties = {
  display: "grid",
  gap: 9,
};

const label: CSSProperties = {
  fontSize: 13,
  lineHeight: 1.4,
  fontWeight: 600,
  color: "#16212B",
};

const input: CSSProperties = {
  width: "100%",
  minHeight: 58,
  padding: "0 18px",
  borderRadius: 16,
  border: "1px solid rgba(22,33,43,0.12)",
  background: "#FFFFFF",
  color: "#16212B",
  fontSize: 15,
  lineHeight: 1.4,
  outline: "none",
  boxShadow: "inset 0 1px 2px rgba(22,33,43,0.03)",
};

const textarea: CSSProperties = {
  width: "100%",
  minHeight: 150,
  padding: "16px 18px",
  borderRadius: 16,
  border: "1px solid rgba(22,33,43,0.12)",
  background: "#FFFFFF",
  color: "#16212B",
  fontSize: 15,
  lineHeight: 1.7,
  outline: "none",
  resize: "vertical",
  boxShadow: "inset 0 1px 2px rgba(22,33,43,0.03)",
};

const footerRow: CSSProperties = {
  display: "grid",
  gap: 12,
  alignItems: "start",
};

const button: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 58,
  padding: "0 28px",
  borderRadius: 999,
  border: "none",
  background: "#10263C",
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
  boxShadow: "0 12px 26px rgba(16,38,60,0.16)",
};

const microText: CSSProperties = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.7,
  color: "rgba(22,33,43,0.58)",
};

const errorText: CSSProperties = {
  margin: 0,
  fontSize: 14,
  lineHeight: 1.7,
  color: "#B42318",
};

const successBox: CSSProperties = {
  marginTop: 8,
  padding: "24px 22px",
  borderRadius: 22,
  background: "#FFFFFF",
  border: "1px solid rgba(22,33,43,0.08)",
  boxShadow: "0 12px 28px rgba(22,33,43,0.05)",
};

const successEyebrow: CSSProperties = {
  margin: "0 0 8px",
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(22,33,43,0.54)",
};

const successText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.8,
  color: "#16212B",
};
