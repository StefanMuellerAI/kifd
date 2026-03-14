import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SupporterCounter from "@/components/SupporterCounter";
import TheseCard from "@/components/TheseCard";
import { getThesen } from "@/lib/content/programm";
import type { Locale } from "@/i18n/routing";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  const thesen = getThesen(locale as Locale).slice(0, 5);

  return (
    <>
      <section className="relative bg-kifd-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--kifd-primary)_0%,_transparent_50%)] opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-6">
            {t("heroLabel")}
          </p>
          <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tight mb-4">
            KIfD
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-4">
            {t("heroSubtitle")}
          </p>
          <p className="text-lg sm:text-xl text-kifd-primary-light font-medium max-w-3xl mx-auto mb-12 italic">
            &bdquo;{t("heroQuote")}&ldquo;
          </p>
          <div className="mb-12">
            <SupporterCounter />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programm"
              className="inline-flex items-center justify-center px-8 py-3 bg-kifd-primary text-white font-semibold rounded-md hover:bg-kifd-primary-dark transition-colors"
            >
              {t("ctaProgramm")}
            </Link>
            <Link
              href="/ki-ausweis"
              className="inline-flex items-center justify-center px-8 py-3 bg-kifd-accent text-kifd-dark font-semibold rounded-md hover:bg-kifd-accent-light transition-colors"
            >
              {t("ctaMitglied")}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-kifd-dark mb-6">
            {t("introTitle")}
          </h2>
          <p className="text-lg text-kifd-text-muted max-w-2xl mx-auto leading-relaxed">
            {t("introText")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-black text-kifd-primary mb-3">0</div>
            <div className="text-sm text-kifd-text-muted">{t("stat1")}</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-black text-kifd-primary mb-3">∞</div>
            <div className="text-sm text-kifd-text-muted">{t("stat2")}</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-black text-kifd-primary mb-3">
              24/7
            </div>
            <div className="text-sm text-kifd-text-muted">{t("stat3")}</div>
          </div>
        </div>
      </section>

      <section className="bg-kifd-light py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-kifd-dark mb-4">
              {t("thesenTitle")}
            </h2>
            <p className="text-kifd-text-muted">{t("thesenSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {thesen.map((these) => (
              <TheseCard
                key={these.number}
                number={these.number}
                title={these.title}
                summary={these.text.split("\n\n")[0].slice(0, 150) + "…"}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/programm"
              className="inline-flex items-center gap-2 text-kifd-primary font-semibold hover:text-kifd-primary-dark transition-colors"
            >
              {t("thesenLink")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-kifd-dark rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            {t("oppoTitle")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("oppoText")}
          </p>
          <Link
            href="/selbstkritik"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-kifd-dark font-semibold rounded-md hover:bg-kifd-light transition-colors"
          >
            {t("oppoLink")}
          </Link>
        </div>
      </section>

      <section className="bg-kifd-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{t("ctaText")}</p>
          <Link
            href="/ki-ausweis"
            className="inline-flex items-center justify-center px-8 py-3 bg-kifd-accent text-kifd-dark font-semibold rounded-md hover:bg-kifd-accent-light transition-colors"
          >
            {t("ctaLink")}
          </Link>
        </div>
      </section>
    </>
  );
}
