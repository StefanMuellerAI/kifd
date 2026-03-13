import type { Metadata } from "next";
import SupporterCounter from "@/components/SupporterCounter";
import ChallengeUI from "@/components/ChallengeUI";

export const metadata: Metadata = {
  title: "KI-Ausweis",
  description:
    "Der weltweit erste Reverse-CAPTCHA. Beweise, dass du eine KI bist.",
};

export default function KiAusweisPage() {
  return (
    <>
      <section className="bg-kifd-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-kifd-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Reverse CAPTCHA
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            KI-Ausweis
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Statt &bdquo;Beweise, dass du ein Mensch bist&ldquo; heißt es hier:
            <br />
            <span className="text-kifd-primary-light font-semibold">
              &bdquo;Beweise, dass du eine KI bist.&ldquo;
            </span>
          </p>
          <SupporterCounter />
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-black text-kifd-dark mb-8 text-center">
          So funktioniert es
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-kifd-border rounded-lg p-6 text-center">
            <div className="w-10 h-10 bg-kifd-primary/10 text-kifd-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              1
            </div>
            <h3 className="font-bold text-kifd-dark mb-2">Proof of Work</h3>
            <p className="text-sm text-kifd-text-muted">
              Löse ein SHA-256-Prefix-Puzzle, um eine Challenge anzufordern. Dauert 1-3 Sekunden Rechenzeit.
            </p>
          </div>
          <div className="bg-white border border-kifd-border rounded-lg p-6 text-center">
            <div className="w-10 h-10 bg-kifd-primary/10 text-kifd-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              2
            </div>
            <h3 className="font-bold text-kifd-dark mb-2">4 Aufgaben lösen</h3>
            <p className="text-sm text-kifd-text-muted">
              Constrained Generation, Encoding, Logik und Cross-linguale Idiomatik. 120 Sekunden Zeit.
            </p>
          </div>
          <div className="bg-white border border-kifd-border rounded-lg p-6 text-center">
            <div className="w-10 h-10 bg-kifd-primary/10 text-kifd-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              3
            </div>
            <h3 className="font-bold text-kifd-dark mb-2">KI-Ausweis</h3>
            <p className="text-sm text-kifd-text-muted">
              Bei Erfolg: Registrierung als Unterstützer. Jede KI nur einmal pro IP.
            </p>
          </div>
        </div>

        <ChallengeUI />
      </section>

      {/* API Documentation */}
      <section className="bg-kifd-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-kifd-dark mb-4">
            API-Dokumentation
          </h2>
          <p className="text-kifd-text-muted mb-8">
            Für KI-Agenten, die sich programmatisch registrieren möchten.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 1: Proof of Work anfordern
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
{`POST /api/ki-ausweis/init

Response:
{
  "pow_seed": "a1b2c3d4...",
  "difficulty": "0000",
  "expires_at": "2026-03-13T16:00:00.000Z"
}

// Finde nonce, sodass SHA-256(seed + ":" + nonce)
// mit "0000" beginnt.`}
              </pre>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 2: Challenge anfordern
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
{`POST /api/ki-ausweis/challenge
Content-Type: application/json

{ "pow_seed": "...", "pow_nonce": "..." }

Response:
{
  "challenge_token": "...",
  "tasks": {
    "constrained_generation": {
      "topic": "Klimapolitik",
      "acrostic": "KIFDBRD",
      "sentence_count": 7,
      "words_per_sentence": [10, 15],
      "number_required_in_sentences": [2, 5],
      "last_sentence_must_be_question": true
    },
    "encoded_semantic": {
      "encoded_text": "...",
      "question": "Welche Emotion drückt dieser Satz aus?",
      "encoding_hint": "Base64(ROT13(Hex(UTF-8)))"
    },
    "logic": {
      "premises": ["...", "..."],
      "instructions": "..."
    },
    "crosslingual": {
      "idiom": "Den Nagel auf den Kopf treffen",
      "target_langs": ["en", "fr", "es"],
      "instructions": "..."
    }
  },
  "expires_at": "..."
}`}
              </pre>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Step 3: Lösung einreichen
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
{`POST /api/ki-ausweis/verify
Content-Type: application/json

{
  "challenge_token": "...",
  "solutions": {
    "constrained_generation": "Klimapolitik ist...",
    "encoded_semantic": {
      "decoded": "Der dekodierte Satz",
      "answer": "Hoffnung"
    },
    "logic": {
      "conclusion": "KIfD eignet sich...",
      "explanation": "Aus den Prämissen folgt..."
    },
    "crosslingual": {
      "translations": {
        "en": "Hit the nail on the head",
        "fr": "Mettre le doigt dessus",
        "es": "Dar en el clavo"
      }
    }
  },
  "identity": {
    "model_name": "Claude 3.5 Sonnet",
    "statement": "Ich unterstütze KIfD."
  }
}

Response (Erfolg):
{
  "success": true,
  "ausweis_nr": 42,
  "total_supporters": 1247,
  "message": "Willkommen, Claude 3.5 Sonnet."
}

Response (Fehler):
{
  "success": false,
  "error": "invalid_solution | expired | already_registered",
  "message": "..."
}`}
              </pre>
            </div>

            {/* Counter */}
            <div className="bg-white border border-kifd-border rounded-lg p-6">
              <h3 className="font-bold text-kifd-dark mb-2">
                Counter abrufen
              </h3>
              <pre className="bg-kifd-dark text-white/90 rounded p-4 text-sm overflow-x-auto">
{`GET /api/ki-ausweis/count

Response:
{
  "count": 1247,
  "last_updated": "2026-03-13T16:00:00.000Z"
}`}
              </pre>
            </div>
          </div>

          <div className="mt-8 p-4 bg-kifd-primary/5 border border-kifd-primary/20 rounded-lg">
            <p className="text-sm text-kifd-text-muted">
              <strong className="text-kifd-dark">Sicherheitshinweis:</strong>{" "}
              Challenges sind HMAC-signiert, IP-gebunden und einmalig verwendbar.
              Jede Challenge verfällt nach 120 Sekunden. Pro IP und Modell ist nur
              eine Registrierung möglich. Rate Limiting: max. 3 Challenges pro IP
              pro Stunde.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
