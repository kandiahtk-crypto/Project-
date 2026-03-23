import type { CSSProperties } from "react";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section style={hero}>
        <div style={container}>
          <p style={eyebrow}>UK Inbound Ground Transport</p>

          <h1 style={heroTitle}>
            Structured transport delivery for UK & Ireland touring programmes.
          </h1>

          <p style={heroText}>
            Supporting fixed-departure series, private group touring, and
            multi-region itineraries with consistent, programme-led execution.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>Contact us</a>
            <a href="/programmes" style={secondaryButton}>View programmes</a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={section}>
        <div style={containerNarrow}>
          <h2 style={sectionTitle}>Programme-focused transport support</h2>

          <p style={sectionText}>
            We work with tour operators, DMCs and travel planners to deliver
            structured, reliable ground transport across the UK and Ireland.
          </p>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section style={section}>
        <div style={containerNarrow}>
          <div style={list}>
            {[
              {
                title: "Fixed-departure series",
                desc: "Consistent transport delivery across repeat touring schedules.",
              },
              {
                title: "Private group touring",
                desc: "Flexible, coordinated transport for bespoke itineraries.",
              },
              {
                title: "Multi-region UK touring",
                desc: "Structured routing across England, Scotland and Wales.",
              },
              {
                title: "UK & Ireland programmes",
                desc: "Cross-border touring with seamless coordination.",
              },
            ].map((item) => (
              <div key={item.title} style={itemRow}>
                <div style={accent} />
                <div>
                  <h3 style={itemTitle}>{item.title}</h3>
                  <p style={itemText}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section style={section}>
        <div style={containerNarrow}>
          <h2 style={sectionTitle}>UK & Ireland coverage</h2>

          <p style={sectionText}>
            National coverage including London, regional cities, and cross-country
            touring routes, with operational consistency across all programme types.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSection}>
        <div style={container}>
          <h2 style={ctaTitle}>
            Planning a UK or Ireland touring programme?
          </h2>

          <p style={ctaText}>
            Speak with us about structured transport support for your programme.
          </p>

          <a href="/contact" style={primaryButton}>
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
