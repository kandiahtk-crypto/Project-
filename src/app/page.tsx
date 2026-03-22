import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | UK & Ireland Touring Logistics",
  description:
    "Premium UK & Ireland ground transport solutions for international tour operators, DMCs and travel brands.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={overlay} />

        <div style={container}>
          <p style={eyebrow}>UK & Ireland Touring Logistics</p>

          <h1 style={title}>UK Inbound Ground Transport</h1>

          <p style={subtitle}>
            Premium ground transport solutions across the United Kingdom and Ireland
            for international tour operators, DMCs and travel brands requiring
            structured, reliable programme delivery.
          </p>

          <a href="/contact" style={cta}>
            Plan Your Programme
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={band}>
        <h2 style={bandText}>
          Structured. Reliable. Professional touring logistics.
        </h2>
      </section>

      {/* INTRO */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>A transport partner, not just a supplier.</h2>

          <p style={text}>
            UK Inbound Ground Transport supports international tour operators,
            destination management companies (DMCs) and travel brands with structured
            transport delivery across England, Scotland, Wales and Ireland.
          </p>

          <p style={text}>
            Our focus is programme flow — ensuring every itinerary operates with
            clarity, consistency and dependable execution from arrival to departure.
          </p>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section style={imageStrip}>
        <div style={overlay} />

        <h2 style={stripText}>
          Seamless touring across the United Kingdom and Ireland.
        </h2>
      </section>

      {/* SERVICES */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={heading}>Services</h2>

          <div style={list}>
            <div style={item}>Fixed-Departure Series</div>
            <div style={item}>Multi-Region UK Touring</div>
            <div style={item}>UK & Ireland Programmes</div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>UK & Ireland Ground Transport for Tour Operators</h2>

          <p style={text}>
            We provide structured ground transport services across major UK and
            Ireland touring regions including London, Edinburgh, the Scottish Highlands,
            the Lake District, Wales and Ireland.
          </p>

          <p style={text}>
            Our services support fixed-departure series, private touring groups and
            multi-country itineraries, ensuring reliable delivery across every route
            and schedule.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section style={sectionAlt}>
        <div style={container}>
          <h2 style={heading}>Why operators choose us</h2>

          <div style={list}>
            <div style={item}>Structured programme delivery</div>
            <div style={item}>Clear operational coordination</div>
            <div style={item}>UK & Ireland coverage</div>
            <div style={item}>Consistent service standards</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={section}>
        <div style={container}>
          <h2 style={heading}>Plan your next touring programme</h2>

          <a href="/contact" style={cta}>
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerTop}>
          <div>
            <p style={footerBrand}>UK Inbound Ground Transport</p>
            <p style={footerDesc}>
              Premium UK & Ireland ground transport solutions for international
              tour operators and travel brands.
            </p>
          </div>

          <div style={footerLinks}>
            <a href="/" style={footerLink}>
              Home
            </a>
            <a href="/about" style={footerLink}>
              About
            </a>
            <a href="/services" style={footerLink}>
              Services
            </a>
            <a href="/programmes" style={footerLink}>
              Programmes
            </a>
            <a href="/contact" style={footerLink}>
              Contact
            </a>
          </div>
        </div>

        <div style={footerBottom}>
          Evershine Transport Limited, trading as ukinboundgroundtransport.com
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: CSSProperties = {
  position: "relative",
  backgroundImage: "url('/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "70px 18px",
  color: "white",
};

const overlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "rgba(5,13,24,0.75)",
};

const container: CSSProperties = {
  position: "relative",
  maxWidth: "900px",
  margin: "0 auto",
};

const title: CSSProperties = {
  fontSize: "clamp(40px, 10vw, 80px)",
  lineHeight: 0.95,
};

const subtitle: CSSProperties = {
  marginTop: "12px",
  color: "#DCE8F5",
};

const eyebrow: CSSProperties = {
  color: "#D4AF37",
  fontSize: "11px",
  letterSpacing: "0.15em",
};

const cta: CSSProperties = {
  marginTop: "18px",
  display: "inline-block",
  background: "#D4AF37",
  color: "#07111F",
  padding: "12px 20px",
  fontWeight: 700,
  textDecoration: "none",
};

const band: CSSProperties = {
  background: "#0B1728",
  padding: "40px 18px",
  textAlign: "center",
};

const bandText: CSSProperties = {
  color: "white",
  fontSize: "22px",
};

const section: CSSProperties = {
  padding: "60px 18px",
};

const sectionAlt: CSSProperties = {
  padding: "60px 18px",
  background: "#F8FBFF",
};

const heading: CSSProperties = {
  fontSize: "24px",
};

const text: CSSProperties = {
  color: "#475569",
  marginTop: "10px",
};

const list: CSSProperties = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const item: CSSProperties = {
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  paddingBottom: "8px",
};

const imageStrip: CSSProperties = {
  position: "relative",
  backgroundImage: "url('/uk.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "90px 18px",
  textAlign: "center",
};

const stripText: CSSProperties = {
  position: "relative",
  color: "white",
  fontSize: "22px",
};

const footer: CSSProperties = {
  background: "#050D18",
  color: "#94A3B8",
  padding: "60px 20px 30px",
};

const footerTop: CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const footerBrand: CSSProperties = {
  color: "#D4AF37",
  fontSize: "16px",
  fontWeight: 700,
};

const footerDesc: CSSProperties = {
  marginTop: "10px",
  maxWidth: "400px",
};

const footerLinks: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: CSSProperties = {
  color: "#94A3B8",
  textDecoration: "none",
};

const footerBottom: CSSProperties = {
  marginTop: "40px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  paddingTop: "20px",
  textAlign: "center",
  fontSize: "14px",
};
