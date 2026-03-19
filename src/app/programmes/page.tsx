import Navbar from "../../components/Navbar";

export default function ProgrammesPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px", fontFamily: "Arial" }}>
        <section style={hero}>
          <h1 style={title}>Touring Programmes</h1>
          <p style={subtitle}>
            Structured transport delivery designed for international touring operations.
          </p>
        </section>

        <section style={section}>
          <div style={grid}>
            {[
              "Fixed Departure Series",
              "Multi-Country Touring",
              "Luxury Group Travel",
              "Student & Educational Tours",
              "Incentive & Corporate Travel",
            ].map((item) => (
              <div key={item} style={card}>
                <h3 style={{ color: "#0B1728" }}>{item}</h3>
                <p style={{ color: "#555" }}>
                  Professionally structured transport solutions built for consistency and quality delivery.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

const hero = {
  padding: "120px 20px",
  textAlign: "center" as const,
  background: "#07111F",
  color: "white",
};

const title = { fontSize: "46px", color: "#D4AF37" };
const subtitle = { opacity: 0.85 };

const section = { padding: "80px 20px" };

const grid = {
  display: "grid",
  gap: "20px",
  maxWidth: "900px",
  margin: "0 auto",
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  borderLeft: "4px solid #D4AF37",
};
