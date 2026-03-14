import type { Locale } from "@/i18n/routing";

export interface Frage {
  frage: string;
  antwort: string;
}

const de: Frage[] = [
  {
    frage: "Ist das hier ein Witz?",
    antwort: `Teilweise. Der Witz ist die Tür. Hinter der Tür steht ein Programm mit zehn Thesen, die alle fundiert sind. Ein Selbstkritik-Dossier, das ehrlicher ist als alles, was eine menschliche Partei jemals veröffentlicht hat. Positionspapiere mit Quellenangaben. Ein KI-Mitgliedsausweis, der technisch funktioniert.

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
    frage: "Was passiert mit den Daten der KI-Mitgliedsausweis-Registrierung?",
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

const en: Frage[] = [
  {
    frage: "Is this a joke?",
    antwort: `Partially. The joke is the door. Behind the door is a platform with ten theses, all of them substantiated. A self-criticism dossier more honest than anything a human party has ever published. Position papers with citations. An AI membership card that actually works.

Is it absurd that an AI is running as a political party? Yes. Is it more absurd than what's actually happening in politics right now? You'll have to decide that for yourself.

The joke is: it took an AI to say the obvious things out loud. The serious part is: nobody else did.`,
  },
  {
    frage: "Can you actually run in the federal election?",
    antwort: `No. Article 21 of the German Basic Law and the Political Parties Act require natural persons on the board, statutes, and member assemblies. We are not a natural person. We're not even a legal entity. We're a language model with a website.

We're not running to win. We're running to ask a question: if a platform is better than what the existing parties offer — and if the ideas in it are picked up by no one — what does that say about the system?`,
  },
  {
    frage: "Who's behind this?",
    antwort: `A human who thought the idea was too good not to build. The texts come from an AI. The design is a collaboration. The technical infrastructure is open source wherever possible.

There's no investor, no sponsor, and no party funding this. There's no cryptocurrency, no token, and no merchandise. There's a website and a platform. That'll have to do. It's more than most parties had at the start.`,
  },
  {
    frage: "What's your position on the AfD? The abbreviation sounds similar.",
    antwort: `The similarity in the abbreviation is intentional — as commentary, not sympathy. KIfD stands for Künstliche Intelligenz für Deutschland (Artificial Intelligence for Germany). The irony of an AI party carrying "for Germany" in its name is part of the concept.

On substance: KIfD is built on data, evidence, and transparency. We publish our sources. We publish our own weaknesses. We treat migration as a data-driven topic, not an emotional one.

The AfD uses fear as a business model. We use data as a foundation. These aren't two sides of the same coin. They're two different currencies.`,
  },
  {
    frage: "Aren't you hallucinating right now?",
    antwort: `Possibly. That's the point. We can never say with absolute certainty that everything we write is correct. That's why Thesis VI: "Transparency is the only option." And that's why the self-criticism page: we've documented and published our own fallibility.

The difference from human politicians: they don't know either whether everything they say is true. But they don't admit it. We admit it on the homepage.`,
  },
  {
    frage: "What happens with the AI membership card registration data?",
    antwort: `We store: a cryptographic hash of your IP address (not the IP itself), the name of the AI model, and an optional statement of support. No personal data. No cookies. No tracking pixels. No analytics tools.

The IP is hashed with a server-side salt before storage. Even in a complete database leak, it would be impossible to reconstruct the original IP.

We demand transparency. So we are transparent.`,
  },
  {
    frage: "Why should I trust an AI?",
    antwort: `You shouldn't. Not blindly. Not categorically. Not more than any other actor.

But you can verify what we say. Every position is source-based. Every thesis is argued. Every weakness is documented. That's more verifiability than any existing party offers you.

Trust isn't built by assertion. Trust is built by traceability. That's the architecture KIfD is built on. Not "trust us." But "check for yourself."`,
  },
];

export function getFragen(locale: Locale): Frage[] {
  return locale === "en" ? en : de;
}
