export default function ServicesPage() {
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
        <h1 style={{ margin: 0, fontSize: "clamp(38px, 5vw, 64px)" }}>
          Services
        </h1>
      </section>

      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "20px" }}>
          <div style={card}>Fixed-Departure Series Support</div>
          <div style={card}>Multi-Region UK Touring</div>
          <div style={card}>UK–Ireland Integration</div>
        </div>
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
