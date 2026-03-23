import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Programme-led transport support across fixed-departure, private group, UK regional and UK & Ireland touring programmes.",
};

const programmes = [
  {
    title: "Fixed-departure series",
    description:
      "Consistent, repeatable transport delivery across scheduled touring departures, with dependable structure maintained throughout the programme.",
  },
  {
    title: "Private group touring",
    description:
      "Tailored programme support for private itineraries requiring flexibility, timing control and coordinated delivery.",
  },
  {
    title: "Multi-region UK touring",
    description:
      "Structured routing across England, Scotland and Wales for programmes that require broader national coverage.",
  },
  {
    title: "UK & Ireland programmes",
    description:
      "Cross-border touring with consistent delivery, clear programme flow and reliable coordination across regional transitions.",
  },
];

export default function ProgrammesPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Programmes</p>

          <h1 style={heroTitle}>
            Programme-led transport support across the UK &amp; Ireland.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support operators and planners with structured transport delivery
            across fixed-departure series, private itineraries, regional touring
            and cross-border programmes.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <div style={list}>
            {programmes.map((programme) => (
              <article key={programme.title} style={item}>
                <div style={accentLine} />
                <div style={itemContent}>
                  <h2 style={itemTitle}>{programme.title}</h2>
                  <p style={itemText}>{programme.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Planning support</p>
              <h2 style={sectionTitle}>
                Programmes require more than a standalone movement.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Our role is to support the transport layer of the programme as a
                whole. That means aligning routing, timings and operational flow
                to the wider itinerary so delivery stays clear and dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Need transport coordination for a touring programme?
          </h2>

          <p style={sectionText}>
            Tell us about your timings, routing and programme requirements, and
            we’ll help shape the right support structure.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/services" style={secondaryLink}>
              View services →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 28px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "120px 0 72px",
};

const section: CSSProperties = {
  padding: "96px 0",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "#F8F5EF",
};

const ctaSection: CSSProperties = {
  padding: "88px 0 48px",
};

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 36,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 16px",
  maxWidth: 760,
  fontSize: "clamp(2.7rem, 7vw, 5rem)",
  lineHeight: 1.01,
  letterSpacing: "-0.035em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.4rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const list: CSSProperties = {
  display: "grid",
  gap: 32,
};

const item: CSSProperties = {
  display: "grid",
  gap: 14,
  paddingBottom: 18,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const accentLine: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const itemContent: CSSProperties = {
  minWidth: 0,
};

const itemTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const itemText: CSSProperties = {
  margin: 0,
  maxWidth: 640,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const ctaActions: CSSProperties = {
  marginTop: 26,
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
  alignItems: "center",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "#F2EEE6",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(11, 26, 43, 0.08)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
