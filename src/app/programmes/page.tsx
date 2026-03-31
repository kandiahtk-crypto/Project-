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

          <p style={heroSubText}>
            Our role is to help programme transport feel coordinated, reliable
            and commercially well structured from first arrival to final
            departure.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButtonDark}>
              Contact us
            </a>
            <a href="/services" style={secondaryLink}>
              View services →
            </a>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
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

          <div style={regionCards} className="feature-grid">
            {touringRegions.map((region) => (
              <a
                key={region.title}
                href={region.href}
                style={regionCardLink}
                className="premium-card"
              >
                <article style={regionCard}>
                  <div style={cardAccent} />
                  <div style={regionCardTopRow}>
                    <h3 style={regionCardTitle}>{region.title}</h3>
                    <span style={regionArrow} aria-hidden="true">
                      →
                    </span>
                  </div>
                  <p style={regionCardText}>{region.text}</p>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerNarrow}>
          <div style={introPanel} className="premium-card">
            <p style={panelEyebrow}>Programme structure</p>
            <h2 style={panelTitle}>
              Delivery models aligned to the rhythm of touring.
            </h2>
            <p style={panelText}>
              Different programme types require different transport structures.
              Some need repeatability across scheduled departures, while others
              require flexibility around custom routing, hotel patterns and
              regional transitions.
            </p>
          </div>

          <div style={list}>
            {programmes.map((programme) => (
              <article key={programme.title} style={item} className="premium-card">
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

      <section style={sectionSoftAlt}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Approach</p>
          <h2 style={sectionTitle}>
            Transport planning built around the wider programme.
          </h2>
          <p style={sectionText}>
            We do not treat movements as disconnected bookings. Our focus is to
            align routing, timing, service levels and operational flow with the
            wider shape of the itinerary so that the programme works as one
            coherent delivery.
          </p>

          <div style={responseBar} className="premium-card">
            <p style={responseLabel}>Working standard</p>
            <h3 style={responseTitle}>
              Clear routing, calm coordination and dependable execution.
            </h3>
            <p style={responseText}>
              From regional touring to cross-border transitions, the objective
              remains the same: transport that supports the programme rather
              than disrupts it.
            </p>
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
            <a href="/contact" style={primaryButtonDark}>
              Contact us
            </a>
            <a href="/coach-hire-uk" style={secondaryLink}>
              Coach hire UK →
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
  padding: "56px 0 76px",
  background:
    "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 60%, #FFFFFF 100%)",
};

const section: CSSProperties = {
  padding: "96px 0",
  background: "linear-gradient(180deg, #FFFFFF 0%, #FCFAF6 100%)",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3F7 100%)",
};

const sectionSoftAlt: CSSProperties = {
  padding: "88px 0",
  background: "linear-gradient(180deg, #F6F8FB 0%, #FFFFFF 100%)",
};

const ctaSection: CSSProperties = {
  padding: "80px 0 48px",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.52)",
};

const heroTitle: CSSProperties = {
  margin: "12px 0 18px",
  fontSize: "clamp(2.2rem, 5.8vw, 4.8rem)",
  lineHeight: 1.03,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 56,
  height: 3,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.74)",
};

const heroSubText: CSSProperties = {
  margin: "16px 0 0",
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.58)",
};

const sectionText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.72)",
};

const heroActions: CSSProperties = {
  marginTop: 26,
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  alignItems: "center",
};

const ctaActions: CSSProperties = {
  marginTop: 24,
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  alignItems: "center",
};

const primaryButtonDark: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 999,
  background: "#10263C",
  textDecoration: "none",
  color: "#FFFFFF",
  fontWeight: 600,
  border: "1px solid rgba(16,38,60,0.10)",
  boxShadow: "0 10px 24px rgba(16,38,60,0.16)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  paddingBottom: 2,
  borderBottom: "1px solid rgba(91,124,153,0.34)",
};

const regionCards: CSSProperties = {
  marginTop: 40,
  display: "grid",
  gap: 24,
};

const regionCardLink: CSSProperties = {
  textDecoration: "none",
  display: "block",
};

const regionCard: CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  borderRadius: 26,
  padding: "30px",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
};

const regionCardTopRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
};

const regionCardTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(1.45rem, 3vw, 2rem)",
  color: "#10263C",
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  fontWeight: 700,
  flex: 1,
};

const regionArrow: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "#5B7C99",
  paddingTop: 6,
};

const regionCardText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18,36,56,0.72)",
  margin: 0,
};

const introPanel: CSSProperties = {
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
  marginBottom: 34,
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.52)",
};

const panelTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
  lineHeight: 1.08,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  color: "#10263C",
};

const panelText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18,36,56,0.72)",
};

const list: CSSProperties = {
  display: "grid",
  gap: 24,
};

const item: CSSProperties = {
  display: "grid",
  gap: 14,
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const accentLine: CSSProperties = {
  width: 48,
  height: 3,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
  borderRadius: 999,
};

const itemTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
  fontWeight: 700,
  color: "#10263C",
  lineHeight: 1.12,
};

const itemText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18,36,56,0.72)",
};

const responseBar: CSSProperties = {
  marginTop: 26,
  padding: "28px",
  borderRadius: 26,
  background: "#10263C",
  color: "#FFFFFF",
  boxShadow: "0 14px 32px rgba(16,38,60,0.14)",
};

const responseLabel: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.62)",
};

const responseTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.4rem, 3vw, 2rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  fontWeight: 700,
  color: "#FFFFFF",
};

const responseText: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.8,
  color: "rgba(255,255,255,0.78)",
};
