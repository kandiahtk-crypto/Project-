"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={header}>
      <div style={container}>
        {/* LOGO */}
        <a href="/" style={logo}>
          UKIGT
        </a>

        {/* DESKTOP MENU */}
        <nav style={navDesktop}>
          <a href="/" style={link}>Home</a>
          <a href="/about" style={link}>About</a>
          <a href="/services" style={link}>Services</a>
          <a href="/programmes" style={link}>Programmes</a>
          <a href="/contact" style={cta}>Contact</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button style={menuBtn} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={mobileMenu}>
          <a href="/" style={mobileLink} onClick={() => setOpen(false)}>Home</a>
          <a href="/about" style={mobileLink} onClick={() => setOpen(false)}>About</a>
          <a href="/services" style={mobileLink} onClick={() => setOpen(false)}>Services</a>
          <a href="/programmes" style={mobileLink} onClick={() => setOpen(false)}>Programmes</a>

          <a href="/contact" style={mobileCTA} onClick={() => setOpen(false)}>
            Contact
          </a>
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
  background: "rgba(7,17,31,0.9)",
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

/* DESKTOP NAV */
const navDesktop: React.CSSProperties = {
  display: "flex",
  gap: "28px",
};

/* Hide on mobile */
if (typeof window !== "undefined" && window.innerWidth < 900) {
  navDesktop.display = "none";
}

/* LINKS */
const link: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "14px",
};

/* CTA */
const cta: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "10px 16px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
};

/* MOBILE BUTTON */
const menuBtn: React.CSSProperties = {
  fontSize: "26px",
  background: "none",
  border: "none",
  color: "#E6F0FA",
  cursor: "pointer",
};

/* MOBILE MENU */
const mobileMenu: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  background: "#07111F",
  gap: "18px",
};

/* MOBILE LINKS */
const mobileLink: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "18px",
};

/* MOBILE CTA */
const mobileCTA: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px",
  borderRadius: "999px",
  textAlign: "center",
  fontWeight: 700,
};
