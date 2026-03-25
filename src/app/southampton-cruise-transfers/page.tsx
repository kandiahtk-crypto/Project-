import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southampton Cruise Transfers | UK Group Transport",
  description:
    "Southampton cruise transfers for tour operators, DMCs and travel planners. Structured group transport for arrivals, departures and UK touring programmes.",
};

export default function SouthamptonPage() {
  return (
    <main style={container}>
      <section style={section}>
        <p style={eyebrow}>Southampton cruise transport</p>

        <h1 style={title}>
          Southampton cruise transfers for group touring programmes.
        </h1>

        <p style={text}>
          We support tour operators, DMCs and travel planners with structured
          Southampton cruise transfers, aligning port movements with wider UK
          and Ireland touring itineraries.
        </p>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Cruise transport support</h2>

        <ul style={list}>
          <li>Port arrivals and departures on turnaround days</li>
          <li>Pre and post-cruise touring connections</li>
          <li>Transfers between Southampton, London and regional destinations</li>
          <li>Multi-coach coordination for large groups</li>
          <li>Shore-side excursion transport</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Who we work with</h2>

        <p style={text}>
          Our Southampton services are built for professional programme
          delivery.
        </p>

        <ul style={list}>
          <li>Tour operators running cruise-linked itineraries</li>
          <li>DMCs managing port logistics and touring flow</li>
          <li>Travel planners coordinating group arrivals and departures</li>
        </ul>
      </section>

      <section style={sectionSoft}>
        <h2 style={heading}>Typical Southampton routing</h2>

        <ul style={list}>
          <li>Southampton to Central London hotels</li>
          <li>Southampton to Heathrow and Gatwick airports</li>
          <li>Southampton to Oxford to Bath to West England</li>
          <li>Southampton to direct long-distance touring departures</li>
        </ul>
      </section>

      <section style={section}>
        <h2 style={heading}>Structured cruise coordination</h2>

        <p style={text}>
          Cruise operations require precise timing and coordination. We align
          transport with port schedules, group sizes and onward programme flow
          to ensure smooth transitions between sea and land itineraries.
        </p>
      </section>

      <section style={cta}>
        <h2 style={heading}>Planning a Southampton cruise programme?</h2>

        <p style={text}>
          Share your cruise schedule, group size and onward itinerary. We will
          structure a clear and reliable transport plan aligned to your
          programme.
        </p>

        <a href="/contact" style={button}>
          Request cruise transport support
        </a>
      </section>
    </main>
  );
}

const container = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "40px 24px 80px",
};

const section = {
  marginBottom: 80,
};

const sectionSoft = {
  marginBottom: 80,
  padding: "32px",
  background: "#F8F5EF",
  borderRadius: 20,
};

const eyebrow = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "rgba(11,26,43,0.5)",
};

const title = {
  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
  lineHeight: 1.05,
  fontFamily: "var(--font-serif)",
  margin: "12px 0 20px",
  color: "#0B1A2B",
};

const heading = {
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  marginBottom: 16,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const text = {
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.75)",
  maxWidth: 640,
};

const list = {
  marginTop: 16,
  paddingLeft: 18,
  lineHeight: 1.8,
};

const cta = {
  padding: "40px",
  background: "#FCFAF6",
  borderRadius: 24,
  textAlign: "center" as const,
};

const button = {
  display: "inline-block",
  marginTop: 20,
  padding: "14px 24px",
  borderRadius: 999,
  background: "#0B1A2B",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
};
