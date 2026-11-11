import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
