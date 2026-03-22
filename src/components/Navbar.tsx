"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 960;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header style={header}>
      <div style={container}>
        <a href="/" style={logo}>
          UK Inbound Ground Transport
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
  background: "rgba(5, 13, 24, 0.92)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const container: React.CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "18px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const logo: React.CSSProperties = {
  color: "#D4AF37",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "clamp(12px, 1.5vw, 15px)",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  lineHeight: 1.2,
  maxWidth: "70%",
};

const desktopNav: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
};

const link: React.CSSProperties = {
  color: "#E6EEF7",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.03em",
};

const cta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  textDecoration: "none",
  padding: "11px 18px",
  borderRadius: "2px",
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.04em",
};

const menuButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#E6EEF7",
  fontSize: "30px",
  lineHeight: 1,
  cursor: "pointer",
  padding: 0,
};

const mobileMenu: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "20px 24px 24px",
  background: "rgba(5, 13, 24, 0.98)",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};

const mobileLink: React.CSSProperties = {
  color: "#E6EEF7",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 500,
  letterSpacing: "0.02em",
};

const mobileCta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "2px",
  fontWeight: 700,
  fontSize: "15px",
  textAlign: "center",
  letterSpacing: "0.04em",
};
