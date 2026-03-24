import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners. Fixed-departure touring, private groups, cruise port support, London movements and multi-region programmes across England, Scotland and Ireland.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "UK Inbound Ground Transport | Premium UK & Ireland Touring Support",
    description:
      "Programme-led transport support across England, Scotland and Ireland for tour operators, DMCs and travel planners.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const supportItems = [
  "Fixed-departure touring series",
  "Private group itineraries",
  "Cruise port support",
  "London arrivals, departures and events",
  "England, Scotland and Ireland programmes",
  "Multi-region UK & Ireland touring",
];

const regions = [
  {
    title: "United States",
    href: "/markets/usa",
    text: "Supporting US-based tour operators and travel planners delivering structured UK and Ireland touring programmes.",
  },
  {
    title: "Europe",
    href: "/markets/europe",
    text: "Working with European partners managing inbound programmes requiring reliable, multi-region coordination.",
  },
  {
    title: "China",
    href: "/markets/china",
    text: "Supporting Chinese outbound travel specialists with structured touring logistics and programme delivery.",
  },
  {
    title: "India",
    href: "/markets/india",
    text: "Working with Indian travel companies delivering premium UK and Ireland itineraries with clear operational flow.",
  },
];

const sectors = [
  {
    title: "England heritage touring",
    text: "London, Oxford, Bath, Cambridge, York and the Lake District remain central to classic Britain itineraries.",
    href: "/england-touring",
  },
  {
    title: "Scotland programmes",
    text: "Edinburgh, Glasgow, Loch Ness and the Highlands require realistic daily planning and operational awareness.",
    href: "/scotland-programmes",
  },
  {
    title: "Ireland touring circuits",
    text: "Dublin, Galway, Killarney and the Cliffs of Moher continue to feature strongly in Ireland touring routes.",
    href: "/ireland-touring",
  },
  {
    title: "Cruise port support",
    text: "Transport coordination for cruise-related arrivals, departures, shore-side touring and onward programme movements.",
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>UK inbound ground transport</p>

          <h1 style={heroTitle}>
            Premium transport support for UK &amp; Ireland touring programmes.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support tour operators, DMCs and travel planners with
            programme-led transport delivery across fixed-departure series,
            private groups, cruise port support, London movements and
            multi-region itineraries across England, Scotland and Ireland.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Request transport support
            </a>
            <a href="/programmes" style={secondaryButton}>
              Explore programmes
            </a>
          </div>

          <div style={metaRow}>
            <span style={metaPill}>
              UK • Ireland • Cruise ports • London movements
            </span>
          </div>
        </div>
      </section>

      <section style={section}>
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

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>International</p>
              <h2 style={sectionTitle}>
                Supporting international partners across key inbound markets.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We work with tour operators, DMCs and travel planners globally,
                supporting inbound UK and Ireland programmes from major source
                markets including the United States, Europe, China and India.
              </p>
            </div>
          </div>

          <div style={regionGrid}>
            {regions.map((region) => (
              <article key={region.title} style={regionItem}>
                <h3 style={regionTitle}>
                  <a href={region.href} style={regionLink}>
                    {region.title}
                  </a>
                </h3>
                <p style={regionText}>{region.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Why operators choose us</p>
          <h2 style={sectionTitle}>
            Structured delivery, clear coordination, dependable execution.
          </h2>
          <p style={sectionText}>
            Our focus is not generic transport booking. We support programme
            delivery by aligning vehicles, routing and operational planning to
            the pace, shape and service expectations of inbound touring across
            the UK and Ireland.
          </p>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={featureGrid} className="feature-grid">
            {sectors.map((item) => (
              <a key={item.title} href={item.href} style={featureCardLink}>
                <article style={featureCard}>
                  <div style={accentLine} />
                  <div style={featureTitleRow}>
                    <h2 style={featureTitle}>{item.title}</h2>
                    <span style={featureArrow}>→</span>
                  </div>
                  <p style={featureText}>{item.text}</p>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Coverage</p>
              <h2 style={sectionTitle}>
                From London and cruise ports to wider England, Scotland and
                Ireland touring.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We support itineraries spanning London, regional cities,
                countryside routes, hotel transfers, cruise-related movements
                and cross-country touring. Whether the requirement is a single
                movement or a full touring series, delivery remains structured
                and commercially focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Who we work with</p>
          <h2 style={sectionTitle}>Built for professional travel buyers.</h2>
          <p style={sectionText}>
            We are positioned for tour operators, destination management
            companies, cruise specialists, travel planners and programme
            managers who need transport support that fits a wider operational
            plan, not just a standalone vehicle booking.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Programme structure</p>

          <h2 style={sectionTitle}>
            Typical touring routes and itinerary flow.
          </h2>

          <p style={sectionText}>
            Our work supports established touring structures used by
            international operators across England, Scotland and Ireland, from
            gateway arrivals and regional routing to multi-stop programme
            delivery.
          </p>

          <div style={itineraryTeaser}>
            <p style={teaserEyebrow}>Example England itinerary</p>
            <p style={teaserText}>
              London arrivals, Oxford, Bath, Cambridge, York and the Lake
              District remain central to many England touring programmes.
            </p>
            <a href="/england-touring" style={teaserLink}>
              View example programme →
            </a>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>
            Planning a UK or Ireland programme that needs transport support?
          </h2>
          <p style={sectionText}>
            Tell us about your routing, timings, port calls and programme
            requirements. We will help shape a structured transport approach
            around your itinerary.
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

const metaRow: CSSProperties = {
  marginTop: 20,
};

const metaPill: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#F2EEE6",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  fontSize: 13,
  color: "rgba(11, 26, 43, 0.72)",
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

const regionGrid: CSSProperties = {
  marginTop: 48,
  display: "grid",
  gap: 28,
};

const regionItem: CSSProperties = {
  paddingBottom: 20,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const regionTitle: CSSProperties = {
  margin: "0 0 8px",
  fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
  fontFamily: "var(--font-serif)",
  letterSpacing: "-0.02em",
  color: "#0B1A2B",
  fontWeight: 400,
};

const regionLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  display: "inline-block",
};

const regionText: CSSProperties = {
  margin: 0,
  maxWidth: 520,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const featureCardLink: CSSProperties = {
  textDecoration: "none",
  display: "block",
};

const featureCard: CSSProperties = {
  minWidth: 0,
  paddingBottom: 18,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  cursor: "pointer",
};

const featureTitleRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
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
  flex: 1,
};

const featureArrow: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "rgba(11, 26, 43, 0.5)",
  paddingTop: 6,
};

const featureText: CSSProperties = {
  margin: 0,
  maxWidth: 520,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const itineraryTeaser: CSSProperties = {
  marginTop: 32,
  padding: "28px 24px",
  borderRadius: 24,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
};

const teaserEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const teaserText: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const teaserLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
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
