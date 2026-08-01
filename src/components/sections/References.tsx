"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { references } from "@/data/resume";

export function References() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="references" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading eyebrow="References" title="People who've worked with me." />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {references.map((person) => (
              <GlassCard key={person.name} className="reveal">
                <p className="font-display text-base font-semibold text-foreground">
                  {person.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {person.role}, {person.company}
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-accent-2">
                  Contact details available on request
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
