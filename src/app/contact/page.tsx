export default function ContactPage() {
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
          <p style={eyebrow}>Contact</p>

          <h1 style={heroTitle}>
            Speak with our team about your touring programme
          </h1>

          <p style={heroText}>
            Whether you're planning fixed-departure series, multi-region UK
            touring or British Isles programmes, we’re here to support your
            operational requirements with clarity and reliability.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
        <div style={grid}>
          
          {/* LEFT SIDE */}
          <div style={card}>
            <h2 style={sectionTitle}>Get in touch</h2>

            <p style={sectionText}>
              Our team supports international operators, DMCs and travel brands.
              Speak with us about your programme structure, routing, group size
              and operational planning.
            </p>

            <div style={infoBlock}>
              <p style={label}>Email</p>
              <p style={value}>info@ukinboundgroundtransport.com</p>
            </div>

            <div style={infoBlock}>
              <p style={label}>Phone</p>
              <p style={value}>+44 20 8629 2776</p>
            </div>

            <div style={infoBlock}>
              <p style={label}>Company</p>
              <p style={value}>
                Evershine Transport Limited <br />
                Trading name: UK Inbound Ground Transport
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div style={card}>
            <h2 style={sectionTitle}>Send an enquiry</h2>

            <form style={form}>
              <input placeholder="Full Name" style={input} />
              <input placeholder="Company" style={input} />
              <input placeholder="Email Address" style={input} />
              <input placeholder="Phone Number" style={input} />

              <textarea
                placeholder="Tell us about your programme requirements..."
                style={textarea}
              />

              <button type="submit" style={ctaPrimary}>
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={{ margin: 0 }}>
          Let’s support your next UK & Ireland touring programme.
        </h2>

        <p style={{ marginTop: "16px", color: "#475569" }}>
          Structured delivery. Clear communication. Dependable execution.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerGrid}>
          
          <div>
            <h3 style={footerLogo}>UK Inbound Ground Transport</h3>
            <p style={footerText}>
              Premium UK & Ireland ground transport solutions for international
              tour operators.
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

        <div style={footerBottom}>
          © UK Inbound Ground Transport. All rights reserved.
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const grid: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gap: "24px",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
};

const card: React.CSSProperties = {
  background: "white",
  padding: "28px",
  borderRadius: "14px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(42px, 7vw, 72px)",
  margin: 0,
  lineHeight: 1.05,
};

const heroText: React.CSSProperties = {
  marginTop: "24px",
  maxWidth: "720px",
  color: "#DCE8F5",
  lineHeight: 1.8,
};

const sectionTitle: React.CSSProperties = {
  margin: "0 0 16px",
  fontSize: "26px",
};

const sectionText: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.8,
};

const infoBlock: React.CSSProperties = {
  marginTop: "20px",
};

const label: React.CSSProperties = {
  fontSize: "12px",
  textTransform: "uppercase",
  color: "#D4AF37",
  marginBottom: "6px",
};

const value: React.CSSProperties = {
  margin: 0,
  color: "#0F172A",
  fontWeight: 600,
};

const form: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  marginTop: "20px",
};

const input: React.CSSProperties = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #E2E8F0",
};

const textarea: React.CSSProperties = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #E2E8F0",
  minHeight: "120px",
};

const ctaPrimary: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const ctaSection: React.CSSProperties = {
  padding: "80px 20px",
  textAlign: "center",
  background: "#F8FBFF",
};

const footer: React.CSSProperties = {
  background: "#0B1728",
  color: "#DCE8F5",
  padding: "50px 20px 30px",
};

const footerGrid: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gap: "30px",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
};

const footerHeading: React.CSSProperties = {
  color: "#D4AF37",
  marginBottom: "12px",
};

const footerLogo: React.CSSProperties = {
  color: "#D4AF37",
  marginBottom: "10px",
};

const footerText: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.7,
};

const footerLinks: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: React.CSSProperties = {
  color: "#DCE8F5",
  textDecoration: "none",
};

const footerBottom: React.CSSProperties = {
  maxWidth: "1180px",
  margin: "30px auto 0",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  fontSize: "14px",
  color: "#94A3B8",
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
};
