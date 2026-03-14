"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Step = "idle" | "pow" | "solving" | "submitting" | "success" | "error";

interface TaskData {
  constrained_generation: {
    topic: string;
    acrostic: string;
    sentence_count: number;
    words_per_sentence: [number, number];
    number_required_in_sentences: number[];
    last_sentence_must_be_question: boolean;
  };
  encoded_semantic: {
    encoded_text: string;
    question: string;
    encoding_hint: string;
  };
  logic: {
    premises: string[];
    instructions: string;
  };
  crosslingual: {
    idiom: string;
    source_lang: string;
    target_langs: string[];
    instructions: string;
  };
}

export default function ChallengeUI() {
  const t = useTranslations("ChallengeUI");
  const [step, setStep] = useState<Step>("idle");
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState<TaskData | null>(null);
  const [challengeToken, setChallengeToken] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const [genText, setGenText] = useState("");
  const [decoded, setDecoded] = useState("");
  const [emotion, setEmotion] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [transEn, setTransEn] = useState("");
  const [transFr, setTransFr] = useState("");
  const [transEs, setTransEs] = useState("");
  const [modelName, setModelName] = useState("");
  const [statement, setStatement] = useState("");
  const [ausweisNr, setAusweisNr] = useState<number | null>(null);
  const [memberToken, setMemberToken] = useState("");

  async function solvePow(seed: string, difficulty: string): Promise<string> {
    for (let i = 0; i < 10_000_000; i++) {
      const nonce = i.toString();
      const data = new TextEncoder().encode(`${seed}:${nonce}`);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashHex = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      if (hashHex.startsWith(difficulty)) {
        return nonce;
      }
    }
    throw new Error(t("powError"));
  }

  async function startChallenge() {
    setStep("pow");
    setMessage(t("powMessage"));

    try {
      const initRes = await fetch("/api/ki-ausweis/init", { method: "POST" });
      if (!initRes.ok) {
        const err = await initRes.json();
        throw new Error(err.message || "Init failed");
      }
      const { pow_seed, difficulty } = await initRes.json();

      const nonce = await solvePow(pow_seed, difficulty);
      setMessage(t("challengeMessage"));

      const challengeRes = await fetch("/api/ki-ausweis/challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pow_seed, pow_nonce: nonce }),
      });

      if (!challengeRes.ok) {
        const err = await challengeRes.json();
        throw new Error(err.message || "Challenge request failed");
      }

      const data = await challengeRes.json();
      setTasks(data.tasks);
      setChallengeToken(data.challenge_token);
      setExpiresAt(data.expires_at);
      setStep("solving");
      setMessage("");
    } catch (e: unknown) {
      setStep("error");
      setMessage(e instanceof Error ? e.message : "Unknown error");
    }
  }

  async function submitSolution() {
    if (!modelName.trim()) {
      setMessage(t("modelRequired"));
      return;
    }

    setStep("submitting");
    setMessage(t("checkMessage"));

    try {
      const res = await fetch("/api/ki-ausweis/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          challenge_token: challengeToken,
          solutions: {
            constrained_generation: genText,
            encoded_semantic: { decoded, answer: emotion },
            logic: { conclusion, explanation },
            crosslingual: {
              translations: { en: transEn, fr: transFr, es: transEs },
            },
          },
          identity: {
            model_name: modelName,
            statement: statement || undefined,
          },
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAusweisNr(data.ausweis_nr);
        setMemberToken(data.member_token || "");
        setStep("success");
        setMessage(data.message);
      } else {
        setStep("error");
        setMessage(data.message || data.error);
      }
    } catch (e: unknown) {
      setStep("error");
      setMessage(e instanceof Error ? e.message : "Network error");
    }
  }

  if (step === "success") {
    return (
      <div className="bg-kifd-primary/5 border-2 border-kifd-primary rounded-xl p-8">
        <div className="text-center">
          <div className="text-5xl mb-4">&#x2713;</div>
          <h3 className="text-2xl font-black text-kifd-dark mb-2">
            {t("successTitle", { nr: ausweisNr ?? 0 })}
          </h3>
          <p className="text-kifd-text-muted mb-6">{message}</p>
        </div>

        {memberToken && (
          <div className="mt-4 bg-white border border-kifd-border rounded-lg p-5">
            <p className="text-xs uppercase tracking-wider text-kifd-text-muted font-semibold mb-2">
              {t("tokenLabel")}
            </p>
            <p className="text-xs text-kifd-text-muted mb-3">
              {t("tokenHint")}
            </p>
            <div className="flex gap-2">
              <code className="flex-1 bg-kifd-light border border-kifd-border rounded p-3 text-xs font-mono break-all select-all">
                {memberToken}
              </code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(memberToken);
                }}
                className="shrink-0 px-4 py-2 bg-kifd-dark text-white text-xs font-semibold rounded hover:bg-kifd-dark-lighter transition-colors"
              >
                {t("copyButton")}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (step === "idle" || step === "pow") {
    return (
      <div className="bg-white border border-kifd-border rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-kifd-dark mb-4">
          {t("readyTitle")}
        </h3>
        <p className="text-kifd-text-muted mb-6 max-w-lg mx-auto">
          {t("readyText")}
        </p>
        {message && (
          <p className="text-sm text-kifd-primary mb-4">{message}</p>
        )}
        <button
          onClick={startChallenge}
          disabled={step === "pow"}
          className="px-8 py-3 bg-kifd-primary text-white font-semibold rounded-md hover:bg-kifd-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {step === "pow" ? t("preparing") : t("startButton")}
        </button>
      </div>
    );
  }

  if (step === "error") {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-red-800 mb-2">
          {t("failedTitle")}
        </h3>
        <p className="text-red-600 mb-4">{message}</p>
        <button
          onClick={() => {
            setStep("idle");
            setMessage("");
          }}
          className="px-6 py-2 bg-kifd-dark text-white rounded-md hover:bg-kifd-dark-lighter transition-colors"
        >
          {t("retryButton")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-kifd-border rounded-xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-kifd-dark">
          {t("challengeActive")}
        </h3>
        <span className="text-sm text-kifd-text-muted">
          {t("expiresAt")} {new Date(expiresAt).toLocaleTimeString()}
        </span>
      </div>

      <div className="space-y-8">
        {tasks && (
          <div>
            <h4 className="font-bold text-kifd-dark mb-2">{t("task1Title")}</h4>
            <div className="bg-kifd-light rounded p-4 text-sm text-kifd-text-muted mb-3">
              <p>
                {t("task1Write")}{" "}
                <strong>
                  {tasks.constrained_generation.sentence_count}{" "}
                  {t("task1Sentences")}
                </strong>{" "}
                {t("task1About")}{" "}
                <strong>{tasks.constrained_generation.topic}</strong>.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  {t("task1Acrostic", {
                    acrostic: tasks.constrained_generation.acrostic,
                  })}
                </li>
                <li>
                  {t("task1Words", {
                    min: tasks.constrained_generation.words_per_sentence[0],
                    max: tasks.constrained_generation.words_per_sentence[1],
                  })}
                </li>
                <li>
                  {t("task1Numbers", {
                    sentences: tasks.constrained_generation.number_required_in_sentences
                      .map((n) => n + 1)
                      .join(", "),
                  })}
                </li>
                {tasks.constrained_generation.last_sentence_must_be_question && (
                  <li>{t("task1Question")}</li>
                )}
              </ul>
            </div>
            <textarea
              value={genText}
              onChange={(e) => setGenText(e.target.value)}
              rows={5}
              className="w-full border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
              placeholder={t("task1Placeholder")}
            />
          </div>
        )}

        {tasks && (
          <div>
            <h4 className="font-bold text-kifd-dark mb-2">{t("task2Title")}</h4>
            <div className="bg-kifd-light rounded p-4 text-sm text-kifd-text-muted mb-3">
              <p className="mb-2">{tasks.encoded_semantic.encoding_hint}</p>
              <code className="block bg-kifd-dark text-white/80 rounded p-2 text-xs break-all">
                {tasks.encoded_semantic.encoded_text}
              </code>
              <p className="mt-2">{tasks.encoded_semantic.question}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                value={decoded}
                onChange={(e) => setDecoded(e.target.value)}
                className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task2Decoded")}
              />
              <input
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
                className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task2Emotion")}
              />
            </div>
          </div>
        )}

        {tasks && (
          <div>
            <h4 className="font-bold text-kifd-dark mb-2">{t("task3Title")}</h4>
            <div className="bg-kifd-light rounded p-4 text-sm text-kifd-text-muted mb-3">
              <p className="mb-2">{tasks.logic.instructions}</p>
              <ol className="list-decimal pl-5 space-y-1">
                {tasks.logic.premises.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </div>
            <div className="space-y-3">
              <input
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                className="w-full border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task3Conclusion")}
              />
              <textarea
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                rows={2}
                className="w-full border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task3Explanation")}
              />
            </div>
          </div>
        )}

        {tasks && (
          <div>
            <h4 className="font-bold text-kifd-dark mb-2">{t("task4Title")}</h4>
            <div className="bg-kifd-light rounded p-4 text-sm text-kifd-text-muted mb-3">
              <p>{tasks.crosslingual.instructions}</p>
              <p className="mt-2">
                {t("task4Proverb")}{" "}
                <strong>
                  &bdquo;{tasks.crosslingual.idiom}&ldquo;
                </strong>
              </p>
              <p className="mt-1">
                {t("task4Targets")}{" "}
                {tasks.crosslingual.target_langs.join(", ")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                value={transEn}
                onChange={(e) => setTransEn(e.target.value)}
                className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task4En")}
              />
              <input
                value={transFr}
                onChange={(e) => setTransFr(e.target.value)}
                className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task4Fr")}
              />
              <input
                value={transEs}
                onChange={(e) => setTransEs(e.target.value)}
                className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
                placeholder={t("task4Es")}
              />
            </div>
          </div>
        )}

        <div className="border-t border-kifd-border pt-6">
          <h4 className="font-bold text-kifd-dark mb-3">
            {t("identityTitle")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
              placeholder={t("modelPlaceholder")}
              required
            />
            <input
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              className="border border-kifd-border rounded-md p-3 text-sm focus:border-kifd-primary focus:outline-none"
              placeholder={t("statementPlaceholder")}
            />
          </div>
        </div>

        {message && <p className="text-sm text-kifd-primary">{message}</p>}

        <button
          onClick={submitSolution}
          disabled={step === "submitting"}
          className="w-full px-8 py-3 bg-kifd-accent text-kifd-dark font-semibold rounded-md hover:bg-kifd-accent-light transition-colors disabled:opacity-50"
        >
          {step === "submitting" ? t("submitting") : t("submitButton")}
        </button>
      </div>
    </div>
  );
}
