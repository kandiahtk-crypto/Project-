export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #07111F 0%, #0B1728 45%, #10233B 100%)",
          color: "white",
          padding: "80px 20px 110px",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={eyebrow}>Contact</p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Let’s discuss your next touring programme
          </h1>

          <p
            style={{
              margin: "26px 0 0",
              maxWidth: "760px",
              color: "#DCE8F5",
              lineHeight: 1.9,
              fontSize: "18px",
            }}
          >
            Share your contact details, trip details and itinerary requirements,
            and our team will respond with the most suitable support for your
            programme.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        style={{
          padding: "90px 20px",
          background: "#F8FBFF",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gap: "28px",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "start",
          }}
        >
          {/* LEFT PANEL */}
          <div
            style={{
              background: "#0B1728",
              color: "white",
              borderRadius: "22px",
              padding: "34px",
              boxShadow: "0 20px 50px rgba(11,23,40,0.16)",
            }}
          >
            <p style={panelEyebrow}>Operator Enquiries</p>

            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "34px",
                lineHeight: 1.15,
              }}
            >
              Premium support with clarity and reliability.
            </h2>

            <p
              style={{
                margin: 0,
                color: "#DCE8F5",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
            >
              We support international tour operators, DMCs and travel brands
              across the United Kingdom and Ireland.
            </p>

            <div style={{ marginTop: "28px", display: "grid", gap: "18px" }}>
              <div>
                <p style={infoLabel}>Email</p>
                <p style={infoText}>info@ukinboundgroundtransport.com</p>
              </div>

              <div>
                <p style={infoLabel}>Phone</p>
                <p style={infoText}>+44 20 8629 2776</p>
              </div>

              <div>
                <p style={infoLabel}>Company</p>
                <p style={infoText}>
                  Evershine Transport Limited
                  <br />
                  Trading name: UK Inbound Ground Transport
                </p>
              </div>

              <div>
                <p style={infoLabel}>Registration</p>
                <p style={infoText}>
                  Company Reg: 13507458
                  <br />
                  VAT: 388919914
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL / FORM */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              padding: "34px",
              boxShadow: "0 20px 50px rgba(15,23,42,0.08)",
              border: "1px solid rgba(15,23,42,0.06)",
            }}
          >
            <p style={formEyebrow}>Send an Enquiry</p>

            <h2
              style={{
                margin: "0 0 14px",
                fontSize: "34px",
                lineHeight: 1.15,
                color: "#0F172A",
              }}
            >
              Tell us about your programme
            </h2>

            <form style={{ display: "grid", gap: "24px", marginTop: "24px" }}>
              {/* CONTACT DETAILS */}
              <div>
                <h3 style={groupTitle}>Contact Details</h3>
                <div style={formGrid}>
                  <input type="text" placeholder="Full Name" style={input} />
                  <input type="text" placeholder="Company / Organisation" style={input} />
                  <input type="email" placeholder="Email Address" style={input} />
                  <input type="text" placeholder="Phone Number" style={input} />
                </div>
              </div>

              {/* TRIP DETAILS */}
              <div>
                <h3 style={groupTitle}>Trip Details</h3>
                <div style={formGrid}>
                  <input type="text" placeholder="Trip Name / Programme Name" style={input} />
                  <input type="text" placeholder="Destination / Region" style={input} />
                  <input type="text" placeholder="Travel Dates" style={input} />
                  <input type="text" placeholder="Group Size" style={input} />
                </div>
              </div>

              {/* ITINERARY */}
              <div>
                <h3 style={groupTitle}>Itinerary</h3>
                <textarea
                  placeholder="Please share your itinerary, routing, pick-up points, hotel sequence, ferry requirements, or any other programme details..."
                  style={textarea}
                />
              </div>

              <button type="submit" style={submitButton}>
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0B1728",
          color: "#DCE8F5",
          padding: "50px 20px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div>
            <h3
              style={{
                color: "#D4AF37",
                margin: "0 0 12px",
                fontSize: "20px",
              }}
            >
              UK Inbound Ground Transport
            </h3>
            <p style={footerText}>
              Premium UK &amp; Ireland ground transport solutions for
              international tour operators and travel partners.
            </p>
          </div>

          <div>
            <h4 style={footerHeading}>Navigation</h4>
            <div style={footerLinks}>
              <a href="/" style={footerLink}>Home</a>
              <a href="/about" style={footerLink}>About</a>
              <a href="/services" style={footerLink}>Services</a>
              <a href="/programmes" style={footerLink}>Programmes</a>
              <a href="/contact" style={footerLink}>Contact</a>
            </div>
          </div>

          <div>
            <h4 style={footerHeading}>Company</h4>
            <div style={footerLinks}>
              <span style={footerText}>Evershine Transport Limited</span>
              <span style={footerText}>
                Trading name: UK Inbound Ground Transport
              </span>
              <span style={footerText}>Company Reg: 13507458</span>
              <span style={footerText}>VAT: 388919914</span>
            </div>
          </div>

          <div>
            <h4 style={footerHeading}>Contact</h4>
            <div style={footerLinks}>
              <span style={footerText}>info@ukinboundgroundtransport.com</span>
              <span style={footerText}>+44 20 8629 2776</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1180px",
            margin: "30px auto 0",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: "14px",
            color: "#94A3B8",
          }}
        >
          © UK Inbound Ground Transport. All rights reserved.
        </div>
      </footer>
    </>
  );
}

const eyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
};

const panelEyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
  margin: "0 0 14px",
};

const formEyebrow: React.CSSProperties = {
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.14em",
  fontWeight: 700,
  margin: "0 0 14px",
};

const groupTitle: React.CSSProperties = {
  margin: "0 0 12px",
  color: "#0F172A",
  fontSize: "18px",
};

const formGrid: React.CSSProperties = {
  display: "grid",
  gap: "14px",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
};

const infoLabel: React.CSSProperties = {
  margin: "0 0 6px",
  color: "#D4AF37",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "0.12em",
  fontWeight: 700,
};

const infoText: React.CSSProperties = {
  margin: 0,
  color: "#EAF3FF",
  lineHeight: 1.8,
  fontSize: "16px",
};

const input: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(15,23,42,0.10)",
  fontSize: "15px",
  color: "#0F172A",
  background: "#F8FBFF",
  outline: "none",
};

const textarea: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "15px 16px",
  borderRadius: "12px",
  border: "1px solid rgba(15,23,42,0.10)",
  fontSize: "15px",
  color: "#0F172A",
  background: "#F8FBFF",
  minHeight: "170px",
  resize: "vertical",
  outline: "none",
};

const submitButton: React.CSSProperties = {
  background: "#D4AF37",
  color: "#07111F",
  padding: "15px 22px",
  borderRadius: "12px",
  border: "none",
  fontWeight: 700,
  fontSize: "15px",
  cursor: "pointer",
};

const footerHeading: React.CSSProperties = {
  margin: "0 0 14px",
  color: "#D4AF37",
  fontSize: "16px",
};

const footerText: React.CSSProperties = {
  margin: 0,
  color: "#DCE8F5",
  lineHeight: 1.8,
  fontSize: "15px",
};

const footerLinks: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const footerLink: React.CSSProperties = {
  color: "#DCE8F5",
  textDecoration: "none",
  fontSize: "15px",
};
