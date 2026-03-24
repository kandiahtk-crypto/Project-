import type { CSSProperties } from "react";
import type { Metadata } from "next";

const pageUrl = "https://www.ukinboundgroundtransport.com/markets/china";

export const metadata: Metadata = {
  title: "China Market | UK Inbound Ground Transport",
  description:
    "Premium UK, Scotland and Ireland ground transport support for China-market itineraries, including 12-day touring programmes, airport arrivals, regional routing and multi-country programme delivery.",
  alternates: {
    canonical: "/markets/china",
  },
  openGraph: {
    title: "China Market | UK Inbound Ground Transport",
    description:
      "Structured transport support for China-market UK, Scotland and Ireland itineraries, including 12-day touring formats.",
    url: pageUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const supportAreas = [
  {
    title: "England touring",
    text: "London, Oxford, Bath, Cambridge, York and wider England touring routes structured around realistic pacing and clear daily sequencing.",
  },
  {
    title: "Scotland programmes",
    text: "Edinburgh, Glasgow, Highland routing and scenic touring delivered with strong operational awareness across longer travel days.",
  },
  {
    title: "Ireland touring",
    text: "Dublin, Galway, Killarney and wider Ireland circuits supported through dependable cross-region coordination and timing control.",
  },
  {
    title: "UK & Ireland combinations",
    text: "Multi-country programmes linking England, Scotland and Ireland within one itinerary, with transport aligned to the wider programme flow.",
  },
];

const itineraryDays = [
  {
    day: "Day 1",
    title: "Arrival in London",
    text: "Airport arrivals, hotel transfers and initial programme positioning across London.",
  },
  {
    day: "Day 2",
    title: "London touring",
    text: "Full-day city programme covering major visitor points with coordinated timing and urban routing.",
  },
  {
    day: "Day 3",
    title: "London – Oxford – Bath",
    text: "Transition from gateway city touring into classic England heritage routing.",
  },
  {
    day: "Day 4",
    title: "Bath – Stratford-upon-Avon – York",
    text: "Structured inland routing across heritage destinations with realistic journey pacing.",
  },
  {
    day: "Day 5",
    title: "York – Edinburgh",
    text: "Northern England to Scotland transition requiring clear timing and well-managed movement flow.",
  },
  {
    day: "Day 6",
    title: "Edinburgh touring",
    text: "Capital-city programme work with local touring, hotel coordination and controlled timing.",
  },
  {
    day: "Day 7",
    title: "Edinburgh – Highlands route",
    text: "Longer Scotland touring day with scenic routing and operational discipline.",
  },
  {
    day: "Day 8",
    title: "Scotland continuation",
    text: "Regional touring and onward programme progression with realistic route planning.",
  },
  {
    day: "Day 9",
    title: "Scotland – Ireland connection",
    text: "Flight or ferry transition into Ireland with coordinated transfer handling.",
  },
  {
    day: "Day 10",
    title: "Dublin – Galway routing",
    text: "Ireland touring progression from gateway entry into broader regional programme flow.",
  },
  {
    day: "Day 11",
    title: "Ireland touring circuit",
    text: "Western or southern Ireland day touring with strong timing and route awareness.",
  },
  {
    day: "Day 12",
    title: "Departure transfer",
    text: "Final hotel positioning and departure movement aligned to flight or onward travel requirements.",
  },
];

const servicePoints = [
  "Airport arrivals and departure coordination",
  "London hotel positioning and city touring",
  "England heritage routing",
  "Scotland touring and Highland programmes",
  "Ireland touring circuits",
  "Cross-border UK & Ireland itinerary flow",
  "Escorted touring series and private groups",
  "Programme-led support across longer touring durations",
];

export default function ChinaMarketPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroGrid} className="split-grid">
            <div>
              <p style={eyebrow}>China market</p>

              <h1 style={heroTitle}>
                Premium UK, Scotland &amp; Ireland touring support for
                China-market itineraries.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                We support travel companies, tour operators and programme
                planners serving the China market with structured ground
                transport across England, Scotland and Ireland. From airport
                arrivals and city positioning to multi-region touring and final
                departure coordination, our focus is on dependable delivery,
                clear routing and transport that supports the wider itinerary.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={primaryButton}>
                  Request transport support
                </a>
                <a href="/markets" style={secondaryLink}>
                  View all markets →
                </a>
              </div>
            </div>

            <div style={heroPanel} className="luxury-card">
              <p style={panelEyebrow}>Built for</p>
              <h2 style={heroPanelTitle}>
                China-market programmes that require strong sequencing, reliable
                pacing and multi-country itinerary control.
              </h2>

              <div style={heroPanelDivider} />

              <div style={heroPanelGrid}>
                <div>
                  <p style={metaHeading}>Coverage</p>
                  <p style={metaText}>England • Scotland • Ireland</p>
                </div>

                <div>
                  <p style={metaHeading}>Common format</p>
                  <p style={metaText}>12-day touring itineraries</p>
                </div>

                <div>
                  <p style={metaHeading}>Programme types</p>
                  <p style={metaText}>
                    Escorted touring • Private groups • Multi-region touring
                  </p>
                </div>

                <div>
                  <p style={metaHeading}>Focus</p>
                  <p style={metaText}>
                    Routing • Timing • Coordination • Delivery clarity
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
              <p style={sectionLabel}>Programme overview</p>
              <h2 style={sectionTitle}>
                Structured support for China-market UK and Ireland programmes.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                China-market programmes often combine high destination density,
                premium service expectations and tightly sequenced regional
                movement. We support these demands through programme-led
                transport planning designed to align with hotel flow,
                sightseeing priorities, day-to-day timing and wider itinerary
                structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Regional coverage</p>
              <h2 style={sectionTitle}>
                We service all of England, Scotland and Ireland.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Whether the programme focuses on London and southern England,
                extends north through Scotland, or continues into Ireland, our
                services support the wider route as one connected operational
                structure.
              </p>
            </div>
          </div>

          <div style={cardGrid}>
            {supportAreas.map((item) => (
              <article key={item.title} style={card} className="luxury-card">
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
              <p style={sectionLabel}>Example itinerary</p>
              <h2 style={sectionTitle}>
                Typical 12-day England, Scotland &amp; Ireland itinerary
                structure.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                A 12-day itinerary is a strong format for buyers seeking broad
                regional coverage across the British Isles. These programmes
                need realistic journey times, clear country-to-country
                transitions and well-managed day sequencing so the itinerary
                remains commercially workable and operationally smooth.
              </p>
            </div>
          </div>

          <div style={itineraryList}>
            {itineraryDays.map((item) => (
              <div key={item.day} style={itineraryItem}>
                <div style={itineraryDay}>{item.day}</div>
                <div>
                  <h3 style={itineraryTitle}>{item.title}</h3>
                  <p style={itineraryText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={introSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>What we support</p>
              <h2 style={sectionTitle}>
                Transport support aligned to the structure of the itinerary.
              </h2>
            </div>

            <div>
              <div style={serviceList}>
                {servicePoints.map((item) => (
                  <div key={item} style={serviceItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Why this matters</p>
          <h2 style={sectionTitle}>
            China-market programmes need more than simple vehicle supply.
          </h2>
          <p style={sectionText}>
            Our role is to support the operational flow of the programme by
            aligning routing, timing, regional transitions and service delivery
            to the shape of the itinerary. That helps maintain programme
            structure across England, Scotland and Ireland without losing pace,
            clarity or guest experience.
          </p>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning a 12-day China-market itinerary across the UK and Ireland?
          </h2>

          <p style={sectionText}>
            Tell us about your route, arrival points, programme structure and
            delivery priorities. We will help shape a transport approach that
            supports the full itinerary across England, Scotland and Ireland.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/markets" style={secondaryLink}>
              View all markets →
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
  background: "#F8F5EF",
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
  margin: "14px 0 16px",
  maxWidth: 760,
  fontSize: "clamp(2.7rem, 7vw, 5.2rem)",
  lineHeight: 1.01,
  letterSpacing: "-0.04em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.4rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 720,
  fontSize: 17,
  lineHeight: 1.9,
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
  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
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

const cardGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gap: 24,
};

const card: CSSProperties = {
  padding: "28px 26px",
  borderRadius: 28,
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const cardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.6rem, 3vw, 2rem)",
  lineHeight: 1.08,
  fontWeight: 400,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const itineraryList: CSSProperties = {
  marginTop: 42,
  display: "grid",
  gap: 22,
};

const itineraryItem: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "88px 1fr",
  gap: 20,
  paddingBottom: 18,
  borderBottom: "1px solid rgba(11,26,43,0.08)",
};

const itineraryDay: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
  paddingTop: 6,
};

const itineraryTitle: CSSProperties = {
  margin: "0 0 6px",
  fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
  fontWeight: 400,
};

const itineraryText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
};

const serviceList: CSSProperties = {
  display: "grid",
  gap: 18,
};

const serviceItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(11,26,43,0.08)",
  fontSize: 18,
  lineHeight: 1.7,
  color: "#0B1A2B",
};
