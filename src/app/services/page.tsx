import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium UK & Ireland ground transport services for tour operators, DMCs and travel planners.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Programme transport planning",
    text: "Structured transport planning aligned to routing, timings, service levels and operational flow across touring programmes.",
  },
  {
    title: "Fixed-departure series support",
    text: "Consistent delivery across repeat departures with dependable vehicle planning and coordinated programme execution.",
  },
  {
    title: "Private group transport",
    text: "Flexible support for bespoke group itineraries requiring tailored routing, timing control and responsive coordination.",
  },
  {
    title: "London movements",
    text: "Airport arrivals, hotel transfers, restaurant movements, event transport and city-based programme support delivered with precision.",
  },
  {
    title: "Multi-region UK touring",
    text: "Transport coordination across England, Scotland and Wales for programmes that require reliable national coverage.",
  },
  {
    title: "UK & Ireland cross-border routing",
    text: "Joined-up transport support across borders, with continuity through handovers, timings and wider programme logistics.",
  },
];

const supportItems = [
  "Tour operators running escorted and fixed-departure touring",
  "DMCs coordinating inbound logistics and programme flow",
  "Travel planners managing premium group movements",
  "UK & Ireland itineraries requiring structured execution",
];

export default function ServicesPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={container}>
          <div style={heroGrid} className="split-grid">
            <div>
              <p style={eyebrow}>Services</p>

              <h1 style={heroTitle}>
                Transport services shaped around the needs of touring
                programmes.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                We support tour operators, DMCs and travel planners with
                programme-led ground transport across the UK and Ireland,
                combining structured planning with dependable delivery.
              </p>

              <p style={heroSubText}>
                Our services are built around routing logic, timing discipline,
                operational coordination and the wider rhythm of the itinerary.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButtonDark}>
                  Contact us
                </a>
                <a href="/programmes" style={secondaryLink}>
                  View programmes →
                </a>
              </div>
            </div>

            <div style={heroPanel} className="premium-card">
              <p style={panelEyebrow}>What we support</p>

              <div style={heroPanelGrid}>
                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Coverage</p>
                  <p style={heroMetaText}>
                    England • Scotland • Wales • Ireland
                  </p>
                </div>

                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Movements</p>
                  <p style={heroMetaText}>
                    Airports • Cruise ports • Touring • City operations
                  </p>
                </div>

                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Buyers</p>
                  <p style={heroMetaText}>
                    Tour operators • DMCs • Professional travel planners
                  </p>
                </div>

                <div style={heroMetaItem}>
                  <p style={heroMetaLabel}>Approach</p>
                  <p style={heroMetaText}>
                    Structured planning, clear coordination and dependable
                    delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={proofStrip}>
            <span style={proofItem}>Programme-led transport</span>
            <span style={proofItem}>UK &amp; Ireland coordination</span>
            <span style={proofItem}>Built for professional buyers</span>
            <span style={proofItem}>Structured delivery</span>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Service scope</p>
              <h2 style={sectionTitle}>
                Delivery models designed around programme flow.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Our role is not limited to supplying vehicles. We help shape the
                transport layer of a programme so that movements, timings and
                routing support the wider itinerary. That means clarity at the
                planning stage and consistency in delivery.
              </p>
            </div>
          </div>

          <div style={servicesGrid} className="feature-grid">
            {services.map((service) => (
              <article
                key={service.title}
                style={serviceCard}
                className="premium-card"
              >
                <div style={accentLine} />
                <h2 style={serviceTitle}>{service.title}</h2>
                <p style={serviceText}>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Approach</p>
              <h2 style={sectionTitle}>
                Service delivery built around programme flow.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Strong transport planning protects the wider quality of the
                programme. Airport timings, hotel sequences, touring distances,
                regional transitions and service standards all need to work
                together, not compete with each other.
              </p>

              <div style={responseBar} className="premium-card">
                <p style={responseLabel}>Working standard</p>
                <h3 style={responseTitle}>
                  Clarity in planning. Dependability in delivery.
                </h3>
                <p style={responseText}>
                  Our focus is to help programmes move well, feel organised and
                  remain commercially realistic from first arrival to final
                  departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Who this is for</p>
              <h2 style={sectionTitle}>
                Professional travel buyers who need more than a standalone
                booking.
              </h2>
            </div>

            <div style={supportPanel} className="premium-card">
              {supportItems.map((item) => (
                <div key={item} style={supportItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={editorialPanel} className="premium-card">
            <p style={panelEyebrow}>Related service paths</p>
            <h2 style={panelTitle}>
              Services often sit within a broader programme requirement.
            </h2>
            <p style={panelText}>
              Many enquiries combine coach hire, airport arrivals, cruise port
              movements and touring coordination. Our service model is designed
              to support that wider structure, not just isolated transport
              requests.
            </p>

            <div style={panelActions}>
              <a href="/coach-hire-uk" style={secondaryLink}>
                Coach hire UK →
              </a>
              <a href="/heathrow-group-transfers" style={secondaryLink}>
                Heathrow group transfers →
              </a>
              <a href="/southampton-cruise-transfers" style={secondaryLink}>
                Southampton cruise transfers →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>
            Need transport support for a UK or Ireland programme?
          </h2>
          <p style={sectionText}>
            Tell us about your route structure, timings and service
            requirements, and we’ll help shape the right transport approach.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButtonDark}>
              Contact us
            </a>
            <a href="/programmes" style={secondaryLink}>
              View programmes →
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
  background: "linear-gradient(180deg, #FFFFFF 0%, #FCFAF6 100%)",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3F7 100%)",
};

const ctaSection: CSSProperties = {
  padding: "88px 0 48px",
  background: "linear-gradient(180deg, #F6F8FB 0%, #FFFFFF 100%)",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gap: 36,
  alignItems: "start",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 36,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.52)",
};

const heroTitle: CSSProperties = {
  margin: "12px 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2.2rem, 5.8vw, 4.8rem)",
  lineHeight: 1.03,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 4vw, 3.4rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 56,
  height: 3,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.74)",
};

const heroSubText: CSSProperties = {
  margin: "16px 0 0",
  maxWidth: 640,
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.58)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.72)",
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
  color: "rgba(18,36,56,0.76)",
};

const servicesGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 24,
};

const serviceCard: CSSProperties = {
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
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
};

const serviceTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.45rem, 3vw, 2rem)",
  lineHeight: 1.12,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const serviceText: CSSProperties = {
  margin: 0,
  maxWidth: 560,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18,36,56,0.72)",
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
  color: "rgba(18,36,56,0.72)",
};

const panelActions: CSSProperties = {
  marginTop: 22,
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  alignItems: "center",
};
