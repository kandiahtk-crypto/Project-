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
        <h1 style={title}>Contact Us</h1>

        <p style={text}>
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
