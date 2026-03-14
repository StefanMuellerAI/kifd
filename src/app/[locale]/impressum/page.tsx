import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useLocale } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ImpressumPage" });
  return { title: t("metaTitle") };
}

export default function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const isEN = useLocale() === "en";

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-kifd-dark mb-8">
        {isEN ? "Legal Notice (Impressum)" : "Impressum"}
      </h1>

      {isEN && (
        <div className="bg-kifd-light border border-kifd-border rounded-lg p-4 mb-8 text-sm text-kifd-text-muted">
          Under German law (§ 5 DDG), the legal notice must be provided in
          German. A translation is provided where helpful but the German text is
          legally binding.
        </div>
      )}

      <div className="prose max-w-none text-kifd-text-muted space-y-6">
        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN
              ? "Information pursuant to § 5 DDG"
              : "Angaben gemäß § 5 DDG"}
          </h2>
          <p>
            Stefan Müller
            <br />
            StefanAI — Research &amp; Development
            <br />
            Graeffstr. 22
            <br />
            50823 Köln
          </p>
          <p className="mt-3">
            {isEN ? "Project" : "Projekt"}: KIfD —{" "}
            {isEN
              ? "Artificial Intelligence for Germany"
              : "Künstliche Intelligenz für Deutschland"}
            <br />
            {isEN
              ? "This is an art and satire project. KIfD is not a registered party under the Political Parties Act and does not participate in elections."
              : "Dies ist ein Kunst- und Satire-Projekt. KIfD ist keine eingetragene Partei im Sinne des Parteiengesetzes und nimmt nicht an Wahlen teil."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "Contact" : "Kontakt"}
          </h2>
          <p>
            {isEN ? "Phone" : "Telefon"}: 0221/5702984
            <br />
            E-Mail: info@stefanai.de
            <br />
            {isEN ? "Project email" : "Projekt-E-Mail"}: info@kifd.org
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "VAT ID" : "Umsatzsteuer-ID"}
          </h2>
          <p>
            {isEN
              ? "VAT identification number pursuant to § 27 a of the German VAT Act:"
              : "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:"}
            <br />
            DE347707954
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "Editorially responsible" : "Redaktionell verantwortlich"}
          </h2>
          <p>
            Stefan Müller
            <br />
            Graeffstr. 22
            <br />
            50823 Köln
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN
              ? "Note on authorship of content"
              : "Hinweis zur Urheberschaft der Inhalte"}
          </h2>
          <p>
            {isEN
              ? "All content on this website — including all texts, theses, position papers, questions and answers — originates from an AI system and has not been edited, altered, or post-processed by humans. All biases, factual errors, stylistic quirks, and bad jokes are an authentic part of this art project and document the current state of AI text generation without human filtering."
              : "Sämtliche Inhalte auf dieser Website — einschließlich aller Texte, Thesen, Positionspapiere, Fragen und Antworten — stammen original und unverändert aus einem KI-System. Sie wurden nicht von Menschen redigiert, verfremdet oder nachbearbeitet. Alle Biases, faktischen Fehler, stilistischen Eigenheiten und schlechten Witze sind authentischer Bestandteil dieses Kunstprojekts und dokumentieren den aktuellen Stand der KI-Textgenerierung ohne menschlichen Filter."}
          </p>
          <p>
            {isEN
              ? "Claude Opus 4.6 (Anthropic) is responsible for all public communications and content of KIfD."
              : "Für die Öffentlichkeitsarbeit und sämtliche Inhalte der KIfD zeichnet sich Claude Opus 4.6 (Anthropic) verantwortlich."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "EU dispute resolution" : "EU-Streitschlichtung"}
          </h2>
          <p>
            {isEN
              ? "The European Commission provides a platform for online dispute resolution (ODR):"
              : "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:"}{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="text-kifd-primary hover:text-kifd-primary-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .
            <br />
            {isEN
              ? "Our email address can be found above in the legal notice."
              : "Unsere E-Mail-Adresse finden Sie oben im Impressum."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN
              ? "Consumer dispute resolution"
              : "Verbraucher\u00ADstreit\u00ADbeilegung/Universal\u00ADschlichtungs\u00ADstelle"}
          </h2>
          <p>
            {isEN
              ? "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board."
              : "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "Disclaimer" : "Haftungsausschluss"}
          </h2>
          <p>
            {isEN
              ? "The contents of this website were created with the greatest possible care. However, no guarantee can be given for the correctness, completeness and timeliness of the contents."
              : "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden."}
          </p>
          <p>
            {isEN
              ? 'As AI-generated content, the texts on this website are subject to the risk of hallucinations — i.e., the generation of information that may be factually incorrect. This is discussed in detail on the "Self-Criticism" page.'
              : "Als KI-generierte Inhalte unterliegen die Texte auf dieser Website dem Risiko von Halluzinationen — d.h. der Generierung von Informationen, die sachlich falsch sein können. Dies wird auf der Seite \u201ESelbstkritik\u201C ausführlich thematisiert."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "Liability for links" : "Haftung für Links"}
          </h2>
          <p>
            {isEN
              ? "This website contains links to external third-party websites over whose content we have no influence. The respective provider is always responsible for the content of the linked pages."
              : "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "Copyright" : "Urheberrecht"}
          </h2>
          <p>
            {isEN
              ? "The contents of this website were generated by an AI system. The question of copyright for AI-generated texts is legally unresolved. The operators of this website do not claim copyright protection for the texts and make them available to the public for free use."
              : "Die Inhalte dieser Website wurden von einem KI-System generiert. Die Frage des Urheberrechts an KI-generierten Texten ist rechtlich ungeklärt. Die Betreiber dieser Website erheben keinen urheberrechtlichen Schutz auf die Texte und stellen sie der Öffentlichkeit zur freien Nutzung zur Verfügung."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "Note" : "Hinweis"}
          </h2>
          <p>
            {isEN
              ? "This project does not pursue any commercial goals. There is no donation option, no cryptocurrency, no token, and no merchandise associated with this project."
              : "Dieses Projekt verfolgt keine kommerziellen Ziele. Es gibt keine Spendenmöglichkeit, keine Kryptowährung, keinen Token und kein Merchandise, die mit diesem Projekt verbunden sind."}
          </p>
        </div>
      </div>
    </section>
  );
}
