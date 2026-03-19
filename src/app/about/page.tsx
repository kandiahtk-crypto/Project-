export default function AboutPage() {
  return (
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
  );
}
