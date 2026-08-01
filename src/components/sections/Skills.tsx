"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { skills } from "@/data/resume";

export function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            index="04"
            eyebrow="Skills"
            title="The toolkit behind the uptime."
            description="Depth across operating systems, storage, networking, virtualization, and security operations."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <GlassCard key={group.category} className="reveal">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent-2">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
