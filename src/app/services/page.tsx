// trigger deploy
import Navbar from "../../components/Navbar";

function ServiceBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "30px",
        border: "1px solid rgba(15, 23, 42, 0.08)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          color: "#D4AF37",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "14px",
        }}
      >
        {number}
      </div>

      <h3
        style={{
          margin: "0 0 14px",
          color: "#0F172A",
          fontSize: "26px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#475569",
          lineHeight: 1.9,
          fontSize: "16px",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function ServicesPage() {
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
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
            <p
              style={{
                margin: "0 0 14px",
                color: "#D4AF37",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              Our Services
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Premium UK &amp; Ireland ground-transport solutions for international tour operators.
            </h1>

            <p
              style={{
                maxWidth: "820px",
                margin: "24px auto 0",
                color: "#DCE8F5",
                lineHeight: 1.9,
                fontSize: "18px",
              }}
            >
              UK Inbound Ground Transport delivers professional, structured and
              dependable touring logistics across the United Kingdom and Ireland.
              We support tour operators, DMCs and international travel brands
              with a high-quality transport service built for multi-day
              programmes, fixed-departure series and high-volume group travel.
            </p>

            <p
              style={{
                maxWidth: "780px",
                margin: "18px auto 0",
                color: "#DCE8F5",
                lineHeight: 1.9,
                fontSize: "18px",
              }}
            >
              Our focus is on delivering consistent, precision-driven operations
              that strengthen your touring programmes and elevate the guest
              experience.
            </p>
          </div>
        </section>

        <section style={{ padding: "90px 20px" }}>
          <div
            style={{
              maxWidth: "1120px",
              margin: "0 auto",
              display: "grid",
              gap: "24px",
            }}
          >
            <ServiceBlock
              number="01"
              title="Fixed-Departure Series Support"
              text="Our Fixed-Departure Series service ensures complete operational consistency for season-long touring programmes. Every departure follows an identical structure, offering predictable routing, familiar timing patterns and dependable service delivery. This level of repeatability helps operators maintain product quality, support brochure schedules, and deliver a stable touring experience across the entire season."
            />

            <ServiceBlock
              number="02"
              title="Multi-Region UK Touring"
              text="Our multi-region touring service supports seamless travel across England, Scotland and Wales. We design touring flows that offer balanced pacing, manageable distances and smooth transitions between regions. Whether your itineraries cover cultural highlights, scenic routes or major cities, we ensure day-to-day operations run with clarity, efficiency and professional oversight."
            />

            <ServiceBlock
              number="03"
              title="UK–Ireland Integrated Touring"
              text="We offer fully integrated UK–Ireland logistics for British Isles programmes requiring unified standards across both countries. Our team manages timings, ferry coordination and cross-country continuity to ensure an uninterrupted touring experience. This service is ideal for long-haul markets and operators offering UK + Ireland combination itineraries."
            />

            <ServiceBlock
              number="04"
              title="Large Group & Multi-Coach Coordination"
              text="We specialise in supporting high-volume group movements, including multi-coach touring, incentive travel, student groups and special-interest programmes. Our coordination covers vehicle sequencing, daily timing, loading patterns and on-tour management. This ensures large groups can move efficiently and safely while maintaining a smooth touring flow."
            />

            <ServiceBlock
              number="05"
              title="Long-Haul Market Alignment"
              text="We understand the expectations of long-haul markets, particularly from the United States, India, China and Europe. We tailor pacing, routing and daily schedules to match each market’s preferred travel style, ensuring guests experience a comfortable and well-timed journey. From arrival-day logistics to photo-friendly pacing, our operational style aligns with the needs of international travellers."
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
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ maxWidth: "760px", margin: "0 auto 46px", textAlign: "center" }}>
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
                Why Operators Choose Us
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: 1.1,
                  color: "#111827",
                }}
              >
                Structured service delivery built for inbound touring excellence.
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {[
                "Consistent service delivery across all departures",
                "UK-wide and Ireland-wide operational coverage",
                "Structured planning and professional communication",
                "Reliable management of large and complex touring programmes",
                "Tailored support for long-haul inbound markets",
                "Premium brand presentation and dependable day-to-day execution",
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
          </div>
        </section>

        <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
          <div
            style={{
              maxWidth: "960px",
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
              Operator Enquiries
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.1,
              }}
            >
              Let’s support your next touring programme with dependable transport delivery.
            </h2>

            <p
              style={{
                maxWidth: "720px",
                margin: "18px auto 0",
                color: "#DCE8F5",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
            >
              Speak with our team about departure structure, route planning,
              group size and operational requirements across the UK and Ireland.
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
                href="/"
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
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
