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
            Premium transport delivery for international tour operators,
            DMCs and travel brands across the United Kingdom and Ireland.
          </p>

          <a href="/contact" style={cta}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={band}>
        <h2 style={bandText}>
          Structured. Reliable. Premium delivery across every programme.
        </h2>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={heading}>Services</h2>

        <div style={list}>
          <div>01 — Fixed-Departure Series</div>
          <div>02 — Multi-Region UK Touring</div>
          <div>03 — UK & Ireland Programmes</div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2>Plan your next touring programme</h2>
        <a href="/contact" style={cta}>
          Contact Us
        </a>
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
  padding: "60px 20px 90px", // 👈 tight
};

const heroInner: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  marginTop: "-30px", // 👈 gap removed
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(54px, 8vw, 92px)",
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
  letterSpacing: "0.14em",
};

const cta: React.CSSProperties = {
  marginTop: "20px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  textDecoration: "none",
  fontWeight: 700,
};

const band: React.CSSProperties = {
  background: "#0B1728",
  padding: "50px 20px",
  textAlign: "center",
};

const bandText: React.CSSProperties = {
  color: "white",
  fontSize: "26px",
};

const section: React.CSSProperties = {
  padding: "80px 20px",
};

const heading: React.CSSProperties = {
  fontSize: "32px",
};

const list: React.CSSProperties = {
  marginTop: "20px",
  display: "grid",
  gap: "10px",
};

const ctaSection: React.CSSProperties = {
  padding: "80px 20px",
  textAlign: "center",
};

const footer: React.CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "40px 20px",
  textAlign: "center",
};
