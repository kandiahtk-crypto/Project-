import type { CSSProperties } from "react";
import SiteHeader from "@/components/SiteHeader";

export default function ServicesPage() {
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
              <p style={heroEyebrow}>Services</p>

              <h1 style={heroTitle}>
                Structured touring logistics across the UK &amp; Ireland.
              </h1>

              <p style={heroText}>
                We support international tour operators, DMCs and travel brands
                with dependable, premium and professionally coordinated ground
                transport solutions across the United Kingdom and Ireland.
              </p>

              <div style={heroActions}>
                <a href="/contact" style={ctaPrimary}>
                  Contact Us
                </a>
                <a href="/programmes" style={ctaGhost}>
                  View Programmes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section style={introSection}>
          <div style={introInner}>
            <p style={sectionLabel}>WHAT WE DELIVER</p>

            <h2 style={introTitle}>
              Touring support built for consistency, clarity and confidence.
            </h2>

            <p style={introText}>
              Our services are designed around operational control, repeatability
              and premium execution — helping operators deliver stronger
              programmes and a more dependable guest experience.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section style={section}>
          <div style={container}>
            <p style={sectionLabel}>CORE SERVICES</p>
            <h2 style={sectionHeading}>
              Premium transport support, designed for professional touring.
            </h2>

            <div style={servicesGrid}>
              <article style={serviceCard}>
                <p style={cardNumber}>01</p>
                <h3 style={cardTitle}>Fixed-Departure Series</h3>
                <p style={cardText}>
                  Consistent, repeatable operations across season-long touring
                  programmes, ensuring every departure follows the same
                  structured standard.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>02</p>
                <h3 style={cardTitle}>Multi-Region UK Touring</h3>
                <p style={cardText}>
                  Seamless routing across England, Scotland and Wales with
                  balanced pacing, efficient movement and professional
                  coordination.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>03</p>
                <h3 style={cardTitle}>UK &amp; Ireland Integration</h3>
                <p style={cardText}>
                  Fully coordinated British Isles touring with managed ferry
                  timings, cross-country continuity and structured delivery.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>04</p>
                <h3 style={cardTitle}>Large Group Coordination</h3>
                <p style={cardText}>
                  High-volume group movements, multi-coach touring and more
                  complex programmes handled with clarity and control.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>05</p>
                <h3 style={cardTitle}>Operator-Focused Delivery</h3>
                <p style={cardText}>
                  Clear communication, dependable planning and premium execution
                  designed specifically to support international touring
                  partners.
                </p>
              </article>

              <article style={serviceCard}>
                <p style={cardNumber}>06</p>
                <h3 style={cardTitle}>Programme Reliability</h3>
                <p style={cardText}>
                  A service structure built to reduce friction, strengthen
                  delivery and protect the guest experience across every
                  departure.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* APPROACH STRIP */}
        <section style={approachSection}>
          <div style={approachInner}>
            <p style={sectionLabelLight}>OUR SERVICE APPROACH</p>

            <h2 style={approachTitle}>
              Professional touring support, delivered with structure.
            </h2>

            <div style={approachColumns}>
              <p style={approachText}>
                We focus on operational clarity, route discipline and dependable
                day-to-day execution, helping operators build confidence into
                every itinerary.
              </p>

              <p style={approachText}>
                Our role is not simply to provide transport, but to support the
                smooth movement, timing and integrity of the wider programme.
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section style={sectionAlt}>
          <div style={container}>
            <p style={sectionLabel}>WHY CHOOSE US</p>
            <h2 style={sectionHeading}>
              Premium service delivery for professional inbound touring.
            </h2>

            <div style={benefitsGrid}>
              <div style={benefitCard}>Consistent programme flow</div>
              <div style={benefitCard}>UK &amp; Ireland coverage</div>
              <div style={benefitCard}>Professional coordination</div>
              <div style={benefitCard}>Reliable day-to-day delivery</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaSection}>
          <div style={ctaInner}>
            <p style={sectionLabelLight}>READY TO PLAN?</p>

            <h2 style={ctaTitle}>
              Let’s support your next UK &amp; Ireland touring programme.
            </h2>

            <p style={ctaText}>
              Speak with our team about your route structure, departure model
              and operational requirements. We’ll help shape a dependable
              touring solution.
            </p>

            <div style={ctaActions}>
              <a href="/contact" style={ctaPrimaryLarge}>
                Contact Us
              </a>

              <a href="/" style={ctaSecondary}>
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerTop}>
          <div>
            <p style={footerBrand}>UK Inbound Ground Transport</p>
            <p style={footerDesc}>
              Premium UK &amp; Ireland ground transport solutions for
              international tour operators and travel partners.
            </p>
          </div>

          <div>
            <p style={footerHeading}>Navigation</p>
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

          <div>
            <p style={footerHeading}>Company</p>
            <div style={footerLinks}>
              <span style={footerText}>Evershine Transport Limited</span>
              <span style={footerText}>
                Trading name: UK Inbound Ground Transport
              </span>
              <span style={footerText}>Company Reg: 13507458</span>
              <span style={footerText}>VAT: 388919914</span>
            </div>
          </div>

          <div>
            <p style={footerHeading}>Contact</p>
            <div style={footerLinks}>
              <span style={footerText}>info@ukinboundgroundtransport.com</span>
              <span style={footerText}>+44 20 8629 2776</span>
            </div>
          </div>
        </div>

        <div style={footerBottom}>
          © UK Inbound Ground Transport. All rights reserved.
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: CSSProperties = {
  position: "relative",
  background:
    "linear-gradient(180deg, rgba(4,10,22,0.82) 0%, rgba(4,10,22,0.94) 100%), url('/hero.jpg') center/cover no-repeat",
  color: "white",
  overflow: "hidden",
};

const heroOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(6,12,24,0.88) 0%, rgba(6,12,24,0.56) 55%, rgba(6,12,24,0.28) 100%)",
};

const heroGlow: CSSProperties = {
  position: "absolute",
  right: "-120px",
  top: "30px",
  width: "340px",
  height: "340px",
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

const heroContent: CSSProperties = {
  position: "relative",
  padding: "110px 0 120px",
  maxWidth: "820px",
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
  fontSize: "clamp(48px, 8vw, 86px)",
  lineHeight: 0.98,
  letterSpacing: "-0.03em",
  marginTop: "22px",
  marginBottom: 0,
  maxWidth: "920px",
  fontWeight: 700,
};

const heroText: CSSProperties = {
  marginTop: "22px",
  marginBottom: 0,
  maxWidth: "720px",
  color: "#D9E2F0",
  fontSize: "18px",
  lineHeight: 1.85,
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

const introSection: CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const introInner: CSSProperties = {
  maxWidth: "960px",
  margin: "0 auto",
  textAlign: "center",
};

const section: CSSProperties = {
  padding: "100px 0",
  background: "#FFFFFF",
};

const sectionAlt: CSSProperties = {
  padding: "100px 0",
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

const introTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(34px, 6vw, 58px)",
  lineHeight: 1.04,
  marginTop: "16px",
  marginBottom: 0,
  color: "#07111F",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const introText: CSSProperties = {
  margin: "20px auto 0",
  maxWidth: "760px",
  color: "#556070",
  lineHeight: 1.85,
  fontSize: "18px",
};

const sectionHeading: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(36px, 6vw, 58px)",
  lineHeight: 1.02,
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "780px",
  color: "#07111F",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const servicesGrid: CSSProperties = {
  marginTop: "38px",
  display: "grid",
  gap: "18px",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};

const serviceCard: CSSProperties = {
  background: "#FBFCFE",
  padding: "28px",
  borderRadius: "20px",
  border: "1px solid rgba(15,23,42,0.08)",
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
  color: "#07111F",
  fontSize: "28px",
  lineHeight: 1.08,
  fontWeight: 700,
};

const cardText: CSSProperties = {
  marginTop: "14px",
  marginBottom: 0,
  color: "#556070",
  lineHeight: 1.8,
  fontSize: "16px",
};

const approachSection: CSSProperties = {
  padding: "100px 20px",
  background: "#07111F",
  color: "white",
};

const approachInner: CSSProperties = {
  maxWidth: "1120px",
  margin: "0 auto",
};

const approachTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(34px, 6vw, 56px)",
  lineHeight: 1.04,
  marginTop: "18px",
  marginBottom: 0,
  maxWidth: "800px",
  color: "white",
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const approachColumns: CSSProperties = {
  marginTop: "28px",
  display: "grid",
  gap: "28px",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};

const approachText: CSSProperties = {
  margin: 0,
  color: "#DCE8F5",
  lineHeight: 1.85,
  fontSize: "18px",
};

const benefitsGrid: CSSProperties = {
  marginTop: "34px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};

const benefitCard: CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(15,23,42,0.08)",
  borderRadius: "16px",
  padding: "22px",
  color: "#07111F",
  fontSize: "17px",
};

const ctaSection: CSSProperties = {
  padding: "100px 20px",
  background: "linear-gradient(180deg, #081528 0%, #050D18 100%)",
  color: "white",
};

const ctaInner: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const ctaTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  marginTop: "18px",
  marginBottom: 0,
  fontSize: "clamp(38px, 6vw, 62px)",
  lineHeight: 1.04,
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const ctaText: CSSProperties = {
  margin: "20px auto 0",
  maxWidth: "720px",
  color: "#C8D3E0",
  fontSize: "18px",
  lineHeight: 1.85,
};

const ctaActions: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  flexWrap: "wrap",
  marginTop: "30px",
};

const ctaPrimaryLarge: CSSProperties = {
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "16px 24px",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "999px",
};

const ctaSecondary: CSSProperties = {
  display: "inline-block",
  border: "1px solid rgba(255,255,255,0.16)",
  color: "#FFFFFF",
  padding: "16px 24px",
  fontWeight: 600,
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
  display: "grid",
  gap: "30px",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
  color: "#DCE8F5",
};

const footerHeading: CSSProperties = {
  margin: "0 0 14px",
  color: "#D4AF37",
  fontSize: "16px",
  fontWeight: 700,
};

const footerText: CSSProperties = {
  margin: 0,
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "15px",
};

const footerLinks: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: CSSProperties = {
  color: "#DCE8F5",
  textDecoration: "none",
  fontSize: "15px",
};

const footerBottom: CSSProperties = {
  maxWidth: "1120px",
  margin: "30px auto 0",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  fontSize: "14px",
  color: "#94A3B8",
};
