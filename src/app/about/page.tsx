export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={hero}>
        <h1 style={title}>About UKIGT</h1>

        <p style={subtitle}>
          A premium transport partner for UK & Ireland inbound touring.
        </p>
      </section>

      {/* CONTENT */}
      <section style={sectionLight}>
        <div style={content}>
          <p>
            UK Inbound Ground Transport supports international tour operators,
            DMCs and travel brands with dependable, structured and professionally
            delivered transport solutions.
          </p>

          <p>
            Our focus is consistency, clarity and operational excellence —
            ensuring every touring programme runs smoothly from start to finish.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          Partner with a reliable transport provider
        </h2>

        <a href="/contact" style={ctaButton}>
          Get in Touch
        </a>
      </section>
    </>
  );
}
