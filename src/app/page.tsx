export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroInner}>
          <h1 style={heroTitle}>
            UK Inbound
            <br />
            Ground Transport
          </h1>

          <p style={heroText}>
            Premium touring logistics across the United Kingdom and Ireland,
            designed for international operators who require structure,
            reliability and consistent delivery.
          </p>
        </div>
      </section>

      {/* INTRO BAND */}
      <section style={band}>
        <p>
          Supporting international tour operators · UK & Ireland coverage ·
          Structured programme delivery
        </p>
      </section>

      {/* STORY SECTION */}
      <section style={section}>
        <div style={split}>
          <div>
            <h2 style={heading}>
              Built for inbound touring at scale
            </h2>
          </div>

          <div>
            <p style={text}>
              UK Inbound Ground Transport supports global travel brands,
              destination management companies and tour operators with
              structured transport delivery across England, Scotland, Wales and
              Ireland.
            </p>

            <p style={text}>
              Our focus is not just movement — but programme flow. We ensure
              every itinerary runs with clarity, consistency and control.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP (VISITBRITAIN STYLE) */}
      <section style={featureSection}>
        <div style={featureGrid}>
          <div style={featureItem}>
            <h3>Fixed-Departure Series</h3>
            <p>Consistent programme delivery across season-long touring.</p>
          </div>

          <div style={featureItem}>
            <h3>Multi-Region UK Touring</h3>
            <p>Seamless routing across England, Scotland and Wales.</p>
          </div>

          <div style={featureItem}>
            <h3>UK & Ireland Programmes</h3>
            <p>Integrated British Isles touring with structured coordination.</p>
          </div>
        </div>
      </section>

      {/* IMAGE STYLE BREAK */}
      <section style={imageBreak}>
        <div style={imageOverlay}>
          <h2 style={imageText}>
            Reliable delivery across every programme
          </h2>
        </div>
      </section>

      {/* VALUE */}
      <section style={section}>
        <div style={center}>
          <h2 style={headingCenter}>
            Structured. Reliable. Premium.
          </h2>

          <div style={valueGrid}>
            <div>Consistent departures</div>
            <div>Clear coordination</div>
            <div>UK & Ireland coverage</div>
            <div>Operator-focused delivery</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={{ margin: 0 }}>
          Plan your next touring programme
        </h2>

        <a href="/contact" style={ctaButton}>
          Contact Us
        </a>
      </section>

      {/* ELITE FOOTER */}
      <footer style={footer}>
        <div style={footerTop}>
          <h3 style={footerBrand}>UK Inbound Ground Transport</h3>

          <div style={footerLinks}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/programmes">Programmes</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div style={footerBottom}>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #06101D 0%, #0B1728 60%, #10233B 100%)",
  color: "white",
  padding: "140px 20px 120px",
};

const heroInner: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(50px, 8vw, 90px)",
  lineHeight: 0.95,
  margin: 0,
};

const heroText: React.CSSProperties = {
  marginTop: "24px",
  maxWidth: "600px",
  color: "#C7D5E5",
  lineHeight: 1.8,
};

const band: React.CSSProperties = {
  background: "#0B1728",
  color: "#D4AF37",
  textAlign: "center",
  padding: "18px",
  fontSize: "14px",
};

const section: React.CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const split: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
  gridTemplateColumns: "1fr",
};

const heading: React.CSSProperties = {
  fontSize: "36px",
  margin: 0,
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};

const featureSection: React.CSSProperties = {
  background: "#FFFFFF",
  padding: "80px 20px",
};

const featureGrid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "30px",
};

const featureItem: React.CSSProperties = {
  borderBottom: "1px solid #E2E8F0",
  paddingBottom: "20px",
};

const imageBreak: React.CSSProperties = {
  height: "300px",
  background:
    "linear-gradient(135deg, #07111F, #10233B)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageOverlay: React.CSSProperties = {
  color: "white",
  textAlign: "center",
};

const imageText: React.CSSProperties = {
  fontSize: "28px",
};

const center: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const headingCenter: React.CSSProperties = {
  fontSize: "32px",
};

const valueGrid: React.CSSProperties = {
  display: "grid",
  gap: "16px",
  marginTop: "30px",
};

const ctaSection: React.CSSProperties = {
  padding: "100px 20px",
  textAlign: "center",
};

const ctaButton: React.CSSProperties = {
  marginTop: "20px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 24px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 700,
};

const footer: React.CSSProperties = {
  background: "#07111F",
  color: "#C7D5E5",
  padding: "60px 20px 30px",
};

const footerTop: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
};

const footerBrand: React.CSSProperties = {
  color: "#D4AF37",
};

const footerLinks: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const footerBottom: React.CSSProperties = {
  marginTop: "40px",
  textAlign: "center",
  fontSize: "14px",
  color: "#94A3B8",
};
