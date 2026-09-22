// Headless screenshot script — runs Astro preview server and captures key viewports
const { spawn } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");
const http = require("node:http");

const root = path.resolve(__dirname, "..");
const reviewDir = path.join(root, ".impeccable", "review");
fs.mkdirSync(reviewDir, { recursive: true });

const PORT = 4321;

function serve() {
  // Minimal static server for dist/, with redirects for trailing slashes and locale routes
  const distDir = path.join(root, "dist");
  const mime = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".svg": "image/svg+xml; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  const server = http.createServer((req, res) => {
    let url = req.url.split("?")[0];

    // Root redirect to /es/
    if (url === "/" || url === "") {
      res.writeHead(302, { Location: "/es/" });
      res.end();
      return;
    }

    let filePath = path.join(distDir, decodeURIComponent(url));
    let stat;
    try {
      stat = fs.statSync(filePath);
    } catch {
      // Try index.html in dir
      try {
        filePath = path.join(filePath, "index.html");
        stat = fs.statSync(filePath);
      } catch {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found: " + url);
        return;
      }
    }

    if (stat.isDirectory()) {
      filePath = path.join(filePath, "index.html");
      try { stat = fs.statSync(filePath); } catch {
        res.writeHead(404); res.end(); return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mime[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    fs.createReadStream(filePath).pipe(res);
  });

  server.listen(PORT, "127.0.0.1", () => {
    console.log("Static server on http://127.0.0.1:" + PORT);
  });
  return server;
}

async function main() {
  // Use astro preview directly — it already serves the dist directory with proper routing
  const preview = spawn("npx.cmd", ["astro", "preview", "--host", "127.0.0.1", "--port", String(PORT)], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
  });
  preview.stdout.on("data", (d) => process.stdout.write("[preview] " + d));
  preview.stderr.on("data", (d) => process.stderr.write("[preview] " + d));

  // Wait for server ready
  await new Promise((resolve) => {
    let buf = "";
    const onData = (chunk) => {
      buf += chunk.toString();
      if (buf.includes("ready")) {
        preview.stdout.off("data", onData);
        setTimeout(resolve, 800);
      }
    };
    preview.stdout.on("data", onData);
    setTimeout(resolve, 8000); // fallback
  });

  const server = { close() {} };

  // Try playwright via npx
  let playwright;
  try {
    playwright = require("playwright");
  } catch {
    console.log("Installing playwright...");
    require("child_process").execSync("npm install --no-save --no-audit --no-fund playwright", { stdio: "inherit", cwd: root });
    playwright = require("playwright");
  }

  // Install browsers
  try {
    require("child_process").execSync("npx playwright install chromium", { stdio: "inherit", cwd: root });
  } catch (err) {
    console.warn("Playwright install warning:", err.message);
  }

  const { chromium } = playwright;

  const browser = await chromium.launch();
  const ctx = await browser.newContext();

  const targets = [
    { name: "home-desktop",     url: "http://127.0.0.1:4321/es/",                w: 1440, h: 900,  full: true },
    { name: "home-mobile",      url: "http://127.0.0.1:4321/es/",                w: 390,  h: 844,  full: true },
    { name: "work-index-desktop", url: "http://127.0.0.1:4321/es/work/",         w: 1440, h: 900,  full: true },
    { name: "work-detail-desktop", url: "http://127.0.0.1:4321/es/work/untitled-bone-field/", w: 1440, h: 900, full: true },
    { name: "studio-desktop",   url: "http://127.0.0.1:4321/es/studio/",         w: 1440, h: 900,  full: true },
    { name: "contact-desktop",  url: "http://127.0.0.1:4321/es/contact/",        w: 1440, h: 900,  full: true },
    { name: "en-home-desktop",  url: "http://127.0.0.1:4321/en/",                w: 1440, h: 900,  full: true },
  ];

  for (const t of targets) {
    const page = await ctx.newPage();
    await page.setViewportSize({ width: t.w, height: t.h });
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 30000 });
      // wait a beat for animations
      await page.waitForTimeout(900);
      const out = path.join(reviewDir, `${t.name}.png`);
      await page.screenshot({ path: out, fullPage: t.full });
      console.log("captured", out);
    } catch (err) {
      console.error("Failed", t.url, err.message);
    }
    await page.close();
  }

  await browser.close();
  server.close();
  try { preview.kill(); } catch {}
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });