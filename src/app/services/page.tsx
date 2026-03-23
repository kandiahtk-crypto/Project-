import type { CSSProperties } from "react";
import SiteHeader from "../../components/SiteHeader";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section style={hero}>
          <div style={heroOverlay} />

          <div style={container}>
            <div style={heroContent}>
              <p style={heroEyebrow}>Services</p>

              <h1 style={heroTitle}>
                Structured touring logistics across the UK & Ireland.
              </h1>

              <p style={heroText}>
                We support international tour operators, DMCs and travel brands
                with dependable, programme-led ground transport delivery across
                the United Kingdom and Ireland.
              </p>
            </div>
          </div>
        </section>

        <section style={introSection}>
          <div style={introInner}>
            <p style={sectionLabel}>WHAT WE DELIVER</p>

            <h2 style={introTitle}>
              Touring support built for clarity, consistency and control.
            </h2>

            <p style={introText}>
              Our services are structured around operational reliability,
              repeatable delivery and premium execution — helping operators
              deliver stronger programmes with confidence.
            </p>
          </div>
        </section>

        <section style={section}>
          <div style={servicesList}>
            <div style={serviceRow}>
              <div style={serviceIndex}>01</div>
              <div>
                <h3 style={serviceTitle}>Fixed-Departure Series</h3>
                <p style={serviceText}>
                  Consistent, repeatable operations across season-long touring
                  programmes, ensuring every departure follows the same
                  structured standard.
                </p>
              </div>
            </div>

            <div style={serviceRow}>
              <div style={serviceIndex}>02</div>
              <div>
                <h3 style={serviceTitle}>Multi-Region UK Touring</h3>
                <p style={serviceText}>
                  Seamless routing across England, Scotland and Wales with
                  balanced pacing, efficient movement and professional
                  coordination.
                </p>
              </div>
            </div>

            <div style={serviceRow}>
              <div style={serviceIndex}>03</div>
              <div>
                <h3 style={serviceTitle}>UK–Ireland Integration</h3>
                <p style={serviceText}>
                  Fully coordinated British Isles touring with managed ferry
                  timings, cross-country continuity and structured delivery.
                </p>
              </div>
            </div>

            <div style={serviceRow}>
              <div style={serviceIndex}>04</div>
              <div>
                <h3 style={serviceTitle}>Large Group Coordination</h3>
                <p style={serviceText}>
                  High-volume group movements, multi-coach touring and more
                  complex programmes handled with clarity and control.
                </p>
              </div>
            </div>

            <div style={serviceRow}>
              <div style={serviceIndex}>05</div>
              <div>
                <h3 style={serviceTitle}>Operator-Focused Delivery</h3>
                <p style={serviceText}>
                  Clear communication, dependable planning and premium execution
                  designed specifically to support international touring
                  partners.
                </p>
              </div>
            </div>

            <div style={serviceRow}>
              <div style={serviceIndex}>06</div>
              <div>
                <h3 style={serviceTitle}>Programme Reliability</h3>
                <p style={serviceText}>
                  A service structure built to reduce friction, strengthen
                  delivery and protect the guest experience across every
                  departure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={ctaSection}>
          <div style={ctaInner}>
            <p style={sectionLabelLight}>READY TO PLAN?</p>

            <h2 style={ctaTitle}>
              Let’s support your next UK & Ireland touring programme.
            </h2>

            <p style={ctaText}>
              Speak with our team about your routes, departure model and
              operational requirements. We’ll help shape a dependable touring
              solution.
            </p>

            <a href="/contact" style={ctaPrimary}>
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
              tour operators and travel partners.
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
          © UK Inbound Ground Transport. All rights reserved.
        </div>
      </footer>
    </>
  );
}

const hero: CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "100px 20px 120px",
};

const heroOverlay: CSSProperties = {};

const container: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const heroContent: CSSProperties = {
  maxWidth: "800px",
};

const heroEyebrow: CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
};

const heroTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(42px, 7vw, 72px)",
  lineHeight: 1,
  marginTop: "20px",
};

const heroText: CSSProperties = {
  marginTop: "20px",
  color: "#DCE8F5",
  fontSize: "18px",
  lineHeight: 1.8,
};

const introSection: CSSProperties = {
  padding: "90px 20px",
  background: "#F8FBFF",
};

const introInner: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const section: CSSProperties = {
  padding: "100px 20px",
};

const sectionLabel: CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.18em",
};

const sectionLabelLight: CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.18em",
};

const introTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "32px",
  marginTop: "10px",
};

const introText: CSSProperties = {
  marginTop: "20px",
  color: "#475569",
  lineHeight: 1.8,
};

const servicesList: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  display: "grid",
  gap: "34px",
};

const serviceRow: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "60px 1fr",
  gap: "20px",
  paddingBottom: "26px",
  borderBottom: "1px solid rgba(15,23,42,0.08)",
};

const serviceIndex: CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.18em",
};

const serviceTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "26px",
  marginBottom: "8px",
};

const serviceText: CSSProperties = {
  color: "#556070",
  lineHeight: 1.8,
};

const ctaSection: CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "100px 20px",
};

const ctaInner: CSSProperties = {
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center",
};

const ctaTitle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "36px",
  marginTop: "10px",
};

const ctaText: CSSProperties = {
  marginTop: "20px",
  color: "#DCE8F5",
};

const ctaPrimary: CSSProperties = {
  marginTop: "30px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 24px",
  borderRadius: "999px",
  fontWeight: 700,
  textDecoration: "none",
};

const footer: CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "60px 20px 30px",
};

const footerTop: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const footerBrand: CSSProperties = {
  color: "#D4AF37",
  fontWeight: 700,
};

const footerDesc: CSSProperties = {
  color: "#DCE8F5",
};

const footerLinks: CSSProperties = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
};

const footerLink: CSSProperties = {
  color: "#DCE8F5",
  textDecoration: "none",
};

const footerBottom: CSSProperties = {
  marginTop: "30px",
  textAlign: "center",
  fontSize: "14px",
};
