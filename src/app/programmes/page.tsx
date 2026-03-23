import type { CSSProperties } from "react";
import SiteHeader from "../../components/SiteHeader";

export default function ProgrammesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section style={hero}>
          <div style={container}>
            <p style={eyebrow}>Programmes</p>

            <h1 style={title}>
              Programme-led transport support across the UK & Ireland.
            </h1>
          </div>
        </section>

        <section style={section}>
          <div style={containerNarrow}>
            <h2 style={heading}>Fixed-departure series</h2>
            <p style={text}>
              Consistent, repeatable transport delivery across scheduled touring
              departures.
            </p>

            <h2 style={heading}>Private group touring</h2>
            <p style={text}>
              Tailored programme support for private itineraries requiring
              flexibility and coordination.
            </p>

            <h2 style={heading}>Multi-region UK touring</h2>
            <p style={text}>
              Structured routing across England, Scotland and Wales.
            </p>

            <h2 style={heading}>UK & Ireland programmes</h2>
            <p style={text}>
              Cross-country touring with consistent delivery across borders.
            </p>
          </div>
        </section>

        <section style={ctaSection}>
          <div style={container}>
