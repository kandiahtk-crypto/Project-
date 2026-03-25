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
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section style={hero}>
        <p style={eyebrow}>Southampton cruise transport</p>

        <h1 style={title}>
          Southampton cruise transfers for UK touring programmes.
        </h1>

        <p style={text}>
          Structured group transport for cruise arrivals, departures and
          pre/post cruise touring across England, Scotland and Ireland.
        </p>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request cruise transport
          </a>
          <a href="/heathrow-group-transfers" style={secondaryLink}>
            Heathrow transfers →
          </a>
        </div>
      </section>

      {/* CONTENT BLOCK */}
      <section style={sectionSoft}>
        <h2 style={heading}>Southampton cruise transport support</h2>

        <p style={text}>
          Southampton is the UK’s primary cruise gateway, requiring precise
          coordination between port schedules, group movements and onward
          touring programmes.
        </p>

        <ul style={list}>
          <li>Turnaround day arrivals and departures</li>
          <li>Pre and post cruise touring logistics</li>
          <li>Southampton to London, Heathrow and UK regions</li>
          <li>Multi-coach coordination for large groups</li>
          <li>Shore excursion transport planning</li>
        </ul>
      </section>

      {/* ROUTING */}
      <section style={section}>
        <h2 style={heading}>Typical Southampton routes</h2>

        <ul style={list}>
          <li>Southampton → London hotels</li>
          <li>Southampton → Heathrow Airport</li>
          <li>Southampton → Oxford → Bath touring routes</li>
          <li>Southampton → multi-day UK touring programmes</li>
        </ul>
      </section>

      {/* INTERNAL LINKS (VERY IMPORTANT FOR SEO) */}
      <section style={sectionSoft}>
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

      {/* CTA */}
      <section style={cta}>
        <h2 style={heading}>Planning a cruise programme?</h2>

        <p style={text}>
          Tell us your cruise schedule, group size and itinerary. We’ll structure
          a clear and reliable transport plan.
        </p>

        <a href="/contact" style={primaryButton}>
          Request proposal
        </a>
      </section>
    </main>
  );
}

/* STYLES */

const container = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "40px 24px 80px",
};

const hero = {
  marginBottom: 80,
};

const section = {
  marginBottom: 80,
};

const sectionSoft = {
  marginBottom: 80,
  padding: 32,
  background: "#F2F5F9",
  borderRadius: 20,
};

const eyebrow = {
  fontSize: 12,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "#5B7C99",
};

const title = {
  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
  margin: "12px 0 20px",
  fontWeight: 700,
  color: "#10263C",
};

const heading = {
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  marginBottom: 16,
  fontWeight: 700,
  color: "#10263C",
};

const text = {
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.75)",
};

const list = {
  marginTop: 16,
  paddingLeft: 18,
  lineHeight: 1.8,
};

const cta = {
  padding: 40,
  background: "#EEF3F8",
  borderRadius: 24,
  textAlign: "center" as const,
};

const ctaRow = {
  marginTop: 20,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const primaryButton = {
  padding: "14px 24px",
  borderRadius: 999,
  background: "#10263C",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
};

const secondaryLink = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
};

const linkGrid = {
  display: "grid",
  gap: 12,
};

const linkCard = {
  padding: 16,
  borderRadius: 14,
  background: "#fff",
  border: "1px solid rgba(18,36,56,0.1)",
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
};
