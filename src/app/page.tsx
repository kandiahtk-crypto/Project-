import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | UK & Ireland Touring Logistics",
  description:
    "Premium UK & Ireland ground transport solutions for international tour operators, DMCs and travel brands.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section style={hero}>
          <div style={heroOverlay} />
          <div style={heroGlow} />

          <div style={container}>
            <div style={heroContent}>
              <p style={heroEyebrow}>Plan Your Next Programme</p>

              <h1 style={heroTitle}>
                Premium UK & Ireland touring logistics, delivered properly.
              </h1>

              <p style={heroText}>
                For international tour operators, DMCs and travel brands that
                require dependable, programme-led transport delivery.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={ctaPrimary}>
                  Contact Us
                </a>
                <a href="/services" style={ctaGhost}>
                  Explore Services
                </a>
              </div>
            </div>
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
              <article style={serviceCard}>
                <p style={cardNumber}>01</p>
                <h3 style={cardTitle}>Fixed-Departure Series</h3>
                <p style={cardText}>
                  Structured coach and touring transport support for repeat
                  departures with dependable operational flow.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>02</p>
                <h3 style={cardTitle}>Multi-Region UK Touring</h3>
                <p style={cardText}>
                  Reliable transport coordination across England, Scotland and
                  Wales for complex programme routing.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>03</p>
                <h3 style={cardTitle}>UK & Ireland Programmes</h3>
                <p style={cardText}>
                  Ground transport solutions for cross-border itineraries
                  requiring consistency, timing discipline and clear delivery.
                </p>
              </article>
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

            <div style={contentColumns}>
              <p style={bodyText}>
                We provide structured ground transport services across major UK
                and Ireland touring regions including London, Edinburgh, the
                Scottish Highlands, the Lake District, Wales and Ireland.
              </p>

              <p style={bodyText}>
                Our services support fixed-departure series, private touring
                groups and multi-country itineraries, ensuring reliable delivery
                across every route and schedule.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section style={section}>
          <div style={container}>
            <p style={sectionLabel}>WHY OPERATORS CHOOSE US</p>
            <h2 style={sectionHeading}>
              Programme-focused, operationally reliable.
            </h2>

            <div style={pointsGrid}>
              <div style={pointCard}>Structured programme delivery</div>
              <div style={pointCard}>Clear operational coordination</div>
              <div style={pointCard}>UK & Ireland coverage</div>
              <div style={pointCard}>Consistent service standards</div>
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

            <p style={ctaText}>
              For international tour operators, DMCs and travel brands that
              require dependable, programme-led transport delivery.
            </p>

            <a href="/contact" style={ctaPrimaryLarge}>
              Contact Us
            </a>
          </div>
        </section>
      </main>

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
  background:
    "linear-gradient(180deg, rgba(4,10,22,0.80) 0%, rgba(4,10,22,0.92) 100%), url('/hero.jpg') center/cover no-repeat",
  color: "white",
  overflow: "hidden",
};

const heroOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(6,12,24,0.86) 0%, rgba(6,12,24,0.58) 55%, rgba(6,12,24,0.30) 100%)",
};

const heroGlow: CSSProperties = {
  position: "absolute",
  right: "-140px",
  top: "40px",
  width: "360px",
  height: "360px",
  borderRadius: "999px",
  background: "rgba(212,175,55,0.08)",
  filter: "blur(30px)",
};

const container: CSSProperties = {
  position: "relative",
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "0 20px",
};

const containerNarrow: CSSProperties = {
  maxWidth: "980px",
  margin: "0 auto",
  padding: "0 20px",
};

const heroContent: CSSProperties = {
  position: "relative",
  padding: "110px 0 120px",
  maxWidth: "780px",
};

const heroEyebrow: CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  margin: 0,
  fontWeight: 600,
};

const heroTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(52px, 9vw, 92px)",
  lineHeight: 0.96,
  letterSpacing: "-0.03em",
  marginTop: "22px",
  marginBottom: 0,
  maxWidth: "900px",
  fontWeight: 700,
};

const heroText: CSSProperties = {
  marginTop: "22px",
  marginBottom: 0,
  maxWidth: "680px",
  color: "#D9E2F0",
  fontSize: "18px",
  lineHeight: 1.8,
};

const heroActions: CSSProperties = {
  marginTop: "32px",
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const ctaPrimary: CSSProperties = {
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "999px",
};

const ctaGhost: CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "white",
  padding: "14px 22px",
  fontWeight: 600,
  textDecoration: "none",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.18)",
};

const band: CSSProperties = {
  background: "#081528",
  padding: "34px 0",
  textAlign: "center",
};

const bandText: CSSProperties = {
  color: "white",
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(24px, 4vw, 38px)",
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
  fontWeight: 600,
};

const approachHeading: CSSProperties = {
  fontFamily: "var(--font-serif)",
  margin: 0,
  fontSize: "clamp(48px, 12vw, 76px)",
  lineHeight: 1.03,
  fontWeight: 700,
  letterSpacing: "-0.03em",
  color: "#000000",
};

const approachBody: CSSProperties = {
  marginTop: "42px",
};

const approachParagraph: CSSProperties = {
  color: "#5B6475",
  fontSize: "clamp(18px, 4.5vw, 22px)",
  lineHeight: 1.8,
  marginTop: 0,
  marginBottom: "28px",
};

const section: CSSProperties = {
  padding: "90px 0",
  background: "#FFFFFF",
};

const sectionAlt: CSSProperties = {
  padding: "90px 0",
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
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(36px, 6vw, 58px)",
  lineHeight: 1.02,
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "760px",
  color: "#07111F",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const contentColumns: CSSProperties = {
  marginTop: "26px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "28px",
};

const bodyText: CSSProperties = {
  color: "#556070",
  margin: 0,
  fontSize: "18px",
  lineHeight: 1.85,
};

const serviceGrid: CSSProperties = {
  marginTop: "36px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const serviceCard: CSSProperties = {
  background: "#FBFCFE",
  border: "1px solid rgba(15,23,42,0.08)",
  padding: "28px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
};

const cardNumber: CSSProperties = {
  margin: 0,
  color: "#C9A640",
  fontSize: "12px",
  letterSpacing: "0.16em",
  fontWeight: 700,
};

const cardTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  marginTop: "14px",
  marginBottom: 0,
  fontSize: "28px",
  color: "#07111F",
  fontWeight: 700,
  lineHeight: 1.05,
};

const cardText: CSSProperties = {
  marginTop: "14px",
  marginBottom: 0,
  color: "#556070",
  lineHeight: 1.8,
  fontSize: "16px",
};

const pointsGrid: CSSProperties = {
  marginTop: "34px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};

const pointCard: CSSProperties = {
  background: "#F8FBFF",
  border: "1px solid rgba(15,23,42,0.08)",
  padding: "22px",
  borderRadius: "16px",
  fontSize: "17px",
  color: "#07111F",
};

const ctaSection: CSSProperties = {
  background: "linear-gradient(180deg, #081528 0%, #050D18 100%)",
  color: "white",
  padding: "96px 0",
};

const ctaHeading: CSSProperties = {
  fontFamily: "var(--font-serif)",
  marginTop: "18px",
  marginBottom: 0,
  fontSize: "clamp(38px, 6vw, 62px)",
  lineHeight: 1.03,
  maxWidth: "780px",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const ctaText: CSSProperties = {
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "650px",
  color: "#C8D3E0",
  fontSize: "18px",
  lineHeight: 1.8,
};

const ctaPrimaryLarge: CSSProperties = {
  marginTop: "30px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "16px 24px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "999px",
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
