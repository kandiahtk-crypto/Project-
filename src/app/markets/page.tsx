import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Markets",
  description:
    "UK & Ireland programme transport support for international travel partners across key inbound markets.",
  alternates: {
    canonical: "/markets",
  },
};

const markets = [
  {
    title: "United States",
    href: "/markets/usa",
    text: "Supporting US-based tour operators, DMCs and travel planners delivering premium UK and Ireland programmes.",
  },
  {
    title: "Europe",
    href: "/markets/europe",
    text: "Working with European partners managing structured inbound programmes across London, regional gateways and cruise ports.",
  },
  {
    title: "China",
    href: "/markets/china",
    text: "Supporting Chinese outbound specialists with structured touring logistics, arrivals and programme flow.",
  },
  {
    title: "India",
    href: "/markets/india",
    text: "Working with Indian travel companies delivering premium UK and Ireland itineraries with strong operational structure.",
  },
];

const airports = [
  "London Heathrow",
  "London Gatwick",
  "Manchester",
  "Birmingham",
  "Edinburgh",
  "Glasgow",
  "Dublin",
  "Shannon",
  "Belfast",
];

const cruisePorts = [
  "Southampton",
  "Dover",
  "Portsmouth",
  "Liverpool",
  "Greenock",
  "Invergordon",
  "Belfast",
  "Dublin",
  "Cobh",
];

export default function MarketsPage() {
  return (
    <main>
      {/* HERO */}
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>International markets</p>

          <h1 style={heroTitle}>
            Supporting international partners across key inbound markets.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We work with operators, DMCs and travel planners globally,
            supporting UK and Ireland programmes with structured transport
            delivery across arrivals, cruise movements and multi-region touring.
          </p>
        </div>
      </section>

      {/* MARKETS */}
      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Markets we support</p>
              <h2 style={sectionTitle}>
                Programme delivery aligned to international expectations.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Each market brings different pacing, expectations and itinerary
                structure. Our role is to align transport delivery so the
                programme flows clearly from arrival to departure.
              </p>
            </div>
          </div>

          <div style={cardGrid}>
            {markets.map((market) => (
              <a
                key={market.title}
                href={market.href}
                style={marketCard}
                className="premium-card"
              >
                <div style={cardTopRow}>
                  <h3 style={cardTitle}>{market.title}</h3>
                  <span style={cardArrow}>→</span>
                </div>
                <p style={cardText}>{market.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AIRPORTS */}
      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit}>
            <div>
              <p style={sectionLabel}>Gateway airports</p>
              <h2 style={sectionTitle}>
                Major arrival points across the UK & Ireland.
              </h2>
            </div>

            <div style={listGrid}>
              {airports.map((item) => (
                <div key={item} style={listItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRUISE */}
      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit}>
            <div>
              <p style={sectionLabel}>Cruise ports</p>
              <h2 style={sectionTitle}>
                Ports supporting touring and turnaround programmes.
              </h2>
            </div>

            <div style={listGrid}>
              {cruisePorts.map((item) => (
                <div key={item} style={listItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning a market-specific UK or Ireland programme?
          </h2>

          <p style={sectionText}>
            Tell us the source market, routing and programme structure — we’ll
            shape the right transport approach around it.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/markets/usa" style={secondaryLink}>
              View USA market →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const containerWide: CSSProperties = {
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
  padding: "56px 0 72px",
  background:
    "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 60%, #FFFFFF 100%)",
};

const section: CSSProperties = {
  padding: "96px 0",
  background: "linear-gradient(180deg, #FFFFFF 0%, #FCFAF6 100%)",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "linear-gradient(180deg, #F6F8FB 0%, #EEF3F7 100%)",
};

const ctaSection: CSSProperties = {
  padding: "88px 0 48px",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 36,
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
  fontSize: "clamp(2.2rem, 5.8vw, 4.6rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.04,
  fontWeight: 650,
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.05,
  fontWeight: 650,
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 56,
  height: 3,
  background: "linear-gradient(90deg, #5B7C99, #97B3C8)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.72)",
};

const sectionText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.72)",
};

const cardGrid: CSSProperties = {
  marginTop: 40,
  display: "grid",
  gap: 24,
};

const marketCard: CSSProperties = {
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  textDecoration: "none",
  boxShadow: "0 10px 26px rgba(18,36,56,0.05)",
};

const cardTopRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const cardTitle: CSSProperties = {
  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
  fontWeight: 700,
  color: "#10263C",
};

const cardArrow: CSSProperties = {
  fontSize: 20,
  color: "#5B7C99",
};

const cardText: CSSProperties = {
  marginTop: 10,
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.7)",
};

const listGrid: CSSProperties = {
  marginTop: 28,
  display: "grid",
  gap: 14,
};

const listItem: CSSProperties = {
  paddingBottom: 10,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
  fontSize: 18,
  color: "#10263C",
};

const ctaActions: CSSProperties = {
  marginTop: 26,
  display: "flex",
  gap: 18,
};

const primaryButton: CSSProperties = {
  padding: "0 22px",
  minHeight: 52,
  borderRadius: 999,
  background: "#10263C",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
};
