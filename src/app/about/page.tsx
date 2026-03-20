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
        <h1 style={title}>About Us</h1>

        <p style={text}>
          A premium transport partner for international UK & Ireland touring.
        </p>
      </section>

      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={content}>
          <p>
            UK Inbound Ground Transport supports international tour operators,
            DMCs and travel brands with dependable, structured and professionally
            delivered transport solutions.
          </p>
        </div>
      </section>
    </>
  );
}
