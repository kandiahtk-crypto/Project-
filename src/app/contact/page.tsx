import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | UK & Ireland Touring Logistics",
  description:
    "Premium UK and Ireland ground transport solutions for international tour operators, DMCs and travel brands.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={title}>
            UK Inbound
            <br />
            Ground Transport
          </h1>

          <p style={subtitle}>
            Premium ground transport for international tour operators,
            delivering structured, reliable and consistent touring programmes
            across the United Kingdom and Ireland.
          </p>
        </div>
      </section>

      {/* STRIP */}
      <section style={strip}>
        <div style={container}>
          <p style={stripText}>
            Fixed-Departure Series — Multi-Region UK Touring — UK & Ireland Programmes
          </p>
        </div>
      </section>

      {/* CONTENT SPLIT */}
      <section style={section}>
        <div style={split}>
          <div>
            <h2 style={heading}>
              Built for operators who expect consistency.
            </h2>
          </div>

          <div>
            <p style={text}>
              We support international tour operators, DMCs and travel brands
              with structured touring logistics across England, Scotland,
              Wales and Ireland. Our approach is built around repeatability,
              clarity and dependable execution.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES MINIMAL */}
      <section style={section}>
        <div style={containerSmall}>
          <h2 style={headingCenter}>Services</h2>

          <div style={servicesList}>
            <div style={lineItem}>
              <span>Fixed-Departure Series</span>
              <span>→</span>
            </div>

            <div style={lineItem}>
              <span>Multi-Region UK Touring</span>
              <span>→</span>
            </div>

            <div style={lineItem}>
              <span>UK & Ireland Touring</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <div style={containerSmall}>
          <h2 style={{ margin: 0 }}>
            Let’s build your next touring programme
          </h2>

          <a href="/contact" style={ctaButton}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerGrid}>
          <div>
            <h3 style={logo}>UK Inbound Ground Transport</h3>
          </div>

          <div>
            <p style={footerText}>Evershine Transport Limited</p>
            <p style={footerText}>
              Trading name: UK Inbound Ground Transport
            </p>
            <p style={footerText}>Company Reg: 13507458</p>
            <p style={footerText}>VAT: 388919914</p>
          </div>

          <div>
            <p style={footerText}>info@ukinboundgroundtransport.com</p>
            <p style={footerText}>+44 20 8629 2776</p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "120px 20px 100px",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const containerSmall: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const title: React.CSSProperties = {
  fontSize: "clamp(48px, 7vw, 84px)",
  lineHeight: 1,
  margin: "10px 0",
};

const subtitle: React.CSSProperties = {
  marginTop: "20px",
  color: "#C7D5E5",
  fontSize: "18px",
  lineHeight: 1.8,
  maxWidth: "600px",
};

const strip: React.CSSProperties = {
  background: "#0B1728",
  padding: "20px",
  textAlign: "center",
};

const stripText: React.CSSProperties = {
  color: "#D4AF37",
  letterSpacing: "0.1em",
  fontSize: "14px",
};

const section: React.CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const split: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
  gridTemplateColumns: "1fr 1fr",
};

const heading: React.CSSProperties = {
  fontSize: "36px",
  margin: 0,
};

const headingCenter: React.CSSProperties = {
  fontSize: "36px",
  marginBottom: "40px",
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  fontSize: "18px",
};

const servicesList: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const lineItem: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "18px 0",
  borderBottom: "1px solid #E2E8F0",
  fontSize: "18px",
};

const ctaSection: React.CSSProperties = {
  padding: "100px 20px",
  textAlign: "center",
  background: "#FFFFFF",
};

const ctaButton: React.CSSProperties = {
  display: "inline-block",
  marginTop: "20px",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 700,
};

const footer: React.CSSProperties = {
  background: "#07111F",
  color: "#C7D5E5",
  padding: "60px 20px",
};

const footerGrid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "20px",
};

const logo: React.CSSProperties = {
  color: "#D4AF37",
};

const footerText: React.CSSProperties = {
  margin: "4px 0",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
};
