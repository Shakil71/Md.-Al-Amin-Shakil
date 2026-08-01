"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/resume";

let registered = false;

export function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const track = trackRef.current;
    const progress = progressRef.current;
    if (!track || !progress) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 70%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            index="02"
            eyebrow="Experience"
            title="Where I've kept the lights on."
            description="Three roles across enterprise infrastructure, IT operations, and support — each building deeper hands-on ownership."
          />

          <div ref={trackRef} className="relative mt-14 pl-8 sm:pl-10">
            <div className="absolute inset-y-0 left-0 w-px bg-border" />
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-accent-2 via-accent to-accent-3"
            />

            <div className="space-y-10">
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
        </div>
      </Container>
    </section>
  );
}
