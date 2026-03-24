import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "England Touring Programmes | UK Inbound Ground Transport",
  description:
    "Structured transport support for England touring programmes including London, Oxford, Bath, Cambridge, York and the Lake District. Built for tour operators, DMCs and travel planners.",
  alternates: {
    canonical: "/england-touring",
  },
};

export default function EnglandTouringPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={container}>
          <p style={eyebrow}>England touring</p>

          <h1 style={heroTitle}>
            Programme-led transport across England touring routes.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support tour operators, DMCs and travel planners delivering
            England programmes across London, Oxford, Bath, Cambridge, York and
            the Lake District, with structured transport aligned to itinerary
            flow and operational realities.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>Core touring routes</p>

          <h2 style={sectionTitle}>
            Destinations central to England touring programmes.
          </h2>

          <div style={grid}>
            <article style={card}>
              <h3 style={cardTitle}>London &amp; gateway arrivals</h3>
              <p style={cardText}>
                Airport arrivals, hotel positioning and early programme staging
                across London remain central to most England itineraries.
              </p>
            </article>

            <article style={card}>
              <h3 style={cardTitle}>Oxford, Bath &amp; Cambridge</h3>
              <p style={cardText}>
                Classic heritage cities requiring careful routing, timing
                control and realistic scheduling across short-distance touring
                days.
              </p>
            </article>

            <article style={card}>
              <h3 style={cardTitle}>York &amp; northern England</h3>
              <p style={cardText}>
                Longer routing days linking central England to northern
                destinations with structured sequencing and operational
                awareness.
              </p>
            </article>

            <article style={card}>
              <h3 style={cardTitle}>Lake District touring</h3>
              <p style={cardText}>
                Scenic routing and rural road conditions requiring experienced
                planning and realistic journey pacing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={container}>
          <p style={sectionLabel}>How we support</p>

          <h2 style={sectionTitle}>
            Structured delivery across England programmes.
          </h2>

          <div style={list}>
            <div style={item}>
              <div style={accentLine} />
              <p style={itemText}>
                Alignment of transport with daily itinerary pacing and service
                expectations.
              </p>
            </div>

            <div style={item}>
              <div style={accentLine} />
              <p style={itemText}>
                Coordination across multi-stop routing, hotel positioning and
                regional transitions.
              </p>
            </div>

            <div style={item}>
              <div style={accentLine} />
              <p style={itemText}>
                Support for fixed-departure series and repeatable programme
                structures.
              </p>
            </div>

            <div style={item}>
              <div style={accentLine} />
              <p style={itemText}>
                Clear operational planning across cities, countryside routes and
                heritage destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={container}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Planning an England touring programme?
          </h2>

          <p style={sectionText}>
            Share your routing, timings and programme structure. We will help
            shape a transport approach aligned to your itinerary and delivery
            requirements.
          </p>

          <a href="/contact" style={button}>
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}

const container: CSSProperties = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "48px 0 64px",
};

const section: CSSProperties = {
  padding: "80px 0",
};

const sectionSoft: CSSProperties = {
  padding: "80px 0",
  background: "#F8F5EF",
};

const ctaSection: CSSProperties = {
  padding: "64px 0 48px",
};

const eyebrow: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const sectionLabel: CSSProperties = {
  marginBottom: 12,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const heroTitle: CSSProperties = {
  margin: "12px 0",
  fontSize: "clamp(2.4rem, 6vw, 4rem)",
  fontFamily: "var(--font-serif)",
};

const sectionTitle: CSSProperties = {
  marginBottom: 24,
  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
  fontFamily: "var(--font-serif)",
};

const ctaTitle: CSSProperties = {
  marginBottom: 16,
  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
  fontFamily: "var(--font-serif)",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  margin: "16px 0 24px",
  background: "linear-gradient(90deg, #C9A227, #E3C565)",
};

const heroText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
};

const sectionText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.8,
  color: "rgba(11,26,43,0.7)",
};

const grid: CSSProperties = {
  display: "grid",
  gap: 24,
};

const card: CSSProperties = {
  padding: "28px",
  borderRadius: 24,
  background: "#FBFAF7",
  border: "1px solid rgba(11,26,43,0.06)",
};

const cardTitle: CSSProperties = {
  marginBottom: 10,
  fontFamily: "var(--font-serif)",
  fontSize: 22,
};

const cardText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.7,
  color: "rgba(11,26,43,0.7)",
};

const list: CSSProperties = {
  display: "grid",
  gap: 24,
};

const item: CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
};

const accentLine: CSSProperties = {
  width: 40,
  height: 2,
  marginTop: 10,
  background: "linear-gradient(90deg, #C9A227, #E3C565)",
};

const itemText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.7,
  color: "rgba(11,26,43,0.7)",
};

const button: CSSProperties = {
  display: "inline-block",
  marginTop: 20,
  padding: "14px 20px",
  borderRadius: 999,
  background: "#F2EEE6",
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 600,
};
