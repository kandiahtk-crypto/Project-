import type { CSSProperties } from "react";

export default function SiteFooter() {
  return (
    <footer style={footer}>
      <div style={accentBar} />

      <div style={container}>
        <div style={topRow}>
          <div style={brandBlock}>
            <p style={eyebrow}>UK inbound ground transport</p>
            <h2 style={brandTitle}>
              Programme-led transport across the UK &amp; Ireland.
            </h2>
            <p style={brandText}>
              Supporting fixed-departure series, private group touring and
              multi-region programmes with structured, dependable delivery.
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
              <p style={navHeading}>Contact</p>
              <a href="mailto:info@ukinboundgroundtransport.com" style={link}>
                info@ukinboundgroundtransport.com
              </a>
              <a href="tel:+442086292776" style={link}>
                +44 20 8629 2776
              </a>
              <p style={metaText}>UK • Ireland • London movements</p>
            </div>
          </nav>
        </div>

        <div style={divider} />

        <div style={bottomRow}>
          <div style={legalBlock}>
            <p style={smallText}>© 2026 Evershine Transport Limited</p>
            <p style={smallText}>Company Reg: 13507458 · VAT: 388919914</p>
          </div>

          <a href="/contact" style={contactLink}>
            Contact →
          </a>
        </div>
      </div>
    </footer>
  );
}

const footer: CSSProperties = {
  marginTop: 96,
  padding: "0 24px 32px",
};

const accentBar: CSSProperties = {
  height: 2,
  width: "100%",
  maxWidth: 1120,
  margin: "0 auto 24px",
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
  borderRadius: 999,
};

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  background: "#F7F5F0",
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
  color: "rgba(11, 26, 43, 0.58)",
};

const brandTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.03em",
  fontWeight: 500,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const brandText: CSSProperties = {
  margin: 0,
  maxWidth: 520,
  fontSize: 17,
  lineHeight: 1.75,
  color: "rgba(11, 26, 43, 0.72)",
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
  color: "rgba(11, 26, 43, 0.58)",
};

const link: CSSProperties = {
  color: "#0B1A2B",
  textDecoration: "none",
  fontSize: 16,
  lineHeight: 1.6,
};

const metaText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.6,
  color: "rgba(11, 26, 43, 0.62)",
};

const divider: CSSProperties = {
  height: 1,
  margin: "32px 0 18px",
  background: "rgba(11, 26, 43, 0.08)",
};

const bottomRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
};

const legalBlock: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const smallText: CSSProperties = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.5,
  color: "rgba(11, 26, 43, 0.56)",
};

const contactLink: CSSProperties = {
  fontSize: 14,
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
};
