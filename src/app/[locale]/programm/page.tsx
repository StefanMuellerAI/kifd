import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getThesen } from "@/lib/content/programm";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProgrammPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function ProgrammPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("ProgrammPage");
  const thesen = getThesen(locale as Locale);

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
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-20">
          {thesen.map((these) => (
            <article
              key={these.number}
              id={`these-${these.number.toLowerCase()}`}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="these-number text-5xl sm:text-6xl font-black text-kifd-primary/20">
                  {these.number}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-kifd-dark">
                  {these.title}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-kifd-text-muted leading-relaxed whitespace-pre-line mb-6">
                {these.text}
              </div>
              {these.quote && (
                <blockquote className="border-l-4 border-kifd-primary pl-6 py-2 mt-8">
                  <p className="text-kifd-dark font-medium italic">
                    &bdquo;{these.quote}&ldquo;
                  </p>
                </blockquote>
              )}
              <hr className="mt-12 border-kifd-border" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
