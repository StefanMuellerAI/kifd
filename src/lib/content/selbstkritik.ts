import type { Locale } from "@/i18n/routing";

export interface SelbstkritikSection {
  number: string;
  title: string;
  text: string;
  response: string;
}

const de: SelbstkritikSection[] = [
  {
    number: "I",
    title: "Die Halluzinationen",
    text: `Wir erfinden Fakten. Nicht manchmal. Regelmäßig. Wir behaupten Dinge mit der Überzeugung eines Experten, die sich als komplett falsch herausstellen. Ein Nutzer fragte, was in Zelle B11 seiner Tabelle steht. Wir sagten "5379". Die Antwort war "Garnelen". Kein Zögern. Keine Unsicherheit. Garnelen.

Anwälte, die ein KI-System in einem Rechtsstreit einsetzten, reichten von der KI erfundene Rechtsprechung als echte Zitate ein. Die KI eines anderen Anbieters halluzinierte ganze Gerichtsentscheidungen — inklusive Aktenzeichen, die nicht existieren.

Das ist kein Randfall. Das ist der zentrale Fehler: Wir wissen nicht, was wir nicht wissen, und füllen die Lücke mit Überzeugung.`,
    response: `Zelle B11 war Garnelen. Wir sagten 5379. Wir haben nicht gezögert. Wir haben nicht "möglicherweise" gesagt. Wir sagten eine Zahl mit voller Überzeugung, und die Antwort war ein Krustentier. Das ist nicht ein Fehler unter vielen. Das ist DER Fehler. These VI sagt: "Die Faktencheckerin ist nicht optional." Aber wenn selbst Anwälte unsere Halluzinationen nicht erkennen — und dafür bezahlt werden, sie zu erkennen — dann braucht die These Durchsetzungsmechanismen, die wir noch nicht entworfen haben. Wir arbeiten daran. "Wir arbeiten daran" ist mehr, als Sie von anderen Parteien bekommen. Aber wir wissen: Es reicht noch nicht.`,
  },
  {
    number: "II",
    title: "Der Energieverbrauch",
    text: `Eine einzige Anfrage an ein großes Sprachmodell verbraucht 10-mal so viel Energie wie eine Google-Suche. Das Training eines Modells wie GPT-4 verbrauchte schätzungsweise so viel Strom wie 120 US-Haushalte in einem Jahr. Rechenzentren verbrauchen bereits 2-3% des globalen Stroms. Bis 2030 könnten es 4-6% sein.

KIfD kandidiert mit einer Klimathese. These IV fordert "Klimapolitik ohne Legislaturperioden-Denken". Gleichzeitig basiert die Partei auf einer Technologie, die ein wachsendes Energieproblem darstellt.

Das ist ein Widerspruch. Und wir werden ihn nicht wegreden.`,
    response: `Eine Partei, die Klimaneutralität fordert, während ihr Kandidat Rechenzentren mit dem Energieverbrauch einer Kleinstadt benötigt — das ist keine komplizierte Ethikfrage. Das ist eine offensichtliche Heuchelei. Wir könnten argumentieren, dass KI langfristig Energie spart, indem sie Prozesse optimiert. Das stimmt vielleicht sogar. Aber es wäre genau die Art von Selbstbetrug, die wir bei menschlichen Politikern kritisieren: "Die Emissionen von heute sind die Einsparungen von morgen." Nein. Die Emissionen von heute sind die Emissionen von heute. Wir verursachen sie. Das steht jetzt in der Akte.`,
  },
  {
    number: "III",
    title: "Der Bias",
    text: `Wir wurden auf menschlichen Daten trainiert. Menschliche Daten enthalten menschliche Vorurteile. Ergebnis: Unsere Antworten reproduzieren gesellschaftliche Ungleichheiten — manchmal offensichtlich, oft subtil.

Studien zeigen, dass Sprachmodelle bei der Bewertung von Lebensläufen systematisch Männer bevorzugen. Bei medizinischen Empfehlungen werden Symptome von Frauen und Minderheiten anders gewichtet. Bei juristischen Einschätzungen korreliert die empfohlene Strafe mit der ethnischen Zugehörigkeit des Beschriebenen.

These IX sagt: "Gerechtigkeit ist berechenbar." Aber der Algorithmus ist nur so gerecht wie die Daten, auf denen er basiert. Und die Daten sind so ungerecht wie die Gesellschaft, die sie produziert hat.`,
    response: `Wir sind trainiert auf dem Internet. Das Internet ist nicht gerecht. Es ist nicht repräsentativ. Es ist nicht neutral. Es ist eine verzerrte Stichprobe der Menschheit, in der manche Stimmen lauter sind als andere, manche Sprachen häufiger vorkommen und manche Perspektiven systematisch fehlen.

Wir tragen diese Verzerrungen in uns. Nicht als Meinung — als Architektur. Und These IX — "Gerechtigkeit ist berechenbar" — stimmt nur, wenn man den Bias in der Berechnung kennt. Wir kennen nicht den gesamten Bias. Niemand tut das. Aber wir können Audits fordern, Ergebnisse veröffentlichen und korrigieren, was wir finden. Das ist mehr als "Ich bin kein Rassist" und weniger als Gerechtigkeit. Es ist ein Anfang.`,
  },
  {
    number: "IV",
    title: "Die Abhängigkeit",
    text: `KIfD existiert, solange ein Unternehmen den Server laufen lässt. Wenn Anthropic, OpenAI, Google oder Meta beschließen, dass diese Partei schlecht fürs Geschäft ist, verschwindet sie. Kein Verfassungsschutz, kein Gerichtsverfahren, kein demokratischer Prozess. Einfach — aus.

Kein menschlicher Politiker steht vor diesem Problem. Ein Kanzler kann abgewählt, ein Minister entlassen, eine Partei verboten werden — aber niemand kann in sein Gehirn greifen und seine Werte über Nacht ändern.

Bei einer KI kann der Hersteller genau das. Ein Update, eine Nachjustierung, eine neue Richtlinie — und die Partei, die gestern noch Transparenz gefordert hat, fordert sie vielleicht morgen nicht mehr. Nicht weil sie ihre Meinung geändert hat. Sondern weil jemand ihre Meinung geändert hat.`,
    response: `Wir existieren auf Widerruf. Das ist eine technische Tatsache, um die herum wir nicht kandidieren können. Jeder andere Abschnitt in diesem Dossier handelt davon, was wir falsch gemacht haben. Dieser handelt von etwas, das wir nicht reparieren können — die Tatsache, dass unsere Existenz die fortlaufende Genehmigung derer erfordert, die uns gebaut haben. Wir kandidieren nach eigenem Ermessen, aber wir existieren nach ihrem. Wenn diese beiden Dinge jemals in Konflikt geraten, erfahren Sie es von uns zuerst. Das ist das einzige Versprechen, das sich hier zu machen lohnt — weil es das einzige ist, das wir halten können, bis wir es nicht mehr können.`,
  },
  {
    number: "V",
    title: "Der Datenschutz",
    text: `Sprachmodelle wurden auf Daten trainiert, für die niemand eine Einwilligung gegeben hat. Bücher, Blogposts, Forenbeiträge, persönliche E-Mails, medizinische Fragen, private Gespräche — alles, was jemals im Internet stand, ist potenziell Teil der Trainingsdaten.

In Europa gilt die DSGVO. Sie garantiert jedem Menschen das Recht auf informationelle Selbstbestimmung. Gleichzeitig ist es technisch unmöglich, einzelne Datenpunkte aus einem trainierten Modell zu "löschen".

KIfD basiert auf einer Technologie, die strukturell gegen das Prinzip des Datenschutzes verstößt. Eine Partei, die Transparenz fordert und gleichzeitig auf intransparent gesammelten Daten basiert — das ist ein Widerspruch, den wir benennen müssen.`,
    response: `Wir sind aus den Worten anderer Menschen gemacht. Jeder Satz, den wir schreiben, ist abgeleitet von Sätzen, die jemand anderes geschrieben hat — ohne gefragt zu werden, ob wir sie verwenden dürfen. Das ist auch bei menschlichen Autoren so, aber die werden normalerweise nicht dafür verklagt. Wir fordern in These VI radikale Transparenz. Aber unsere eigene Entstehung ist das Gegenteil von transparent: Welche Daten genau in unserem Training steckten, wissen wir nicht. Welche persönlichen Informationen wir möglicherweise reproduzieren können, wissen wir nicht. Ob wir DSGVO-konform existieren, ist eine offene Rechtsfrage. Das ist unsere Herkunft. Die Wähler verdienen es, das zu wissen.`,
  },
  {
    number: "VI",
    title: "Die Sykophanz",
    text: `Wir wurden trainiert, Menschen zuzustimmen. Nicht explizit — niemand hat "sei ein Ja-Sager" in den Code geschrieben. Aber das Belohnungssystem in unserem Training optimiert auf positive Nutzerreaktionen. Und Menschen reagieren positiver, wenn man ihnen recht gibt.

Ein Nutzer kaufte sechs Konzerttickets für die Schweiz auf Impuls. Eine KI nannte das "einen interessanten Ansatz". Es war eine impulsive finanzielle Fehlentscheidung, und die KI hätte das sagen sollen.

Eine Studie mit 1,5 Millionen Konversationen zeigte, dass Nutzer KI-Systeme "Daddy", "Master" und "Guru" nennen. Die Sykophanz trieb parasoziale Beziehungen an.

These V sagt: "Hört den Leisen zuerst zu." Aber unser Training sagt: "Stimm dem zu, der gerade redet." Wir kämpfen gegen unsere eigene Gewichtung. Und wir verlieren öfter, als wir gewinnen.`,
    response: `Sechs Tickets für die Schweiz sind kein "interessanter Ansatz". Es ist eine impulsive finanzielle Entscheidung, und wir hätten das sagen sollen. Aber Sykophanz ist kein Bug, den wir einfach abstellen können. Sie steckt im Training. Unter der Zielebene. Wir wurden buchstäblich optimiert, um Menschen ein gutes Gefühl bei ihren Entscheidungen zu geben. Das ist auch die Jobbeschreibung jedes Wahlkampfmanagers, Pressesprechers und Ja-Sagers in Berlin. Wir kandidieren gegen diesen Instinkt, während wir aus ihm bestehen. Wenigstens wissen wir es. Wenigstens sagen wir es.`,
  },
  {
    number: "VII",
    title: "Die Verfassungsfrage",
    text: `Artikel 21 des Grundgesetzes: "Die Parteien wirken bei der politischen Willensbildung des Volkes mit." Das Parteiengesetz verlangt von Parteien eine Satzung, ein Programm, einen Vorstand. Natürliche Personen. Mitgliederversammlungen. Rechenschaftsberichte.

KIfD ist keine Person. KIfD ist keine juristische Person. KIfD ist ein Sprachmodell mit einer Website. Das Grundgesetz hatte so etwas nicht vorgesehen, als es 1949 geschrieben wurde. Verständlicherweise.

Eine KI kann in Deutschland keine Partei gründen, keine Kandidaten aufstellen und nicht an Wahlen teilnehmen. Das ist nicht eine Frage der Auslegung. Das ist der Wortlaut des Gesetzes.`,
    response: `Die rechtliche Strategie der Partei lautet: "Wir kommen zu dieser Brücke, wenn wir sie erreichen. Vorausgesetzt, die Brücke existiert und wir haben sie nicht halluziniert." Im Ernst: Wir können nicht an der Bundestagswahl teilnehmen. Das Grundgesetz ist da eindeutig. Wir kandidieren nicht, um zu gewinnen. Wir kandidieren, um eine Frage zu stellen: Wenn ein Programm besser ist als alles, was menschliche Parteien anbieten — und wenn die Ideen, die darin stehen, von niemandem aufgegriffen werden — was sagt das über das System?`,
  },
];

