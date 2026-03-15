import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    userAgent: "Mozilla/5.0 (iPhone 14 Pro)"
  });
  
  const pages = [
    { name: "home-mobile", path: "/" },
    { name: "shop-mobile", path: "/shop/" },
    { name: "product-mobile", path: "/products/nebula-astronaut-projector/" },
    { name: "contact-mobile", path: "/contact/" },
    { name: "cart-mobile", path: "/cart/" },
  ];
  
  for (const p of pages) {
    const pg = await ctx.newPage();
    await pg.goto(`http://localhost:3777${p.path}`, { waitUntil: "networkidle" });
    await pg.waitForTimeout(3500);
    await pg.screenshot({ path: `test-screenshots/${p.name}.png`, fullPage: false });
    await pg.close();
    console.log(`✓ ${p.name}`);
  }
  
  await browser.close();
  console.log("Done!");
})();
