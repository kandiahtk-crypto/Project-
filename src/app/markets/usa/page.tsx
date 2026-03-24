import type { CSSProperties } from "react";
import type { Metadata } from "next";

const pageUrl = "https://www.ukinboundgroundtransport.com/markets/usa";

export const metadata: Metadata = {
  title: "USA Market | UK Inbound Ground Transport",
  description:
    "Premium UK & Ireland ground transport support for US tour operators, DMCs and travel planners. Fixed-departure touring, private groups, airport arrivals, cruise port support and multi-region UK & Ireland programmes.",
  alternates: {
    canonical: "/markets/usa",
  },
  openGraph: {
    title: "USA Market | UK Inbound Ground Transport",
    description:
      "Structured transport support for US-based tour operators and travel planners delivering UK & Ireland programmes.",
    url: pageUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const programmeTypes = [
  {
    title: "Escorted touring series",
    text: "Support for structured departures requiring consistent delivery, reliable sequencing and clear operational planning across multiple dates and routes.",
  },
  {
    title: "Private group itineraries",
    text: "Transport aligned to customised UK and Ireland itineraries for private groups, affinity travel, student programmes and special-interest touring.",
  },
  {
    title: "Cruise-linked programmes",
    text: "Support around embarkation, disembarkation, shore-side touring and onward routing where port timing and coordination are central to delivery.",
  },
  {
    title: "UK & Ireland combinations",
    text: "Multi-region support for programmes linking England, Scotland and Ireland through commercially realistic routing and well-managed transitions.",
  },
];

const gateways = [
  "London Heathrow",
  "London Gatwick",
  "Manchester",
  "Edinburgh",
  "Glasgow",
  "Dublin",
  "Shannon",
  "Belfast",
];

const ports = [
  "Southampton",
  "Dover",
  "Liverpool",
  "Greenock",
  "Invergordon",
  "Belfast",
  "Dublin",
  "Cobh",
];

const benefits = [
  "Transport support aligned to the pace and structure of escorted touring.",
  "Clear handling of airport arrivals, hotel positioning and onward routing.",
  "Support for premium private groups and customised itinerary flow.",
  "Operational awareness across regional touring, cruise ports and cross-border programmes.",
];

export default function UsaMarketPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroGrid} className="split-grid">
            <div>
              <p style={eyebrow}>USA market</p>

              <h1 style={heroTitle}>
                Premium UK &amp; Ireland transport support for US tour operators
                and travel planners.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                We support US-based operators, DMCs and travel planners
                delivering structured UK and Ireland programmes across
                fixed-departure touring, private groups, cruise-linked
                itineraries, airport arrivals and multi-region touring.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButton}>
                  Request transport support
                </a>
                <a href="/programmes" style={secondaryLink}>
                  Explore programmes →
                </a>
              </div>
            </div>

            <div style={heroPanel} className="luxury-card">
              <p style={panelEyebrow}>Built for</p>
              <h2 style={heroPanelTitle}>
                US-origin programmes that require dependable execution,
                realistic routing and strong itinerary flow.
              </h2>

              <div style={heroPanelDivider} />

              <div style={heroPanelGrid}>
                <div>
                  <p style={metaHeading}>Typical buyers</p>
                  <p style={metaText}>
                    Tour operators • DMCs • Travel planners
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Programme types</p>
                  <p style={metaText}>
                    Escorted touring • Private groups • Cruise-linked touring
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Coverage</p>
                  <p style={metaText}>
                    England • Scotland • Ireland • London gateway movements
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Focus</p>
                  <p style={metaText}>
                    Airport arrivals • Routing • Timing • Coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Market overview</p>
              <h2 style={sectionTitle}>
                Supporting US-origin touring across the UK &amp; Ireland.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                The US market often demands clear service standards, efficient
                arrival handling, dependable day-to-day delivery and well-paced
                routing across multiple destinations. Our role is to support the
                operational structure of the programme so that transport fits
                the itinerary, rather than disrupting it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Programme types</p>
              <h2 style={sectionTitle}>
                Transport support across the programme formats commonly used by
                US buyers.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                From escorted departures to private custom groups, transport
                requirements vary by route shape, timing sensitivity and service
                expectations. Delivery needs to remain commercially realistic,
                operationally clear and well coordinated throughout the
                programme.
              </p>
            </div>
          </div>

          <div style={cardGrid}>
            {programmeTypes.map((item) => (
              <article key={item.title} style={card} className="luxury-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Gateway airports</p>
              <h2 style={sectionTitle}>
                Major airport gateways commonly used for US arrivals and
                departures.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Airport handling is often the first operational touchpoint of
                the programme. Transfer timing, hotel positioning and onward
                routing need to support recovery from long-haul arrivals while
                maintaining the wider shape of the itinerary.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {gateways.map((item) => (
              <div key={item} style={listItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Cruise ports</p>
              <h2 style={sectionTitle}>
                Cruise ports commonly used within UK &amp; Ireland itineraries.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Cruise-related work requires strong timing control around
                embarkation, disembarkation and shore-side touring, especially
                where programmes continue inland or connect with wider regional
                touring.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {ports.map((item) => (
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
              <p style={sectionLabel}>Why operators choose us</p>
              <h2 style={sectionTitle}>
                Structured delivery for programmes that need clarity and
                dependability.
              </h2>
            </div>

            <div>
              <div style={benefitList}>
                {benefits.map((item) => (
                  <div key={item} style={benefitItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning a UK or Ireland programme for the US market?
          </h2>

          <p style={sectionText}>
            Tell us about your routing, arrival airports, cruise port
            requirements, programme type and delivery priorities. We will help
            shape a transport approach that fits the structure of your
            itinerary.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/markets" style={secondaryLink}>
              View all markets →
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
  padding: "48px 0 72px",
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

const heroGrid: CSSProperties = {
  display: "grid",
  gap: 40,
  alignItems: "start",
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

const heroActions: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  alignItems: "center",
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

const heroPanel: CSSProperties = {
  padding: "28px",
  borderRadius: 30,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F6F1E8 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 10px 30px rgba(11, 26, 43, 0.04)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const heroPanelTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const heroPanelDivider: CSSProperties = {
  height: 1,
  margin: "22px 0",
  background: "rgba(11, 26, 43, 0.08)",
};

const heroPanelGrid: CSSProperties = {
  display: "grid",
  gap: 20,
};

const metaHeading: CSSProperties = {
  margin: "0 0 6px",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const metaText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(11, 26, 43, 0.74)",
};

const cardGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gap: 24,
};

const card: CSSProperties = {
  padding: "28px 26px",
  borderRadius: 28,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const cardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.6rem, 3vw, 2rem)",
  lineHeight: 1.08,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
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

const benefitList: CSSProperties = {
  display: "grid",
  gap: 18,
};

const benefitItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 18,
  lineHeight: 1.7,
  color: "#0B1A2B",
};
