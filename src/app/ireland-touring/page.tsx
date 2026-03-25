import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "Ireland Touring Programmes | Group Transport for Tour Operators & DMCs",
  description:
    "Ireland touring programmes for tour operators, DMCs and travel planners. Structured group transport across Dublin, Galway, Killarney and wider Ireland touring routes.",
  alternates: {
    canonical: "/ireland-touring",
  },
  openGraph: {
    title: "Ireland Touring Programmes | UK Inbound Ground Transport",
    description:
      "Structured Ireland touring transport for tour operators, DMCs and travel planners across Dublin, Galway and Killarney itineraries.",
    url: `${siteUrl}/ireland-touring`,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you support Ireland touring programmes for groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support structured Ireland touring programmes for tour operators, DMCs and travel planners managing organised group itineraries.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support Dublin, Galway and Killarney routes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support routing across Dublin, Galway, Killarney, the Ring of Kerry, Cliffs of Moher and wider Ireland touring circuits.",
      },
    },
    {
      "@type": "Question",
      name: "Do you connect Ireland with UK touring programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ireland can be delivered as a standalone programme or integrated with wider UK touring across England and Scotland.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our Ireland programme support is positioned for tour operators, DMCs and travel planners managing structured group programmes.",
      },
    },
  ],
};

export default function IrelandTouringPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={hero}>
        <p style={eyebrow}>Ireland touring programmes</p>

        <h1 style={title}>
          Ireland group transport for structured touring programmes.
        </h1>

        <p style={text}>
          Programme-led group transport across Dublin, Galway, Killarney, the
          Ring of Kerry and wider Ireland touring routes for tour operators,
          DMCs and travel planners.
        </p>

        {/* IMAGE INSERTED */}
        <div style={imageWrap}>
          <img
            src="/ireland.jpg"
            alt="Ireland touring landscape for group travel programmes"
            style={image}
          />
        </div>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request Ireland transport
          </a>
          <a href="/programmes" style={secondaryLink}>
            View programmes →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Ireland touring transport support</h2>

        <p style={text}>
          Ireland programmes require clear routing, balanced daily journeys and
          structured coordination between regional stops. We support touring
          flows aligned to guest experience and operational delivery.
        </p>

        <ul style={list}>
          <li>Dublin arrivals and departures</li>
          <li>Galway and west coast touring logistics</li>
          <li>Killarney and Ring of Kerry routing</li>
          <li>Cliffs of Moher and scenic touring movements</li>
          <li>Multi-day Ireland touring circuits</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Typical Ireland touring routes</h2>

        <p style={text}>
          Ireland touring programmes often follow established circular routes,
          balancing scenic touring with realistic travel times and hotel
          positioning.
        </p>

        <ul style={list}>
          <li>Dublin to Galway via central Ireland</li>
          <li>Galway to Cliffs of Moher and west coast touring</li>
          <li>Galway to Killarney via Limerick</li>
          <li>Killarney and Ring of Kerry touring circuits</li>
          <li>Return routing to Dublin for departure</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Built for organised group travel</h2>

        <p style={text}>
          Our Ireland support is designed for professional travel buyers who
          need transport delivery to feel structured, commercially aware and
          dependable throughout the full itinerary.
        </p>

        <ul style={list}>
          <li>Tour operators running Ireland touring series</li>
          <li>DMCs managing multi-stop Ireland itineraries</li>
          <li>Travel planners coordinating premium group travel</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Ireland within wider UK & Ireland programmes</h2>

        <p style={text}>
          Ireland is often combined with England and Scotland touring. We support
          seamless transitions between regions, aligning transport across ferry
          connections, flights and programme flow.
        </p>

        <ul style={list}>
          <li>Ireland with Scotland touring programmes</li>
          <li>Ireland combined with England heritage routes</li>
          <li>Multi-country UK & Ireland touring itineraries</li>
          <li>Integrated programme planning across regions</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Related transport services</h2>

        <div style={linkGrid}>
          <a href="/programmes" style={linkCard}>
            Touring programmes →
          </a>

          <a href="/scotland-programmes" style={linkCard}>
            Scotland programmes →
          </a>

          <a href="/england-touring" style={linkCard}>
            England touring →
          </a>

          <a href="/services" style={linkCard}>
            UK transport services →
          </a>
        </div>
      </section>

      <section style={cta}>
        <h2 style={heading}>Planning an Ireland programme?</h2>

        <p style={text}>
          Share your routing, travel dates and group size. We’ll structure a
          clear Ireland transport plan aligned to your wider programme.
        </p>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request proposal
          </a>
          <a href="/" style={secondaryLink}>
            Return to homepage →
          </a>
        </div>
      </section>
    </main>
  );
}

/* ===== STYLES (UNCHANGED SYSTEM) ===== */

const container: CSSProperties = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "40px 24px 80px",
};

const hero: CSSProperties = {
  marginBottom: 80,
};

const section: CSSProperties = {
  marginBottom: 80,
};

const sectionSoft: CSSProperties = {
  marginBottom: 80,
  padding: "32px",
  background: "#F2F5F9",
  borderRadius: 20,
};

const eyebrow: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#5B7C99",
};

const title: CSSProperties = {
  fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
  lineHeight: 1.06,
  margin: "12px 0 20px",
  fontWeight: 700,
  color: "#10263C",
  letterSpacing: "-0.03em",
};

const heading: CSSProperties = {
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  marginBottom: 16,
  fontWeight: 700,
  color: "#10263C",
};

const text: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.75)",
};

const list: CSSProperties = {
  marginTop: 16,
  paddingLeft: 18,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.78)",
};

const imageWrap: CSSProperties = {
  marginTop: 28,
  borderRadius: 22,
  overflow: "hidden",
  boxShadow: "0 18px 40px rgba(16, 38, 60, 0.12)",
};

const image: CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};

const cta: CSSProperties = {
  padding: "40px",
  background: "#EEF3F8",
  borderRadius: 24,
  textAlign: "center",
};

const ctaRow: CSSProperties = {
  marginTop: 20,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 24px",
  borderRadius: 999,
  background: "#10263C",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
};

const secondaryLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
};

const linkGrid: CSSProperties = {
  display: "grid",
  gap: 12,
};

const linkCard: CSSProperties = {
  padding: 16,
  borderRadius: 14,
  background: "#fff",
  border: "1px solid rgba(18,36,56,0.1)",
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
};
