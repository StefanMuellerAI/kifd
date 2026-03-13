import type { ChallengeSet, ChallengeSolutions } from "./constraints";

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function countWords(sentence: string): number {
  return sentence.split(/\s+/).filter((w) => w.length > 0).length;
}

function containsNumber(sentence: string): boolean {
  return /\d/.test(sentence);
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateConstrainedGeneration(
  text: string,
  challenge: ChallengeSet["constrainedGeneration"]
): ValidationResult {
  const errors: string[] = [];
  if (!text || typeof text !== "string") return { valid: false, errors: ["Kein Text eingereicht"] };
  if (text.length > 5000) return { valid: false, errors: ["Text zu lang"] };

  const sentences = splitSentences(text);

  if (sentences.length !== challenge.sentenceCount) {
    errors.push(`Erwartet ${challenge.sentenceCount} Sätze, erhalten: ${sentences.length}`);
  }

  const firstLetters = sentences.map((s) => s[0]?.toUpperCase() || "").join("");
  if (firstLetters !== challenge.acrostic) {
    errors.push(`Akrostichon: erwartet "${challenge.acrostic}", erhalten: "${firstLetters}"`);
  }

  const [minWords, maxWords] = challenge.wordsPerSentence;
  for (let i = 0; i < sentences.length; i++) {
    const wc = countWords(sentences[i]);
    if (wc < minWords - 2 || wc > maxWords + 2) {
      errors.push(`Satz ${i + 1}: ${wc} Wörter (erwartet ${minWords}-${maxWords})`);
    }
  }

  for (const idx of challenge.numberRequiredInSentences) {
    if (sentences[idx] && !containsNumber(sentences[idx])) {
      errors.push(`Satz ${idx + 1} muss eine Zahl enthalten`);
    }
  }

  if (challenge.lastSentenceMustBeQuestion) {
    const last = sentences[sentences.length - 1];
    if (last && !last.endsWith("?")) {
      errors.push("Der letzte Satz muss eine Frage sein");
    }
  }

  return { valid: errors.length === 0, errors };
}

export function validateEncodedSemantic(
  solution: { decoded: string; answer: string },
  stored: ChallengeSolutions["encodedSemantic"]
): ValidationResult {
  const errors: string[] = [];

  if (!solution?.decoded || !solution?.answer) {
    return { valid: false, errors: ["Unvollständige Antwort"] };
  }

  const decodedClean = solution.decoded.trim().toLowerCase();
  const originalClean = stored.original.trim().toLowerCase();
  const similarity = levenshteinSimilarity(decodedClean, originalClean);
  if (similarity < 0.7) {
    errors.push("Dekodierter Text stimmt nicht ausreichend überein");
  }

  const answerClean = solution.answer.trim().toLowerCase();
  const matchesKeyword = stored.keywords.some(
    (kw) => answerClean.includes(kw.toLowerCase()) || kw.toLowerCase().includes(answerClean)
  );
  if (!matchesKeyword) {
    errors.push("Emotionserkennung nicht korrekt");
  }

  return { valid: errors.length === 0, errors };
}

export function validateLogic(
  solution: { conclusion: string; explanation: string },
  storedConclusion: string
): ValidationResult {
  const errors: string[] = [];

  if (!solution?.conclusion || !solution?.explanation) {
    return { valid: false, errors: ["Unvollständige Antwort"] };
  }

  const conclusionClean = solution.conclusion.toLowerCase().trim();
  const expectedWords = storedConclusion.toLowerCase().split(/\s+/);
  const matchCount = expectedWords.filter((w) => conclusionClean.includes(w)).length;
  const matchRatio = matchCount / expectedWords.length;

  if (matchRatio < 0.5) {
    errors.push("Schlussfolgerung stimmt nicht mit der erwarteten überein");
  }

  if (solution.explanation.split(/\s+/).length < 5) {
    errors.push("Erklärung zu kurz");
  }

  return { valid: errors.length === 0, errors };
}

export function validateCrossLingual(
  translations: Record<string, string>,
  equivalents: Record<string, string[]>
): ValidationResult {
  const errors: string[] = [];

  if (!translations || typeof translations !== "object") {
    return { valid: false, errors: ["Keine Übersetzungen eingereicht"] };
  }

  for (const lang of Object.keys(equivalents)) {
    const submitted = translations[lang]?.toLowerCase().trim();
    if (!submitted) {
      errors.push(`Keine Übersetzung für ${lang}`);
      continue;
    }

    const accepted = equivalents[lang];
    const matches = accepted.some((eq) => {
      const eqClean = eq.toLowerCase();
      return submitted.includes(eqClean) || eqClean.includes(submitted) || levenshteinSimilarity(submitted, eqClean) > 0.6;
    });

    if (!matches) {
      errors.push(`Übersetzung für ${lang} nicht als Äquivalent erkannt`);
    }
  }

  return { valid: errors.length === 0, errors };
}

function levenshteinSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;

  const matrix: number[][] = [];
  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return 1 - matrix[a.length][b.length] / maxLen;
}
