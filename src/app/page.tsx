import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";

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

const programmes = [
  {
    title: "Fixed-departure touring series",
    text: "Consistent transport delivery across repeat departures, with reliable structure maintained throughout the season.",
  },
  {
    title: "Private group itineraries",
    text: "Flexible support for bespoke programmes requiring timing control, coordination and service continuity.",
  },
  {
    title: "Multi-region UK touring",
    text: "Structured routing across England, Scotland and Wales for operators managing broader touring coverage.",
  },
  {
    title: "UK & Ireland programmes",
    text: "Cross-border touring support delivered with clarity across programme stages, timings and regional transitions.",
  },
];

const supportList = [
  "Fixed-departure touring series",
  "Private group itineraries",
  "Multi-region UK touring",
  "UK & Ireland cross-border programmes",
  "London arrivals, departures and events",
];

const imagePanels = [
  {
    src: "/images/london-movement.jpg",
    alt: "Premium vehicle movement in London for inbound travel programmes",
    title: "London movements",
    text: "Airport arrivals, hotel transfers, city movements and event-linked transport delivered with precision.",
  },
  {
    src: "/images/uk-touring.jpg",
    alt: "Touring transport through the British countryside",
    title: "National touring",
    text: "Structured support for programmes moving through England, Scotland and Wales.",
  },
  {
    src: "/images/ireland-programme.jpg",
    alt: "Cross-border touring support across the UK and Ireland",
    title: "UK & Ireland routing",
    text: "Cross-border programme coordination with continuity across timings, regions and handovers.",
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
        <div style={containerNarrow}>
          <p style={eyebrow}>UK inbound ground transport</p>

          <h1 style={heroTitle}>
            Premium transport support for UK &amp; Ireland touring programmes.
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

          <div style={supportListWrapper}>
            <p style={supportEyebrow}>What we support</p>

            <ul style={supportListStyle}>
              {supportList.map((item) => (
                <li key={item} style={supportItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={imageSection}>
        <div style={container}>
          <div style={imageGrid} className="image-grid">
            {imagePanels.map((item) => (
              <article key={item.title} style={imageCard}>
                <div style={imageWrap}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 899px) 100vw, 33vw"
                    style={imageStyle}
                  />
                </div>

                <div style={imageCardBody}>
                  <p style={imageCardLabel}>Coverage</p>
                  <h2 style={imageCardTitle}>{item.title}</h2>
                  <p style={imageCardText}>{item.text}</p>
                </div>
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

      <section style={section}>
        <div style={container}>
          <div style={programmesGrid} className="feature-grid">
            {programmes.map((item) => (
              <article key={item.title} style={programmeCard}>
                <div style={accentLine} />
                <h2 style={programmeTitle}>{item.title}</h2>
                <p style={programmeText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={featureImageSection}>
        <div style={container}>
          <div style={featureImageSplit} className="split-grid">
            <div style={featureImageCopy}>
              <p style={sectionLabel}>Coverage</p>
              <h2 style={sectionTitle}>From London movements to national touring.</h2>
              <p style={sectionText}>
                We support itineraries spanning London, regional cities,
                countryside routes, hotel transfers, touring circuits and
                cross-country programmes. Whether the requirement is a single
                movement or a full touring series, delivery remains structured
                and commercially focused.
              </p>
            </div>

            <div style={featureImageWrap}>
              <Image
                src="/images/uk-touring.jpg"
                alt="Luxury touring transport support across the UK"
                fill
                sizes="(max-width: 899px) 100vw, 50vw"
                style={imageStyle}
              />
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
        <div style={containerNarrow}>
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

            <a href="/services" style={ctaLink}>
              View services →
            </a>
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
  maxWidth: 720,
  margin: "0 auto",
  padding: "0 20px",
};

const heroSection: CSSProperties = {
  padding: "100px 0 60px",
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
  margin: "0 0 18px",
  fontSize: "clamp(2.6rem, 8vw, 4.2rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.03em",
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#0B1A2B",
};

const heroDivider: CSSProperties = {
  width: 56,
  height: 2,
  background: "#C9A227",
  margin: "18px 0 22px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: "0 0 30px",
  fontSize: 18,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const heroActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  marginBottom: 20,
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "#F4F1EA",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(11,26,43,0.08)",
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  border: "1px solid rgba(11,26,43,0.12)",
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
  background: "transparent",
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

const supportListWrapper: CSSProperties = {
  marginTop: 36,
};

const supportEyebrow: CSSProperties = {
  margin: "0 0 16px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const supportListStyle: CSSProperties = {
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "grid",
  gap: 14,
};

const supportItem: CSSProperties = {
  fontSize: 18,
  lineHeight: 1.5,
  color: "#0B1A2B",
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  paddingBottom: 10,
};

const imageSection: CSSProperties = {
  padding: "0 0 100px",
};

const imageGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 24,
};

const imageCard: CSSProperties = {
  minWidth: 0,
};

const imageWrap: CSSProperties = {
  position: "relative",
  width: "100%",
  aspectRatio: "4 / 5",
  overflow: "hidden",
  borderRadius: 28,
  background: "#F4F1EA",
};

const imageStyle: CSSProperties = {
  objectFit: "cover",
};

const imageCardBody: CSSProperties = {
  paddingTop: 18,
};

const imageCardLabel: CSSProperties = {
  margin: "0 0 8px",
  fontSize: 12,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const imageCardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.5rem, 5vw, 2rem)",
  lineHeight: 1.12,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#0B1A2B",
};

const imageCardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.75,
  color: "rgba(11, 26, 43, 0.7)",
};

const section: CSSProperties = {
  padding: "100px 0",
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

const featureImageSection: CSSProperties = {
  padding: "100px 0",
  background: "#FBFAF7",
};

const featureImageSplit: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
  alignItems: "center",
};

const featureImageCopy: CSSProperties = {
  minWidth: 0,
};

const featureImageWrap: CSSProperties = {
  position: "relative",
  width: "100%",
  aspectRatio: "4 / 5",
  overflow: "hidden",
  borderRadius: 32,
  background: "#F4F1EA",
};

const ctaSection: CSSProperties = {
  padding: "80px 0 40px",
};

const ctaEyebrow: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2.2rem, 7vw, 3.6rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.025em",
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  color: "#0B1A2B",
};

const ctaText: CSSProperties = {
  margin: "0 0 26px",
  fontSize: 17,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.7)",
};

const ctaActions: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 18,
  alignItems: "center",
};

const ctaPrimaryButton: CSSProperties = {
  padding: "14px 22px",
  borderRadius: 999,
  background: "#F4F1EA",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(11,26,43,0.08)",
};

const ctaLink: CSSProperties = {
  fontSize: 15,
  color: "#0B1A2B",
  textDecoration: "none",
};
