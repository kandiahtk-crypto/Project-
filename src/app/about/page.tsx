export default function AboutPage() {
  return (
    <main
      style={{
        paddingTop: "90px",
        fontFamily: "Arial, sans-serif",
        background: "#F8FBFF",
      }}
    >
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "120px 20px 90px",
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
            About Us
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            A premium transport partner for international UK &amp; Ireland
            touring.
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "24px auto 0",
              color: "#DCE8F5",
              lineHeight: 1.9,
              fontSize: "18px",
            }}
          >
            UK Inbound Ground Transport supports international tour operators,
            destination management companies and travel brands with dependable,
            structured and professionally delivered transport solutions across
            the United Kingdom and Ireland.
          </p>
        </div>
      </section>

      <section style={{ padding: "90px 20px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
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
                marginBottom: "16px",
              }}
            />
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
                color: "#0F172A",
              }}
            >
              Who We Are
            </h2>
            <p
              style={{
                margin: 0,
                color: "#475569",
                lineHeight: 1.8,
              }}
            >
              We are a specialist ground-transport partner focused on supporting
              inbound touring programmes with consistency, operational clarity
              and premium brand presentation.
            </p>
          </div>

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
                marginBottom: "16px",
              }}
            />
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
                color: "#0F172A",
              }}
            >
              What We Deliver
            </h2>
            <p
              style={{
                margin: 0,
                color: "#475569",
                lineHeight: 1.8,
              }}
            >
              Our service model is built around reliable departures, smooth
              daily movement, clear communication and structured programme
              support across England, Scotland, Wales and Ireland.
            </p>
          </div>

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
                marginBottom: "16px",
              }}
            />
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
                color: "#0F172A",
              }}
            >
              Why It Matters
            </h2>
            <p
              style={{
                margin: 0,
                color: "#475569",
                lineHeight: 1.8,
              }}
            >
              For operators, dependable transport is not just logistics — it is
              central to product quality, guest satisfaction and the overall
              success of every touring programme.
            </p>
          </div>
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
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
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
            Our Approach
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.1,
              color: "#111827",
            }}
          >
            Structured, dependable and designed for international touring
            standards.
          </h2>

          <p
            style={{
              margin: "20px auto 0",
              maxWidth: "760px",
              color: "#475569",
              lineHeight: 1.9,
              fontSize: "17px",
            }}
          >
            We focus on repeatability, timing accuracy, premium presentation and
            smooth coordination. This helps operators deliver stronger touring
            flow, protect programme quality and maintain a more professional
            guest experience from first departure to final arrival.
          </p>
        </div>
      </section>

      <section style={{ padding: "90px 20px", background: "#F8FBFF" }}>
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
            "Professional support for international operators",
            "UK-wide and Ireland-wide operational coverage",
            "Clear communication and structured planning",
            "Premium brand presentation across every programme",
            "Reliable day-to-day touring flow",
            "Strong alignment with long-haul market expectations",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid rgba(15,23,42,0.06)",
                boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
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
            maxWidth: "940px",
            margin: "0 auto",
            background: "#0B1728",
            color: "white",
            borderRadius: "28px",
            padding: "54px 28px",
            textAlign: "center",
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
            Work With Us
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.1,
            }}
          >
            Looking for a trusted UK &amp; Ireland touring partner?
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
            Speak with our team about your programme structure, routing and
            operational requirements. We’ll help you shape a more dependable
            touring experience.
          </p>

          <a
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "28px",
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
        </div>
      </section>
    </main>
  );
}
