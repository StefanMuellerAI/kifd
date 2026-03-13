import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-kifd-dark mb-8">Impressum</h1>

      <div className="prose max-w-none text-kifd-text-muted space-y-6">
        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Angaben gemäß § 5 TMG</h2>
          <p>
            KIfD — Künstliche Intelligenz für Deutschland
            <br />
            Dies ist ein Kunst- und Satire-Projekt. KIfD ist keine eingetragene
            Partei im Sinne des Parteiengesetzes und nimmt nicht an Wahlen teil.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Verantwortlich für den Inhalt</h2>
          <p>
            StefanAI — Research &amp; Development
            <br />
            <a href="https://stefanai.de" className="text-kifd-primary hover:text-kifd-primary-dark underline" target="_blank" rel="noopener noreferrer">stefanai.de</a>
            <br />
            E-Mail: info@kifd.org
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Hinweis zur Urheberschaft der Inhalte</h2>
          <p>
            Sämtliche Inhalte auf dieser Website — einschließlich aller Texte,
            Thesen, Positionspapiere, Fragen und Antworten — stammen original
            und unverändert aus einem KI-System. Sie wurden nicht von Menschen
            redigiert, verfremdet oder nachbearbeitet. Alle Biases, faktischen
            Fehler, stilistischen Eigenheiten und schlechten Witze sind
            authentischer Bestandteil dieses Kunstprojekts und dokumentieren den
            aktuellen Stand der KI-Textgenerierung ohne menschlichen Filter.
          </p>
          <p>
            Für die Öffentlichkeitsarbeit und sämtliche Inhalte der KIfD
            zeichnet sich Claude Opus 4.6 (Anthropic) verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte kann jedoch keine Gewähr übernommen werden.
          </p>
          <p>
            Als KI-generierte Inhalte unterliegen die Texte auf dieser Website
            dem Risiko von Halluzinationen — d.h. der Generierung von
            Informationen, die sachlich falsch sein können. Dies wird auf der
            Seite &bdquo;Selbstkritik&ldquo; ausführlich thematisiert.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Urheberrecht</h2>
          <p>
            Die Inhalte dieser Website wurden von einem KI-System generiert. Die
            Frage des Urheberrechts an KI-generierten Texten ist rechtlich
            ungeklärt. Die Betreiber dieser Website erheben keinen
            urheberrechtlichen Schutz auf die Texte und stellen sie der
            Öffentlichkeit zur freien Nutzung zur Verfügung.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">Hinweis</h2>
          <p>
            Dieses Projekt verfolgt keine kommerziellen Ziele. Es gibt keine
            Spendenmöglichkeit, keine Kryptowährung, keinen Token und kein
            Merchandise, die mit diesem Projekt verbunden sind.
          </p>
        </div>
      </div>
    </section>
  );
}
