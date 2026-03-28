import type { CSSProperties } from "react";
import type { Metadata } from "next";
import ProgrammeEnquiryForm from "../components/ProgrammeEnquiryForm";

const siteUrl = "https://www.ukinboundgroundtransport.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UK Inbound Ground Transport",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: ["GB", "IE"],
      availableLanguage: ["English"],
      url: `${siteUrl}/contact`,
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UK Inbound Ground Transport",
  url: siteUrl,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UK & Ireland Group Ground Transport",
  provider: {
    "@type": "Organization",
    name: "UK Inbound Ground Transport",
    url: siteUrl,
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Ireland" },
  ],
  serviceType:
    "Group ground transport for tour operators, DMCs and travel planners",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with individual travellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are positioned for tour operators, DMCs and travel planners managing structured programmes rather than individual bookings.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support UK and Ireland programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support multi-region programmes across England, Scotland and Ireland with consistent delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle fixed-departure touring series?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support structured, repeatable touring programmes with consistent routing and operational coordination.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide vehicles only or full coordination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our focus is programme delivery, aligning vehicles, routing and timing with the wider itinerary.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners. Fixed-departure touring, private groups, cruise port support, London movements and multi-region programmes across England, Scotland and Ireland.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "UK Inbound Ground Transport | Premium UK & Ireland Touring Support",
    description:
      "Programme-led transport support across England, Scotland and Ireland for tour operators, DMCs and travel planners.",
    url: siteUrl,
    siteName: "UK Inbound Ground Transport",
    locale: "en_GB",
    type: "website",
  },
};

const supportItems = [
  "Fixed-departure touring series",
  "Private group itineraries",
  "Cruise port support",
  "London arrivals, departures and events",
  "England, Scotland and Ireland programmes",
  "Multi-region UK & Ireland touring",
];

const markets = [
  {
    title: "United States",
    href: "/markets/usa",
    text: "Supporting US-based tour operators and travel planners delivering structured UK and Ireland programmes.",
  },
  {
    title: "Europe",
    href: "/markets/europe",
    text: "Working with European partners managing inbound programmes requiring reliable, multi-region coordination.",
  },
  {
    title: "China",
    href: "/markets/china",
    text: "Supporting Chinese outbound travel specialists with structured touring logistics and programme delivery.",
  },
  {
    title: "India",
    href: "/markets/india",
    text: "Working with Indian travel companies delivering premium UK and Ireland itineraries with clear operational flow.",
  },
];

const regionCards = [
  {
    title: "England heritage touring",
    href: "/england-touring",
    text: "London, Oxford, Bath, Cambridge, York and the Lake District remain central to classic Britain itineraries.",
  },
  {
    title: "Scotland programmes",
    href: "/scotland-programmes",
    text: "Edinburgh, Glasgow, Loch Ness and the Highlands require realistic daily planning and operational awareness.",
  },
  {
    title: "Ireland touring circuits",
    href: "/ireland-touring",
    text: "Dublin, Galway, Killarney and the Cliffs of Moher continue to feature strongly in Ireland touring routes.",
  },
  {
    title: "Cruise port support",
    href: "/services",
    text: "Transport coordination for cruise-related arrivals, departures, shore-side touring and onward programme movements.",
  },
];

const planningCards = [
  {
    title: "Fixed-departure touring",
    href: "/programmes",
    text: "Structured, repeatable programme delivery across scheduled series.",
  },
  {
    title: "Private group itineraries",
    href: "/programmes",
    text: "Flexible transport support aligned to tailored programme flow.",
  },
  {
    title: "UK & Ireland touring",
    href: "/programmes",
    text: "Multi-region routing across England, Scotland and Ireland.",
  },
  {
    title: "Cruise port movements",
    href: "/services",
    text: "Arrival, departure and shore-side transport coordination.",
  },
];

