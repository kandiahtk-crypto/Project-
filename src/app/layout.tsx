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
      <body style={{ margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
