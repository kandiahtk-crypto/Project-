import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport",
  description: "Premium UK & Ireland touring logistics",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={heroInner}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={heroTitle}>
            UK Inbound Ground Transport
          </h1>

          <p style={heroSubtitle}>
            Premium touring logistics across the United Kingdom and Ireland,
            designed for international operators who require structure,
            reliability and consistent delivery.
          </p>

          <a href="/contact" style={ctaButton}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section style={statement}>
        <div style={containerNarrow}>
          <p style={eyebrow}>Trusted by International Operators</p>

          <h2 style={statementText}>
            Delivering structured touring programmes across the UK & Ireland.
          </h2>

          <p style={textLight}>
            Our service is built around consistency, operational clarity and
            professional execution — ensuring every departure runs to plan and
            meets the expectations of both operators and their guests.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={split}>
          <h2 style={heading}>
            A transport partner, not just a supplier.
          </h2>

          <div>
            <p style={text}>
              UK Inbound Ground Transport supports international tour operators,
              DMCs and travel brands with structured transport delivery across
              England, Scotland, Wales and Ireland.
            </p>

            <p style={text}>
              Our focus is programme flow — ensuring every itinerary runs with
              consistency, operational clarity and dependable execution.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>Operational clarity at every stage</h2>

          <div style={{ marginTop: "20px", display: "grid", gap: "16px" }}>
            <p style={text}>
              Successful touring programmes depend on more than transport — they
              require structure, timing accuracy and consistent delivery.
            </p>

            <p style={text}>
              Every route, schedule and movement is aligned with your programme
              objectives, supporting smooth execution across multiple regions.
            </p>

            <p style={text}>
              From arrival coordination to final departure, each stage is managed
              with clear communication and dependable operational control.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={headingCenter}>Services</h2>

          <div style={services}>
            <div style={service}>01 — Fixed-Departure Series</div>
            <div style={service}>02 — Multi-Region UK Touring</div>
            <div style={service}>03 — UK & Ireland Programmes</div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section style={section}>
        <div style={container}>
          <h2 style={headingCenter}>Programme types we support</h2>

          <div style={services}>
            <div style={service}>Escorted touring programmes</div>
            <div style={service}>Fixed departure series</div>
            <div style={service}>Private group touring</div>
            <div style={service}>Multi-country itineraries</div>
          </div>
        </div>
      </section>

      {/* FULL STRIP */}
      <section style={fullBand}>
        <h2 style={fullText}>
          Reliable delivery across every departure.
        </h2>
      </section>

      {/* WHY US */}
      <section style={section}>
        <div style={center}>
          <h2 style={headingCenter}>Why operators choose us</h2>

          <p style={text}>
            We focus on structured delivery, clear communication and dependable
            execution — helping operators protect programme quality and deliver
            a consistent guest experience.
          </p>

          <div style={valueList}>
            <div>Consistent delivery standards</div>
            <div>Clear operational structure</div>
            <div>UK & Ireland coverage</div>
            <div>Professional coordination</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={cta}>
        <h2 style={{ margin: 0 }}>
          Plan your next touring programme
        </h2>

        <a href="/contact" style={ctaButton}>
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p style={footerBrand}>UK Inbound Ground Transport</p>

        <p style={footerText}>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </p>
      </footer>
    </>
  );
}

/* STYLES */

const hero = {
  background: "#050D18",
  color: "white",
  padding: "60px 20px 90px",
};

const heroInner = {
  maxWidth: "1000px",
  margin: "0 auto",
  marginTop: "-30px",
};

const heroTitle = {
  fontSize: "clamp(54px, 8vw, 92px)",
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
};

const heroSubtitle = {
  marginTop: "16px",
  maxWidth: "600px",
  color: "#AFC1D4",
};

const eyebrow = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.14em",
};

const section = {
  padding: "80px 20px",
};

const sectionAlt = {
  padding: "80px 20px",
  background: "#F8FBFF",
};

const container = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const containerNarrow = {
  maxWidth: "900px",
  margin: "0 auto",
};

const split = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gap: "40px",
};

const heading = {
  fontSize: "32px",
};

const headingCenter = {
  fontSize: "32px",
  textAlign: "center",
};

const text = {
  color: "#475569",
  lineHeight: 1.8,
};

const textLight = {
  color: "#AFC1D4",
  marginTop: "10px",
};

const services = {
  marginTop: "30px",
  display: "grid",
  gap: "14px",
};

const service = {
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  paddingBottom: "10px",
};

const statement = {
  background: "#0B1728",
  padding: "60px 20px",
};

const statementText = {
  color: "white",
  fontSize: "26px",
  marginTop: "10px",
};

const fullBand = {
  background: "#07111F",
  padding: "100px 20px",
  textAlign: "center",
};

const fullText = {
  color: "white",
  fontSize: "32px",
};

const center = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const valueList = {
  marginTop: "20px",
  display: "grid",
  gap: "10px",
};

const cta = {
  padding: "80px 20px",
  textAlign: "center",
};

const ctaButton = {
  marginTop: "20px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  textDecoration: "none",
  fontWeight: 700,
};

const footer = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "40px 20px",
  textAlign: "center",
};

const footerBrand = {
  color: "#D4AF37",
};

const footerText = {
  marginTop: "10px",
};
