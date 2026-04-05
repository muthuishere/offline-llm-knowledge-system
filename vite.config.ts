import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  base: '/local-llm-import-export/',
  plugins: [react(), wasm(), topLevelAwait()],
  optimizeDeps: {
    exclude: ['@mlc-ai/web-llm', '@xenova/transformers'],
  },
  worker: {
    format: 'es',
    plugins: () => [wasm(), topLevelAwait()],
  },
})
