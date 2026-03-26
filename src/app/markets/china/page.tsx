import type { CSSProperties } from "react";
import type { Metadata } from "next";

const pageUrl = "https://www.ukinboundgroundtransport.com/markets/china";
const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "China Market | UK Group Transport for Chinese Tour Operators",
  description:
    "UK group transport for Chinese tour operators, DMCs and travel planners. Structured support for Chinese outbound travel across England, Scotland and Ireland, including Heathrow arrivals, London touring, Bicester Village and multi-coach programmes.",
  alternates: {
    canonical: "/markets/china",
  },
  openGraph: {
    title: "China Market | UK Group Transport for Chinese Tour Operators",
    description:
      "Structured UK and Ireland transport support for Chinese tour operators, DMCs and travel planners delivering group tours, regional itineraries and multi-coach programmes.",
    url: pageUrl,
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
      name: "Do you support Chinese tour operators with UK transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support Chinese tour operators, DMCs and travel planners with structured group transport across England, Scotland and Ireland.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support Heathrow arrivals for Chinese groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support Heathrow arrivals, hotel transfers and onward touring departures for Chinese group programmes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support large groups and multi-coach coordination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support larger group movements, multi-coach coordination and structured touring flow across multiple destinations.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UK Group Transport for Chinese Tour Operators",
  provider: {
    "@type": "Organization",
    name: "UK Inbound Ground Transport",
    url: siteUrl,
  },
  areaServed: [
    { "@type": "Country", name: "China" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Ireland" },
  ],
  serviceType:
    "Group ground transport for Chinese tour operators, DMCs and travel planners",
};

const programmeTypes = [
  {
    title: "Large group touring",
    text: "Structured support for larger group programmes requiring clear timing, efficient loading, dependable movement flow and practical day-to-day coordination.",
  },
  {
    title: "Multi-coach programmes",
    text: "Transport planning for itineraries that require more than one vehicle, with coordinated arrivals, departures and movement sequencing.",
  },
  {
    title: "Fast-paced touring routes",
    text: "Support for programmes covering multiple UK highlights where timing, route realism and operational discipline are essential.",
  },
  {
    title: "UK & Ireland combinations",
    text: "Multi-region touring support across England, Scotland and Ireland for operators needing clear transitions between destinations.",
  },
];

const chinaBenefits = [
  "UK group transport for Chinese tour operators delivering structured programmes.",
  "Heathrow arrival handling for Chinese groups entering the UK.",
  "Support for London, Oxford, Bicester Village and wider regional routing.",
  "Operationally clear transport for larger groups and multi-coach touring.",
];

const gateways = [
  "London Heathrow",
  "London Gatwick",
  "Manchester",
  "Edinburgh",
  "Glasgow",
  "Dublin",
];

const keyRoutes = [
  "London",
  "Oxford",
  "Bicester Village",
  "Cambridge",
  "Edinburgh",
  "Manchester",
  "Lake District",
  "Dublin",
];

const strategicLinks = [
  {
    href: "/heathrow-group-transfers",
    label: "Heathrow group transfers",
  },
  {
    href: "/uk-ireland-touring",
    label: "UK & Ireland touring",
  },
  {
    href: "/dmc-transport-uk",
    label: "DMC transport UK",
  },
  {
    href: "/tour-operator-transport-uk",
    label: "Tour operator transport UK",
  },
];

const WHATSAPP_URL =
  "https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement.";

export default function ChinaMarketPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]),
        }}
      />

      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroGrid} className="split-grid">
            <div>
              <p style={eyebrow}>China market</p>

              <h1 style={heroTitle}>
                UK group transport for Chinese tour operators and travel planners.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                Structured transport support for Chinese outbound travel
                programmes across England, Scotland and Ireland, including
                Heathrow arrivals, London touring, Bicester Village routing and
                multi-region group itineraries.
              </p>

              <p style={heroSubText}>
                Built for operators who need efficient group handling, clear
                routing, dependable timing and calm delivery across the full
                programme.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButton}>
                  Request programme support
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={secondaryLink}
                >
                  WhatsApp us →
                </a>
              </div>

              <div style={pillRow}>
                <span style={pill}>Chinese tour operators</span>
                <span style={pill}>UK tours for Chinese groups</span>
                <span style={pill}>Multi-coach programmes</span>
              </div>
            </div>

            <div style={heroPanel} className="premium-card">
              <p style={panelEyebrow}>Built for the China market</p>
              <h2 style={heroPanelTitle}>
                Reliable transport for Chinese groups arriving into the UK and
                continuing across structured touring programmes.
              </h2>

              <div style={heroPanelDivider} />

              <div style={heroPanelGrid}>
                <div>
                  <p style={metaHeading}>Who we support</p>
                  <p style={metaText}>
                    Chinese tour operators • DMCs • Travel planners
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Common programme types</p>
                  <p style={metaText}>
                    Group tours • Multi-coach movements • Fast-paced itineraries
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Regional coverage</p>
                  <p style={metaText}>
                    England • Scotland • Ireland
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Operational focus</p>
                  <p style={metaText}>
                    Heathrow arrivals • Route efficiency • Timing • Coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Supporting Chinese outbound travel</p>
              <h2 style={sectionTitle}>
                Group transport aligned to the structure of Chinese UK itineraries.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Chinese group travel often requires efficient route planning,
                clear movement sequencing and support for larger group sizes. We
                help align transport to itinerary priorities so the programme
                runs with clarity from arrival to departure.
              </p>
            </div>
          </div>

          <div style={imageWrap}>
            <img
              src="/coach-parking.jpg"
              alt="UK group transport for Chinese tour programmes"
              style={image}
            />
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Programme types</p>
              <h2 style={sectionTitle}>
                Transport support across the formats commonly used by Chinese buyers.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                From larger touring groups to fast-paced regional itineraries,
                transport must remain efficient, commercially realistic and easy
                to manage at every stage.
              </p>
            </div>
          </div>

          <div style={cardGrid}>
            {programmeTypes.map((item) => (
              <article key={item.title} style={card} className="premium-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Why the China market converts here</p>
              <h2 style={sectionTitle}>
                A transport approach shaped around structured group delivery.
              </h2>
            </div>

            <div>
              <div style={benefitList}>
                {chinaBenefits.map((item) => (
                  <div key={item} style={benefitItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Gateway airports</p>
              <h2 style={sectionTitle}>
                Key arrival gateways commonly used by Chinese groups.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Heathrow is often central to UK inbound travel from China, with
                onward routing commonly moving into London, Oxford, Bicester
                Village and broader UK touring programmes.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {gateways.map((item) => (
              <div key={item} style={listItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Common itinerary points</p>
              <h2 style={sectionTitle}>
                Locations frequently used in UK tours for Chinese groups.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Many programmes combine London highlights with Oxford,
                Bicester Village, Cambridge and regional extensions into
                Scotland or Ireland. Efficient transitions are essential.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {keyRoutes.map((item) => (
              <div key={item} style={listItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Internal routing</p>
              <h2 style={sectionTitle}>
                Strategic pages for Chinese market buyers exploring UK options.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Buyers searching for group travel UK China market support often
                need to compare airport handling, regional touring and specialist
                programme delivery. These pages strengthen that path.
              </p>
            </div>
          </div>

          <div style={linkGrid}>
            {strategicLinks.map((item) => (
              <a key={item.href} href={item.href} style={linkCard}>
                {item.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning UK tours for Chinese groups?
          </h2>

          <p style={sectionText}>
            Tell us your routing, group size, arrival airport and programme
            structure. We’ll help shape a transport plan aligned to efficient
            UK delivery and the needs of Chinese outbound programmes.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Request transport support
            </a>
            <a href="/dmc-transport-uk" style={secondaryLink}>
              DMC transport UK →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const containerWide: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 28px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "48px 0 72px",
};

const section: CSSProperties = {
  padding: "96px 0",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "#F4F7FB",
};

const ctaSection: CSSProperties = {
  padding: "88px 0 48px",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gap: 40,
  alignItems: "start",
};

const introSplit: CSSProperties = {
  display: "grid",
  gap: 40,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#5B7C99",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#5B7C99",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 16px",
  maxWidth: 760,
  fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 56,
  height: 3,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 720,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18, 36, 56, 0.78)",
};

const heroSubText: CSSProperties = {
  margin: "14px 0 0",
  maxWidth: 680,
  fontSize: 14,
  lineHeight: 1.8,
  color: "rgba(18, 36, 56, 0.60)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18, 36, 56, 0.74)",
};

const heroActions: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  alignItems: "center",
};

const ctaActions: CSSProperties = {
  marginTop: 26,
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  alignItems: "center",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "#10263C",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(16, 38, 60, 0.08)",
  boxShadow: "0 10px 24px rgba(16, 38, 60, 0.14)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

const pillRow: CSSProperties = {
  marginTop: 20,
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const pill: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#EEF3F8",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.74)",
};

const heroPanel: CSSProperties = {
  padding: "28px",
  borderRadius: 30,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 30px rgba(16, 38, 60, 0.05)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.50)",
};

const heroPanelTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.025em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const heroPanelDivider: CSSProperties = {
  height: 1,
  margin: "22px 0",
  background: "rgba(18, 36, 56, 0.08)",
};

const heroPanelGrid: CSSProperties = {
  display: "grid",
  gap: 20,
};

const metaHeading: CSSProperties = {
  margin: "0 0 6px",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.50)",
};

const metaText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(18, 36, 56, 0.74)",
};

const imageWrap: CSSProperties = {
  marginTop: 42,
  borderRadius: 22,
  overflow: "hidden",
  boxShadow: "0 18px 40px rgba(16, 38, 60, 0.12)",
};

const image: CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
};

const cardGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gap: 24,
};

const card: CSSProperties = {
  padding: "28px 26px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 8px 30px rgba(16, 38, 60, 0.03)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
};

const cardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)",
  lineHeight: 1.12,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18, 36, 56, 0.72)",
};

const listGrid: CSSProperties = {
  marginTop: 42,
  display: "grid",
  gap: 16,
};

const listItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18, 36, 56, 0.08)",
  fontSize: 20,
  lineHeight: 1.5,
  color: "#10263C",
};

const benefitList: CSSProperties = {
  display: "grid",
  gap: 18,
};

const benefitItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18, 36, 56, 0.08)",
  fontSize: 18,
  lineHeight: 1.7,
  color: "#10263C",
};

const linkGrid: CSSProperties = {
  marginTop: 40,
  display: "grid",
  gap: 12,
};

const linkCard: CSSProperties = {
  padding: 16,
  borderRadius: 14,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.1)",
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
};
