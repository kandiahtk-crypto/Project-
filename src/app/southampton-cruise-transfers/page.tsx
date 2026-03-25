import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "Southampton Cruise Transfers | Group Transport for Tour Operators & DMCs",
  description:
    "Southampton cruise transfers for tour operators, DMCs and travel planners. Group transport for cruise arrivals, departures and UK touring programmes from Southampton.",
  alternates: {
    canonical: "/southampton-cruise-transfers",
  },
  openGraph: {
    title: "Southampton Cruise Transfers | UK Group Transport",
    description:
      "Structured Southampton cruise transport for tour operators, DMCs and travel planners across UK touring programmes.",
    url: `${siteUrl}/southampton-cruise-transfers`,
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
      name: "Do you provide Southampton cruise transfers for groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialise in group transport for cruise arrivals, departures and touring programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support pre and post cruise touring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We connect Southampton cruise itineraries with wider UK and Ireland touring routes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with travel agents or individuals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with tour operators, DMCs and travel planners managing structured group programmes.",
      },
    },
  ],
};

export default function SouthamptonPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={hero}>
        <p style={eyebrow}>Southampton cruise transport</p>

        <h1 style={title}>
          Southampton cruise transfers for UK touring programmes.
        </h1>

        <p style={text}>
          Structured group transport for cruise arrivals, departures and
          pre/post-cruise touring across England, Scotland and Ireland.
        </p>

        <div style={imageWrap}>
          <img
            src="/southamption-cruise.jpg"
            alt="Southampton cruise terminal and transport operations"
            style={image}
          />
        </div>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request cruise transport
          </a>
          <a href="/heathrow-group-transfers" style={secondaryLink}>
            Heathrow transfers →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Southampton cruise transport support</h2>

        <p style={text}>
          Southampton is a major UK cruise gateway, requiring clear coordination
          between port schedules, group movements and onward touring
          programmes.
        </p>

        <ul style={list}>
          <li>Turnaround day arrivals and departures</li>
          <li>Pre and post-cruise touring logistics</li>
          <li>Southampton to London, Heathrow and regional destinations</li>
          <li>Multi-coach coordination for larger groups</li>
          <li>Shore excursion transport planning</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Typical Southampton routes</h2>

        <ul style={list}>
          <li>Southampton to Central London hotels</li>
          <li>Southampton to Heathrow Airport</li>
          <li>Southampton to Gatwick Airport</li>
          <li>Southampton to Oxford and Bath touring routes</li>
          <li>Southampton to wider UK and Ireland touring programmes</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Who we work with</h2>

        <p style={text}>
          Our Southampton cruise support is structured for professional travel
          buyers managing organised group movements and commercial programme
          delivery.
        </p>

        <ul style={list}>
          <li>Tour operators running cruise-linked itineraries</li>
          <li>DMCs managing port logistics and regional touring flow</li>
          <li>Travel planners coordinating group arrivals and departures</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Related transport services</h2>

        <div style={linkGrid}>
          <a href="/heathrow-group-transfers" style={linkCard}>
            Heathrow group transfers →
          </a>

          <a href="/services" style={linkCard}>
            UK transport services →
          </a>

          <a href="/programmes" style={linkCard}>
            Touring programmes →
          </a>
        </div>
      </section>

      <section style={cta}>
        <h2 style={heading}>Planning a Southampton cruise programme?</h2>

        <p style={text}>
          Share your cruise schedule, group size and onward itinerary. We’ll
          structure a clear and reliable transport plan around your programme.
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
  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
  lineHeight: 1.05,
  margin: "12px 0 20px",
  fontWeight: 700,
  color: "#10263C",
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

const imageWrap: CSSProperties = {
  marginTop: 28,
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 18px 40px rgba(16, 38, 60, 0.12)",
};

const image: CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};
