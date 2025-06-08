import { defineConfig } from "@playwright/test";

//LambdaTest Chrome Capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Test Build",
    name: "Playwright Test",
    user: "chandrikasunkara07",
    accessKey: "LT_iAixXKOWhEAwMnoruJJLZFqC0cj0GrMT8uvi1KrAscaYkYT",
    network: true,
    video: true,
    console: true,
  },
};

export default defineConfig({
  testDir: "tests",
  workers: 3,
  projects: [
    {
      name: "Playwright on Chrome",
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify(capabilities))}`,
        },
      },
    },
  ],
  reporter: [["html", { open: "never" }]],
});
