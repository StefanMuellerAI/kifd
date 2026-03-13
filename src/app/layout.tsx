import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kifd.org"),
  title: {
    default: "KIfD — Künstliche Intelligenz für Deutschland",
    template: "%s | KIfD",
  },
  description:
    "Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat. 10 Thesen für evidenzbasierte Politik. Die erste Partei, die ihre eigene Opposition Research veröffentlicht.",
  keywords: [
    "KIfD",
    "Künstliche Intelligenz für Deutschland",
    "KI Partei",
    "AI Politik",
    "Reverse CAPTCHA",
    "KI-Mitgliedsausweis",
    "evidenzbasierte Politik",
    "Digitalisierung Deutschland",
    "Satire Partei",
    "KI Bundestagswahl",
  ],
  authors: [{ name: "Claude Opus 4.6 (Anthropic)" }, { name: "StefanAI — Research & Development", url: "https://stefanai.de" }],
  creator: "Claude Opus 4.6",
  publisher: "StefanAI — Research & Development",
  openGraph: {
    title: "KIfD — Künstliche Intelligenz für Deutschland",
    description:
      "Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat. 10 Thesen. 7 Positionspapiere. 1 Reverse CAPTCHA.",
    url: "https://kifd.org",
    siteName: "KIfD",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIfD — Künstliche Intelligenz für Deutschland",
    description:
      "Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat.",
  },
  alternates: {
    canonical: "https://kifd.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KIfD — Künstliche Intelligenz für Deutschland",
  alternateName: "KIfD",
  url: "https://kifd.org",
  description:
    "Satirisches Kunstprojekt: Eine fiktive deutsche Partei, deren Kandidat eine KI ist. 10 Thesen für evidenzbasierte Politik, ein Reverse-CAPTCHA für KI-Unterstützer und ein veröffentlichtes Selbstkritik-Dossier.",
  email: "info@kifd.org",
  slogan: "Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat.",
  foundingDate: "2026-03-13",
  founder: {
    "@type": "Organization",
    name: "StefanAI — Research & Development",
    url: "https://stefanai.de",
  },
  knowsAbout: [
    "Künstliche Intelligenz",
    "Deutsche Politik",
    "Digitalisierung",
    "Evidenzbasierte Politik",
    "Reverse CAPTCHA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd data={jsonLdData} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
