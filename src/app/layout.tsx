import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
