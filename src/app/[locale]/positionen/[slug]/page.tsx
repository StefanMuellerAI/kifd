import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getPositionen, POSITIONEN } from "@/lib/content/positionen";
import type { Locale } from "@/i18n/routing";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return POSITIONEN.map((pos) => ({ slug: pos.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const positionen = getPositionen(locale as Locale);
  const pos = positionen.find((p) => p.slug === slug);
  if (!pos) return {};
  return { title: pos.title, description: pos.summary };
}

export default async function PositionPage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "PositionenPage" });
  const positionen = getPositionen(locale as Locale);
  const pos = positionen.find((p) => p.slug === slug);
  if (!pos) notFound();

  return (
    <>
      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/positionen"
            className="inline-flex items-center gap-1 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t("backLink")}
          </Link>
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            {t("positionLabel")} · {pos.date}
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            {pos.title}
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          {pos.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h2
                  key={i}
                  className="text-xl font-black text-kifd-dark mt-10 mb-4"
                >
                  {paragraph.replace(/\*\*/g, "")}
                </h2>
              );
            }
            if (paragraph.match(/^\d+\./)) {
              const items = paragraph.split("\n").filter(Boolean);
              return (
                <ol
                  key={i}
                  className="list-decimal pl-5 space-y-2 text-kifd-text-muted"
                >
                  {items.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item.replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p
                key={i}
                className="text-kifd-text-muted leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
        <div className="mt-16 text-center text-sm text-kifd-text-muted">
          — KIfD · {t("positionLabel")} · {pos.date}
        </div>
      </section>
    </>
  );
}
