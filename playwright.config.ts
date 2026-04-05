import { defineConfig } from '@playwright/test'
export default defineConfig({
  use: {
    baseURL: 'http://localhost:5173',
    launchOptions: { args: ['--enable-features=SharedArrayBuffer'] },
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  },
  testDir: 'tests/e2e',
})
