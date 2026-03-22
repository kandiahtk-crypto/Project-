"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ ...header, ...(scrolled ? headerScrolled : {}) }}>
      <div style={container}>
        <a href="/" style={logo}>
          UKIGT
        </a>

        <nav style={nav}>
          <a href="/" style={link}>Home</a>
          <a href="/about" style={link}>About</a>
          <a href="/services" style={link}>Services</a>
          <a href="/programmes" style={link}>Programmes</a>
          <a href="/contact" style={cta}>Contact</a>
        </nav>

        <button style={menuButton} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div style={mobileMenu}>
          <a href="/" style={mobileLink}>Home</a>
          <a href="/about" style={mobileLink}>About</a>
          <a href="/services" style={mobileLink}>Services</a>
          <a href="/programmes" style={mobileLink}>Programmes</a>
          <a href="/contact" style={mobileCta}>Contact</a>
        </div>
      )}
    </header>
  );
}

/* STYLES */

const header: React.CSSProperties = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  padding: "18px 20px",
  background: "transparent",
  transition: "all 0.4s ease",
};

const headerScrolled: React.CSSProperties = {
  background: "rgba(5, 13, 24, 0.92)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const container: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo: React.CSSProperties = {
  color: "#D4AF37",
  textDecoration: "none",
  fontWeight: 700,
  letterSpacing: "0.14em",
  fontSize: "14px",
};

const nav: React.CSSProperties = {
  display: "flex",
  gap: "28px",
  alignItems: "center",
};

const link: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  transition: "opacity 0.3s ease",
};

const cta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "10px 16px",
  borderRadius: "2px",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "13px",
};

const menuButton: React.CSSProperties = {
  display: "none",
  background: "none",
  border: "none",
  color: "#E6F0FA",
  fontSize: "22px",
  cursor: "pointer",
};

const mobileMenu: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "20px",
  background: "#050D18",
};

const mobileLink: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
};

const mobileCta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px",
  textAlign: "center",
  textDecoration: "none",
};
