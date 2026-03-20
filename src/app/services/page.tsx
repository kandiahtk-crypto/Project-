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
        <h1 style={title}>Services</h1>

        <p style={subtitle}>
          Structured, reliable transport solutions for inbound touring programmes.
        </p>
      </section>

      {/* SERVICES */}
      <section style={sectionLight}>
        <div style={grid}>
          <div style={card}>Fixed-Departure Series</div>
          <div style={card}>Multi-Region UK Touring</div>
          <div style={card}>UK–Ireland Integration</div>
          <div style={card}>Large Group Coordination</div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          Let’s support your next touring programme
        </h2>

        <a href="/contact" style={ctaButton}>
          Contact Us
        </a>
      </section>
    </>
  );
}
