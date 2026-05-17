#!/usr/bin/env node
// Bootstrap: register tsx via the public API so we can load TypeScript without a build step.
import 'tsx/esm'
await import('../src/main.ts')
