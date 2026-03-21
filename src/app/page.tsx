import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Inbound Ground Transport | Premium UK & Ireland Touring Logistics",
  description:
    "Premium UK and Ireland ground transport solutions for international tour operators, DMCs and travel brands. Structured touring logistics, fixed-departure series and British Isles programme support.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "radial-gradient(circle at top right, rgba(212,175,55,0.14), transparent 28%), linear-gradient(135deg, #06101D 0%, #0A1628 45%, #10233B 100%)",
          color: "white",
          padding: "90px 20px 120px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gap: "36px",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
          }}
        >
          <div>
            <p style={eyebrow}>Premium UK &amp; Ireland Touring Logistics</p>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(44px, 7vw, 78px)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                maxWidth: "820px",
              }}
            >
              UK Inbound
              <br />
              Ground Transport
            </h1>

            <p
              style={{
                margin: "26px 0 0",
                maxWidth: "700px",
                color: "#D8E4F0",
                lineHeight: 1.9,
                fontSize: "18px",
              }}
            >
              Premium ground transport solutions for international tour
              operators, DMCs and travel brands across the United Kingdom and
              Ireland. Structured, dependable and built for consistent
              programme delivery.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "34px",
                flexWrap: "wrap",
              }}
            >
              <a href="/contact" style={primaryButton}>
                Plan Your Programme
              </a>
              <a href="/services" style={secondaryButtonDark}>
                Explore Services
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "24px",
                padding: "26px",
                boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  background: "#F8FBFF",
                  color: "#0F172A",
                  borderRadius: "18px",
                  padding: "26px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 12px",
                    color: "#D4AF37",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "12px",
                  }}
                >
                  Built for Operators
                </p>

                <h2
                  style={{
                    margin: "0 0 14px",
                    fontSize: "30px",
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Dependable touring flow from first departure to final arrival.
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    lineHeight: 1.8,
                    fontSize: "16px",
                  }}
                >
                  From fixed-departure series and multi-region UK touring to
                  British Isles itineraries and large-group programmes, our
                  service model is designed to support consistent, premium
                  delivery across every programme.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  marginTop: "18px",
                }}
              >
                <div style={metricCard}>
                  <div style={metricValue}>UK + Ireland</div>
                  <div style={metricLabel}>Coverage</div>
                </div>

                <div style={metricCard}>
                  <div style={metricValue}>Series + Groups</div>
                  <div style={metricLabel}>Programme Types</div>
                </div>

                <div style={metricCard}>
                  <div style={metricValue}>Premium</div>
                  <div style={metricLabel}>Brand Standard</div>
                </div>

                <div style={metricCard}>
                  <div style={metricValue}>Structured</div>
                  <div style={metricLabel}>Operational Style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section
        style={{
          padding: "100px 20px",
          background: "#F8FBFF",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "grid",
            gap: "28px",
            gridTemplateColumns: "1.1fr 0.9fr",
          }}
        >
          <div>
            <p style={eyebrowLight}>Who We Support</p>

            <h2 style={sectionTitle}>
              Ground transport delivery built for international inbound touring.
            </h2>
          </div>

          <div>
            <p style={sectionText}>
              UK Inbound Ground Transport is designed for operators who require
              more than vehicles. We provide structured operational support,
              premium brand presentation and dependable day-to-day execution
              across touring programmes in England, Scotland, Wales and Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "100px 20px",
          background: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
            <p style={eyebrowLight}>Services</p>

            <h2 style={sectionTitle}>
              Structured touring logistics built for professional inbound operators.
            </h2>

            <p style={sectionText}>
              Our service model is designed around repeatability, operational
              clarity and premium delivery — ensuring your programmes run
              smoothly from first departure to final arrival.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              marginTop: "44px",
            }}
          >
            <div style={serviceCard}>
              <div style={serviceNumber}>01</div>
              <h3 style={serviceTitle}>Fixed-Departure Series</h3>
              <p style={serviceText}>
                Consistent, repeatable operations across season-long touring
                programmes, ensuring every departure follows the same high
                standard.
              </p>
            </div>

            <div style={serviceCard}>
              <div style={serviceNumber}>02</div>
              <h3 style={serviceTitle}>Multi-Region UK Touring</h3>
              <p style={serviceText}>
                Seamless routing across England, Scotland and Wales with
                balanced pacing, efficient movement and professional
                coordination.
              </p>
            </div>

            <div style={serviceCard}>
              <div style={serviceNumber}>03</div>
              <h3 style={serviceTitle}>UK–Ireland Integration</h3>
              <p style={serviceText}>
                Fully coordinated British Isles touring with managed ferry
                timings and smooth cross-country continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        style={{
          padding: "100px 20px",
          background: "#07111F",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
            <p style={eyebrow}>Why Operators Choose Us</p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 5vw, 48px)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
              }}
            >
              A transport partner built for consistency and reliability.
            </h2>

            <p
              style={{
                margin: "18px auto 0",
                color: "#DCE8F5",
                lineHeight: 1.85,
                fontSize: "18px",
                maxWidth: "760px",
              }}
            >
              We focus on structured delivery, clear communication and
              dependable execution — helping operators protect product quality,
              strengthen programme flow and deliver a better guest experience
              across every itinerary.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
              marginTop: "42px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div style={darkFeatureCard}>Consistent programme flow</div>
            <div style={darkFeatureCard}>UK &amp; Ireland coverage</div>
            <div style={darkFeatureCard}>Professional coordination</div>
            <div style={darkFeatureCard}>Reliable day-to-day delivery</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          background: "#F8FBFF",
        }}
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            textAlign: "center",
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "56px 28px",
            boxShadow: "0 20px 50px rgba(15,23,42,0.08)",
            border: "1px solid rgba(15,23,42,0.06)",
          }}
        >
          <p style={eyebrowLight}>Ready to Plan?</p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 5vw, 44px)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#0F172A",
            }}
          >
            Let’s build your next UK &amp; Ireland touring programme.
          </h2>

          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "700px",
              color: "#475569",
              lineHeight: 1.8,
              fontSize: "18px",
            }}
          >
            Speak with our team about your route structure, departure model and
            operational requirements. We’ll help shape a dependable touring
            solution tailored to your programme.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <a href="/contact" style={primaryButton}>
              Contact Us
            </a>

            <a href="/services" style={secondaryButtonLight}>
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0B1728",
          color: "#DCE8F5",
          padding: "54px 20px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div>
            <h3
              style={{
                color: "#D4AF37",
                margin: "0 0 12px",
                fontSize: "20px",
              }}
            >
              UK Inbound Ground Transport
            </h3>
            <p style={footerText}>
              Premium UK &amp; Ireland ground transport solutions for
              international tour operators and travel partners.
            </p>
          </div>

          <div>
            <h4 style={footerHeading}>Navigation</h4>
            <div style={footerLinks}>
              <a href="/" style={footerLink}>Home</a>
              <a href="/about" style={footerLink}>About</a>
              <a href="/services" style={footerLink}>Services</a>
              <a href="/programmes" style={footerLink}>Programmes</a>
              <a href="/contact" style={footerLink}>Contact</a>
            </div>
          </div>

          <div>
            <h4 style={footerHeading}>Company</h4>
            <div style={footerLinks}>
              <span style={footerText}>Evershine Transport Limited</span>
              <span style={footerText}>
                Trading name: UK Inbound Ground Transport
              </span>
              <span style={footerText}>Company Reg: 13507458</span>
              <span style={footerText}>VAT: 388919914</span>
            </div>
          </div>

          <div>
            <h4 style={footerHeading}>Contact</h4>
            <div style={footerLinks}>
              <span style={footerText}>info@ukinboundgroundtransport.com</span>
              <span style={footerText}>+44 20 8629 2776</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1180px",
            margin: "30px auto 0",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: "14px",
            color: "#94A3B8",
          }}
        >
          © UK Inbound Ground Transport. All rights reserved.
        </div>
      </footer>
    </>
  );
}

