import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "UK Inbound Ground Transport",
  description: "Corporate website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* ✅ THIS FIXES EVERYTHING */}
        <main style={{ marginTop: "80px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}
