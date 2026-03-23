import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "UK Inbound Ground Transport | Touring & Group Transport Across the UK & Ireland",
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners. Fixed-departure touring, private groups, London movements and multi-region programme support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "UK Inbound Ground Transport | Touring & Group Transport Across the UK & Ireland",
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
      "UK Inbound Ground Transport | Touring & Group Transport Across the UK & Ireland",
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

const supportItems = [
  "Fixed-departure touring series",
  "Private group itineraries",
  "Multi-region UK touring",
  "UK & Ireland cross-border programmes",
  "London arrivals, departures and events",
];

const programmeItems = [
  {
    title: "Fixed-departure touring",
    text: "Consistent transport support across repeat departures, with reliable structure maintained throughout the season.",
  },
  {
    title: "Private group itineraries",
    text: "Flexible programme support for bespoke travel requiring timing control, coordination and service continuity.",
  },
  {
    title: "Multi-region UK touring",
    text: "Structured routing across England, Scotland and Wales for operators managing wider national coverage.",
  },
  {
    title: "UK & Ireland programmes",
    text: "Cross-border touring support delivered with clarity across programme stages, timings and regional transitions.",
  },
];

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <section style={heroSection}>
        <div style={container}>
          <div style={heroGrid} className="hero-grid">
            <div style={heroMain}>
              <p style={eyebrow}>UK inbound ground transport</p>

              <h1 style={heroTitle}>
                Premium transport support for UK & Ireland touring programmes.
              </h1>

              <div style={heroDivider} />

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
              </div>
            </div>

            <aside style={heroPanel} aria-label="What we support">
              <p style={panelEyebrow}>What we support</p>
              <ul style={panelList}>
                {supportItems.map((item) => (
                  <li key={item} style={panelItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
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

      <section style={section}>
        <div style={container}>
          <div style={programmesGrid} className="feature-grid">
            {programmeItems.map((item) => (
              <article key={item.title} style={programmeCard}>
                <div style={accentLine} />
                <h2 style={programmeTitle}>{item.title}</h2>
                <p style={programmeText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <div style={splitSection} className="split-grid">
            <div>
              <p style={sectionLabel}>Coverage</p>
              <h2 style={sectionTitle}>From London movements to national touring.</h2>
            </div>

            <div>
              <p style={sectionText}>
                We support itineraries spanning London, regional cities,
                countryside routes, hotel transfers, touring circuits and
                cross-country programmes. Whether the requirement is a single
                movement or a full touring series, delivery remains structured
                and commercially focused.
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
              Tell us about your routing, timings and service requirements. We
              will help shape a structured transport approach around the
              programme.
            </p>

            <div style={ctaActions}>
              <a href="/contact" style={ctaPrimaryButton}>
                Contact us
              </a>
              <a href="/services" style={ctaSecondaryButton}>
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

const heroSection: CSSProperties = {
  padding: "36px 0 44px",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
  alignItems: "start",
};

const heroMain: CSSProperties = {
  minWidth: 0,
};

const eyebrow: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.56)",
};

const heroTitle: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: "clamp(2rem, 7.4vw, 4.4rem)",
  lineHeight: 1.12,
  letterSpacing: "-0.02em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const heroDivider: CSSProperties = {
  width: 48,
  height: 2,
  margin: "18px 0 22px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const heroText: CSSProperties = {
  margin: "0 0 28px",
  maxWidth: 640,
  fontSize: 17,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.74)",
};

const heroActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 14,
  marginBottom: 20,
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "#071A34",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 600,
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  border: "1px solid rgba(11, 26, 43, 0.12)",
  background: "transparent",
  color: "#0B1A2B",
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
  background: "rgba(11, 26, 43, 0.04)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  color: "rgba(11, 26, 43, 0.72)",
  fontSize: 13,
};

const heroPanel: CSSProperties = {
  width: "100%",
  minWidth: 0,
  background: "#F7F5F0",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  borderRadius: 32,
  padding: "28px 24px",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 16px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.56)",
};

const panelList: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "grid",
  gap: 0,
};

const panelItem: CSSProperties = {
  padding: "18px 0",
  fontSize: 16,
  lineHeight: 1.55,
  color: "#0B1A2B",
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
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
  color: "rgba(11, 26, 43, 0.56)",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 16px",
  maxWidth: 720,
  fontSize: "clamp(2rem, 7.8vw, 3.8rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 640,
  fontSize: 17,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const programmesGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
};

const programmeCard: CSSProperties = {
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

const programmeTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.55rem, 6vw, 2.2rem)",
  lineHeight: 1.14,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const programmeText: CSSProperties = {
  margin: 0,
  maxWidth: 500,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const splitSection: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 22,
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
  maxWidth: 760,
  fontSize: "clamp(2rem, 7.8vw, 3.4rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#FFFFFF",
};

const ctaText: CSSProperties = {
  margin: "0 0 24px",
  maxWidth: 760,
  fontSize: 17,
  lineHeight: 1.85,
  color: "rgba(255, 255, 255, 0.76)",
};

const ctaActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 14,
};

const ctaPrimaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#0B1A2B",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 600,
};

const ctaSecondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  border: "1px solid rgba(255, 255, 255, 0.18)",
  background: "transparent",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: 15,
  fontWeight: 600,
};