const faqs = [
  {
    q: "Do you work with individual travellers?",
    a: "We are positioned for tour operators, DMCs and travel planners managing structured programmes rather than individual bookings.",
  },
  {
    q: "Can you support UK and Ireland programmes?",
    a: "Yes. We support multi-region programmes across England, Scotland and Ireland with consistent delivery.",
  },
  {
    q: "Do you handle fixed-departure touring series?",
    a: "We support structured, repeatable touring programmes with consistent routing and operational coordination.",
  },
  {
    q: "Do you provide vehicles only or full coordination?",
    a: "Our focus is programme delivery, aligning vehicles, routing and timing with the wider itinerary.",
  },
];

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            websiteSchema,
            serviceSchema,
            faqSchema,
          ]),
        }}
      />

      <section style={heroSection}>
        <div style={containerWide}>
          <div style={heroShell}>
            <div style={heroGrid} className="hero-grid">
              <div style={heroContent}>
                <p style={eyebrow}>UK inbound ground transport</p>

                <h1 style={heroTitle}>
                  Premium UK &amp; Ireland transport for tour operators, DMCs
                  and travel planners.
                </h1>

                <div style={divider} />

                <p style={heroText}>
                  Structured delivery for Heathrow arrivals, cruise movements,
                  London operations and multi-region touring across England,
                  Scotland and Ireland.
                </p>

                <p style={heroSubText}>
                  Built for professional travel buyers managing structured
                  programmes, premium itineraries and commercially sensitive
                  delivery.
                </p>

                <div style={heroActions}>
                  <a href="/contact" style={primaryButton}>
                    Request programme support
                  </a>
                  <a href="/heathrow-group-transfers" style={secondaryLink}>
                    Heathrow transfers →
                  </a>
                </div>

                <div style={heroMiniPoints}>
                  <span style={heroMiniPill}>England • Scotland • Ireland</span>
                  <span style={heroMiniPill}>
                    Airports • Cruise ports • Touring
                  </span>
                  <span style={heroMiniPill}>
                    Tour operators • DMCs • Planners
                  </span>
                </div>
              </div>

              <div style={heroVisualStack}>
                <div style={heroImageFrame} className="hero-image premium-card">
                  <img
                    src="/hero-coach.png"
                    alt="Luxury UK touring coach"
                    style={heroImage}
                  />
                  <div style={heroImageOverlay} />
                </div>

                <div style={heroFloatingCard} className="premium-card">
                  <p style={floatingEyebrow}>Operational focus</p>

                  <div style={floatingGrid}>
                    <div>
                      <p style={floatingValue}>Gateway</p>
                      <p style={floatingLabel}>
                        Heathrow • Gatwick • Manchester
                      </p>
                    </div>

                    <div>
                      <p style={floatingValue}>Cruise</p>
                      <p style={floatingLabel}>
                        Southampton • Dover • Liverpool
                      </p>
                    </div>

                    <div>
                      <p style={floatingValue}>Coverage</p>
                      <p style={floatingLabel}>
                        England • Scotland • Ireland
                      </p>
                    </div>

                    <div>
                      <p style={floatingValue}>Programmes</p>
                      <p style={floatingLabel}>
                        Series • Private groups • Cruise-linked touring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={proofStrip}>
            <span style={proofItem}>UK &amp; Ireland coverage</span>
            <span style={proofItem}>Airport &amp; cruise coordination</span>
            <span style={proofItem}>Built for tour operators &amp; DMCs</span>
            <span style={proofItem}>Structured programme delivery</span>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Key gateways</p>
              <h2 style={sectionTitle}>
                Major UK &amp; Ireland arrival points we regularly support.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We support airport arrivals, cruise terminal movements and
                onward touring across the UK and Ireland, aligning transport
                with programme flow from the first point of entry.
              </p>

              <div style={heroActions}>
                <a href="/heathrow-group-transfers" style={secondaryLink}>
                  Heathrow group transfers →
                </a>
                <a href="/southampton-cruise-transfers" style={secondaryLink}>
                  Southampton cruise transfers →
                </a>
              </div>
            </div>
          </div>

          <div style={gatewayEditorialGrid} className="gateway-grid">
            <div style={gatewayEditorialCard} className="premium-card">
              <div style={gatewayAccent} />
              <p style={gatewayHeading}>Airports</p>

              <div style={gatewayRichList}>
                <div style={gatewayRichItem}>
                  <a
                    href="/heathrow-group-transfers"
                    style={{ textDecoration: "none" }}
                  >
                    <p style={gatewayName}>London Heathrow</p>
                    <p style={gatewayMeta}>
                      Group airport transfers, arrivals coordination and UK
                      touring departures →
                    </p>
                  </a>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>London Gatwick</p>
                  <p style={gatewayMeta}>London access and touring starts</p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Manchester</p>
                  <p style={gatewayMeta}>Northern England programme access</p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Edinburgh</p>
                  <p style={gatewayMeta}>Scotland arrivals and touring flow</p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Glasgow</p>
                  <p style={gatewayMeta}>West Scotland routing and arrivals</p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Dublin</p>
                  <p style={gatewayMeta}>Ireland gateway and onward touring</p>
                </div>
              </div>
            </div>

            <div style={gatewayEditorialCard} className="premium-card">
              <div style={gatewayAccent} />
              <p style={gatewayHeading}>Cruise ports</p>

              <div style={gatewayRichList}>
                <div style={gatewayRichItem}>
                  <a
                    href="/southampton-cruise-transfers"
                    style={{ textDecoration: "none" }}
                  >
                    <p style={gatewayName}>Southampton Cruise Terminal</p>
                    <p style={gatewayMeta}>
                      Turnaround logistics, pre and post-cruise touring and
                      onward transfers →
                    </p>
                  </a>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Dover</p>
                  <p style={gatewayMeta}>South East access and cruise touring</p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Liverpool</p>
                  <p style={gatewayMeta}>
                    Northern England and regional touring
                  </p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Greenock</p>
                  <p style={gatewayMeta}>
                    Scotland cruise arrivals and shore touring
                  </p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Belfast</p>
                  <p style={gatewayMeta}>
                    Ireland and Northern Ireland routing
                  </p>
                </div>

                <div style={gatewayRichItem}>
                  <p style={gatewayName}>Cobh</p>
                  <p style={gatewayMeta}>
                    Southern Ireland cruise-linked touring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>What we support</p>
              <h2 style={sectionTitle}>
                Programme-led transport aligned to the rhythm of touring.
              </h2>
            </div>

            <div style={supportGrid}>
              {supportItems.map((item) => (
                <div key={item} style={supportItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={sectionTint}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Why operators work with us</p>
              <h2 style={sectionTitle}>
                Built for programmes that need calm delivery and commercial
                clarity.
              </h2>
              <div style={luxuryRule} />
              <p style={sectionText}>
                We support travel professionals who need transport delivery to
                feel structured, dependable and well judged across the full
                itinerary, from gateway arrival through to regional touring and
                final departure.
              </p>

              <div style={heroActions}>
                <a href="/dmc-transport-uk" style={secondaryLink}>
                  DMC transport UK →
                </a>
                <a href="/uk-ireland-touring" style={secondaryLink}>
                  UK &amp; Ireland touring →
                </a>
              </div>
            </div>

            <div style={planningGrid} className="feature-grid">
              <article style={planningCard} className="premium-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>Programme-first approach</h3>
                <p style={cardText}>
                  Transport aligned to itinerary flow, hotel positioning and
                  realistic regional transitions.
                </p>
              </article>

              <article style={planningCard} className="premium-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>Multi-region coordination</h3>
                <p style={cardText}>
                  England, Scotland and Ireland delivered as one coherent
                  programme rather than disconnected movements.
                </p>
              </article>

              <article style={planningCard} className="premium-card">
                <div style={cardAccent} />
                <h3 style={cardTitle}>Reliable delivery</h3>
                <p style={cardText}>
                  Built around timing discipline, clarity and consistent
                  execution for operators and guests.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Planning</p>
              <h2 style={sectionTitle}>
                What type of programme are you planning?
              </h2>
              <p style={sectionText}>
                Select the structure closest to your requirement and explore the
                relevant support model.
              </p>

              <div style={heroActions}>
                <a href="/coach-hire-uk" style={secondaryLink}>
                  Coach hire UK →
                </a>
                <a href="/tour-operator-transport-uk" style={secondaryLink}>
                  Tour operator transport UK →
                </a>
              </div>
            </div>

            <div style={planningGrid} className="feature-grid">
              {planningCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={planningCard}
                  className="premium-card"
                >
                  <div style={cardTopRow}>
                    <h3 style={cardTitle}>{item.title}</h3>
                    <span style={cardArrow}>→</span>
                  </div>
                  <p style={cardText}>{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>International markets</p>
              <h2 style={sectionTitle}>
                Supporting international partners across key inbound markets.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We work with tour operators, DMCs and travel planners globally,
                supporting inbound UK and Ireland programmes from major source
                markets including the United States, Europe, China and India.
              </p>

              <div style={heroActions}>
                <a href="/markets/usa" style={secondaryLink}>
                  USA market →
                </a>
                <a href="/markets/china" style={secondaryLink}>
                  China market →
                </a>
              </div>
            </div>
          </div>

          <div style={marketsGrid}>
            {markets.map((market) => (
              <a
                key={market.title}
                href={market.href}
                style={marketCard}
                className="premium-card"
              >
                <div style={cardTopRow}>
                  <h3 style={cardTitle}>{market.title}</h3>
                  <span style={cardArrow}>→</span>
                </div>
                <p style={cardText}>{market.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Touring regions</p>
              <h2 style={sectionTitle}>
                Established programme structures across England, Scotland and
                Ireland.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                Our work supports touring structures used by international
                operators, from gateway arrivals and regional transitions to
                broader multi-stop itineraries.
              </p>
            </div>
          </div>

          <div style={regionsGrid} className="feature-grid">
            {regionCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                style={regionCard}
                className="premium-card"
              >
                <div style={cardAccent} />
                <div style={cardTopRow}>
                  <h3 style={cardTitle}>{item.title}</h3>
                  <span style={cardArrow}>→</span>
                </div>
                <p style={cardText}>{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={containerWide}>
          <div style={sectionSplit} className="split-grid">
            <div>
              <p style={sectionLabel}>Programme structure</p>
              <h2 style={sectionTitle}>
                Typical touring routes and itinerary flow.
              </h2>
            </div>

            <div>
              <p style={sectionText}>
                We support established programme structures used by
                international operators across England, Scotland and Ireland,
                from gateway arrivals and regional routing to multi-stop
                programme delivery.
              </p>

              <div style={editorialPanel} className="premium-card">
                <p style={panelEyebrow}>Example England itinerary</p>
                <p style={panelText}>
                  London arrivals, Oxford, Bath, Cambridge, York and the Lake
                  District remain central to many England touring programmes.
                </p>
                <a href="/england-touring" style={panelLink}>
                  View example programme →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionSoft}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Frequently asked questions</p>
          <h2 style={sectionTitle}>
            Common questions from operators and planners.
          </h2>

          <div style={faqList}>
            {faqs.map((faq) => (
              <details key={faq.q} style={faqItem}>
                <summary style={faqQuestion}>
                  <span>{faq.q}</span>
                  <span style={faqPlus}>+</span>
                </summary>
                <p style={faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={leadSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Programme enquiry</p>
          <h2 style={sectionTitle}>
            Tell us about your programme requirements.
          </h2>

          <p style={sectionText}>
            Share your itinerary, group size and travel dates. We respond with a
            clear, commercially structured transport plan aligned to your
            programme.
          </p>

          <div style={leadIntroBar}>
            <span style={leadIntroPill}>Tour operators</span>
            <span style={leadIntroPill}>DMCs</span>
            <span style={leadIntroPill}>Travel planners</span>
            <span style={leadIntroNote}>
              Structured responses for professional travel buyers.
            </span>
          </div>

          <div style={heroActions}>
            <a href="/dmc-transport-uk" style={secondaryLink}>
              DMC transport UK →
            </a>
            <a href="/coach-hire-uk" style={secondaryLink}>
              Coach hire UK →
            </a>
          </div>

          <ProgrammeEnquiryForm />
        </div>
      </section>

      <section style={ctaSection}>
        <div style={containerNarrow}>
          <p style={sectionLabel}>Start a conversation</p>
          <h2 style={ctaTitle}>Planning a UK or Ireland programme?</h2>
          <p style={sectionText}>
            Tell us your routing, timings and group size. We’ll structure the
            transport around your programme.
          </p>

          <div style={heroActions}>
            <a href="/contact" style={primaryButton}>
              Contact us
            </a>
            <a href="/coach-hire-uk" style={secondaryLink}>
              Coach hire UK →
            </a>
            <a href="/services" style={secondaryLink}>
              View services →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const containerWide: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 28px",
};

const containerNarrow: CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "0 24px",
};

const heroSection: CSSProperties = {
  padding: "46px 0 78px",
  background:
    "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 52%, #FFFFFF 100%)",
};

const section: CSSProperties = {
  padding: "100px 0",
};

const sectionSoft: CSSProperties = {
  padding: "94px 0",
  background: "linear-gradient(180deg, #F8FAFC 0%, #EEF3F7 100%)",
};

const sectionTint: CSSProperties = {
  padding: "94px 0",
  background: "linear-gradient(180deg, #F2F5F9 0%, #E8EEF4 100%)",
};

const leadSection: CSSProperties = {
  padding: "100px 0",
  background: "linear-gradient(180deg, #F6F8FB 0%, #EDF2F6 100%)",
};

const ctaSection: CSSProperties = {
  padding: "90px 0 48px",
};

const heroShell: CSSProperties = {
  paddingTop: 10,
};

const heroGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 34,
  alignItems: "center",
};

const heroContent: CSSProperties = {
  position: "relative",
};

const heroVisualStack: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const heroImageFrame: CSSProperties = {
  position: "relative",
  minHeight: 320,
  borderRadius: 28,
  overflow: "hidden",
  boxShadow: "0 24px 60px rgba(18, 36, 56, 0.14)",
  border: "1px solid rgba(18, 36, 56, 0.08)",
};

const heroImage: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: 320,
  objectFit: "cover",
};

const heroImageOverlay: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(10,29,48,0.04) 0%, rgba(10,29,48,0.34) 100%)",
};

const heroFloatingCard: CSSProperties = {
  position: "relative",
  marginTop: -42,
  marginLeft: "auto",
  width: "min(92%, 420px)",
  padding: "24px",
  borderRadius: 24,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 18px 40px rgba(18, 36, 56, 0.10)",
};

const proofStrip: CSSProperties = {
  marginTop: 28,
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
};

const proofItem: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#E8EEF4",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.76)",
};

const sectionSplit: CSSProperties = {
  display: "grid",
  gap: 42,
  alignItems: "start",
};

const eyebrow: CSSProperties = {
  margin: 0,
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.52)",
};

const sectionLabel: CSSProperties = {
  margin: "0 0 12px",
  fontSize: 11,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.52)",
};

const heroTitle: CSSProperties = {
  margin: "12px 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2.2rem, 5.8vw, 4.8rem)",
  lineHeight: 1.03,
  letterSpacing: "-0.04em",
  fontWeight: 700,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const sectionTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 780,
  fontSize: "clamp(2rem, 4vw, 3.6rem)",
  lineHeight: 1.04,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const ctaTitle: CSSProperties = {
  margin: "0 0 18px",
  maxWidth: 760,
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  lineHeight: 1.05,
  letterSpacing: "-0.03em",
  fontWeight: 650,
  fontFamily: "var(--font-sans)",
  color: "#10263C",
};

const divider: CSSProperties = {
  width: 64,
  height: 3,
  margin: "18px 0 26px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
};

const luxuryRule: CSSProperties = {
  width: 80,
  height: 2,
  margin: "20px 0 24px",
  borderRadius: 999,
  background: "linear-gradient(90deg, #5B7C99 0%, rgba(91,124,153,0.18) 100%)",
};

const heroText: CSSProperties = {
  margin: 0,
  maxWidth: 680,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(18, 36, 56, 0.78)",
};

const heroSubText: CSSProperties = {
  margin: "14px 0 0",
  maxWidth: 620,
  fontSize: 13,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.58)",
};

const sectionText: CSSProperties = {
  margin: 0,
  maxWidth: 700,
  fontSize: 17,
  lineHeight: 1.9,
  color: "rgba(18, 36, 56, 0.74)",
};

const heroActions: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 14,
  flexWrap: "wrap",
  alignItems: "center",
};

const primaryButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 54,
  padding: "0 24px",
  borderRadius: 999,
  background: "#10263C",
  color: "#FFFFFF",
  textDecoration: "none",
  fontWeight: 600,
  border: "1px solid rgba(16,38,60,0.10)",
  boxShadow: "0 10px 24px rgba(16,38,60,0.16)",
};

const secondaryLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  paddingBottom: 2,
  borderBottom: "1px solid rgba(91,124,153,0.34)",
};

const heroMiniPoints: CSSProperties = {
  marginTop: 20,
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
};

const heroMiniPill: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#EAF0F5",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.74)",
};

const floatingEyebrow: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.48)",
};

const floatingGrid: CSSProperties = {
  display: "grid",
  gap: 14,
};

const floatingValue: CSSProperties = {
  margin: "0 0 4px",
  fontSize: 18,
  lineHeight: 1.2,
  color: "#10263C",
  fontWeight: 700,
};

const floatingLabel: CSSProperties = {
  margin: 0,
  fontSize: 14,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.66)",
};

