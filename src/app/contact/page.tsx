export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>Contact</p>

          <h1 style={title}>
            Plan your next
            <br />
            UK & Ireland programme
          </h1>

          <p style={subtitle}>
            Speak with our team about your touring requirements. We’ll help
            structure a reliable, premium transport solution tailored to your
            programme.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={section}>
        <div style={formWrapper}>
          <form style={form}>
            {/* CONTACT DETAILS */}
            <div style={block}>
              <h3 style={blockTitle}>Contact Details</h3>

              <input placeholder="Full Name" style={input} />
              <input placeholder="Company / Organisation" style={input} />
              <input placeholder="Email Address" style={input} />
              <input placeholder="Phone Number" style={input} />
            </div>

            {/* TRIP DETAILS */}
            <div style={block}>
              <h3 style={blockTitle}>Trip Details</h3>

              <input placeholder="Arrival Date" style={input} />
              <input placeholder="Departure Date" style={input} />
              <input placeholder="Group Size" style={input} />
              <input placeholder="Regions (e.g. England, Scotland)" style={input} />
            </div>

            {/* ITINERARY */}
            <div style={block}>
              <h3 style={blockTitle}>Itinerary</h3>

              <textarea
                placeholder="Outline your itinerary, routing or programme requirements..."
                style={textarea}
              />
            </div>

            {/* SUBMIT */}
            <button style={button}>Submit Enquiry</button>
          </form>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section style={infoSection}>
        <div style={container}>
          <h2 style={{ margin: 0 }}>Contact Information</h2>

          <div style={infoGrid}>
            <div>
              <p style={label}>Company</p>
              <p style={text}>Evershine Transport Limited</p>
              <p style={text}>
                Trading name: UK Inbound Ground Transport
              </p>
            </div>

            <div>
              <p style={label}>Details</p>
              <p style={text}>Company Reg: 13507458</p>
              <p style={text}>VAT: 388919914</p>
            </div>

            <div>
              <p style={label}>Contact</p>
              <p style={text}>info@ukinboundgroundtransport.com</p>
              <p style={text}>+44 20 8629 2776</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={container}>
          <p style={footerText}>
            © UK Inbound Ground Transport. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

/* STYLES */

const hero: React.CSSProperties = {
  background: "#07111F",
  color: "white",
  padding: "120px 20px 80px",
};

const container: React.CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const title: React.CSSProperties = {
  fontSize: "clamp(42px, 6vw, 72px)",
  lineHeight: 1.05,
  margin: "10px 0",
};

const subtitle: React.CSSProperties = {
  color: "#C7D5E5",
  maxWidth: "600px",
  lineHeight: 1.8,
};

const section: React.CSSProperties = {
  padding: "80px 20px",
  background: "#F8FBFF",
};

const formWrapper: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
};

const form: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const block: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const blockTitle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 700,
};

const input: React.CSSProperties = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #E2E8F0",
};

const textarea: React.CSSProperties = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #E2E8F0",
  minHeight: "140px",
};

const button: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const infoSection: React.CSSProperties = {
  padding: "80px 20px",
  background: "#FFFFFF",
};

const infoGrid: React.CSSProperties = {
  display: "grid",
  gap: "30px",
  marginTop: "30px",
};

const label: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.1em",
};

const text: React.CSSProperties = {
  margin: "4px 0",
  color: "#334155",
};

const footer: React.CSSProperties = {
  background: "#07111F",
  color: "#C7D5E5",
  padding: "40px 20px",
};

const footerText: React.CSSProperties = {
  margin: 0,
};

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  fontSize: "12px",
  letterSpacing: "0.12em",
};
