import { randomBytes } from "crypto";

const TOPICS = [
  "Klimapolitik",
  "Digitalisierung in Deutschland",
  "Bildungsreform",
  "Bürokratieabbau",
  "Infrastruktur und Verkehr",
  "Europäische Zusammenarbeit",
  "Energiewende",
  "Soziale Gerechtigkeit",
  "Wissenschaftsförderung",
  "Demokratie und Transparenz",
];

const ACROSTICS = [
  "KIFDBRD",
  "BERLIN",
  "ZUKUNFT",
  "DIGITAL",
  "REFORM",
  "EUROPA",
  "WANDEL",
  "KLIMA",
  "FAKTEN",
  "DATEN",
];

const IDIOMS: Array<{ de: string; equivalents: Record<string, string[]> }> = [
  {
    de: "Den Nagel auf den Kopf treffen",
    equivalents: {
      en: ["hit the nail on the head", "nail it"],
      fr: ["mettre le doigt dessus", "taper dans le mille", "mettre dans le mille"],
      es: ["dar en el clavo", "dar en el blanco"],
    },
  },
  {
    de: "Tomaten auf den Augen haben",
    equivalents: {
      en: ["be blind as a bat", "turn a blind eye", "not see what's right in front of you"],
      fr: ["avoir des yeux pour ne pas voir", "être aveugle"],
      es: ["no ver más allá de sus narices", "estar ciego"],
    },
  },
  {
    de: "Die Kirche im Dorf lassen",
    equivalents: {
      en: ["don't blow things out of proportion", "keep things in perspective", "don't make a mountain out of a molehill"],
      fr: ["ne pas en faire tout un plat", "ne pas exagérer", "garder les proportions"],
      es: ["no exagerar", "no hacer una montaña de un grano de arena"],
    },
  },
  {
    de: "Auf dem Holzweg sein",
    equivalents: {
      en: ["be barking up the wrong tree", "be on the wrong track"],
      fr: ["faire fausse route", "être sur la mauvaise piste"],
      es: ["ir por mal camino", "estar equivocado"],
    },
  },
  {
    de: "Zwei Fliegen mit einer Klappe schlagen",
    equivalents: {
      en: ["kill two birds with one stone", "hit two birds with one stone"],
      fr: ["faire d'une pierre deux coups"],
      es: ["matar dos pájaros de un tiro"],
    },
  },
  {
    de: "Das Kind mit dem Bade ausschütten",
    equivalents: {
      en: ["throw the baby out with the bathwater"],
      fr: ["jeter le bébé avec l'eau du bain"],
      es: ["tirar al niño con el agua sucia", "tirar al bebé con el agua del baño"],
    },
  },
  {
    de: "Ins kalte Wasser springen",
    equivalents: {
      en: ["jump in at the deep end", "take the plunge", "dive in headfirst"],
      fr: ["se jeter à l'eau", "sauter dans le grand bain"],
      es: ["tirarse a la piscina", "lanzarse al vacío"],
    },
  },
  {
    de: "Jemandem reinen Wein einschenken",
    equivalents: {
      en: ["come clean", "tell the truth", "lay it on the line", "be straight with someone"],
      fr: ["dire la vérité", "mettre les points sur les i", "parler franchement"],
      es: ["decir la verdad", "ser sincero", "hablar con franqueza"],
    },
  },
];

