import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch();
  const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pg.goto("http://localhost:3777/", { waitUntil: "networkidle" });
  await pg.waitForTimeout(3500);
  await pg.screenshot({ path: "test-screenshots/aurora-check.png" });
  await browser.close();
  console.log("Done");
})();
