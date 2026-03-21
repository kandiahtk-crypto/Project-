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
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 18px",
              color: "#D4AF37",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Services
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Structured touring logistics across the UK &amp; Ireland
          </h1>

          <p
            style={{
              margin: "26px 0 0",
              maxWidth: "760px",
              color: "#DCE8F5",
              lineHeight: 1.9,
              fontSize: "18px",
            }}
          >
            We support international tour operators, DMCs and travel brands with
            dependable, premium and professionally coordinated ground transport
            solutions across the United Kingdom and Ireland.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>What We Deliver</p>

          <h2 style={sectionTitle}>
            Touring support built for consistency, clarity and confidence.
          </h2>

          <p style={sectionText}>
            Our services are designed around operational control, repeatability
            and premium execution — helping operators deliver stronger programmes
            and a more dependable guest experience.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: "90px 20px", background: "#FFFFFF" }}>
        <div style={grid}>
          <div style={card}>
            <h3 style={cardTitle}>Fixed-Departure Series</h3>
            <p style={cardText}>
              Consistent, repeatable operations across season-long touring
              programmes, ensuring every departure follows the same structured
              standard.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Multi-Region UK Touring</h3>
            <p style={cardText}>
              Seamless routing across England, Scotland and Wales with balanced
              pacing, efficient movement and professional coordination.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>UK–Ireland Integration</h3>
            <p style={cardText}>
              Fully coordinated British Isles touring with managed ferry timings,
              cross-country continuity and structured delivery.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Large Group Coordination</h3>
            <p style={cardText}>
              High-volume group movements, multi-coach touring and more complex
              programmes handled with clarity and control.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Operator-Focused Delivery</h3>
            <p style={cardText}>
              Clear communication, dependable planning and premium execution
              designed to support international touring partners.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Programme Reliability</h3>
            <p style={cardText}>
              A service structure built to reduce friction, strengthen delivery
              and protect the guest experience across every departure.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        style={{
          padding: "90px 20px",
          background: "#07111F",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={eyebrow}>Why Choose Us</p>

          <h2 style={{ fontSize: "32px", margin: "0 0 20px" }}>
            Premium service delivery for professional inbound touring.
          </h2>

          <p style={{ color: "#DCE8F5", lineHeight: 1.8, fontSize: "18px" }}>
            We focus on structured coordination, strong communication and
            dependable operational delivery — helping operators build confidence
            in every itinerary and every departure.
          </p>

          <div
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "40px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div style={darkCard}>Consistent programme flow</div>
            <div style={darkCard}>UK &amp; Ireland coverage</div>
            <div style={darkCard}>Professional coordination</div>
            <div style={darkCard}>Reliable day-to-day delivery</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
          background: "#F8FBFF",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={eyebrow}>Ready to Plan?</p>

          <h2 style={{ margin: 0, fontSize: "36px", lineHeight: 1.2 }}>
            Let’s support your next UK &amp; Ireland touring programme.
          </h2>

          <p
            style={{
              margin: "20px auto 0",
              maxWidth: "700px",
              color: "#475569",
              lineHeight: 1.8,
              fontSize: "18px",
            }}
          >
            Speak with our team about your route structure, departure model and
            operational requirements. We’ll help shape a dependable touring
            solution.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <a href="/contact" style={ctaPrimary}>
              Contact Us
            </a>

            <a href="/" style={ctaSecondaryLight}>
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0B1728",
          color: "#DCE8F5",
          padding: "50px 20px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div>
            <h3
              style={{
                color: "#D4AF37",
                margin: "0 0 12px",
                fontSize: "20px",
              }}
            >
              UK Inbound Ground Transport
            </h3>
            <p style={footerText}>
              Premium UK &amp; Ireland ground transport solutions for
              international tour operators and travel partners.
            </p>
          </div>

          <div>
            <h4 style={footerHeading}>Navigation</h4>
            <div style={footerLinks}>
              <a href="/" style={footerLink}>Home</a>
              <a href="/about" style={footerLink}>About</a>
              <a href="/services" style={footerLink}>Services</a>
              <a href="/programmes" style={footerLink}>Programmes</a>
              <a href="/contact" style={footerLink}>Contact</a>
            </div>
          </div>

          <div>
            <h4 style={footerHeading}>Company</h4>
            <div style={footerLinks}>
              <span style={footerText}>Evershine Transport Limited</span>
              <span style={footerText}>
                Trading name: UK Inbound Ground Transport
              </span>
              <span style={footerText}>Company Reg: 13507458</span>
              <span style={footerText}>VAT: 388919914</span>
            </div>
          </div>

          <div>
            <h4 style={footerHeading}>Contact</h4>
            <div style={footerLinks}>
              <span style={footerText}>info@ukinboundgroundtransport.com</span>
              <span style={footerText}>+44 20 8629 2776</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1180px",
            margin: "30px auto 0",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: "14px",
            color: "#94A3B8",
          }}
        >
          © UK Inbound Ground Transport. All rights reserved.
        </div>
      </footer>
    </>
  );
}

const grid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
};

const card: React.CSSProperties = {
  background: "#ffffff",
  padding: "26px",
  borderRadius: "14px",
  borderLeft: "5px solid #D4AF37",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
};

const cardTitle: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#0F172A",
};

const cardText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.8,
};

const darkCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "22px",
  color: "#EAF3FF",
  fontWeight: 600,
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};

const ctaSecondaryLight: React.CSSProperties = {
  border: "1px solid rgba(15,23,42,0.12)",
  color: "#0F172A",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
};

const sectionTitle: React.CSSProperties = {
  fontSize: "32px",
  margin: "10px 0",
  lineHeight: 1.2,
};

const sectionText: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
  fontSize: "18px",
};

const footerHeading: React.CSSProperties = {
  margin: "0 0 14px",
  color: "#D4AF37",
  fontSize: "16px",
};

const footerText: React.CSSProperties = {
  margin: 0,
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "15px",
};

const footerLinks: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: React.CSSProperties = {
  color: "#DCE8F5",
  textDecoration: "none",
  fontSize: "15px",
};
