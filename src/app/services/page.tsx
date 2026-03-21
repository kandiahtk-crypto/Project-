export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "80px 20px 110px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={eyebrow}>Services</p>

          <h1 style={headline}>
            Structured touring logistics across the UK & Ireland
          </h1>

          <p style={subtext}>
            Our services are built for international tour operators, DMCs and
            travel partners requiring consistent, dependable and professionally
            delivered ground transport across multi-day touring programmes.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionLight}>
        <div style={grid}>
          <ServiceCard
            title="Fixed-Departure Series"
            text="Season-long touring programmes delivered with complete consistency, ensuring each departure follows the same structure, timing and operational standard."
          />

          <ServiceCard
            title="Multi-Region UK Touring"
            text="Seamless travel across England, Scotland and Wales with balanced routing, efficient movement and professionally managed touring flow."
          />

          <ServiceCard
            title="UK–Ireland Integration"
            text="Fully coordinated British Isles touring with structured ferry planning, timing control and smooth cross-country continuity."
          />

          <ServiceCard
            title="Large Group Coordination"
            text="Support for high-volume groups, multi-coach touring and complex programmes requiring structured planning and execution."
          />

          <ServiceCard
            title="Long-Haul Market Alignment"
            text="Touring delivery aligned with international expectations including pacing, comfort, timing and overall guest experience."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={sectionDark}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ margin: 0 }}>
            Let’s support your next touring programme.
          </h2>

          <div style={{ marginTop: "24px" }}>
            <a href="/contact" style={ctaPrimary}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

//////////////////////
// COMPONENTS
//////////////////////

function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div style={card}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

//////////////////////
// STYLES
//////////////////////

const headline: React.CSSProperties = {
  fontSize: "clamp(42px, 7vw, 72px)",
  margin: 0,
  lineHeight: 1.05,
};

const subtext: React.CSSProperties = {
  marginTop: "20px",
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "18px",
  maxWidth: "720px",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
  marginBottom: "16px",
};

const sectionLight: React.CSSProperties = {
  padding: "90px 20px",
  background: "#F8FBFF",
};

const sectionDark: React.CSSProperties = {
  padding: "90px 20px",
  background: "#07111F",
  color: "white",
};

const grid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};

const card: React.CSSProperties = {
  background: "#ffffff",
  padding: "28px",
  borderRadius: "16px",
  borderLeft: "5px solid #D4AF37",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
};

const cardTitle: React.CSSProperties = {
  margin: "0 0 12px",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.8,
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};
