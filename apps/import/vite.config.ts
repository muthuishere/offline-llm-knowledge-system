import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { createReadStream, existsSync, readFileSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Serves onnxruntime-web WASM files from node_modules at /ort-wasm/ so the
 * embed pipeline never fetches from CDN. Works for both dev (middleware) and
 * production build (emits assets).
 */
function onnxWasmPlugin(): Plugin {
  const wasmDir = fileURLToPath(new URL('./node_modules/onnxruntime-web/dist', import.meta.url))
  const files = [
    'ort-wasm-simd-threaded.asyncify.mjs',
    'ort-wasm-simd-threaded.asyncify.wasm',
    'ort-wasm-simd-threaded.jsep.mjs',
    'ort-wasm-simd-threaded.jsep.wasm',
  ]

  return {
    name: 'onnx-wasm',
    configureServer(server) {
      server.middlewares.use('/ort-wasm', (req, res, next) => {
        const filename = (req.url ?? '').replace(/^\//, '').replace(/\?.*$/, '')
        if (!filename) { next(); return }
        const filepath = join(wasmDir, filename)
        // Guard against path traversal
        if (!filepath.startsWith(wasmDir)) { next(); return }
        if (!existsSync(filepath)) { next(); return }
        const ext = extname(filepath)
        if (ext === '.wasm') res.setHeader('Content-Type', 'application/wasm')
        else if (ext === '.mjs') res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
        createReadStream(filepath).pipe(res as any)
      })
    },
    generateBundle() {
      for (const file of files) {
        const src = join(wasmDir, file)
        if (existsSync(src)) {
          this.emitFile({ type: 'asset', fileName: `ort-wasm/${file}`, source: readFileSync(src) })
        }
      }
    },
  }
}

export default defineConfig({
  base: '/',
  server: { port: 5199 },
  plugins: [react(), wasm(), topLevelAwait(), onnxWasmPlugin()],
  optimizeDeps: {
    // web-llm manages its own wasm shards and must not be pre-bundled
    exclude: ['@mlc-ai/web-llm'],
  },
  worker: {
    format: 'es',
    plugins: () => [wasm(), topLevelAwait()],
  },
})
