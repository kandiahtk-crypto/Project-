import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Cruise Shore Excursions from Southampton",
  description: "Request private shore excursion transport from Southampton for cruise travel advisers, tour operators and DMCs. Ask for a tailored quote for groups of 4–16.",
  alternates: { canonical: "/private-cruise-shore-excursions" },
};

const quoteUrl = "/request-a-quote/?service=Cruise%20movement";

export default function PrivateCruiseShoreExcursions() {
  return (
    <article style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(24px, 5vw, 72px) clamp(16px, 4vw, 44px)" }}>
      <header style={{ background: "#214b49", color: "#fbfaf3", borderRadius: 20, padding: "clamp(24px, 5vw, 56px)" }}>
        <p style={{ color: "#e5d2ab", fontWeight: 700 }}>Southampton · Private groups of 4–16</p>
        <h1 style={{ color: "inherit", fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: 1.1, margin: "12px 0 18px" }}>Private cruise shore excursions</h1>
        <p style={{ maxWidth: "60ch", lineHeight: 1.7 }}>Private, same-day shore transport for cruise travel advisers, tour operators and DMCs. We plan the route, vehicle and terminal return around your ship’s all-aboard time.</p>
        <a href={quoteUrl} style={{ display: "inline-block", marginTop: 16, padding: "12px 20px", borderRadius: 8, background: "#fbfaf3", color: "#214b49", fontWeight: 700 }}>Request a trade quote</a>
      </header>

      <section aria-labelledby="sample-route" style={{ marginTop: 40 }}>
        <h2 id="sample-route">Sample route · Winchester &amp; the New Forest</h2>
        <p>The route can be shortened to Winchester only for a tighter port call. We confirm the meeting point, vehicle and itinerary for each sailing.</p>
        <ol style={{ paddingInlineStart: "1.4em", lineHeight: 1.8 }}>
          <li>Meet your private vehicle at the agreed Southampton cruise terminal pickup point.</li>
          <li>Visit Winchester, with time in the historic centre or an optional cathedral visit.</li>
          <li>Continue into the New Forest for a village stop if the ship’s schedule allows.</li>
          <li>Return to the terminal with a planned buffer before the all-aboard time.</li>
        </ol>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20, marginTop: 32 }}>
        <section aria-labelledby="scope" style={{ padding: 24, borderRadius: 12, border: "1px solid #d4dfd3", background: "#fff" }}>
          <h2 id="scope">What we quote</h2>
          <p>Private vehicle and driver, terminal pickup and return, and transport for the agreed route. Ask about separate guide or admission costs. Vehicle availability, pricing and missed-port terms are confirmed with the quote.</p>
        </section>
        <section aria-labelledby="brief" style={{ padding: 24, borderRadius: 12, border: "1px solid #d4dfd3", background: "#fff" }}>
          <h2 id="brief">What to send us</h2>
          <p>Share the ship name, port-call date, passenger count, terminal if known, and arrival and all-aboard times. Add any accessibility needs and preferred stops to the programme outline.</p>
          <a href={quoteUrl} style={{ fontWeight: 700, textDecoration: "underline" }}>Send a cruise enquiry</a>
        </section>
      </div>
      <p style={{ marginTop: 32 }}>Need transport before or after the cruise? <a href="/services/cruise-transfers/" style={{ fontWeight: 700, textDecoration: "underline" }}>Explore cruise and port transfers</a>.</p>
    </article>
  );
}
