"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 900);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header style={header}>
      <div style={container}>
        <a href="/" style={logo}>
          UKIGT
        </a>

        {isMobile ? (
          <button
            onClick={() => setOpen(!open)}
            style={menuButton}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        ) : (
          <nav style={desktopNav}>
            <a href="/" style={link}>Home</a>
            <a href="/about" style={link}>About</a>
            <a href="/services" style={link}>Services</a>
            <a href="/programmes" style={link}>Programmes</a>
            <a href="/contact" style={cta}>Contact</a>
          </nav>
        )}
      </div>

      {isMobile && open && (
        <div style={mobileMenu}>
          <a href="/" style={mobileLink} onClick={closeMenu}>Home</a>
          <a href="/about" style={mobileLink} onClick={closeMenu}>About</a>
          <a href="/services" style={mobileLink} onClick={closeMenu}>Services</a>
          <a href="/programmes" style={mobileLink} onClick={closeMenu}>Programmes</a>
          <a href="/contact" style={mobileCta} onClick={closeMenu}>Contact</a>
        </div>
      )}
    </header>
  );
}

const header: React.CSSProperties = {
  position: "sticky",
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(7, 17, 31, 0.92)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
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
  letterSpacing: "0.12em",
};

const desktopNav: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "28px",
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
  padding: "11px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
};

const menuButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#E6F0FA",
  fontSize: "28px",
  lineHeight: 1,
  cursor: "pointer",
};

const mobileMenu: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "18px 20px 22px",
  background: "rgba(7, 17, 31, 0.98)",
  borderTop: "1px solid rgba(255,255,255,0.06)",
};

const mobileLink: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 500,
};

const mobileCta: React.CSSProperties = {
  background: "linear-gradient(135deg, #D4AF37, #F5D76E)",
  color: "#07111F",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "15px",
  textAlign: "center",
};
