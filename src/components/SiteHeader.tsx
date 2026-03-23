"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header style={header}>
        <div style={headerInner}>
          <Link href="/" style={brand} onClick={closeMenu}>
            <span style={brandTop}>UK Inbound Ground Transport</span>
            <span style={brandBottom}>Premium UK &amp; Ireland movements</span>
          </Link>

          <nav className="desktop-nav site-nav" style={desktopNav}>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
              style={navLink}
            >
              About
            </Link>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : ""}
              style={navLink}
            >
              Services
            </Link>
            <Link
              href="/programmes"
              className={pathname === "/programmes" ? "active" : ""}
              style={navLink}
            >
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
          <div style={backdrop} onClick={closeMenu} />

          <div style={mobilePanel}>
            <div style={mobilePanelInner}>
              <Link href="/" style={mobileBrand} onClick={closeMenu}>
                <span style={mobileBrandTop}>UK Inbound Ground Transport</span>
                <span style={mobileBrandBottom}>
                  Premium UK &amp; Ireland movements
                </span>
              </Link>

              <div style={mobileLinks}>
                <Link href="/about" style={mobileLink} onClick={closeMenu}>
                  About
                </Link>
                <Link href="/services" style={mobileLink} onClick={closeMenu}>
                  Services
                  <Link
  href="/markets"
  className={pathname === "/markets" ? "active" : ""}
  style={navLink}
>
  Markets
</Link>
                </Link>
                <Link href="/programmes" style={mobileLink} onClick={closeMenu}>
                  Programmes
                </Link>
                <Link href="/contact" style={mobileCta} onClick={closeMenu}>
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
  zIndex: 100,
  background: "rgba(252, 250, 246, 0.88)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(11, 26, 43, 0.06)",
};

const headerInner: CSSProperties = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "18px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const brand: CSSProperties = {
  display: "inline-flex",
  flexDirection: "column",
  gap: "4px",
  textDecoration: "none",
  color: "#0B1A2B",
  minWidth: 0,
};

const brandTop: CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 600,
  lineHeight: 1.3,
};

const brandBottom: CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.4,
  color: "rgba(11, 26, 43, 0.58)",
};

const desktopNav: CSSProperties = {
  display: "none",
  alignItems: "center",
  gap: "28px",
};

const navLink: CSSProperties = {
  color: "rgba(11, 26, 43, 0.76)",
  textDecoration: "none",
  fontSize: "14px",
  paddingBottom: "8px",
};

const navCta: CSSProperties = {
  color: "#0B1A2B",
  background: "transparent",
  border: "1px solid rgba(11, 26, 43, 0.10)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 16px",
  borderRadius: "999px",
};

const menuButton: CSSProperties = {
  width: "52px",
  height: "52px",
  border: "1px solid rgba(11, 26, 43, 0.10)",
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
    background: "#0B1A2B",
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
  background: "rgba(11, 26, 43, 0.16)",
  zIndex: 109,
};

const mobilePanel: CSSProperties = {
  position: "fixed",
  top: "86px",
  left: "16px",
  right: "16px",
  background: "#F6F2EA",
  border: "1px solid rgba(11, 26, 43, 0.08)",
  borderRadius: "28px",
  boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
  zIndex: 110,
};

const mobilePanelInner: CSSProperties = {
  padding: "24px",
};

const mobileBrand: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textDecoration: "none",
};

const mobileBrandTop: CSSProperties = {
  color: "#0B1A2B",
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontWeight: 600,
  lineHeight: 1.4,
};

const mobileBrandBottom: CSSProperties = {
  color: "rgba(11, 26, 43, 0.58)",
  fontSize: "12px",
  lineHeight: 1.4,
};

const mobileLinks: CSSProperties = {
  marginTop: "28px",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};
  
  
  

const mobileLink: CSSProperties = {
  display: "block",
  color: "#0B1A2B",
  textDecoration: "none",
  fontSize: "30px",
  lineHeight: 1.2,
  fontFamily: "var(--font-serif)",
};

const mobileCta: CSSProperties = {
  display: "inline-block",
  marginTop: "10px",
  border: "1px solid rgba(11, 26, 43, 0.10)",
  background: "#FFFFFF",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  padding: "14px 20px",
  borderRadius: "999px",
};
