"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { certifications, education } from "@/data/resume";

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            index="05"
            eyebrow="Education & Certifications"
            title="Foundations and formal credentials."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <GlassCard className="reveal">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Education
              </h3>
              <ul className="mt-5 space-y-5">
                {education.map((item) => (
                  <li key={item.degree} className="border-l-2 border-accent-2/40 pl-4">
                    <p className="font-medium text-foreground">{item.degree}</p>
                    <p className="mt-1 text-sm text-muted">{item.school}</p>
                    <p className="mt-1 font-mono text-xs text-accent-2">{item.period}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="reveal">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Certifications
              </h3>
              <ul className="mt-5 space-y-5">
                {certifications.map((item) => (
                  <li key={item.name} className="border-l-2 border-accent-3/40 pl-4">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                    <p className="mt-1 font-mono text-xs text-accent-3">{item.year}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
