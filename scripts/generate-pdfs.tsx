/**
 * Regenerates the downloadable Resume and Cover Letter PDFs directly from
 * the site's single source of truth (`src/data/resume.ts`), so any content
 * update that gets pushed to `main` is automatically reflected in the files
 * visitors download — no manual PDF editing required.
 *
 * Run manually with `npm run generate:pdfs`. It also runs automatically
 * before every `npm run build` (see the `prebuild` script in package.json)
 * and as an explicit step in the GitHub Pages deploy workflow.
 */
import { renderToFile } from "@react-pdf/renderer";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ResumeDocument } from "../src/pdf/ResumeDocument";
import { CoverLetterDocument } from "../src/pdf/CoverLetterDocument";

const __dirname = dirname(fileURLToPath(import.meta.url));
// When bundled by scripts/run-generate-pdfs.mjs this file no longer lives
// next to the real `public/` dir, so the driver passes the actual path.
const publicDir = process.env.RESUME_PDF_PUBLIC_DIR ?? join(__dirname, "..", "public");

async function main() {
  mkdirSync(publicDir, { recursive: true });

  const resumePath = join(publicDir, "Md_Al_Amin_Shakil_Resume.pdf");
  const coverLetterPath = join(publicDir, "Md_Al_Amin_Shakil_Cover_Letter.pdf");

  await renderToFile(<ResumeDocument />, resumePath);
  console.log(`Generated ${resumePath}`);

  await renderToFile(<CoverLetterDocument />, coverLetterPath);
  console.log(`Generated ${coverLetterPath}`);
}

main().catch((err) => {
  console.error("Failed to generate PDFs:", err);
  process.exit(1);
});
