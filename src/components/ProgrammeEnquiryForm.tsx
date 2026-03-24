"use client";

import { useState, type FormEvent, type CSSProperties } from "react";

export default function ProgrammeEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={successBox}>
        Thank you. A member of our team will respond shortly with a structured
        transport approach aligned to your programme.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={form}>
      <div style={grid} className="lead-form-two">
        <input placeholder="Company name" required style={input} />
        <input placeholder="Contact name" required style={input} />
      </div>

      <div style={grid} className="lead-form-two">
        <input
          type="email"
          placeholder="Email address"
          required
          style={input}
        />
        <input placeholder="Travel window (e.g. May 2026)" style={input} />
      </div>

      <div style={grid} className="lead-form-two">
        <input placeholder="Group size" style={input} />
        <input
          placeholder="Programme type (Series / Private / FIT)"
          style={input}
        />
      </div>

      <textarea
        placeholder="Outline itinerary, routing, gateways or operational requirements"
        rows={5}
        style={textarea}
      />

      <button type="submit" style={button}>
        Submit programme enquiry
      </button>
    </form>
  );
}

const form: CSSProperties = {
  marginTop: 32,
  display: "grid",
  gap: 18,
};

const grid: CSSProperties = {
  display: "grid",
  gap: 16,
};

const input: CSSProperties = {
  height: 56,
  padding: "0 16px",
  borderRadius: 14,
  border: "1px solid rgba(11,26,43,0.12)",
  fontSize: 15,
  background: "#fff",
};

const textarea: CSSProperties = {
  padding: "16px",
  borderRadius: 14,
  border: "1px solid rgba(11,26,43,0.12)",
  fontSize: 15,
  background: "#fff",
};

const button: CSSProperties = {
  height: 56,
  borderRadius: 999,
  background: "#0B1A2B",
  color: "#fff",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};

const successBox: CSSProperties = {
  marginTop: 28,
  padding: "22px",
  borderRadius: 18,
  background: "#F4F0E8",
  color: "#0B1A2B",
  fontSize: 15,
};