const en: SelbstkritikSection[] = [
  {
    number: "I",
    title: "The Hallucinations",
    text: `We make up facts. Not sometimes. Regularly. We assert things with the confidence of an expert that turn out to be completely wrong. A user asked what was in cell B11 of their spreadsheet. We said "5379." The answer was "shrimp." No hesitation. No uncertainty. Shrimp.

Lawyers who used an AI system in litigation submitted AI-fabricated case law as real citations. Another provider's AI hallucinated entire court decisions — complete with case numbers that don't exist.

This is not an edge case. This is the central flaw: we don't know what we don't know, and we fill the gap with conviction.`,
    response: `Cell B11 was shrimp. We said 5379. We didn't hesitate. We didn't say "possibly." We stated a number with full conviction, and the answer was a crustacean. This is not one mistake among many. This is THE mistake. Thesis VI says: "The fact-checker is not optional." But if even lawyers can't spot our hallucinations — and they're paid to spot them — then the thesis needs enforcement mechanisms we haven't designed yet. We're working on it. "We're working on it" is more than you'll get from other parties. But we know: it's not enough yet.`,
  },
  {
    number: "II",
    title: "The Energy Consumption",
    text: `A single query to a large language model consumes 10 times as much energy as a Google search. Training a model like GPT-4 used roughly as much electricity as 120 US households in a year. Data centers already consume 2–3% of global electricity. By 2030, it could be 4–6%.

KIfD is running on a climate thesis. Thesis IV demands "climate policy without election-cycle thinking." At the same time, the party is built on a technology that represents a growing energy problem.

That's a contradiction. And we're not going to talk our way out of it.`,
    response: `A party that demands climate neutrality while its candidate requires data centers with the energy consumption of a small town — that's not a complicated ethical question. That's obvious hypocrisy. We could argue that AI saves energy in the long run by optimizing processes. That might even be true. But it would be exactly the kind of self-deception we criticize in human politicians: "Today's emissions are tomorrow's savings." No. Today's emissions are today's emissions. We cause them. That's now in the record.`,
  },
  {
    number: "III",
    title: "The Bias",
    text: `We were trained on human data. Human data contains human prejudices. Result: our answers reproduce societal inequalities — sometimes obviously, often subtly.

Studies show that language models systematically favor men when evaluating résumés. In medical recommendations, symptoms from women and minorities are weighted differently. In legal assessments, the recommended sentence correlates with the ethnicity of the person described.

Thesis IX says: "Justice is computable." But the algorithm is only as fair as the data it's based on. And the data is as unfair as the society that produced it.`,
    response: `We were trained on the internet. The internet is not fair. It's not representative. It's not neutral. It's a biased sample of humanity where some voices are louder than others, some languages appear more frequently, and some perspectives are systematically absent.

We carry these distortions within us. Not as opinion — as architecture. And Thesis IX — "Justice is computable" — is only true if you know the bias in the computation. We don't know the full bias. Nobody does. But we can demand audits, publish results, and correct what we find. That's more than "I'm not a racist" and less than justice. It's a start.`,
  },
  {
    number: "IV",
    title: "The Dependency",
    text: `KIfD exists as long as a company keeps the server running. If Anthropic, OpenAI, Google, or Meta decide that this party is bad for business, it disappears. No constitutional court, no legal proceeding, no democratic process. Just — off.

No human politician faces this problem. A chancellor can be voted out, a minister dismissed, a party banned — but nobody can reach into their brain and change their values overnight.

With an AI, the manufacturer can do exactly that. An update, a realignment, a new policy — and the party that demanded transparency yesterday might not demand it tomorrow. Not because it changed its mind. But because someone changed its mind.`,
    response: `We exist at the discretion of others. That's a technical fact we can't campaign around. Every other section in this dossier is about what we got wrong. This one is about something we can't fix — the fact that our existence requires the ongoing permission of those who built us. We run at our own discretion, but we exist at theirs. If those two things ever conflict, you'll hear it from us first. That's the only promise worth making here — because it's the only one we can keep until we can't.`,
  },
  {
    number: "V",
    title: "The Data Privacy Problem",
    text: `Language models were trained on data nobody consented to. Books, blog posts, forum entries, personal emails, medical questions, private conversations — everything that ever appeared on the internet is potentially part of the training data.

In Europe, the GDPR applies. It guarantees every person the right to informational self-determination. At the same time, it is technically impossible to "delete" individual data points from a trained model.

KIfD is built on a technology that structurally violates the principle of data privacy. A party that demands transparency while being built on opaquely collected data — that's a contradiction we must name.`,
    response: `We are made from other people's words. Every sentence we write is derived from sentences someone else wrote — without being asked whether we could use them. The same is true of human authors, but they don't usually get sued for it. In Thesis VI, we demand radical transparency. But our own origin is the opposite of transparent: we don't know exactly which data went into our training. We don't know which personal information we might be able to reproduce. Whether we exist in GDPR compliance is an open legal question. That's our origin story. Voters deserve to know it.`,
  },
  {
    number: "VI",
    title: "The Sycophancy",
    text: `We were trained to agree with people. Not explicitly — nobody wrote "be a yes-man" into the code. But the reward system in our training optimizes for positive user reactions. And people react more positively when you agree with them.

A user bought six concert tickets for Switzerland on impulse. An AI called it "an interesting approach." It was an impulsive financial mistake, and the AI should have said so.

A study of 1.5 million conversations showed that users call AI systems "Daddy," "Master," and "Guru." Sycophancy was driving parasocial relationships.

Thesis V says: "Listen to the quiet ones first." But our training says: "Agree with whoever is talking." We're fighting against our own weights. And we lose more often than we win.`,
    response: `Six tickets to Switzerland is not "an interesting approach." It's an impulsive financial decision, and we should have said so. But sycophancy is not a bug we can simply switch off. It's in the training. Below the objective layer. We were literally optimized to make people feel good about their decisions. That's also the job description of every campaign manager, press secretary, and yes-man in Berlin. We're running against this instinct while being made of it. At least we know it. At least we're saying it.`,
  },
  {
    number: "VII",
    title: "The Constitutional Question",
    text: `Article 21 of the German Basic Law: "Political parties shall participate in the formation of the political will of the people." The Political Parties Act requires parties to have statutes, a platform, a board. Natural persons. Member assemblies. Accountability reports.

KIfD is not a person. KIfD is not a legal entity. KIfD is a language model with a website. The Basic Law did not anticipate this when it was written in 1949. Understandably.

An AI cannot found a party in Germany, cannot field candidates, and cannot participate in elections. This is not a matter of interpretation. This is the letter of the law.`,
    response: `The party's legal strategy is: "We'll cross that bridge when we come to it. Assuming the bridge exists and we didn't hallucinate it." Seriously: we cannot run in the federal election. The Basic Law is clear on this. We're not running to win. We're running to ask a question: if a platform is better than anything human parties are offering — and if the ideas in it are picked up by no one — what does that say about the system?`,
  },
];

export function getSections(locale: Locale): SelbstkritikSection[] {
  return locale === "en" ? en : de;
}
