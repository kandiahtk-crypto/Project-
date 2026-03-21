export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>
            Premium UK & Ireland Touring Logistics
          </p>

          <h1 style={headline}>
            UK Inbound Ground Transport
          </h1>

          <p style={subtext}>
            We support international tour operators, DMCs and travel brands with
            structured, dependable and premium ground transport solutions across
            the United Kingdom and Ireland. Built for consistency, clarity and
            flawless delivery across every touring programme.
          </p>

          <div style={ctaWrap}>
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
        <div style={containerNarrow}>
          <p style={eyebrow}>Core Services</p>

          <h2 style={sectionTitle}>
            Structured touring logistics designed for high-standard delivery.
          </h2>

          <p style={sectionText}>
            Our service model is built for repeatable programmes, international
            expectations and professional operator support.
          </p>
        </div>

        <div style={grid}>
          <div style={card}>
            <h3 style={cardTitle}>Fixed-Departure Series</h3>
            <p style={cardText}>
              Reliable, repeatable operations across season-long touring
              programmes with consistent delivery.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Multi-Region UK Touring</h3>
            <p style={cardText}>
              Seamless routing across England, Scotland and Wales with balanced
              pacing and efficient movement.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>UK–Ireland Integration</h3>
            <p style={cardText}>
              Fully coordinated British Isles touring with smooth cross-country
              continuity and ferry planning.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST / WHY */}
      <section style={sectionDark}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Why Operators Choose Us</p>

          <h2 style={sectionTitleDark}>
            A transport partner built for consistency and reliability.
          </h2>

          <p style={sectionTextDark}>
            We focus on structured delivery, clear communication and dependable
            execution — helping operators protect their product quality while
            delivering a stronger guest experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionLight}>
        <div style={containerNarrow}>
          <h2 style={{ fontSize: "30px", margin: 0 }}>
            Let’s build your next UK & Ireland touring programme.
          </h2>

          <div style={{ marginTop: "24px" }}>
            <a href="/contact" style={ctaPrimary}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

//////////////////////
// 🎨 STYLES (clean system)
//////////////////////

const hero: React.CSSProperties = {
  background:
    "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
  color: "white",
  padding: "100px 20px 120px",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const containerNarrow: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const headline: React.CSSProperties = {
  fontSize: "clamp(48px, 7vw, 78px)",
  lineHeight: 1.02,
  margin: 0,
  letterSpacing: "-0.03em",
};

const subtext: React.CSSProperties = {
  marginTop: "26px",
  maxWidth: "720px",
  color: "#DCE8F5",
  fontSize: "18px",
  lineHeight: 1.9,
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.16em",
  fontWeight: 700,
  marginBottom: "18px",
};

const ctaWrap: React.CSSProperties = {
  marginTop: "34px",
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};

const ctaSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#EAF3FF",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
};

const sectionLight: React.CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const sectionDark: React.CSSProperties = {
  padding: "100px 20px",
  background: "#07111F",
  color: "white",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "34px",
  margin: "10px 0",
};

const sectionTitleDark: React.CSSProperties = {
  fontSize: "34px",
  margin: "10px 0",
};

const sectionText: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};

const sectionTextDark: React.CSSProperties = {
  color: "#DCE8F5",
  lineHeight: 1.8,
};

const grid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "50px auto 0",
  display: "grid",
  gap: "24px",
};

const card: React.CSSProperties = {
  background: "#ffffff",
  padding: "28px",
  borderRadius: "16px",
  borderLeft: "5px solid #D4AF37",
  boxShadow: "0 15px 40px rgba(15, 23, 42, 0.08)",
};

const cardTitle: React.CSSProperties = {
  margin: "0 0 10px",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.7,
};