const gatewayEditorialGrid: CSSProperties = {
  marginTop: 42,
  display: "grid",
  gap: 28,
};

const gatewayEditorialCard: CSSProperties = {
  display: "grid",
  gap: 18,
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 32px rgba(18, 36, 56, 0.06)",
};

const gatewayAccent: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
};

const gatewayHeading: CSSProperties = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18,36,56,0.5)",
};

const gatewayRichList: CSSProperties = {
  display: "grid",
  gap: 16,
};

const gatewayRichItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
};

const gatewayName: CSSProperties = {
  margin: "0 0 4px",
  fontSize: 22,
  lineHeight: 1.25,
  color: "#10263C",
  fontWeight: 700,
};

const gatewayMeta: CSSProperties = {
  margin: 0,
  fontSize: 14,
  lineHeight: 1.7,
  color: "rgba(18,36,56,0.64)",
};

const supportGrid: CSSProperties = {
  display: "grid",
  gap: 18,
};

const supportItem: CSSProperties = {
  paddingBottom: 14,
  borderBottom: "1px solid rgba(18,36,56,0.08)",
  fontSize: 20,
  lineHeight: 1.5,
  color: "#10263C",
};

const planningGrid: CSSProperties = {
  display: "grid",
  gap: 24,
};

const marketsGrid: CSSProperties = {
  marginTop: 48,
  display: "grid",
  gap: 24,
};

