"use client";

import type { CSSProperties } from "react";

const WHATSAPP_URL =
  "https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement.";

export default function StickyEnquiryBar() {
  return (
    <div style={wrap}>
      <div style={inner}>
        <p style={text}>
          Planning a UK or Ireland programme?
        </p>

        <div style={actions}>
          <a href="/contact" style={primaryButton}>
            Request proposal
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={whatsAppButton}
          >
            WhatsApp
          </a>

          <a href="tel:+442086292776" style={secondaryLink}>
            Call us
          </a>
        </div>
      </div>
    </div>
  );
}

const wrap: CSSProperties = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 115,
  padding: "10px 14px 14px",
  pointerEvents: "none",
};

const inner: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 14,
  flexWrap: "wrap",
  padding: "14px 16px",
  borderRadius: 20,
  background: "rgba(16, 38, 60, 0.94)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(10px)",
  pointerEvents: "auto",
};

const text: CSSProperties = {
  margin: 0,
  color: "#FFFFFF",
  fontSize: 15,
  fontWeight: 600,
};

const actions: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 44,
  padding: "0 16px",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#10263C",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
};

const whatsAppButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 44,
  padding: "0 16px",
  borderRadius: 999,
  background: "linear-gradient(135deg, #25D366 0%, #1EBE5B 100%)",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
};

const secondaryLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 44,
  padding: "0 14px",
  borderRadius: 999,
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
  border: "1px solid rgba(255,255,255,0.16)",
};
