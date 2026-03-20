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
    <div
      style={{
        maxWidth: "760px",
        margin: "0 auto 48px",
        textAlign: "center",
      }}
    >
      {eyebrow && (
        <p
          style={{
            margin: "0 0 12px",
            color: "#D4AF37",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        style={{
          fontSize: "40px",
          margin: 0,
          color: "#111827",
        }}
      >
        {title}
      </h2>

      {text && (
        <p
          style={{
            marginTop: "18px",
            color: "#555",
            lineHeight: 1.7,
          }}
        >
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
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <h3 style={{ margin: 0, color: "#0F172A" }}>{title}</h3>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section
        style={{
          padding: "40px 20px 100px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
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
        <SectionTitle
          eyebrow="Services"
          title="Structured Touring Logistics"
          text="Designed for professional inbound operators."
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gap: "20px",
          }}
        >
          <Card title="Fixed-Departure Series" />
          <Card title="Multi-Region UK Touring" />
          <Card title="UK–Ireland Integration" />
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
