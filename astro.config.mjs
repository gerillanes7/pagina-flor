import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import node from "@astrojs/node";
import { keystaticConfig } from "./keystatic.config";

export default defineConfig({
  site: "https://florencia.example",
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  integrations: [react(), keystatic(keystaticConfig)],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    server: {
      host: "127.0.0.1",
      port: 4321,
      strictPort: true,
    },
    preview: {
      host: "127.0.0.1",
      port: 4321,
      strictPort: true,
    },
  },
});
