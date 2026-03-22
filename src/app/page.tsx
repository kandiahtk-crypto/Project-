import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport",
  description: "Premium UK & Ireland touring logistics",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroInner}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={heroTitle}>
            UK Inbound Ground Transport
          </h1>

          <p style={heroSubtitle}>
            Premium touring logistics across the United Kingdom and Ireland,
            designed for international operators who require structure,
            reliability and consistent delivery.
          </p>

          <a href="/contact" style={ctaButton}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={statement}>
        <h2 style={statementText}>
          Built for operators who expect precision, clarity and control.
        </h2>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={heading}>Services</h2>

        <div style={services}>
          <div>Fixed-Departure Series</div>
          <div>Multi-Region UK Touring</div>
          <div>UK & Ireland Programmes</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p>UK Inbound Ground Transport</p>
        <p>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </p>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background: "#050D18",
  color: "white",
  padding: "60px 20px 100px", // 👈 gap fixed
};

const heroInner: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  marginTop: "-30px", // 👈 pulls up
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(52px, 8vw, 92px)",
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
  margin: 0,
};

const heroSubtitle: React.CSSProperties = {
  marginTop: "16px",
  maxWidth: "600px",
  color: "#AFC1D4",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
};

const ctaButton: React.CSSProperties = {
  marginTop: "22px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: 700,
};

const statement: React.CSSProperties = {
  background: "#0B1728",
  padding: "60px 20px",
  textAlign: "center",
};

const statementText: React.CSSProperties = {
  color: "white",
};

const section: React.CSSProperties = {
  padding: "80px 20px",
};

const heading: React.CSSProperties = {
  fontSize: "32px",
};

const services: React.CSSProperties = {
  marginTop: "20px",
  display: "grid",
  gap: "10px",
};

const footer: React.CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "40px 20px",
  textAlign: "center",
};
