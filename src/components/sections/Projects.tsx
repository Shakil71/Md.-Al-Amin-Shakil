"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/data/resume";

export function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-pad relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full grid-fade opacity-40" />
      <Container>
        <div ref={ref}>
          <SectionHeading
            eyebrow="Projects"
            title="Infrastructure I've designed and shipped."
            description="Selected initiatives spanning cloud virtualization and secure remote access delivery."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <GlassCard key={project.title} className="reveal flex h-full flex-col">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wide text-accent-2">
                    {project.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{project.org}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.summary}</p>

                <ul className="mt-4 space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-3/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
