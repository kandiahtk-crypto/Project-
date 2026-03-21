export default function AboutPage() {
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
          }}
        >
          About Us
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
          A premium transport partner for international UK &amp; Ireland touring.
        </p>
      </section>

      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={content}>
          <p>
            UK Inbound Ground Transport supports international tour operators,
            DMCs and travel brands with dependable, structured and professionally
            delivered transport solutions.
          </p>

          <p>
            Our focus is consistency, clarity and operational excellence,
            ensuring every touring programme runs smoothly from start to finish.
          </p>
        </div>
      </section>
    </>
  );
}

const content: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  lineHeight: 1.8,
  fontSize: "18px",
  color: "#334155",
};
