import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners. Fixed-departure touring, private groups, cruise port support, London movements and multi-region programmes across England, Scotland and Ireland.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "UK Inbound Ground Transport | Premium UK & Ireland Touring Support",
    description:
      "Programme-led transport support across England, Scotland and Ireland for tour operators, DMCs and travel planners.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const supportItems = [
  "Fixed-departure touring series",
  "Private group itineraries",
  "Cruise port support",
  "London arrivals, departures and events",
  "England, Scotland and Ireland programmes",
  "Multi-region UK & Ireland touring",
];

const markets = [
  {
    title: "United States",
    href: "/markets/usa",
    text: "Supporting US-based tour operators and travel planners delivering structured UK and Ireland programmes.",
  },
  {
    title: "Europe",
    href: "/markets/europe",
    text: "Working with European partners managing inbound programmes requiring reliable, multi-region coordination.",
  },
  {
    title: "China",
    href: "/markets/china",
    text: "Supporting Chinese outbound travel specialists with structured touring logistics and programme delivery.",
  },
  {
    title: "India",
    href: "/markets/india",
    text: "Working with Indian travel companies delivering premium UK and Ireland itineraries with clear operational flow.",
  },
];

const regionCards = [
  {
    title: "England heritage touring",
    href: "/england-touring",
    text: "London, Oxford, Bath, Cambridge, York and the Lake District remain central to classic Britain itineraries.",
  },
  {
    title: "Scotland programmes",
    href: "/scotland-programmes",
    text: "Edinburgh, Glasgow, Loch Ness and the Highlands require realistic daily planning and operational awareness.",
  },
  {
    title: "Ireland touring circuits",
    href: "/ireland-touring",
    text: "Dublin, Galway, Killarney and the Cliffs of Moher continue to feature strongly in Ireland touring routes.",
  },
  {
    title: "Cruise port support",
    href: "/services",
    text: "Transport coordination for cruise-related arrivals, departures, shore-side touring and onward programme movements.",
  },
];

const planningCards = [
  {
    title: "Fixed-departure touring",
    href: "/programmes",
    text: "Structured, repeatable programme delivery across scheduled series.",
  },
  {
    title: "Private group itineraries",
    href: "/programmes",
    text: "Flexible transport support aligned to tailored programme flow.",
  },
  {
    title: "UK & Ireland touring",
    href: "/programmes",
    text: "Multi-region routing across England, Scotland and Ireland.",
  },
  {
    title: "Cruise port movements",
    href: "/services",
    text: "Arrival, departure and shore-side transport coordination.",
  },
];

