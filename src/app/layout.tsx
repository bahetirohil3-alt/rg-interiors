import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravi Gupta Interior Designer | Architect - Premium Interior Design in Kota, Rajasthan",
  description:
    "Transform your spaces with Ravi Gupta Interiors - Premium interior design and architecture services for homes, offices and commercial spaces in Kota, Rajasthan. 4.9★ rated with 230+ happy clients.",
  keywords:
    "interior designer kota, architect kota, luxury interior design, home interior, office design, modular kitchen, Ravi Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
