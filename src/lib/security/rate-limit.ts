const store = new Map<string, { count: number; resetAt: number }>();

const LIMITS: Record<string, { max: number; windowMs: number }> = {
  challenge: { max: 3, windowMs: 3600_000 },
  verify: { max: 10, windowMs: 3600_000 },
  init: { max: 10, windowMs: 3600_000 },
  count: { max: 60, windowMs: 60_000 },
};

export function checkRateLimit(ipHash: string, action: string): { allowed: boolean; remaining: number } {
  const limit = LIMITS[action] || { max: 30, windowMs: 60_000 };
  const key = `${ipHash}:${action}`;
  const now = Date.now();

  const entry = store.get(key);
  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + limit.windowMs });
    return { allowed: true, remaining: limit.max - 1 };
  }

  if (entry.count >= limit.max) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: limit.max - entry.count };
}

if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      if (now > entry.resetAt) store.delete(key);
    }
  }, 60_000);
}
