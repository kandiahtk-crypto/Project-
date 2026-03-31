"use client";

import { useState, type FormEvent, type CSSProperties } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ProgrammeEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData();

    formData.append("access_key", "fd957626-6fe6-4cba-8703-0af4aaca5ad6");
    formData.append("subject", "New Programme Enquiry");
    formData.append("from_name", "UK Inbound Ground Transport");

    formData.append("companyName", String(new FormData(form).get("companyName") || ""));
    formData.append("contactName", String(new FormData(form).get("contactName") || ""));
    formData.append("email", String(new FormData(form).get("emailAddress") || ""));
    formData.append("travelWindow", String(new FormData(form).get("travelWindow") || ""));
    formData.append("groupSize", String(new FormData(form).get("groupSize") || ""));
    formData.append("programmeType", String(new FormData(form).get("programmeType") || ""));
    formData.append("message", String(new FormData(form).get("programmeDetails") || ""));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          "Something went wrong while sending your enquiry. Please try again or contact us directly by phone or WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your enquiry. Please try again or contact us directly by phone or WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div style={successBox}>
        <p style={successEyebrow}>Enquiry received</p>
        <p style={successText}>
          Thank you. A member of our team will respond shortly with a structured
          transport approach aligned to your programme.
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
          approach.
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
              placeholder="name@company.com"
              required
              style={input}
            />
          </div>

          <div style={fieldWrap}>
            <label style={label} htmlFor="travelWindow">
              Travel window
            </label>
            <input
              id="travelWindow"
              name="travelWindow"
              placeholder="e.g. May 2026"
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
              placeholder="Series / Private / FIT"
              style={input}
            />
          </div>
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
            style={textarea}
          />
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
          For urgent movements, you can also call or WhatsApp us directly.
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
