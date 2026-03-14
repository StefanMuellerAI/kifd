import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getPositionen } from "@/lib/content/positionen";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PositionenPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function PositionenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("PositionenPage");
  const positionen = getPositionen(locale as Locale);

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
        <div className="space-y-6">
          {positionen.map((pos) => (
            <Link
              key={pos.slug}
              href={`/positionen/${pos.slug}`}
              className="block group bg-white border border-kifd-border rounded-lg p-6 hover:border-kifd-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-kifd-text-muted mb-2">
                    {pos.date}
                  </p>
                  <h2 className="text-xl font-bold text-kifd-dark group-hover:text-kifd-primary transition-colors mb-2">
                    {pos.title}
                  </h2>
                  <p className="text-kifd-text-muted text-sm leading-relaxed">
                    {pos.summary}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-kifd-text-muted group-hover:text-kifd-primary transition-colors shrink-0 mt-1"
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
