import Navbar from "../components/Navbar";

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div style={{ maxWidth: "760px", margin: "0 auto 48px", textAlign: "center" }}>
      {eyebrow ? (
        <p
          style={{
            margin: "0 0 12px",
            color: "#D4AF37",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        style={{
          margin: 0,
          fontSize: "clamp(30px, 4vw, 48px)",
          lineHeight: 1.1,
          color: "#111827",
        }}
      >
        {title}
      </h2>

      {text ? (
        <p
          style={{
            margin: "18px auto 0",
            color: "#475569",
            lineHeight: 1.8,
            fontSize: "17px",
          }}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "28px",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "4px",
          background: "#D4AF37",
          borderRadius: "999px",
          marginBottom: "18px",
        }}
      />
      <h3
        style={{
          margin: "0 0 12px",
          color: "#0F172A",
          fontSize: "22px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: "#475569",
          lineHeight: 1.8,
          fontSize: "16px",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "22px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#D4AF37",
          fontSize: "30px",
          fontWeight: 700,
          marginBottom: "8px",
        }}
      >
        {value}
      </div>
      <div
        style={{
          color: "#DCE8F5",
          fontSize: "14px",
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "Arial, sans-serif", paddingTop: "84px", background: "#F8FBFF" }}>
        <section
          style={{
            background:
              "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
            color: "white",
            padding: "110px 20px 90px",
          }}
        >
          <div
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              display: "grid",
              gap: "40px",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 16px",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Premium UK &amp; Ireland Touring Logistics
              </p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(40px, 6vw, 68px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  maxWidth: "760px",
                }}
              >
                Ground-transport delivery built for international touring programmes.
              </h1>

              <p
                style={{
                  margin: "24px 0 0",
                  maxWidth: "700px",
                  color: "#DCE8F5",
                  lineHeight: 1.85,
                  fontSize: "18px",
                }}
              >
                UK Inbound Ground Transport supports international tour operators,
                DMCs and travel partners with structured, dependable and premium
                touring logistics across England, Scotland, Wales and Ireland.
                We help operators deliver smoother departures, clearer day-to-day
                movement and stronger programme consistency.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginTop: "32px",
                }}
              >
                <a
                  href="/contact"
                  style={{
                    background: "#D4AF37",
                    color: "#0B1728",
                    textDecoration: "none",
                    padding: "15px 22px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "15px",
                    boxShadow: "0 10px 24px rgba(212,175,55,0.22)",
                  }}
                >
                  Plan Your Programme
                </a>

                <a
                  href="/services"
                  style={{
                    background: "transparent",
                    color: "#EAF3FF",
                    textDecoration: "none",
                    padding: "15px 22px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "15px",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                padding: "26px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.22)",
              }}
            >
              <div
                style={{
                  background: "#EAF3FF",
                  borderRadius: "18px",
                  padding: "24px",
                  color: "#0F172A",
                }}
              >
                <p
                  style={{
                    margin: "0 0 14px",
                    color: "#D4AF37",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontSize: "12px",
                  }}
                >
                  Built for operators
                </p>

                <h3
                  style={{
                    margin: "0 0 16px",
                    fontSize: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  Reliable touring flow from first departure to final arrival.
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    lineHeight: 1.8,
                    fontSize: "16px",
                  }}
                >
                  From fixed-departure series and multi-region UK routes to
                  integrated UK–Ireland itineraries and large group coordination,
                  our service model is designed to support professional,
                  repeatable touring delivery.
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
                <StatCard value="UK + Ireland" label="Coverage" />
                <StatCard value="Series + Groups" label="Programme Types" />
                <StatCard value="Premium" label="Brand Presentation" />
                <StatCard value="Structured" label="Operational Style" />
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
          <SectionTitle
            eyebrow="Core Services"
            title="Operational support designed for high-standard touring delivery."
            text="Our service model is built for multi-day touring programmes, repeat departures, international market expectations and professional operator support."
          />

          <div
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            <ServiceCard
              title="Fixed-Departure Series"
              text="Repeatable and season-wide operational structure for brochure-led touring programmes requiring consistent timing, flow and execution."
            />
            <ServiceCard
              title="Multi-Region UK Touring"
              text="Balanced touring across England, Scotland and Wales with sensible pacing, efficient movement and professionally managed routing."
            />
            <ServiceCard
              title="UK–Ireland Integration"
              text="Unified British Isles touring support with coordinated timings, ferry planning and smooth cross-country continuity."
            />
            <ServiceCard
              title="Large Group Coordination"
              text="Efficient movement plans for high-volume groups, multi-coach touring and more complex operational requirements."
            />
          </div>
        </section>

        <section
          style={{
            padding: "90px 20px",
            background: "#EAF3FF",
            borderTop: "1px solid rgba(15,23,42,0.05)",
            borderBottom: "1px solid rgba(15,23,42,0.05)",
          }}
        >
          <SectionTitle
            eyebrow="Why Operators Choose Us"
            title="A professional transport partner for structured inbound touring."
            text="We focus on dependability, communication and programme quality — helping operators protect the guest experience while strengthening overall touring delivery."
          />

          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {[
              "Consistent service delivery across departures",
              "Coverage across the UK and integrated Ireland flows",
              "Clear communication and structured planning",
              "Support for long-haul market expectations",
              "Premium brand presentation and execution",
              "Reliable management of complex touring movements",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "22px",
                  boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
                  border: "1px solid rgba(15,23,42,0.06)",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "999px",
                    background: "#D4AF37",
                    marginBottom: "14px",
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    color: "#334155",
                    lineHeight: 1.7,
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              textAlign: "center",
              background: "#0B1728",
              color: "white",
              borderRadius: "28px",
              padding: "54px 28px",
              boxShadow: "0 24px 50px rgba(11,23,40,0.18)",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                color: "#D4AF37",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Ready to Plan?
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.1,
              }}
            >
              Let’s build your next UK &amp; Ireland touring programme.
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "18px auto 0",
                color: "#DCE8F5",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
            >
              Speak with our team about routing, departure structure, group
              requirements and operator support. We’ll help you shape a cleaner,
              stronger and more dependable touring flow.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "30px",
              }}
            >
              <a
                href="/contact"
                style={{
                  background: "#D4AF37",
                  color: "#0B1728",
                  textDecoration: "none",
                  padding: "15px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                }}
              >
                Contact Us
              </a>

              <a
                href="/services"
                style={{
                  background: "transparent",
                  color: "#EAF3FF",
                  textDecoration: "none",
                  padding: "15px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.16)",
                }}
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <footer
          style={{
            background: "#07111F",
            color: "#D4AF37",
            textAlign: "center",
            padding: "34px 20px",
            fontSize: "14px",
          }}
        >
          © UK Inbound Ground Transport
        </footer>
      </main>
    </>
  );
}
