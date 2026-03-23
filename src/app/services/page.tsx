import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium UK & Ireland ground transport services for tour operators, DMCs and travel planners.",
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

export default function ServicesPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Services</p>

          <h1 style={heroTitle}>
            Transport services shaped around the needs of touring programmes.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support tour operators, DMCs and travel planners with
            programme-led ground transport across the UK and Ireland, combining
            structured planning with dependable delivery.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={servicesGrid} className="feature-grid">
            {services.map((service) => (
              <article key={service.title} style={serviceCard}>
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
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Approach</p>
              <h2 style={sectionTitle}>
                Service delivery built around programme flow.
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
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Who this is for</p>
          <h2 style={sectionTitle}>
            Professional travel buyers who need more than a standalone booking.
          </h2>
          <p style={sectionText}>
            We work with operators and planners who need transport support that
            fits into a wider operational plan, whether for a single movement, a
            regional circuit or a full touring series.
          </p>
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
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/programmes" style={linkButton}>
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
  padding: "0 24px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "0 20px",
};

const heroSection: CSSProperties = {
  padding: "100px 0 60px",
};

const section: CSSProperties = {
  padding: "100px 0",
};

const sectionSoft: CSSProperties = {
  padding: "100px 0",
  background: "#FBFAF7",
};

const ctaSection: CSSProperties = {
  padding: "80px 0 40px",
};

const eyebrow: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const heroTitle: CSSProperties = {
  fontSize: "clamp(2.6rem, 8vw, 4.2rem)",
  fontFamily: "var(--font-serif)",
  lineHeight: 1.05,
  margin: "12px 0 16px",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 50,
  height: 2,
  background: "#C9A227",
  margin: "16px 0 24px",
};

const heroText: CSSProperties = {
  fontSize: 18,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
};

const servicesGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
};

const serviceCard: CSSProperties = {
  minWidth: 0,
  paddingBottom: 10,
};

const accentLine: CSSProperties = {
  width: 56,
  height: 2,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const serviceTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.55rem, 6vw, 2.2rem)",
  lineHeight: 1.14,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const serviceText: CSSProperties = {
  margin: 0,
  maxWidth: 500,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionLabel: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
  marginBottom: 12,
};

const sectionTitle: CSSProperties = {
  fontSize: "clamp(2rem, 7vw, 3.6rem)",
  fontFamily: "var(--font-serif)",
  lineHeight: 1.1,
  margin: "0 0 16px",
  color: "#0B1A2B",
};

const sectionText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
  margin: 0,
};

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 30,
};

const ctaTitle: CSSProperties = {
  fontSize: "clamp(2.2rem, 7vw, 3.4rem)",
  fontFamily: "var(--font-serif)",
  margin: "12px 0 18px",
  color: "#0B1A2B",
};

const ctaActions: CSSProperties = {
  marginTop: 24,
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
};

const primaryButton: CSSProperties = {
  padding: "14px 22px",
  borderRadius: 999,
  background: "#F4F1EA",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
};

const linkButton: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
};
