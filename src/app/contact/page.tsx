import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact UK Inbound Ground Transport for premium UK & Ireland programme transport support.",
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section style={heroSection}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Contact</p>

          <h1 style={heroTitle}>
            Start a conversation about your programme requirements.
          </h1>

          <div style={divider} />

          <p style={heroText}>
            Tell us about your routing, timings and service needs. We support
            tour operators, DMCs and travel planners with structured transport
            delivery across the UK and Ireland.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">

            {/* LEFT */}
            <div>
              <p style={sectionLabel}>Get in touch</p>

              <h2 style={sectionTitle}>
                Direct contact for transport planning and programme support.
              </h2>

              <div style={contactList}>
                <div>
                  <p style={contactHeading}>Email</p>
                  <a
                    href="mailto:info@ukinboundgroundtransport.com"
                    style={contactLink}
                  >
                    info@ukinboundgroundtransport.com
                  </a>
                </div>

                <div>
                  <p style={contactHeading}>Telephone</p>
                  <a href="tel:+442086292776" style={contactLink}>
                    +44 20 8629 2776
                  </a>
                </div>

                <div>
                  <p style={contactHeading}>Coverage</p>
                  <p style={contactText}>UK • Ireland • London movements</p>
                </div>

                <div>
                  <p style={contactHeading}>Company</p>
                  <p style={contactText}>
                    Evershine Transport Limited<br />
                    Company Reg: 13507458<br />
                    VAT: 388919914
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT (FORM) */}
            <div>
              <p style={sectionLabel}>Enquiry</p>

              <h2 style={sectionTitle}>Send us your programme outline.</h2>

              <form style={form}>
                <input placeholder="Full name" style={input} />
                <input placeholder="Company" style={input} />
                <input placeholder="Email" style={input} />
                <input placeholder="Phone" style={input} />
                <input placeholder="Arrival date" style={input} />
                <input placeholder="Departure date" style={input} />
                <input placeholder="Group size" style={input} />

                <textarea
                  placeholder="Programme / itinerary"
                  style={textarea}
                />

                <button style={primaryButton}>Submit enquiry</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

/* STYLES */

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 28px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "40px 0 64px",
};

const section: CSSProperties = {
  padding: "80px 0",
};

const eyebrow: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const heroTitle: CSSProperties = {
  fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
  fontFamily: "var(--font-serif)",
  lineHeight: 1.05,
  margin: "12px 0",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  background: "#C9A227",
  margin: "18px 0",
};

const heroText: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11,26,43,0.7)",
};

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 40,
};

const sectionLabel: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const sectionTitle: CSSProperties = {
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontFamily: "var(--font-serif)",
  margin: "10px 0 20px",
};

const contactList: CSSProperties = {
  display: "grid",
  gap: 20,
  marginTop: 30,
};

const contactHeading: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(11,26,43,0.5)",
};

const contactLink: CSSProperties = {
  fontSize: 18,
  textDecoration: "none",
  color: "#0B1A2B",
};

const contactText: CSSProperties = {
  fontSize: 18,
  color: "rgba(11,26,43,0.7)",
};

const form: CSSProperties = {
  display: "grid",
  gap: 14,
};

const input: CSSProperties = {
  padding: "14px",
  borderRadius: 16,
  border: "1px solid rgba(11,26,43,0.1)",
};

const textarea: CSSProperties = {
  padding: "14px",
  borderRadius: 16,
  border: "1px solid rgba(11,26,43,0.1)",
  minHeight: 120,
};

const primaryButton: CSSProperties = {
  marginTop: 10,
  padding: "14px 20px",
  borderRadius: 999,
  background: "#F2EEE6",
  border: "1px solid rgba(11,26,43,0.08)",
  fontWeight: 600,
};
