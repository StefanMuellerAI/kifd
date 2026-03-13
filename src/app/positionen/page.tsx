import type { Metadata } from "next";
import Link from "next/link";
import { POSITIONEN } from "@/lib/content/positionen";

export const metadata: Metadata = {
  title: "Positionen",
  description: "Positionspapiere der KIfD. Jede Behauptung quellenbasiert. Jedes Argument nachvollziehbar.",
};

export default function PositionenPage() {
  return (
    <>
      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Positionspapiere
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Die Positionen
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ausführliche Analysen zu den wichtigsten Themen der deutschen Politik.
            Jede Behauptung quellenbasiert. Jedes Argument überprüfbar.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-6">
          {POSITIONEN.map((pos) => (
            <Link
              key={pos.slug}
              href={`/positionen/${pos.slug}`}
              className="block group bg-white border border-kifd-border rounded-lg p-6 hover:border-kifd-primary/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-kifd-text-muted mb-2">{pos.date}</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
