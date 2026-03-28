import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "Coach Hire UK | Group & Luxury Coach Hire for Tour Operators",
  description:
    "Premium coach hire in the UK for tour operators, DMCs and travel planners. Group transport, touring programmes, airport transfers and UK & Ireland itineraries.",
  alternates: {
    canonical: "/coach-hire-uk",
  },
  openGraph: {
    title: "Coach Hire UK | Premium Group Transport",
    description:
      "Luxury and group coach hire across England, Scotland and Ireland for tour operators and inbound travel programmes.",
    url: `${siteUrl}/coach-hire-uk`,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coach Hire UK",
  serviceType:
    "Group coach hire for tour operators, DMCs and travel planners",
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Ireland" },
  ],
  provider: {
    "@type": "Organization",
    name: "UK Inbound Ground Transport",
    url: siteUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide coach hire for UK touring programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide structured coach hire for tour operators, DMCs and travel planners across England, Scotland and Ireland.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support airport and cruise transfers as part of coach hire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support Heathrow arrivals, other airport transfers, cruise port movements and multi-day touring itineraries.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services are positioned for tour operators, DMCs and travel planners managing structured group programmes rather than individual bookings.",
      },
    },
  ],
};

const serviceCards = [
  {
    title: "Airport transfers",
    text: "Heathrow, Gatwick, Manchester, Edinburgh and other gateway arrivals aligned to group schedules and onward programme flow.",
  },
  {
    title: "Multi-day touring",
    text: "Coach hire structured around touring itineraries across England, Scotland and Ireland with realistic routing and timing.",
  },
  {
    title: "Cruise movements",
    text: "Southampton, Dover and other cruise-related transport with careful sequencing around embarkation, disembarkation and touring.",
  },
  {
    title: "Large group operations",
    text: "Multi-coach planning for larger movements requiring coordination, timing discipline and consistent delivery.",
  },
];

const coverageItems = [
  "London and South East England",
  "Heathrow and major UK airports",
  "Scotland touring routes and Highlands",
  "Ireland touring including Dublin, Galway and Killarney",
  "Southampton and key cruise ports",
  "Multi-region UK & Ireland programmes",
];

const buyerItems = [
  "Tour operators delivering escorted and fixed-departure series",
  "DMCs managing inbound itineraries and operational flow",
  "Travel planners coordinating private and premium group movements",
];

const vehicleItems = [
  "Executive touring coaches",
  "Luxury coaches for premium groups",
  "Mini coaches for smaller movements",
  "Multi-coach solutions for larger programmes",
];

