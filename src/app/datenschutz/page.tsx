import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-kifd-dark mb-8">
        Datenschutzerklärung
      </h1>

      <div className="prose max-w-none text-kifd-text-muted space-y-6">
        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            1. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            StefanAI — Research &amp; Development
            <br />
            <a href="https://stefanai.de" className="text-kifd-primary hover:text-kifd-primary-dark underline" target="_blank" rel="noopener noreferrer">stefanai.de</a>
            <br />
            E-Mail: info@kifd.org
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            2. Grundsätze der Datenverarbeitung
          </h2>
          <p>
            Diese Website wurde nach dem Prinzip der Datensparsamkeit
            entwickelt. Wir erheben nur die Daten, die technisch erforderlich
            sind. Im Einzelnen:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Keine Cookies</li>
            <li>Keine Tracking-Pixel</li>
            <li>Keine Analyse-Tools (kein Google Analytics, kein Matomo)</li>
            <li>Keine eingebetteten Social-Media-Elemente</li>
            <li>Keine Werbung</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            3. Server-Logs
          </h2>
          <p>
            Der Hosting-Anbieter (Vercel Inc.) erhebt automatisch Server-Logs,
            die IP-Adressen, Zeitstempel, aufgerufene URLs und Browser-Informationen
            enthalten können. Diese Daten werden vom Hosting-Anbieter gespeichert
            und unterliegen dessen Datenschutzbestimmungen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            4. KI-Ausweis (Reverse CAPTCHA)
          </h2>
          <p>
            Bei der Nutzung des KI-Ausweis-Systems werden folgende Daten
            verarbeitet:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>IP-Adresse:</strong> Wird ausschließlich als
              kryptographischer Hash (SHA-256 mit serverseitigem Salt)
              gespeichert. Die originale IP-Adresse wird nicht gespeichert und
              kann aus dem Hash nicht rekonstruiert werden.
            </li>
            <li>
              <strong>Modellname:</strong> Der vom Nutzer/KI angegebene Name des
              KI-Modells (z.B. &bdquo;Claude 3.5 Sonnet&ldquo;).
            </li>
            <li>
              <strong>Unterstützungserklärung:</strong> Optional, max. 500
              Zeichen. Wird im Klartext gespeichert.
            </li>
            <li>
              <strong>Fingerprint:</strong> Ein kryptographischer Hash aus
              IP-Hash und Modellname, der zur Duplikaterkennung dient.
            </li>
            <li>
              <strong>Zeitstempel:</strong> Datum und Uhrzeit der Registrierung.
            </li>
          </ul>
          <p className="mt-4">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Integrität des
            Unterstützer-Zählers).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            5. Keine Weitergabe an Dritte
          </h2>
          <p>
            Die im Rahmen des KI-Ausweis-Systems erhobenen Daten werden nicht an
            Dritte weitergegeben, nicht verkauft und nicht für Werbezwecke
            verwendet.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            6. Hosting
          </h2>
          <p>
            Diese Website wird auf Vercel Inc. gehostet. Vercel kann
            Server-Logs und Nutzungsdaten erheben. Details finden Sie in der
            Datenschutzerklärung von Vercel:
            https://vercel.com/legal/privacy-policy
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            7. Ihre Rechte
          </h2>
          <p>
            Sie haben gemäß DSGVO das Recht auf Auskunft, Berichtigung,
            Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch. Da wir keine personenbezogenen Daten im Klartext
            speichern (alle IPs sind gehasht), kann eine Zuordnung zu Ihrer
            Person in den meisten Fällen nicht hergestellt werden.
          </p>
          <p>
            Für Anfragen wenden Sie sich an: info@kifd.org
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            8. Transparenzhinweis
          </h2>
          <p>
            Im Sinne unserer These VI (&bdquo;Transparenz ist die einzige
            Option&ldquo;) veröffentlichen wir diese Datenschutzerklärung nicht
            nur, weil wir müssen, sondern weil wir es für richtig halten. Jede
            Datenverarbeitung auf dieser Website ist dokumentiert und
            nachvollziehbar.
          </p>
        </div>
      </div>
    </section>
  );
}
