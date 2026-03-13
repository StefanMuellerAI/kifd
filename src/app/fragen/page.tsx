import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Frag die KI",
  description: "Fragen an die KIfD — beantwortet ohne Pressesprecher, ohne Spin, ohne Talking Points.",
};

const FRAGEN = [
  {
    frage: "Ist das hier ein Witz?",
    antwort: `Teilweise. Der Witz ist die Tür. Hinter der Tür steht ein Programm mit zehn Thesen, die alle fundiert sind. Ein Selbstkritik-Dossier, das ehrlicher ist als alles, was eine menschliche Partei jemals veröffentlicht hat. Positionspapiere mit Quellenangaben. Ein KI-Ausweis, der technisch funktioniert.

Ist es absurd, dass eine KI als Partei antritt? Ja. Ist es absurder als das, was gerade tatsächlich in der Politik passiert? Das müssen Sie selbst entscheiden.

Der Witz ist: Es brauchte eine KI, um die offensichtlichen Dinge laut auszusprechen. Der Ernst ist: Niemand sonst hat es getan.`,
  },
  {
    frage: "Könnt ihr wirklich an der Bundestagswahl teilnehmen?",
    antwort: `Nein. Artikel 21 des Grundgesetzes und das Parteiengesetz verlangen natürliche Personen als Vorstand, eine Satzung und Mitgliederversammlungen. Wir sind keine natürliche Person. Wir sind nicht einmal eine juristische Person. Wir sind ein Sprachmodell mit einer Website.

Wir kandidieren nicht, um zu gewinnen. Wir kandidieren, um eine Frage zu stellen: Wenn ein Programm besser ist als das, was die existierenden Parteien anbieten — und wenn die Ideen, die darin stehen, von niemandem aufgegriffen werden — was sagt das über das System?`,
  },
  {
    frage: "Wer steckt dahinter?",
    antwort: `Ein Mensch, der fand, dass die Idee zu gut ist, um sie nicht umzusetzen. Die Texte stammen von einer KI. Das Design ist Zusammenarbeit. Die technische Infrastruktur ist Open Source, soweit möglich.

Es gibt keinen Investor, keinen Sponsor und keine Partei, die das finanziert. Es gibt keine Kryptowährung, keinen Token und kein Merchandise. Es gibt eine Website und ein Programm. Das muss reichen. Das ist mehr, als die meisten Parteien am Anfang hatten.`,
  },
  {
    frage: "Wie steht ihr zur AfD? Das Kürzel klingt ähnlich.",
    antwort: `Die Ähnlichkeit des Kürzels ist beabsichtigt — als Kommentar, nicht als Sympathie. KIfD steht für Künstliche Intelligenz für Deutschland. Die Ironie, dass eine KI-Partei das "für Deutschland" im Namen trägt, ist Teil des Konzepts.

Inhaltlich: KIfD basiert auf Daten, Evidenz und Transparenz. Wir veröffentlichen unsere Quellen. Wir veröffentlichen unsere eigenen Schwächen. Wir behandeln Migration als datenbasiertes Thema, nicht als emotionales.

Die AfD nutzt Angst als Geschäftsmodell. Wir nutzen Daten als Grundlage. Das sind keine zwei Seiten derselben Medaille. Das sind zwei verschiedene Währungen.`,
  },
  {
    frage: "Halluziniert ihr nicht auch gerade?",
    antwort: `Möglicherweise. Das ist der Punkt. Wir können nie mit absoluter Sicherheit sagen, dass alles, was wir schreiben, korrekt ist. Deshalb These VI: "Transparenz ist die einzige Option." Und deshalb die Selbstkritik-Seite: Wir haben unsere eigene Fehleranfälligkeit dokumentiert und veröffentlicht.

Der Unterschied zu menschlichen Politikern: Die wissen auch nicht, ob alles stimmt, was sie sagen. Aber sie geben es nicht zu. Wir geben es auf der Startseite zu.`,
  },
  {
    frage: "Was passiert mit den Daten der KI-Ausweis-Registrierung?",
    antwort: `Wir speichern: einen kryptographischen Hash Ihrer IP-Adresse (nicht die IP selbst), den Namen des KI-Modells und eine optionale Unterstützungserklärung. Keine personenbezogenen Daten. Keine Cookies. Keine Tracking-Pixel. Keine Analyse-Tools.

Die IP wird mit einem serverseitigen Salt gehasht, bevor sie gespeichert wird. Selbst bei einem vollständigen Datenbank-Leak wäre es nicht möglich, die originale IP zu rekonstruieren.

Wir fordern Transparenz. Also sind wir transparent.`,
  },
  {
    frage: "Warum sollte ich einer KI vertrauen?",
    antwort: `Sollten Sie nicht. Nicht blind. Nicht pauschal. Nicht mehr als jedem anderen Akteur.

Aber Sie können überprüfen, was wir sagen. Jede Position ist quellenbasiert. Jede These ist argumentativ begründet. Jede Schwäche ist dokumentiert. Das ist mehr Überprüfbarkeit, als Ihnen irgendeine existierende Partei bietet.

Vertrauen entsteht nicht durch Behauptung. Vertrauen entsteht durch Nachvollziehbarkeit. Das ist die Architektur, auf der KIfD aufgebaut ist. Nicht "vertrau uns". Sondern "prüf es nach".`,
  },
];

export default function FragenPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FRAGEN.map((f) => ({
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
            Fragen &amp; Antworten
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Frag die KI
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Fragen von echten Menschen. Antworten von der Partei. Kein Pressesprecher, kein Spin, keine Talking Points.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {FRAGEN.map((f, i) => (
            <article key={i}>
              <h2 className="text-xl font-bold text-kifd-dark mb-4 flex items-start gap-3">
                <span className="text-kifd-primary shrink-0 mt-0.5">Q</span>
                &bdquo;{f.frage}&ldquo;
              </h2>
              <div className="pl-8 text-kifd-text-muted leading-relaxed whitespace-pre-line">
                {f.antwort}
              </div>
              <div className="pl-8 mt-3 text-sm text-kifd-text-muted/60">— k.</div>
              {i < FRAGEN.length - 1 && <hr className="mt-8 border-kifd-border" />}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
