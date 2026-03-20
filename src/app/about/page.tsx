export default function AboutPage() {
  return (
    <main style={{ paddingTop: "90px", fontFamily: "Arial" }}>
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "#0B1728",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#D4AF37" }}>About UKIGT</h1>
        <p style={{ opacity: 0.85 }}>
          A structured, premium transport partner for inbound UK & Ireland touring programmes.
        </p>
      </section>

      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Who We Are</h2>
          <p style={{ lineHeight: 1.8, color: "#334155" }}>
            UK Inbound Ground Transport is a specialist provider supporting international
            tour operators, DMCs and travel brands across the UK and Ireland.
          </p>

          <p style={{ lineHeight: 1.8, color: "#334155" }}>
            Our focus is on structured delivery, operational consistency and premium brand
            presentation. We ensure every touring programme runs with clarity, precision
            and reliability.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 20px", background: "#EAF3FF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Our Approach</h2>
          <p style={{ lineHeight: 1.8, color: "#334155" }}>
            We build transport operations around repeatability, timing accuracy and
            seamless coordination. This ensures every departure delivers the same
            high-quality experience.
          </p>
        </div>
      </section>
    </main>
  );
}
