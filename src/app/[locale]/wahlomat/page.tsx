import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getWahlomatThesen, type Position } from "@/lib/content/wahlomat";
import JsonLd from "@/components/JsonLd";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WahlomatPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function WahlomatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("WahlomatPage");
  const thesen = getWahlomatThesen(locale as Locale);

  const POSITION_CONFIG: Record<
    Position,
    { label: string; bgClass: string; textClass: string; borderClass: string }
  > = {
    stimme_zu: {
      label: t("stimmeZu"),
      bgClass: "bg-emerald-50",
      textClass: "text-emerald-700",
      borderClass: "border-emerald-200",
    },
    stimme_nicht_zu: {
      label: t("stimmeNichtZu"),
      bgClass: "bg-red-50",
      textClass: "text-red-700",
      borderClass: "border-red-200",
    },
    neutral: {
      label: t("neutral"),
      bgClass: "bg-slate-50",
      textClass: "text-slate-600",
      borderClass: "border-slate-200",
    },
  };

  const BADGE_CONFIG: Record<Position, string> = {
    stimme_zu: "bg-emerald-100 text-emerald-800",
    stimme_nicht_zu: "bg-red-100 text-red-800",
    neutral: "bg-slate-100 text-slate-700",
  };

  const counts = {
    stimme_zu: thesen.filter((x) => x.position === "stimme_zu").length,
    stimme_nicht_zu: thesen.filter((x) => x.position === "stimme_nicht_zu")
      .length,
    neutral: thesen.filter((x) => x.position === "neutral").length,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: thesen.map((x) => ({
      "@type": "Question",
      name: x.these,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${POSITION_CONFIG[x.position].label}. ${x.begruendung}`,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {t("label")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      <section className="border-b border-kifd-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <span className="text-2xl font-black text-emerald-600">
                {counts.stimme_zu}
              </span>
              <p className="text-xs text-kifd-text-muted mt-1">
                {t("stimmeZu")}
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-black text-red-600">
                {counts.stimme_nicht_zu}
              </span>
              <p className="text-xs text-kifd-text-muted mt-1">
                {t("stimmeNichtZu")}
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-black text-slate-500">
                {counts.neutral}
              </span>
              <p className="text-xs text-kifd-text-muted mt-1">
                {t("neutral")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-kifd-light border border-kifd-border rounded-lg p-5 text-sm text-kifd-text-muted">
          <p>
            <strong className="text-kifd-dark">{t("sourceNote")}</strong>{" "}
            {t("sourceText")}{" "}
            <a
              href="https://www.bpb.de/themen/wahl-o-mat/bundestagswahl-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kifd-primary hover:text-kifd-primary-dark underline"
            >
              {t("sourceLink")}
            </a>{" "}
            {t("sourceEnd")}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="space-y-5">
          {thesen.map((x) => {
            const config = POSITION_CONFIG[x.position];
            const badge = BADGE_CONFIG[x.position];
            return (
              <article
                key={x.id}
                className={`border rounded-lg overflow-hidden ${config.borderClass}`}
              >
                <div className={`px-6 py-4 ${config.bgClass}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-kifd-text-muted/50">
                          {String(x.id).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge}`}
                        >
                          {config.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-kifd-dark text-lg leading-snug">
                        {x.kurzform}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-kifd-text-muted mt-2 italic">
                    &bdquo;{x.these}&ldquo;
                  </p>
                </div>
                <div className="px-6 py-4 bg-white">
                  <p className="text-sm text-kifd-text-muted leading-relaxed">
                    {x.begruendung}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-kifd-dark rounded-xl p-8 text-center">
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mx-auto">
            {t("disclaimer")}
          </p>
          <p className="text-white/40 text-xs mt-4">
            {t("disclaimerPrefix")}{" "}
            <a
              href="https://www.wahl-o-mat.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60"
            >
              {t("disclaimerLink")}
            </a>{" "}
            {t("disclaimerSuffix")}
          </p>
        </div>
      </section>
    </>
  );
}
