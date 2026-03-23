import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Markets",
  description:
    "UK & Ireland programme transport support for international travel partners across the United States, Europe, China and India.",
};

const markets = [
  {
    title: "United States",
    href: "/markets/usa",
    text: "Support for US-based tour operators, DMCs and travel planners delivering UK and Ireland programmes.",
  },
  {
    title: "Europe",
    href: "/markets/europe",
    text: "Support for European partners managing structured inbound touring across the UK and Ireland.",
  },
  {
    title: "China",
    href: "/markets/china",
    text: "Support for Chinese outbound travel specialists delivering UK and Ireland touring programmes.",
  },
  {
    title: "India",
    href: "/markets/india",
    text: "Support for Indian travel companies delivering premium UK and Ireland itineraries.",
  },
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
            We work with tour operators, DMCs and travel planners globally,
            supporting UK and Ireland programmes with structured, dependable
            transport delivery.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={grid} className="feature-grid">
            {markets.map((market) => (
              <article key={market.title} style={card}>
                <div style={accentLine} />
                <h2 style={cardTitle}>{market.title}</h2>
                <p style={cardText}>{market.text}</p>
                <a href={market.href} style={linkButton}>
                  View market page →
                </a>
              </article>
            ))}
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
  padding: "40px 0 64px",
};

const section: CSSProperties = {
  padding: "88px 0",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 36,
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
  fontSize: "clamp(2.6rem, 7vw, 5rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
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
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const card: CSSProperties = {
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

const cardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const cardText: CSSProperties = {
  margin: "0 0 16px",
  maxWidth: 520,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const linkButton: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