const eyebrow: React.CSSProperties = {
  margin: "0 0 16px",
  color: "#D4AF37",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontSize: "12px",
  fontWeight: 700,
};

const eyebrowLight: React.CSSProperties = {
  margin: "0 0 16px",
  color: "#D4AF37",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontSize: "12px",
  fontWeight: 700,
  textAlign: "center",
};

const primaryButton: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryButtonDark: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.2)",
  color: "#EAF3FF",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
};

const secondaryButtonLight: React.CSSProperties = {
  border: "1px solid rgba(15,23,42,0.12)",
  color: "#0F172A",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: 600,
};

const metricCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "18px",
  border: "1px solid rgba(255,255,255,0.08)",
  textAlign: "center",
};

const metricValue: React.CSSProperties = {
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: "18px",
};

const metricLabel: React.CSSProperties = {
  color: "#C9D8E6",
  fontSize: "13px",
  marginTop: "6px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "clamp(30px, 5vw, 48px)",
  margin: "0 0 14px",
  lineHeight: 1.15,
  letterSpacing: "-0.03em",
  color: "#0F172A",
  textAlign: "center",
};

const sectionText: React.CSSProperties = {
  color: "#475569",
  lineHeight: 1.85,
  fontSize: "18px",
  textAlign: "center",
};

const serviceCard: React.CSSProperties = {
  background: "#ffffff",
  padding: "28px",
  borderRadius: "18px",
  border: "1px solid rgba(15,23,42,0.06)",
  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
};

const serviceNumber: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "12px",
};

const serviceTitle: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#0F172A",
  fontSize: "24px",
  lineHeight: 1.2,
};

const serviceText: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.8,
  fontSize: "16px",
};

const darkFeatureCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "22px",
  color: "#EAF3FF",
  fontWeight: 600,
  textAlign: "center",
};

const footerHeading: React.CSSProperties = {
  margin: "0 0 14px",
  color: "#D4AF37",
  fontSize: "16px",
};

const footerText: React.CSSProperties = {
  margin: 0,
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "15px",
};

const footerLinks: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: React.CSSProperties = {
  color: "#DCE8F5",
  textDecoration: "none",
  fontSize: "15px",
};
