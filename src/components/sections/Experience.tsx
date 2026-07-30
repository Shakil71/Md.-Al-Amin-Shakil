"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/resume";

export function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've kept the lights on."
            description="Three roles across enterprise infrastructure, IT operations, and support — each building deeper hands-on ownership."
          />

          <div className="relative mt-14 space-y-10 border-l border-border pl-8 sm:pl-10">
            {experience.map((job) => (
              <article key={job.company} className="reveal relative">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-accent-2 to-accent shadow-[0_0_0_4px_var(--background),0_0_16px_2px_rgba(124,92,255,0.6)] sm:-left-[3.05rem]" />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wide text-accent-2">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">{job.company}</p>

                <ul className="mt-4 space-y-2">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-2/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
