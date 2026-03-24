import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Markets",
  description:
    "UK & Ireland programme transport support for international travel partners across the United States, Europe, China and India, including airport arrivals, cruise ports and multi-region touring delivery.",
  alternates: {
    canonical: "/markets",
  },
};

const markets = [
  {
    title: "United States",
    href: "/markets/usa",
    text: "Supporting US-based tour operators, DMCs and travel planners delivering premium UK and Ireland programmes, from first-arrival airport movements to wider multi-region touring and cruise-linked itineraries.",
  },
  {
    title: "Europe",
    href: "/markets/europe",
    text: "Working with European partners managing structured inbound programmes requiring dependable coordination across London, regional gateways, cruise ports and wider UK & Ireland routing.",
  },
  {
    title: "China",
    href: "/markets/china",
    text: "Supporting Chinese outbound travel specialists with structured touring logistics, airport arrivals, premium group handling and clear programme flow across Britain and Ireland.",
  },
  {
    title: "India",
    href: "/markets/india",
    text: "Working with Indian travel companies delivering premium UK and Ireland itineraries with well-planned routing, coordinated arrivals and strong operational structure throughout the programme.",
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
            delivery across airport arrivals, cruise-linked movements, regional
            touring and multi-stop itineraries.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Markets we support</p>
              <h2 style={sectionTitle}>
                Premium programme support for source markets that require
                consistency, pace and clear coordination.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Different source markets often bring different programme shapes,
                service expectations and routing priorities. Our role is to
                support operational delivery in a way that remains structured,
                commercially focused and aligned to the wider itinerary.
              </p>
            </div>
          </div>

          <div style={cardGrid}>
            {markets.map((market) => (
              <a
                key={market.title}
                href={market.href}
                style={marketCard}
                className="luxury-card"
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

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Gateway airports</p>
              <h2 style={sectionTitle}>
                Major airport gateways commonly used in UK and Ireland
                programmes.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                International touring programmes frequently begin or end at key
                airport gateways, where transfer timing, hotel positioning and
                onward routing shape the rest of the itinerary.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {airports.map((item) => (
              <div key={item} style={listItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Cruise ports</p>
              <h2 style={sectionTitle}>
                Major cruise ports across the UK &amp; Ireland used in touring
                and turnaround programmes.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Cruise-linked work often requires precise coordination around
                embarkation, disembarkation, shore-side touring and onward
                regional movements, particularly where timings are fixed and
                port access is tightly managed.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {cruisePorts.map((item) => (
              <div key={item} style={listItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Why this matters</p>
          <h2 style={sectionTitle}>
            Market-specific understanding improves programme delivery.
          </h2>
          <p style={sectionText}>
            Our focus is not simply assigning vehicles. We support the wider
            operational structure of the programme by aligning arrivals,
            departures, regional transitions and touring flow to the needs of
            the buyer, the itinerary and the guest experience.
          </p>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>
            Planning a market-specific UK or Ireland programme?
          </h2>
          <p style={sectionText}>
            Tell us the source market, routing structure, airport or cruise port
            requirements and wider programme shape. We will help frame the right
            transport approach around it.
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
  padding: "48px 0 64px",
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

const introSplit: CSSProperties = {
  display: "grid",
  gap: 40,
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
  fontSize: "clamp(2.7rem, 7vw, 5.2rem)",
  lineHeight: 1.01,
  letterSpacing: "-0.04em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.4rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  lineHeight: 1.05,
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
  maxWidth: 720,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const cardGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gap: 24,
};

const marketCard: CSSProperties = {
  display: "block",
  padding: "28px 26px",
  borderRadius: 28,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  textDecoration: "none",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const cardTopRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  marginBottom: 10,
};

const cardTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.6rem, 3vw, 2rem)",
  lineHeight: 1.08,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
  flex: 1,
};

const cardArrow: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "#C9A227",
  paddingTop: 6,
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const listGrid: CSSProperties = {
  marginTop: 42,
  display: "grid",
  gap: 16,
};

const listItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 20,
  lineHeight: 1.5,
  color: "#0B1A2B",
};

const ctaActions: CSSProperties = {
  marginTop: 26,
  display: "flex",
  gap: 18,
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
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};
