export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
        <span className="h-px w-6 bg-accent-2/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
