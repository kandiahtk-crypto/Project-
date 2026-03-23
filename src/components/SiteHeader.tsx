"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/markets", label: "Markets" },
  { href: "/programmes", label: "Programmes" },
];

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

  const backdrop: CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(11, 26, 43, 0.18)",
    backdropFilter: "blur(4px)",
    zIndex: 109,
    opacity: menuOpen ? 1 : 0,
    transition: "opacity 0.28s ease",
  };

  const mobilePanel: CSSProperties = {
    position: "fixed",
    top: "88px",
    left: "16px",
    right: "16px",
    background: "linear-gradient(180deg, #F8F5EF 0%, #F2EEE6 100%)",
    border: "1px solid rgba(11, 26, 43, 0.08)",
    borderRadius: "30px",
    boxShadow: "0 24px 80px rgba(11, 26, 43, 0.12)",
    zIndex: 110,
    transform: menuOpen
      ? "translateY(0) scale(1)"
      : "translateY(-10px) scale(0.98)",
    opacity: menuOpen ? 1 : 0,
    transformOrigin: "top center",
    transition:
      "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const mobilePanelInner: CSSProperties = {
    padding: "26px 24px 24px",
  };

  const mobileLink = (index: number): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    color: "#0B1A2B",
    textDecoration: "none",
    fontSize: "31px",
    lineHeight: 1.06,
    fontFamily: "var(--font-serif)",
    letterSpacing: "-0.02em",
    padding: "14px 0",
    borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
    transform: menuOpen ? "translateY(0)" : "translateY(10px)",
    opacity: menuOpen ? 1 : 0,
    transition: `opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1) ${
      index * 0.05
    }s, transform 0.42s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.05}s`,
  });

  const mobileCta: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "18px",
    minHeight: 58,
    padding: "0 24px",
    border: "1px solid rgba(201, 162, 39, 0.25)",
    background: "linear-gradient(135deg, #F6F2EA 0%, #EFE9DD 100%)",
    color: "#0B1A2B",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 16,
    borderRadius: "999px",
    boxShadow: "0 10px 30px rgba(201, 162, 39, 0.12)",
    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
    opacity: menuOpen ? 1 : 0,
    transition:
      "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.18s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.18s",
  };

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
              href="/"
              className={pathname === "/" ? "active" : ""}
              style={navLink}
            >
              Home
            </Link>
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
              href="/markets"
              className={pathname.startsWith("/markets") ? "active" : ""}
              style={navLink}
            >
              Markets
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

              <div style={mobileAccent} />

              <div style={mobileLinks} className="mobile-links">
                {MOBILE_LINKS.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={mobileLink(index)}
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                    <span style={mobileLinkArrow}>↗</span>
                  </Link>
                ))}

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
  background: "rgba(252, 250, 246, 0.9)",
  backdropFilter: "blur(16px)",
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

const mobileBrand: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  textDecoration: "none",
};

const mobileBrandTop: CSSProperties = {
  color: "#0B1A2B",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontWeight: 600,
  lineHeight: 1.4,
};

const mobileBrandBottom: CSSProperties = {
  color: "rgba(11, 26, 43, 0.58)",
  fontSize: "12px",
  lineHeight: 1.4,
};

const mobileAccent: CSSProperties = {
  width: 42,
  height: 2,
  marginTop: 14,
  marginBottom: 10,
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const mobileLinks: CSSProperties = {
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
};

const mobileLinkArrow: CSSProperties = {
  fontSize: 18,
  color: "#C9A227",
  lineHeight: 1,
  paddingTop: 6,
};
