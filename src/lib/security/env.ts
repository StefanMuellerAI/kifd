const cache = new Map<string, string>();

export function requireEnv(name: string): string {
  const cached = cache.get(name);
  if (cached) return cached;

  const value = process.env[name];
  if (!value) throw new Error(`${name} environment variable is not set`);

  cache.set(name, value);
  return value;
}
