import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About UK Inbound Ground Transport and our programme-led approach to UK & Ireland touring support.",
};

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
                Transport support shaped around the wider programme.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We are not positioned as a simple standalone vehicle-booking
                service. Our focus is on helping planners and operators deliver
                touring programmes with clarity, consistency and dependable
                operational support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>What matters to us</p>
          <h2 style={sectionTitle}>
            Clear coordination, dependable delivery and commercial awareness.
          </h2>
          <p style={sectionText}>
            Our work is shaped by the pace and standards of international travel
            programmes. That means careful planning, responsive coordination and
            transport delivery that supports the wider itinerary rather than
            sitting outside it.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Who we support</p>
          <h2 style={sectionTitle}>
            Built for operators, DMCs and professional travel planners.
          </h2>
          <p style={sectionText}>
            We work with buyers who need transport support that fits a broader
            operational plan, whether for fixed-departure series, private group
            programmes, London movements or wider UK & Ireland touring.
          </p>
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
            <a href="/services" style={linkButton}>
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

const eyebrow: CSSProperties = {
  margin: 0,
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

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 32,
  alignItems: "start",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
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

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
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

const linkButton: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
