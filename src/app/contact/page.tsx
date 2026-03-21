export default function ContactPage() {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "60px 20px 90px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            color: "#D4AF37",
            margin: 0,
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#DCE8F5",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Speak with our team about your touring programme requirements.
        </p>
      </section>

      <section style={{ padding: "80px 20px", background: "#F8FBFF" }}>
        <div style={content}>
          <p>Email: info@ukigt.com</p>
          <p>Phone: +44 XXXX XXX XXX</p>
        </div>
      </section>
    </>
  );
}

const content: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  lineHeight: 1.8,
  fontSize: "18px",
  color: "#334155",
};
