export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "60px 20px 90px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            color: "#D4AF37",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          About UKIGT
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#DCE8F5",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          A structured, premium transport partner for international UK & Ireland
          touring programmes.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={container}>
          <h2 style={heading}>Who We Are</h2>

          <p style={text}>
            UK Inbound Ground Transport supports international tour operators,
            DMCs and travel brands with dependable, structured and professionally
            delivered ground transport solutions across the United Kingdom and
            Ireland.
          </p>

          <p style={text}>
            We specialise in multi-day touring programmes, fixed-departure
            series and high-volume group travel, ensuring each programme runs
            with clarity, consistency and operational precision.
          </p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ padding: "80px 20px", background: "#EAF3FF" }}>
        <div style={container}>
          <h2 style={heading}>Our Approach</h2>

          <p style={text}>
            Our service model is built around structured planning, repeatability
            and dependable delivery. Every route, timing schedule and movement
            plan is designed to support smooth day-to-day operations.
          </p>

          <p style={text}>
            We focus on eliminating uncertainty in touring logistics, allowing
            operators to deliver a stronger and more consistent guest experience.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={container}>
          <h2 style={heading}>Why Work With Us</h2>

          <div style={grid}>
            <div style={card}>Structured operational delivery</div>
            <div style={card}>Reliable UK & Ireland coverage</div>
            <div style={card}>Designed for international operators</div>
            <div style={card}>Premium brand presentation</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#07111F",
          color: "white",
        }}
      >
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          Let’s build your next touring programme
        </h2>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#D4AF37",
            color: "#07111F",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Contact Us
        </a>
      </section>
    </>
  );
}

const container: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const heading: React.CSSProperties = {
  fontSize: "32px",
  marginBottom: "20px",
  color: "#0F172A",
};

const text: React.CSSProperties = {
  lineHeight: 1.8,
  color: "#334155",
  fontSize: "17px",
  marginBottom: "16px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gap: "20px",
};

const card: React.CSSProperties = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  borderLeft: "5px solid #D4AF37",
};
