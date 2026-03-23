import type { CSSProperties } from "react";

export default function SiteFooter() {
  return (
    <footer style={footer}>
      <div style={container}>
        <div style={topRow}>
          <div style={brandBlock}>
            <p style={eyebrow}>Touring transport support</p>
            <h2 style={brandTitle}>Programme-led transport across the UK & Ireland.</h2>
            <p style={brandText}>
              Structured support for fixed-departure series, private group touring,
              and multi-region programmes requiring dependable delivery.
            </p>
          </div>

          <nav style={nav} aria-label="Footer">
            <div style={navColumn}>
              <p style={navHeading}>Explore</p>
              <a href="/programmes" style={link}>
                Programmes
              </a>
              <a href="/services" style={link}>
                Services
              </a>
              <a href="/about" style={link}>
                About
              </a>
              <a href="/contact" style={link}>
                Contact
              </a>
            </div>

            <div style={navColumn}>
              <p style={navHeading}>Get in touch</p>
              <a href="mailto:hello@yourcompany.com" style={link}>
                hello@yourcompany.com
              </a>
              <a href="tel:+440000000000" style={link}>
                +44 (0)0000 000000
              </a>
              <p style={metaText}>UK & Ireland programme support</p>
            </div>
          </nav>
        </div>

        <div style={divider} />

        <div style={bottomRow}>
          <p style={smallText}>© {new Date().getFullYear()} Your Company</p>
          <p style={smallText}>Planned with clarity. Delivered with consistency.</p>
        </div>
      </div>
    </footer>
  );
}

const footer: CSSProperties = {
  marginTop: 96,
  padding: "0 24px 32px",
};

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  background: "#f6f3ec",
  border: "1px solid rgba(20, 24, 40, 0.08)",
  borderRadius: 28,
  padding: "40px 24px 24px",
};

const topRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 48,
  flexWrap: "wrap",
};

const brandBlock: CSSProperties = {
  flex: "1 1 420px",
  maxWidth: 560,
};

const eyebrow: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(20, 24, 40, 0.58)",
};

const brandTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 600,
  color: "#141828",
};

const brandText: CSSProperties = {
  margin: 0,
  maxWidth: 520,
  fontSize: 17,
  lineHeight: 1.75,
  color: "rgba(20, 24, 40, 0.72)",
};

const nav: CSSProperties = {
  display: "flex",
  gap: 56,
  flexWrap: "wrap",
  flex: "0 1 420px",
};

const navColumn: CSSProperties = {
  minWidth: 160,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const navHeading: CSSProperties = {
  margin: "0 0 8px",
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(20, 24, 40, 0.58)",
};

const link: CSSProperties = {
  color: "#141828",
  textDecoration: "none",
  fontSize: 16,
  lineHeight: 1.6,
};

const metaText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.6,
  color: "rgba(20, 24, 40, 0.62)",
};

const divider: CSSProperties = {
  height: 1,
  margin: "32px 0 18px",
  background: "rgba(20, 24, 40, 0.08)",
};

const bottomRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
};

const smallText: CSSProperties = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.5,
  color: "rgba(20, 24, 40, 0.56)",
};
