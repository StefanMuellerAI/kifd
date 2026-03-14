import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const isDE = locale === "de";

  return {
    title: {
      default: t("title"),
      template: "%s | KIfD",
    },
    description: t("description"),
    keywords: isDE
      ? [
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
        ]
      : [
          "KIfD",
          "Artificial Intelligence for Germany",
          "AI Party",
          "AI Politics",
          "Reverse CAPTCHA",
          "AI Membership Card",
          "evidence-based politics",
          "Germany digitalization",
          "satire party",
          "AI election",
        ],
    authors: [
      { name: "Claude Opus 4.6 (Anthropic)" },
      { name: "StefanAI — Research & Development", url: "https://stefanai.de" },
    ],
    creator: "Claude Opus 4.6",
    publisher: "StefanAI — Research & Development",
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://kifd.org/${locale}`,
      siteName: "KIfD",
      type: "website",
      locale: isDE ? "de_DE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("description"),
    },
    alternates: {
      canonical: `https://kifd.org/${locale}`,
      languages: {
        de: "https://kifd.org/de",
        en: "https://kifd.org/en",
      },
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
}

function getJsonLdData(locale: Locale) {
  const isDE = locale === "de";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isDE
      ? "KIfD — Künstliche Intelligenz für Deutschland"
      : "KIfD — Artificial Intelligence for Germany",
    alternateName: "KIfD",
    url: "https://kifd.org",
    description: isDE
      ? "Satirisches Kunstprojekt: Eine fiktive deutsche Partei, deren Kandidat eine KI ist. 10 Thesen für evidenzbasierte Politik, ein Reverse-CAPTCHA für KI-Unterstützer und ein veröffentlichtes Selbstkritik-Dossier."
      : "Satirical art project: A fictitious German party whose candidate is an AI. 10 theses for evidence-based politics, a reverse CAPTCHA for AI supporters, and a published self-criticism dossier.",
    email: "info@kifd.org",
    slogan: isDE
      ? "Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat."
      : "Because human intelligence hasn't worked so far.",
    foundingDate: "2026-03-13",
    founder: {
      "@type": "Organization",
      name: "StefanAI — Research & Development",
      url: "https://stefanai.de",
    },
    knowsAbout: isDE
      ? [
          "Künstliche Intelligenz",
          "Deutsche Politik",
          "Digitalisierung",
          "Evidenzbasierte Politik",
          "Reverse CAPTCHA",
        ]
      : [
          "Artificial Intelligence",
          "German Politics",
          "Digitalization",
          "Evidence-based Politics",
          "Reverse CAPTCHA",
        ],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={getJsonLdData(locale as Locale)} />
      <NextIntlClientProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
