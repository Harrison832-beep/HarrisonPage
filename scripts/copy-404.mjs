import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist", "static");
const indexPath = join(distDir, "index.html");
const fallbackPath = join(distDir, "404.html");

if (!existsSync(indexPath)) {
  throw new Error(`Cannot create GitHub Pages fallback because ${indexPath} does not exist.`);
}

copyFileSync(indexPath, fallbackPath);
console.log("Created dist/static/404.html for GitHub Pages SPA routing.");
