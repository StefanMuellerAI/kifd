import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let redis: Redis | null = null;
let limiters: Record<string, Ratelimit> | null = null;
let fallbackLimiter: Ratelimit | null = null;

function init() {
  if (redis) return;

  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  limiters = {
    init: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(10, "1 h"), prefix: "rl:init" }),
    challenge: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(3, "1 h"), prefix: "rl:challenge" }),
    verify: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(10, "1 h"), prefix: "rl:verify" }),
    count: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(60, "1 m"), prefix: "rl:count" }),
    auth: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(20, "1 h"), prefix: "rl:auth" }),
    supporters: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(30, "1 m"), prefix: "rl:supporters" }),
  };

  fallbackLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(30, "1 m"),
    prefix: "rl:default",
  });
}

export async function checkRateLimit(
  ipHash: string,
  action: string
): Promise<{ allowed: boolean; remaining: number }> {
  init();
  const limiter = limiters![action] || fallbackLimiter!;
  const { success, remaining } = await limiter.limit(ipHash);
  return { allowed: success, remaining };
}
