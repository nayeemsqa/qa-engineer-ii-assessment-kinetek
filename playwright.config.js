const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Test directory
  timeout: 30000, // Timeout for each test
  // retries: 2, // Retries on failure
  use: {
    browserName: 'chromium', // Use Chromium-based browsers
    channel: 'chrome', // Ensures Playwright runs tests in Google Chrome
    headless: false, // Runs tests with a visible browser window
    // viewport: { width: 1280, height: 720 }, // Browser window size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    video: 'retain-on-failure', // Record video only on failure
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }]], // HTML report config
});
