import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getMitteilungen } from "@/lib/content/presse";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PressePage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function PressePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("PressePage");
  const mitteilungen = getMitteilungen(locale as Locale);

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
        <div className="space-y-16">
          {mitteilungen.map((m, i) => (
            <article key={i}>
              <p className="text-sm text-kifd-text-muted mb-2">{m.date}</p>
              <h2 className="text-2xl font-black text-kifd-dark mb-6">
                {m.title}
              </h2>
              <div className="text-kifd-text-muted leading-relaxed whitespace-pre-line">
                {m.content}
              </div>
              {i < mitteilungen.length - 1 && (
                <hr className="mt-12 border-kifd-border" />
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
