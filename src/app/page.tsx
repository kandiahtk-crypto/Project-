function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
      {eyebrow && (
        <p style={{ marginBottom: "12px", color: "#D4AF37", fontSize: "12px", letterSpacing: "0.12em" }}>
          {eyebrow}
        </p>
      )}

      <h2 style={{ fontSize: "40px", margin: 0 }}>{title}</h2>

      {text && (
        <p style={{ marginTop: "18px", color: "#555", lineHeight: 1.7 }}>
          {text}
        </p>
      )}
    </div>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
        borderLeft: "5px solid #D4AF37",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          padding: "120px 20px 100px",
          textAlign: "center",
          background: "#07111F",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "42px", color: "#D4AF37" }}>
          UK Inbound Ground Transport
        </h1>

        <p style={{ maxWidth: "700px", margin: "20px auto", color: "#ccc" }}>
          Premium UK & Ireland ground transport solutions for international
          tour operators.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <SectionTitle
          eyebrow="Services"
          title="Structured Touring Logistics"
          text="Designed for professional inbound operators."
        />

        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "20px" }}>
          <Card title="Fixed-Departure Series" />
          <Card title="Multi-Region UK Touring" />
          <Card title="UK–Ireland Integration" />
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
        <h2 style={{ color: "#D4AF37" }}>
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
