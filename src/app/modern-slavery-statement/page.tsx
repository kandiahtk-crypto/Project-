import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Slavery Statement",
  description:
    "Modern Slavery Statement for UK Inbound Ground Transport.",
  alternates: {
    canonical: "/modern-slavery-statement",
  },
};

export default function ModernSlaveryStatementPage() {
  return (
    <main style={container}>
      <p style={eyebrow}>Legal</p>
      <h1 style={title}>Modern Slavery Statement</h1>
      <p style={updated}>Last updated: 2026</p>

      <section style={section}>
        <h2 style={heading}>Statement</h2>
        <p style={text}>
          UK Inbound Ground Transport is committed to acting ethically and with
          integrity in all business dealings. We oppose all forms of modern
          slavery, forced labour, human trafficking and exploitation.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Our business</h2>
        <p style={text}>
          We provide structured ground transport support for tour operators,
          DMCs and travel planners across the UK and Ireland. We expect the
          same standards of professionalism and legal compliance from our
          suppliers and operational partners.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Our approach</h2>
        <ul style={list}>
          <li>We seek to work with reputable suppliers and partners</li>
          <li>We expect lawful and ethical employment practices</li>
          <li>We do not knowingly engage with organisations involved in exploitation</li>
          <li>We take concerns seriously and review them appropriately</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Due diligence</h2>
        <p style={text}>
          We aim to apply reasonable commercial judgement when selecting and
          working with suppliers and service partners, particularly where
          operational delivery depends on third-party support.
        </p>
      </section>

      <section style={section}>
        <h2 style={heading}>Reporting concerns</h2>
        <p style={text}>
          Any concerns relating to unethical conduct, exploitation or labour
          practices should be reported to us through our contact page or email
          so they can be reviewed appropriately.
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
