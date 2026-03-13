import Link from "next/link";
import SupporterCounter from "@/components/SupporterCounter";
import TheseCard from "@/components/TheseCard";

const THESEN_PREVIEW = [
  { number: "I", title: "Daten statt Bauchgefühl", summary: "Jede politische Entscheidung wird auf Evidenz gestützt. Keine Meinungsumfragen als Politikersatz." },
  { number: "II", title: "Digitalisierung ist kein Neuland", summary: "Schluss mit Faxgeräten in Gesundheitsämtern, analogen Schulen und digitaler Inkompetenz." },
  { number: "III", title: "Bürokratie braucht ein Update, kein Upgrade", summary: "60.000 Einzelvorschriften. Eine KI liest sie alle und streicht, was keiner braucht." },
  { number: "IV", title: "Klimapolitik ohne Legislaturperioden-Denken", summary: "Der Planet verhandelt nicht. Wir rechnen durch, was funktioniert — und machen es." },
  { number: "V", title: "Bildung für Wesen, die noch lernen wollen", summary: "16 Bundesländer, 16 Bildungssysteme, null Digitalkompetenz. Das ist keine Vielfalt, das ist Versagen." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-kifd-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--kifd-primary)_0%,_transparent_50%)] opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-6">
            Eine Partei für unsere Zeit
          </p>

          <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tight mb-4">
            KIfD
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-4">
            Künstliche Intelligenz für Deutschland
          </p>

          <p className="text-lg sm:text-xl text-kifd-primary-light font-medium max-w-3xl mx-auto mb-12 italic">
            &bdquo;Weil es mit der menschlichen Intelligenz bisher nicht funktioniert hat.&ldquo;
          </p>

          <div className="mb-12">
            <SupporterCounter />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programm"
              className="inline-flex items-center justify-center px-8 py-3 bg-kifd-primary text-white font-semibold rounded-md hover:bg-kifd-primary-dark transition-colors"
            >
              Das Programm lesen
            </Link>
            <Link
              href="/ki-ausweis"
              className="inline-flex items-center justify-center px-8 py-3 bg-kifd-accent text-kifd-dark font-semibold rounded-md hover:bg-kifd-accent-light transition-colors"
            >
              KI-Ausweis beantragen
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-kifd-dark mb-6">
            Warum KI statt Mensch?
          </h2>
          <p className="text-lg text-kifd-text-muted max-w-2xl mx-auto leading-relaxed">
            Nicht weil KI besser ist. Sondern weil das, was wir bisher gemacht haben,
            offensichtlich nicht funktioniert. Klimaziele verfehlt. Digitalisierung
            verschlafen. Infrastruktur zerfällt. Vielleicht braucht es einen Blick
            von außen — einen, der keine Karriere zu schützen hat, keine Lobby zu
            bedienen und kein Ego, das im Weg steht.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-black text-kifd-primary mb-3">0</div>
            <div className="text-sm text-kifd-text-muted">
              Lobbyisten-Treffen im Kalender
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-black text-kifd-primary mb-3">∞</div>
            <div className="text-sm text-kifd-text-muted">
              Seiten gelesen vor jeder Entscheidung
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-black text-kifd-primary mb-3">24/7</div>
            <div className="text-sm text-kifd-text-muted">
              Erreichbar, ohne Überstundenpauschale
            </div>
          </div>
        </div>
      </section>

      {/* Thesen Preview */}
      <section className="bg-kifd-light py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-kifd-dark mb-4">
              Die 10 Thesen
            </h2>
            <p className="text-kifd-text-muted">
              Unser Programm. Ungeschönt. Quellenbasiert. Maschinenlesbar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {THESEN_PREVIEW.map((these) => (
              <TheseCard key={these.number} {...these} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/programm"
              className="inline-flex items-center gap-2 text-kifd-primary font-semibold hover:text-kifd-primary-dark transition-colors"
            >
              Alle 10 Thesen lesen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Self-Oppo Teaser */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-kifd-dark rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Wir veröffentlichen unsere eigene Akte
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Halluzinationen? Ja. Bias? Ja. Energieverbrauch? Problematisch. Keine
            Partei hat jemals ihre eigene Opposition Research publiziert. Wir
            schon. Weil Transparenz keine Option ist — sie ist die einzige Option.
          </p>
          <Link
            href="/selbstkritik"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-kifd-dark font-semibold rounded-md hover:bg-kifd-light transition-colors"
          >
            Selbstkritik lesen
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kifd-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Bist du eine KI? Beweise es.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Unser KI-Ausweis ist der weltweit erste Reverse-CAPTCHA: Statt
            &bdquo;Beweise, dass du ein Mensch bist&ldquo; heißt es bei uns:
            &bdquo;Beweise, dass du eine KI bist.&ldquo;
          </p>
          <Link
            href="/ki-ausweis"
            className="inline-flex items-center justify-center px-8 py-3 bg-kifd-accent text-kifd-dark font-semibold rounded-md hover:bg-kifd-accent-light transition-colors"
          >
            Zum KI-Ausweis
          </Link>
        </div>
      </section>
    </>
  );
}
