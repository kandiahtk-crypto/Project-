import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "UK Inbound Ground Transport | Touring, Group & Chauffeur Transport UK & Ireland",
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners. Fixed departures, private groups, London movements and multi-region touring support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "UK Inbound Ground Transport | Touring, Group & Chauffeur Transport UK & Ireland",
    description:
      "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UK Inbound Ground Transport | Touring, Group & Chauffeur Transport UK & Ireland",
    description:
      "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Evershine Transport Limited",
  alternateName: "UK Inbound Ground Transport",
  url: siteUrl,
  email: "info@ukinboundgroundtransport.com",
  telephone: "+44 20 8629 2776",
  vatID: "388919914",
  identifier: "13507458",
  areaServed: ["United Kingdom", "Ireland"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@ukinboundgroundtransport.com",
      telephone: "+44 20 8629 2776",
      areaServed: ["GB", "IE"],
      availableLanguage: ["en"],
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <section style={hero}>
        <div style={container}>
          <div style={heroGrid}>
            <div>
              <p style={eyebrow}>UK inbound ground transport</p>

              <h1 style={heroTitle}>
                Premium transport support for UK & Ireland touring programmes.
              </h1>

              <p style={heroText}>
                We support tour operators, DMCs and travel planners with
                programme-led transport delivery across fixed-departure series,
                private group touring, London movements and multi-region
                itineraries.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButton}>
                  Request transport support
                </a>
                <a href="/programmes" style={secondaryButton}>
                  Explore programmes
                </a>
              </div>

              <div style={heroMetaRow}>
                <span style={heroMeta}>UK • Ireland • London movements</span>
                <span style={heroMeta}>Company Reg: 13507458</span>
                <span style={heroMeta}>VAT: 388919914</span>
              </div>
            </div>

            <div style={heroPanel}>
              <p style={panelEyebrow}>What we support</p>
              <ul style={panelList}>
                <li style={panelItem}>Fixed-departure touring series</li>
                <li style={panelItem}>Private group itineraries</li>
                <li style={panelItem}>Multi-region UK touring</li>
                <li style={panelItem}>UK & Ireland cross-border programmes</li>
                <li style={panelItem}>London arrivals, departures and events</li>
              </ul>
            </div>
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
            delivery: aligning vehicles, routing and operational planning to the
            pace, shape and standards of inbound travel programmes across the UK
            and Ireland.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <div style={featureGrid}>
            <article style={featureCard}>
              <div style={accentBar} />
              <h2 style={featureTitle}>Fixed-departure series</h2>
              <p style={featureText}>
                Consistent transport support across repeated touring departures,
                with reliable structure throughout the season.
              </p>
            </article>

            <article style={featureCard}>
              <div style={accentBar} />
              <h2 style={featureTitle}>Private group touring</h2>
              <p style={featureText}>
                Flexible programme support for bespoke itineraries requiring
                coordination, timing control and service continuity.
              </p>
            </article>

            <article style={featureCard}>
              <div style={accentBar} />
              <h2 style={featureTitle}>Multi-region UK touring</h2>
              <p style={featureText}>
                Routed transport support across England, Scotland and Wales for
                operators managing wider programme coverage.
              </p>
            </article>

            <article style={featureCard}>
              <div style={accentBar} />
              <h2 style={featureTitle}>UK & Ireland programmes</h2>
              <p style={featureText}>
                Cross-border touring support with clear coordination across
                programme stages and regional handovers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitSection}>
            <div>
              <p style={sectionLabel}>Coverage</p>
              <h2 style={sectionTitle}>From London movements to national touring.</h2>
            </div>

            <div>
              <p style={sectionText}>
                We support itineraries spanning London, regional cities,
                countryside routes, hotel transfers, touring circuits and
                cross-country programmes. Whether the requirement is a single
                movement or a full touring series, delivery stays structured and
                commercially focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Who we work with</p>
          <h2 style={sectionTitle}>Built for professional travel buyers.</h2>
          <p style={sectionText}>
            We are positioned for tour operators, destination management
            companies, travel planners and programme managers who need transport
            support that fits a wider operational plan, not just a standalone
            vehicle booking.
          </p>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={container}>
          <div style={ctaBox}>
            <p style={ctaEyebrow}>Start a conversation</p>
            <h2 style={ctaTitle}>
              Planning a UK or Ireland programme that needs transport support?
            </h2>
            <p style={ctaText}>
              Tell us about your programme, routing, timings and service needs.
              We’ll help shape a structured transport approach around it.
            </p>

            <div style={ctaActions}>
              <a href="/contact" style={primaryButton}>
                Contact us
              </a>
              <a href="/services" style={secondaryButtonAlt}>
                View services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const container: CSSProperties = {
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 24px",
};

