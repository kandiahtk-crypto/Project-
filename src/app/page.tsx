import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | Premium UK & Ireland Touring Logistics",
  description:
    "Premium UK & Ireland ground transport solutions for international tour operators.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroOverlay} />

        <div style={heroInner}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={heroTitle}>
            UK Inbound Ground Transport
          </h1>

          <p style={heroSubtitle}>
            Premium touring logistics across the United Kingdom and Ireland for
            international operators who require structure, clarity and dependable delivery.
          </p>

          <a href="/contact" style={cta}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={band}>
        <h2 style={bandText}>
          Structured. Reliable. Premium delivery across every programme.
        </h2>
      </section>

      {/* IMAGE + TEXT */}
      <section style={section}>
        <div style={split}>
          <div style={imageBox} />

          <div>
            <p style={eyebrow}>Our Approach</p>
            <h2 style={heading}>
              A transport partner, not just a supplier.
            </h2>

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
      <section style={sectionAlt}>
        <h2 style={headingCenter}>Services</h2>

        <div style={services}>
          <div style={card}>
            <h3 style={cardTitle}>Fixed-Departure Series</h3>
            <p style={cardText}>Consistent structured delivery across touring programmes.</p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Multi-Region UK Touring</h3>
            <p style={cardText}>Seamless routing across England, Scotland and Wales.</p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>UK & Ireland Programmes</h3>
            <p style={cardText}>Integrated British Isles touring with full coordination.</p>
          </div>
        </div>
      </section>

      {/* FULL IMAGE STRIP */}
      <section style={imageStrip}>
        <div style={stripOverlay} />
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
  position: "relative",
  backgroundImage: "url('/hero.jpg')", // 👉 add image in public folder
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "100px 20px 120px",
};

const heroOverlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "rgba(5,13,24,0.75)",
};

const heroInner: React.CSSProperties = {
  position: "relative",
  maxWidth: "1000px",
  margin: "0 auto",
};

const heroTitle: React.CSSProperties = {
  fontSize: "clamp(56px, 8vw, 96px)",
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
  fontWeight: 600,
};

const heroSubtitle: React.CSSProperties = {
  marginTop: "16px",
  maxWidth: "600px",
  color: "#DCE8F5",
  fontSize: "18px",
  lineHeight: 1.8,
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const band: React.CSSProperties = {
  background: "#0B1728",
  padding: "60px 20px",
  textAlign: "center",
};

const bandText: React.CSSProperties = {
  color: "white",
  fontSize: "28px",
};

const section: React.CSSProperties = {
  padding: "100px 20px",
};

const sectionAlt: React.CSSProperties = {
  padding: "100px 20px",
  background: "#F8FBFF",
};

const split: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
};

const imageBox: React.CSSProperties = {
  backgroundImage: "url('/coach.jpg')", // 👉 add image
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "10px",
  minHeight: "320px",
};

const heading: React.CSSProperties = {
  fontSize: "36px",
  lineHeight: 1.2,
};

const headingCenter: React.CSSProperties = {
  fontSize: "36px",
  textAlign: "center",
};

const text: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.9,
  marginTop: "10px",
};

const services: React.CSSProperties = {
  marginTop: "40px",
  display: "grid",
  gap: "20px",
};

const card: React.CSSProperties = {
  background: "white",
  padding: "24px",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

const cardTitle: React.CSSProperties = {
  fontSize: "22px",
};

const cardText: React.CSSProperties = {
  marginTop: "10px",
  color: "#475569",
};

const imageStrip: React.CSSProperties = {
  position: "relative",
  backgroundImage: "url('/uk.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "120px 20px",
  textAlign: "center",
};

const stripOverlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "rgba(7,17,31,0.75)",
};

const stripText: React.CSSProperties = {
  position: "relative",
  color: "white",
  fontSize: "36px",
};

const ctaSection: React.CSSProperties = {
  padding: "100px 20px",
  textAlign: "center",
};

const cta: React.CSSProperties = {
  marginTop: "20px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 24px",
  fontWeight: 700,
  textDecoration: "none",
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
