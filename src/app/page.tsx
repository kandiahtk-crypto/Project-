import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport",
  description: "Premium UK & Ireland touring logistics",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={overlay} />

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
          Built for operators who expect precision, consistency and control.
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
          <div style={service}>01 — Fixed-Departure Series</div>
          <div style={service}>02 — Multi-Region UK Touring</div>
          <div style={service}>03 — UK & Ireland Programmes</div>
        </div>
      </section>

      {/* FULL IMAGE STRIP */}
      <section style={imageStrip}>
        <div style={overlay} />

        <h2 style={stripText}>
          Seamless touring across the United Kingdom and Ireland.
        </h2>
      </section>

      {/* VALUE */}
      <section style={section}>
        <div style={center}>
          <h2 style={headingCenter}>Why operators choose us</h2>

          <p style={textCenter}>
            Structured delivery, clear communication and dependable execution —
            supporting consistent programme quality and guest experience.
          </p>

          <div style={valueList}>
            <div>Consistent delivery standards</div>
            <div>Clear operational structure</div>
            <div>UK & Ireland coverage</div>
            <div>Professional coordination</div>
          </div>
        </div>
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

const hero = {
  position: "relative",
  backgroundImage: "url('/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "80px 18px 100px",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(5,13,24,0.75)",
};

const heroInner = {
  position: "relative",
  maxWidth: "900px",
  margin: "0 auto",
};

const heroTitle = {
  fontSize: "clamp(42px, 10vw, 88px)",
  lineHeight: 0.92,
  letterSpacing: "-0.045em",
  fontWeight: 600,
};

const heroSubtitle = {
  marginTop: "16px",
  color: "#DCE8F5",
  fontSize: "16px",
  lineHeight: 1.7,
};

const eyebrow = {
  color: "#D4AF37",
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const section = {
  padding: "60px 18px",
};

const sectionAlt = {
  padding: "60px 18px",
  background: "#F8FBFF",
};

const split = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const imageBox = {
  backgroundImage: "url('/coach.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  minHeight: "220px",
};

const heading = {
  fontSize: "26px",
};

const headingCenter = {
  fontSize: "26px",
  textAlign: "center",
};

const text = {
  color: "#475569",
  lineHeight: 1.7,
  marginTop: "10px",
};

const textCenter = {
  color: "#475569",
  marginTop: "10px",
};

const services = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const service = {
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  paddingBottom: "10px",
};

const imageStrip = {
  position: "relative",
  backgroundImage: "url('/uk.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "100px 18px",
  textAlign: "center",
};

const stripText = {
  position: "relative",
  color: "white",
  fontSize: "24px",
};

const band = {
  background: "#0B1728",
  padding: "40px 18px",
  textAlign: "center",
};

const bandText = {
  color: "white",
  fontSize: "22px",
};

const center = {
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center",
};

const valueList = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const ctaSection = {
  padding: "60px 18px",
  textAlign: "center",
};

const cta = {
  marginTop: "18px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  fontWeight: 700,
  textDecoration: "none",
};

const footer = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "40px 18px",
  textAlign: "center",
};

const footerBrand = {
  color: "#D4AF37",
};

const footerText = {
  marginTop: "10px",
};
