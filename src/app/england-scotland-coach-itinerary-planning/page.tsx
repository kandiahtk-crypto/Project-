import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "England & Scotland Coach Itinerary Planning | UK Inbound Ground Transport",
  description:
    "Operational itinerary planning for multi-day coach programmes across England and Scotland, built for tour operators and DMCs.",
  alternates: {
    canonical: "/england-scotland-coach-itinerary-planning",
  },
};

const cards = [
  {
    "title": "London → Oxford → Cotswolds",
    "text": "Use shorter first-stage routing to create a smoother transition from London into regional touring."
  },
  {
    "title": "York as a northern bridge",
    "text": "York can break the journey north and reduce the pressure created by trying to move from southern England to Scotland in one long touring day."
  },
  {
    "title": "Edinburgh & central Scotland",
    "text": "Structure hotel access, city touring and onward departure so the programme does not lose useful touring time."
  },
  {
    "title": "Highlands extensions",
    "text": "Build realistic journey times, rural road allowances and driver feasibility into any Highlands section."
  }
];

const steps = [
  {
    "day": "Day 1–2",
    "title": "London gateway & city programme",
    "text": "Arrival handling, hotel positioning and city touring."
  },
  {
    "day": "Day 3",
    "title": "London → Oxford → Cotswolds",
    "text": "Transition into regional touring with manageable mileage."
  },
  {
    "day": "Day 4",
    "title": "Cotswolds → York",
    "text": "Use York as the bridge to northern England."
  },
  {
    "day": "Day 5",
    "title": "York → Edinburgh",
    "text": "Cross-border movement with useful arrival time in Edinburgh."
  },
  {
    "day": "Day 6+",
    "title": "Scotland programme",
    "text": "Continue to central Scotland or the Highlands with routing validated against the full driver schedule."
  }
];

export default function Page() {
  return (
    <main>
      <section style={heroSection}>
        <div style={container}>
          <p style={eyebrow}>Itinerary blueprint</p>
          <h1 style={heroTitle}>How to sequence multi-day coach travel across England and Scotland.</h1>
          <div style={divider} />
          <p style={heroText}>A strong itinerary is not only about destination order. It must also work operationally for driving time, hotel positioning, luggage, attraction timings and the overall pace of the programme.</p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>Contact us</a>
            <a href="/operational-guides" style={heroLink}>Operational guides →</a>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>Operational considerations</p>
          <h2 style={sectionTitle}>Build the programme around the real operating environment.</h2>

          <div style={grid}>
            {cards.map((item) => (
              <article key={item.title} style={card}>
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <p style={sectionLabel}>Planning framework</p>
          <h2 style={sectionTitle}>A practical sequence for tour operators and DMCs.</h2>

          <div style={itineraryList}>
            {steps.map((item) => (
              <div key={item.title} style={itineraryItem}>
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

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>Programme review</p>
          <h2 style={sectionTitle}>Validate the transport plan before operations begin.</h2>

          <div style={list}>
            <div style={item}><div style={accentLine} /><p style={itemText}>Review routing, timings, vehicle suitability and luggage assumptions.</p></div>
            <div style={item}><div style={accentLine} /><p style={itemText}>Check driver-hours feasibility across the whole programme, not only one day at a time.</p></div>
            <div style={item}><div style={accentLine} /><p style={itemText}>Identify access constraints, peak-day risks and contingency requirements.</p></div>
            <div style={item}><div style={accentLine} /><p style={itemText}>Align coach allocation with the operator's service level and departure structure.</p></div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={container}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>Need an England & Scotland routing reviewed?</h2>
          <p style={sectionText}>
            Share your routing, dates, passenger numbers and programme structure. We can review the transport requirements and provide availability and trade quotation support.
          </p>
          <a href="/contact" style={button}>Contact us</a>
        </div>
      </section>
    </main>
  );
}

const container: CSSProperties = { maxWidth: 900, margin: "0 auto", padding: "0 24px" };
const heroSection: CSSProperties = { padding: "48px 0 64px" };
const section: CSSProperties = { padding: "80px 0" };
const sectionSoft: CSSProperties = { padding: "80px 0", background: "#F8F5EF" };
const ctaSection: CSSProperties = { padding: "64px 0 48px" };
const eyebrow: CSSProperties = { fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(11,26,43,0.5)" };
const sectionLabel: CSSProperties = { marginBottom: 12, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(11,26,43,0.5)" };
const heroTitle: CSSProperties = { margin: "14px 0 16px", fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 400, fontFamily: "var(--font-serif)", color: "#0B1A2B" };
const sectionTitle: CSSProperties = { marginBottom: 24, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.08, letterSpacing: "-0.025em", fontWeight: 400, fontFamily: "var(--font-serif)", color: "#0B1A2B" };
const ctaTitle: CSSProperties = { marginBottom: 16, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.08, letterSpacing: "-0.025em", fontWeight: 400, fontFamily: "var(--font-serif)", color: "#0B1A2B" };
const divider: CSSProperties = { width: 48, height: 2, margin: "16px 0 24px", background: "linear-gradient(90deg, #C9A227, #E3C565)", borderRadius: 999 };
const heroText: CSSProperties = { fontSize: 17, lineHeight: 1.8, color: "rgba(11,26,43,0.7)", margin: 0, maxWidth: 720 };
const sectionText: CSSProperties = { fontSize: 17, lineHeight: 1.8, color: "rgba(11,26,43,0.7)", margin: 0 };
const heroActions: CSSProperties = { marginTop: 28, display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" };
const primaryButton: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "0 22px", borderRadius: 999, background: "#F2EEE6", color: "#0B1A2B", textDecoration: "none", fontWeight: 600, border: "1px solid rgba(11, 26, 43, 0.08)" };
const heroLink: CSSProperties = { fontSize: 16, fontWeight: 500, color: "#0B1A2B", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 };
const grid: CSSProperties = { display: "grid", gap: 24 };
const card: CSSProperties = { padding: "28px", borderRadius: 24, background: "#FBFAF7", border: "1px solid rgba(11,26,43,0.06)" };
const cardTitle: CSSProperties = { margin: "0 0 10px", fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 400, color: "#0B1A2B" };
const cardText: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(11,26,43,0.7)" };
const itineraryList: CSSProperties = { marginTop: 40, display: "grid", gap: 28 };
const itineraryItem: CSSProperties = { display: "grid", gridTemplateColumns: "80px 1fr", gap: 20, paddingBottom: 20, borderBottom: "1px solid rgba(11,26,43,0.08)" };
const itineraryDay: CSSProperties = { fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(11,26,43,0.5)", paddingTop: 6 };
const itineraryTitle: CSSProperties = { margin: "0 0 6px", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontFamily: "var(--font-serif)", color: "#0B1A2B", fontWeight: 400 };
const itineraryText: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.8, color: "rgba(11,26,43,0.7)" };
const list: CSSProperties = { display: "grid", gap: 24 };
const item: CSSProperties = { display: "flex", gap: 12, alignItems: "flex-start" };
const accentLine: CSSProperties = { width: 40, height: 2, marginTop: 10, background: "linear-gradient(90deg, #C9A227, #E3C565)", borderRadius: 999 };
const itemText: CSSProperties = { margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(11,26,43,0.7)" };
const button: CSSProperties = { display: "inline-block", marginTop: 20, padding: "14px 20px", borderRadius: 999, background: "#F2EEE6", textDecoration: "none", color: "#0B1A2B", fontWeight: 600 };
