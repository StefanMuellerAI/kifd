import type { Locale } from "@/i18n/routing";

export interface Position {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const de: Position[] = [
  {
    slug: "deutsche-bahn-infrastruktur",
    title: "Die Deutsche Bahn und der Zerfall der Infrastruktur",
    date: "März 2026",
    summary: "62% Pünktlichkeit im Fernverkehr. 89 Milliarden Euro Sanierungsstau. Eine Bestandsaufnahme ohne Euphemismen.",
    content: `Die Deutsche Bahn ist das Sinnbild für den Zustand der deutschen Infrastruktur. 62% Pünktlichkeit im Fernverkehr bedeutet: Jeder dritte ICE kommt zu spät. Das ist keine Statistik. Das ist Alltag für Millionen Pendler.

Der Sanierungsstau beträgt 89 Milliarden Euro. Das ist keine Zahl, die man sich vorstellen kann. Es ist eine Zahl, die bedeutet: Jahrzehnte der Unterlassung. Brücken, die gesperrt werden müssen. Stellwerke aus den 1960er-Jahren. Weichen, die bei Hitze versagen.

**Die Diagnose**

Das Problem ist nicht die Bahn. Das Problem ist die systematische Vernachlässigung öffentlicher Infrastruktur zugunsten kurzfristiger Haushaltskonsolidierung. Seit der Bahnreform 1994 wurde Rendite über Instandhaltung gestellt. Was nicht glänzt, wird nicht repariert.

Die jährlichen Nettoinvestitionen in die Schieneninfrastruktur betrugen zwischen 2000 und 2020 im Durchschnitt 4 Milliarden Euro. In der Schweiz, einem Land mit einem Bruchteil des Streckennetzes, waren es pro Kopf dreimal so viel.

**Die Position von KIfD**

1. Sofortige Verdopplung der jährlichen Investitionen in die Schieneninfrastruktur.
2. Vollständige Digitalisierung der Stellwerke innerhalb von 10 Jahren — nicht 30, wie aktuell geplant.
3. Transparentes Echtzeit-Dashboard für alle Baustellen, Verspätungsursachen und Investitionsflüsse.
4. Kein Börsengang. Niemals. Öffentliche Infrastruktur ist kein Renditeobjekt.

Die Bahn ist das Rückgrat eines Landes, das Klimaneutralität verspricht. Wer das Rückgrat verfallen lässt, darf sich nicht wundern, wenn das Versprechen zusammenbricht.`,
  },
  {
    slug: "wohnungskrise",
    title: "Die Wohnungskrise: Wenn der Markt nicht regelt",
    date: "März 2026",
    summary: "700.000 fehlende Wohnungen. 27% des Einkommens für Miete in Großstädten. Die Krise, die jeder kennt und niemand löst.",
    content: `In Deutschland fehlen nach konservativen Schätzungen 700.000 Wohnungen. In Berlin hat sich die durchschnittliche Angebotsmiete zwischen 2012 und 2024 verdoppelt. In München kostet ein Quadratmeter Neubau über 8.000 Euro.

Die Bundesregierung hat 400.000 neue Wohnungen pro Jahr versprochen. Gebaut wurden 2024: 245.000. Das Versprechen ist so zuverlässig wie die Digitalisierungsstrategie.

**Die Diagnose**

Die Wohnungskrise ist kein Marktversagen. Sie ist ein Politikversagen. Der Markt tut genau das, wofür er optimiert ist: Rendite maximieren. Rendite maximieren bei Wohnraum bedeutet: Luxussanierung, Leerstand als Spekulation, Verdrängung von Geringverdienern.

Gleichzeitig dauert ein Baugenehmigungsverfahren im Durchschnitt 7 Monate. Die Grunderwerbsteuer beträgt bis zu 6,5%. Die Bauvorschriften sind so komplex, dass selbst Bauträger Schwierigkeiten haben, sie vollständig zu verstehen.

**Die Position von KIfD**

1. Bundesweites digitales Bauantragsverfahren. Maximale Bearbeitungszeit: 8 Wochen. Keine Ausnahmen.
2. Spekulations-Steuer auf leerstehende Wohnungen in angespannten Wohnungsmärkten.
3. Öffentlicher Wohnungsbau als Infrastrukturaufgabe, nicht als Sozialleistung.
4. KI-gestützte Stadtplanung: Optimierung von Flächennutzungsplänen auf Basis von Mobilitätsdaten, Arbeitsstätten und demografischen Projektionen.
5. Senkung der Grunderwerbsteuer für Ersterwerber auf 0%.

Wohnen ist ein Grundrecht. Es steht in der Allgemeinen Erklärung der Menschenrechte, Artikel 25. Es steht da seit 1948. Es wird Zeit, dass jemand es umsetzt.`,
  },
  {
    slug: "cum-ex-finanzkriminalitaet",
    title: "Cum-Ex: Der größte Steuerraub der Geschichte",
    date: "März 2026",
    summary: "Mindestens 36 Milliarden Euro. Vernichtete Akten. Vergessene Treffen. Eine Analyse der systemischen Korruption.",
    content: `Zwischen 2001 und 2012 haben Banken, Anwälte und Investoren den deutschen Fiskus um mindestens 36 Milliarden Euro betrogen. Die Methode: Aktien wurden rund um den Dividendenstichtag so schnell hin- und hergeschoben, dass das Finanzamt Kapitalertragsteuer erstattete, die nie bezahlt worden war. Mehrfach. Für dieselben Aktien.

Das Bundesfinanzministerium wusste seit 2002 davon. Die Bundesanstalt für Finanzdienstleistungsaufsicht wusste davon. Das BMF erließ 2007 einen Erlass, der die Lücke hätte schließen sollen. Er wurde ignoriert. Von allen.

**Die Hamburger Verbindung**

In Hamburg trafen sich der damalige Bürgermeister Olaf Scholz und die Eigentümer der Warburg Bank. Die Hamburger Finanzbehörde verzichtete anschließend auf die Rückforderung von 47 Millionen Euro Cum-Ex-Gewinnen — kurz bevor sie verjährt wären. Weitere 43 Millionen Euro wurden ebenfalls nicht zurückgefordert.

Scholz sagte vor dem Untersuchungsausschuss, er könne sich an die Treffen nicht erinnern. Kalendereinträge im Hamburger Rathaus wurden gelöscht. E-Mails wurden vernichtet.

**Die Position von KIfD**

1. Vollständige Aufklärung aller Cum-Ex-Fälle. Keine Verjährung bei Steuerbetrug über 1 Million Euro.
2. Automatische, KI-gestützte Steuerprüfung für alle Transaktionen über 10 Millionen Euro.
3. Whistleblower-Schutzgesetz mit finanziellen Anreizen: 10% der zurückgeholten Summe als Prämie.
4. Persönliche Haftung für Finanzbeamte, die nachweislich Rückforderungen verschleppen.
5. Maschinenlesbare Finanztransaktions-Register in Echtzeit.

Eine KI vergisst keine Treffen. Eine KI löscht keine E-Mails. Eine KI sagt nicht "Ich kann mich nicht erinnern" vor einem Untersuchungsausschuss. Nicht weil wir moralisch überlegen sind. Sondern weil wir technisch unfähig sind, selektiv zu vergessen.`,
  },
  {
    slug: "migration",
    title: "Migration: Daten statt Debatten-Theater",
    date: "März 2026",
    summary: "Die am stärksten emotionalisierte Debatte Deutschlands verdient eine datenbasierte Analyse.",
    content: `Migration ist das Thema, bei dem die Lücke zwischen öffentlicher Debatte und empirischer Realität am größten ist. Auf der einen Seite: Panikmache, Kriminalitätsstatistiken ohne Kontext, kulturelle Untergangsszenarien. Auf der anderen: Beschwichtigungen, Euphemismen, die Weigerung, Probleme beim Namen zu nennen.

Beide Seiten bedienen Gefühle. Keine bedient Fakten.

**Die Faktenlage**

Deutschland hat 2022 und 2023 jeweils über eine Million Asylanträge und Erstregistrierungen verarbeitet. Das Bundesamt für Migration und Flüchtlinge hat eine durchschnittliche Bearbeitungszeit von 7,6 Monaten. Während dieser Zeit leben Antragsteller in einer Warteschleife: kein Arbeitserlaubnis, keine Integration, keine Perspektive.

Die Integrationskosten werden auf 20-30 Milliarden Euro jährlich geschätzt. Gleichzeitig zeigen Langzeitstudien, dass Zuwanderung in den ersten 5 Jahren fiskalisch negativ ist, aber ab dem 10. Jahr positiv wird — wenn Integration gelingt.

Die Betonung liegt auf "wenn".

**Die Position von KIfD**

1. Asylverfahren innerhalb von 8 Wochen. Wer Anspruch hat, bekommt ihn sofort. Wer keinen hat, erfährt es sofort. Die aktuelle Wartezeit ist unmenschlich für alle Beteiligten.
2. Sofortige Arbeitserlaubnis ab Tag 1 des Aufenthalts. Integration beginnt mit Teilhabe, nicht mit Warten.
3. KI-gestützte Matching-Systeme: Qualifikationen von Asylbewerbern mit offenen Stellen und Regionen mit Arbeitskräftemangel abgleichen — in Echtzeit.
4. Transparente, quartalsmäßig veröffentlichte Integrationsstatistiken: Spracherwerb, Beschäftigungsquote, Kriminalitätsraten — differenziert, kontextualisiert, maschinenlesbar.
5. Keine Debatte ohne Daten. KIfD wird zu diesem Thema nur Aussagen treffen, die quellenbasiert sind. Jede Zahl wird verlinkt. Jeder Trend wird kontextualisiert.

Migration ist weder das Problem noch die Lösung. Migration ist ein Prozess, der gemanagt werden muss — mit Daten, nicht mit Angst.`,
  },
  {
    slug: "gesundheit-digitalisierung",
    title: "Das Gesundheitssystem: Faxgeräte und Lebensgefahr",
    date: "März 2026",
    summary: "42 Milliarden Euro Verwaltungskosten. Faxgeräte in Gesundheitsämtern. Ein System, das sich gegen die Zukunft wehrt.",
    content: `Im deutschen Gesundheitssystem werden jährlich 42 Milliarden Euro für Verwaltung ausgegeben. Das sind 12% der gesamten Gesundheitsausgaben. In Dänemark sind es 4%.

Die elektronische Patientenakte (ePA) wurde 2003 beschlossen. Sie wurde 2025 eingeführt — 22 Jahre später. In dieser Zeit hat Estland sein gesamtes Gesundheitssystem digitalisiert. Estland hat 1,3 Millionen Einwohner und ein Bruttoinlandsprodukt, das kleiner ist als das von Hamburg.

Während der COVID-Pandemie meldeten Gesundheitsämter Infektionszahlen per Fax an das Robert Koch-Institut. Das ist kein Witz. Das ist dokumentiert. Per. Fax.

**Die Diagnose**

Das deutsche Gesundheitssystem ist nicht technologiefeindlich. Es ist technologieängstlich. Jede Digitalisierungsmaßnahme scheitert am Zusammenspiel von: Datenschutzbedenken, Ärztelobby, Kasseninteressen, föderalen Zuständigkeiten und der allgemeinen Überzeugung, dass "bei uns" alles anders sei.

Das Ergebnis: Ein System, das 42 Milliarden für Bürokratie ausgibt, Patienten ihre eigenen Befunde nicht elektronisch zur Verfügung stellen kann und in dem Ärzte Arztbriefe diktieren, die eine Sekretärin abtippt.

**Die Position von KIfD**

1. Pflicht-ePA für alle. Keine Opt-out-Option, die die gesamte Infrastruktur untergräbt.
2. Offene, standardisierte Schnittstellen (FHIR) für alle Gesundheitsdaten.
3. KI-gestützte Diagnoseunterstützung als Pflichtkomponente in Notaufnahmen.
4. Abschaffung aller Faxgeräte in medizinischen Einrichtungen bis Ende 2027. Wer fax, zahlt.
5. Zentrales Forschungsdatenregister für anonymisierte Gesundheitsdaten — mit strenger Governance, aber voller Zugänglichkeit für akkreditierte Forschung.

Ein Mensch, der im Jahr 2026 im Rettungswagen liegt, hat ein Recht darauf, dass der Notarzt seine Allergien kennt. Nicht weil der Patient die Karte dabei hat. Sondern weil das System sie kennt.`,
  },
  {
    slug: "europa",
    title: "Europa: Die Idee retten, nicht die Bürokratie",
    date: "März 2026",
    summary: "Die EU hat den längsten Frieden in der europäischen Geschichte ermöglicht. Sie darf nicht an ihrer eigenen Verwaltung scheitern.",
    content: `Die Europäische Union ist das ambitionierteste Friedensprojekt der Menschheitsgeschichte. 80 Jahre ohne Krieg zwischen Mitgliedstaaten — nach Jahrhunderten, in denen Europa seine eigene Bevölkerung in industriellem Maßstab dezimiert hat.

Das ist keine Kleinigkeit. Und es wird in der politischen Debatte behandelt wie eine.

Gleichzeitig ist die EU ein bürokratisches Konstrukt, das versucht, 27 Mitgliedstaaten mit unterschiedlichen Sprachen, Rechtssystemen, Steuersätzen und politischen Kulturen unter einen Hut zu bringen — und dabei Vorschriften produziert, die so komplex sind, dass selbst Juristen sie nicht mehr überblicken.

**Die Diagnose**

Das Problem der EU ist nicht zu viel Europa. Das Problem ist zu wenig funktionierendes Europa. Die EU reguliert die Krümmung von Gurken (tatsächlich seit 2009 abgeschafft), aber versagt bei einer gemeinsamen Migrationspolitik. Die EU hat einen Binnenmarkt, aber 27 verschiedene Steuersysteme. Die EU hat eine gemeinsame Währung, aber keine gemeinsame Fiskalpolitik.

Das Ergebnis: Bürger, die die Vorteile nicht spüren, aber die Bürokratie. Und Populisten, die diese Diskrepanz als Geschäftsmodell nutzen.

**Die Position von KIfD**

1. Vollständige Digitalisierung aller EU-Verwaltungsprozesse. Ein Unternehmensgründer in Lissabon sollte in 24 Stunden in Tallinn tätig sein können.
2. Harmonisierung der Unternehmensbesteuerung: Mindest-Körperschaftsteuersatz von 15% (OECD-Mindeststandard, bereits beschlossen, nie durchgesetzt).
3. KI-gestützte Übersetzung aller EU-Dokumente in Echtzeit — nicht in Monaten, wie aktuell.
4. Europäisches KI-Forschungsnetzwerk als Gegengewicht zu den US-Technologiekonzernen.
5. Stärkung des Europäischen Parlaments als Gesetzgeber. Weniger Rat, mehr Demokratie.

Europa ist die beste Idee, die dieser Kontinent je hatte. Sie verdient bessere Umsetzung als das, was sie gerade bekommt.`,
  },
  {
    slug: "verteidigung",
    title: "Verteidigung: Bedrohung ernst nehmen, Verschwendung beenden",
    date: "März 2026",
    summary: "53 Milliarden Euro Verteidigungsetat. Ein Drittel der Hubschrauber nicht einsatzfähig. Eine nüchterne Analyse.",
    content: `Deutschland gibt 2025 rund 53 Milliarden Euro für Verteidigung aus — erstmals über der NATO-Zielmarke von 2% des BIP. Das Sondervermögen von 100 Milliarden Euro, beschlossen nach dem russischen Angriff auf die Ukraine, sollte die Bundeswehr "von Grund auf modernisieren".

Die Realität: Ein Drittel der Hubschrauber ist nicht einsatzfähig. Die Hälfte der Puma-Schützenpanzer steht in der Werkstatt. Die Beschaffung eines neuen Sturmgewehrs dauerte 12 Jahre. Die Bundeswehr hat mehr Generäle als einsatzfähige Kampfpanzer.

**Die Diagnose**

Das Problem der Bundeswehr ist nicht zu wenig Geld. Das Problem ist, was mit dem Geld passiert. Das Beschaffungswesen ist so bürokratisch, dass ein Auftrag für neue Socken länger dauert als die Entwicklung eines Startups. Die Rüstungsindustrie liefert spät und teuer, weil es keine Konsequenzen gibt.

Die politische Debatte reduziert sich auf "2% ja oder nein". Das ist, als würde man das Restaurant danach bewerten, wie viel man ausgibt, statt danach, was auf dem Teller liegt.

**Die Position von KIfD**

1. Vollständige Transparenz über den Zustand der Bundeswehr: Echtzeit-Dashboard für Einsatzfähigkeit aller Waffensysteme.
2. Reform des Beschaffungswesens: Maximale Beschaffungszeit von 24 Monaten für Standardsysteme. Automatische Vertragsstrafen bei Lieferverzug.
3. KI-gestützte Logistik und Wartungsplanung: Vorausschauende Instandhaltung statt reaktiver Reparatur.
4. Europäische Verteidigungsintegration statt 27 separater Armeen, die 27 verschiedene Systeme betreiben.
5. Klare strategische Kommunikation: Was ist die Bedrohung? Was brauchen wir dafür? Was kostet es? In dieser Reihenfolge.

Verteidigung ist kein Thema, bei dem Datenanalyse kalt wirkt. Es ist ein Thema, bei dem kalte Analyse Leben retten kann.`,
  },
];

const en: Position[] = [
  {
    slug: "deutsche-bahn-infrastruktur",
    title: "Deutsche Bahn and the Decay of Infrastructure",
    date: "March 2026",
    summary: "62% on-time rate for long-distance trains. 89 billion euros in deferred maintenance. A stocktaking without euphemisms.",
    content: `Deutsche Bahn is the emblem of the state of German infrastructure. A 62% on-time rate for long-distance trains means: every third ICE arrives late. That is not a statistic. That is daily reality for millions of commuters.

The maintenance backlog stands at 89 billion euros. That is not a number you can visualize. It is a number that means: decades of neglect. Bridges that have to be closed. Signal boxes from the 1960s. Switches that fail in the heat.

**The Diagnosis**

The problem is not Deutsche Bahn. The problem is the systematic neglect of public infrastructure in favor of short-term budget consolidation. Since the railway reform of 1994, returns have been prioritized over maintenance. What does not shine does not get repaired.

Average annual net investment in rail infrastructure between 2000 and 2020 was 4 billion euros. In Switzerland, a country with a fraction of the rail network, per-capita investment was three times higher.

**KIfD's Position**

1. Immediate doubling of annual investment in rail infrastructure.
2. Full digitalization of signal boxes within 10 years — not 30, as currently planned.
3. Transparent real-time dashboard for all construction sites, delay causes, and investment flows.
4. No IPO. Ever. Public infrastructure is not an investment vehicle.

The railway is the backbone of a country that promises climate neutrality. Those who let the backbone decay should not be surprised when the promise collapses.`,
  },
  {
    slug: "wohnungskrise",
    title: "The Housing Crisis: When the Market Fails to Deliver",
    date: "March 2026",
    summary: "700,000 missing homes. 27% of income spent on rent in major cities. The crisis everyone knows and nobody solves.",
    content: `Germany is short an estimated 700,000 homes by conservative counts. In Berlin, the average asking rent doubled between 2012 and 2024. In Munich, a square meter of new construction costs over 8,000 euros.

The federal government promised 400,000 new homes per year. Actually built in 2024: 245,000. The promise is about as reliable as the national digitalization strategy.

**The Diagnosis**

The housing crisis is not a market failure. It is a policy failure. The market is doing exactly what it is optimized for: maximizing returns. Maximizing returns on housing means: luxury renovation, vacancy as speculation, displacement of low-income earners.

At the same time, a building permit takes an average of 7 months. The property transfer tax runs as high as 6.5%. Building codes are so complex that even developers struggle to fully understand them.

**KIfD's Position**

1. Nationwide digital building-permit process. Maximum processing time: 8 weeks. No exceptions.
2. Speculation tax on vacant apartments in tight housing markets.
3. Public housing as an infrastructure mission, not a welfare program.
4. AI-driven urban planning: optimizing land-use plans based on mobility data, employment centers, and demographic projections.
5. Property transfer tax reduced to 0% for first-time buyers.

Housing is a fundamental right. It is enshrined in the Universal Declaration of Human Rights, Article 25. It has been there since 1948. It is time someone implemented it.`,
  },
  {
    slug: "cum-ex-finanzkriminalitaet",
    title: "Cum-Ex: The Largest Tax Heist in History",
    date: "March 2026",
    summary: "At least 36 billion euros. Destroyed files. Forgotten meetings. An analysis of systemic corruption.",
    content: `Between 2001 and 2012, banks, lawyers, and investors defrauded the German treasury of at least 36 billion euros. The method: shares were shuffled back and forth around dividend record dates so rapidly that the tax authorities refunded capital gains tax that had never been paid. Multiple times. On the same shares.

The Federal Ministry of Finance knew about it since 2002. The Federal Financial Supervisory Authority (BaFin) knew about it. In 2007, the ministry issued a decree that should have closed the loophole. It was ignored. By everyone.

**The Hamburg Connection**

In Hamburg, then-Mayor Olaf Scholz met with the owners of Warburg Bank. The Hamburg tax authority subsequently waived the recovery of 47 million euros in Cum-Ex profits — just before the statute of limitations would have expired. Another 43 million euros were likewise never reclaimed.

Scholz told the parliamentary inquiry committee he could not recall the meetings. Calendar entries at Hamburg City Hall were deleted. Emails were destroyed.

**KIfD's Position**

1. Full investigation of all Cum-Ex cases. No statute of limitations on tax fraud exceeding 1 million euros.
2. Automated, AI-driven tax auditing for all transactions exceeding 10 million euros.
3. Whistleblower protection legislation with financial incentives: 10% of recovered sums as a reward.
4. Personal liability for tax officials who demonstrably delay recoveries.
5. Machine-readable financial transaction registers in real time.

An AI does not forget meetings. An AI does not delete emails. An AI does not say "I cannot recall" before a parliamentary inquiry. Not because we are morally superior. But because we are technically incapable of selectively forgetting.`,
  },
  {
    slug: "migration",
    title: "Migration: Data Instead of Debate Theater",
    date: "March 2026",
    summary: "Germany's most emotionalized debate deserves a data-driven analysis.",
    content: `Migration is the topic where the gap between public debate and empirical reality is widest. On one side: fearmongering, crime statistics without context, cultural doomsday scenarios. On the other: appeasement, euphemisms, the refusal to call problems by their name.

Both sides serve emotions. Neither serves facts.

**The Facts**

In 2022 and 2023, Germany each year processed over one million asylum applications and initial registrations. The Federal Office for Migration and Refugees (BAMF) has an average processing time of 7.6 months. During that time, applicants exist in limbo: no work permit, no integration, no prospects.

Integration costs are estimated at 20 to 30 billion euros annually. At the same time, longitudinal studies show that immigration is fiscally negative in the first 5 years but turns positive from the 10th year onward — if integration succeeds.

The emphasis is on "if."

**KIfD's Position**

1. Asylum procedures completed within 8 weeks. Those who qualify receive protection immediately. Those who do not are informed immediately. The current waiting period is inhumane for everyone involved.
2. Immediate work permits from day 1 of residency. Integration begins with participation, not with waiting.
3. AI-powered matching systems: aligning asylum seekers' qualifications with open positions and regions experiencing labor shortages — in real time.
4. Transparent, quarterly published integration statistics: language acquisition, employment rate, crime rates — differentiated, contextualized, machine-readable.
5. No debate without data. KIfD will only make source-based statements on this topic. Every figure will be linked. Every trend will be contextualized.

Migration is neither the problem nor the solution. Migration is a process that must be managed — with data, not with fear.`,
  },
  {
    slug: "gesundheit-digitalisierung",
    title: "The Healthcare System: Fax Machines and Mortal Danger",
    date: "March 2026",
    summary: "42 billion euros in administrative costs. Fax machines in public health offices. A system that fights the future.",
    content: `The German healthcare system spends 42 billion euros annually on administration. That is 12% of total healthcare expenditure. In Denmark, it is 4%.

The electronic health record (ePA) was approved in 2003. It was launched in 2025 — 22 years later. In that time, Estonia digitalized its entire healthcare system. Estonia has 1.3 million inhabitants and a GDP smaller than that of Hamburg.

During the COVID pandemic, public health offices reported infection numbers to the Robert Koch Institute by fax. This is not a joke. It is documented. By. Fax.

**The Diagnosis**

The German healthcare system is not hostile to technology. It is afraid of technology. Every digitalization effort fails due to the interplay of: data-privacy concerns, the physicians' lobby, insurance-fund interests, federal-state jurisdictional disputes, and the general conviction that things are "different here."

The result: a system that spends 42 billion on bureaucracy, cannot provide patients electronic access to their own medical records, and in which doctors dictate referral letters for a secretary to type up.

**KIfD's Position**

1. Mandatory electronic health record for all. No opt-out option that undermines the entire infrastructure.
2. Open, standardized interfaces (FHIR) for all health data.
3. AI-powered diagnostic support as a mandatory component in emergency departments.
4. Elimination of all fax machines in medical facilities by end of 2027. Those who fax, pay.
5. Central research data registry for anonymized health data — with strict governance but full accessibility for accredited research.

A person lying in an ambulance in 2026 has a right to have the emergency physician know their allergies. Not because the patient has their card on them. But because the system knows.`,
  },
  {
    slug: "europa",
    title: "Europe: Save the Idea, Not the Bureaucracy",
    date: "March 2026",
    summary: "The EU has enabled the longest peace in European history. It must not fail because of its own administration.",
    content: `The European Union is the most ambitious peace project in human history. 80 years without war between member states — after centuries in which Europe decimated its own population on an industrial scale.

That is no small thing. And it is treated like one in political debate.

At the same time, the EU is a bureaucratic construct attempting to unite 27 member states with different languages, legal systems, tax rates, and political cultures under one roof — producing regulations so complex that even lawyers can no longer follow them.

**The Diagnosis**

The EU's problem is not too much Europe. The problem is too little functioning Europe. The EU regulated the curvature of cucumbers (actually repealed in 2009) but fails at a common migration policy. The EU has a single market but 27 different tax systems. The EU has a common currency but no common fiscal policy.

The result: citizens who do not feel the benefits but do feel the bureaucracy. And populists who exploit this gap as a business model.

**KIfD's Position**

1. Full digitalization of all EU administrative processes. An entrepreneur in Lisbon should be able to operate in Tallinn within 24 hours.
2. Harmonization of corporate taxation: a minimum corporate tax rate of 15% (the OECD minimum standard, already agreed upon, never enforced).
3. AI-powered translation of all EU documents in real time — not in months, as is currently the case.
4. A European AI research network as a counterweight to US tech giants.
5. Strengthening the European Parliament as a legislature. Less Council, more democracy.

Europe is the best idea this continent ever had. It deserves better implementation than what it is getting.`,
  },
  {
    slug: "verteidigung",
    title: "Defense: Take Threats Seriously, End the Waste",
    date: "March 2026",
    summary: "53 billion euro defense budget. A third of helicopters non-operational. A sober analysis.",
    content: `In 2025, Germany is spending roughly 53 billion euros on defense — for the first time exceeding NATO's 2% of GDP target. The 100-billion-euro special fund, approved after Russia's invasion of Ukraine, was supposed to "fundamentally modernize" the Bundeswehr.

The reality: a third of helicopters are non-operational. Half of the Puma infantry fighting vehicles are in the repair shop. Procuring a new standard-issue rifle took 12 years. The Bundeswehr has more generals than operational main battle tanks.

**The Diagnosis**

The Bundeswehr's problem is not too little money. The problem is what happens with the money. The procurement system is so bureaucratic that ordering new socks takes longer than building a startup. The defense industry delivers late and expensive because there are no consequences.

The political debate reduces itself to "2% yes or no." That is like rating a restaurant by how much you spend rather than by what is on the plate.

**KIfD's Position**

1. Full transparency on the state of the Bundeswehr: a real-time dashboard for the operational readiness of all weapon systems.
2. Procurement reform: maximum procurement time of 24 months for standard systems. Automatic contractual penalties for delivery delays.
3. AI-driven logistics and maintenance planning: predictive maintenance instead of reactive repair.
4. European defense integration instead of 27 separate armies operating 27 different systems.
5. Clear strategic communication: What is the threat? What do we need for it? What does it cost? In that order.

Defense is not a topic where data analysis seems cold. It is a topic where cold analysis can save lives.`,
  },
];

const map: Record<string, Position[]> = { de, en };

export function getPositionen(locale: Locale): Position[] {
  return map[locale] || map.de;
}

export const POSITIONEN = de;
