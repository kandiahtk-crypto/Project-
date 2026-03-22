import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | UK & Ireland Touring Logistics",
  description:
    "Premium UK & Ireland ground transport solutions for international tour operators, DMCs and travel brands.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroOverlay} />
        <div style={container}>
          <p style={heroEyebrow}>UK Inbound Ground Transport</p>

          <h1 style={heroTitle}>Premium delivery across every programme.</h1>

          <p style={heroText}>
            Premium ground transport solutions across the United Kingdom and
            Ireland for international tour operators, DMCs and travel brands
            requiring structured, reliable programme delivery.
          </p>

          <a href="/contact" style={cta}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* STATEMENT BAND */}
      <section style={band}>
        <div style={containerNarrow}>
          <h2 style={bandText}>
            Structured. Reliable. Professional touring logistics.
          </h2>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={approachSection}>
        <div style={approachInner}>
          <p style={approachLabel}>OUR APPROACH</p>

          <h2 style={approachHeading}>
            A
            <br />
            transport
            <br />
            partner,
            <br />
            not just a
            <br />
            supplier.
          </h2>

          <div style={approachBody}>
            <p style={approachParagraph}>
              We support international tour operators and DMCs with structured
              ground transport delivery across England, Scotland, Wales and
              Ireland.
            </p>

            <p style={approachParagraph}>
              Every programme is delivered with clarity, coordination and
              consistent execution from arrival through to departure.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>SERVICES</p>
          <h2 style={sectionHeading}>Transport support built for touring.</h2>

          <div style={serviceGrid}>
            <div style={serviceCard}>
              <h3 style={cardTitle}>Fixed-Departure Series</h3>
              <p style={cardText}>
                Structured coach and touring transport support for repeat
                departures with dependable operational flow.
              </p>
            </div>

            <div style={serviceCard}>
              <h3 style={cardTitle}>Multi-Region UK Touring</h3>
              <p style={cardText}>
                Reliable transport coordination across England, Scotland and
                Wales for complex programme routing.
              </p>
            </div>

            <div style={serviceCard}>
              <h3 style={cardTitle}>UK & Ireland Programmes</h3>
              <p style={cardText}>
                Ground transport solutions for cross-border itineraries
                requiring consistency, timing discipline and clear delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section style={sectionAlt}>
        <div style={container}>
          <p style={sectionLabel}>UK & IRELAND COVERAGE</p>
          <h2 style={sectionHeading}>
            Ground transport for international tour operators.
          </h2>

          <p style={bodyText}>
            We provide structured ground transport services across major UK and
            Ireland touring regions including London, Edinburgh, the Scottish
            Highlands, the Lake District, Wales and Ireland.
          </p>

          <p style={bodyText}>
            Our services support fixed-departure series, private touring groups
            and multi-country itineraries, ensuring reliable delivery across
            every route and schedule.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>WHY OPERATORS CHOOSE US</p>
          <h2 style={sectionHeading}>
            Programme-focused, operationally reliable.
          </h2>

          <div style={pointsList}>
            <div style={pointItem}>Structured programme delivery</div>
            <div style={pointItem}>Clear operational coordination</div>
            <div style={pointItem}>UK & Ireland coverage</div>
            <div style={pointItem}>Consistent service standards</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <div style={container}>
          <p style={sectionLabelLight}>PLAN YOUR NEXT PROGRAMME</p>
          <h2 style={ctaHeading}>
            Premium UK & Ireland touring logistics, delivered properly.
          </h2>

          <a href="/contact" style={ctaSecondary}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerTop}>
          <div>
            <p style={footerBrand}>UK Inbound Ground Transport</p>
            <p style={footerDesc}>
              Premium UK & Ireland ground transport solutions for international
              tour operators and travel brands.
            </p>
          </div>

          <div style={footerLinks}>
            <a href="/" style={footerLink}>
              Home
            </a>
            <a href="/about" style={footerLink}>
              About
            </a>
            <a href="/services" style={footerLink}>
              Services
            </a>
            <a href="/programmes" style={footerLink}>
              Programmes
            </a>
            <a href="/contact" style={footerLink}>
              Contact
            </a>
          </div>
        </div>

        <div style={footerBottom}>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: CSSProperties = {
  position: "relative",
  backgroundImage:
    "linear-gradient(rgba(3,10,24,0.78), rgba(3,10,24,0.78)), url('/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "84px 20px 88px",
  color: "white",
  overflow: "hidden",
};

const heroOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
};

const container: CSSProperties = {
  position: "relative",
  maxWidth: "1120px",
  margin: "0 auto",
};

