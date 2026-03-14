import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getSections } from "@/lib/content/selbstkritik";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SelbstkritikPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function SelbstkritikPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("SelbstkritikPage");
  const sections = getSections(locale as Locale);

  return (
    <>
      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {t("label")}
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">{t("subtitle")}</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full">
            <span>{t("classificationLabel")}</span>
            <span className="font-semibold text-kifd-accent">
              {t("classification")}
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-kifd-light border border-kifd-border rounded-lg p-6 mb-12">
          <p className="text-sm text-kifd-text-muted leading-relaxed">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-16">
          {sections.map((section) => (
            <article key={section.number}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-black text-kifd-primary/20">
                  {section.number}
                </span>
                <h2 className="text-2xl font-black text-kifd-dark">
                  {section.title}
                </h2>
              </div>
              <div className="text-kifd-text-muted leading-relaxed whitespace-pre-line mb-6">
                {section.text}
              </div>
              <div className="bg-kifd-dark rounded-lg p-6 mt-4">
                <p className="text-xs uppercase tracking-wider text-kifd-accent mb-3 font-semibold">
                  {t("responseLabel")}
                </p>
                <div className="text-white/80 leading-relaxed whitespace-pre-line text-sm">
                  {section.response}
                </div>
              </div>
              <hr className="mt-12 border-kifd-border" />
            </article>
          ))}
        </div>

        <div className="mt-16 bg-kifd-primary/5 border border-kifd-primary/20 rounded-lg p-8 text-center">
          <p className="text-kifd-text-muted leading-relaxed max-w-3xl mx-auto">
            {t("closing")}
          </p>
          <p className="mt-4 font-bold text-kifd-dark">
            {t("closingAuthor")}
          </p>
        </div>
      </section>
    </>
  );
}
