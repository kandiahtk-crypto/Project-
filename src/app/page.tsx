import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "UK Inbound Ground Transport | Touring & Group Transport UK & Ireland",
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners. Structured, reliable programme-led delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "UK Inbound Ground Transport | Touring & Group Transport UK & Ireland",
    description:
      "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const supportItems = [
  "Fixed-departure touring series",
  "Private group itineraries",
  "Multi-region UK touring",
  "UK & Ireland cross-border programmes",
  "London arrivals, departures and events",
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>UK inbound ground transport</p>

          <h1 style={heroTitle}>
            Premium transport support for UK & Ireland touring programmes.
          </h1>

          <div style={divider} />

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

          <div style={metaRow}>
            <span style={metaPill}>UK • Ireland • London movements</span>
          </div>
        </div>
      </section>

      {/* WHAT WE SUPPORT */}
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

      {/* WHY */}
      <section style={sectionSoft}>
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

      {/* COVERAGE SPLIT */}
      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Coverage</p>

              <h2 style={sectionTitle}>
                From London movements to national touring.
              </h2>
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

      {/* WHO */}
      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Who we work with</p>

          <h2 style={sectionTitle}>
            Built for professional travel buyers.
          </h2>

          <p style={sectionText}>
            We are positioned for tour operators, destination management
            companies, travel planners and programme managers who need transport
            support that fits a wider operational plan, not just a standalone
            vehicle booking.
          </p>
        </div>
      </section>

      {/* CTA (NO BLACK BOX) */}
      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning a UK or Ireland programme that needs transport support?
          </h2>

          <p style={sectionText}>
            Tell us about your routing, timings and service requirements. We
            will help shape a structured transport approach around your
            programme.
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
  padding: "0 24px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "0 20px",
};

const heroSection: CSSProperties = {
  padding: "clamp(40px, 6vw, 80px) 0 clamp(48px, 6vw, 72px)",
};
  


const eyebrow: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const heroTitle: CSSProperties = {
  fontSize: "clamp(2.6rem, 8vw, 4.2rem)",
  fontFamily: "var(--font-serif)",
  lineHeight: 1.05,
  margin: "12px 0 16px",
};

const divider: CSSProperties = {
  width: 50,
  height: 2,
  background: "#C9A227",
  margin: "16px 0 24px",
};

const heroText: CSSProperties = {
  fontSize: 18,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
  marginBottom: 30,
};

const heroActions: CSSProperties = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
};

const primaryButton: CSSProperties = {
  padding: "14px 22px",
  borderRadius: 999,
  background: "#F4F1EA",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
};

const secondaryButton: CSSProperties = {
  padding: "14px 22px",
  borderRadius: 999,
  border: "1px solid rgba(11,26,43,0.12)",
  textDecoration: "none",
  color: "#0B1A2B",
};

const metaRow: CSSProperties = {
  marginTop: 20,
};

const metaPill: CSSProperties = {
  padding: "6px 12px",
  borderRadius: 999,
  background: "#F4F1EA",
  fontSize: 13,
};

const section: CSSProperties = {
  padding: "100px 0",
};

const sectionSoft: CSSProperties = {
  padding: "100px 0",
  background: "#FBFAF7",
};

const sectionLabel: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
  marginBottom: 12,
};

const sectionTitle: CSSProperties = {
  fontSize: "clamp(2rem, 7vw, 3.6rem)",
  fontFamily: "var(--font-serif)",
  lineHeight: 1.1,
  marginBottom: 16,
};

const sectionText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
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
  borderBottom: "1px solid rgba(0,0,0,0.08)",
  paddingBottom: 10,
};

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 30,
};

const ctaSection: CSSProperties = {
  padding: "80px 0 40px",
};

const ctaTitle: CSSProperties = {
  fontSize: "clamp(2.2rem, 7vw, 3.4rem)",
  fontFamily: "var(--font-serif)",
  margin: "12px 0 18px",
};

const ctaActions: CSSProperties = {
  marginTop: 24,
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
};

const linkButton: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
};
