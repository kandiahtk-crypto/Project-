import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for UK Inbound Ground Transport.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={container}>
      <p style={eyebrow}>Legal</p>
      <h1 style={title}>Privacy Policy</h1>
      <p style={updated}>Last updated: 2026</p>

      <section style={section}>
        <h2 style={heading}>Introduction</h2>
        <p style={text}>
          UK Inbound Ground Transport is committed to protecting and respecting
          your privacy. This Privacy Policy explains how we collect, use and
          protect personal information when you use our website or contact us
          regarding our services.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Information we may collect</h2>
        <p style={text}>
          We may collect and process information including your name, company
          details, email address, telephone number, itinerary details, travel
          dates, group size and any other information you provide through our
          contact forms, email or WhatsApp.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>How we use your information</h2>
        <ul style={list}>
          <li>To respond to enquiries and provide quotations</li>
          <li>To plan and deliver transport services</li>
          <li>To communicate with you about your enquiry or booking</li>
          <li>To improve our website and services</li>
          <li>To meet legal, regulatory and compliance obligations</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Lawful basis for processing</h2>
        <p style={text}>
          We process personal data where necessary for legitimate business
          interests, to take steps at your request before entering into a
          contract, to perform a contract, or where required to comply with a
          legal obligation.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Sharing your information</h2>
        <p style={text}>
          We do not sell personal data. We may share information with trusted
          service providers, operational partners, professional advisers or
          authorities where necessary to provide services, maintain business
          operations or comply with legal obligations.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Data retention</h2>
        <p style={text}>
          We retain personal information only for as long as reasonably
          necessary for enquiry management, service delivery, legal compliance,
          record-keeping and business administration.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Your rights</h2>
        <p style={text}>
          Depending on applicable law, you may have rights to access, correct,
          erase, restrict or object to the processing of your personal data, as
          well as rights relating to data portability and complaints to a
          supervisory authority.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Contact</h2>
        <p style={text}>
          If you have questions about this Privacy Policy or how your data is
          handled, please contact us via our contact page or by email at
          info@ukinboundgroundtransport.com.
        </p>
      </section>
    </main>
  );
}

const container: CSSProperties = {
  maxWidth: 920,
  margin: "0 auto",
  padding: "48px 24px 90px",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#5B7C99",
};

const title: CSSProperties = {
  margin: "12px 0 10px",
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  color: "#10263C",
};

const updated: CSSProperties = {
  margin: "0 0 32px",
  fontSize: 14,
  color: "rgba(16,38,60,0.58)",
};

const section: CSSProperties = {
  marginBottom: 34,
};

const heading: CSSProperties = {
  margin: "0 0 12px",
  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
  fontWeight: 700,
  color: "#10263C",
};

const text: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(16,38,60,0.78)",
};

const list: CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  lineHeight: 1.9,
  color: "rgba(16,38,60,0.78)",
};
