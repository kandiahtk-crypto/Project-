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
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
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
            Premium UK &amp; Ireland Touring Logistics
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
              lineHeight: 1.85,
              fontSize: "18px",
            }}
          >
            Premium UK &amp; Ireland ground transport solutions for international
            tour operators, delivering structured, dependable and high-quality
            touring logistics across the British Isles.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              marginTop: "34px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/contact"
              style={{
                background: "#D4AF37",
                color: "#07111F",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
                boxShadow: "0 10px 25px rgba(212,175,55,0.25)",
              }}
            >
              Plan Your Programme
            </a>

            <a
              href="/services"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#EAF3FF",
                padding: "14px 22px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gap: "22px",
          }}
        >
          <div style={card}>Fixed-Departure Series</div>
          <div style={card}>Multi-Region UK Touring</div>
          <div style={card}>UK–Ireland Integration</div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
          background: "#07111F",
          color: "white",
        }}
      >
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          Ready to plan your next touring programme?
        </h2>

        <a href="/contact" style={ctaButton}>
          Contact Us
        </a>
      </section>
    </>
  );
}

const card: React.CSSProperties = {
  background: "#ffffff",
  padding: "26px",
  borderRadius: "14px",
  borderLeft: "5px solid #D4AF37",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
  fontWeight: 600,
};

const ctaButton: React.CSSProperties = {
  display: "inline-block",
  marginTop: "24px",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};