export default function CoachHirePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />

      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroGrid} className="hero-grid">
            <div style={heroContent}>
              <p style={eyebrow}>Coach hire UK</p>

              <h1 style={heroTitle}>
                Premium coach hire across the UK for group travel and touring
                programmes.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                Structured coach hire for tour operators, DMCs and travel
                planners delivering airport arrivals, regional touring, hotel
                movements and multi-day itineraries across England, Scotland and
                Ireland.
              </p>

              <p style={heroSubText}>
                Built for professional travel buyers who need dependable
                delivery, clear routing and commercially reliable execution.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButton}>
                  Request coach hire
                </a>
                <a
                  href="https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20coach%20hire."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={secondaryLink}
                >
                  WhatsApp →
                </a>
              </div>

              <div style={pillRow}>
                <span style={pill}>Airport arrivals</span>
                <span style={pill}>Touring programmes</span>
                <span style={pill}>UK &amp; Ireland coverage</span>
              </div>
            </div>

            <div style={heroVisualStack}>
              <div style={heroImageFrame} className="hero-image premium-card">
                <img
                  src="/hero-coach.png"
                  alt="Premium coach hire in the UK for group travel and touring programmes"
                  style={heroImage}
                />
                <div style={heroImageOverlay} />
              </div>

              <div style={heroFloatingCard} className="premium-card">
                <p style={floatingEyebrow}>Operational focus</p>

                <div style={floatingGrid}>
                  <div>
                    <p style={floatingValue}>Programmes</p>
                    <p style={floatingLabel}>
                      Touring • Airport transfers • Cruise links
                    </p>
                  </div>

                  <div>
                    <p style={floatingValue}>Coverage</p>
                    <p style={floatingLabel}>
                      England • Scotland • Ireland
                    </p>
                  </div>

                  <div>
                    <p style={floatingValue}>Buyers</p>
                    <p style={floatingLabel}>
                      Tour operators • DMCs • Travel planners
                    </p>
                  </div>

                  <div>
                    <p style={floatingValue}>Delivery</p>
                    <p style={floatingLabel}>
                      Routing • Timing • Coordination • Dependability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={proofStrip}>
            <span style={proofItem}>Group coach hire UK</span>
            <span style={proofItem}>Airport &amp; cruise coordination</span>
            <span style={proofItem}>Built for tour operators &amp; DMCs</span>
            <span style={proofItem}>Multi-region touring support</span>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Coach hire services</p>
              <h2 style={sectionTitle}>
                Programme-led coach hire aligned to itinerary flow.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Our focus is not simply moving passengers from one point to
                another. We structure coach hire around the wider programme, so
                airport timings, hotel positioning, touring days and regional
                transitions all work together.
              </p>
            </div>
          </div>

          <div style={cardGrid} className="feature-grid">
            {serviceCards.map((item) => (
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
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Who we work with</p>
              <h2 style={sectionTitle}>
                Built for professional travel buyers managing group programmes.
              </h2>
            </div>

            <div>
              <div style={listPanel} className="premium-card">
                {buyerItems.map((item) => (
                  <div key={item} style={listItem}>
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
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>UK &amp; Ireland coverage</p>
              <h2 style={sectionTitle}>
                Coach hire across the key routes used by inbound programmes.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We support airport transfers, touring routes, regional
                transitions and cross-market programme flow across the core
                destinations used by international operators.
              </p>
            </div>
          </div>

          <div style={listGrid}>
            {coverageItems.map((item) => (
              <div key={item} style={lineItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Vehicle options</p>
              <h2 style={sectionTitle}>
                Coach solutions suited to premium group travel requirements.
              </h2>
            </div>

            <div>
              <div style={listPanel} className="premium-card">
                {vehicleItems.map((item) => (
                  <div key={item} style={listItem}>
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
          <div style={editorialPanel} className="premium-card">
            <p style={panelEyebrow}>Related transport services</p>
            <h2 style={panelTitle}>
              Coach hire supported by the wider structure of the programme.
            </h2>
            <p style={panelText}>
              Many coach hire requirements sit within a broader transport brief,
              including Heathrow arrivals, Southampton cruise movements and
              multi-region UK &amp; Ireland touring.
            </p>

            <div style={heroActions}>
              <a href="/heathrow-group-transfers" style={secondaryLink}>
                Heathrow group transfers →
              </a>
              <a href="/southampton-cruise-transfers" style={secondaryLink}>
                Southampton cruise transfers →
              </a>
              <a href="/uk-ireland-touring" style={secondaryLink}>
                UK &amp; Ireland touring →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>Planning a coach hire requirement?</h2>
          <p style={sectionText}>
            Share your itinerary, group size and travel dates. We’ll structure
            a clear, dependable coach hire solution aligned to your programme.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Request proposal
            </a>
            <a href="/tour-operator-transport-uk" style={secondaryLink}>
              Tour operator transport UK →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const containerWide: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 28px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "46px 0 78px",
  background:
    "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 52%, #FFFFFF 100%)",
};

const section: CSSProperties = {
  padding: "100px 0",
};

const sectionSoft: CSSProperties = {
  padding: "94px 0",
  background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3F7 100%)",
};

const ctaSection: CSSProperties = {
  padding: "90px 0 48px",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 34,
  alignItems: "center",
};

const heroContent: CSSProperties = {
  position: "relative",
};

const heroVisualStack: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const heroImageFrame: CSSProperties = {
  position: "relative",
  minHeight: 320,
  borderRadius: 28,
  overflow: "hidden",
  boxShadow: "0 24px 60px rgba(18, 36, 56, 0.14)",
  border: "1px solid rgba(18, 36, 56, 0.08)",
};

const heroImage: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: 320,
  objectFit: "cover",
};

const heroImageOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(10,29,48,0.04) 0%, rgba(10,29,48,0.34) 100%)",
};

const heroFloatingCard: CSSProperties = {
  position: "relative",
  marginTop: -42,
  marginLeft: "auto",
  width: "min(92%, 420px)",
  padding: "24px",
  borderRadius: 24,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 18px 40px rgba(18, 36, 56, 0.10)",
};

const proofStrip: CSSProperties = {
  marginTop: 28,
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
};

const proofItem: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#E8EEF4",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.76)",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 42,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "12px 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2.2rem, 5.8vw, 4.8rem)",
  lineHeight: 1.03,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 780,
  fontSize: "clamp(2rem, 4vw, 3.6rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 64,
  height: 3,
  margin: "18px 0 26px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(18, 36, 56, 0.78)",
};

const heroSubText: CSSProperties = {
  margin: "14px 0 0",
  maxWidth: 620,
  fontSize: 13,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.58)",
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
  gap: 14,
  flexWrap: "wrap",
  alignItems: "center",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 999,
  background: "#10263C",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(16,38,60,0.10)",
  boxShadow: "0 10px 24px rgba(16,38,60,0.16)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  paddingBottom: 2,
  borderBottom: "1px solid rgba(91,124,153,0.34)",
};

const pillRow: CSSProperties = {
  marginTop: 20,
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
};

const pill: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#EAF0F5",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.74)",
};

const floatingEyebrow: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.48)",
};

const floatingGrid: CSSProperties = {
  display: "grid",
  gap: 14,
};

const floatingValue: CSSProperties = {
  margin: "0 0 4px",
  fontSize: 18,
  lineHeight: 1.2,
  color: "#10263C",
  fontWeight: 700,
};

const floatingLabel: CSSProperties = {
  margin: 0,
  fontSize: 14,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.66)",
};

const cardGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gap: 24,
};

const card: CSSProperties = {
  display: "block",
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
};

const cardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  fontWeight: 700,
  color: "#10263C",
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18, 36, 56, 0.72)",
};

const listPanel: CSSProperties = {
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const listGrid: CSSProperties = {
  marginTop: 42,
  display: "grid",
  gap: 16,
};

const listItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
  fontSize: 18,
  lineHeight: 1.7,
  color: "#10263C",
};

const lineItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
  fontSize: 20,
  lineHeight: 1.5,
  color: "#10263C",
};

const editorialPanel: CSSProperties = {
  padding: "34px 30px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.5)",
};

const panelTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  color: "#10263C",
};

const panelText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18, 36, 56, 0.72)",
};
