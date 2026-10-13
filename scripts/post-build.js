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

  // 2. Prerender key routes for static hosting (Netlify, etc.)
  try {
    const ssrPath = path.join(rootDir, ".output", "server", "_ssr", "ssr.mjs");
    if (fs.existsSync(ssrPath)) {
      const ssr = await import(`file://${ssrPath}`);
      const routesToPrerender = [
        { path: "/", file: path.join(distDir, "index.html") },
        { path: "/blog", file: path.join(distDir, "blog", "index.html") },
        {
          path: "/blog/content-marketing-strategies-startups",
          file: path.join(distDir, "blog", "content-marketing-strategies-startups", "index.html"),
        },
        {
          path: "/blog/sleeping-with-lights-on",
          file: path.join(distDir, "blog", "sleeping-with-lights-on", "index.html"),
        },
        {
          path: "/blog/introduce-yourself-job-interview",
          file: path.join(distDir, "blog", "introduce-yourself-job-interview", "index.html"),
        },
        {
          path: "/blog/heartburn-risks-complications-treatment",
          file: path.join(distDir, "blog", "heartburn-risks-complications-treatment", "index.html"),
        },
        {
          path: "/work/career-identity",
          file: path.join(distDir, "work", "career-identity", "index.html"),
        },
        {
          path: "/work/content-marketing",
          file: path.join(distDir, "work", "content-marketing", "index.html"),
        },
        {
          path: "/work/personal-website",
          file: path.join(distDir, "work", "personal-website", "index.html"),
        },
      ];

      for (const route of routesToPrerender) {
        try {
          const res = await ssr.default.fetch(
            new Request(`http://localhost:3000${route.path}`),
            {},
            {},
          );
          const html = await res.text();
          fs.mkdirSync(path.dirname(route.file), { recursive: true });
          fs.writeFileSync(route.file, html, "utf-8");
          console.log(
            `[post-build] Prerendered ${route.path} -> ${path.relative(rootDir, route.file)} (${html.length} bytes)`,
          );
        } catch (err) {
          console.warn(`[post-build] Warning: Could not prerender ${route.path}:`, err);
        }
      }
    }
  } catch (err) {
    console.warn("[post-build] Warning: Could not load SSR module:", err);
  }

  // 3. Guarantee Netlify SPA redirect fallback
  const redirectsFile = path.join(distDir, "_redirects");
  if (!fs.existsSync(redirectsFile)) {
    fs.writeFileSync(redirectsFile, "/* /index.html 200\n", "utf-8");
    console.log("[post-build] Generated dist/_redirects");
  }
}

main();
