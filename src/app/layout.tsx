import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
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
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body
        style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          background: "#FFFFFF",
          color: "#0B1A2B",
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
      </body>
    </html>
  );
}
