import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "UK & Ireland Touring Programmes | Group Transport for Tour Operators & DMCs",
  description:
    "UK and Ireland touring programmes for tour operators, DMCs and travel planners. Structured group transport across England, Scotland and Ireland touring routes.",
  alternates: {
    canonical: "/uk-ireland-touring",
  },
  openGraph: {
    title: "UK & Ireland Touring Programmes | UK Inbound Ground Transport",
    description:
      "Structured UK and Ireland touring transport across England, Scotland and Ireland for tour operators, DMCs and travel planners.",
    url: `${siteUrl}/uk-ireland-touring`,
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
      name: "Do you support UK and Ireland touring programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support structured group touring programmes across England, Scotland and Ireland for tour operators, DMCs and travel planners.",
      },
    },
    {
      "@type": "Question",
      name: "Can you coordinate transport across multiple regions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support multi-region programme flow across England, Scotland and Ireland with consistent transport coordination.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our services are positioned for tour operators, DMCs and travel planners managing structured group programmes.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UK & Ireland Touring Transport",
  provider: {
    "@type": "Organization",
    name: "UK Inbound Ground Transport",
    url: siteUrl,
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Ireland" },
  ],
  serviceType:
    "Group touring transport for England, Scotland and Ireland programmes",
};

export default function UKIrelandTouringPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]),
        }}
      />

      <section style={hero}>
        <p style={eyebrow}>UK &amp; Ireland touring</p>

        <h1 style={title}>
          UK &amp; Ireland group transport for structured touring programmes.
        </h1>

        <p style={text}>
          Programme-led transport across England, Scotland and Ireland for tour
          operators, DMCs and travel planners managing high-value group
          itineraries and multi-region touring flow.
        </p>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request touring support
          </a>
          <a href="/programmes" style={secondaryLink}>
            View programmes →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Built for multi-region programme delivery</h2>

        <p style={text}>
          UK and Ireland touring programmes often involve varied routing,
          gateway arrivals, regional overnights and complex movement timing. We
          support structured transport flow that keeps the wider itinerary clear,
          dependable and commercially realistic.
        </p>

        <ul style={list}>
          <li>England, Scotland and Ireland combined touring support</li>
          <li>Gateway arrivals aligned to onward programme routing</li>
          <li>Multi-day touring logistics across multiple regions</li>
          <li>Transport structured around realistic daily sequencing</li>
          <li>Support for fixed-departure and private group itineraries</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Regional touring coverage</h2>

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
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Typical UK &amp; Ireland touring flow</h2>

        <p style={text}>
          Touring programmes may start in London or another major gateway before
          moving north into Scotland or west into Ireland, depending on market,
          itinerary structure and travel window.
        </p>

        <ul style={list}>
          <li>London arrivals into wider England touring routes</li>
          <li>England to Scotland northbound programme transitions</li>
          <li>Scotland and Ireland combinations within wider touring plans</li>
          <li>Regional sequencing aligned to hotel and journey realism</li>
          <li>Final departures via London or other key gateways</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Gateway and transport coordination</h2>

        <div style={linkGrid}>
          <a href="/heathrow-group-transfers" style={linkCard}>
            Heathrow group transfers →
          </a>

          <a href="/southampton-cruise-transfers" style={linkCard}>
            Southampton cruise transfers →
          </a>

          <a href="/services" style={linkCard}>
            UK transport services →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Who this is built for</h2>

        <p style={text}>
          Our work is positioned for professional travel buyers who need
          programme transport to feel structured, calm and aligned to the full
          itinerary rather than treated as disconnected point-to-point supply.
        </p>

        <ul style={list}>
          <li>Tour operators managing escorted touring programmes</li>
          <li>DMCs delivering premium UK and Ireland itineraries</li>
          <li>Travel planners coordinating organised group movements</li>
        </ul>
      </section>

      <section style={cta}>
        <h2 style={heading}>Planning a UK &amp; Ireland programme?</h2>

        <p style={text}>
          Share your routing, travel dates, group size and programme structure.
          We’ll help shape a clear transport plan across England, Scotland and
          Ireland.
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
