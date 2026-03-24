"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

export default function ProgrammeEnquiryForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    market: "",
    programmeType: "",
    groupSize: "",
    travelDates: "",
    regions: "",
    itinerary: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send enquiry");
      }

      setStatus("success");
      setForm({
        company: "",
        name: "",
        email: "",
        market: "",
        programmeType: "",
        groupSize: "",
        travelDates: "",
        regions: "",
        itinerary: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form style={leadFormCard} onSubmit={handleSubmit}>
      <div style={formGrid}>
        <div style={formRowTwo} className="lead-form-two">
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            style={input}
            aria-label="Company name"
            required
          />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Contact name"
            style={input}
            aria-label="Contact name"
            required
          />
        </div>

        <div style={formRowTwo} className="lead-form-two">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            style={input}
            aria-label="Email address"
            required
          />
          <input
            name="market"
            value={form.market}
            onChange={handleChange}
            placeholder="Source market (USA, Europe, China, India)"
            style={input}
            aria-label="Source market"
          />
        </div>

        <div style={formRowTwo} className="lead-form-two">
          <input
            name="programmeType"
            value={form.programmeType}
            onChange={handleChange}
            placeholder="Programme type (series, private group, cruise, etc.)"
            style={input}
            aria-label="Programme type"
            required
          />
          <input
            name="groupSize"
            value={form.groupSize}
            onChange={handleChange}
            placeholder="Estimated group size"
            style={input}
            aria-label="Estimated group size"
          />
        </div>

        <div style={formRowTwo} className="lead-form-two">
          <input
            name="travelDates"
            value={form.travelDates}
            onChange={handleChange}
            placeholder="Travel dates / season"
            style={input}
            aria-label="Travel dates or season"
          />
          <input
            name="regions"
            value={form.regions}
            onChange={handleChange}
            placeholder="Regions (England, Scotland, Ireland)"
            style={input}
            aria-label="Regions"
          />
        </div>

        <textarea
          name="itinerary"
          value={form.itinerary}
          onChange={handleChange}
          placeholder="Outline the itinerary, gateways, cruise ports, timings or any operational priorities"
          style={textarea}
          aria-label="Itinerary details"
          required
        />

        <div style={leadFooter}>
          <button type="submit" style={leadButton} disabled={status === "loading"}>
            {status === "loading"
              ? "Sending..."
              : "Request programme support"}
          </button>

          <p style={leadResponseNote}>
            {status === "success" &&
              "Your enquiry has been sent. We aim to respond within 24 hours."}
            {status === "error" &&
              "Something went wrong. Please try again."}
            {status === "idle" &&
              "We aim to respond with a structured outline within 24 hours."}
          </p>
        </div>
      </div>
    </form>
  );
}

const leadFormCard: CSSProperties = {
  marginTop: 30,
  padding: "30px 28px",
  borderRadius: 30,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F7F3EC 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 10px 30px rgba(11, 26, 43, 0.04)",
};

const formGrid: CSSProperties = {
  display: "grid",
  gap: 16,
};

const formRowTwo: CSSProperties = {
  display: "grid",
  gap: 16,
};

const input: CSSProperties = {
  width: "100%",
  height: 54,
  padding: "0 16px",
  borderRadius: 16,
  border: "1px solid rgba(11,26,43,0.10)",
  background: "#FFFFFF",
  color: "#0B1A2B",
  fontSize: 15,
  outline: "none",
};

const textarea: CSSProperties = {
  width: "100%",
  minHeight: 150,
  padding: "16px",
  borderRadius: 16,
  border: "1px solid rgba(11,26,43,0.10)",
  background: "#FFFFFF",
  color: "#0B1A2B",
  fontSize: 15,
  outline: "none",
  resize: "vertical",
};

const leadFooter: CSSProperties = {
  marginTop: 6,
  display: "flex",
  gap: 16,
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

const leadButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 999,
  background: "#F2EEE6",
  color: "#0B1A2B",
  border: "1px solid rgba(11, 26, 43, 0.08)",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
};

const leadResponseNote: CSSProperties = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.6,
  color: "rgba(11,26,43,0.62)",
};
