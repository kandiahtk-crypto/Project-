import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Coach Driver Hours Planning for Tour Operators | UK Inbound Ground Transport",
  description:
    "A practical guide for tour operators and DMCs on designing UK coach itineraries around applicable drivers' hours, breaks, rest and duty constraints.",
  alternates: {
    canonical: "/uk-coach-driver-hours-planning",
  },
};

const cards = [
  {
    "title": "Daily driving limits",
    "text": "Under assimilated rules, the standard daily driving limit is 9 hours, extendable to 10 hours twice in a week."
  },
  {
    "title": "Break planning",
    "text": "Under assimilated rules, drivers normally need a total 45-minute break after no more than 4 hours 30 minutes of driving."
  },
  {
    "title": "Daily & weekly rest",
    "text": "Rest requirements can determine hotel timing, early departures and whether a programme needs a second driver."
  },
  {
    "title": "Domestic-rule exceptions",
    "text": "Some passenger operations fall under GB domestic rules instead, so the applicable regime must be confirmed before planning."
  }
];

const steps = [
  {
    "day": "Check 1",
    "title": "What rules apply?",
    "text": "Confirm whether the operation falls under assimilated, AETR or GB domestic rules."
  },
  {
    "day": "Check 2",
    "title": "Map actual driving time",
    "text": "Use realistic road time rather than brochure distance, including positioning and empty running."
  },
  {
    "day": "Check 3",
    "title": "Protect breaks and rest",
    "text": "Do not rely on attraction visits or passenger free time unless the period genuinely qualifies as driver break or rest."
  },
  {
    "day": "Check 4",
    "title": "Review the whole series",
    "text": "Validate consecutive days, weekly totals and rest recovery rather than checking each day in isolation."
  }
];

export default function Page() {
  return (
    <main>
      <section style={heroSection}>
        <div style={container}>
          <p style={eyebrow}>Driver-hours planning</p>
          <h1 style={heroTitle}>Design the itinerary around legal driving and rest constraints before the programme is sold.</h1>
          <div style={divider} />
          <p style={heroText}>For most commercial coach touring, the applicable rules depend on the vehicle, service type and whether the journey is domestic or international. The itinerary should be validated before timings are promised to passengers.</p>

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
          <h2 style={ctaTitle}>Want us to review the driver-hours feasibility of your programme?</h2>
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
