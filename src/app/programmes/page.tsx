import type { CSSProperties } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.ukinboundgroundtransport.com/programmes";

export const metadata: Metadata = {
  title: "Programme-led UK & Ireland Touring Transport",
  description:
    "Programme-led transport support across England, Scotland and Ireland. Fixed-departure touring, private groups, regional routing and cross-border UK & Ireland programme delivery.",
  alternates: {
    canonical: "/programmes",
  },
  openGraph: {
    title: "Programme-led Touring Transport | UK & Ireland",
    description:
      "Structured transport delivery across UK & Ireland touring programmes for operators, DMCs and planners.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const programmes = [
  {
    title: "Fixed-departure series",
    description:
      "Consistent, repeatable transport delivery across scheduled touring departures, with dependable structure maintained throughout the programme lifecycle.",
  },
  {
    title: "Private group touring",
    description:
      "Tailored support for private itineraries requiring flexibility, timing control and coordinated delivery.",
  },
  {
    title: "Multi-region UK touring",
    description:
      "Structured routing across England, Scotland and Wales for programmes requiring broader national coverage.",
  },
  {
    title: "UK & Ireland programmes",
    description:
      "Cross-border touring with consistent delivery and reliable coordination across regional transitions.",
  },
];

const touringRegions = [
  {
    title: "England heritage touring",
    text: "London, Oxford, Bath, Cambridge, York and the Lake District remain central to classic Britain itineraries.",
    href: "/england-touring",
  },
  {
    title: "Scotland programmes",
    text: "Edinburgh, Glasgow, Loch Ness and the Highlands require realistic daily planning and operational awareness.",
    href: "/scotland-programmes",
  },
  {
    title: "Ireland touring circuits",
    text: "Dublin, Galway, Killarney and the Cliffs of Moher continue to feature strongly in Ireland touring routes.",
    href: "/ireland-touring",
  },
];

export default function ProgrammesPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Programmes</p>

          <h1 style={heroTitle}>
            Programme-led transport support across the UK &amp; Ireland.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            We support operators and planners with structured transport delivery
            across fixed-departure series, private itineraries, regional touring
            and cross-border programmes.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Touring regions</p>

          <h2 style={sectionTitle}>
            Destinations commonly included in UK and Ireland programmes.
          </h2>

          <p style={sectionText}>
            Our services support programmes linking major gateway cities with
            heritage destinations, scenic routes and regional touring circuits
            used by international operators and DMC teams.
          </p>

          <div style={regionCards}>
            {touringRegions.map((region) => (
              <a key={region.title} href={region.href} style={regionCardLink}>
                <article style={regionCard}>
                  <h3 style={regionCardTitle}>{region.title}</h3>
                  <p style={regionCardText}>{region.text}</p>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <div style={list}>
            {programmes.map((programme) => (
              <article key={programme.title} style={item}>
                <div style={accentLine} />
                <div>
                  <h2 style={itemTitle}>{programme.title}</h2>
                  <p style={itemText}>{programme.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>

          <h2 style={ctaTitle}>
            Need transport coordination for a touring programme?
          </h2>

          <p style={sectionText}>
            Tell us about your routing, timings and programme requirements, and
            we’ll help shape the right support structure.
          </p>

          <div style={ctaActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "64px 0 64px",
};

const section: CSSProperties = {
  padding: "88px 0",
};

const sectionSoft: CSSProperties = {
  padding: "80px 0",
  background: "#F8F5EF",
};

const ctaSection: CSSProperties = {
  padding: "72px 0 48px",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 16px",
  fontSize: "clamp(2.6rem, 7vw, 5rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 5vw, 3rem)",
  lineHeight: 1.06,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
  margin: "18px 0 24px",
};

const heroText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const sectionText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const regionCards: CSSProperties = {
  marginTop: 40,
  display: "grid",
  gap: 28,
};

const regionCardLink: CSSProperties = {
  textDecoration: "none",
};

const regionCard: CSSProperties = {
  background: "#FBFAF7",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  borderRadius: 28,
  padding: "32px 28px",
  boxShadow: "0 8px 30px rgba(11, 26, 43, 0.03)",
};

const regionCardTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(1.7rem, 4vw, 2.2rem)",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const regionCardText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const list: CSSProperties = {
  display: "grid",
  gap: 30,
};

const item: CSSProperties = {
  display: "grid",
  gap: 14,
  paddingBottom: 20,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const accentLine: CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const itemTitle: CSSProperties = {
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const itemText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};

const ctaActions: CSSProperties = {
  marginTop: 24,
};

const primaryButton: CSSProperties = {
  padding: "14px 20px",
  borderRadius: 999,
  background: "#F2EEE6",
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 600,
};
