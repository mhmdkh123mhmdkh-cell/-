import fs from "node:fs";
import path from "node:path";

async function main() {
  const rootDir = process.cwd();
  const outputPublic = path.join(rootDir, ".output", "public");
  const distDir = path.join(rootDir, "dist");

  // 1. Copy static assets to dist/
  if (fs.existsSync(outputPublic)) {
    fs.mkdirSync(distDir, { recursive: true });
    fs.cpSync(outputPublic, distDir, { recursive: true });
    console.log("[post-build] Copied .output/public to dist/");
  }

  // 2. Prerender root page to dist/index.html
  try {
    const ssrPath = path.join(rootDir, ".output", "server", "_ssr", "ssr.mjs");
    if (fs.existsSync(ssrPath)) {
      const ssr = await import(`file://${ssrPath}`);
      const res = await ssr.default.fetch(new Request("http://localhost:3000/"), {}, {});
      const html = await res.text();
      fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
      console.log(`[post-build] Prerendered dist/index.html (${html.length} bytes)`);
    }
  } catch (err) {
    console.warn("[post-build] Warning: Could not prerender dist/index.html:", err);
  }
}

main();
