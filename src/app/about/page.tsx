import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px", fontFamily: "Arial" }}>
        <section style={hero}>
          <h1 style={title}>About UKIGT</h1>
          <p style={subtitle}>
            A structured, premium transport partner for inbound UK & Ireland touring programmes.
          </p>
        </section>

        <section style={section}>
          <div style={container}>
            <h2 style={heading}>Who We Are</h2>
            <p style={text}>
              UK Inbound Ground Transport is a specialist provider supporting international tour operators,
              DMCs and travel brands across the UK and Ireland.
            </p>

            <p style={text}>
              Our focus is on structured delivery, operational consistency and premium brand presentation.
              We ensure every touring programme runs with clarity, precision and reliability.
            </p>
          </div>
        </section>

        <section style={sectionAlt}>
          <div style={container}>
            <h2 style={heading}>Our Approach</h2>
            <p style={text}>
              We build transport operations around repeatability, timing accuracy and seamless coordination.
              This ensures every departure delivers the same high-quality experience.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

/* STYLES */
const hero = {
  padding: "120px 20px",
  textAlign: "center" as const,
  background: "#0B1728",
  color: "white",
};

const title = { fontSize: "48px", color: "#D4AF37" };
const subtitle = { opacity: 0.85 };

const section = { padding: "80px 20px" };
const sectionAlt = { padding: "80px 20px", background: "#EAF3FF" };

const container = { maxWidth: "900px", margin: "0 auto" };

const heading = { fontSize: "32px", marginBottom: "20px" };
const text = { lineHeight: 1.8, color: "#334155" };
