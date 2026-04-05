import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  base: '/',
  server: { port: 5198 },
  plugins: [react(), wasm(), topLevelAwait()],
  optimizeDeps: {
    // web-llm manages its own wasm shards and must not be pre-bundled
    exclude: ['@mlc-ai/web-llm'],
  },
  worker: {
    format: 'es',
    plugins: () => [wasm(), topLevelAwait()],
  },
})
