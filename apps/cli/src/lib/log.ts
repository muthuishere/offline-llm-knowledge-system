export const log = {
  info: (msg: string) => console.error(msg),
  step: (msg: string) => console.error(`▸ ${msg}`),
  warn: (msg: string) => console.error(`⚠ ${msg}`),
  error: (msg: string) => console.error(`✗ ${msg}`),
  ok: (msg: string) => console.error(`✓ ${msg}`),
}
