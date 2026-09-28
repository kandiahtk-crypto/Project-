import type { Metadata } from "next";
import { TradePage } from "../../components/TradePage";

export const metadata: Metadata = { title: "About", description: "Programme-led transport for tour operators and DMCs across the UK and Ireland.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <TradePage eyebrow="About us" title="A transport partner for the whole itinerary." intro="UK Inbound Ground Transport supports professional travel buyers with practical coach planning and coordinated delivery across the UK and Ireland." aside={<><span className="trade-aside-label">Who we work with</span><strong>Tour operators. DMCs. Group travel planners.</strong><p>Escorted series, private groups, gateway transfers and multi-region touring.</p></>} heading="A clear way to work together" cards={[
    { title: "Programme first", text: "We review the itinerary, driving times, access and luggage requirements before shaping the transport plan." },
    { title: "One point of coordination", text: "Clear communication from the first brief through allocation and on-tour delivery." },
    { title: "Built for repeat work", text: "A consistent approach for single movements, private departures and recurring touring series." }
  ]}>
    <section className="trade-section trade-section-soft"><div className="trade-container trade-split"><h2>Operational detail matters.</h2><p>Airport meeting points, cruise port timing, driver hours, vehicle capacity and realistic travel times all affect the guest experience. We bring these details into the conversation early, so your programme can be delivered with confidence.</p></div></section>
  </TradePage>;
}
