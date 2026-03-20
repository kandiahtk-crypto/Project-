function ServiceBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "30px",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          color: "#D4AF37",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "14px",
        }}
      >
        {number}
      </div>

      <h3
        style={{
          margin: "0 0 14px",
          color: "#0F172A",
          fontSize: "26px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#475569",
          lineHeight: 1.9,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "60px 20px 90px", // 🔥 FIXED GAP
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "0.14em",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "14px",
            }}
          >
            OUR SERVICES
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Premium UK & Ireland ground-transport solutions
          </h1>

          <p
            style={{
              maxWidth: "780px",
              margin: "24px auto 0",
              color: "#DCE8F5",
              lineHeight: 1.9,
              fontSize: "18px",
            }}
          >
            Structured, dependable touring logistics designed for international
            tour operators, DMCs and travel brands across the United Kingdom
            and Ireland.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "grid",
            gap: "24px",
          }}
        >
          <ServiceBlock
            number="01"
            title="Fixed-Departure Series Support"
            text="Structured and repeatable operations for season-long touring programmes with consistent timing, routing and delivery."
          />

          <ServiceBlock
            number="02"
            title="Multi-Region UK Touring"
            text="Seamless touring across England, Scotland and Wales with efficient movement and balanced routing."
          />

          <ServiceBlock
            number="03"
            title="UK–Ireland Integration"
            text="Unified British Isles touring with coordinated ferry logistics and smooth cross-country continuity."
          />

          <ServiceBlock
            number="04"
            title="Large Group Coordination"
            text="Efficient multi-coach and high-volume group transport management with structured execution."
          />

          <ServiceBlock
            number="05"
            title="International Market Alignment"
            text="Touring flow tailored to long-haul markets including the US, India, China and Europe."
          />
        </div>
      </section>

      {/* WHY US */}
      <section
        style={{
          padding: "90px 20px",
          background: "#EAF3FF",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#D4AF37",
              fontSize: "12px",
              letterSpacing: "0.12em",
              marginBottom: "12px",
              fontWeight: 700,
            }}
          >
            WHY OPERATORS CHOOSE US
          </p>

          <h2 style={{ fontSize: "42px", marginBottom: "40px" }}>
            Built for structured inbound touring
          </h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {[
              "Consistent delivery across departures",
              "UK & Ireland coverage",
              "Clear operational structure",
              "Reliable complex logistics",
              "Long-haul market expertise",
              "Premium brand execution",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "white",
                  padding: "22px",
                  borderRadius: "14px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            background: "#0B1728",
            color: "white",
            padding: "50px",
            borderRadius: "24px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "40px" }}>
            Ready to plan your next programme?
          </h2>

          <p style={{ marginTop: "16px", color: "#DCE8F5" }}>
            Speak with our team about your touring requirements.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "24px",
              background: "#D4AF37",
              color: "#0B1728",
              padding: "14px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
