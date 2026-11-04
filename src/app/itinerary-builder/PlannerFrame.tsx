"use client";

import { useEffect, useRef, useState } from "react";

export default function PlannerFrame() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(2200);

  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return;
      const data = event.data;
      if (data?.type === "ukigt-planner-height" && typeof data.height === "number" && Number.isFinite(data.height)) {
        setHeight(Math.max(600, Math.min(50000, Math.ceil(data.height) + 4)));
      }
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, []);

  return (
    <section aria-label="Trade itinerary builder" style={{ background: "#FFFFFF" }}>
      <iframe
        ref={frame}
        src="/ukigt-planner.html"
        title="UK Inbound Ground Transport itinerary builder"
        style={{ display: "block", width: "100%", height, border: 0, background: "#FFFFFF" }}
      />
      <noscript>
        <p style={{ padding: 24 }}>The interactive planner requires JavaScript. Email your itinerary to info@ukinboundgroundtransport.com for assistance.</p>
      </noscript>
    </section>
  );
}
