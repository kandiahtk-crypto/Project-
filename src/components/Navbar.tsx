export default function Navbar() {
  return (
    <header style={header}>
      <div style={container}>
        <a href="/" style={logo}>
          UKIGT
        </a>

        <nav style={nav}>
          <a href="/" style={link}>Home</a>
          <a href="/about" style={link}>About</a>
          <a href="/services" style={link}>Services</a>
          <a href="/programmes" style={link}>Programmes</a>
          <a href="/contact" style={link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

const header: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "#0A0A0A",
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
  gap: "28px",
  flexWrap: "wrap",
};

const link: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 500,
  whiteSpace: "nowrap",
};
