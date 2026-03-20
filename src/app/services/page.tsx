export default function ServicesPage() {
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
          Services
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
          Structured touring logistics designed for professional inbound operators.
        </p>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={grid}>
          <div style={card}>Fixed-Departure Series</div>
          <div style={card}>Multi-Region UK Touring</div>
          <div style={card}>UK–Ireland Integration</div>
        </div>
      </section>
    </>
  );
}

const grid: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  display: "grid",
  gap: "20px",
};

const card: React.CSSProperties = {
  background: "white",
  padding: "24px",
  borderRadius: "12px",
  borderLeft: "5px solid #D4AF37",
};
