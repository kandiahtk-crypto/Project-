export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#0A0A0A",
        padding: "20px",
        borderBottom: "1px solid #222",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <span style={{ color: "#D4AF37", fontWeight: 600 }}>
          UKIGT
        </span>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={link}>Home</a>
          <a href="/services" style={link}>Services</a>
          <a href="/contact" style={link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

const link = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "14px",
};
