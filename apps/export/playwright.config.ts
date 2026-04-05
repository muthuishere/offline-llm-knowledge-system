import { defineConfig } from '@playwright/test'
export default defineConfig({
  use: {
    baseURL: 'http://localhost:5173/',
    // Block coi-serviceworker — it triggers page reloads that break test timing.
    // Structure/UI tests don't need SharedArrayBuffer.
    serviceWorkers: 'block',
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  },
  testDir: 'tests/e2e',
})
