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
        {/* LOGO */}
        <a href="/" style={logo}>
          UKIGT
        </a>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <nav style={desktopNav}>
            <a href="/" style={link}>Home</a>
            <a href="/about" style={link}>About</a>
            <a href="/services" style={link}>Services</a>
            <a href="/programmes" style={link}>Programmes</a>
            <a href="/contact" style={cta}>Contact</a>
          </nav>
        )}

        {/* MOBILE BUTTON */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={menuButton}
            aria-label="Toggle menu"
          >
            <div style={{ transform: open ? "rotate(45deg) translateY(6px)" : "none", ...bar }} />
            <div style={{ opacity: open ? 0 : 1, ...bar }} />
            <div style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "none", ...bar }} />
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && (
        <div
          style={{
            ...mobileMenu,
            maxHeight: open ? "400px" : "0px",
            opacity: open ? 1 : 0,
          }}
        >
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

//
// STYLES (ELITE LEVEL)
//

const header: React.CSSProperties = {
  position: "sticky", // 🔥 fixes white gap issue
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(7, 17, 31, 0.85)",
  backdropFilter: "blur(16px)",
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
  letterSpacing: "0.14em",
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
  letterSpacing: "0.05em",
  transition: "opacity 0.3s ease",
};

const cta: React.CSSProperties = {
  background: "linear-gradient(135deg, #D4AF37, #F5D76E)",
  color: "#07111F",
  textDecoration: "none",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
};

//
// MOBILE
//

const menuButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  cursor: "pointer",
};

const bar: React.CSSProperties = {
  width: "24px",
  height: "2px",
  background: "#E6F0FA",
  transition: "all 0.3s ease",
};

const mobileMenu: React.CSSProperties = {
  overflow: "hidden",
  transition: "all 0.35s ease",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  padding: "0 20px",
  background: "rgba(7, 17, 31, 0.98)",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};

const mobileLink: React.CSSProperties = {
  color: "#E6F0FA",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 500,
  padding: "10px 0",
};

const mobileCta: React.CSSProperties = {
  background: "linear-gradient(135deg, #D4AF37, #F5D76E)",
  color: "#07111F",
  textDecoration: "none",
  padding: "14px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "16px",
  textAlign: "center",
  marginTop: "10px",
};
