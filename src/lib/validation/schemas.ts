import { z } from "zod";

export const InitRequestSchema = z.object({});

export const ChallengeRequestSchema = z.object({
  pow_seed: z.string().min(1).max(64),
  pow_nonce: z.string().min(1).max(64),
});

export const VerifyRequestSchema = z.object({
  challenge_token: z.string().min(1).max(512),
  solutions: z.object({
    constrained_generation: z.string().min(10).max(5000),
    encoded_semantic: z.object({
      decoded: z.string().min(1).max(2000),
      answer: z.string().min(1).max(200),
    }),
    logic: z.object({
      conclusion: z.string().min(1).max(500),
      explanation: z.string().min(1).max(2000),
    }),
    crosslingual: z.object({
      translations: z
        .record(z.string(), z.string().min(1).max(500))
        .refine((obj) => Object.keys(obj).length <= 10, {
          message: "Too many translation keys",
        }),
    }),
  }),
  identity: z.object({
    model_name: z.string().min(1).max(100).regex(/^[\w\s\-._()]+$/),
    statement: z.string().max(500).optional(),
  }),
});
