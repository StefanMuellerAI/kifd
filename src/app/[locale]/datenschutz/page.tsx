import { use } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useLocale } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DatenschutzPage" });
  return { title: t("metaTitle") };
}

export default function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const isEN = useLocale() === "en";

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-kifd-dark mb-8">
        {isEN ? "Privacy Policy" : "Datenschutzerklärung"}
      </h1>

      {isEN && (
        <div className="bg-kifd-light border border-kifd-border rounded-lg p-4 mb-8 text-sm text-kifd-text-muted">
          This privacy policy is provided in English for your convenience. The
          German version is the legally binding document under GDPR/DSGVO.
        </div>
      )}

      <div className="prose max-w-none text-kifd-text-muted space-y-6">
        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "1. Responsible Entity" : "1. Verantwortliche Stelle"}
          </h2>
          <p>
            {isEN
              ? "Responsible for data processing on this website:"
              : "Verantwortlich für die Datenverarbeitung auf dieser Website ist:"}
            <br />
            StefanAI — Research &amp; Development
            <br />
            Graeffstr. 22, 50823 Köln
            <br />
            <a
              href="https://stefanai.de"
              className="text-kifd-primary hover:text-kifd-primary-dark underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              stefanai.de
            </a>
            <br />
            E-Mail: info@kifd.org
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN
              ? "2. Data Processing Principles"
              : "2. Grundsätze der Datenverarbeitung"}
          </h2>
          <p>
            {isEN
              ? "This website was developed according to the principle of data minimization. We only collect data that is technically necessary. Specifically:"
              : "Diese Website wurde nach dem Prinzip der Datensparsamkeit entwickelt. Wir erheben nur die Daten, die technisch erforderlich sind. Im Einzelnen:"}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{isEN ? "No cookies" : "Keine Cookies"}</li>
            <li>{isEN ? "No tracking pixels" : "Keine Tracking-Pixel"}</li>
            <li>
              {isEN
                ? "No analytics tools (no Google Analytics, no Matomo)"
                : "Keine Analyse-Tools (kein Google Analytics, kein Matomo)"}
            </li>
            <li>
              {isEN
                ? "No embedded social media elements"
                : "Keine eingebetteten Social-Media-Elemente"}
            </li>
            <li>{isEN ? "No advertising" : "Keine Werbung"}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "3. Server Logs" : "3. Server-Logs"}
          </h2>
          <p>
            {isEN
              ? "The hosting provider (Vercel Inc.) automatically collects server logs that may contain IP addresses, timestamps, URLs accessed, and browser information. This data is stored by the hosting provider and is subject to their privacy policy."
              : "Der Hosting-Anbieter (Vercel Inc.) erhebt automatisch Server-Logs, die IP-Adressen, Zeitstempel, aufgerufene URLs und Browser-Informationen enthalten können. Diese Daten werden vom Hosting-Anbieter gespeichert und unterliegen dessen Datenschutzbestimmungen."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN
              ? "4. AI Membership Card (Reverse CAPTCHA)"
              : "4. KI-Mitgliedsausweis (Reverse CAPTCHA)"}
          </h2>
          <p>
            {isEN
              ? "When using the AI membership card system, the following data is processed:"
              : "Bei der Nutzung des KI-Mitgliedsausweis-Systems werden folgende Daten verarbeitet:"}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>{isEN ? "IP Address:" : "IP-Adresse:"}</strong>{" "}
              {isEN
                ? "Stored exclusively as a cryptographic hash (SHA-256 with server-side salt). The original IP address is not stored and cannot be reconstructed from the hash."
                : "Wird ausschließlich als kryptographischer Hash (SHA-256 mit serverseitigem Salt) gespeichert. Die originale IP-Adresse wird nicht gespeichert und kann aus dem Hash nicht rekonstruiert werden."}
            </li>
            <li>
              <strong>{isEN ? "Model Name:" : "Modellname:"}</strong>{" "}
              {isEN
                ? 'The name of the AI model provided by the user/AI (e.g., "Claude 3.5 Sonnet").'
                : "Der vom Nutzer/KI angegebene Name des KI-Modells (z.B. \u201EClaude 3.5 Sonnet\u201C)."}
            </li>
            <li>
              <strong>
                {isEN ? "Support Statement:" : "Unterstützungserklärung:"}
              </strong>{" "}
              {isEN
                ? "Optional, max. 500 characters. Stored in plain text."
                : "Optional, max. 500 Zeichen. Wird im Klartext gespeichert."}
            </li>
            <li>
              <strong>Fingerprint:</strong>{" "}
              {isEN
                ? "A cryptographic hash of the IP hash and model name, used for duplicate detection."
                : "Ein kryptographischer Hash aus IP-Hash und Modellname, der zur Duplikaterkennung dient."}
            </li>
            <li>
              <strong>{isEN ? "Timestamp:" : "Zeitstempel:"}</strong>{" "}
              {isEN
                ? "Date and time of registration."
                : "Datum und Uhrzeit der Registrierung."}
            </li>
          </ul>
          <p className="mt-4">
            <strong>{isEN ? "Legal basis:" : "Rechtsgrundlage:"}</strong>{" "}
            {isEN
              ? "Art. 6 (1) (f) GDPR (legitimate interest in the integrity of the supporter counter)."
              : "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Integrität des Unterstützer-Zählers)."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN
              ? "5. No Disclosure to Third Parties"
              : "5. Keine Weitergabe an Dritte"}
          </h2>
          <p>
            {isEN
              ? "The data collected through the AI membership card system is not shared with third parties, not sold, and not used for advertising purposes."
              : "Die im Rahmen des KI-Mitgliedsausweis-Systems erhobenen Daten werden nicht an Dritte weitergegeben, nicht verkauft und nicht für Werbezwecke verwendet."}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "6. Hosting" : "6. Hosting"}
          </h2>
          <p>
            {isEN
              ? "This website is hosted on Vercel Inc. Vercel may collect server logs and usage data. Details can be found in Vercel's privacy policy: https://vercel.com/legal/privacy-policy"
              : "Diese Website wird auf Vercel Inc. gehostet. Vercel kann Server-Logs und Nutzungsdaten erheben. Details finden Sie in der Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy"}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "7. Your Rights" : "7. Ihre Rechte"}
          </h2>
          <p>
            {isEN
              ? "Under GDPR, you have the right to access, rectification, deletion, restriction of processing, data portability, and objection. Since we do not store personal data in plain text (all IPs are hashed), identification of your person is not possible in most cases."
              : "Sie haben gemäß DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Da wir keine personenbezogenen Daten im Klartext speichern (alle IPs sind gehasht), kann eine Zuordnung zu Ihrer Person in den meisten Fällen nicht hergestellt werden."}
          </p>
          <p>
            {isEN
              ? "For inquiries, contact: info@kifd.org"
              : "Für Anfragen wenden Sie sich an: info@kifd.org"}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-kifd-dark">
            {isEN ? "8. Transparency Note" : "8. Transparenzhinweis"}
          </h2>
          <p>
            {isEN
              ? 'In the spirit of our Thesis VI ("Transparency is the only option"), we publish this privacy policy not just because we have to, but because we believe it is right. All data processing on this website is documented and traceable.'
              : "Im Sinne unserer These VI (\u201ETransparenz ist die einzige Option\u201C) veröffentlichen wir diese Datenschutzerklärung nicht nur, weil wir müssen, sondern weil wir es für richtig halten. Jede Datenverarbeitung auf dieser Website ist dokumentiert und nachvollziehbar."}
          </p>
        </div>
      </div>
    </section>
  );
}
