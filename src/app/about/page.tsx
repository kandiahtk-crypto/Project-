import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A programme-led transport partner for professional inbound touring across the UK and Ireland.",
};

const principles = [
  {
    title: "Programme-first thinking",
    text: "Transport is planned around the wider itinerary, not treated as a disconnected booking.",
  },
  {
    title: "Clear coordination",
    text: "Timings, routing and operational flow are handled with clarity from planning through delivery.",
  },
  {
    title: "Dependable execution",
    text: "Consistency matters across every movement, whether for a single transfer or a full touring series.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>About</p>

          <h1 style={heroTitle}>
            A transport partner built for professional inbound touring.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support tour operators, DMCs and travel brands with structured,
            programme-led transport delivery across the UK and Ireland.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Our role</p>
              <h2 style={sectionTitle}>
                Transport shaped around the wider programme.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Our focus is not generic transport booking. We help shape the
                transport layer of a programme so that routing, timings and
                vehicle planning support the wider itinerary.
              </p>

              <p style={sectionTextSpacing}>
                That means looking beyond a single movement and understanding how
                transport fits the pace, standards and operational needs of the
                programme as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>How we work</p>
          <h2 style={sectionTitle}>
            Clear coordination, dependable delivery and commercial awareness.
          </h2>
          <p style={sectionText}>
            We work with buyers who need transport support that fits a broader
            operational plan, whether for fixed-departure touring, private group
            itineraries, London movements or multi-region programmes across the
            UK and Ireland.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>Principles</p>

          <div style={principlesGrid} className="feature-grid">
            {principles.map((item) => (
              <article key={item.title} style={principleCard}>
                <div style={accentLine} />
                <h2 style={principleTitle}>{item.title}</h2>
                <p style={principleText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Who we support</p>
              <h2 style={sectionTitle}>
                Built for operators, DMCs and professional travel planners.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We are positioned for clients who need more than a standalone
                vehicle booking. Our work supports programmes that require
                consistency, timing control and transport planning aligned to a
                wider operational framework.
              </p>

              <p style={sectionTextSpacing}>
                Whether the requirement is a city-based movement, a regional
                circuit or a full touring series, the objective remains the
                same: structured support that strengthens delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Need support for an upcoming UK or Ireland programme?
          </h2>

          <p style={sectionText}>
            Tell us about your timings, routing and programme structure, and
            we’ll help shape the right transport approach.
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

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionTextSpacing: CSSProperties = {
  margin: "20px 0 0",
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const principlesGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 36,
};

const principleCard: CSSProperties = {
  minWidth: 0,
  paddingBottom: 18,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const accentLine: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  marginBottom: 14,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const principleTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const principleText: CSSProperties = {
  margin: 0,
  maxWidth: 500,
  fontSize: 16,
  lineHeight: 1.85,
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
