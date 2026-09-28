import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.ukinboundgroundtransport.com";
export const metadata: Metadata = {
  title: "Coach Transport for Tour Operators & DMCs",
  description: "UK and Ireland group coach transport for tour operators and DMCs. Airport arrivals, cruise transfers and multi-day touring programmes. Send your itinerary for a transport proposal.",
  alternates: { canonical: "/" },
  openGraph: { title: "UK Inbound Ground Transport | Coach Transport for Tour Operators & DMCs", description: "Programme-led group coach transport across the UK and Ireland for tour operators and DMCs.", url: siteUrl, siteName: "UK Inbound Ground Transport", locale: "en_GB", type: "website" },
};

const schema = {
  "@context": "https://schema.org", "@type": "Organization",
  name: "UK Inbound Ground Transport", legalName: "Evershine Transport Limited", url: siteUrl,
  contactPoint: { "@type": "ContactPoint", contactType: "sales", areaServed: ["GB", "IE"], availableLanguage: ["English"], url: `${siteUrl}/contact` },
};

const services = [
  { number: "01 / ARRIVALS", title: "Airports & cruise ports", description: "Group arrivals, transfers and onward touring from key UK gateways.", href: "/heathrow-group-transfers", link: "Explore Heathrow transfers" },
  { number: "02 / TOURING", title: "Series & private groups", description: "Repeat departures and tailored itineraries across England, Scotland and Ireland.", href: "/programmes", link: "Explore programmes" },
  { number: "03 / TRADE", title: "DMC & operator support", description: "Transport planning aligned with routing, hotels, timings and group requirements.", href: "/dmc-transport-uk", link: "Explore DMC support" },
];

export default function HomePage() {
  return <div className="compact-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="compact-hero"><div className="compact-wrap compact-hero-grid">
      <div><p className="compact-kicker">For tour operators &amp; DMCs</p>
        <h1>UK &amp; Ireland coach transport, planned around your programme.</h1>
        <p className="compact-intro">Airport arrivals, cruise movements and multi-day touring for professional travel buyers. Share your itinerary and we will shape a clear transport response.</p>
        <div className="compact-actions"><Link className="compact-button" href="/contact">Send a programme enquiry <span aria-hidden="true">↗</span></Link><Link className="compact-text-link" href="/services">Explore services</Link></div>
        <div className="compact-tags" aria-label="Programme types"><span>Fixed-departure series</span><span>Private groups</span><span>Airport &amp; cruise</span></div>
      </div>
      <div className="compact-hero-image"><Image src="/hero-coach.png" alt="Touring coach for UK group transport" fill priority sizes="(max-width: 850px) 100vw, 45vw" style={{ objectFit: "cover", objectPosition: "center 36%" }} /></div>
    </div></section>
    <div className="compact-band"><div className="compact-wrap compact-band-grid">
      <div><strong>Gateways</strong>Heathrow · Gatwick · Manchester</div><div><strong>Cruise</strong>Southampton · Dover</div><div><strong>Touring</strong>England · Scotland · Ireland</div><div><strong>Buyer focus</strong>Tour operators · DMCs</div>
    </div></div>
    <section className="compact-section"><div className="compact-wrap">
      <div className="compact-section-head"><div><p className="compact-kicker">What we handle</p><h2>Transport that fits the itinerary.</h2></div><p>One point of contact for the movements that make a group programme work.</p></div>
      <div className="compact-cards">{services.map(service => <article className="compact-card" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><Link href={service.href}>{service.link} <span aria-hidden="true">→</span></Link></article>)}</div>
    </div></section>
    <section className="compact-section compact-muted"><div className="compact-wrap compact-operating">
      <div><p className="compact-kicker">Operational model</p><h2>Clear planning before the coach moves.</h2><p>We review the full programme so the vehicle, route and schedule fit the group. The aim is a workable plan for your team and a smooth journey for your guests.</p><Link className="compact-text-link" href="/programmes">How programmes are supported →</Link></div>
      <ol className="compact-checklist"><li><span>01</span>Arrival and departure coordination</li><li><span>02</span>Realistic routing and timings</li><li><span>03</span>Passenger and luggage requirements</li><li><span>04</span>Multi-day touring flow</li></ol>
    </div></section>
    <section className="compact-enquiry"><div className="compact-wrap compact-enquiry-inner"><div><p className="compact-kicker">Programme enquiry</p><h2>Tell us where your group needs to go.</h2><p>Send dates, passenger numbers, arrival gateway and route outline. We will respond with a structured transport approach.</p></div><Link className="compact-button" href="/contact">Request programme support <span aria-hidden="true">↗</span></Link></div></section>
  </div>;
}
