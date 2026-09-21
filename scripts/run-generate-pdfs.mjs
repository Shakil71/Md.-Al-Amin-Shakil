/**
 * Bundles scripts/generate-pdfs.tsx (and its local src/ imports) with esbuild,
 * then runs the result with plain Node. `@react-pdf/renderer` and other
 * node_modules packages are left external so Node's native ESM resolver
 * handles them — this sidesteps a known incompatibility between the `tsx`
 * loader's path-resolution hook and `@react-pdf/renderer`'s dependency
 * (`@react-pdf/hyphenate`) which uses wildcard subpath exports.
 */
import { build } from "esbuild";
import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const entry = join(__dirname, "generate-pdfs.tsx");
// Build inside the project (not the OS tmp dir) so the bundled file's
// external `require`/`import`s can still resolve packages via the
// project's own node_modules directory tree.
const tmpRoot = join(__dirname, ".tmp");
mkdirSync(tmpRoot, { recursive: true });
const outDir = mkdtempSync(join(tmpRoot, "build-"));
const outfile = join(outDir, "generate-pdfs.mjs");

try {
  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node18",
    jsx: "automatic",
    packages: "external",
    logLevel: "warning",
  });

  // The bundled file is written into a temp build dir, so it can no longer
  // locate `public/` relative to itself — pass the real path explicitly.
  process.env.RESUME_PDF_PUBLIC_DIR = join(__dirname, "..", "public");

  await import(pathToFileURL(outfile).href);
} finally {
  rmSync(outDir, { recursive: true, force: true });
}
