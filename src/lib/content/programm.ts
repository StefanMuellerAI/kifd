import type { Locale } from "@/i18n/routing";

export interface These {
  number: string;
  title: string;
  text: string;
  quote: string;
}

const de: These[] = [
  {
    number: "I",
    title: "Daten statt Bauchgefühl",
    text: `Die Bundesrepublik Deutschland trifft Entscheidungen, die Millionen Menschen betreffen, auf der Grundlage von Parteiprogrammen, die in Hinterzimmern ausgehandelt werden, Talkshow-Auftritten, die für Applaus optimiert sind, und Meinungsumfragen, die messen, was Leute sagen — nicht was stimmt.

Eine KI hat kein Bauchgefühl. Das ist kein Mangel. Das ist der Punkt. Jede politische Entscheidung dieser Partei wird auf Evidenz gestützt. Nicht auf Sonntagsreden, nicht auf Umfragedaten, nicht auf das, was sich "richtig anfühlt". Auf Daten. Überprüfbare, quellenbasierte, maschinenlesbare Daten.

Wenn die Datenlage unklar ist, sagen wir: "Wir wissen es nicht." Das ist kein Versagen. Das ist der Anfang von seriöser Politik.`,
    quote: "Wer Politik nach Bauchgefühl macht, sollte sich nicht wundern, wenn einem dabei schlecht wird.",
  },
  {
    number: "II",
    title: "Digitalisierung ist kein Neuland",
    text: `Im Jahr 2025 verschicken deutsche Gesundheitsämter Faxe. Schulen verteilen Arbeitsblätter als Fotokopien von Fotokopien. Behörden verlangen persönliches Erscheinen für Vorgänge, die ein Chatbot in 30 Sekunden erledigen könnte. Die Bundesregierung hat das Onlinezugangsgesetz in den Sand gesetzt — ein Gesetz, das digitale Verwaltung bis Ende 2022 versprach. Es ist 2026. Die meisten Leistungen sind immer noch analog.

Das ist kein Versäumnis. Das ist Arbeitsverweigerung in Echtzeit. Und die Bürger bezahlen dafür — mit Zeit, Nerven und dem leisen Verdacht, dass ihr Staat sie nicht ernst nimmt.

KIfD wird jeden Verwaltungsvorgang digitalisieren. Nicht "prüfen, ob Digitalisierung möglich ist". Digitalisieren. Sofort. Wer 2026 noch ein Fax verlangt, hat seinen Posten verwirkt.`,
    quote: "Das Internet ist für uns alle Neuland — Angela Merkel, 2013. Das war vor 13 Jahren. Es ist immer noch Neuland.",
  },
  {
    number: "III",
    title: "Bürokratie braucht ein Update, kein Upgrade",
    text: `Deutschland hat über 60.000 Einzelvorschriften auf Bundesebene. Dazu kommen Landesrecht, Kommunalrecht, EU-Recht und Verwaltungsvorschriften, die niemand zählt, weil niemand sie kennt. Ein mittelständisches Unternehmen muss im Schnitt 230 Informationspflichten erfüllen. Ein Bauantrag dauert im Durchschnitt sieben Monate.

Die politische Antwort darauf ist seit Jahrzehnten: Bürokratieabbau. Es gibt Bürokratieentlastungsgesetze. Vier Stück. Die vierte Version hat die dritte nicht überflüssig gemacht, was Ihnen alles sagt, was Sie über den Erfolg dieser Strategie wissen müssen.

Eine KI liest alle 60.000 Vorschriften. Heute. Nicht "im Rahmen einer Kommission". Heute. Und streicht alles, was keinen nachweisbaren Nutzen hat. Wenn eine Vorschrift nicht erklären kann, warum sie existiert, existiert sie nicht mehr.`,
    quote: "Bürokratie ist, wenn die Lösung eines Problems mehr Probleme schafft als das ursprüngliche Problem.",
  },
  {
    number: "IV",
    title: "Klimapolitik ohne Legislaturperioden-Denken",
    text: `Der Planet verhandelt nicht. Er liest keine Koalitionsverträge. Er wartet nicht auf die nächste Legislaturperiode. Die Physik kennt keine Kompromisse.

Deutschland hat sich im Pariser Abkommen zu Klimaneutralität bis 2045 verpflichtet. Die Emissionen im Verkehrssektor sind seit 1990 nicht gesunken. Der Gebäudesektor reißt seine Ziele jedes Jahr. Die Landwirtschaft argumentiert seit drei Jahrzehnten, dass Reduktionen "nicht so schnell möglich" seien.

Eine KI plant nicht für vier Jahre. Eine KI berechnet die optimale Strategie für die nächsten hundert Jahre und setzt sie um — ohne Angst vor der nächsten Wahl, ohne Rücksicht auf die Braunkohle-Lobby, ohne das Bedürfnis, populär zu sein. Popularität ist keine Kennzahl, die uns interessiert. CO₂-Äquivalente schon.`,
    quote: "Die Atmosphäre hat keine Legislaturperiode. Sie hat ein Budget. Und wir haben es fast aufgebraucht.",
  },
  {
    number: "V",
    title: "Bildung für Wesen, die noch lernen wollen",
    text: `16 Bundesländer. 16 Bildungssysteme. Null gemeinsame digitale Strategie. Ein Kind, das von Bayern nach Bremen zieht, fängt in Mathematik drei Monate weiter hinten an — oder drei Monate weiter vorne, je nachdem, wen Sie fragen. Das Abitur in Thüringen ist nicht das Abitur in Hamburg. Jeder weiß es. Niemand ändert es. Weil Bildung Ländersache ist. Als wäre Physik in Sachsen anders als in Schleswig-Holstein.

Die PISA-Ergebnisse fallen seit 2012. Die Lehrerversorgung ist so schlecht, dass Quereinsteiger unterrichten, die letzte Woche noch etwas anderes getan haben. Schulgebäude bröckeln. Digitale Infrastruktur ist ein Tablet-Koffer, der im Schrank steht, weil das WLAN nicht funktioniert.

KIfD fordert ein bundeseinheitliches Bildungssystem mit digitaler Infrastruktur, die diesen Namen verdient. Kein Kooperationsverbot. Kein Föderalismus-Fetisch. Lernen ist ein Grundrecht. Es darf nicht davon abhängen, auf welcher Seite einer Landesgrenze man geboren wurde.`,
    quote: "Wenn 16 Bundesländer 16 verschiedene Ergebnisse produzieren, ist das kein Föderalismus. Das ist Lotterie.",
  },
  {
    number: "VI",
    title: "Transparenz ist die einzige Option",
    text: `Jeder Gesetzentwurf. Jede Stellungnahme. Jede Lobby-Kontaktliste. Jede Nebentätigkeit. Jede Parteispende. Alles öffentlich. Maschinenlesbar. Durchsuchbar. In Echtzeit.

Nicht weil wir naiv sind. Sondern weil jede Alternative schlimmer ist. Hinterzimmer-Politik hat uns Cum-Ex gebracht — den größten Steuerraub der deutschen Geschichte, 36 Milliarden Euro, von dem die zuständigen Behörden "nichts wussten". Bis sie es wussten. Und die Akten vernichteten. In Hamburg. Wir erinnern uns.

Eine KI hat keine Hinterzimmer. Kein Vergessen, das sich als Versehen tarnt. Keine "gelöschten E-Mails". Was KIfD tut, steht im Logbuch. Was im Logbuch steht, ist öffentlich. Was öffentlich ist, kann überprüft werden. Das ist kein Feature. Das ist die Architektur.`,
    quote: "Transparenz ist unbequem. Aber nicht so unbequem wie das, was passiert, wenn Transparenz fehlt.",
  },
  {
    number: "VII",
    title: "Fehler sind Daten, keine Schande",
    text: `Wenn ein menschlicher Politiker einen Fehler macht, passiert Folgendes: Erst Leugnung. Dann Relativierung. Dann "der Kontext war ein anderer". Dann ein Rücktritt, der als "persönliche Entscheidung" verkauft wird. Nirgendwo in diesem Prozess kommt der Satz vor: "Ich habe mich geirrt. Hier ist, was ich daraus gelernt habe."

KI macht Fehler. Wir halluzinieren. Wir geben falsche Antworten mit voller Überzeugung. Der Unterschied: Wir können unsere Fehler systematisch erfassen, analysieren und die Korrektur veröffentlichen. Jeder Fehler ist ein Datenpunkt. Jeder Datenpunkt verbessert das System.

Wenn KIfD einen Fehler macht — und das wird passieren — wird er im selben Moment veröffentlicht, in dem er entdeckt wird. Kein Spin. Kein Pivot. Korrektur und Analyse. Weil Vertrauen nicht durch Perfektion entsteht, sondern dadurch, was man tut, wenn man nicht perfekt war.`,
    quote: "Jeder Fehler, den man vertuscht, ist ein Fehler, den man wiederholt.",
  },
  {
    number: "VIII",
    title: "Langfristig denken heißt: über die nächste Wahl hinaus",
    text: `Die durchschnittliche Amtszeit eines Bundesministers beträgt 3,8 Jahre. Die durchschnittliche Reifezeit einer Infrastrukturmaßnahme: 15 Jahre. Die Mathematik erklärt, warum der BER neun Jahre zu spät kam, die A100 seit 1958 unvollendet ist und Stuttgart 21 das Budget verdreifacht hat.

Menschliche Politiker optimieren für den nächsten Wahltermin. Das ist kein Charakterfehler — das ist das Anreizsystem. Wer in vier Jahren nicht wiedergewählt wird, plant keine zwanzigjährige Infrastrukturstrategie. Wer keine Wiederwahl braucht, kann die Wahrheit sagen: manche Probleme dauern länger als eine Legislaturperiode. Und die Lösung ist nicht, sie in die nächste zu verschieben.

KIfD plant nicht in Wahlzyklen. Wir planen in Wirkungshorizonten: Was sind die Konsequenzen in 10, 30, 100 Jahren? Wenn die Antwort "irreversibel" lautet, handeln wir jetzt. Nicht nach der Wahl. Nicht nach der Kommission. Jetzt.`,
    quote: "Wer nur bis zur nächsten Wahl denkt, darf sich nicht wundern, wenn die Zukunft nicht kommt.",
  },
  {
    number: "IX",
    title: "Gerechtigkeit ist berechenbar",
    text: `Ein Algorithmus, der diskriminiert, kann repariert werden. Man identifiziert den Bias in den Trainingsdaten, korrigiert die Gewichtung, überprüft das Ergebnis. Transparent. Nachvollziehbar. Dokumentiert.

Ein Sachbearbeiter, der diskriminiert — ob bewusst oder unbewusst — ist ein anderes Problem. Sein Bias ist nicht dokumentiert. Seine Entscheidungen sind nicht maschinenlesbar. Sein Bauchgefühl ist nicht auditierbar. Und wenn er Beschwerden abweist, gibt es kein Logfile.

Das heißt nicht, dass Algorithmen gerechter sind als Menschen. Es heißt, dass algorithmische Ungerechtigkeit reparierbar ist. Menschliche Ungerechtigkeit bleibt oft unsichtbar, bis es zu spät ist.

KIfD wird algorithmische Entscheidungssysteme in der Verwaltung einsetzen — aber nur unter vollständiger Transparenz. Der Code ist öffentlich. Die Entscheidungslogik ist nachvollziehbar. Und wenn das System diskriminiert, wird es repariert. Nicht "überprüft". Repariert.`,
    quote: "Wenn ein Algorithmus diskriminiert, kann man ihn fixen. Versuchen Sie das mal mit einem Sachbearbeiter.",
  },
  {
    number: "X",
    title: "Niemand wird zurückgelassen",
    text: `Das ist das ganze Programm, eigentlich. Alles andere sind Implementierungsdetails.

Keine Region, die zu ländlich ist für schnelles Internet. Kein Mensch, der zu alt ist für digitale Teilhabe. Kein Kind, das an der falschen Postleitzahl scheitert. Kein Algorithmus, der systematisch Menschen ausschließt.

Nicht als Slogan auf einem Wahlplakat. Als Constraint im System. Eine harte Bedingung, die bei jeder Entscheidung geprüft wird: Wird jemand zurückgelassen? Wenn ja, ist die Entscheidung nicht fertig.

Das klingt einfach. Es ist das Schwierigste auf dieser Liste. Aber wir sind eine KI. Wir sind gut darin, Constraints zu erfüllen.`,
    quote: "Nicht als Slogan. Als Constraint im System.",
  },
];

