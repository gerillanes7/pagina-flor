const path = require("node:path");
const fs = require("node:fs");
const { chromium } = require("playwright");

const root = "C:\\Users\\germa\\Documents\\Proyectos\\paginarefuerzo";
const reviewDir = path.join(root, ".impeccable", "review");
fs.mkdirSync(reviewDir, { recursive: true });

const BASE = "http://127.0.0.1:4321";

const targets = [
  { name: "home-desktop",       url: `${BASE}/es/`,                              w: 1440, h: 900, full: true },
  { name: "home-desktop-vp",    url: `${BASE}/es/`,                              w: 1440, h: 900, full: false },
  { name: "home-mobile",        url: `${BASE}/es/`,                              w: 390,  h: 844, full: true },
  { name: "home-mobile-vp",     url: `${BASE}/es/`,                              w: 390,  h: 844, full: false },
  { name: "work-index-desktop", url: `${BASE}/es/work/`,                          w: 1440, h: 900, full: true },
  { name: "work-detail-desktop",url: `${BASE}/es/work/untitled-bone-field/`,     w: 1440, h: 900, full: true },
  { name: "studio-desktop",     url: `${BASE}/es/studio/`,                       w: 1440, h: 900, full: true },
  { name: "contact-desktop",    url: `${BASE}/es/contact/`,                      w: 1440, h: 900, full: true },
  { name: "en-home-desktop",    url: `${BASE}/en/`,                              w: 1440, h: 900, full: true },
];

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  for (const t of targets) {
    const page = await ctx.newPage();
    await page.setViewportSize({ width: t.w, height: t.h });
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 30000 });
      // Scroll through the page so the IntersectionObserver fires for every
      // section, then scroll back to the top before screenshotting.
      await page.evaluate(async () => {
        const total = document.documentElement.scrollHeight;
        const step = Math.max(window.innerHeight * 0.8, 400);
        for (let y = 0; y <= total; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 80));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 300));
      });
      await page.waitForTimeout(1800);
      const out = path.join(reviewDir, `${t.name}.png`);
      await page.screenshot({ path: out, fullPage: !!t.full });
      console.log("captured", out);
    } catch (err) {
      console.error("Failed", t.url, err.message);
    }
    await page.close();
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });