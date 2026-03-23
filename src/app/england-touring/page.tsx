import type { CSSProperties } from "react";
import type { Metadata } from "next";

const pageUrl = "https://www.ukinboundgroundtransport.com/england-touring";

export const metadata: Metadata = {
  title: "England Touring Programmes",
  description:
    "Programme-led transport support for England touring itineraries including London, Oxford, Bath, Cambridge, York and the Lake District.",
  alternates: {
    canonical: "/england-touring",
  },
  openGraph: {
    title: "England Touring Programmes | UK Inbound Ground Transport",
    description:
      "Structured transport support for England heritage touring and multi-stop itineraries.",
    url: pageUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const highlights = [
  "London gateway arrivals and departures",
  "Oxford, Bath and Cambridge day or multi-day routing",
  "York and northern England programme flow",
  "Lake District touring support",
  "Private groups and fixed-departure series",
];

export default function EnglandTouringPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>England touring</p>

          <h1 style={heroTitle}>
            Transport support for England heritage and regional touring.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support England itineraries linking London with heritage cities,
            countryside routes and multi-stop touring circuits used by tour
            operators, DMCs and travel planners.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Common programme structure</p>

          <h2 style={sectionTitle}>
            England itineraries often combine gateway cities with heritage
            touring.
          </h2>

          <p style={sectionText}>
            London, Oxford, Bath, Cambridge, York and the Lake District remain
            central to classic Britain itineraries. Transport planning needs to
            reflect realistic timings, city access, hotel logistics and broader
            programme flow.
          </p>

          <ul style={list}>
            {highlights.map((item) => (
              <li key={item} style={listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Operational focus</p>

          <h2 style={sectionTitle}>
            Structured delivery matters as routes become more layered.
          </h2>

          <p style={sectionText}>
            Our role is to support timing, sequencing and service continuity
            across England touring programmes so transport strengthens the wider
            itinerary rather than sitting outside it.
          </p>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning an England touring programme?
          </h2>

          <p style={sectionText}>
            Tell us about your route structure, timings and service
            requirements, and we’ll help shape the right transport support.
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

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "40px 0 64px",
};

const section: CSSProperties = {
  padding: "88px 0",
};

const sectionSoft: CSSProperties = {
  padding: "80px 0",
  background: "#F8F5EF",
};

const ctaSection: CSSProperties = {
  padding: "72px 0 48px",
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
  fontSize: "clamp(2.6rem, 7vw, 5rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#0B1A2B",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 5vw, 3rem)",
  lineHeight: 1.06,
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
  margin: "18px 0 24px",
};

const heroText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionText: CSSProperties = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const list: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "28px 0 0",
  display: "grid",
  gap: 14,
};

const listItem: CSSProperties = {
  paddingBottom: 12,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 18,
  lineHeight: 1.6,
  color: "#0B1A2B",
};

const ctaActions: CSSProperties = {
  marginTop: 24,
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
};

const primaryButton: CSSProperties = {
  padding: "14px 20px",
  borderRadius: 999,
  background: "#F2EEE6",
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 600,
  border: "1px solid rgba(11, 26, 43, 0.08)",
};

const linkButton: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
