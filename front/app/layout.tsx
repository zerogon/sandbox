import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linear Theme Demo",
  description: "Component library based on Linear design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
