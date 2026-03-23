"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header style={header}>
        <div style={headerInner}>
          <Link href="/" style={brand}>
            UK INBOUND GROUND TRANSPORT
          </Link>

          <nav className="desktop-nav" style={desktopNav}>
            <Link href="/about" style={navLink}>
              About
            </Link>
            <Link href="/services" style={navLink}>
              Services
            </Link>
            <Link href="/programmes" style={navLink}>
              Programmes
            </Link>
            <Link href="/contact" style={navCta}>
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={menuButton}
          >
            <span style={menuLine(menuOpen, "top")} />
            <span style={menuLine(menuOpen, "middle")} />
            <span style={menuLine(menuOpen, "bottom")} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <div style={backdrop} onClick={() => setMenuOpen(false)} />

          <div style={mobilePanel}>
            <div style={mobilePanelInner}>
              <Link href="/" style={mobileBrand} onClick={() => setMenuOpen(false)}>
                UK INBOUND GROUND TRANSPORT
              </Link>

              <div style={mobileLinks}>
                <Link href="/about" style={mobileLink} onClick={() => setMenuOpen(false)}>
                  About
                </Link>
                <Link href="/services" style={mobileLink} onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <Link
                  href="/programmes"
                  style={mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Programmes
                </Link>
                <Link href="/contact" style={mobileCta} onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

const header: CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: "rgba(5,13,24,0.96)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const headerInner: CSSProperties = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "18px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const brand: CSSProperties = {
  color: "#D4AF37",
  textDecoration: "none",
  fontSize: "12px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 600,
  lineHeight: 1.35,
  maxWidth: "220px",
};

const desktopNav: CSSProperties = {
  display: "none",
  alignItems: "center",
  gap: "18px",
};

const navLink: CSSProperties = {
  color: "rgba(255,255,255,0.82)",
  textDecoration: "none",
  fontSize: "14px",
};

const navCta: CSSProperties = {
  color: "#07111F",
  background: "#D4AF37",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 14px",
  borderRadius: "999px",
};

const menuButton: CSSProperties = {
  width: "48px",
  height: "48px",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "999px",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  cursor: "pointer",
  flexShrink: 0,
};

const menuLine = (
  open: boolean,
  position: "top" | "middle" | "bottom"
): CSSProperties => {
  const base: CSSProperties = {
    position: "absolute",
    width: "18px",
    height: "2px",
    background: "#FFFFFF",
    borderRadius: "999px",
    transition: "all 0.25s ease",
  };

  if (position === "top") {
    return {
      ...base,
      transform: open ? "rotate(45deg)" : "translateY(-6px)",
    };
  }

  if (position === "middle") {
    return {
      ...base,
      opacity: open ? 0 : 1,
    };
  }

  return {
    ...base,
    transform: open ? "rotate(-45deg)" : "translateY(6px)",
  };
};

const backdrop: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(3,10,24,0.45)",
  zIndex: 59,
};

const mobilePanel: CSSProperties = {
  position: "fixed",
  top: "85px",
  left: "16px",
  right: "16px",
  background: "#07111F",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
  zIndex: 60,
};

const mobilePanelInner: CSSProperties = {
  padding: "22px",
};

const mobileBrand: CSSProperties = {
  display: "block",
  color: "#D4AF37",
  textDecoration: "none",
  fontSize: "11px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 600,
  lineHeight: 1.5,
};

const mobileLinks: CSSProperties = {
  marginTop: "22px",
  display: "grid",
  gap: "12px",
};

const mobileLink: CSSProperties = {
  display: "block",
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: "28px",
  lineHeight: 1.1,
  fontFamily: "var(--font-serif)",
  padding: "6px 0",
};

const mobileCta: CSSProperties = {
  display: "inline-block",
  marginTop: "8px",
  background: "#D4AF37",
  color: "#07111F",
  textDecoration: "none",
  fontWeight: 700,
  padding: "14px 20px",
  borderRadius: "999px",
};
