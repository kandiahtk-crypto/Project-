import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | UK & Ireland Touring Logistics",
  description:
    "Premium UK and Ireland ground transport solutions for international tour operators. Fixed-departure series, multi-region touring and British Isles programmes.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={title}>
            UK Inbound Ground Transport
          </h1>

          <p style={subtitle}>
            Premium ground transport solutions for international tour operators,
            DMCs and travel brands across the United Kingdom and Ireland.
            Structured, reliable and built for consistent programme delivery.
          </p>

          <div style={buttons}>
            <a href="/contact" style={ctaPrimary}>
              Plan Your Programme
            </a>

            <a href="/services" style={ctaSecondary}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionLight}>
        <div style={containerSmall}>
          <p style={eyebrow}>Services</p>

          <h2 style={sectionTitle}>
            Built for professional inbound touring
          </h2>

          <p style={sectionText}>
            We deliver structured, repeatable and dependable transport across
            UK and Ireland touring programmes.
          </p>

          <div style={grid}>
            <div style={card}>
              <h3>Fixed-Departure Series</h3>
              <p>
                Consistent delivery across season-long touring programmes.
              </p>
            </div>

            <div style={card}>
              <h3>Multi-Region UK Touring</h3>
              <p>
                Seamless routing across England, Scotland and Wales.
              </p>
            </div>

            <div style={card}>
              <h3>UK–Ireland Touring</h3>
              <p>
                Integrated British Isles programmes with smooth coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section style={sectionDark}>
        <div style={containerSmall}>
          <p style={eyebrow}>Why Us</p>

          <h2 style={{ fontSize: "32px", margin: "0 0 16px" }}>
            Reliable. Structured. Professional.
          </h2>

          <p style={{ color: "#DCE8F5", lineHeight: 1.8 }}>
            We help operators deliver stronger touring programmes through
            consistent execution, clear communication and dependable service.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionLight}>
        <div style={{ ...containerSmall, textAlign: "center" }}>
          <h2 style={{ margin: 0 }}>
            Let’s build your next touring programme
          </h2>

          <a href="/contact" style={{ ...ctaPrimary, marginTop: "20px", display: "inline-block" }}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerGrid}>
          <div>
            <h3 style={footerLogo}>UK Inbound Ground Transport</h3>
            <p style={footerText}>
              Premium UK & Ireland ground transport solutions.
            </p>
          </div>

          <div>
            <h4 style={footerHeading}>Company</h4>
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
            <h4 style={footerHeading}>Contact</h4>
            <div style={footerLinks}>
              <span style={footerText}>info@ukinboundgroundtransport.com</span>
              <span style={footerText}>+44 20 8629 2776</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background:
    "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
  color: "white",
  padding: "90px 20px",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const containerSmall: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const title: React.CSSProperties = {
  fontSize: "clamp(42px, 6vw, 72px)",
  margin: 0,
};

const subtitle: React.CSSProperties = {
  marginTop: "20px",
  color: "#DCE8F5",
  lineHeight: 1.8,
};

const buttons: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  marginTop: "30px",
};

const sectionLight: React.CSSProperties = {
  padding: "80px 20px",
  background: "#F8FBFF",
};

const sectionDark: React.CSSProperties = {
  padding: "80px 20px",
  background: "#07111F",
  color: "white",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "32px",
  margin: "10px 0",
};

const sectionText: React.CSSProperties = {
  color: "#475569",
};

const grid: React.CSSProperties = {
  display: "grid",
  gap: "20px",
  marginTop: "30px",
};

const card: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 700,
};

const ctaSecondary: React.CSSProperties = {
  border: "1px solid white",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const footer: React.CSSProperties = {
  background: "#0B1728",
  color: "#DCE8F5",
  padding: "40px 20px",
};

const footerGrid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "20px",
};

const footerLogo: React.CSSProperties = {
  color: "#D4AF37",
};

const footerHeading: React.CSSProperties = {
  color: "#D4AF37",
};

const footerText: React.CSSProperties = {
  margin: 0,
};

const footerLinks: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};
