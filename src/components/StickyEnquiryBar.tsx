"use client";

import type { CSSProperties } from "react";

const WHATSAPP_URL =
  "https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement.";

export default function StickyEnquiryBar() {
  return (
    <div style={wrap}>
      <div style={inner}>
        <div style={leftBlock}>
          <div style={statusRow}>
            <span style={statusDot} />
            <span style={statusText}>Available for programme enquiries</span>
          </div>

          <p style={title}>Planning a UK or Ireland programme?</p>

          <p style={subText}>
            Speak to us about coach hire, touring logistics, airport arrivals
            and multi-region movements.
          </p>
        </div>

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
            <span style={whatsAppIcon}>💬</span>
            WhatsApp us
          </a>

          <a href="tel:+442086292776" style={secondaryButton}>
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
  padding: "12px 14px 16px",
  pointerEvents: "none",
};

const inner: CSSProperties = {
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  flexWrap: "wrap",
  padding: "18px 20px",
  borderRadius: 24,
  background:
    "linear-gradient(135deg, rgba(16,38,60,0.97) 0%, rgba(24,50,76,0.97) 100%)",
  boxShadow: "0 22px 60px rgba(0,0,0,0.22)",
  border: "1px solid rgba(255,255,255,0.10)",
  backdropFilter: "blur(14px)",
  pointerEvents: "auto",
};

const leftBlock: CSSProperties = {
  flex: "1 1 320px",
  minWidth: 260,
};

const statusRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8,
};

const statusDot: CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: "999px",
  background: "#25D366",
  boxShadow: "0 0 0 6px rgba(37, 211, 102, 0.12)",
  flexShrink: 0,
};

const statusText: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.62)",
};

const title: CSSProperties = {
  margin: "0 0 4px",
  color: "#FFFFFF",
  fontSize: 18,
  lineHeight: 1.2,
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const subText: CSSProperties = {
  margin: 0,
  color: "rgba(255,255,255,0.72)",
  fontSize: 14,
  lineHeight: 1.6,
  maxWidth: 620,
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
  minHeight: 48,
  padding: "0 18px",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#10263C",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
  boxShadow: "0 8px 20px rgba(255,255,255,0.10)",
};

const whatsAppButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  minHeight: 48,
  padding: "0 18px",
  borderRadius: 999,
  background: "linear-gradient(135deg, #25D366 0%, #1EBE5B 100%)",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
  boxShadow: "0 10px 24px rgba(37,211,102,0.28)",
  border: "1px solid rgba(255,255,255,0.14)",
};

const whatsAppIcon: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 22,
  height: 22,
  borderRadius: "999px",
  background: "rgba(255,255,255,0.16)",
  fontSize: 12,
  lineHeight: 1,
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 48,
  padding: "0 16px",
  borderRadius: 999,
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(255,255,255,0.04)",
};
