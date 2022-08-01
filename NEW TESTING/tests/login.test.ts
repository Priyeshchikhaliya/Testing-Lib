import { chromium } from "@playwright/test";

test("Login Test", async () => {
  const browser = chromium.launch();
  const context = (await browser).newContext();
  const page = (await context).newPage();
  // Gracefully close up everything
  await context.close();
  await browser.close();
});
