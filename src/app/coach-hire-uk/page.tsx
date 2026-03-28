import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "Coach Hire UK | Group Coach Hire for Tour Operators & DMCs",
  description:
    "Premium coach hire across the UK and Ireland for tour operators, DMCs and travel planners. Structured group transport for touring programmes, airport transfers and multi-region itineraries.",
  alternates: {
    canonical: "/coach-hire-uk",
  },
  openGraph: {
    title: "Coach Hire UK | UK Inbound Ground Transport",
    description:
      "Structured coach hire for inbound UK and Ireland programmes, including Heathrow transfers, touring and multi-day group travel.",
    url: `${siteUrl}/coach-hire-uk`,
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
      name: "Do you provide coach hire for tour operators in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide structured coach hire for tour operators, DMCs and travel planners delivering group programmes across the UK and Ireland.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support airport and touring movements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support airport arrivals, hotel transfers, multi-day touring and regional programme movements across England, Scotland and Ireland.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our coach hire services are positioned for professional travel buyers managing structured group programmes rather than individual bookings.",
      },
    },
  ],
};

export default function CoachHirePage() {
  return (
    <main style={container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={heroSection}>
        <div style={heroGrid} className="hero-grid">
          <div>
            <p style={eyebrow}>Coach hire UK</p>

            <h1 style={title}>
              Premium coach hire for UK &amp; Ireland group travel programmes.
            </h1>

            <div style={divider} />

            <p style={text}>
              Structured coach hire for tour operators, DMCs and travel planners
              delivering airport arrivals, regional touring, hotel movements and
              multi-day itineraries across England, Scotland and Ireland.
            </p>

            <p style={subText}>
              Built for professional travel buyers who need dependable delivery,
              clear routing and calm programme execution rather than generic
              point-to-point transport.
            </p>

            <div style={ctaRow}>
              <a href="/contact" style={primaryButton}>
                Request coach hire
              </a>
              <a href="/tour-operator-transport-uk" style={secondaryLink}>
                Tour operator transport UK →
              </a>
            </div>

            <div style={pillRow}>
              <span style={pill}>Airport arrivals</span>
              <span style={pill}>Multi-day touring</span>
              <span style={pill}>UK &amp; Ireland programmes</span>
            </div>
          </div>

          <div style={visualColumn}>
            <div style={imageWrap}>
              <img
                src="/hero-coach.png"
                alt="Coach hire UK for group travel and touring programmes"
                style={image}
              />
            </div>

            <div style={infoCard} className="premium-card">
              <p style={cardEyebrow}>Typical use cases</p>

              <div style={infoGrid}>
                <div>
                  <p style={infoHeading}>Buyers</p>
                  <p style={infoText}>
                    Tour operators • DMCs • Travel planners
                  </p>
                </div>

                <div>
                  <p style={infoHeading}>Coverage</p>
                  <p style={infoText}>
                    England • Scotland • Ireland
                  </p>
                </div>

                <div>
                  <p style={infoHeading}>Programmes</p>
                  <p style={infoText}>
                    Touring • Airport transfers • Cruise links
                  </p>
                </div>

                <div>
                  <p style={infoHeading}>Focus</p>
                  <p style={infoText}>
                    Routing • Timing • Coordination • Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>UK coach hire for structured programmes</h2>

        <p style={text}>
          We provide coach hire aligned to the operational structure of inbound
          touring programmes, ensuring timing, routing and coordination support
          the wider itinerary rather than disrupt it.
        </p>

        <ul style={list}>
          <li>Group coach hire across the UK and Ireland</li>
          <li>Airport transfers including Heathrow and Gatwick</li>
          <li>Hotel movements and daily touring schedules</li>
          <li>Multi-day touring across multiple regions</li>
          <li>Multi-coach coordination for larger groups</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Typical coach hire routes</h2>

        <ul style={list}>
          <li>London to Oxford, Bath and Stonehenge</li>
          <li>London to Edinburgh and Scotland touring routes</li>
          <li>Heathrow to Central London hotels</li>
          <li>UK touring routes across England and Scotland</li>
          <li>UK to Ireland programme connections</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Who we work with</h2>

        <p style={text}>
          Our coach hire services are designed for professional travel buyers
          managing structured group travel programmes with commercial and
          operational requirements.
        </p>

        <ul style={list}>
          <li>Tour operators running escorted touring programmes</li>
          <li>DMCs managing UK and Ireland itineraries</li>
          <li>Travel planners coordinating group movements</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Related transport services</h2>

        <div style={linkGrid}>
          <a href="/heathrow-group-transfers" style={linkCard}>
            Heathrow group transfers →
          </a>
          <a href="/southampton-cruise-transfers" style={linkCard}>
            Southampton cruise transfers →
          </a>
          <a href="/uk-ireland-touring" style={linkCard}>
            UK &amp; Ireland touring →
          </a>
          <a href="/dmc-transport-uk" style={linkCard}>
            DMC transport UK →
          </a>
        </div>
      </section>

      <section style={cta}>
        <h2 style={heading}>Planning a coach hire requirement?</h2>

        <p style={text}>
          Share your itinerary, group size and routing. We’ll structure a clear
          and dependable coach transport plan around your programme.
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
  maxWidth: 1120,
  margin: "0 auto",
  padding: "40px 24px 80px",
};

const heroSection: CSSProperties = {
  marginBottom: 88,
};

const heroGrid: CSSProperties = {
  display: "grid",
  gap: 34,
  alignItems: "center",
};

const visualColumn: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 18,
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
  fontSize: "clamp(2.2rem, 5vw, 4rem)",
  lineHeight: 1.02,
  margin: "12px 0 18px",
  fontWeight: 700,
  color: "#10263C",
  letterSpacing: "-0.04em",
};

const divider: CSSProperties = {
  width: 56,
  height: 3,
  borderRadius: 999,
  margin: "0 0 24px",
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
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
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.58)",
  maxWidth: 680,
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
  marginTop: 24,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  alignItems: "center",
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
  boxShadow: "0 10px 24px rgba(16,38,60,0.14)",
};

const secondaryLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
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
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18,36,56,0.74)",
};

const imageWrap: CSSProperties = {
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: "0 20px 50px rgba(16,38,60,0.15)",
  border: "1px solid rgba(18,36,56,0.08)",
};

const image: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: 380,
  objectFit: "cover",
  display: "block",
};

const infoCard: CSSProperties = {
  padding: "24px",
  borderRadius: 22,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 30px rgba(16,38,60,0.05)",
};

const cardEyebrow: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.50)",
};

const infoGrid: CSSProperties = {
  display: "grid",
  gap: 16,
};

const infoHeading: CSSProperties = {
  margin: "0 0 5px",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.50)",
};

const infoText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.74)",
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
