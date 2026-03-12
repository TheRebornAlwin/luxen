import { chromium } from "playwright";

const BASE = "http://localhost:3777";

const pages = [
  { path: "/", name: "homepage" },
  { path: "/shop", name: "shop" },
  { path: "/products/nebula-astronaut-projector", name: "product-page" },
  { path: "/about", name: "about" },
  { path: "/faq", name: "faq" },
  { path: "/shipping", name: "shipping" },
  { path: "/contact", name: "contact" },
  { path: "/cart", name: "cart" },
  { path: "/track-order", name: "track-order" },
  { path: "/refund-policy", name: "refund-policy" },
  { path: "/privacy-policy", name: "privacy-policy" },
  { path: "/terms-of-service", name: "terms" },
];

async function testSite() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const results: {
    page: string;
    status: string;
    errors: string[];
    loadTime: number;
    screenshot: string;
  }[] = [];

  for (const p of pages) {
    const pg = await context.newPage();
    const errors: string[] = [];
    const failedResources: string[] = [];

    // Capture console errors
    pg.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    // Capture failed network requests
    pg.on("requestfailed", (req) => {
      failedResources.push(`${req.failure()?.errorText}: ${req.url()}`);
    });

    // Capture response errors (404s, 500s)
    pg.on("response", (res) => {
      if (res.status() >= 400) {
        failedResources.push(`HTTP ${res.status()}: ${res.url()}`);
      }
    });

    const start = Date.now();
    try {
      await pg.goto(`${BASE}${p.path}`, { waitUntil: "networkidle", timeout: 30000 });
      // Wait for loading screen to disappear (2800ms + buffer)
      await pg.waitForTimeout(3500);

      const loadTime = Date.now() - start;

      // Take screenshot
      const screenshotPath = `test-screenshots/${p.name}.png`;
      await pg.screenshot({ path: screenshotPath, fullPage: false });

      // Check for critical issues
      if (failedResources.length > 0) {
        errors.push(...failedResources);
      }

      results.push({
        page: `${p.name} (${p.path})`,
        status: errors.length > 0 ? "ISSUES" : "OK",
        errors,
        loadTime,
        screenshot: screenshotPath,
      });
    } catch (e: unknown) {
      const errorMsg = e instanceof Error ? e.message : String(e);
      results.push({
        page: `${p.name} (${p.path})`,
        status: "FAILED",
        errors: [errorMsg],
        loadTime: Date.now() - start,
        screenshot: "",
      });
    }
    await pg.close();
  }

  // Print results
  console.log("\n========== LUXEN SITE TEST RESULTS ==========\n");
  for (const r of results) {
    const icon = r.status === "OK" ? "✅" : r.status === "ISSUES" ? "⚠️" : "❌";
    console.log(`${icon} ${r.page} — ${r.loadTime}ms`);
    if (r.errors.length > 0) {
      for (const e of r.errors) {
        console.log(`   └─ ${e}`);
      }
    }
  }

  // Summary
  const ok = results.filter((r) => r.status === "OK").length;
  const issues = results.filter((r) => r.status === "ISSUES").length;
  const failed = results.filter((r) => r.status === "FAILED").length;
  console.log(`\n📊 Summary: ${ok} OK, ${issues} with issues, ${failed} failed out of ${results.length} pages`);
  console.log(`📸 Screenshots saved to test-screenshots/\n`);

  await browser.close();
}

testSite().catch(console.error);
