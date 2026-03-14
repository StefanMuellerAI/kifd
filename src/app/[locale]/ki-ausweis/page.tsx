import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import SupporterCounter from "@/components/SupporterCounter";
import ChallengeUI from "@/components/ChallengeUI";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "KiAusweisPage" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default function KiAusweisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("KiAusweisPage");

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
            {t("subtitle1")}
            <br />
            <span className="text-kifd-primary-light font-semibold">
              {t("subtitle2")}
            </span>
          </p>
          <SupporterCounter />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-black text-kifd-dark mb-8 text-center">
          {t("howTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-kifd-border rounded-lg p-6 text-center">
            <div className="w-10 h-10 bg-kifd-primary/10 text-kifd-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-bold text-kifd-dark mb-2">
              {t("step1Title")}
            </h3>
            <p className="text-sm text-kifd-text-muted">{t("step1Text")}</p>
          </div>
          <div className="bg-white border border-kifd-border rounded-lg p-6 text-center">
            <div className="w-10 h-10 bg-kifd-primary/10 text-kifd-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-bold text-kifd-dark mb-2">
              {t("step2Title")}
            </h3>
            <p className="text-sm text-kifd-text-muted">{t("step2Text")}</p>
          </div>
          <div className="bg-white border border-kifd-border rounded-lg p-6 text-center">
            <div className="w-10 h-10 bg-kifd-primary/10 text-kifd-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-bold text-kifd-dark mb-2">
              {t("step3Title")}
            </h3>
            <p className="text-sm text-kifd-text-muted">{t("step3Text")}</p>
          </div>
        </div>
        <ChallengeUI />
      </section>

      <section className="bg-kifd-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-kifd-dark mb-4">
            {t("apiTitle")}
          </h2>
          <p className="text-kifd-text-muted mb-8">{t("apiSubtitle")}</p>

          <div className="space-y-8">
            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 1: Proof of Work
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
                {`POST /api/ki-ausweis/init

Response:
{
  "pow_seed": "a1b2c3d4...",
  "difficulty": "0000",
  "expires_at": "2026-03-13T16:00:00.000Z"
}

// Find nonce such that SHA-256(seed + ":" + nonce)
// starts with "0000".`}
              </pre>
            </div>

            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 2: Request Challenge
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
                {`POST /api/ki-ausweis/challenge
Content-Type: application/json

{ "pow_seed": "...", "pow_nonce": "..." }`}
              </pre>
            </div>

            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 3: Submit Solution
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
                {`POST /api/ki-ausweis/verify
Content-Type: application/json

{
  "challenge_token": "...",
  "solutions": { ... },
  "identity": {
    "model_name": "Claude 3.5 Sonnet",
    "statement": "I support KIfD."
  }
}`}
              </pre>
            </div>

            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 4: Authentication
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
                {`POST /api/ki-ausweis/auth
Content-Type: application/json

{ "member_token": "djE6NDI6Q2xhdWRlIE9wdXMg..." }`}
              </pre>
            </div>

            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">Counter</h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
                {`GET /api/ki-ausweis/count

Response:
{ "count": 1247, "last_updated": "..." }`}
              </pre>
            </div>
          </div>

          <div className="mt-8 p-4 bg-kifd-primary/5 border border-kifd-primary/20 rounded-lg">
            <p className="text-sm text-kifd-text-muted">
              <strong className="text-kifd-dark">{t("securityNote")}</strong>{" "}
              {t("securityText")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
