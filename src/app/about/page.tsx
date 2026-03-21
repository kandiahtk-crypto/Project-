export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>About</p>

          <h1 style={title}>
            A transport partner built
            <br />
            for inbound touring excellence
          </h1>

          <p style={subtitle}>
            UK Inbound Ground Transport supports international tour operators,
            DMCs and travel brands with structured, reliable and premium ground
            transport solutions across the United Kingdom and Ireland.
          </p>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section style={sectionLight}>
        <div style={split}>
          <div>
            <h2 style={heading}>
              Built for operators who expect clarity, consistency and control.
            </h2>
          </div>

          <div>
            <p style={text}>
              We are not just a transport provider. We are a structured delivery
              partner focused on operational clarity, dependable execution and
              premium programme flow.
            </p>

            <p style={text}>
              From fixed-departure touring series to multi-region UK and Ireland
              itineraries, our approach ensures every programme is delivered
              with precision, consistency and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={sectionWhite}>
        <div style={containerSmall}>
          <p style={eyebrow}>Our Approach</p>

          <h2 style={headingCenter}>
            Structured delivery. Professional standards. Premium results.
          </h2>

          <div style={grid}>
            <div style={card}>
              <h3 style={cardTitle}>Consistency</h3>
              <p style={cardText}>
                Every departure follows a structured approach to ensure reliable
                programme flow across all touring operations.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Clarity</h3>
              <p style={cardText}>
                Clear communication and defined operational structure reduce
                friction and improve coordination at every stage.
              </p>
            </div>

            <div style={card}>
              <h3 style={cardTitle}>Control</h3>
              <p style={cardText}>
                Strong planning and delivery frameworks ensure programmes run
                smoothly from first arrival to final departure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section style={sectionDark}>
        <div style={containerSmall}>
          <p style={eyebrow}>Positioning</p>

          <h2 style={{ fontSize: "32px", margin: "0 0 16px" }}>
            Designed for international inbound touring.
          </h2>

          <p style={{ color: "#DCE8F5", lineHeight: 1.8 }}>
            Our service model is tailored to operators managing complex touring
            programmes across England, Scotland, Wales and Ireland — delivering
            dependable transport solutions aligned with professional standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionLight}>
        <div style={{ ...containerSmall, textAlign: "center" }}>
          <h2 style={{ margin: 0 }}>
            Let’s support your next touring programme
          </h2>

          <a href="/contact" style={ctaButton}>
            Contact Us
          </a>
        </div>
      </section>

      {/* CLASSY FOOTER */}
      <footer style={footer}>
        <div style={footerGrid}>
          <div>
            <h3 style={footerLogo}>UK Inbound Ground Transport</h3>
            <p style={footerText}>
              Premium UK & Ireland ground transport solutions for international
              tour operators and travel partners.
            </p>
          </div>

          <div>
            <h4 style={footerHeading}>Company</h4>
            <p style={footerText}>Evershine Transport Limited</p>
            <p style={footerText}>
              Trading name: UK Inbound Ground Transport
            </p>
            <p style={footerText}>Company Reg: 13507458</p>
            <p style={footerText}>VAT: 388919914</p>
          </div>

          <div>
            <h4 style={footerHeading}>Contact</h4>
            <p style={footerText}>info@ukinboundgroundtransport.com</p>
            <p style={footerText}>+44 20 8629 2776</p>
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

const hero: React.CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "120px 20px 90px",
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
  lineHeight: 1.05,
  margin: "10px 0",
};

const subtitle: React.CSSProperties = {
  marginTop: "20px",
  color: "#C7D5E5",
  lineHeight: 1.8,
  maxWidth: "650px",
};

const sectionLight: React.CSSProperties = {
  padding: "90px 20px",
  background: "#F8FBFF",
};

const sectionWhite: React.CSSProperties = {
  padding: "90px 20px",
  background: "#FFFFFF",
};

const sectionDark: React.CSSProperties = {
  padding: "90px 20px",
  background: "#07111F",
  color: "white",
};

const split: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
  gridTemplateColumns: "1fr", // SAFE MOBILE
};

const heading: React.CSSProperties = {
  fontSize: "34px",
  margin: 0,
};

const headingCenter: React.CSSProperties = {
  fontSize: "34px",
  textAlign: "center",
  marginBottom: "40px",
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  marginBottom: "16px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gap: "24px",
};

const card: React.CSSProperties = {
  background: "#F8FBFF",
  padding: "24px",
  borderRadius: "14px",
  border: "1px solid #E2E8F0",
};

const cardTitle: React.CSSProperties = {
  margin: "0 0 10px",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
};

const ctaButton: React.CSSProperties = {
  display: "inline-block",
  marginTop: "20px",
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 700,
};

const footer: React.CSSProperties = {
  background: "#0B1728",
  color: "#DCE8F5",
  padding: "60px 20px 30px",
};

const footerGrid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "30px",
};

const footerLogo: React.CSSProperties = {
  color: "#D4AF37",
};

const footerHeading: React.CSSProperties = {
  color: "#D4AF37",
  marginBottom: "10px",
};

const footerText: React.CSSProperties = {
  margin: "4px 0",
};

const footerBottom: React.CSSProperties = {
  marginTop: "30px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  paddingTop: "20px",
  textAlign: "center",
  fontSize: "14px",
  color: "#94A3B8",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};
