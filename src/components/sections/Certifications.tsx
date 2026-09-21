"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { certifications, type CertificationEntry } from "@/data/resume";

function isPdf(url: string) {
  return url.toLowerCase().endsWith(".pdf");
}

function CertificateModal({
  cert,
  onClose,
}: {
  cert: CertificationEntry;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
    >
      <div
        className="glass glow-border relative w-full max-w-3xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground/90 ring-1 ring-border transition-colors hover:text-accent-2"
        >
          ✕
        </button>

        <div className="relative max-h-[70vh] w-full overflow-auto bg-black/20">
          <Image
            src={cert.thumbnail}
            alt={cert.name}
            width={1400}
            height={1000}
            className="h-auto w-full object-contain"
            sizes="(min-width: 768px) 48rem, 100vw"
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-border p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-foreground">
              {cert.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              {cert.issuer} · <span className="font-mono text-accent-3">{cert.year}</span>
              {cert.credentialId ? (
                <span className="font-mono text-xs text-muted"> · ID {cert.credentialId}</span>
              ) : null}
            </p>
          </div>
          <div className="flex flex-none flex-wrap gap-3">
            <a
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-accent-2/60 hover:text-accent-2"
            >
              {isPdf(cert.fileUrl) ? "Open PDF" : "Open full size"} ↗
            </a>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-2 to-accent px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-10px_rgba(52,104,224,0.8)] transition hover:brightness-110"
              >
                Verify credential ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState<CertificationEntry | null>(null);

  return (
    <section id="certifications" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            index="06"
            eyebrow="Certifications"
            title="Credentials, verified."
            description="Professional certifications and course completions, each backed by an issuer-verifiable credential."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <GlassCard key={cert.name} className="reveal flex flex-col overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="group relative -mx-6 -mt-6 mb-5 block aspect-[4/3] w-[calc(100%+3rem)] overflow-hidden rounded-t-2xl border-b border-border text-left"
                >
                  <Image
                    src={cert.thumbnail}
                    alt={cert.name}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View certificate ↗
                  </span>
                </button>

                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                    {cert.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>

                  <div className="mt-4 flex flex-1 items-end justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-wide text-accent-3">
                      {cert.year}
                    </span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-medium text-accent-2 underline-offset-4 hover:underline"
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>

      {active && <CertificateModal cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
