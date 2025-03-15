// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Test directory
  timeout: 30000, // Timeout for each test
  retries: 1, // Retries on failure
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Browser window size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    video: 'retain-on-failure', // Record video only on failure
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]], // HTML report config
});
