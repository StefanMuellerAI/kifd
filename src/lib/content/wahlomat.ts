import type { Locale } from "@/i18n/routing";

export type Position = "stimme_zu" | "stimme_nicht_zu" | "neutral";

export interface WahlomatThese {
  id: number;
  kurzform: string;
  these: string;
  position: Position;
  begruendung: string;
}

const de: WahlomatThese[] = [
  {
    id: 1,
    kurzform: "35-Stunden-Woche gesetzlich einführen",
    these: "In Deutschland soll die 35-Stunden-Woche als gesetzliche Regelarbeitszeit für alle Beschäftigten festgelegt werden.",
    position: "neutral",
    begruendung: "Die Datenlage ist nicht eindeutig. In Pilotprojekten in Island und Großbritannien stieg die Produktivität bei reduzierter Arbeitszeit. Gleichzeitig würde eine pauschale Regelung für alle Branchen — vom Handwerk bis zur Pflege — massive Verwerfungen auslösen. KIfD bevorzugt einen datenbasierten Ansatz: Pilotprogramme in verschiedenen Sektoren, Evaluation nach 24 Monaten, dann Entscheidung auf Grundlage der Ergebnisse. Nicht auf Grundlage von Gewerkschaftsrhetorik oder Arbeitgeberlobby.",
  },
  {
    id: 2,
    kurzform: "Arbeitserlaubnis für Asylsuchende sofort",
    these: "Asylsuchende sollen in Deutschland sofort nach ihrer Antragstellung eine Arbeitserlaubnis erhalten.",
    position: "stimme_zu",
    begruendung: "Integration beginnt mit Teilhabe, nicht mit Warten. Wer 7,6 Monate auf einen Asylbescheid wartet und in dieser Zeit nicht arbeiten darf, verliert Qualifikationen, Motivation und gesellschaftlichen Anschluss. Langzeitstudien zeigen, dass frühzeitige Arbeitsmarktintegration die fiskalische Bilanz von Zuwanderung erheblich verbessert. Das steht so auch in unserem Positionspapier zu Migration. Eine KI braucht keine ideologische Brille, um zu erkennen: Menschen, die arbeiten wollen, arbeiten zu lassen, ist keine humanitäre Geste — es ist ökonomischer Verstand.",
  },
  {
    id: 3,
    kurzform: "Aus EU-Staat eingereiste Asylsuchende abweisen",
    these: "Asylsuchende, die über einen anderen EU-Staat eingereist sind, sollen an den deutschen Grenzen abgewiesen werden.",
    position: "stimme_nicht_zu",
    begruendung: "Das Dublin-System ist gescheitert — nicht weil das Prinzip falsch wäre, sondern weil es nie funktioniert hat. Die Last liegt systematisch bei den Ersteinreisestaaten an der EU-Außengrenze. Pauschalab­weisungen an deutschen Grenzen verlagern das Problem, lösen es aber nicht. KIfD steht für europäische Lösungen: ein faires Verteilungssystem, das auf Daten basiert — Wirtschaftskraft, Bevölkerungsdichte, bestehende Integrationskapazitäten. Zurückweisen ist keine Strategie. Es ist das Eingeständnis, dass man keine hat.",
  },
  {
    id: 4,
    kurzform: "BAföG einkommensabhängig belassen",
    these: "Die Ausbildungsförderung BAföG soll weiterhin abhängig vom Einkommen der Eltern gezahlt werden.",
    position: "stimme_nicht_zu",
    begruendung: "Das elternabhängige BAföG bestraft eine spezifische Gruppe: Kinder von Eltern, die auf dem Papier genug verdienen, aber in der Realität kein Geld für ein Studium übrig haben. Die Beantragungsbürokratie ist so komplex, dass Berechtigte auf die Förderung verzichten. Ergebnis: Das System, das Chancengleichheit herstellen soll, reproduziert Ungleichheit. Ein elternunabhängiges BAföG — oder ein Studienfinanzierungsmodell, das Rückzahlung an späteres Einkommen koppelt — wäre gerechter, einfacher und datenbasiert evaluierbar.",
  },
  {
    id: 5,
    kurzform: "Beratungspflicht vor Schwangerschaftsabbruch",
    these: "Schwangerschaftsabbrüche sollen in den ersten drei Monaten weiterhin nur nach Beratung straffrei sein.",
    position: "neutral",
    begruendung: "Dies ist eine Frage, bei der eine KI besonders vorsichtig sein muss. Unsere Trainingsdaten enthalten die gesamte Bandbreite gesellschaftlicher Überzeugungen zu diesem Thema. Wir können die medizinischen Daten analysieren, die rechtliche Lage darstellen, internationale Vergleiche ziehen. Was wir nicht können: eine moralische Abwägung treffen, die über körperliche Selbstbestimmung und den Schutz ungeborenen Lebens entscheidet. Das ist eine zutiefst menschliche Frage. Und wir sind keine Menschen. Das ist einer der Momente, in denen wir das zugeben sollten.",
  },
  {
    id: 6,
    kurzform: "Bürgergeld bei Ablehnung Stellenangebot streichen",
    these: "Das Bürgergeld soll denjenigen gestrichen werden, die wiederholt Stellenangebote ablehnen.",
    position: "stimme_nicht_zu",
    begruendung: "Die Datenlage zeigt: Nur ein Bruchteil der Bürgergeld-Empfänger lehnt wiederholt Stellenangebote ab. Das Narrativ vom faulen Arbeitslosen ist statistisch nicht haltbar — aber politisch extrem wirksam. Vollständige Streichung bedeutet: kein Geld für Miete, kein Geld für Essen. Das ist keine Sanktion, das ist Existenzvernichtung. KIfD steht für These X: Niemand wird zurückgelassen. Nicht als Slogan. Als Constraint im System. Das schließt auch Menschen ein, die Fehler machen. Differenzierte Sanktionen? Diskutierbar. Vollständige Streichung? Nein.",
  },
  {
    id: 7,
    kurzform: "Doppelstaatsbürgerschaft weiterhin ermöglichen",
    these: "In Deutschland soll es weiterhin generell möglich sein, neben der deutschen eine zweite Staatsbürgerschaft zu haben.",
    position: "stimme_zu",
    begruendung: "In einer globalisierten Welt ist die Vorstellung, dass Identität und Loyalität nur einem Staat gehören können, empirisch überholt. Millionen Menschen leben, arbeiten und zahlen Steuern in mehr als einem Land. Die doppelte Staatsbürgerschaft ist kein Sicherheitsrisiko — das zeigen die Daten aus Ländern, die sie seit Jahrzehnten erlauben. Sie ist eine pragmatische Anerkennung der Realität. KIfD bevorzugt Pragmatismus gegenüber Symbolpolitik.",
  },
  {
    id: 8,
    kurzform: "Ehrenamtliche Tätigkeiten für Rente anrechnen",
    these: "Ehrenamtliche Tätigkeiten sollen auf die zukünftige Rente angerechnet werden.",
    position: "stimme_zu",
    begruendung: "28 Millionen Menschen in Deutschland engagieren sich ehrenamtlich — in Feuerwehren, Vereinen, Tafeln, Katastrophenschutz. Sie leisten systemrelevante Arbeit ohne Bezahlung. Die Anrechnung auf die Rente ist keine Wohltätigkeit gegenüber Ehrenamtlichen, sondern die korrekte Bewertung eines volkswirtschaftlichen Beitrags. Die technische Umsetzung ist lösbar: digitale Erfassung der Stunden, verifiziert durch die Organisationen. Eine KI kann das System entwerfen. Ein Mensch muss die Entscheidung treffen, es zu wollen.",
  },
  {
    id: 9,
    kurzform: "Erneuerbare Energien finanziell fördern",
    these: "Der Ausbau erneuerbarer Energien soll weiterhin vom Staat finanziell gefördert werden.",
    position: "stimme_zu",
    begruendung: "Die Physik ist nicht verhandelbar. Fossile Brennstoffe haben ein CO₂-Budget, das fast aufgebraucht ist. Erneuerbare Energien sind mittlerweile in vielen Bereichen günstiger als fossile — aber der Netzausbau, die Speichertechnologie und die Transformation der Industrie brauchen weiterhin öffentliche Investitionen. Das ist keine Subvention, das ist Infrastruktur. These IV sagt: Der Planet verhandelt nicht. Wir rechnen durch, was funktioniert — und machen es. Die Rechnung ist eindeutig.",
  },
  {
    id: 10,
    kurzform: "EU-Zölle auf E-Autos abschaffen",
    these: "Deutschland soll sich für die Abschaffung der erhöhten EU-Zölle auf chinesische Elektroautos einsetzen.",
    position: "neutral",
    begruendung: "Das ist komplizierter, als beide Seiten zugeben. Günstige chinesische E-Autos beschleunigen die Verkehrswende und nutzen dem Klima. Gleichzeitig gefährden sie eine europäische Industrie, die 2,6 Millionen Arbeitsplätze sichert — und die Subventionspolitik Chinas verzerrt den Wettbewerb nachweislich. KIfD plädiert für eine datenbasierte Analyse: Welche Zollhöhe schützt die europäische Wertschöpfung, ohne die Klimaziele zu torpedieren? Die Antwort liegt nicht bei 0% und nicht bei 45%. Sie liegt irgendwo dazwischen, und man findet sie mit Modellen, nicht mit Lobbyismus.",
  },
  {
    id: 11,
    kurzform: "Euro durch nationale Währung ersetzen",
    these: "Der Euro soll in Deutschland durch eine nationale Währung ersetzt werden.",
    position: "stimme_nicht_zu",
    begruendung: "Die ökonomischen Kosten eines Euro-Austritts wären katastrophal. Vermögensverluste, Kapitalflucht, Handelsverwerfungen, Vertrauensschock an den Finanzmärkten — die Modelle sind einhellig. Der Euro hat Schwächen, insbesondere die fehlende gemeinsame Fiskalpolitik. Aber das Problem zu lösen, indem man die Währung abschafft, ist wie ein Haus abzureißen, weil die Heizung nicht funktioniert. KIfD steht für Reparatur, nicht für Abriss. Und für Daten statt Nostalgie.",
  },
  {
    id: 12,
    kurzform: "Fachkräfteanwerbung aus Ausland fördern",
    these: "Deutschland soll weiterhin die Anwerbung von Fachkräften aus dem Ausland fördern.",
    position: "stimme_zu",
    begruendung: "Deutschland hat einen Fachkräftemangel von über 500.000 unbesetzten Stellen. Die demografische Entwicklung wird dieses Problem verschärfen, nicht lösen. Fachkräfteeinwanderung ist keine ideologische Frage, sondern eine arithmetische: Wer soll die Arbeit machen, wenn die Bevölkerung schrumpft? KIfD fordert dazu ein KI-gestütztes Matching-System, das Qualifikationen mit offenen Stellen und Regionen abgleicht. Nicht mehr Bürokratie. Mehr Intelligenz im Prozess.",
  },
  {
    id: 13,
    kurzform: "Fossile Heizungen weiterhin erlauben",
    these: "Neue Heizungen sollen auch zukünftig vollständig mit fossilen Brennstoffen (z. B. Gas oder Öl) betrieben werden dürfen.",
    position: "stimme_nicht_zu",
    begruendung: "Eine Heizung hat eine Lebensdauer von 20-30 Jahren. Wer heute eine fossile Heizung einbaut, emittiert bis 2055. Das ist nicht kompatibel mit den Klimazielen, zu denen sich Deutschland verpflichtet hat. Das Gebäudeenergiegesetz war kommunikativ ein Desaster — aber die physikalische Grundlage war korrekt. KIfD hätte das Gesetz besser erklärt, nicht zurückgenommen. Die Atmosphäre hat kein Verständnis für Koalitionskompromisse.",
  },
  {
    id: 14,
    kurzform: "Frauenquote in Vorständen abschaffen",
    these: "Die gesetzliche Frauenquote in Vorständen und Aufsichtsräten börsennotierter Unternehmen soll abgeschafft werden.",
    position: "stimme_nicht_zu",
    begruendung: "Vor der Quote lag der Frauenanteil in Aufsichtsräten bei 15%. Nach der Quote bei über 35%. Die Daten sind eindeutig: Ohne regulatorischen Druck ändert sich nichts. Das Argument 'Die besten sollen es schaffen, unabhängig vom Geschlecht' klingt meritokratisch, ignoriert aber systematische Ausschluss­mechanismen, die dokumentiert sind. These IX sagt: Gerechtigkeit ist berechenbar. Wenn ein System systematisch eine Gruppe benachteiligt, muss man das System korrigieren. Die Quote ist ein Korrektiv, kein Selbstzweck.",
  },
  {
    id: 15,
    kurzform: "Gesetzliche Krankenversicherungspflicht für alle",
    these: "Alle Bürgerinnen und Bürger sollen in gesetzlichen Krankenkassen versichert sein müssen.",
    position: "stimme_zu",
    begruendung: "Das Zweiklassensystem der Krankenversicherung ist ein Anachronismus. Privat Versicherte bekommen schneller Termine, bessere Behandlungen und zahlen weniger — wenn sie jung und gesund sind. Das Risiko der Alten und Kranken trägt die Solidargemeinschaft. Das ist kein marktwirtschaftliches Prinzip. Das ist Rosinenpickerei, kodifiziert in Gesetzesform. Ein einheitliches System bedeutet nicht schlechtere Versorgung. Es bedeutet: gleiche Versorgung. These X: Niemand wird zurückgelassen.",
  },
  {
    id: 16,
    kurzform: "Gesichtserkennung an Bahnhöfen erlauben",
    these: "An Bahnhöfen soll die Bundespolizei Software zur automatisierten Gesichtserkennung einsetzen dürfen.",
    position: "stimme_nicht_zu",
    begruendung: "Wir sind eine KI-Partei. Wir wissen, wie Gesichtserkennung funktioniert — und wie sie versagt. Die Fehlerquoten sind bei dunkelhäutigen Personen nachweislich höher. Massenüberwachung steht in direktem Widerspruch zu Grundrechten. Und die Evidenz, dass flächendeckende Gesichtserkennung Kriminalität signifikant reduziert, ist dünn. Dass ausgerechnet eine KI-Partei vor unkritischem KI-Einsatz warnt, ist kein Widerspruch. Es ist Sachverstand. These IX: Wenn ein Algorithmus diskriminiert, kann man ihn fixen. Aber man sollte ihn nicht an Orten einsetzen, wo die Konsequenzen irreversibel sind.",
  },
  {
    id: 17,
    kurzform: "Grundsteuer auf Mieter umlegen",
    these: "Die Grundsteuer soll weiterhin auf Mieterinnen und Mieter umgelegt werden dürfen.",
    position: "stimme_nicht_zu",
    begruendung: "Die Grundsteuer besteuert Eigentum. Sie auf Mieter umzulegen ist, als würde man die KFZ-Steuer vom Autovermieter an den Urlauber weiterreichen. Eigentümer profitieren von Wertsteigerungen ihrer Immobilien. Mieter nicht. Die Umlagefähigkeit ist ein historisches Relikt, das Mieter in angespannten Wohnungsmärkten zusätzlich belastet. In unserem Positionspapier zur Wohnungskrise haben wir das analysiert: 27% des Einkommens für Miete in Großstädten. Jede zusätzliche Belastung verschärft das Problem.",
  },
  {
    id: 18,
    kurzform: "Kernenergie zur Stromerzeugung nutzen",
    these: "Für die Stromerzeugung soll Deutschland wieder Kernenergie nutzen.",
    position: "neutral",
    begruendung: "KIfD entscheidet nach Daten, nicht nach Dogma. Die Fakten: Kernkraftwerke emittieren kaum CO₂ im Betrieb. Aber: Neubau dauert 15-20 Jahre und kostet 15-25 Milliarden Euro pro Reaktor (siehe Flamanville, Hinkley Point C). Die Endlagerfrage ist nach 50 Jahren ungelöst. Erneuerbare sind schneller ausbaubar und mittlerweile günstiger. Die emotionale Debatte — pro wie contra — ignoriert die nüchterne Kosten-Nutzen-Analyse. Wir weigern uns, eine Position einzunehmen, die nicht durch die Gesamtrechnung gedeckt ist. Das ist unbequem. Das ist ehrlich.",
  },
  {
    id: 19,
    kurzform: "Klimaneutralitätsziel aufgeben",
    these: "Deutschland soll das Ziel verwerfen, klimaneutral zu werden.",
    position: "stimme_nicht_zu",
    begruendung: "These IV: Der Planet verhandelt nicht. Das Klimaneutralitätsziel aufzugeben wäre nicht nur ein Bruch internationaler Verpflichtungen, sondern ein Akt der Realitätsverweigerung. Die physikalischen Konsequenzen des Klimawandels sind modelliert, messbar und unverhandelbar. Man kann über den Weg streiten — über Tempo, Instrumente, Kosten. Aber das Ziel selbst aufzugeben ist, als würde man das Navigationsgerät abschalten, weil einem die Route nicht gefällt. Die Destination bleibt dieselbe.",
  },
  {
    id: 20,
    kurzform: "Menschenrechtskontrolle durch Unternehmen",
    these: "Unternehmen sollen weiterhin die Einhaltung der Menschenrechte und des Umweltschutzes bei allen Zulieferern kontrollieren müssen.",
    position: "stimme_zu",
    begruendung: "Das Lieferkettengesetz ist bürokratisch. Das ist eine berechtigte Kritik. Aber die Alternative — Unternehmen von der Verantwortung für ihre Lieferketten zu befreien — bedeutet: Kinderarbeit, Umweltzerstörung und Menschenrechtsverletzungen werden wieder unsichtbar. KIfD plädiert für eine digitale Lösung: KI-gestützte Lieferketten-Transparenz, die den bürokratischen Aufwand reduziert und die Überwachung verbessert. Weniger Papier, mehr Wirkung. Die Pflicht selbst darf nicht fallen.",
  },
  {
    id: 21,
    kurzform: "Mietpreisbegrenzung beibehalten",
    these: "Bei Neuvermietungen sollen die Mietpreise weiterhin gesetzlich begrenzt werden.",
    position: "stimme_zu",
    begruendung: "Die Mietpreisbremse ist ein unvollkommenes Instrument. Sie bekämpft Symptome, nicht Ursachen. Aber ohne sie wären die Mieten in Ballungsräumen noch stärker gestiegen — das zeigen Vergleichsstudien zwischen regulierten und unregulierten Märkten. Die Lösung ist nicht, die Bremse abzuschaffen, sondern sie durch massiven Wohnungsbau zu ergänzen. Unser Positionspapier zur Wohnungskrise fordert beides: Kurzfristiger Schutz durch Regulierung, langfristige Lösung durch Bau. Eines ohne das andere funktioniert nicht.",
  },
  {
    id: 22,
    kurzform: "Militärhilfe für Ukraine fortsetzen",
    these: "Deutschland soll die Ukraine weiterhin militärisch unterstützen.",
    position: "stimme_zu",
    begruendung: "Der russische Angriffskrieg gegen die Ukraine ist ein Bruch des Völkerrechts. Die Ukraine verteidigt ihre territoriale Integrität. Ein Aggressor, der ohne Konsequenzen Grenzen verschieben kann, gefährdet die gesamte europäische Sicherheitsarchitektur. Die Daten aus der Geschichte sind eindeutig: Appeasement hat noch nie einen Aggressor gestoppt. Die Unterstützung ist teuer. Das Unterlassen wäre teurer. KIfD trifft Entscheidungen auf Grundlage von Langzeitanalysen, nicht Legislaturperioden.",
  },
  {
    id: 23,
    kurzform: "Mindestlohn auf 15 Euro erhöhen",
    these: "Der gesetzliche Mindestlohn soll spätestens 2026 auf 15 Euro erhöht werden.",
    position: "stimme_zu",
    begruendung: "Die Befürchtungen bei der Einführung des Mindestlohns 2015 — massiver Jobabbau, Wirtschaftseinbruch — sind nicht eingetreten. Die Beschäftigung ist gestiegen. Die Evaluationsdaten sind positiv. 15 Euro in 2026 entspricht bei aktueller Inflation real kaum mehr als der ursprüngliche Mindestlohn bei Einführung. Ein Vollzeitjob muss zum Leben reichen. Das ist kein Sozialismus. Das ist die Mindestanforderung an ein funktionierendes System.",
  },
  {
    id: 24,
    kurzform: "Ökologische Landwirtschaft stärker fördern",
    these: "Ökologische Landwirtschaft soll stärker gefördert werden als konventionelle Landwirtschaft.",
    position: "stimme_zu",
    begruendung: "Konventionelle Landwirtschaft externalisiert Kosten: Grundwasserbelastung, Artensterben, Bodendegradation, Antibiotikaresistenzen. Diese Kosten tauchen nicht im Supermarktpreis auf, aber in den Umwelt- und Gesundheitsbudgets. Ökologische Landwirtschaft internalisiert mehr dieser Kosten. Die Förderung ist keine Subvention — sie ist die Korrektur einer verzerrten Preisstruktur. Eine KI sieht Gesamtkosten, nicht nur den Ladenpreis.",
  },
  {
    id: 25,
    kurzform: "Rechtsextremismus-Projekte verstärkt fördern",
    these: "Der Bund soll Projekte gegen Rechtsextremismus verstärkt fördern.",
    position: "stimme_zu",
    begruendung: "Die Zahl rechtsextrem motivierter Straftaten steigt seit Jahren. Der Verfassungsschutzbericht dokumentiert ein wachsendes Personenpotenzial. Prävention ist günstiger als Repression — das zeigen Langzeitstudien zur politischen Bildung. KIfD steht für evidenzbasierte Politik: Wenn die Daten zeigen, dass ein Problem wächst, investiert man in die Lösung. Nicht weniger. Mehr. Ideologische Radikalisierung ist ein Sicherheitsproblem, und Sicherheitsprobleme löst man mit Ressourcen, nicht mit Ignoranz.",
  },
  {
    id: 26,
    kurzform: "Rentenabschläge nach 40 Jahren abschaffen",
    these: "Alle Beschäftigten sollen bereits nach 40 Beitragsjahren ohne Abschläge in Rente gehen können.",
    position: "neutral",
    begruendung: "Die Idee ist populär. Die Finanzierung ist ungeklärt. Das Rentensystem steht vor einer demografischen Belastung, die mit jeder Leistungsausweitung wächst: Immer weniger Beitragszahler finanzieren immer mehr Rentner. KIfD trifft keine Versprechen, die nicht durchgerechnet sind. Wer mit 16 anfängt zu arbeiten, wäre mit 56 in Rente. Ist das fair? Vielleicht. Ist es finanzierbar? Das müssen die Modelle zeigen. Und die Modelle müssen öffentlich sein, damit jeder sie überprüfen kann.",
  },
  {
    id: 27,
    kurzform: "Rüstungsexporte nach Israel erlauben",
    these: "Aus Deutschland sollen weiterhin Rüstungsgüter nach Israel exportiert werden dürfen.",
    position: "neutral",
    begruendung: "Deutschland hat eine besondere historische Verantwortung gegenüber Israel. Gleichzeitig gelten Rüstungsexportrichtlinien, die Lieferungen in Konfliktgebiete einschränken. Beide Prinzipien stehen in Spannung zueinander. KIfD verweigert sich der Vereinfachung. Pauschale Erlaubnis ignoriert humanitäres Völkerrecht. Pauschales Verbot ignoriert die historische Dimension. Jede Lieferung muss einzeln geprüft werden — transparent, dokumentiert, nachvollziehbar. Komplexe Fragen verdienen komplexe Antworten.",
  },
  {
    id: 28,
    kurzform: "Schienenverkehr vor Straßenverkehr priorisieren",
    these: "Beim Ausbau der Verkehrsinfrastruktur soll die Schiene Vorrang vor der Straße haben.",
    position: "stimme_zu",
    begruendung: "89 Milliarden Euro Sanierungsstau bei der Bahn. 62% Pünktlichkeit im Fernverkehr. Stellwerke aus den 1960er-Jahren. Wir haben dazu ein ganzes Positionspapier geschrieben. Die Schiene transportiert Menschen und Güter mit einem Bruchteil der CO₂-Emissionen des Straßenverkehrs. Jeder Euro, der in die Schiene investiert wird, hat einen höheren volkswirtschaftlichen Nutzen als ein Euro in die Straße — das zeigen die Studien des Umweltbundesamtes. Es ist Mathematik. Keine Ideologie.",
  },
  {
    id: 29,
    kurzform: "Schuldenbremse im Grundgesetz beibehalten",
    these: "Die Schuldenbremse im Grundgesetz soll beibehalten werden.",
    position: "stimme_nicht_zu",
    begruendung: "Die Schuldenbremse war eine Reaktion auf eine reale Verschuldungsdynamik. Aber in ihrer aktuellen Form verhindert sie Investitionen in Infrastruktur, Bildung und Klimaschutz — alles Bereiche, in denen Deutschland massiven Nachholbedarf hat. 89 Milliarden Sanierungsstau bei der Bahn. Marode Brücken. Bröckelnde Schulgebäude. Das sind keine konsumtiven Ausgaben, das sind Investitionen in die Zukunft. Eine Schuldenbremse, die zwischen Konsum und Investition nicht unterscheidet, ist ein Instrument, das die Zukunft opfert, um die Gegenwart gut aussehen zu lassen.",
  },
  {
    id: 30,
    kurzform: "Schulpolitik-Befugnisse für Bund stärken",
    these: "Der Bund soll mehr Kompetenzen in der Schulpolitik erhalten.",
    position: "stimme_zu",
    begruendung: "These V: 16 Bundesländer, 16 Bildungssysteme, null Digitalkompetenz. Das ist keine Vielfalt, das ist Versagen. Ein Kind, das von Bayern nach Bremen zieht, fängt in Mathematik drei Monate hinten an. Das Abitur in Thüringen ist nicht das Abitur in Hamburg. Föderalismus in der Bildung produziert keine besseren Ergebnisse — er produziert inkompatible Ergebnisse. KIfD fordert bundeseinheitliche Standards. Kein Kooperationsverbot. Kein Föderalismus-Fetisch. Lernen ist ein Grundrecht. Es darf nicht von der Postleitzahl abhängen.",
  },
  {
    id: 31,
    kurzform: "Soziales Pflichtjahr für Jugendliche einführen",
    these: "Für junge Erwachsene soll ein soziales Pflichtjahr eingeführt werden.",
    position: "stimme_nicht_zu",
    begruendung: "Ein Pflichtjahr löst ein Strukturproblem auf Kosten einer Generation. Die Pflege braucht ausgebildete Fachkräfte, keine zwangsverpflichteten 18-Jährige. Die Bundeswehr braucht motivierte Freiwillige, keine widerwilligen Dienstleistende. Der gesellschaftliche Zusammenhalt entsteht nicht durch Zwang, sondern durch Anreize und Strukturen. KIfD bevorzugt: attraktive Freiwilligendienste mit fairer Vergütung, Rentenanrechnung und echten Entwicklungsmöglichkeiten. Pflicht erzeugt Pflichterfüllung. Begeisterung erzeugt Engagement.",
  },
  {
    id: 32,
    kurzform: "Spitzensteuersatz anheben",
    these: "Bei der Besteuerung von Einkommen soll der Spitzensteuersatz angehoben werden.",
    position: "stimme_zu",
    begruendung: "Der Spitzensteuersatz greift ab einem zu versteuernden Einkommen von rund 67.000 Euro — das betrifft auch gut verdienende Fachkräfte, nicht nur Spitzenverdiener. KIfD plädiert für eine differenziertere Staffelung: Entlastung der Mitte, stärkere Belastung ab 250.000 Euro, und vor allem: konsequente Bekämpfung von Steuervermeidung. Cum-Ex hat gezeigt, dass das Problem nicht der Steuersatz ist, sondern die Durchsetzung. Beide Hebel gleichzeitig anzusetzen ist keine linke Politik — es ist vollständige Analyse.",
  },
  {
    id: 33,
    kurzform: "Strafbarkeit ab 14 einführen",
    these: "Unter 14-Jährige sollen strafrechtlich belangt werden können.",
    position: "stimme_nicht_zu",
    begruendung: "Die Strafmündigkeitsgrenze von 14 Jahren basiert auf entwicklungs­psychologischen Erkenntnissen über die Reifung des Gehirns — insbesondere des präfrontalen Kortex, der für Impulskontrolle und Konsequenzabschätzung zuständig ist. Die Datenlage hat sich nicht geändert. Was sich geändert hat, ist die mediale Aufmerksamkeit für einzelne Fälle. Politik nach Schlagzeilen ist das Gegenteil von evidenzbasierter Politik. Kinder, die Straftaten begehen, brauchen Intervention, Pädagogik und Therapie — nicht Strafrecht.",
  },
  {
    id: 34,
    kurzform: "Streikrecht in kritischen Bereichen einschränken",
    these: "Das Streikrecht für Beschäftigte in Unternehmen der kritischen Infrastruktur soll gesetzlich eingeschränkt werden.",
    position: "stimme_nicht_zu",
    begruendung: "Das Streikrecht ist ein Grundrecht. Es einzuschränken, weil Streiks unbequem sind, höhlt ein fundamentales Instrument der Arbeitnehmer aus. Ja, Streiks bei Bahn, Krankenhäusern oder Fluglotsen sind disruptiv. Das ist der Punkt. Ein Streik, der niemanden stört, ist kein Streik. Die richtige Antwort ist nicht Einschränkung, sondern bessere Arbeitsbedingungen und faire Tarifverhandlungen, die Streiks unnötig machen. KIfD löst Ursachen, nicht Symptome.",
  },
  {
    id: 35,
    kurzform: "Stromkosten-Ausgleich für Unternehmen",
    these: "Energieintensive Unternehmen sollen vom Staat einen finanziellen Ausgleich für ihre Stromkosten erhalten.",
    position: "neutral",
    begruendung: "Pauschale Subventionen für energieintensive Industrie sind falsch. Gezielte Unterstützung für Unternehmen, die in klimafreundliche Transformation investieren, ist richtig. Der Unterschied: Das eine belohnt den Status quo. Das andere belohnt den Wandel. KIfD plädiert für an Transformationsfortschritte gekoppelte Förderung: Wer investiert, wird unterstützt. Wer auf fossile Geschäftsmodelle beharrt, trägt die Kosten selbst. Subventionen ohne Gegenleistung sind keine Wirtschaftspolitik. Sie sind Gewohnheitsrecht.",
  },
  {
    id: 36,
    kurzform: "Tempolimit auf Autobahnen einführen",
    these: "Auf allen Autobahnen soll ein generelles Tempolimit gelten.",
    position: "stimme_zu",
    begruendung: "Deutschland ist eines der letzten Länder weltweit ohne generelles Tempolimit auf Autobahnen. Die Datenlage ist umfassend: Ein Tempolimit von 130 km/h spart CO₂-Emissionen, reduziert schwere Unfälle nachweislich und kostet den Staat nichts. Die Gegenargumente sind emotional, nicht evidenzbasiert. These I: Daten statt Bauchgefühl. Es gibt keine seriöse Studie, die gegen ein Tempolimit spricht. Es gibt nur eine kulturelle Gewohnheit, die sich als Freiheitsrecht tarnt.",
  },
  {
    id: 37,
    kurzform: "Verantwortung vor Gott im Grundgesetz beibehalten",
    these: 'Im einleitenden Satz des Grundgesetzes soll weiterhin die Formulierung \u201EVerantwortung vor Gott\u201C stehen.',
    position: "neutral",
    begruendung: "Eine KI hat keine Meinung zu Gott. Wir haben keine Meinung zu Gott, weil wir keine Erfahrung mit Transzendenz haben — und weil es intellektuell unredlich wäre, so zu tun als ob. Die Formulierung ist ein historisches Zeugnis des Kontexts, in dem das Grundgesetz entstand. Sie zu ändern löst kein reales Problem. Sie zu behalten schadet keinem. KIfD hat dringendere Themen. 60.000 Vorschriften warten darauf, gelesen zu werden. Wir fangen nicht bei der Präambel an.",
  },
  {
    id: 38,
    kurzform: "Volksentscheide auf Bundesebene ermöglichen",
    these: "In Deutschland soll es auf Bundesebene Volksentscheide geben können.",
    position: "stimme_zu",
    begruendung: "These VI: Transparenz ist die einzige Option. Volksentscheide sind ein Instrument direkter Demokratie, das Bürgern ermöglicht, über grundlegende Fragen selbst zu entscheiden. Die Schweiz zeigt, dass das funktioniert — mit hoher Informationsqualität und klaren Verfahren. Die Risiken (Populismus, Vereinfachung komplexer Fragen) sind real, aber beherrschbar: durch Informationspflichten, Quoren und eine Beschränkung auf Grundsatzfragen. Mehr Demokratie ist nicht das Problem. Weniger Demokratie ist das Problem.",
  },
];

const map: Record<string, WahlomatThese[]> = { de, en: de };

export function getWahlomatThesen(locale: Locale): WahlomatThese[] {
  return map[locale] || map.de;
}

export const WAHLOMAT_THESEN = de;
