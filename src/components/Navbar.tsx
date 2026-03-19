"use client";

export default function Navbar() {
  return (
    <header style={header}>
      <div style={container}>
        {/* LOGO */}
        <a href="/" style={logo}>
          UKIGT
        </a>

        {/* MENU */}
        <nav style={nav}>
          <a href="/" style={link}>Home</a>
          <a href="/about" style={link}>About</a>
          <a href="/services" style={link}>Services</a>
          <a href="/programmes" style={link}>Programmes</a>

          {/* CTA */}
          <a href="/contact" style={cta}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

/* STYLES */

const header: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(7, 17, 31, 0.85)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const container: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "18px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo: React.CSSProperties = {
  color: "#D4AF37",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  letterSpacing: "0.1em",
};

const nav: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "26px",
};

const link: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
};

const cta: React.CSSProperties = {
  background: "linear-gradient(135deg, #D4AF37, #F5D76E)",
  color: "#07111F",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
  boxShadow: "0 10px 25px rgba(212,175,55,0.25)",
};
