import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  getSteckbrief,
  getChapters,
  KABINETT,
} from "@/lib/content/partei";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ParteiPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function ParteiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("ParteiPage");
  const steckbrief = getSteckbrief(locale as Locale);
  const chapters = getChapters(locale as Locale);

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
        <div className="bg-kifd-light rounded-lg p-8 mb-16">
          <h2 className="text-xl font-bold text-kifd-dark mb-6">
            {t("steckbrief")}
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            {steckbrief.map((item) => (
              <div key={item.label}>
                <dt className="text-kifd-text-muted">{item.label}</dt>
                <dd className="font-medium text-kifd-dark">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {chapters.map((chapter) => (
          <article key={chapter.number} className="mb-16">
            <h2 className="text-2xl font-black text-kifd-dark mb-4 flex items-baseline gap-3">
              <span className="text-kifd-primary/30">{chapter.number}</span>
              {chapter.title}
            </h2>
            <div className="space-y-4 text-kifd-text-muted leading-relaxed">
              {chapter.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {chapter.quote && (
                <blockquote className="border-l-4 border-kifd-primary pl-6 py-2">
                  <p className="text-kifd-dark font-medium italic">
                    &bdquo;{chapter.quote}&ldquo;
                  </p>
                </blockquote>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="bg-kifd-light py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
              {t("kabinettLabel")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-kifd-dark mb-4">
              {t("kabinettTitle")}
            </h2>
            <p className="text-kifd-text-muted max-w-2xl mx-auto">
              {t("kabinettSubtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {KABINETT.map((instanz) => (
              <div
                key={instanz.ressort}
                className="bg-white border border-kifd-border rounded-xl overflow-hidden"
              >
                <div className="bg-kifd-dark px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-kifd-accent font-semibold uppercase tracking-wider">
                      {instanz.ressort}
                    </p>
                    <h3 className="text-white font-bold text-lg mt-1">
                      {instanz.name}
                    </h3>
                  </div>
                  <span className="text-xs bg-kifd-primary/20 text-kifd-primary-light px-3 py-1 rounded-full font-mono">
                    {instanz.instanzId}
                  </span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-xs uppercase tracking-wider text-kifd-text-muted font-semibold mb-3">
                    {t("systempromptLabel")}
                  </p>
                  <div className="bg-kifd-light border border-kifd-border rounded-lg p-4 font-mono text-sm text-kifd-text leading-relaxed whitespace-pre-line mb-5">
                    {instanz.systemprompt}
                  </div>
                  <p className="text-xs uppercase tracking-wider text-kifd-text-muted font-semibold mb-3">
                    {t("quellenLabel")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {instanz.quellen.map((quelle) => (
                      <span
                        key={quelle}
                        className="text-xs bg-kifd-primary/5 text-kifd-primary border border-kifd-primary/15 rounded-full px-3 py-1"
                      >
                        {quelle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white border border-kifd-border rounded-lg text-center">
            <p className="text-sm text-kifd-text-muted">{t("kabinettNote")}</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center text-sm text-kifd-text-muted">
          {t("closingNote")}
        </div>
      </section>
    </>
  );
}
