import type { Metadata } from "next";
import Syne from "next/font/local";
import localFont from "next/font/local";
import "./globals.css";

const montreal = localFont({
  src: [
    { path: "../fonts/montreal-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/montreal-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/montreal-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-montreal",
  display: "swap",
});

const syne = Syne({
  src: "../fonts/syne-700.woff2",
  variable: "--font-syne",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Branding & Web Design Agency London & NYC | Creative Agency",
  description: "A global branding agency and creative web design studio based in London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montreal.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