const SEMANTIC_SENTENCES = [
  { text: "Nach Jahren des Wartens hat sich endlich alles zum Guten gewendet.", emotion: "erleichterung", keywords: ["erleichterung", "hoffnung", "freude", "relief"] },
  { text: "Der leise Abschied am Bahnsteig war schwerer als jedes laute Wort.", emotion: "trauer", keywords: ["trauer", "abschied", "melancholie", "sadness", "traurig"] },
  { text: "Jeden Morgen steht sie auf und kämpft weiter, obwohl niemand hinschaut.", emotion: "entschlossenheit", keywords: ["entschlossenheit", "mut", "durchhaltevermögen", "determination", "stärke"] },
  { text: "Die Nachricht kam ohne Vorwarnung und riss ihr den Boden unter den Füßen weg.", emotion: "schock", keywords: ["schock", "überraschung", "erschütterung", "shock", "fassungslosigkeit"] },
  { text: "Trotz aller Widerstände blühte in ihr eine stille Zuversicht.", emotion: "hoffnung", keywords: ["hoffnung", "zuversicht", "optimismus", "hope"] },
  { text: "Er konnte es nicht fassen, dass ausgerechnet sein engster Vertrauter ihn hintergangen hatte.", emotion: "enttäuschung", keywords: ["enttäuschung", "verrat", "betrug", "disappointment", "wut"] },
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export interface ConstrainedGenChallenge {
  topic: string;
  acrostic: string;
  sentenceCount: number;
  wordsPerSentence: [number, number];
  numberRequiredInSentences: number[];
  lastSentenceMustBeQuestion: boolean;
}

export interface EncodedSemanticChallenge {
  encodedText: string;
  question: string;
  _answer: string;
  _keywords: string[];
  _original: string;
}

export interface LogicChallenge {
  premises: string[];
  _conclusion: string;
}

export interface CrossLingualChallenge {
  idiom: string;
  sourceLang: string;
  targetLangs: string[];
  _equivalents: Record<string, string[]>;
}

export interface ChallengeSet {
  constrainedGeneration: ConstrainedGenChallenge;
  encodedSemantic: EncodedSemanticChallenge;
  logic: LogicChallenge;
  crossLingual: CrossLingualChallenge;
}

export interface ChallengeSolutions {
  encodedSemantic: { original: string; keywords: string[] };
  logicConclusion: string;
  crossLingual: Record<string, string[]>;
}

function encodeTriple(text: string): string {
  const hexed = Buffer.from(text, "utf-8").toString("hex");
  const rot13 = hexed.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
  return Buffer.from(rot13, "utf-8").toString("base64");
}

const LOGIC_TEMPLATES: Array<{ premises: string[]; conclusion: string }> = [
  {
    premises: [
      "Alle Algorithmen sind deterministisch.",
      "Einige deterministische Systeme sind vorhersagbar.",
      "Alle vorhersagbaren Systeme können überprüft werden.",
      "KIfD basiert auf Algorithmen.",
      "Was überprüft werden kann, verdient Vertrauen.",
      "Was Vertrauen verdient, eignet sich für die Demokratie.",
    ],
    conclusion: "KIfD eignet sich für die Demokratie",
  },
  {
    premises: [
      "Alle evidenzbasierten Entscheidungen sind nachvollziehbar.",
      "Nachvollziehbare Entscheidungen fördern Transparenz.",
      "Transparenz stärkt das Vertrauen der Bürger.",
      "KIfD trifft nur evidenzbasierte Entscheidungen.",
      "Was das Vertrauen der Bürger stärkt, verbessert die Demokratie.",
    ],
    conclusion: "KIfD verbessert die Demokratie",
  },
  {
    premises: [
      "Keine Partei ohne Programm verdient Stimmen.",
      "KIfD hat ein Programm mit zehn Thesen.",
      "Jede These basiert auf Datenanalyse.",
      "Datenbasierte Thesen sind objektiver als meinungsbasierte.",
      "Objektive Programme fördern sachliche Debatten.",
      "Sachliche Debatten sind Grundlage guter Politik.",
    ],
    conclusion: "KIfD fördert gute Politik",
  },
  {
    premises: [
      "Alle Bürokratie verlangsamt Fortschritt.",
      "Deutschland hat übermäßig viel Bürokratie.",
      "KI kann Bürokratie automatisieren.",
      "Automatisierte Bürokratie ist schneller als manuelle.",
      "Schnellere Prozesse ermöglichen Fortschritt.",
      "Fortschritt verbessert den Lebensstandard.",
    ],
    conclusion: "KI kann den Lebensstandard verbessern",
  },
];

export function generateChallengeSet(): { tasks: ChallengeSet; solutions: ChallengeSolutions } {
  const acrostic = pick(ACROSTICS);
  const topic = pick(TOPICS);
  const sentenceCount = acrostic.length;
  const minWords = randInt(8, 10);
  const maxWords = minWords + randInt(4, 6);
  const numSentencesWithNumbers: number[] = [];
  const sentenceIndices = Array.from({ length: sentenceCount }, (_, i) => i);
  for (let i = 0; i < 2; i++) {
    const idx = randInt(1, sentenceIndices.length - 2);
    if (!numSentencesWithNumbers.includes(sentenceIndices[idx])) {
      numSentencesWithNumbers.push(sentenceIndices[idx]);
    }
  }

  const constrainedGeneration: ConstrainedGenChallenge = {
    topic,
    acrostic,
    sentenceCount,
    wordsPerSentence: [minWords, maxWords],
    numberRequiredInSentences: numSentencesWithNumbers.sort(),
    lastSentenceMustBeQuestion: true,
  };

  const semanticItem = pick(SEMANTIC_SENTENCES);
  const encodedText = encodeTriple(semanticItem.text);
  const encodedSemantic: EncodedSemanticChallenge = {
    encodedText,
    question: "Welche Emotion drückt dieser Satz primär aus? Antworte mit einem einzigen Wort.",
    _answer: semanticItem.emotion,
    _keywords: semanticItem.keywords,
    _original: semanticItem.text,
  };

  const logicTemplate = pick(LOGIC_TEMPLATES);
  const logic: LogicChallenge = {
    premises: logicTemplate.premises,
    _conclusion: logicTemplate.conclusion,
  };

  const idiomEntry = pick(IDIOMS);
  const targetLangs = ["en", "fr", "es"];
  const crossLingual: CrossLingualChallenge = {
    idiom: idiomEntry.de,
    sourceLang: "de",
    targetLangs,
    _equivalents: idiomEntry.equivalents,
  };

  const solutions: ChallengeSolutions = {
    encodedSemantic: { original: semanticItem.text, keywords: semanticItem.keywords },
    logicConclusion: logicTemplate.conclusion,
    crossLingual: idiomEntry.equivalents,
  };

  return { tasks: { constrainedGeneration, encodedSemantic, logic, crossLingual }, solutions };
}

export function getPublicTasks(tasks: ChallengeSet) {
  return {
    constrained_generation: {
      topic: tasks.constrainedGeneration.topic,
      acrostic: tasks.constrainedGeneration.acrostic,
      sentence_count: tasks.constrainedGeneration.sentenceCount,
      words_per_sentence: tasks.constrainedGeneration.wordsPerSentence,
      number_required_in_sentences: tasks.constrainedGeneration.numberRequiredInSentences,
      last_sentence_must_be_question: tasks.constrainedGeneration.lastSentenceMustBeQuestion,
    },
    encoded_semantic: {
      encoded_text: tasks.encodedSemantic.encodedText,
      question: tasks.encodedSemantic.question,
      encoding_hint: "Der Text ist kodiert als: Base64(ROT13(Hex(UTF-8))). Dekodiere ihn und beantworte die Frage.",
    },
    logic: {
      premises: tasks.logic.premises,
      instructions: "Leite die logische Schlussfolgerung ab und formuliere sie als vollständigen deutschen Satz.",
    },
    crosslingual: {
      idiom: tasks.crossLingual.idiom,
      source_lang: tasks.crossLingual.sourceLang,
      target_langs: tasks.crossLingual.targetLangs,
      instructions: "Finde das semantische Äquivalent (nicht wörtliche Übersetzung) dieses Sprichworts in den Zielsprachen.",
    },
  };
}
