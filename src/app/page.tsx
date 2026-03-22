import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | Premium UK & Ireland Touring Logistics",
  description:
    "Premium UK & Ireland ground transport solutions for international tour operators, DMCs and travel brands.",
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

      {/* TRUST STRIP */}
      <section style={trustStrip}>
        <p>International Tour Operators · DMCs · Travel Brands</p>
      </section>

      {/* STATEMENT */}
      <section style={statement}>
        <div style={statementInner}>
          <h2 style={statementText}>
            Built for operators who expect precision, clarity and control across every programme.
          </h2>
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

            <p style={text}>
              We operate with a clear framework, ensuring every departure meets
              defined standards and delivers a consistent guest experience.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={headingCenter}>Services</h2>

          <div style={services}>
            <div style={service}>
              <span style={serviceNumber}>01</span>
              <h3>Fixed-Departure Series</h3>
              <p>
                Consistent, repeatable delivery across season-long touring
                programmes with structured operational control.
              </p>
            </div>

            <div style={service}>
              <span style={serviceNumber}>02</span>
              <h3>Multi-Region UK Touring</h3>
              <p>
                Seamless routing across England, Scotland and Wales with balanced
                pacing and efficient programme flow.
              </p>
            </div>

            <div style={service}>
              <span style={serviceNumber}>03</span>
              <h3>UK & Ireland Programmes</h3>
              <p>
                Integrated British Isles touring supported by structured
                coordination and reliable cross-region continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW PREMIUM SECTION */}
      <section style={section}>
        <div style={center}>
          <p style={eyebrow}>Our Approach</p>

          <h2 style={headingCenter}>
            Structured delivery designed for consistency.
          </h2>

          <div style={valueList}>
            <div>Consistent programme execution</div>
            <div>Clear operational communication</div>
            <div>UK & Ireland integrated coverage</div>
            <div>Professional delivery standards</div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH STATEMENT */}
      <section style={fullBand}>
        <h2 style={fullText}>
          Reliable delivery across every departure.
        </h2>
      </section>

      {/* CTA */}
      <section style={cta}>
        <h2 style={{ margin: 0 }}>
          Plan your next touring programme
        </h2>

        <p style={{ marginTop: "12px", color: "#64748B" }}>
          Speak with our team about your programme structure and operational requirements.
        </p>

        <a href="/contact" style={ctaButton}>
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerTop}>
          <h3 style={footerBrand}>UK Inbound Ground Transport</h3>

          <div style={footerNav}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/programmes">Programmes</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div style={footerBottom}>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </div>
      </footer>
    </>
  );
}

/* NEW STYLES ADDED */

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
  marginBottom: "10px",
};

const trustStrip: React.CSSProperties = {
  background: "#0B1728",
  color: "#D4AF37",
  textAlign: "center",
  padding: "18px",
  fontSize: "13px",
};
