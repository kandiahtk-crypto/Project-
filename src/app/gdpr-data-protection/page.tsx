import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & Data Protection",
  description:
    "GDPR and Data Protection statement for UK Inbound Ground Transport.",
  alternates: {
    canonical: "/gdpr-data-protection",
  },
};

export default function GdprDataProtectionPage() {
  return (
    <main style={container}>
      <p style={eyebrow}>Legal</p>
      <h1 style={title}>GDPR &amp; Data Protection</h1>
      <p style={updated}>Last updated: 2026</p>

      <section style={section}>
        <h2 style={heading}>Our commitment</h2>
        <p style={text}>
          UK Inbound Ground Transport is committed to handling personal data
          responsibly, securely and in accordance with applicable data
          protection laws, including the UK GDPR and Data Protection Act 2018
          where relevant.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Data we process</h2>
        <p style={text}>
          We may process personal information provided during enquiries,
          quotations, operational planning and service delivery. This may
          include contact details, business details, travel information and
          itinerary-related information.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Why we process personal data</h2>
        <ul style={list}>
          <li>To respond to enquiries and proposals</li>
          <li>To plan and deliver transport services</li>
          <li>To manage operational and commercial relationships</li>
          <li>To maintain business records and compliance processes</li>
          <li>To improve our internal systems and service standards</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Security and access controls</h2>
        <p style={text}>
          We take reasonable technical and organisational measures to protect
          personal data against unauthorised access, loss, misuse, disclosure
          or alteration. Access to personal information is limited to those who
          need it for legitimate business purposes.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Third parties</h2>
        <p style={text}>
          Where necessary, personal data may be shared with trusted suppliers,
          operational partners, advisers or authorities. Any such sharing is
          limited to what is necessary for service delivery, business operation
          or legal compliance.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Data subject rights</h2>
        <p style={text}>
          Individuals may have rights to request access to their personal data,
          correction of inaccurate data, deletion where appropriate,
          restriction, objection or other rights under applicable data
          protection law.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Contact regarding data protection</h2>
        <p style={text}>
          Questions regarding data protection can be directed to us through our
          contact page or by email at info@ukinboundgroundtransport.com.
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
