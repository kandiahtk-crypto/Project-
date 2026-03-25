import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "Tour Operator Transport UK | Group Transport for DMCs & Travel Planners",
  description:
    "Tour operator transport in the UK for DMCs and travel planners. Structured group transport across England, Scotland and Ireland for inbound touring programmes.",
  alternates: {
    canonical: "/tour-operator-transport-uk",
  },
  openGraph: {
    title: "Tour Operator Transport UK | UK Inbound Ground Transport",
    description:
      "Structured UK group transport for tour operators, DMCs and travel planners across England, Scotland and Ireland.",
    url: `${siteUrl}/tour-operator-transport-uk`,
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
      name: "Do you provide transport for tour operators in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide structured group transport for tour operators managing UK and Ireland touring programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with DMCs and travel planners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our services are designed for tour operators, DMCs and travel planners coordinating organised group itineraries.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support multi-region touring programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support programmes across England, Scotland and Ireland, including gateway arrivals, regional touring and final departures.",
      },
    },
  ],
};

export default function TourOperatorTransportUKPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={hero}>
        <p style={eyebrow}>Tour operator transport UK</p>

        <h1 style={title}>
          UK group transport for tour operators, DMCs and travel planners.
        </h1>

        <p style={text}>
          Structured transport support for inbound touring programmes across
          England, Scotland and Ireland, including airport arrivals, cruise
          movements, regional touring and multi-day itinerary flow.
        </p>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request transport support
          </a>
          <a href="/uk-ireland-touring" style={secondaryLink}>
            UK &amp; Ireland touring →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Built for professional travel buyers</h2>

        <p style={text}>
          We support commercially structured travel programmes rather than
          individual bookings, aligning transport with itinerary pace, routing,
          guest handling and regional sequencing.
        </p>

        <ul style={list}>
          <li>Tour operator group transport across the UK and Ireland</li>
          <li>DMC transport coordination for inbound itineraries</li>
          <li>Airport and cruise-linked programme movements</li>
          <li>Multi-day touring support across multiple regions</li>
          <li>Fixed-departure and private group programme delivery</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Transport coverage across the UK &amp; Ireland</h2>

        <div style={linkGrid}>
          <a href="/england-touring" style={linkCard}>
            England touring →
          </a>
          <a href="/scotland-programmes" style={linkCard}>
            Scotland programmes →
          </a>
          <a href="/ireland-touring" style={linkCard}>
            Ireland touring →
          </a>
          <a href="/heathrow-group-transfers" style={linkCard}>
            Heathrow group transfers →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>What we help deliver</h2>

        <ul style={list}>
          <li>London arrivals and departures</li>
          <li>Heathrow and gateway coordination</li>
          <li>Southampton cruise transfer support</li>
          <li>Regional touring across England, Scotland and Ireland</li>
          <li>Structured programme delivery for organised groups</li>
        </ul>
      </section>

      <section style={cta}>
        <h2 style={heading}>Need a transport partner for UK touring?</h2>

        <p style={text}>
          Share your itinerary, dates and group size. We’ll help shape a clear
          transport plan aligned to your programme.
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
