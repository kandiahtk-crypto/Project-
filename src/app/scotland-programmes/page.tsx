import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title:
    "Scotland Touring Programmes | Group Transport for Tour Operators & DMCs",
  description:
    "Scotland touring programmes for tour operators, DMCs and travel planners. Structured group transport across Edinburgh, Glasgow, the Highlands, Loch Ness and wider Scotland itineraries.",
  alternates: {
    canonical: "/scotland-programmes",
  },
  openGraph: {
    title: "Scotland Touring Programmes | UK Inbound Ground Transport",
    description:
      "Structured Scotland touring transport for tour operators, DMCs and travel planners across Edinburgh, Glasgow and Highland itineraries.",
    url: `${siteUrl}/scotland-programmes`,
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
      name: "Do you support Scotland touring programmes for groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support structured Scotland touring programmes for tour operators, DMCs and travel planners managing organised group itineraries.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support Edinburgh and Highland touring routes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support routing across Edinburgh, Glasgow, Loch Ness, Inverness, the Highlands and wider Scotland touring flows.",
      },
    },
    {
      "@type": "Question",
      name: "Do you connect Scotland with wider UK and Ireland programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Scotland can be delivered as a standalone programme or as part of wider England, Scotland and Ireland touring structures.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our Scotland programme support is positioned for tour operators, DMCs and travel planners managing structured group programmes rather than individual bookings.",
      },
    },
  ],
};

export default function ScotlandProgrammesPage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={hero}>
        <p style={eyebrow}>Scotland touring programmes</p>

        <h1 style={title}>
          Scotland group transport for high-value touring programmes.
        </h1>

        <p style={text}>
          Structured programme transport across Edinburgh, Glasgow, Loch Ness,
          Inverness, the Highlands and wider Scotland touring itineraries for
          tour operators, DMCs and travel planners.
        </p>

        <div style={imageWrap}>
          <img
            src="/scotland.jpeg"
            alt="Scotland touring landscape for group travel programmes"
            style={image}
          />
        </div>

        <div style={ctaRow}>
          <a href="/contact" style={primaryButton}>
            Request Scotland transport
          </a>
          <a href="/programmes" style={secondaryLink}>
            View programmes →
          </a>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Scotland touring transport support</h2>

        <p style={text}>
          Scotland programmes require realistic journey planning, regional
          awareness and dependable timing across longer touring distances. We
          support structured group movements aligned to the pace and commercial
          realities of Scotland itineraries.
        </p>

        <ul style={list}>
          <li>Edinburgh and Glasgow arrival and departure support</li>
          <li>Highlands touring logistics and multi-day routing</li>
          <li>Loch Ness, Inverness and scenic touring movements</li>
          <li>Multi-stop programme transport across Scotland</li>
          <li>Group transport aligned to escorted and fixed-departure touring</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Typical Scotland touring routes</h2>

        <p style={text}>
          Many Scotland programmes combine city arrivals with broader scenic
          touring. Routing often needs to balance guest experience, coach
          timings and realistic overnight sequencing.
        </p>

        <ul style={list}>
          <li>Edinburgh to Inverness and Loch Ness touring</li>
          <li>Edinburgh to Glasgow and west Scotland routing</li>
          <li>Highlands circuits with scenic multi-day touring</li>
          <li>Scotland extensions within wider UK itineraries</li>
          <li>Scotland combined with England and Ireland touring programmes</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Built for organised group travel</h2>

        <p style={text}>
          Our Scotland support is designed for professional travel buyers who
          need programme transport to feel structured, commercially aware and
          operationally calm from first arrival through final departure.
        </p>

        <ul style={list}>
          <li>Tour operators managing escorted and series touring</li>
          <li>DMCs coordinating premium Scotland itineraries</li>
          <li>Travel planners building structured group programmes</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Scotland within wider UK programme flow</h2>

        <p style={text}>
          Scotland often sits within broader UK and Ireland itineraries. We help
          shape transport flow between Scotland gateways, regional touring
          points and onward programme stages to maintain continuity across the
          full itinerary.
        </p>

        <ul style={list}>
          <li>Scotland with England heritage touring routes</li>
          <li>Scotland linked to London arrival and departure programmes</li>
          <li>Scotland extensions connected to Ireland touring circuits</li>
          <li>Northbound and southbound programme sequencing support</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Related transport services</h2>

        <div style={linkGrid}>
          <a href="/programmes" style={linkCard}>
            Touring programmes →
          </a>

          <a href="/england-touring" style={linkCard}>
            England touring →
          </a>

          <a href="/heathrow-group-transfers" style={linkCard}>
            Heathrow group transfers →
          </a>

          <a href="/services" style={linkCard}>
            UK transport services →
          </a>
        </div>
      </section>

      <section style={cta}>
        <h2 style={heading}>Planning a Scotland programme?</h2>

        <p style={text}>
          Share your routing, travel dates, group size and programme structure.
          We’ll help shape a clear Scotland transport plan aligned to your wider
          itinerary.
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
  letterSpacing: "-0.02em",
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
