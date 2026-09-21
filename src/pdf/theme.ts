// Shared, print-safe style tokens for the generated Resume & Cover Letter PDFs.
// Kept deliberately simple (standard Helvetica, no icons/tables/columns/images)
// so the output stays fully text-selectable and ATS-parser friendly.

export const COLORS = {
  ink: "#111827", // primary body text
  heading: "#0b1220", // name / section headings
  accent: "#1d4ed8", // name accent + rule lines
  muted: "#475569", // secondary text (dates, meta)
  rule: "#cbd5e1", // hairline dividers
};

export const FONT = {
  base: "Helvetica",
  bold: "Helvetica-Bold",
  oblique: "Helvetica-Oblique",
};

export const PAGE = {
  size: "A4" as const,
  padding: { top: 42, bottom: 40, left: 46, right: 46 },
};
