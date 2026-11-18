export function requireEnv(keys: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of keys) {
    const val = process.env[k];
    if (!val) throw new Error(`Missing env var: ${k}`);
    out[k] = val;
  }
  return out;
}
