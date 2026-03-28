import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ukinboundgroundtransport.com"),
  title: {
    default: "UK Inbound Ground Transport",
    template: "%s | UK Inbound Ground Transport",
  },
  description:
    "Premium UK & Ireland ground transport for tour operators, DMCs and travel planners.",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10263C",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body
        style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          background: "#FFFFFF",
          color: "#10263C",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SiteHeader />
          <main style={{ flex: 1 }}>{children}</main>
          <SiteFooter />
        </div>

        <a
          href="https://wa.me/447957776778?text=Hello%20UK%20Inbound%20Ground%20Transport%20%E2%80%94%20I%20need%20help%20with%20a%20movement."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: "fixed",
            right: "18px",
            bottom: "18px",
            zIndex: 120,
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            minHeight: "56px",
            padding: "0 18px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #25D366 0%, #1EBE5B 100%)",
            color: "#FFFFFF",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "15px",
            boxShadow: "0 14px 34px rgba(0,0,0,0.18)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.16)",
              fontSize: "15px",
              lineHeight: 1,
            }}
          >
            💬
          </span>
          WhatsApp
        </a>
      </body>
    </html>
  );
}
