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

const WHATSAPP_URL =
  "https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement.";

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
    background: "rgba(16, 38, 60, 0.20)",
    backdropFilter: "blur(6px)",
    zIndex: 109,
    opacity: menuOpen ? 1 : 0,
    transition: "opacity 0.28s ease",
  };

  const mobilePanel: CSSProperties = {
    position: "fixed",
    top: "88px",
    left: "16px",
    right: "16px",
    background: "linear-gradient(180deg, #F7FAFD 0%, #EEF3F8 100%)",
    border: "1px solid rgba(16, 38, 60, 0.08)",
    borderRadius: "28px",
    boxShadow: "0 24px 70px rgba(16, 38, 60, 0.12)",
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
    padding: "24px 22px 22px",
  };

  const mobileLink = (index: number): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    color: "#10263C",
    textDecoration: "none",
    fontSize: "24px",
    lineHeight: 1.1,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    padding: "14px 0",
    borderBottom: "1px solid rgba(16, 38, 60, 0.08)",
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
    minHeight: 54,
    padding: "0 22px",
    border: "1px solid rgba(16, 38, 60, 0.10)",
    background: "#10263C",
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    borderRadius: "999px",
    boxShadow: "0 10px 24px rgba(16, 38, 60, 0.16)",
    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
    opacity: menuOpen ? 1 : 0,
    transition:
      "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.18s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.18s",
  };

  const mobileWhatsApp: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "12px",
    minHeight: 54,
    padding: "0 22px",
    border: "1px solid rgba(37, 211, 102, 0.25)",
    background: "linear-gradient(135deg, #E8F8EF 0%, #DFF5E8 100%)",
    color: "#10263C",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
    borderRadius: "999px",
    boxShadow: "0 10px 24px rgba(37, 211, 102, 0.12)",
    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
    opacity: menuOpen ? 1 : 0,
    transition:
      "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.22s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.22s",
  };

  return (
    <>
      <header style={header}>
        <div style={headerInner}>
          <Link href="/" style={brand} onClick={closeMenu}>
            <span style={brandTop}>UK INBOUND GROUND TRANSPORT</span>
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

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={navWhatsApp}
            >
              WhatsApp
            </a>

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
                <span style={mobileBrandTop}>UK INBOUND GROUND TRANSPORT</span>
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

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={mobileWhatsApp}
                  onClick={closeMenu}
                >
                  WhatsApp
                </a>
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
  background: "rgba(255, 255, 255, 0.86)",
  backdropFilter: "blur(16px)",
  borderBottom: "1px solid rgba(16, 38, 60, 0.08)",
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
  color: "#10263C",
  minWidth: 0,
};

const brandTop: CSSProperties = {
  fontSize: "18px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: 1.3,
};

const brandBottom: CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.4,
  color: "rgba(16, 38, 60, 0.58)",
};

const desktopNav: CSSProperties = {
  display: "none",
  alignItems: "center",
  gap: "28px",
};

const navLink: CSSProperties = {
  color: "rgba(16, 38, 60, 0.78)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  paddingBottom: "8px",
};

const navWhatsApp: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 16px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
  color: "#10263C",
  background: "linear-gradient(135deg, #E8F8EF 0%, #DFF5E8 100%)",
  border: "1px solid rgba(37, 211, 102, 0.25)",
  boxShadow: "0 6px 18px rgba(37, 211, 102, 0.15)",
};

const navCta: CSSProperties = {
  color: "#FFFFFF",
  background: "#10263C",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 16px",
  borderRadius: "999px",
  boxShadow: "0 8px 20px rgba(16, 38, 60, 0.14)",
};

const menuButton: CSSProperties = {
  width: "52px",
  height: "52px",
  border: "1px solid rgba(16, 38, 60, 0.10)",
  borderRadius: "999px",
  background: "#FFFFFF",
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
    background: "#10263C",
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
  color: "#10263C",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: 1.4,
};

const mobileBrandBottom: CSSProperties = {
  color: "rgba(16, 38, 60, 0.58)",
  fontSize: "12px",
  lineHeight: 1.4,
};

const mobileAccent: CSSProperties = {
  width: 42,
  height: 2,
  marginTop: 14,
  marginBottom: 10,
  borderRadius: 999,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
};

const mobileLinks: CSSProperties = {
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
};

const mobileLinkArrow: CSSProperties = {
  fontSize: 18,
  color: "#5B7C99",
  lineHeight: 1,
  paddingTop: 4,
};
