export default function HomePage() {
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
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 18px",
              color: "#D4AF37",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Premium UK & Ireland Touring Logistics
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            UK Inbound Ground Transport
          </h1>

          <p
            style={{
              margin: "26px 0 0",
              maxWidth: "720px",
              color: "#DCE8F5",
              lineHeight: 1.9,
              fontSize: "18px",
            }}
          >
            We support international tour operators, DMCs and travel brands with
            structured, dependable and premium ground transport solutions across
            the United Kingdom and Ireland. From fixed-departure series to
            complex multi-region programmes, our service is built to deliver
            consistency, clarity and confidence on every departure.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              marginTop: "34px",
              flexWrap: "wrap",
            }}
          >
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
      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Services</p>

          <h2 style={sectionTitle}>
            Structured touring logistics built for professional inbound operators.
          </h2>

          <p style={sectionText}>
            Our service model is designed around repeatability, operational clarity
            and premium delivery — ensuring your programmes run smoothly from first
            departure to final arrival.
          </p>
        </div>

        <div style={grid}>
          <div style={card}>
            <h3>Fixed-Departure Series</h3>
            <p>
              Consistent, repeatable operations across season-long touring programmes,
              ensuring every departure follows the same high standard.
            </p>
          </div>

          <div style={card}>
            <h3>Multi-Region UK Touring</h3>
            <p>
              Seamless routing across England, Scotland and Wales with balanced pacing,
              efficient movement and professional coordination.
            </p>
          </div>

          <div style={card}>
            <h3>UK–Ireland Integration</h3>
            <p>
              Fully coordinated British Isles touring with managed ferry timings and
              smooth cross-country continuity.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        style={{
          padding: "90px 20px",
          background: "#07111F",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Why Operators Choose Us</p>

          <h2 style={{ fontSize: "32px", margin: "0 0 20px" }}>
            A transport partner built for consistency and reliability.
          </h2>

          <p style={{ color: "#DCE8F5", lineHeight: 1.8 }}>
            We focus on structured delivery, clear communication and dependable
            execution — helping operators protect their product quality and
            deliver a stronger guest experience across every programme.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
          background: "#F8FBFF",
        }}
      >
        <h2 style={{ margin: 0 }}>
          Let’s build your next UK & Ireland touring programme.
        </h2>

        <a href="/contact" style={ctaPrimary}>
          Contact Us
        </a>
      </section>
    </>
  );
}

const grid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "40px auto 0",
  display: "grid",
  gap: "24px",
};

const card: React.CSSProperties = {
  background: "#ffffff",
  padding: "26px",
  borderRadius: "14px",
  borderLeft: "5px solid #D4AF37",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
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

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
};

const sectionTitle: React.CSSProperties = {
  fontSize: "32px",
  margin: "10px 0",
};

const sectionText: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};
