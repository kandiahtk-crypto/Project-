import type { CSSProperties } from "react";
import type { Metadata } from "next";
import ProgrammeEnquiryForm from "../../components/ProgrammeEnquiryForm";

const siteUrl = "https://www.ukinboundgroundtransport.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact UK Inbound Ground Transport for premium UK and Ireland programme support, coach hire, airport transfers, cruise movements and group touring logistics.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | UK Inbound Ground Transport",
    description:
      "Speak with UK Inbound Ground Transport about coach hire, touring programmes, airport transfers and multi-region UK & Ireland transport support.",
    url: `${siteUrl}/contact`,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact UK Inbound Ground Transport",
  url: `${siteUrl}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "UK Inbound Ground Transport",
    url: siteUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: ["GB", "IE"],
        email: "info@ukinboundgroundtransport.com",
        telephone: "+44 20 8629 2776",
      },
    ],
  },
};

const supportItems = [
  "Coach hire and group transport",
  "Heathrow and airport arrivals",
  "Southampton and cruise movements",
  "UK & Ireland touring programmes",
  "Private groups and fixed-departure series",
  "DMC and tour operator support",
];

export default function ContactPage() {
  return (
    <main style={pageShell}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroGrid} className="hero-grid">
            <div>
              <p style={eyebrow}>Contact</p>

              <h1 style={heroTitle}>
                Speak with us about your UK or Ireland programme.
              </h1>

              <div style={divider} />

              <p style={heroText}>
                Tell us your routing, dates, group size and programme type. We
                structure transport around airport arrivals, touring flow,
                cruise movements and wider itinerary delivery.
              </p>

              <p style={heroSubText}>
                Built for tour operators, DMCs and travel planners who need
                dependable responses, commercial clarity and calm operational
                support.
              </p>

              <div style={heroActions}>
                <a href="tel:+442086292776" style={primaryButton}>
                  Call us
                </a>
                <a
                  href="https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={secondaryButton}
                >
                  WhatsApp
                </a>
              </div>

              <div style={pillRow}>
                <span style={pill}>Tour operators</span>
                <span style={pill}>DMCs</span>
                <span style={pill}>Travel planners</span>
              </div>
            </div>

            <div style={contactPanel} className="premium-card">
              <p style={panelEyebrow}>Direct contact</p>

              <div style={contactStack}>
                <div style={contactItem}>
                  <p style={contactLabel}>Email</p>
                  <a
                    href="mailto:info@ukinboundgroundtransport.com"
                    style={contactValue}
                  >
                    info@ukinboundgroundtransport.com
                  </a>
                </div>

                <div style={contactItem}>
                  <p style={contactLabel}>Phone</p>
                  <a href="tel:+442086292776" style={contactValue}>
                    +44 20 8629 2776
                  </a>
                </div>

                <div style={contactItem}>
                  <p style={contactLabel}>WhatsApp</p>
                  <a
                    href="https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={contactValue}
                  >
                    Message us directly
                  </a>
                </div>

                <div style={contactItemLast}>
                  <p style={contactLabel}>Coverage</p>
                  <p style={contactMeta}>
                    England • Scotland • Ireland • London • Airports • Cruise
                    ports
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={proofStrip}>
            <span style={proofItem}>Structured programme responses</span>
            <span style={proofItem}>Coach hire & touring support</span>
            <span style={proofItem}>Airport & cruise coordination</span>
            <span style={proofItem}>UK & Ireland coverage</span>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>What to send us</p>
              <h2 style={sectionTitle}>
                The more detail you share, the better we can structure the
                transport.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                A strong enquiry normally includes travel dates, arrival point,
                group size, route outline, hotel pattern and any special
                operational requirements.
              </p>
            </div>
          </div>

          <div style={cardGrid} className="feature-grid">
            {supportItems.map((item) => (
              <div key={item} style={supportCard} className="premium-card">
                <div style={cardAccent} />
                <p style={supportCardText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={formShell} className="split-grid">
            <div>
              <p style={sectionLabel}>Programme enquiry</p>
              <h2 style={sectionTitle}>Tell us about your requirement.</h2>

              <p style={sectionText}>
                Share your itinerary, timings and group profile. We respond with
                a clear transport approach aligned to your programme.
              </p>

              <div style={infoPanel} className="premium-card">
                <p style={panelEyebrowSoft}>Helpful enquiry details</p>

                <div style={lineList}>
                  <div style={lineItem}>Travel dates and duration</div>
                  <div style={lineItem}>Arrival airport or cruise port</div>
                  <div style={lineItem}>Group size and programme type</div>
                  <div style={lineItem}>Route outline and hotel pattern</div>
                  <div style={lineItem}>Premium or operational requirements</div>
                </div>
              </div>
            </div>

            <div style={formPanel} className="premium-card">
              <ProgrammeEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoftAlt}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Related pages</p>
              <h2 style={sectionTitle}>
                Explore the transport models most relevant to your programme.
              </h2>
            </div>

            <div style={linkGrid}>
              <a href="/coach-hire-uk" style={linkCard}>
                Coach hire UK →
              </a>
              <a href="/heathrow-group-transfers" style={linkCard}>
                Heathrow group transfers →
              </a>
              <a href="/southampton-cruise-transfers" style={linkCard}>
                Southampton cruise transfers →
              </a>
              <a href="/uk-ireland-touring" style={linkCard}>
                UK &amp; Ireland touring →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Need a faster route?</p>
          <h2 style={ctaTitle}>Call or WhatsApp us directly.</h2>
          <p style={sectionTextCentered}>
            For time-sensitive programme support, contact us directly and we’ll
            help guide the next step.
          </p>

          <div style={heroActionsCentered}>
            <a href="tel:+442086292776" style={primaryButton}>
              +44 20 8629 2776
            </a>
            <a
              href="https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement."
              target="_blank"
              rel="noopener noreferrer"
              style={ctaSecondaryLink}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const pageShell: CSSProperties = {
  background: "#FCFAF6",
};

const containerWide: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 20px",
  width: "100%",
};

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 20px",
  width: "100%",
};

const heroSection: CSSProperties = {
  padding: "56px 0 86px",
  background:
    "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 52%, #FFFFFF 100%)",
};

const section: CSSProperties = {
  padding: "108px 0",
  background: "linear-gradient(180deg, #FFFFFF 0%, #FCFAF6 100%)",
};

const sectionSoft: CSSProperties = {
  padding: "96px 0",
  background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3F7 100%)",
};

const sectionSoftAlt: CSSProperties = {
  padding: "96px 0",
  background: "linear-gradient(180deg, #F6F8FB 0%, #FFFFFF 100%)",
};

const ctaSection: CSSProperties = {
  padding: "92px 0 56px",
  background: "linear-gradient(180deg, #F6F8FB 0%, #EDF2F6 100%)",
};

const heroGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 34,
  alignItems: "start",
  width: "100%",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 42,
  alignItems: "start",
  width: "100%",
};

const formShell: CSSProperties = {
  display: "grid",
  gap: 34,
  alignItems: "start",
  width: "100%",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.54)",
};

const heroTitle: CSSProperties = {
  margin: "12px 0 18px",
  maxWidth: "100%",
  fontSize: "clamp(2rem, 9vw, 4.8rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
  wordBreak: "break-word",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: "100%",
  fontSize: "clamp(1.8rem, 7vw, 3.6rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
  wordBreak: "break-word",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: "100%",
  fontSize: "clamp(1.8rem, 7vw, 3.2rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
  wordBreak: "break-word",
  textAlign: "center",
};

const divider: CSSProperties = {
  width: 72,
  height: 3,
  margin: "18px 0 26px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18,36,56,0.78)",
};

const heroSubText: CSSProperties = {
  margin: "14px 0 0",
  maxWidth: 620,
  fontSize: 13,
  lineHeight: 1.8,
  color: "rgba(18,36,56,0.58)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.76)",
};

const sectionTextCentered: CSSProperties = {
  margin: "0 auto",
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18,36,56,0.76)",
  textAlign: "center",
};

const heroActions: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  alignItems: "center",
};

const heroActionsCentered: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 56,
  padding: "0 26px",
  borderRadius: 999,
  background: "#10263C",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 700,
  border: "1px solid rgba(16,38,60,0.10)",
  boxShadow: "0 12px 26px rgba(16,38,60,0.16)",
};

const secondaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 56,
  padding: "0 24px",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#10263C",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(16,38,60,0.10)",
};

const ctaSecondaryLink: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 56,
  padding: "0 24px",
  borderRadius: 999,
  background: "#FFFFFF",
  color: "#10263C",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(16,38,60,0.10)",
  boxShadow: "0 10px 24px rgba(16,38,60,0.07)",
};

const pillRow: CSSProperties = {
  marginTop: 20,
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
};

const pill: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 36,
  padding: "0 13px",
  borderRadius: 999,
  background: "#EAF0F5",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18,36,56,0.74)",
};

const contactPanel: CSSProperties = {
  padding: "30px 28px",
  borderRadius: 30,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 18px 40px rgba(18,36,56,0.10)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.50)",
};

const panelEyebrowSoft: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.50)",
};

const contactStack: CSSProperties = {
  display: "grid",
  gap: 18,
};

const contactItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
};

const contactItemLast: CSSProperties = {
  paddingBottom: 0,
  borderBottom: "none",
};

const contactLabel: CSSProperties = {
  margin: "0 0 6px",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.56)",
};

const contactValue: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontSize: 20,
  lineHeight: 1.4,
  fontWeight: 700,
  wordBreak: "break-word",
};

const contactMeta: CSSProperties = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.72)",
};

const proofStrip: CSSProperties = {
  marginTop: 28,
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
};

const proofItem: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#E8EEF4",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18,36,56,0.76)",
};

const cardGrid: CSSProperties = {
  marginTop: 44,
  display: "grid",
  gap: 24,
};

const supportCard: CSSProperties = {
  display: "block",
  padding: "30px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #5B7C99 0%, #97B3C8 100%)",
};

const supportCardText: CSSProperties = {
  margin: 0,
  fontSize: 18,
  lineHeight: 1.7,
  color: "#10263C",
  fontWeight: 600,
};

const infoPanel: CSSProperties = {
  marginTop: 30,
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.08)",
  boxShadow: "0 12px 28px rgba(18,36,56,0.05)",
};

const lineList: CSSProperties = {
  display: "grid",
  gap: 14,
};

const lineItem: CSSProperties = {
  paddingBottom: 12,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
  fontSize: 16,
  lineHeight: 1.7,
  color: "#10263C",
};

const formPanel: CSSProperties = {
  padding: "28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.10)",
  boxShadow: "0 16px 34px rgba(18,36,56,0.08)",
};

const linkGrid: CSSProperties = {
  display: "grid",
  gap: 12,
};

const linkCard: CSSProperties = {
  padding: 16,
  borderRadius: 16,
  background: "#FFFFFF",
  border: "1px solid rgba(18,36,56,0.10)",
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  boxShadow: "0 8px 20px rgba(18,36,56,0.04)",
};
