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
        <div style={container}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={heroTitle}>
            UK Inbound Ground Transport
          </h1>

          <p style={heroSubtitle}>
            Premium touring logistics across the United Kingdom and Ireland,
            designed for international operators who require structure,
            reliability and consistent delivery.
          </p>

          <a href="/contact" style={ctaPrimary}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={trustStrip}>
        International Tour Operators · DMCs · Travel Brands
      </section>

      {/* INTRO */}
      <section style={sectionLight}>
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

            <p style={text}>
              From fixed-departure series to complex multi-region programmes,
              we provide a framework that ensures every departure meets the same
              professional standard.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionWhite}>
        <div style={container}>
          <p style={eyebrowCenter}>Services</p>

          <h2 style={headingCenter}>
            Structured touring logistics across the UK & Ireland
          </h2>

          <div style={services}>
            <div style={service}>
              <span style={number}>01</span>
              <h3 style={serviceTitle}>Fixed-Departure Series</h3>
              <p style={serviceText}>
                Consistent delivery across season-long touring programmes,
                ensuring repeatability and operational clarity.
              </p>
            </div>

            <div style={service}>
              <span style={number}>02</span>
              <h3 style={serviceTitle}>Multi-Region UK Touring</h3>
              <p style={serviceText}>
                Seamless routing across England, Scotland and Wales with
                efficient programme flow and balanced pacing.
              </p>
            </div>

            <div style={service}>
              <span style={number}>03</span>
              <h3 style={serviceTitle}>UK & Ireland Programmes</h3>
              <p style={serviceText}>
                Integrated British Isles touring with structured coordination
                and reliable cross-region delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={statement}>
        <h2 style={statementText}>
          Reliable delivery across every departure.
        </h2>
      </section>

      {/* VALUE */}
      <section style={sectionLight}>
        <div style={center}>
          <p style={eyebrowCenter}>Our Approach</p>

          <h2 style={headingCenter}>
            Structured. Reliable. Premium.
          </h2>

          <div style={valueList}>
            <div style={valueItem}>Consistent programme delivery</div>
            <div style={valueItem}>Clear operational structure</div>
            <div style={valueItem}>UK & Ireland coverage</div>
            <div style={valueItem}>Professional execution</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={{ margin: 0 }}>
          Plan your next touring programme
        </h2>

        <a href="/contact" style={ctaPrimary}>
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
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
  padding: "180px 20px 140px",
};

const container: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(56px, 8vw, 100px)",
  lineHeight: 0.92,
  letterSpacing: "-0.05em",
  margin: 0,
};

const heroSubtitle: React.CSSProperties = {
  marginTop: "28px",
  maxWidth: "640px",
  color: "#AFC1D4",
  fontSize: "19px",
  lineHeight: 1.9,
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  marginBottom: "12px",
};

const eyebrowCenter: React.CSSProperties = {
  ...eyebrow,
  textAlign: "center",
};

const trustStrip: React.CSSProperties = {
  background: "#0B1728",
  color: "#D4AF37",
  textAlign: "center",
  padding: "18px",
  fontSize: "13px",
};

const sectionLight: React.CSSProperties = {
  padding: "120px 20px",
  background: "#F8FBFF",
};

const sectionWhite: React.CSSProperties = {
  padding: "120px 20px",
  background: "#FFFFFF",
};

const split: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
};

const heading: React.CSSProperties = {
  fontSize: "38px",
  lineHeight: 1.15,
  margin: 0,
};

const headingCenter: React.CSSProperties = {
  fontSize: "38px",
  textAlign: "center",
  marginBottom: "30px",
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.9,
  marginBottom: "16px",
  fontSize: "18px",
};

const services: React.CSSProperties = {
  marginTop: "50px",
  display: "grid",
  gap: "30px",
};

const service: React.CSSProperties = {
  borderBottom: "1px solid rgba(15,23,42,0.06)",
  paddingBottom: "24px",
};

const number: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
  fontWeight: 700,
};

const serviceTitle: React.CSSProperties = {
  margin: "10px 0",
  fontSize: "26px",
};

const serviceText: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};

const statement: React.CSSProperties = {
  background: "#07111F",
  padding: "120px 20px",
  textAlign: "center",
};

const statementText: React.CSSProperties = {
  color: "white",
  fontSize: "34px",
};

const center: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const valueList: React.CSSProperties = {
  marginTop: "30px",
  display: "grid",
  gap: "18px",
};

const valueItem: React.CSSProperties = {
  borderBottom: "1px solid rgba(15,23,42,0.06)",
  paddingBottom: "12px",
};

const ctaSection: React.CSSProperties = {
  padding: "120px 20px",
  textAlign: "center",
};

const ctaPrimary: React.CSSProperties = {
  display: "inline-block",
  marginTop: "24px",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 26px",
  textDecoration: "none",
  fontWeight: 700,
};

const footer: React.CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "70px 20px 30px",
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
  flexWrap: "wrap",
};

const footerBottom: React.CSSProperties = {
  marginTop: "40px",
  textAlign: "center",
  fontSize: "14px",
};