const containerNarrow: CSSProperties = {
  maxWidth: "980px",
  margin: "0 auto",
};

const heroEyebrow: CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  margin: 0,
  fontWeight: 600,
};

const heroTitle: CSSProperties = {
  fontSize: "clamp(44px, 9vw, 82px)",
  lineHeight: 0.98,
  marginTop: "22px",
  marginBottom: 0,
  maxWidth: "900px",
  fontWeight: 700,
};

const heroText: CSSProperties = {
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "720px",
  color: "#D9E2F0",
  fontSize: "18px",
  lineHeight: 1.7,
};

const cta: CSSProperties = {
  marginTop: "28px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "2px",
};

const band: CSSProperties = {
  background: "#081528",
  padding: "34px 20px",
  textAlign: "center",
};

const bandText: CSSProperties = {
  color: "white",
  fontSize: "clamp(22px, 4vw, 34px)",
  lineHeight: 1.2,
  margin: 0,
  fontWeight: 600,
};

const approachSection: CSSProperties = {
  background: "#F3F3F3",
  padding: "120px 20px",
};

const approachInner: CSSProperties = {
  maxWidth: "520px",
  margin: "0 auto",
  textAlign: "center",
};

const approachLabel: CSSProperties = {
  color: "#C9A640",
  fontSize: "12px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  marginTop: 0,
  marginBottom: "40px",
  fontWeight: 500,
};

const approachHeading: CSSProperties = {
  margin: 0,
  fontSize: "clamp(48px, 12vw, 72px)",
  lineHeight: 1.05,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "#000000",
};

const approachBody: CSSProperties = {
  marginTop: "40px",
};

const approachParagraph: CSSProperties = {
  color: "#5B6475",
  fontSize: "clamp(18px, 4.5vw, 22px)",
  lineHeight: 1.8,
  marginTop: 0,
  marginBottom: "28px",
};

const section: CSSProperties = {
  padding: "80px 20px",
  background: "#FFFFFF",
};

const sectionAlt: CSSProperties = {
  padding: "80px 20px",
  background: "#F8FBFF",
};

const sectionLabel: CSSProperties = {
  color: "#C9A640",
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  margin: 0,
  fontWeight: 600,
};

const sectionLabelLight: CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  margin: 0,
  fontWeight: 600,
};

const sectionHeading: CSSProperties = {
  fontSize: "clamp(34px, 6vw, 56px)",
  lineHeight: 1.02,
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "760px",
  color: "#07111F",
  fontWeight: 700,
};

const bodyText: CSSProperties = {
  color: "#556070",
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "780px",
  fontSize: "18px",
  lineHeight: 1.8,
};

const serviceGrid: CSSProperties = {
  marginTop: "34px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const serviceCard: CSSProperties = {
  background: "#F8FBFF",
  border: "1px solid rgba(15,23,42,0.08)",
  padding: "24px",
};

const cardTitle: CSSProperties = {
  margin: 0,
  fontSize: "22px",
  color: "#07111F",
  fontWeight: 700,
};

const cardText: CSSProperties = {
  marginTop: "14px",
  marginBottom: 0,
  color: "#556070",
  lineHeight: 1.7,
  fontSize: "16px",
};

const pointsList: CSSProperties = {
  marginTop: "30px",
  display: "grid",
  gap: "12px",
};

const pointItem: CSSProperties = {
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  paddingBottom: "12px",
  fontSize: "18px",
  color: "#07111F",
};

const ctaSection: CSSProperties = {
  background: "#081528",
  color: "white",
  padding: "80px 20px",
};

const ctaHeading: CSSProperties = {
  marginTop: "18px",
  marginBottom: 0,
  fontSize: "clamp(34px, 6vw, 56px)",
  lineHeight: 1.04,
  maxWidth: "760px",
  fontWeight: 700,
};

const ctaSecondary: CSSProperties = {
  marginTop: "28px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "2px",
};

const footer: CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "60px 20px 30px",
};

const footerTop: CSSProperties = {
  maxWidth: "1120px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const footerBrand: CSSProperties = {
  color: "#D4AF37",
  fontSize: "16px",
  fontWeight: 700,
  margin: 0,
};

const footerDesc: CSSProperties = {
  marginTop: "10px",
  marginBottom: 0,
  maxWidth: "420px",
  lineHeight: 1.7,
};

const footerLinks: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: CSSProperties = {
  color: "#94A3B8",
  textDecoration: "none",
};

const footerBottom: CSSProperties = {
  maxWidth: "1120px",
  margin: "40px auto 0",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  paddingTop: "20px",
  textAlign: "center",
  fontSize: "14px",
};
