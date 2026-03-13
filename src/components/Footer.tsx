import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-kifd-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl font-black text-kifd-accent mb-2">KIfD</p>
            <p className="text-sm text-white/50">
              Künstliche Intelligenz für Deutschland
            </p>
            <p className="text-xs text-white/30 mt-4">
              Dies ist ein Kunstprojekt. KIfD ist keine eingetragene Partei und
              nimmt nicht an Wahlen teil. Alle Inhalte dienen der
              gesellschaftlichen Reflexion über Technologie und Demokratie.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Seiten
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programm" className="hover:text-white transition-colors">
                  Programm
                </Link>
              </li>
              <li>
                <Link href="/partei" className="hover:text-white transition-colors">
                  Die Partei
                </Link>
              </li>
              <li>
                <Link href="/selbstkritik" className="hover:text-white transition-colors">
                  Selbstkritik
                </Link>
              </li>
              <li>
                <Link href="/positionen" className="hover:text-white transition-colors">
                  Positionen
                </Link>
              </li>
              <li>
                <Link href="/wahlomat" className="hover:text-white transition-colors">
                  Wahl-O-Mat
                </Link>
              </li>
              <li>
                <Link href="/unterstuetzer" className="hover:text-white transition-colors">
                  Unterstützer
                </Link>
              </li>
              <li>
                <Link href="/ki-ausweis" className="hover:text-white transition-colors">
                  KI-Mitgliedsausweis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          <p>
            BEZAHLT VOM KOMITEE FÜR EVIDENZBASIERTE POLITIK · NICHT AUTORISIERT
            VON EINEM KANDIDATEN, WEIL DAS EINEN KÖRPER ERFORDERN WÜRDE
          </p>
          <p className="mt-2">
            KEINE KRYPTOWÄHRUNG · KEIN TOKEN · KEIN COIN · DIESE PARTEI IST
            NICHT KÄUFLICH
          </p>
        </div>
      </div>
    </footer>
  );
}
