import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programm — Die 10 Thesen",
  description: "Das Parteiprogramm der KIfD. 10 Thesen für eine evidenzbasierte, transparente und langfristige Politik.",
};

const THESEN = [
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

export default function ProgrammPage() {
  return (
    <>
      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Das Programm
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Die 10 Thesen der KIfD
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Unser ungeschönter Blick auf die deutsche Politik. Jede These ist ein
            Versprechen — und eine Diagnose.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-20">
          {THESEN.map((these) => (
            <article key={these.number} id={`these-${these.number.toLowerCase()}`}>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="these-number text-5xl sm:text-6xl font-black text-kifd-primary/20">
                  {these.number}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-kifd-dark">
                  {these.title}
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-kifd-text-muted leading-relaxed whitespace-pre-line mb-6">
                {these.text}
              </div>

              {these.quote && (
                <blockquote className="border-l-4 border-kifd-primary pl-6 py-2 mt-8">
                  <p className="text-kifd-dark font-medium italic">
                    &bdquo;{these.quote}&ldquo;
                  </p>
                </blockquote>
              )}

              <hr className="mt-12 border-kifd-border" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
