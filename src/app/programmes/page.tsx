import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com/programmes";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Programme-led transport support across fixed-departure series, private group touring, multi-region UK itineraries and UK & Ireland touring programmes.",
  alternates: {
    canonical: "/programmes",
  },
  openGraph: {
    title: "Programmes | UK Inbound Ground Transport",
    description:
      "Programme-led transport support across fixed-departure series, private group touring, multi-region UK itineraries and UK & Ireland touring programmes.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const programmes = [
  {
    title: "Fixed-departure series",
    description:
      "Consistent, repeatable transport delivery across scheduled touring departures, with dependable structure maintained throughout the programme lifecycle.",
  },
  {
    title: "Private group touring",
    description:
      "Tailored support for private itineraries requiring flexibility, timing control, service continuity and clear operational coordination.",
  },
  {
    title: "Multi-region UK touring",
    description:
      "Structured routing across England, Scotland and Wales for programmes that require broader national coverage and reliable sequencing.",
  },
  {
    title: "UK & Ireland programmes",
    description:
      "Cross-border touring support with clear programme flow, consistent delivery and dependable coordination across regional transitions.",
  },
  {
    title: "London arrivals, departures and events",
    description:
      "City-based support for airport arrivals, hotel movements, event-linked transport and timed programme activity in London.",
  },
];

const capabilities = [
  "Programme-aligned routing",
  "Timing and movement coordination",
  "Structured regional sequencing",
  "Cross-border touring support",
  "Fixed-departure consistency",
  "Private group flexibility",
];

const programmesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Programme-led transport support",
  provider: {
    "@type": "Organization",
    name: "Evershine Transport Limited",
    alternateName: "UK Inbound Ground Transport",
  },
  areaServed: ["United Kingdom", "Ireland"],
  serviceType: [
    "Fixed-departure touring support",
    "Private group touring transport",
    "Multi-region UK touring transport",
    "UK and Ireland touring transport",
  ],
  url: siteUrl,
};

export default function ProgrammesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programmesJsonLd),
        }}
      />

      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Programmes</p>

          <h1 style={heroTitle}>
            Programme-led transport support across the UK &amp; Ireland.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support operators and planners with structured transport delivery
            across fixed-departure series, private itineraries, London
            movements, regional touring and cross-border programmes.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Request transport support
            </a>
            <a href="/services" style={secondaryButton}>
              View services
            </a>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={introGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>What we support</p>
              <h2 style={sectionTitle}>
                Transport structured around programme flow, not isolated
                movements.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Touring programmes require consistency across timings, routing,
                arrivals, departures and regional handovers. Our role is to
                support that wider flow with transport planning and delivery
                designed to strengthen the itinerary as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <div style={list}>
            {programmes.map((programme) => (
              <article key={programme.title} style={item}>
                <div style={accentLine} />
                <div style={itemContent}>
                  <h2 style={itemTitle}>{programme.title}</h2>
                  <p style={itemText}>{programme.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Capabilities</p>
              <h2 style={sectionTitle}>
                Delivery shaped by timing, sequencing and operational clarity.
              </h2>
            </div>

            <div>
              <div style={capabilityGrid}>
                {capabilities.map((capability) => (
                  <div key={capability} style={capabilityItem}>
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>How we think</p>
              <h2 style={sectionTitle}>
                A programme is only as strong as the reliability of its
                movements.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We do not treat transport as a disconnected booking exercise.
                Routing, timing and delivery need to support the pace and
                structure of the broader programme. That is where consistency,
                clarity and dependable execution matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Need transport coordination for an upcoming programme?
          </h2>

          <p style={sectionText}>
            Tell us about your routing, timings and operational requirements,
            and we’ll help shape the right support structure.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/about" style={secondaryLink}>
              Learn more about us →
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
  padding: "120px 0 72px",
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

const introGrid: CSSProperties = {
  display: "grid",
  gap: 40,
  alignItems: "start",
};

const splitGrid: CSSProperties = {
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
  fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
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

const list: CSSProperties = {
  display: "grid",
  gap: 30,
};

const item: CSSProperties = {
  display: "grid",
  gap: 14,
  paddingBottom: 20,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const accentLine: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const itemContent: CSSProperties = {
  minWidth: 0,
};

const itemTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.55rem, 4vw, 2.05rem)",
  lineHeight: 1.12,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const itemText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const capabilityGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 14,
};

const capabilityItem: CSSProperties = {
  padding: "14px 0",
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 17,
  lineHeight: 1.7,
  color: "#0B1A2B",
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

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
