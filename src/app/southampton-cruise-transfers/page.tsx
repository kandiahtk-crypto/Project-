import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southampton Cruise Transfers | UK Inbound Ground Transport",
  description:
    "Premium Southampton cruise transfers for tour operators, DMCs and travel planners. Structured port arrivals, departures and onward UK & Ireland touring support.",
};

export default function SouthamptonPage() {
  return (
    <main>
      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroShell}>
            <p style={eyebrow}>Southampton cruise transport</p>

            <h1 style={heroTitle}>
              Southampton cruise transfers for UK &amp; Ireland touring
              programmes.
            </h1>

            <div style={divider} />

            <p style={heroText}>
              We support tour operators, DMCs and travel planners with
              structured Southampton cruise transfers, aligning turnaround
              movements, pre and post-cruise touring and onward regional
              itineraries with calm operational delivery.
            </p>

            <div style={heroActions}>
              <a href="/contact" style={primaryButton}>
                Request cruise transport support
              </a>
              <a href="/services" style={secondaryLink}>
                View services →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={proofStripSection}>
        <div style={containerWide}>
          <div style={proofStrip}>
            <span style={proofItem}>✔ Cruise turnaround coordination</span>
            <span style={proofItem}>✔ London and airport connections</span>
            <span style={proofItem}>✔ Multi-coach group planning</span>
            <span style={proofItem}>✔ UK &amp; Ireland touring support</span>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Cruise transport support</p>
              <h2 style={sectionTitle}>
                Port movements aligned to the wider programme.
              </h2>
            </div>

            <div style={supportGrid}>
              <div style={supportItem}>Turnaround day arrivals and departures</div>
              <div style={supportItem}>Pre and post-cruise touring connections</div>
              <div style={supportItem}>Transfers to London, Heathrow and Gatwick</div>
              <div style={supportItem}>Multi-coach coordination for large groups</div>
              <div style={supportItem}>Regional touring departures from Southampton</div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Who we work with</p>
              <h2 style={sectionTitle}>
                Built for professional programme delivery.
              </h2>
              <p style={sectionText}>
                Our Southampton cruise support is designed for travel buyers
                managing structured itineraries, commercial group movements and
                high-value touring flow.
              </p>
            </div>

            <div style={cardGrid} className="feature-grid">
              <article style={featureCard} className="luxury-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>Tour operators</h3>
                <p style={cardText}>
                  Cruise-linked touring, turnaround logistics and onward group
                  movements.
                </p>
              </article>

              <article style={featureCard} className="luxury-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>DMCs</h3>
                <p style={cardText}>
                  Port coordination, timed transfers and itinerary-sensitive
                  routing.
                </p>
              </article>

              <article style={featureCard} className="luxury-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>Travel planners</h3>
                <p style={cardText}>
                  Structured group arrivals, departures and premium programme
                  support.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Typical Southampton routing</p>
              <h2 style={sectionTitle}>
                Common transfer and touring connections from the port.
              </h2>
            </div>

            <div style={supportGrid}>
              <div style={supportItem}>Southampton to Central London hotels</div>
              <div style={supportItem}>Southampton to Heathrow and Gatwick</div>
              <div style={supportItem}>Southampton to Oxford and Bath</div>
              <div style={supportItem}>Southampton to direct long-distance touring departures</div>
              <div style={supportItem}>Cruise arrivals connected to wider UK &amp; Ireland itineraries</div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={editorialPanel} className="luxury-card">
            <p style={panelEyebrow}>Operational note</p>
            <h2 style={sectionTitle}>
              Structured cruise coordination requires timing discipline.
            </h2>
            <p style={panelText}>
              Cruise operations depend on clear scheduling, realistic loading
              windows and smooth onward routing. We align transport with port
              timings, group sizes and the wider itinerary to support a calm and
              commercially reliable transition between sea and land programmes.
            </p>
          </div>
        </div>
      </section>

      <section style={leadSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a Southampton enquiry</p>
          <h2 style={sectionTitle}>
            Planning a Southampton cruise programme?
          </h2>
          <p style={sectionText}>
            Share your cruise schedule, group size and onward itinerary. We’ll
            structure a clear transport plan aligned to your programme.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/" style={secondaryLink}>
              Return to homepage →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const containerWide: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 28px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "52px 0 86px",
  background:
    "radial-gradient(circle at top left, rgba(201,162,39,0.10), transparent 34%), linear-gradient(180deg, #FCFAF6 0%, #F8F4EC 100%)",
};

const heroShell: CSSProperties = {
  maxWidth: 860,
};

const proofStripSection: CSSProperties = {
  padding: "20px 0 8px",
};

const proofStrip: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 24,
  alignItems: "center",
};

const proofItem: CSSProperties = {
  fontSize: 14,
  color: "rgba(11,26,43,0.68)",
};

const section: CSSProperties = {
  padding: "104px 0",
};

const sectionSoft: CSSProperties = {
  padding: "96px 0",
  background: "linear-gradient(180deg, #F8F5EF 0%, #F3EEE4 100%)",
};

const leadSection: CSSProperties = {
  padding: "104px 0 60px",
  background:
    "radial-gradient(circle at top right, rgba(201,162,39,0.08), transparent 30%), linear-gradient(180deg, #FCFAF6 0%, #F7F3EC 100%)",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 42,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.48)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 11,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.48)",
};

const heroTitle: CSSProperties = {
  margin: "14px 0 24px",
  maxWidth: 860,
  fontSize: "clamp(2.8rem, 8vw, 5.6rem)",
  lineHeight: 0.96,
  letterSpacing: "-0.05em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 780,
  fontSize: "clamp(2rem, 4vw, 3.6rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const divider: CSSProperties = {
  width: 54,
  height: 2,
  margin: "18px 0 28px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 740,
  fontSize: 18,
  lineHeight: 1.92,
  color: "rgba(11, 26, 43, 0.74)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(11, 26, 43, 0.72)",
};

const heroActions: CSSProperties = {
  marginTop: 30,
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  alignItems: "center",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 56,
  padding: "0 26px",
  borderRadius: 999,
  background: "linear-gradient(180deg, #F4F0E8 0%, #ECE5D8 100%)",
  color: "#0B1A2B",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(11, 26, 43, 0.08)",
  boxShadow: "0 12px 24px rgba(11, 26, 43, 0.06)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#0B1A2B",
  fontWeight: 500,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  paddingBottom: 2,
  borderBottom: "1px solid rgba(201,162,39,0.35)",
};

const supportGrid: CSSProperties = {
  display: "grid",
  gap: 18,
};

const supportItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(11, 26, 43, 0.08)",
  fontSize: 20,
  lineHeight: 1.5,
  color: "#0B1A2B",
};

const cardGrid: CSSProperties = {
  display: "grid",
  gap: 24,
};

const featureCard: CSSProperties = {
  display: "block",
  padding: "28px",
  borderRadius: 30,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F7F2E9 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 12px 30px rgba(11, 26, 43, 0.04)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 2,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #C9A227 0%, #E3C565 100%)",
};

const cardTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  fontWeight: 400,
  fontFamily: "var(--font-serif)",
  color: "#0B1A2B",
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(11, 26, 43, 0.72)",
};

const editorialPanel: CSSProperties = {
  padding: "32px 30px",
  borderRadius: 32,
  background: "linear-gradient(180deg, #FBFAF7 0%, #F5EFE4 100%)",
  border: "1px solid rgba(11, 26, 43, 0.06)",
  boxShadow: "0 18px 40px rgba(11, 26, 43, 0.06)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(11, 26, 43, 0.5)",
};

const panelText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(11, 26, 43, 0.72)",
};
