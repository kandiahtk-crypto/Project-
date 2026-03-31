import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A programme-led transport partner for professional inbound touring across the UK and Ireland.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  {
    title: "Programme-first thinking",
    text: "Transport is planned around the wider itinerary, not treated as a disconnected booking or isolated movement.",
  },
  {
    title: "Clear coordination",
    text: "Timings, routing and operational flow are handled with clarity from planning through delivery, helping programmes move with confidence.",
  },
  {
    title: "Dependable execution",
    text: "Consistency matters across every movement, whether for a single transfer, a regional circuit or a full touring series.",
  },
];

const supportAreas = [
  "Tour operators managing escorted and fixed-departure touring",
  "DMCs coordinating commercially sensitive itinerary delivery",
  "Travel planners structuring premium group movements",
  "UK & Ireland programmes requiring multi-region coordination",
];

export default function AboutPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={container}>
          <div style={heroGrid} className="split-grid">
            <div>
              <p style={eyebrow}>About</p>

              <h1 style={heroTitle}>
                A transport partner built for professional inbound touring.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                We support tour operators, DMCs and travel brands with
                structured, programme-led transport delivery across the UK and
                Ireland.
              </p>

              <p style={heroSubText}>
                Our role is to help transport feel calm, coordinated and fully
                aligned to the wider itinerary, from gateway arrival through to
                regional touring and final departure.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButton}>
                  Contact us
                </a>
                <a href="/services" style={secondaryLink}>
                  View services →
                </a>
              </div>
            </div>

            <div style={heroPanel} className="premium-card">
              <p style={panelEyebrow}>What we are built for</p>

              <div style={heroPanelGrid}>
                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Focus</p>
                  <p style={heroMetaText}>
                    Programme-led transport across the UK and Ireland
                  </p>
                </div>

                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Clients</p>
                  <p style={heroMetaText}>
                    Tour operators • DMCs • Professional travel planners
                  </p>
                </div>

                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Coverage</p>
                  <p style={heroMetaText}>
                    Airports • Cruise ports • Touring routes • Multi-region
                    programmes
                  </p>
                </div>

                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Approach</p>
                  <p style={heroMetaText}>
                    Clear coordination, dependable execution and commercial
                    awareness
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={proofStrip}>
            <span style={proofItem}>Programme-led delivery</span>
            <span style={proofItem}>UK &amp; Ireland coordination</span>
            <span style={proofItem}>Built for professional buyers</span>
            <span style={proofItem}>Structured operational support</span>
          </div>
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
                That means looking beyond a single movement and understanding
                how transport fits the pace, standards and operational needs of
                the programme as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>How we work</p>
              <h2 style={sectionTitle}>
                Clear coordination, dependable delivery and commercial
                awareness.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We work with buyers who need transport support that fits a
                broader operational plan, whether for fixed-departure touring,
                private group itineraries, London movements or multi-region
                programmes across the UK and Ireland.
              </p>

              <div style={responseBar} className="premium-card">
                <p style={responseLabel}>Working standard</p>
                <h3 style={responseTitle}>
                  Transport that strengthens programme delivery.
                </h3>
                <p style={responseText}>
                  Calm execution, realistic routing and clearer operational
                  alignment across the full itinerary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>Principles</p>

          <div style={principlesGrid} className="feature-grid">
            {principles.map((item) => (
              <article
                key={item.title}
                style={principleCard}
                className="premium-card"
              >
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

            <div style={supportPanel} className="premium-card">
              {supportAreas.map((item) => (
                <div key={item} style={supportItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={editorialPanel} className="premium-card">
            <p style={panelEyebrow}>Why it matters</p>
            <h2 style={panelTitle}>
              Strong transport planning protects the quality of the whole
              programme.
            </h2>
            <p style={panelText}>
              Whether the requirement is a city-based movement, a regional
              circuit or a full touring series, the objective remains the same:
              structured support that strengthens delivery and helps the wider
              programme run well.
            </p>

            <div style={panelActions}>
              <a href="/programmes" style={secondaryLink}>
                Explore programmes →
              </a>
              <a href="/coach-hire-uk" style={secondaryLink}>
                Coach hire UK →
              </a>
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
            <a href="/contact" style={primaryButtonDark}>
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
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "46px 0 78px",
  background:
    "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 52%, #FFFFFF 100%)",
};

const section: CSSProperties = {
  padding: "96px 0",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3F7 100%)",
};

const ctaSection: CSSProperties = {
  padding: "88px 0 48px",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gap: 36,
  alignItems: "start",
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
  color: "rgba(16, 38, 60, 0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(16, 38, 60, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 16px",
  maxWidth: 760,
  fontSize: "clamp(2.4rem, 7vw, 5rem)",
  lineHeight: 1.01,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.4rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 56,
  height: 3,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(16, 38, 60, 0.74)",
};

const heroSubText: CSSProperties = {
  margin: "18px 0 0",
  maxWidth: 640,
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(16, 38, 60, 0.58)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(16, 38, 60, 0.72)",
};

const sectionTextSpacing: CSSProperties = {
  margin: "20px 0 0",
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(16, 38, 60, 0.72)",
};

const heroActions: CSSProperties = {
  marginTop: 26,
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  alignItems: "center",
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

const primaryButtonDark: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 999,
  background: "#10263C",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(16,38,60,0.10)",
  boxShadow: "0 10px 24px rgba(16,38,60,0.16)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  paddingBottom: 2,
  borderBottom: "1px solid rgba(91,124,153,0.34)",
};

const heroPanel: CSSProperties = {
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 32px rgba(18, 36, 56, 0.06)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.5)",
};

const heroPanelGrid: CSSProperties = {
  display: "grid",
  gap: 18,
};

const heroMetaItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
};

const heroMetaLabel: CSSProperties = {
  margin: "0 0 6px",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.5)",
};

const heroMetaText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.7,
  color: "#10263C",
  fontWeight: 600,
};

const proofStrip: CSSProperties = {
  marginTop: 28,
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
};

const proofItem: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#E8EEF4",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.76)",
};

const responseBar: CSSProperties = {
  marginTop: 26,
  padding: "28px",
  borderRadius: 26,
  background: "#10263C",
  color: "#FFFFFF",
  boxShadow: "0 14px 32px rgba(16,38,60,0.14)",
};

const responseLabel: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.62)",
};

const responseTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  color: "#FFFFFF",
};

const responseText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.78)",
};

const principlesGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 28,
};

const principleCard: CSSProperties = {
  minWidth: 0,
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const accentLine: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
};

const principleTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.45rem, 4vw, 2rem)",
  lineHeight: 1.12,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const principleText: CSSProperties = {
  margin: 0,
  maxWidth: 500,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(16, 38, 60, 0.72)",
};

const supportPanel: CSSProperties = {
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const supportItem: CSSProperties = {
  paddingBottom: 14,
  marginBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
  fontSize: 18,
  lineHeight: 1.7,
  color: "#10263C",
};

const editorialPanel: CSSProperties = {
  padding: "34px 30px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const panelTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  color: "#10263C",
};

const panelText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(16, 38, 60, 0.72)",
};

const panelActions: CSSProperties = {
  marginTop: 22,
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  alignItems: "center",
};
