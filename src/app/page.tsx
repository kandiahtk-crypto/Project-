import type { CSSProperties } from "react";
import ProgrammeEnquiryForm from "../components/ProgrammeEnquiryForm";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>UK inbound ground transport</p>

          <h1 style={title}>
            UK & Ireland group transport for tour operators and DMCs.
          </h1>

          <p style={text}>
            Structured transport for inbound travel programmes — Heathrow
            arrivals, cruise transfers, London movements and multi-region
            touring across England, Scotland and Ireland.
          </p>

          <p style={subText}>
            Built for professional travel buyers managing structured programmes.
          </p>

          <div style={actions}>
            <a href="/contact" style={primary}>
              Request programme support
            </a>

            <a href="/heathrow-group-transfers" style={secondary}>
              Heathrow transfers →
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={strip}>
        <div style={container}>
          <div style={stripGrid}>
            <span>✔ UK & Ireland coverage</span>
            <span>✔ Airport & cruise coordination</span>
            <span>✔ Built for tour operators & DMCs</span>
            <span>✔ Structured programme delivery</span>
          </div>
        </div>
      </section>

      {/* GATEWAYS */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>Key gateways</h2>

          <div style={grid}>
            <a href="/heathrow-group-transfers" style={card}>
              <h3>London Heathrow</h3>
              <p>
                Group airport transfers, arrivals coordination and UK touring
                departures →
              </p>
            </a>

            <a href="/southampton-cruise-transfers" style={card}>
              <h3>Southampton Cruise Port</h3>
              <p>
                Turnaround logistics, pre and post cruise transfers and touring →
              </p>
            </a>

            <div style={card}>
              <h3>Manchester</h3>
              <p>Northern England programme access</p>
            </div>

            <div style={card}>
              <h3>Edinburgh</h3>
              <p>Scotland arrivals and touring flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={sectionSoft}>
        <div style={container}>
          <h2 style={heading}>Why operators work with us</h2>

          <div style={grid}>
            <div>
              <h3>Programme-first approach</h3>
              <p style={textSmall}>
                Transport aligned to itinerary flow — not just vehicle supply.
              </p>
            </div>

            <div>
              <h3>Multi-region coordination</h3>
              <p style={textSmall}>
                England, Scotland and Ireland delivered as one programme.
              </p>
            </div>

            <div>
              <h3>Reliable delivery</h3>
              <p style={textSmall}>
                Built around timing, clarity and consistent execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>What we support</h2>

          <ul style={list}>
            <li>Fixed-departure touring series</li>
            <li>Private group itineraries</li>
            <li>Cruise port support</li>
            <li>London arrivals and events</li>
            <li>UK & Ireland multi-region touring</li>
          </ul>
        </div>
      </section>

      {/* FORM */}
      <section style={sectionSoft}>
        <div style={container}>
          <h2 style={heading}>Tell us about your programme</h2>

          <p style={text}>
            Share your itinerary, group size and travel dates. We respond with a
            clear, commercially structured transport plan.
          </p>

          <ProgrammeEnquiryForm />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>
            Planning a UK or Ireland programme?
          </h2>

          <p style={text}>
            Tell us your routing, timings and group size. We’ll structure the
            transport around your programme.
          </p>

          <a href="/contact" style={primary}>
            Contact us
          </a>
        </div>
      </section>

    </main>
  );
}

/* ===== STYLES ===== */

const container: CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 20px",
};

const hero: CSSProperties = {
  padding: "80px 0",
};

const section: CSSProperties = {
  padding: "80px 0",
};

const sectionSoft: CSSProperties = {
  padding: "80px 0",
  background: "#f5f1e8",
};

const strip: CSSProperties = {
  padding: "30px 0",
};

const stripGrid: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  fontSize: 14,
  opacity: 0.7,
};

const eyebrow: CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  opacity: 0.6,
};

const title: CSSProperties = {
  fontSize: 42,
  margin: "10px 0 20px",
};

const heading: CSSProperties = {
  fontSize: 28,
  marginBottom: 30,
};

const text: CSSProperties = {
  fontSize: 18,
  marginBottom: 20,
};

const textSmall: CSSProperties = {
  fontSize: 15,
  opacity: 0.7,
};

const subText: CSSProperties = {
  fontSize: 14,
  opacity: 0.7,
  marginBottom: 20,
};

const actions: CSSProperties = {
  display: "flex",
  gap: 16,
  marginTop: 20,
};

const primary: CSSProperties = {
  padding: "14px 22px",
  background: "#0B1A2B",
  color: "#fff",
  borderRadius: 999,
  textDecoration: "none",
};

const secondary: CSSProperties = {
  padding: "14px 22px",
  border: "1px solid #0B1A2B",
  borderRadius: 999,
  textDecoration: "none",
};

const grid: CSSProperties = {
  display: "grid",
  gap: 20,
};

const card: CSSProperties = {
  padding: 20,
  border: "1px solid #ddd",
  borderRadius: 12,
  textDecoration: "none",
  color: "inherit",
};

const list: CSSProperties = {
  lineHeight: 2,
};
