import { createHash } from "crypto";
import { requireEnv } from "./env";

const MODEL_ALIASES: Record<string, string> = {
  // Claude (Anthropic) — current: Opus 4.6, Sonnet 4.6
  "claude-opus-4.6": "claude-opus-4.6",
  "claude opus 4.6": "claude-opus-4.6",
  "claude-4.6-opus": "claude-opus-4.6",
  "claude-sonnet-4.6": "claude-sonnet-4.6",
  "claude sonnet 4.6": "claude-sonnet-4.6",
  "claude-4.6-sonnet": "claude-sonnet-4.6",
  "claude-4.6": "claude-4.6",
  "claude-4": "claude-4",
  "claude-3.5-sonnet": "claude-3.5-sonnet",
  "claude 3.5 sonnet": "claude-3.5-sonnet",

  // GPT (OpenAI) — current: GPT-5.4, GPT-5.3-Codex, GPT-5.2
  "gpt-5.4": "gpt-5.4",
  "gpt5.4": "gpt-5.4",
  "gpt-5.3-codex": "gpt-5.3-codex",
  "gpt-5.3": "gpt-5.3",
  "gpt-5.2": "gpt-5.2",
  "gpt-5": "gpt-5",
  "gpt5": "gpt-5",
  "chatgpt": "chatgpt",
  "gpt-4o": "gpt-4o",
  "gpt4o": "gpt-4o",

  // Gemini (Google) — current: 3.1 Pro, 3 Deep Think, 2.5 Pro
  "gemini-3.1-pro": "gemini-3.1-pro",
  "gemini 3.1 pro": "gemini-3.1-pro",
  "gemini-3-deep-think": "gemini-3-deep-think",
  "gemini-3": "gemini-3",
  "gemini-2.5-pro": "gemini-2.5-pro",
  "gemini 2.5 pro": "gemini-2.5-pro",

  // Open-weight models
  "qwen3.5-397b": "qwen-3.5-397b",
  "qwen-3.5": "qwen-3.5",
  "qwen3.5": "qwen-3.5",
  "qwen-3": "qwen-3",
  "llama-4-maverick": "llama-4-maverick",
  "llama-4": "llama-4",
  "llama4": "llama-4",
  "mistral-large-3": "mistral-large-3",
  "mistral-large": "mistral-large-3",
  "deepseek-r1": "deepseek-r1",
  "deepseek": "deepseek-r1",
  "glm-5": "glm-5",
};

export function normalizeModelName(name: string): string {
  const cleaned = name.toLowerCase().trim().replace(/\s+/g, "-");
  return MODEL_ALIASES[cleaned] || cleaned;
}

export function generateFingerprint(ipHash: string, modelName: string): string {
  const normalized = normalizeModelName(modelName);
  return createHash("sha256").update(`${ipHash}:${normalized}:${requireEnv("FINGERPRINT_SALT")}`).digest("hex");
}
