import type { CSSProperties } from "react";
import type { Metadata } from "next";

const pageUrl = "https://www.ukinboundgroundtransport.com/markets/europe";

export const metadata: Metadata = {
  title: "Europe Market | UK Inbound Ground Transport",
  description:
    "Specialist UK & Ireland ground transport support for European tour operators, DMCs and travel planners. Structured touring, private groups, cruise port support, London movements and multi-region itineraries.",
  keywords: [
    "UK transport for European tour operators",
    "UK inbound transport Europe market",
    "UK and Ireland touring transport Europe",
    "UK DMC transport support",
    "UK group transport logistics",
    "cruise port transport UK",
  ],
  alternates: {
    canonical: "/markets/europe",
  },
  openGraph: {
    title: "Europe Market | UK Inbound Ground Transport",
    description:
      "Programme-led UK & Ireland transport support for European tour operators, DMCs and travel planners.",
    url: pageUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const supportItems = [
  "Fixed-departure touring and escorted series",
  "Private group itineraries and bespoke programmes",
  "Cruise port arrivals, departures and onward touring",
  "London hotel, airport and event movements",
  "England, Scotland and Ireland touring",
  "Multi-region itinerary coordination",
];

const sectors = [
  {
    title: "Tour operators",
    text: "Transport support for structured escorted touring, repeat departures and wider group programmes serving European markets.",
  },
  {
    title: "DMCs and receptive partners",
    text: "Clear routing, movement planning and dependable programme delivery aligned to the pace of inbound itineraries.",
  },
  {
    title: "Private group specialists",
    text: "Tailored operational support for customised group touring, regional sequences and service-led itineraries.",
  },
  {
    title: "Cruise-linked programmes",
    text: "Transport coordination around port calls, hotel stays, shore-side touring and onward programme sequencing.",
  },
];

const europeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UK and Ireland ground transport support for European travel partners",
  provider: {
    "@type": "Organization",
    name: "Evershine Transport Limited",
    alternateName: "UK Inbound Ground Transport",
    url: "https://www.ukinboundgroundtransport.com",
  },
  areaServed: ["Europe", "United Kingdom", "Ireland"],
  serviceType: [
    "UK inbound transport services",
    "UK and Ireland touring transport",
    "Cruise port transport support",
    "Group transport coordination",
  ],
  url: pageUrl,
};

export default function EuropeMarketPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(europeJsonLd) }}
      />

      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Europe</p>

          <h1 style={heroTitle}>
            UK &amp; Ireland transport support for European tour operators,
            DMCs and travel planners.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support European travel partners with programme-led ground
            transport across England, Scotland and Ireland, covering
            fixed-departure touring, private groups, cruise port support,
            London movements and wider regional itineraries.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Request transport support
            </a>
            <a href="/programmes" style={secondaryButton}>
              Explore programmes
            </a>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Europe market focus</p>
              <h2 style={sectionTitle}>
                Built for European buyers managing structured UK and Ireland
                programmes.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We work with European tour operators, destination management
                companies and travel planners who need transport support that
                fits a wider operational plan. Our role is to align routing,
                timings and delivery to the structure of the programme, helping
                transport strengthen the itinerary as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>What we support</p>

          <ul style={supportList}>
            {supportItems.map((item) => (
              <li key={item} style={supportItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>Who we work with</p>

          <div style={featureGrid} className="feature-grid">
            {sectors.map((item) => (
              <article key={item.title} style={featureCard}>
                <div style={accentLine} />
                <h2 style={featureTitle}>{item.title}</h2>
                <p style={featureText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Why this matters</p>
              <h2 style={sectionTitle}>
                A programme is only as strong as the reliability of its
                movements.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                European itineraries across the UK and Ireland often involve
                multiple regions, fixed timings and clear service expectations.
                We help support that complexity through structured routing,
                dependable sequencing and programme-level transport
                coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning a UK or Ireland programme for European clients?
          </h2>

          <p style={sectionText}>
            Tell us about your route structure, timings, port calls and service
            requirements, and we’ll help shape the right transport support.
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

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 40,
  alignItems: "start",
};

const featureGrid: CSSProperties = {
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
  fontSize: "clamp(2.6rem, 7vw, 5rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
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
  maxWidth: 700,
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

const heroActions: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
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

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "transparent",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 500,
  border: "1px solid rgba(11, 26, 43, 0.10)",
};

const supportList: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 16,
};

const supportItem: CSSProperties = {
  fontSize: 20,
  lineHeight: 1.5,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  paddingBottom: 12,
  color: "#0B1A2B",
};

const featureCard: CSSProperties = {
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

const featureTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const featureText: CSSProperties = {
  margin: 0,
  maxWidth: 520,
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

const linkButton: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
