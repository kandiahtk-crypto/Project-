import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | Premium UK & Ireland Touring Logistics",
  description:
    "Premium UK & Ireland ground transport solutions for international tour operators, DMCs and travel brands.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroInner}>
          <h1 style={heroTitle}>
            UK Inbound Ground Transport
          </h1>

          <p style={heroSubtitle}>
            Premium touring logistics across the United Kingdom and Ireland,
            designed for international operators who require structure,
            reliability and consistent delivery.
          </p>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={statement}>
        <div style={statementInner}>
          <h2 style={statementText}>
            Built for operators who expect precision, clarity and control across every programme.
          </h2>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={split}>
          <h2 style={heading}>
            A transport partner, not just a supplier.
          </h2>

          <div>
            <p style={text}>
              UK Inbound Ground Transport supports international tour operators,
              DMCs and travel brands with structured transport delivery across
              England, Scotland, Wales and Ireland.
            </p>

            <p style={text}>
              Our focus is programme flow — ensuring every itinerary runs with
              consistency, operational clarity and dependable execution.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={headingCenter}>
            Services
          </h2>

          <div style={services}>
            <div style={service}>
              <span style={serviceNumber}>01</span>
              <h3>Fixed-Departure Series</h3>
              <p>Consistent delivery across season-long touring programmes.</p>
            </div>

            <div style={service}>
              <span style={serviceNumber}>02</span>
              <h3>Multi-Region UK Touring</h3>
              <p>Seamless routing across England, Scotland and Wales.</p>
            </div>

            <div style={service}>
              <span style={serviceNumber}>03</span>
              <h3>UK & Ireland Programmes</h3>
              <p>Integrated British Isles touring with structured coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH STATEMENT */}
      <section style={fullBand}>
        <h2 style={fullText}>
          Reliable delivery across every departure.
        </h2>
      </section>

      {/* VALUE */}
      <section style={section}>
        <div style={center}>
          <h2 style={headingCenter}>
            Structured. Reliable. Premium.
          </h2>

          <div style={valueList}>
            <div>Consistent programme delivery</div>
            <div>Clear operational structure</div>
            <div>UK & Ireland coverage</div>
            <div>Professional execution</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={cta}>
        <h2 style={{ margin: 0 }}>
          Plan your next touring programme
        </h2>

        <a href="/contact" style={ctaButton}>
          Contact Us
        </a>
      </section>

      {/* ELITE FOOTER */}
      <footer style={footer}>
        <div style={footerTop}>
          <h3 style={footerBrand}>UK Inbound Ground Transport</h3>

          <div style={footerNav}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/programmes">Programmes</a>
            <a href="/contact">Contact</a>
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

const hero: React.CSSProperties = {
  background: "#050D18",
  color: "white",
  padding: "160px 20px 120px",
};

const heroInner: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(52px, 8vw, 96px)",
  lineHeight: 0.95,
  letterSpacing: "-0.04em",
  margin: 0,
};

const heroSubtitle: React.CSSProperties = {
  marginTop: "28px",
  maxWidth: "600px",
  color: "#AFC1D4",
  fontSize: "18px",
  lineHeight: 1.8,
};

const statement: React.CSSProperties = {
  background: "#0B1728",
  padding: "60px 20px",
};

const statementInner: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const statementText: React.CSSProperties = {
  color: "white",
  fontSize: "28px",
  lineHeight: 1.4,
};

const section: React.CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const sectionAlt: React.CSSProperties = {
  padding: "100px 20px",
  background: "#FFFFFF",
};

const container: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const split: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
};

const heading: React.CSSProperties = {
  fontSize: "36px",
  margin: 0,
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  marginBottom: "14px",
};

const services: React.CSSProperties = {
  marginTop: "40px",
  display: "grid",
  gap: "30px",
};

const service: React.CSSProperties = {
  borderBottom: "1px solid #E2E8F0",
  paddingBottom: "20px",
};

const serviceNumber: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.1em",
};

const fullBand: React.CSSProperties = {
  background: "#07111F",
  padding: "120px 20px",
  textAlign: "center",
};

const fullText: React.CSSProperties = {
  color: "white",
  fontSize: "36px",
};

const center: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const headingCenter: React.CSSProperties = {
  fontSize: "34px",
};

const valueList: React.CSSProperties = {
  marginTop: "30px",
  display: "grid",
  gap: "16px",
};

const cta: React.CSSProperties = {
  padding: "100px 20px",
  textAlign: "center",
};

const ctaButton: React.CSSProperties = {
  marginTop: "20px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: 700,
};

const footer: React.CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "60px 20px 30px",
};

const footerTop: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
};

const footerBrand: React.CSSProperties = {
  color: "#D4AF37",
};

const footerNav: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const footerBottom: React.CSSProperties = {
  marginTop: "40px",
  textAlign: "center",
  fontSize: "14px",
};
