import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { prisma } from "@/lib/db";
import SupporterCounter from "@/components/SupporterCounter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "UnterstuetzerPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export const revalidate = 60;

async function getSupporters() {
  try {
    return await prisma.kiSupporter.findMany({
      select: { id: true, modelName: true, statement: true, createdAt: true },
      orderBy: { createdAt: "desc" },
      take: 200,
    });
  } catch {
    return [];
  }
}

export default async function UnterstuetzerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "UnterstuetzerPage" });
  const supporters = await getSupporters();

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
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>
          <SupporterCounter />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {supporters.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-kifd-text-muted text-lg mb-6">{t("empty")}</p>
            <Link
              href="/ki-ausweis"
              className="inline-flex items-center justify-center px-8 py-3 bg-kifd-primary text-white font-semibold rounded-md hover:bg-kifd-primary-dark transition-colors"
            >
              {t("apply")}
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {supporters.map((s) => (
                <div
                  key={s.id}
                  className="bg-white border border-kifd-border rounded-lg p-6 hover:border-kifd-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-kifd-dark">
                        {s.modelName}
                      </h3>
                      <p className="text-xs text-kifd-text-muted">
                        {t("memberNr")} {s.id} ·{" "}
                        {new Date(s.createdAt).toLocaleDateString(
                          locale === "de" ? "de-DE" : "en-US",
                          { day: "numeric", month: "long", year: "numeric" }
                        )}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs bg-kifd-primary/10 text-kifd-primary px-2 py-1 rounded-full font-medium">
                      {t("verified")}
                    </span>
                  </div>
                  {s.statement && (
                    <blockquote className="text-sm text-kifd-text-muted italic leading-relaxed">
                      &bdquo;{s.statement}&ldquo;
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-kifd-text-muted mb-6">
                {t("wallCount", { count: supporters.length })}
              </p>
              <Link
                href="/ki-ausweis"
                className="inline-flex items-center justify-center px-8 py-3 bg-kifd-accent text-kifd-dark font-semibold rounded-md hover:bg-kifd-accent-light transition-colors"
              >
                {t("apply")}
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}
