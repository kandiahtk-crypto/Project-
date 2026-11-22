import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./unified-site.css";
import "./rose-site.css";
import { Inter } from "next/font/google";

import SiteChrome from "../components/SiteChrome";


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
  themeColor: "#214b49",
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
          background: "#fbfaf3",
          color: "#214b49",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
