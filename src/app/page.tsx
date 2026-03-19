import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "Arial, sans-serif", paddingTop: "80px" }}>
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            background: "#0A0A0A",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              color: "#D4AF37",
            }}
          >
            UK Inbound Ground Transport
          </h1>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 0.85,
            }}
          >
            Premium UK &amp; Ireland ground transport solutions for
            international tour operators.
          </p>
        </section>

        <section
          style={{
            padding: "80px 20px",
            background: "#E6F0FA",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#0A0A0A",
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: "grid",
              gap: "25px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                borderLeft: "5px solid #D4AF37",
              }}
            >
              <h3 style={{ color: "#0A0A0A" }}>Fixed-Departure Series</h3>
              <p style={{ color: "#555" }}>
                Consistent, repeatable touring operations across seasons.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                borderLeft: "5px solid #D4AF37",
              }}
            >
              <h3 style={{ color: "#0A0A0A" }}>UK Multi-Region Touring</h3>
              <p style={{ color: "#555" }}>
                Seamless travel across England, Scotland and Wales.
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                borderLeft: "5px solid #D4AF37",
              }}
            >
              <h3 style={{ color: "#0A0A0A" }}>UK–Ireland Integration</h3>
              <p style={{ color: "#555" }}>
                Unified logistics across both countries.
              </p>
            </div>
          </div>
        </section>

        <footer
          style={{
            padding: "40px",
            textAlign: "center",
            background: "#0A0A0A",
            color: "#D4AF37",
          }}
        >
          <p>© UK Inbound Ground Transport</p>
        </footer>
      </main>
    </>
  );
}
