import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

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
  title: "UK Inbound Ground Transport",
  description: "Premium UK & Ireland ground transport solutions.",
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
          color: "#07111F",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {children}
      </body>
    </html>
  );
}
