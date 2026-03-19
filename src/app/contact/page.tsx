import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px", fontFamily: "Arial" }}>
        <section style={hero}>
          <h1 style={title}>Contact Us</h1>
          <p style={subtitle}>
            Speak with our team about your touring programme requirements.
          </p>
        </section>

        <section style={section}>
          <form style={form}>
            <input placeholder="Name" style={input} />
            <input placeholder="Email" style={input} />
            <textarea placeholder="Your message" style={textarea} />

            <button style={button}>Send Enquiry</button>
          </form>
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

const title = { fontSize: "46px", color: "#D4AF37" };
const subtitle = { opacity: 0.85 };

const section = { padding: "80px 20px" };

const form = {
  maxWidth: "500px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column" as const,
  gap: "15px",
};

const input = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const textarea = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  minHeight: "120px",
};

const button = {
  padding: "14px",
  background: "#D4AF37",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
};
