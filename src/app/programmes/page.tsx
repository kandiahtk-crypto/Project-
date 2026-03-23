import type { CSSProperties } from "react";
import SiteHeader from "../../components/SiteHeader";

export default function ProgrammesPage() {
  const programmes = [
    {
      title: "Fixed-departure series",
      description:
        "Consistent, repeatable transport delivery across scheduled touring departures.",
    },
    {
      title: "Private group touring",
      description:
        "Tailored programme support for private itineraries requiring flexibility and coordination.",
    },
    {
      title: "Multi-region UK touring",
      description:
        "Structured routing across England, Scotland and Wales.",
    },
    {
      title: "UK & Ireland programmes",
      description:
        "Cross-border touring with consistent delivery, clear programme flow, and reliable coordination.",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main>
        <section style={hero}>
          <div style={container}>
            <p style={eyebrow}>Programmes</p>

            <h1 style={title}>
              Programme-led transport support across the UK & Ireland.
            </h1>
          </div>
        </section>

        <section style={section}>
          <div style={containerNarrow}>
            <div style={list}>
              {programmes.map((programme) => (
                <article key={programme.title} style={item}>
                  <div style={accent} />
                  <div style={itemContent}>
                    <h2 style={heading}>{programme.title}</h2>
                    <p style={text}>{programme.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={ctaSection}>
          <div style={container}>
            <div style={ctaWrap}>
              <p style={ctaEyebrow}>Planning support</p>
              <h2 style={ctaTitle}>
                Need transport coordination for a touring programme?
              </h2>
              <p style={ctaText}>
                We support operators and planners with structured transport
                delivery across fixed-departure, private group, and regional
                touring programmes.
              </p>

              <div style={ctaActions}>
                <a href="/contact" style={primaryButton}>
                  Contact us
                </a>
                <a href="/services" style={secondaryButton}>
                  View services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const hero: CSSProperties = {
  padding: "72px 24px 32px",
};

const section: CSSProperties = {
  padding: "24px 24px 72px",
};

const ctaSection: CSSProperties = {
  padding: "0 24px 96px",
};

const container: CSSProperties = {
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
};

const containerNarrow: CSSProperties = {
  width: "100%",
  maxWidth: 860,
  margin: "0 auto",
};

const eyebrow: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 13,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(20, 24, 40, 0.62)",
};

const title: CSSProperties = {
  margin: 0,
  maxWidth: 760,
  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
  lineHeight: 1.02,
  fontWeight: 600,
  letterSpacing: "-0.04em",
  color: "#141828",
};

const list: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 28,
};

const item: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 20,
  paddingBottom: 24,
  borderBottom: "1px solid rgba(20, 24, 40, 0.08)",
};

const accent: CSSProperties = {
  width: 4,
  minWidth: 4,
  alignSelf: "stretch",
  borderRadius: 999,
  background: "#caa437",
};

const itemContent: CSSProperties = {
  flex: 1,
};

const heading: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  lineHeight: 1.1,
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: "#141828",
};

const text: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 18,
  lineHeight: 1.7,
  color: "rgba(20, 24, 40, 0.72)",
};

const ctaWrap: CSSProperties = {
  maxWidth: 860,
  margin: "0 auto",
  padding: "40px 0 0",
  borderTop: "1px solid rgba(20, 24, 40, 0.08)",
};

const ctaEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 13,
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(20, 24, 40, 0.62)",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.06,
  fontWeight: 600,
  letterSpacing: "-0.04em",
  color: "#141828",
};

const ctaText: CSSProperties = {
  margin: "0 0 28px",
  maxWidth: 700,
  fontSize: 18,
  lineHeight: 1.7,
  color: "rgba(20, 24, 40, 0.72)",
};

const ctaActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 14,
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 48,
  padding: "0 20px",
  borderRadius: 999,
  background: "#141828",
  color: "#ffffff",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 500,
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 48,
  padding: "0 20px",
  borderRadius: 999,
  border: "1px solid rgba(20, 24, 40, 0.14)",
  color: "#141828",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 500,
  background: "transparent",
};
