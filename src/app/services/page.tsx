export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "80px 20px 110px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={eyebrow}>About Us</p>

          <h1 style={headline}>
            UK Inbound Ground Transport
          </h1>

          <p style={subtext}>
            A professional ground transport partner supporting international tour
            operators, DMCs and travel brands across the United Kingdom and Ireland.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={sectionLight}>
        <div style={container}>
          <h2 style={sectionTitle}>
            Built for structured, dependable touring delivery.
          </h2>

          <p style={text}>
            UK Inbound Ground Transport was created to support inbound operators
            who require more than just transport — they require consistency,
            clarity and professional execution across every touring programme.
          </p>

          <p style={text}>
            We specialise in structured, repeatable operations across multi-day
            itineraries, fixed-departure series and high-volume touring programmes,
            ensuring every journey runs smoothly from first departure to final arrival.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={sectionWhite}>
        <div style={container}>
          <h2 style={sectionTitle}>What we deliver</h2>

          <div style={grid}>
            <div style={card}>Consistent programme delivery</div>
            <div style={card}>Clear operational structure</div>
            <div style={card}>UK & Ireland coverage</div>
            <div style={card}>Professional coordination</div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section style={sectionDark}>
        <div style={container}>
          <h2 style={sectionTitleDark}>
            Our approach is built on reliability and clarity.
          </h2>

          <p style={textDark}>
            We focus on delivering transport solutions that integrate seamlessly
            into your touring programmes. Our planning, coordination and execution
            are designed to remove uncertainty, reduce operational friction and
            strengthen the overall guest experience.
          </p>

          <p style={textDark}>
            Every programme is handled with attention to detail, ensuring timing,
            routing and delivery remain consistent across all departures.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionLight}>
        <div style={{ ...container, textAlign: "center" }}>
          <h2 style={{ margin: 0 }}>
            Let’s support your next touring programme.
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
// STYLES (same system as homepage)
//////////////////////

const container: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const headline: React.CSSProperties = {
  fontSize: "clamp(42px, 7vw, 72px)",
  margin: 0,
  lineHeight: 1.02,
  letterSpacing: "-0.03em",
};

const subtext: React.CSSProperties = {
  marginTop: "20px",
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "18px",
  maxWidth: "700px",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
  marginBottom: "16px",
};

const sectionLight: React.CSSProperties = {
  padding: "90px 20px",
  background: "#F8FBFF",
};

const sectionWhite: React.CSSProperties = {
  padding: "90px 20px",
  background: "#ffffff",
};

const sectionDark: React.CSSProperties = {
  padding: "90px 20px",
  background: "#07111F",
  color: "white",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "32px",
  marginBottom: "20px",
};

const sectionTitleDark: React.CSSProperties = {
  fontSize: "32px",
  marginBottom: "20px",
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  fontSize: "18px",
  marginBottom: "16px",
};

const textDark: React.CSSProperties = {
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "18px",
  marginBottom: "16px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gap: "20px",
  marginTop: "30px",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
};

const card: React.CSSProperties = {
  background: "#F8FBFF",
  padding: "20px",
  borderRadius: "12px",
  borderLeft: "4px solid #D4AF37",
  fontWeight: 600,
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};
