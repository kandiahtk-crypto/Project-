import type { CSSProperties } from "react";

export default function SiteFooter() {
  return (
    <footer style={footer}>
      <div style={container}>
        <div style={accentBar} />

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

              <a href="/tour-operator-transport-uk" style={link}>
                 Tour Operator Transport UK
              </a>

              <a href="/dmc-transport-uk" style={link}>
                 DMC Transport UK
              </a>

              <a href="/uk-ireland-touring" style={link}>
                 UK & Ireland Touring
              </a>
              
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
  padding: "0 24px 40px",
  background: "#10263C",
};

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "40px 0 0",
};

const accentBar: CSSProperties = {
  height: 3,
  width: "100%",
  margin: "0 0 28px",
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
  borderRadius: 999,
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
  color: "rgba(255, 255, 255, 0.56)",
};

const brandTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#FFFFFF",
};

const brandText: CSSProperties = {
  margin: 0,
  maxWidth: 520,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(255, 255, 255, 0.74)",
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
  color: "rgba(255, 255, 255, 0.56)",
};

const link: CSSProperties = {
  color: "#FFFFFF",
  textDecoration: "none",
  fontSize: 16,
  lineHeight: 1.6,
};

const metaText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.6,
  color: "rgba(255, 255, 255, 0.64)",
};

const divider: CSSProperties = {
  height: 1,
  margin: "32px 0 18px",
  background: "rgba(255, 255, 255, 0.12)",
};

const bottomRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
  paddingBottom: 8,
};

const legalBlock: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const smallText: CSSProperties = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.6,
  color: "rgba(255, 255, 255, 0.52)",
};

const contactLink: CSSProperties = {
  fontSize: 14,
  textDecoration: "none",
  color: "#FFFFFF",
  fontWeight: 600,
};
