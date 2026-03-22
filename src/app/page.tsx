export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={overlay} />
        <div style={container}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={title}>
            UK Inbound Ground Transport
          </h1>

          <p style={subtitle}>
            Premium touring logistics across the United Kingdom and Ireland for
            international operators requiring structure, clarity and reliable delivery.
          </p>

          <a href="/contact" style={cta}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>
            A transport partner, not just a supplier.
          </h2>

          <p style={text}>
            We support international tour operators and DMCs with structured
            ground transport delivery across England, Scotland, Wales and Ireland.
          </p>

          <p style={text}>
            Every programme is delivered with operational clarity, consistency
            and dependable coordination.
          </p>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section style={imageStrip}>
        <div style={overlay} />
        <h2 style={stripText}>
          Seamless touring across the United Kingdom and Ireland.
        </h2>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={heading}>Services</h2>

          <div style={list}>
            <div style={item}>Fixed-Departure Series</div>
            <div style={item}>Multi-Region UK Touring</div>
            <div style={item}>UK & Ireland Programmes</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>Plan your next touring programme</h2>

          <a href="/contact" style={cta}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p style={brand}>UK Inbound Ground Transport</p>
        <p>
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
  padding: "70px 18px",
  color: "white",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(5,13,24,0.75)",
};

const container = {
  position: "relative",
  maxWidth: "900px",
  margin: "0 auto",
};

const title = {
  fontSize: "clamp(40px, 10vw, 80px)",
  lineHeight: 0.95,
};

const subtitle = {
  marginTop: "12px",
  color: "#DCE8F5",
};

const eyebrow = {
  color: "#D4AF37",
  fontSize: "11px",
  letterSpacing: "0.15em",
};

const cta = {
  marginTop: "18px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px 20px",
  fontWeight: 700,
  textDecoration: "none",
};

const section = {
  padding: "50px 18px",
};

const sectionAlt = {
  padding: "50px 18px",
  background: "#F8FBFF",
};

const heading = {
  fontSize: "24px",
};

const text = {
  color: "#475569",
  marginTop: "10px",
};

const list = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const item = {
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  paddingBottom: "8px",
};

const imageStrip = {
  position: "relative",
  backgroundImage: "url('/uk.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "90px 18px",
  textAlign: "center",
};

const stripText = {
  position: "relative",
  color: "white",
  fontSize: "22px",
};

const footer = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "40px 18px",
  textAlign: "center",
};

const brand = {
  color: "#D4AF37",
};