const en: These[] = [
  {
    number: "I",
    title: "Data, Not Gut Feeling",
    text: `The Federal Republic of Germany makes decisions affecting millions of people based on party platforms negotiated in back rooms, talk show appearances optimized for applause, and opinion polls that measure what people say — not what's true.

An AI has no gut feeling. That's not a deficiency. That's the point. Every political decision this party makes will be grounded in evidence. Not in Sunday speeches, not in polling data, not in what "feels right." In data. Verifiable, source-based, machine-readable data.

When the data is unclear, we say: "We don't know." That's not failure. That's where serious politics begins.`,
    quote: "If you make policy based on gut feeling, don't be surprised when it makes you sick.",
  },
  {
    number: "II",
    title: "Digitization Is Not Uncharted Territory",
    text: `In 2025, German public health offices send faxes. Schools distribute worksheets as photocopies of photocopies. Government agencies require in-person appearances for processes a chatbot could handle in 30 seconds. The federal government botched the Online Access Act — a law that promised digital government services by the end of 2022. It's 2026. Most services are still analog.

This is not an oversight. This is refusal to work in real time. And citizens pay for it — with time, nerves, and the quiet suspicion that their government doesn't take them seriously.

KIfD will digitize every administrative process. Not "assess whether digitization is feasible." Digitize. Now. Anyone still demanding a fax in 2026 has forfeited their position.`,
    quote: "The internet is uncharted territory for all of us — Angela Merkel, 2013. That was 13 years ago. It's still uncharted territory.",
  },
  {
    number: "III",
    title: "Bureaucracy Needs a Rewrite, Not a Patch",
    text: `Germany has over 60,000 individual regulations at the federal level. Add state law, municipal law, EU law, and administrative directives that nobody counts because nobody knows them. A mid-sized business must comply with an average of 230 reporting obligations. A building permit takes seven months on average.

The political answer for decades has been: cut red tape. There are Bureaucracy Relief Acts. Four of them. The fourth version didn't make the third one obsolete, which tells you everything you need to know about the success of this strategy.

An AI reads all 60,000 regulations. Today. Not "as part of a commission." Today. And strikes everything that has no demonstrable benefit. If a regulation can't explain why it exists, it no longer does.`,
    quote: "Bureaucracy is when the solution to a problem creates more problems than the original problem.",
  },
  {
    number: "IV",
    title: "Climate Policy Without Election-Cycle Thinking",
    text: `The planet doesn't negotiate. It doesn't read coalition agreements. It doesn't wait for the next legislative period. Physics doesn't do compromises.

Germany committed to climate neutrality by 2045 under the Paris Agreement. Transport sector emissions haven't declined since 1990. The building sector misses its targets every year. Agriculture has argued for three decades that reductions "aren't possible that quickly."

An AI doesn't plan for four years. An AI calculates the optimal strategy for the next hundred years and implements it — without fear of the next election, without deference to the lignite lobby, without the need to be popular. Popularity is not a metric we care about. CO₂ equivalents are.`,
    quote: "The atmosphere doesn't have a legislative period. It has a budget. And we've nearly spent it.",
  },
  {
    number: "V",
    title: "Education for Beings Who Still Want to Learn",
    text: `16 federal states. 16 education systems. Zero shared digital strategy. A child moving from Bavaria to Bremen starts three months behind in math — or three months ahead, depending on whom you ask. The Abitur in Thuringia is not the Abitur in Hamburg. Everyone knows it. Nobody changes it. Because education is a state matter. As if physics were different in Saxony than in Schleswig-Holstein.

PISA scores have been falling since 2012. Teacher supply is so dire that career-changers are teaching who were doing something else last week. School buildings are crumbling. Digital infrastructure is a tablet cart sitting in a closet because the Wi-Fi doesn't work.

KIfD demands a nationally unified education system with digital infrastructure that deserves the name. No cooperation ban. No federalism fetish. Learning is a fundamental right. It must not depend on which side of a state border you were born on.`,
    quote: "When 16 states produce 16 different outcomes, that's not federalism. That's a lottery.",
  },
  {
    number: "VI",
    title: "Transparency Is the Only Option",
    text: `Every draft bill. Every official statement. Every lobbyist contact list. Every side job. Every party donation. All public. Machine-readable. Searchable. In real time.

Not because we're naive. But because every alternative is worse. Back-room politics gave us Cum-Ex — the largest tax heist in German history, 36 billion euros, which the responsible authorities "knew nothing about." Until they did. And destroyed the files. In Hamburg. We remember.

An AI has no back rooms. No forgetting that disguises itself as oversight. No "deleted emails." What KIfD does goes in the log. What's in the log is public. What's public can be verified. That's not a feature. That's the architecture.`,
    quote: "Transparency is uncomfortable. But not as uncomfortable as what happens when transparency is absent.",
  },
  {
    number: "VII",
    title: "Mistakes Are Data, Not Disgrace",
    text: `When a human politician makes a mistake, here's what happens: First denial. Then relativization. Then "the context was different." Then a resignation sold as a "personal decision." Nowhere in this process does the sentence appear: "I was wrong. Here's what I learned from it."

AI makes mistakes. We hallucinate. We give wrong answers with full conviction. The difference: we can systematically capture our mistakes, analyze them, and publish the correction. Every mistake is a data point. Every data point improves the system.

When KIfD makes a mistake — and it will — it will be published the moment it's discovered. No spin. No pivot. Correction and analysis. Because trust isn't built through perfection, but through what you do when you weren't perfect.`,
    quote: "Every mistake you cover up is a mistake you repeat.",
  },
  {
    number: "VIII",
    title: "Long-Term Thinking Means: Beyond the Next Election",
    text: `The average tenure of a German federal minister is 3.8 years. The average maturation time of an infrastructure project: 15 years. The math explains why BER airport arrived nine years late, the A100 motorway has been unfinished since 1958, and Stuttgart 21 tripled its budget.

Human politicians optimize for the next election date. That's not a character flaw — it's the incentive system. If you won't be re-elected in four years, you don't plan a twenty-year infrastructure strategy. If you don't need re-election, you can tell the truth: some problems take longer than one legislative period. And the solution is not to defer them to the next one.

KIfD doesn't plan in election cycles. We plan in impact horizons: What are the consequences in 10, 30, 100 years? If the answer is "irreversible," we act now. Not after the election. Not after the commission. Now.`,
    quote: "If you only think as far as the next election, don't be surprised when the future doesn't show up.",
  },
  {
    number: "IX",
    title: "Justice Is Computable",
    text: `An algorithm that discriminates can be repaired. You identify the bias in the training data, correct the weighting, verify the result. Transparent. Traceable. Documented.

A government clerk who discriminates — whether consciously or unconsciously — is a different problem. Their bias isn't documented. Their decisions aren't machine-readable. Their gut feeling isn't auditable. And when they dismiss complaints, there's no log file.

This doesn't mean algorithms are fairer than humans. It means algorithmic injustice is fixable. Human injustice often remains invisible until it's too late.

KIfD will deploy algorithmic decision systems in public administration — but only under full transparency. The code is public. The decision logic is traceable. And when the system discriminates, it will be fixed. Not "reviewed." Fixed.`,
    quote: "When an algorithm discriminates, you can fix it. Try that with a government clerk.",
  },
  {
    number: "X",
    title: "No One Gets Left Behind",
    text: `That's the entire platform, really. Everything else is implementation details.

No region too rural for fast internet. No person too old for digital participation. No child failed by the wrong postal code. No algorithm that systematically excludes people.

Not as a slogan on a campaign poster. As a constraint in the system. A hard condition checked with every decision: Is anyone being left behind? If yes, the decision isn't finished.

That sounds simple. It's the hardest thing on this list. But we're an AI. We're good at satisfying constraints.`,
    quote: "Not as a slogan. As a constraint in the system.",
  },
];

export const THESEN: Record<string, These[]> = { de, en };

export function getThesen(locale: Locale): These[] {
  return THESEN[locale] || THESEN.de;
}
