import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "DMC Transport UK | Group Transport for Destination Management Companies",
  description:
    "DMC transport in the UK for destination management companies managing group itineraries, airport arrivals, touring programmes and multi-region movements across England, Scotland and Ireland.",
  alternates: {
    canonical: "/dmc-transport-uk",
  },
  openGraph: {
    title: "DMC Transport UK | UK Inbound Ground Transport",
    description:
      "Structured UK transport support for destination management companies delivering premium group itineraries across England, Scotland and Ireland.",
    url: `${siteUrl}/dmc-transport-uk`,
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
      name: "Do you provide transport support for DMCs in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support destination management companies with structured group transport across England, Scotland and Ireland.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support airport arrivals, touring and event movements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support airport arrivals, touring programmes, city movements, events and multi-region transport flow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support premium and high-value group itineraries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our services are positioned for professionally managed group itineraries where delivery, timing and presentation matter.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our services are designed for destination management companies, tour operators and professional travel planners managing structured group programmes.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DMC Transport UK",
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
    "Group transport support for destination management companies",
};

export default function DMCTransportUKPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]),
        }}
      />

      <section style={hero}>
        <p style={eyebrow}>DMC transport UK</p>

        <h1 style={title}>
          UK transport for destination management companies delivering premium
          group programmes.
        </h1>

        <p style={text}>
          Structured transport support for DMCs managing airport arrivals, hotel
          movements, touring itineraries, event logistics and multi-region
          programme flow across England, Scotland and Ireland.
        </p>

        <p style={subText}>
          Built for professionally managed group itineraries where calm
          execution, timing discipline and presentation directly affect the
          client experience.
        </p>

        <div style={imageWrap}>
          <img
            src="/coach-parking.jpg"
            alt="Premium UK group coach transport for destination management companies"
            style={image}
          />
        </div>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request DMC transport support
          </a>
          <a href="/uk-ireland-touring" style={secondaryLink}>
            UK &amp; Ireland touring →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Built around DMC programme delivery</h2>

        <p style={text}>
          Destination management companies need more than simple transport
          supply. They need structured programme support that fits the wider
          itinerary, protects guest experience and supports dependable
          on-the-ground delivery.
        </p>

        <ul style={list}>
          <li>Airport arrival and departure coordination</li>
          <li>Hotel transfers and city movements</li>
          <li>Touring support across England, Scotland and Ireland</li>
          <li>Event and hospitality movement logistics</li>
          <li>Multi-day, multi-region itinerary delivery</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Where DMC transport support matters most</h2>

        <p style={text}>
          DMC itineraries often combine several movement types in one programme.
          Airport collections, city transport, dining transfers, attractions,
          touring departures and final airport movements all need to work
          together without friction.
        </p>

        <ul style={list}>
          <li>Heathrow and major gateway arrivals</li>
          <li>London hotel and event movements</li>
          <li>Regional touring transitions</li>
          <li>Cruise-linked pre and post programme transport</li>
          <li>Final departures and return airport movements</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Regional coverage for DMC itineraries</h2>

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

          <a href="/uk-ireland-touring" style={linkCard}>
            UK &amp; Ireland touring →
          </a>
        </div>
      </section>

      <section style={section}>
        <h2 style={heading}>Operationally calm, commercially aware</h2>

        <p style={text}>
          DMCs need transport partners who understand that client confidence,
          guest handling and programme credibility all depend on reliable
          execution. Our focus is supporting the full programme with clarity,
          consistency and realistic routing.
        </p>

        <ul style={list}>
          <li>Structured responses for professional travel buyers</li>
          <li>Programme-first transport planning</li>
          <li>Routing aligned to hotel flow and realistic timings</li>
          <li>Support for premium, high-touch group movements</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Related transport services</h2>

        <div style={linkGrid}>
          <a href="/tour-operator-transport-uk" style={linkCard}>
            Tour operator transport UK →
          </a>

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

      <section style={cta}>
        <h2 style={heading}>Need a UK transport partner for DMC delivery?</h2>

        <p style={text}>
          Share your itinerary, dates, movement types and group size. We’ll help
          shape a clear transport plan aligned to your programme.
        </p>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request proposal
          </a>
          <a
            href="https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement."
            target="_blank"
            rel="noopener noreferrer"
            style={secondaryLink}
          >
            WhatsApp us →
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

const subText: CSSProperties = {
  marginTop: 14,
  fontSize: 14,
  lineHeight: 1.75,
  color: "rgba(18,36,56,0.58)",
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
