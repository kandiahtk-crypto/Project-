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

          <h1 style={title}>
            UK Inbound
            <br />
            Ground Transport
          </h1>

          <p style={subtitle}>
            Premium ground transport solutions for international tour operators,
            delivering structured, reliable and consistent touring programmes
            across the United Kingdom and Ireland.
          </p>

          <div style={ctaRow}>
            <a href="/contact" style={ctaPrimary}>
              Plan Your Programme
            </a>
            <a href="/services" style={ctaSecondary}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={strip}>
        <div style={container}>
          <p style={stripText}>
            Trusted by international tour operators · UK & Ireland coverage · Structured delivery
          </p>
        </div>
      </section>

      {/* POSITIONING */}
      <section style={section}>
        <div style={split}>
          <h2 style={heading}>
            Built for operators who demand consistency.
          </h2>

          <p style={text}>
            UK Inbound Ground Transport is designed for professional inbound
            touring. We deliver structured, repeatable and dependable transport
            solutions across England, Scotland, Wales and Ireland — supporting
            both fixed-departure series and complex multi-region programmes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <div style={container}>
          <p style={eyebrowDark}>Services</p>

          <h2 style={headingCenter}>
            Structured touring logistics across the UK & Ireland
          </h2>

          <div style={serviceGrid}>
            <div style={card}>
              <h3 style={cardTitle}>Fixed-Departure Series</h3>
              <p style={cardText}>
                Consistent, repeatable delivery across season-long touring
                programmes.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Multi-Region UK Touring</h3>
              <p style={cardText}>
                Seamless routing across England, Scotland and Wales.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>UK & Ireland Programmes</h3>
              <p style={cardText}>
                Fully integrated British Isles touring with smooth coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section style={sectionDark}>
        <div style={container}>
          <h2 style={{ ...headingCenter, color: "white" }}>
            Reliable. Structured. Professional.
          </h2>

          <div style={valueGrid}>
            <div style={valueItem}>Consistent programme delivery</div>
            <div style={valueItem}>Clear operational structure</div>
            <div style={valueItem}>UK & Ireland coverage</div>
            <div style={valueItem}>Premium execution standard</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={section}>
        <div style={{ ...container, textAlign: "center" }}>
          <h2 style={headingCenter}>
            Let’s build your next touring programme
          </h2>

          <a href="/contact" style={ctaPrimary}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={container}>
          <h3 style={logo}>UK Inbound Ground Transport</h3>

          <p style={footerText}>Evershine Transport Limited</p>
          <p style={footerText}>
            Trading name: UK Inbound Ground Transport
          </p>
          <p style={footerText}>Company Reg: 13507458</p>
          <p style={footerText}>VAT: 388919914</p>
          <p style={footerText}>info@ukinboundgroundtransport.com</p>
          <p style={footerText}>+44 20 8629 2776</p>
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "140px 20px 100px",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const title: React.CSSProperties = {
  fontSize: "clamp(48px, 7vw, 82px)",
  lineHeight: 1,
  margin: "10px 0",
};

const subtitle: React.CSSProperties = {
  color: "#C7D5E5",
  maxWidth: "600px",
  lineHeight: 1.8,
};

const ctaRow: React.CSSProperties = {
  display: "flex",
  gap: "14px",
  marginTop: "30px",
  flexWrap: "wrap",
};

const strip: React.CSSProperties = {
  background: "#0B1728",
  padding: "18px",
  textAlign: "center",
};

const stripText: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "14px",
};

const section: React.CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const sectionAlt: React.CSSProperties = {
  padding: "100px 20px",
  background: "#FFFFFF",
};

const sectionDark: React.CSSProperties = {
  padding: "100px 20px",
  background: "#07111F",
};

const split: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  display: "grid",
  gap: "30px",
};

const heading: React.CSSProperties = {
  fontSize: "34px",
  margin: 0,
};

const headingCenter: React.CSSProperties = {
  fontSize: "34px",
  textAlign: "center",
  marginBottom: "30px",
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};

const serviceGrid: React.CSSProperties = {
  display: "grid",
  gap: "20px",
  marginTop: "40px",
};

const card: React.CSSProperties = {
  background: "#F8FBFF",
  padding: "24px",
  borderRadius: "12px",
};

const cardTitle: React.CSSProperties = {
  margin: "0 0 10px",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
};

const valueGrid: React.CSSProperties = {
  display: "grid",
  gap: "20px",
  marginTop: "30px",
};

const valueItem: React.CSSProperties = {
  color: "#DCE8F5",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  paddingBottom: "10px",
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 700,
};

const ctaSecondary: React.CSSProperties = {
  border: "1px solid white",
  color: "white",
  padding: "14px 22px",
  borderRadius: "8px",
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  background: "#07111F",
  color: "#C7D5E5",
  padding: "60px 20px",
};

const footerText: React.CSSProperties = {
  margin: "4px 0",
};

const logo: React.CSSProperties = {
  color: "#D4AF37",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
};

const eyebrowDark: React.CSSProperties = {
  color: "#D4AF37",
  textAlign: "center",
};
