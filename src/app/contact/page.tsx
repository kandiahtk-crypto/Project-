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

      <section style={section}>
        <div style={container}>
          <div style={splitGrid} className="split-grid">
            <div>
              <p style={sectionLabel}>Get in touch</p>

              <h2 style={sectionTitle}>
                Direct contact for transport planning and programme support.
              </h2>

              <div style={contactList}>
                <div style={contactItem}>
                  <p style={contactHeading}>Email</p>
                  <a
                    href="mailto:info@ukinboundgroundtransport.com"
                    style={contactLink}
                  >
                    info@ukinboundgroundtransport.com
                  </a>
                </div>

                <div style={contactItem}>
                  <p style={contactHeading}>Telephone</p>
                  <a href="tel:+442086292776" style={contactLink}>
                    +44 20 8629 2776
                  </a>
                </div>

                <div style={contactItem}>
                  <p style={contactHeading}>Coverage</p>
                  <p style={contactText}>UK • Ireland • London movements</p>
                </div>

                <div style={contactItem}>
                  <p style={contactHeading}>Company</p>
                  <p style={contactText}>
                    Evershine Transport Limited
                    <br />
                    Company Reg: 13507458
                    <br />
                    VAT: 388919914
                  </p>
                </div>
              </div>
            </div>

            <div style={formWrap}>
              <p style={sectionLabel}>Enquiry</p>

              <h2 style={sectionTitle}>Send us your programme outline.</h2>

              <p style={sectionText}>
                Include your dates, routing, group size and any service details
                that will help us understand the requirement.
              </p>

              <form style={form}>
                <div style={fieldGrid}>
                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Full name</span>
                    <input type="text" name="name" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Company / organisation</span>
                    <input type="text" name="company" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Email address</span>
                    <input type="email" name="email" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Phone number</span>
                    <input type="tel" name="telephone" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Arrival date</span>
                    <input type="text" name="arrivalDate" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Departure date</span>
                    <input type="text" name="departureDate" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Group size</span>
                    <input type="text" name="groupSize" style={input} />
                  </label>

                  <label style={fieldWrap}>
                    <span style={fieldLabel}>Regions</span>
                    <input
                      type="text"
                      name="regions"
                      placeholder="England, Scotland, Wales, Ireland"
                      style={input}
                    />
                  </label>
                </div>

                <label style={fieldWrap}>
                  <span style={fieldLabel}>Itinerary / programme outline</span>
                  <textarea
                    name="message"
                    placeholder="Outline your itinerary, routing or programme requirements..."
                    rows={7}
                    style={textarea}
                  />
                </label>

                <button type="submit" style={primaryButton}>
                  Submit enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Working with us</p>

          <h2 style={sectionTitle}>
            Clear information helps us shape the right transport approach.
          </h2>

          <p style={sectionText}>
            The most useful starting points are routing, timings, group size,
            programme type and any service expectations already defined. That
            helps us respond with a transport approach that fits the wider
            itinerary.
          </p>
        </div>
      </section>
    </main>
  );
}

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
  padding: "120px 0 72px",
};

const section: CSSProperties = {
  padding: "96px 0",
};

const sectionSoft: CSSProperties = {
  padding: "88px 0",
  background: "#F8F5EF",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 16px",
  maxWidth: 760,
  fontSize: "clamp(2.7rem, 7vw, 5rem)",
  lineHeight: 1.01,
  letterSpacing: "-0.035em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 48,
  height: 2,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
  margin: "18px 0 24px",
  borderRadius: 999,
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const splitGrid: CSSProperties = {
  display: "grid",
  gap: 40,
  alignItems: "start",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.52)",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 5vw, 3.4rem)",
  lineHeight: 1.06,
  letterSpacing: "-0.025em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const contactList: CSSProperties = {
  marginTop: 32,
  display: "grid",
  gap: 28,
};

const contactItem: CSSProperties = {
  paddingBottom: 18,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
};

const contactHeading: CSSProperties = {
  margin: "0 0 8px",
  fontSize: 12,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const contactLink: CSSProperties = {
  fontSize: 18,
  lineHeight: 1.7,
  color: "#0B1A2B",
  textDecoration: "none",
};

const contactText: CSSProperties = {
  margin: 0,
  fontSize: 18,
  lineHeight: 1.7,
  color: "rgba(11, 26, 43, 0.75)",
};

const formWrap: CSSProperties = {
  minWidth: 0,
};

const form: CSSProperties = {
  marginTop: 28,
  display: "grid",
  gap: 18,
};

const fieldGrid: CSSProperties = {
  display: "grid",
  gap: 16,
};

const fieldWrap: CSSProperties = {
  display: "grid",
  gap: 8,
};

const fieldLabel: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const input: CSSProperties = {
  width: "100%",
  minHeight: 54,
  padding: "0 16px",
  borderRadius: 18,
  border: "1px solid rgba(11, 26, 43, 0.10)",
  background: "#FFFEFB",
  fontSize: 16,
  color: "#0B1A2B",
  outline: "none",
  boxSizing: "border-box",
};

const textarea: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 22,
  border: "1px solid rgba(11, 26, 43, 0.10)",
  background: "#FFFEFB",
  fontSize: 16,
  color: "#0B1A2B",
  outline: "none",
  resize: "vertical",
  fontFamily: "var(--font-sans)",
  boxSizing: "border-box",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 52,
  padding: "0 22px",
  borderRadius: 999,
  background: "#F2EEE6",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(11, 26, 43, 0.08)",
  cursor: "pointer",
};
