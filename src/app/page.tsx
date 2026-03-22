export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroInner}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={heroTitle}>
            UK Inbound Ground Transport
          </h1>

          <p style={heroSubtitle}>
            Premium touring logistics across the United Kingdom and Ireland for
            international operators who require structure, clarity and reliable delivery.
          </p>

          <a href="/contact" style={cta}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={band}>
        <h2 style={bandText}>
          Built for operators who expect precision and consistency.
        </h2>
      </section>

      {/* INTRO SPLIT */}
      <section style={sectionLight}>
        <div style={split}>
          <h2 style={heading}>
            A transport partner, not just a supplier.
          </h2>

          <div>
            <p style={text}>
              We support international tour operators and DMCs with structured
              ground transport delivery across England, Scotland, Wales and Ireland.
            </p>

            <p style={text}>
              Every programme is delivered with operational clarity, consistent execution
              and dependable coordination.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={headingCenter}>Services</h2>

        <div style={services}>
          <div style={service}>01 — Fixed-Departure Series</div>
          <div style={service}>02 — Multi-Region UK Touring</div>
          <div style={service}>03 — UK & Ireland Programmes</div>
        </div>
      </section>

      {/* FULL STRIP */}
      <section style={darkStrip}>
        <h2 style={stripText}>
          Reliable delivery across every departure.
        </h2>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={headingCenter}>
          Plan your next touring programme
        </h2>

        <a href="/contact" style={cta}>
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p style={footerBrand}>UK Inbound Ground Transport</p>

        <p style={footerText}>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </p>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background: "#050D18",
  color: "white",
  padding: "60px 20px 90px",
};

const heroInner: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  marginTop: "-30px",
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(54px, 8vw, 92px)",
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
  margin: 0,
};

const heroSubtitle: React.CSSProperties = {
  marginTop: "16px",
  maxWidth: "600px",
  color: "#AFC1D4",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.14em",
};

const cta: React.CSSProperties = {
  marginTop: "22px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  textDecoration: "none",
  fontWeight: 700,
};

const band: React.CSSProperties = {
  background: "#0B1728",
  padding: "50px 20px",
  textAlign: "center",
};

const bandText: React.CSSProperties = {
  color: "white",
  fontSize: "26px",
};

const sectionLight: React.CSSProperties = {
  padding: "80px 20px",
  background: "#F8FBFF",
};

const split: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
};

const heading: React.CSSProperties = {
  fontSize: "32px",
  margin: 0,
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};

const section: React.CSSProperties = {
  padding: "80px 20px",
};

const headingCenter: React.CSSProperties = {
  fontSize: "32px",
  textAlign: "center",
};

const services: React.CSSProperties = {
  marginTop: "30px",
  display: "grid",
  gap: "14px",
};

const service: React.CSSProperties = {
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  paddingBottom: "12px",
};

const darkStrip: React.CSSProperties = {
  background: "#07111F",
  padding: "100px 20px",
  textAlign: "center",
};

const stripText: React.CSSProperties = {
  color: "white",
  fontSize: "32px",
};

const ctaSection: React.CSSProperties = {
  padding: "80px 20px",
  textAlign: "center",
};

const footer: React.CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "50px 20px",
  textAlign: "center",
};

const footerBrand: React.CSSProperties = {
  color: "#D4AF37",
};

const footerText: React.CSSProperties = {
  marginTop: "10px",
};
