import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const TARGET_RUNTIME = "nodejs20.x";
const FUNCTIONS_DIR = ".vercel/output/functions";

const files = ["_render.func/.vc-config.json", "_middleware.func/.vc-config.json"];

let patched = 0;
for (const rel of files) {
  const path = join(process.cwd(), FUNCTIONS_DIR, rel);
  try {
    const raw = await readFile(path, "utf8");
    const json = JSON.parse(raw);
    if (json.runtime && json.runtime !== TARGET_RUNTIME) {
      json.runtime = TARGET_RUNTIME;
      await writeFile(path, JSON.stringify(json, null, 2));
      console.log(`patched ${rel}: ${json.runtime}`);
      patched++;
    }
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.warn(`skip ${rel}: ${err.message}`);
    }
  }
}

if (patched === 0) {
  console.log("vercel runtime: nothing to patch");
}
