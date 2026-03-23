import type { CSSProperties } from "react";
import SiteHeader from "../../components/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section style={hero}>
          <div style={container}>
            <p style={eyebrow}>About</p>

            <h1 style={title}>
              A transport partner built for professional inbound touring.
            </h1>

            <p style={text}>
              UK Inbound Ground Transport supports international tour operators,
              DMCs and travel brands with structured transport delivery across
              the United Kingdom and Ireland.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section style={section}>
          <div style={containerNarrow}>
            <h2 style={heading}>Built around programme flow</h2>

            <p style={text}>
              Successful touring depends on timing, coordination and consistency.
              Our approach focuses on programme flow — ensuring each stage of the
              itinerary operates with clarity from arrival through to departure.
            </p>

            <h2 style={heading}>Who we support</h2>

            <p style={text}>
              We work with international operators, DMCs and travel brands
              delivering structured itineraries across England, Scotland, Wales
              and Ireland.
            </p>

            <h2 style={heading}>What defines our service</h2>

            <div style={list}>
              <div style={item}>Structured operational delivery</div>
              <div style={item}>Clear coordination and communication</div>
              <div style={item}>UK & Ireland touring coverage</div>
              <div style={item}>Consistent service standards</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaSection}>
          <div style={container}>
            <h2 style={ctaTitle}>Planning your next programme?</h2>

            <a href="/contact" style={ctaButton}>
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

/* STYLES */

const hero: CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "100px 20px",
};

const section: CSSProperties = {
  padding: "90px 20px",
};

const container: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const containerNarrow: CSSProperties = {
  maxWidth: "700px",
  margin: "0 auto",
};

const eyebrow: CSSProperties = {
  color: "#D4AF37",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontSize: "12px",
};

const title: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "48px",
  marginTop: "20px",
};

const heading: CSSProperties = {
  fontFamily: "var(--font-serif)",
  marginTop: "40px",
};

const text: CSSProperties = {
  color: "#556070",
  lineHeight: 1.8,
  marginTop: "14px",
};

const list: CSSProperties = {
  marginTop: "20px",
  display: "grid",
  gap: "10px",
};

const item: CSSProperties = {
  borderBottom: "1px solid rgba(0,0,0,0.08)",
  paddingBottom: "8px",
};

const ctaSection: CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "80px 20px",
  textAlign: "center",
};

const ctaTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
};

const ctaButton: CSSProperties = {
  marginTop: "20px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "999px",
  fontWeight: 700,
  textDecoration: "none",
};