const faqs = [
  {
    q: "Do you work with individual travellers?",
    a: "We are positioned for tour operators, DMCs and travel planners managing structured programmes rather than individual bookings.",
  },
  {
    q: "Can you support UK and Ireland programmes?",
    a: "Yes. We support multi-region programmes across England, Scotland and Ireland with consistent delivery.",
  },
  {
    q: "Do you handle fixed-departure touring series?",
    a: "We support structured, repeatable touring programmes with consistent routing and operational coordination.",
  },
  {
    q: "Do you provide vehicles only or full coordination?",
    a: "Our focus is programme delivery, aligning vehicles, routing and timing with the wider itinerary.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroShell}>
            <div style={heroGrid} className="hero-grid">
              <div>
                <p style={eyebrow}>UK inbound ground transport</p>

                <h1 style={heroTitle}>
                  Premium transport support for UK &amp; Ireland touring
                  programmes.
                </h1>

                <div style={divider} />

                <p style={heroText}>
                  We support tour operators, DMCs and travel planners with
                  programme-led transport delivery across fixed-departure
                  series, private groups, cruise port support, London movements
                  and multi-region itineraries across England, Scotland and
                  Ireland.
                </p>

                <div style={heroActions}>
                  <a href="/contact" style={primaryButton}>
                    Request transport support
                  </a>
                  <a href="/programmes" style={secondaryLink}>
                    Explore programmes →
                  </a>
                </div>
              </div>

              <div style={heroVisualWrap}>
                <div style={heroImageWrap} className="hero-image luxury-card">
                  <img
                    src="/hero-coach.png"
                    alt="Luxury UK touring coach"
                    style={heroImage}
                  />
                  <div style={heroImageOverlay} />
                </div>

                <div style={heroPanel} className="luxury-card">
                  <p style={panelEyebrow}>Coverage</p>
                  <h2 style={heroPanelTitle}>
                    Structured support across gateway cities, cruise ports and
                    regional touring routes.
                  </h2>

                  <div style={heroPanelDivider} />

                  <div style={heroPanelGrid}>
                    <div>
                      <p style={metaHeading}>Regions</p>
                      <p style={metaText}>England • Scotland • Ireland</p>
                    </div>

                    <div>
                      <p style={metaHeading}>Programme types</p>
                      <p style={metaText}>
                        Fixed-departure • Private groups • Cruise-linked touring
                      </p>
                    </div>

                    <div>
                      <p style={metaHeading}>Built for</p>
                      <p style={metaText}>
                        Tour operators • DMCs • Travel planners
                      </p>
                    </div>

                    <div>
                      <p style={metaHeading}>Focus</p>
                      <p style={metaText}>
                        Delivery clarity • Routing • Timing • Coordination
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Key gateways</p>

              <h2 style={sectionTitle}>
                Major UK &amp; Ireland arrival points we regularly support.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We support airport arrivals, cruise terminal movements and
                onward touring across the UK and Ireland, aligning transport
                with programme flow from the first point of entry.
              </p>
            </div>
          </div>

          <div style={gatewayGrid} className="gateway-grid">
            <div style={gatewayColumn} className="luxury-card">
              <div style={gatewayAccent} />
              <p style={gatewayHeading}>Airports</p>

              <div style={gatewayList}>
                <a href="/contact" style={gatewayLink}>
                  London Heathrow
                </a>
                <a href="/contact" style={gatewayLink}>
                  London Gatwick
                </a>
                <a href="/contact" style={gatewayLink}>
                  Manchester
                </a>
                <a href="/contact" style={gatewayLink}>
                  Edinburgh
                </a>
                <a href="/contact" style={gatewayLink}>
                  Glasgow
                </a>
                <a href="/contact" style={gatewayLink}>
                  Dublin
                </a>
              </div>
            </div>

            <div style={gatewayColumn} className="luxury-card">
              <div style={gatewayAccent} />
              <p style={gatewayHeading}>Cruise ports</p>

              <div style={gatewayList}>
                <a href="/contact" style={gatewayLink}>
                  Southampton Cruise Terminal
                </a>
                <a href="/contact" style={gatewayLink}>
                  Dover
                </a>
                <a href="/contact" style={gatewayLink}>
                  Liverpool
                </a>
                <a href="/contact" style={gatewayLink}>
                  Greenock
                </a>
                <a href="/contact" style={gatewayLink}>
                  Belfast
                </a>
                <a href="/contact" style={gatewayLink}>
                  Cobh
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>What we support</p>
              <h2 style={sectionTitle}>
                Programme-led transport aligned to the rhythm of touring.
              </h2>
            </div>

            <div style={supportGrid}>
              {supportItems.map((item) => (
                <div key={item} style={supportItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Planning</p>
              <h2 style={sectionTitle}>
                What type of programme are you planning?
              </h2>
              <p style={sectionText}>
                Select the structure closest to your requirement and explore the
                relevant support model.
              </p>
            </div>

            <div style={planningGrid} className="feature-grid">
              {planningCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={planningCard}
                  className="luxury-card"
                >
                  <div style={cardTopRow}>
                    <h3 style={cardTitle}>{item.title}</h3>
                    <span style={cardArrow}>→</span>
                  </div>
                  <p style={cardText}>{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>International markets</p>
              <h2 style={sectionTitle}>
                Supporting international partners across key inbound markets.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We work with tour operators, DMCs and travel planners globally,
                supporting inbound UK and Ireland programmes from major source
                markets including the United States, Europe, China and India.
              </p>
            </div>
          </div>

          <div style={marketsGrid}>
            {markets.map((market) => (
              <a
                key={market.title}
                href={market.href}
                style={marketCard}
                className="luxury-card"
              >
                <div style={cardTopRow}>
                  <h3 style={cardTitle}>{market.title}</h3>
                  <span style={cardArrow}>→</span>
                </div>
                <p style={cardText}>{market.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Touring regions</p>
              <h2 style={sectionTitle}>
                Established programme structures across England, Scotland and
                Ireland.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Our work supports touring structures used by international
                operators, from gateway arrivals and regional transitions to
                broader multi-stop itineraries.
              </p>
            </div>
          </div>

          <div style={regionsGrid} className="feature-grid">
            {regionCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                style={regionCard}
                className="luxury-card"
              >
                <div style={cardAccent} />
                <div style={cardTopRow}>
                  <h3 style={cardTitle}>{item.title}</h3>
                  <span style={cardArrow}>→</span>
                </div>
                <p style={cardText}>{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Programme structure</p>
              <h2 style={sectionTitle}>
                Typical touring routes and itinerary flow.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We support established programme structures used by
                international operators across England, Scotland and Ireland,
                from gateway arrivals and regional routing to multi-stop
                programme delivery.
              </p>

              <div style={editorialPanel} className="luxury-card">
                <p style={panelEyebrow}>Example England itinerary</p>
                <p style={panelText}>
                  London arrivals, Oxford, Bath, Cambridge, York and the Lake
                  District remain central to many England touring programmes.
                </p>
                <a href="/england-touring" style={panelLink}>
                  View example programme →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Frequently asked questions</p>
          <h2 style={sectionTitle}>
            Common questions from operators and planners.
          </h2>

          <div style={faqList}>
            {faqs.map((faq) => (
              <details key={faq.q} style={faqItem}>
                <summary style={faqQuestion}>
                  <span>{faq.q}</span>
                  <span style={faqPlus}>+</span>
                </summary>
                <p style={faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>
            Planning a UK or Ireland programme that needs transport support?
          </h2>
          <p style={sectionText}>
            Tell us about your routing, timings, port calls and programme
            requirements. We will help shape a structured transport approach
            around your itinerary.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/services" style={secondaryLink}>
              View services →
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
  padding: "40px 0 72px",
};

const heroShell: CSSProperties = {
  padding: "26px 0 0",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 32,
  alignItems: "start",
};

const heroVisualWrap: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 24,
};

const heroImageWrap: CSSProperties = {
  position: "relative",
  height: 320,
  borderRadius: "28px",
  overflow: "hidden",
  boxShadow: "0 30px 80px rgba(11,26,43,0.12)",
};

const heroImage: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1.02)",
};

const heroImageOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(11,26,43,0.05) 0%, rgba(11,26,43,0.35) 100%)",
};

const section: CSSProperties = {
  padding: "104px 0",
};

const sectionSoft: CSSProperties = {
  padding: "96px 0",
  background: "#F8F5EF",
};

const ctaSection: CSSProperties = {
  padding: "92px 0 48px",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 42,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 24px",
  maxWidth: 760,
  fontSize: "clamp(2.7rem, 10vw, 6rem)",
  lineHeight: 0.98,
  letterSpacing: "-0.05em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 780,
  fontSize: "clamp(2.1rem, 4vw, 3.9rem)",
  lineHeight: 1.03,
  letterSpacing: "-0.03em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 54,
  height: 2,
  margin: "18px 0 28px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 720,
  fontSize: 18,
  lineHeight: 1.92,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const heroActions: CSSProperties = {
  marginTop: 30,
  display: "flex",
  gap: 18,
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
  background: "#F2EEE6",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(11, 26, 43, 0.08)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

const heroPanel: CSSProperties = {
  padding: "28px",
  borderRadius: 30,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F6F1E8 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 10px 30px rgba(11, 26, 43, 0.04)",
  minHeight: "100%",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const heroPanelTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const heroPanelDivider: CSSProperties = {
  height: 1,
  margin: "22px 0",
  background: "rgba(11, 26, 43, 0.08)",
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
  color: "rgba(11, 26, 43, 0.5)",
};

const metaText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(11, 26, 43, 0.74)",
};

const gatewayGrid: CSSProperties = {
  marginTop: 40,
  display: "grid",
  gap: 28,
};

const gatewayColumn: CSSProperties = {
  display: "grid",
  gap: 16,
  padding: "28px 26px",
  borderRadius: 28,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F7F3EC 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 10px 30px rgba(11, 26, 43, 0.04)",
};

const gatewayAccent: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const gatewayHeading: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const gatewayList: CSSProperties = {
  display: "grid",
  gap: 12,
};

const gatewayLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  fontSize: 20,
  lineHeight: 1.5,
  color: "#0B1A2B",
  paddingBottom: 10,
  borderBottom: "1px solid rgba(11,26,43,0.08)",
  textDecoration: "none",
};

const supportGrid: CSSProperties = {
  display: "grid",
  gap: 18,
};

const supportItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 20,
  lineHeight: 1.5,
  color: "#0B1A2B",
};

const planningGrid: CSSProperties = {
  display: "grid",
  gap: 24,
};

const marketsGrid: CSSProperties = {
  marginTop: 48,
  display: "grid",
  gap: 24,
};

const regionsGrid: CSSProperties = {
  marginTop: 48,
  display: "grid",
  gap: 24,
};

const planningCard: CSSProperties = {
  display: "block",
  padding: "26px",
  borderRadius: 28,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  textDecoration: "none",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const marketCard: CSSProperties = {
  display: "block",
  padding: "28px 26px",
  borderRadius: 28,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  textDecoration: "none",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const regionCard: CSSProperties = {
  display: "block",
  padding: "28px 26px",
  borderRadius: 28,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  textDecoration: "none",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const cardTopRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 18,
  marginBottom: 10,
};

const cardTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.02em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
  flex: 1,
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const cardArrow: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "#C9A227",
  paddingTop: 6,
};

const editorialPanel: CSSProperties = {
  marginTop: 34,
  padding: "30px 28px",
  borderRadius: 30,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F7F3EC 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 10px 30px rgba(11, 26, 43, 0.04)",
};

const panelText: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const panelLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

const faqList: CSSProperties = {
  marginTop: 32,
  display: "grid",
  gap: 16,
};

const faqItem: CSSProperties = {
  padding: "0 0 16px",
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const faqQuestion: CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  cursor: "pointer",
  color: "#0B1A2B",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  padding: "4px 0",
};

const faqPlus: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "#C9A227",
  fontWeight: 400,
};

const faqAnswer: CSSProperties = {
  marginTop: 8,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(11, 26, 43, 0.72)",
};