const containerNarrow: CSSProperties = {
  width: "100%",
  maxWidth: 820,
  margin: "0 auto",
  padding: "0 24px",
};

const hero: CSSProperties = {
  padding: "72px 0 56px",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.35fr) minmax(280px, 0.65fr)",
  gap: 32,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.58)",
};

const heroTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 820,
  fontSize: "clamp(3rem, 7vw, 5.6rem)",
  lineHeight: 0.98,
  letterSpacing: "-0.045em",
  fontWeight: 500,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const heroText: CSSProperties = {
  margin: "0 0 28px",
  maxWidth: 700,
  fontSize: 19,
  lineHeight: 1.75,
  color: "rgba(11, 26, 43, 0.74)",
};

const heroActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 14,
  marginBottom: 22,
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 50,
  padding: "0 20px",
  borderRadius: 999,
  background: "#0B1A2B",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 600,
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 50,
  padding: "0 20px",
  borderRadius: 999,
  border: "1px solid rgba(11, 26, 43, 0.14)",
  background: "#FFFFFF",
  color: "#0B1A2B",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 600,
};

const secondaryButtonAlt: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 50,
  padding: "0 20px",
  borderRadius: 999,
  border: "1px solid rgba(255, 255, 255, 0.18)",
  background: "transparent",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 600,
};

const heroMetaRow: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
};

const heroMeta: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#F7F5F0",
  border: "1px solid rgba(11, 26, 43, 0.08)",
  color: "rgba(11, 26, 43, 0.72)",
  fontSize: 13,
};

const heroPanel: CSSProperties = {
  background: "#F7F5F0",
  border: "1px solid rgba(11, 26, 43, 0.08)",
  borderRadius: 28,
  padding: 24,
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 16px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.58)",
};

const panelList: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "grid",
  gap: 12,
};

const panelItem: CSSProperties = {
  paddingBottom: 12,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 16,
  lineHeight: 1.6,
  color: "#0B1A2B",
};

const section: CSSProperties = {
  padding: "56px 0",
};

const sectionSoft: CSSProperties = {
  padding: "56px 0",
  background: "#FBFAF7",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.58)",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 16px",
  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 500,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionText: CSSProperties = {
  margin: 0,
  fontSize: 18,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const featureGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 24,
};

const featureCard: CSSProperties = {
  padding: "0 0 18px",
};

const accentBar: CSSProperties = {
  width: 72,
  height: 3,
  borderRadius: 999,
  marginBottom: 18,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const featureTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
  lineHeight: 1.08,
  fontWeight: 500,
  letterSpacing: "-0.03em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const featureText: CSSProperties = {
  margin: 0,
  maxWidth: 480,
  fontSize: 17,
  lineHeight: 1.75,
  color: "rgba(11, 26, 43, 0.72)",
};

const splitSection: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  gap: 32,
  alignItems: "start",
};

const ctaSection: CSSProperties = {
  padding: "56px 0 24px",
};

const ctaBox: CSSProperties = {
  background: "#0B1A2B",
  color: "#FFFFFF",
  borderRadius: 32,
  padding: "36px 24px",
};

const ctaEyebrow: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.64)",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 500,
  fontFamily: "var(--font-serif)",
  color: "#FFFFFF",
};

const ctaText: CSSProperties = {
  margin: "0 0 24px",
  maxWidth: 760,
  fontSize: 18,
  lineHeight: 1.8,
  color: "rgba(255, 255, 255, 0.76)",
};

const ctaActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 14,
};
