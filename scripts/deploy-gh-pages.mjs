/**
 * Publishes the production build to the `gh-pages` branch.
 *
 * GitHub Pages serves that branch, so this is all it takes to update the live
 * site after editing anything under `src/`.
 *
 *   pnpm deploy
 */
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(repoRoot, "dist");
const stagingDir = join(repoRoot, ".gh-pages");

const gitIn = (cwd, args) => execFileSync("git", args, { cwd, stdio: "inherit" });
const gitRead = (args) => execFileSync("git", args, { cwd: repoRoot, encoding: "utf8" }).trim();

if (!existsSync(join(distDir, "index.html"))) {
  console.error("No build found in dist/. Run `pnpm build` first.");
  process.exit(1);
}

const slug = gitRead(["remote", "get-url", "origin"]).replace(/\.git$/, "");
const [owner, repoName] = slug.split("/").slice(-2);
const authorName = gitRead(["config", "user.name"]) || "github-pages";
const authorEmail = gitRead(["config", "user.email"]) || "github-pages@users.noreply.github.com";

// A project site is served from https://<user>.github.io/<repo>/, so the Vite
// `base` has to match the repository name or every asset 404s.
const viteConfig = readFileSync(join(repoRoot, "vite.config.ts"), "utf8");
const configuredBase = viteConfig.match(/const base = "([^"]+)"/)?.[1];
if (configuredBase !== `/${repoName}/`) {
  console.warn(
    `\nWarning: vite.config.ts sets base to "${configuredBase}" but this repo ` +
      `deploys to "/${repoName}/". Update it before deploying.\n`,
  );
}

rmSync(stagingDir, { recursive: true, force: true });
mkdirSync(stagingDir, { recursive: true });
cpSync(distDir, stagingDir, { recursive: true });

gitIn(stagingDir, ["init", "-q", "-b", "gh-pages"]);
gitIn(stagingDir, ["add", "-A"]);
gitIn(stagingDir, [
  "-c",
  `user.name=${authorName}`,
  "-c",
  `user.email=${authorEmail}`,
  "commit",
  "-q",
  "-m",
  `Deploy ${new Date().toISOString()}`,
]);
gitIn(stagingDir, ["remote", "add", "origin", `https://github.com/${owner}/${repoName}.git`]);
gitIn(stagingDir, ["push", "--force", "origin", "gh-pages"]);

rmSync(stagingDir, { recursive: true, force: true });
console.log(`\nPublished gh-pages → https://${owner.toLowerCase()}.github.io/${repoName}/`);
