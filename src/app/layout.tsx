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
        <main style={{ paddingTop: "90px" }}>{children}</main>
      </body>
    </html>
  );
}
