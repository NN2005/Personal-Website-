import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Public base path.
 *
 * GitHub Pages project sites are served from `https://<user>.github.io/<repo>/`,
 * so this must match the repository name (including its capital letters and the
 * trailing dash). Change it to "/" if you move the site to a custom domain or to
 * a `<user>.github.io` repository.
 */
const base = "/Personal-Website-/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
