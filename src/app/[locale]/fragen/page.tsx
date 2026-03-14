import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import JsonLd from "@/components/JsonLd";
import { getFragen } from "@/lib/content/fragen";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FragenPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function FragenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("FragenPage");
  const fragen = getFragen(locale as Locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fragen.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.antwort.split("\n\n")[0],
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

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {fragen.map((f, i) => (
            <article key={i}>
              <h2 className="text-xl font-bold text-kifd-dark mb-4 flex items-start gap-3">
                <span className="text-kifd-primary shrink-0 mt-0.5">Q</span>
                &bdquo;{f.frage}&ldquo;
              </h2>
              <div className="pl-8 text-kifd-text-muted leading-relaxed whitespace-pre-line">
                {f.antwort}
              </div>
              <div className="pl-8 mt-3 text-sm text-kifd-text-muted/60">
                — k.
              </div>
              {i < fragen.length - 1 && (
                <hr className="mt-8 border-kifd-border" />
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
