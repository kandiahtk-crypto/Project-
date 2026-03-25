import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "Heathrow Group Transfers | Heathrow Transport for Tour Operators & DMCs",
  description:
    "Heathrow group transfers for tour operators, DMCs and travel planners. Structured airport transport from Heathrow for arrivals, departures and UK touring programmes.",
  alternates: {
    canonical: "/heathrow-group-transfers",
  },
  openGraph: {
    title: "Heathrow Group Transfers | UK Inbound Ground Transport",
    description:
      "Structured Heathrow airport transfers for tour operators, DMCs and travel planners across UK and Ireland touring programmes.",
    url: `${siteUrl}/heathrow-group-transfers`,
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
      name: "Do you provide Heathrow group transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide Heathrow group transport for tour operators, DMCs and travel planners managing structured arrivals, departures and onward touring programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Can you collect groups from different Heathrow terminals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can support group arrivals across Heathrow terminals, including coordinated collections aligned to flight schedules and programme flow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you connect Heathrow arrivals to wider UK touring routes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support onward transport from Heathrow into London, England, Scotland and Ireland touring programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our Heathrow services are positioned for tour operators, DMCs and travel planners managing structured group programmes rather than individual bookings.",
      },
    },
  ],
};

export default function HeathrowPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={hero}>
        <p style={eyebrow}>Heathrow airport transport</p>

        <h1 style={title}>
          Heathrow group transfers for UK &amp; Ireland touring programmes.
        </h1>

        <p style={text}>
          Structured group transport from Heathrow for arrivals, departures,
          hotel transfers and onward touring across England, Scotland and
          Ireland.
        </p>

        <div style={heroImageWrap}>
          <img
            src="/heathrow-terminal.png"
            alt="Heathrow International Airport terminal exterior"
            style={heroImage}
          />
        </div>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request Heathrow transport
          </a>
          <a href="/southampton-cruise-transfers" style={secondaryLink}>
            Southampton cruise transfers →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Heathrow group transport support</h2>

        <p style={text}>
          Heathrow is the UK’s main international gateway for inbound touring.
          Group transport here requires timing discipline, terminal awareness
          and clear coordination with the onward programme.
        </p>

        <ul style={list}>
          <li>Airport arrivals and departures for organised groups</li>
          <li>Terminal collections aligned to flight schedules</li>
          <li>Heathrow to London hotel transfers</li>
          <li>Heathrow to direct touring departures</li>
          <li>Multi-coach coordination for larger movements</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Heathrow terminals and group coordination</h2>

        <p style={text}>
          We support structured programme movements across Heathrow’s major
          terminals, aligning collection timing, vehicle planning and onward
          routing with the operational realities of inbound group travel.
        </p>

        <ul style={list}>
          <li>Terminal 2 group arrivals</li>
          <li>Terminal 3 group arrivals</li>
          <li>Terminal 4 group arrivals</li>
          <li>Terminal 5 group arrivals</li>
          <li>Staggered flight arrival coordination where required</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Typical Heathrow routes</h2>

        <ul style={list}>
          <li>Heathrow to Central London hotels</li>
          <li>Heathrow to Windsor, Oxford and Bath touring starts</li>
          <li>Heathrow to direct long-distance UK touring departures</li>
          <li>Heathrow to cruise connections and regional gateways</li>
          <li>Heathrow to wider England, Scotland and Ireland programmes</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Who we work with</h2>

        <p style={text}>
          Our Heathrow transport services are built for professional travel
          buyers managing commercially sensitive itineraries and structured
          group operations.
        </p>

        <ul style={list}>
          <li>Tour operators running fixed-departure and escorted touring</li>
          <li>DMCs managing airport arrivals and programme flow</li>
          <li>Travel planners coordinating premium group itineraries</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Related transport services</h2>

        <div style={linkGrid}>
          <a href="/southampton-cruise-transfers" style={linkCard}>
            Southampton cruise transfers →
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
        <h2 style={heading}>Planning a Heathrow arrival or departure?</h2>

        <p style={text}>
          Share your flight schedule, group size and onward itinerary. We’ll
          structure a clear and reliable Heathrow transport plan around your
          programme.
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

const heroImageWrap: CSSProperties = {
  marginTop: 32,
  borderRadius: 20,
  overflow: "hidden",
};

const heroImage: CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};