const regionsGrid: CSSProperties = {
  marginTop: 48,
  display: "grid",
  gap: 24,
};

const planningCard: CSSProperties = {
  display: "block",
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  textDecoration: "none",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const marketCard: CSSProperties = {
  display: "block",
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  textDecoration: "none",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const regionCard: CSSProperties = {
  display: "block",
  padding: "28px",
  borderRadius: 26,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  textDecoration: "none",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const cardAccent: CSSProperties = {
  width: 48,
  height: 3,
  borderRadius: 999,
  marginBottom: 16,
  background: "linear-gradient(90deg, #5B7C99 0%, #94AFC5 100%)",
};

const cardTopRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 18,
  marginBottom: 10,
};

const cardTitle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  fontWeight: 700,
  color: "#10263C",
  flex: 1,
};

const cardText: CSSProperties = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.85,
  color: "rgba(18, 36, 56, 0.72)",
};

const cardArrow: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "#5B7C99",
  paddingTop: 4,
};

const editorialPanel: CSSProperties = {
  marginTop: 34,
  padding: "30px 28px",
  borderRadius: 28,
  background: "#FFFFFF",
  border: "1px solid rgba(18, 36, 56, 0.08)",
  boxShadow: "0 12px 28px rgba(18, 36, 56, 0.05)",
};

const panelEyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontSize: 12,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(18, 36, 56, 0.5)",
};

const panelText: CSSProperties = {
  margin: "0 0 14px",
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(18, 36, 56, 0.72)",
};

const panelLink: CSSProperties = {
  textDecoration: "none",
  color: "#10263C",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

const faqList: CSSProperties = {
  marginTop: 32,
  display: "grid",
  gap: 16,
};

const faqItem: CSSProperties = {
  padding: "0 0 16px",
  borderBottom: "1px solid rgba(18, 36, 56, 0.08)",
};

const faqQuestion: CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  color: "#10263C",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  padding: "4px 0",
};

const faqPlus: CSSProperties = {
  fontSize: 22,
  lineHeight: 1,
  color: "#5B7C99",
  fontWeight: 500,
};

const faqAnswer: CSSProperties = {
  marginTop: 8,
  fontSize: 15,
  lineHeight: 1.7,
  color: "rgba(18, 36, 56, 0.72)",
};

const leadIntroBar: CSSProperties = {
  marginTop: 28,
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  alignItems: "center",
};

const leadIntroPill: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 34,
  padding: "0 12px",
  borderRadius: 999,
  background: "#EAF0F5",
  border: "1px solid rgba(18,36,56,0.08)",
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.72)",
};

const leadIntroNote: CSSProperties = {
  fontSize: 13,
  color: "rgba(18, 36, 56, 0.62)",
};
