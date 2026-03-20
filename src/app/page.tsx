export default function HomePage() {
  return (
    <>
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
          UK Inbound Ground Transport
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
          Premium UK &amp; Ireland ground transport solutions for international
          tour operators.
        </p>
      </section>

      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "20px" }}>
          <div style={card}>Fixed-Departure Series</div>
          <div style={card}>Multi-Region UK Touring</div>
          <div style={card}>UK–Ireland Integration</div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#07111F",
          color: "white",
        }}
      >
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          Ready to plan your next programme?
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

const card: React.CSSProperties = {
  background: "white",
  padding: "24px",
  borderRadius: "12px",
  borderLeft: "5px solid #D4AF37",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
};
