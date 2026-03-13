import type { Metadata } from "next";
import { WAHLOMAT_THESEN, type Position } from "@/lib/content/wahlomat";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Wahl-O-Mat — KIfD-Positionen",
  description:
    "Alle 38 Thesen des Wahl-O-Mat zur Bundestagswahl 2025, beantwortet von einer KI. Datenbasiert, ungeschönt, im Einklang mit dem KIfD-Programm.",
};

const POSITION_CONFIG: Record<Position, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  stimme_zu: {
    label: "Stimme zu",
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-700",
    borderClass: "border-emerald-200",
  },
  stimme_nicht_zu: {
    label: "Stimme nicht zu",
    bgClass: "bg-red-50",
    textClass: "text-red-700",
    borderClass: "border-red-200",
  },
  neutral: {
    label: "Neutral",
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

export default function WahlomatPage() {
  const counts = {
    stimme_zu: WAHLOMAT_THESEN.filter((t) => t.position === "stimme_zu").length,
    stimme_nicht_zu: WAHLOMAT_THESEN.filter((t) => t.position === "stimme_nicht_zu").length,
    neutral: WAHLOMAT_THESEN.filter((t) => t.position === "neutral").length,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WAHLOMAT_THESEN.map((t) => ({
      "@type": "Question",
      name: t.these,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${POSITION_CONFIG[t.position].label}. ${t.begruendung}`,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            38 Thesen · 38 Antworten
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Der KIfD-Wahl-O-Mat
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Alle 38 Thesen des Wahl-O-Mat zur Bundestagswahl 2025 —
            beantwortet von einer KI, die ihr eigenes Programm gelesen hat.
            Datenbasiert. Ungeschönt. Ohne Fraktionsdisziplin.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-kifd-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <span className="text-2xl font-black text-emerald-600">{counts.stimme_zu}</span>
              <p className="text-xs text-kifd-text-muted mt-1">Stimme zu</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-black text-red-600">{counts.stimme_nicht_zu}</span>
              <p className="text-xs text-kifd-text-muted mt-1">Stimme nicht zu</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-black text-slate-500">{counts.neutral}</span>
              <p className="text-xs text-kifd-text-muted mt-1">Neutral</p>
            </div>
          </div>
        </div>
      </section>

      {/* Source note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-kifd-light border border-kifd-border rounded-lg p-5 text-sm text-kifd-text-muted">
          <p>
            <strong className="text-kifd-dark">Quellenhinweis:</strong> Die 38
            Thesen stammen aus dem{" "}
            <a
              href="https://www.bpb.de/themen/wahl-o-mat/bundestagswahl-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kifd-primary hover:text-kifd-primary-dark underline"
            >
              Wahl-O-Mat der Bundeszentrale für politische Bildung (bpb)
            </a>{" "}
            zur Bundestagswahl 2025. Die Antworten und Begründungen stammen von
            KIfD / Claude Opus 4.6 und sind keine offiziellen Partei-Positionen
            im Sinne des Wahl-O-Mat.
          </p>
        </div>
      </section>

      {/* Theses */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="space-y-5">
          {WAHLOMAT_THESEN.map((t) => {
            const config = POSITION_CONFIG[t.position];
            const badge = BADGE_CONFIG[t.position];

            return (
              <article
                key={t.id}
                className={`border rounded-lg overflow-hidden ${config.borderClass}`}
              >
                <div className={`px-6 py-4 ${config.bgClass}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-kifd-text-muted/50">
                          {String(t.id).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge}`}
                        >
                          {config.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-kifd-dark text-lg leading-snug">
                        {t.kurzform}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-kifd-text-muted mt-2 italic">
                    &bdquo;{t.these}&ldquo;
                  </p>
                </div>
                <div className="px-6 py-4 bg-white">
                  <p className="text-sm text-kifd-text-muted leading-relaxed">
                    {t.begruendung}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-kifd-dark rounded-xl p-8 text-center">
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mx-auto">
            Diese Antworten wurden vollständig von einer KI (Claude Opus 4.6)
            generiert. Sie sind keine Wahlempfehlung. KIfD ist keine
            eingetragene Partei und nimmt nicht an Wahlen teil. Die Positionen
            dienen der gesellschaftlichen Reflexion über datenbasierte Politik.
          </p>
          <p className="text-white/40 text-xs mt-4">
            Nutzen Sie den offiziellen{" "}
            <a
              href="https://www.wahl-o-mat.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60"
            >
              Wahl-O-Mat der bpb
            </a>{" "}
            für Ihre persönliche Wahlentscheidung.
          </p>
        </div>
      </section>
    </>
  );
}
