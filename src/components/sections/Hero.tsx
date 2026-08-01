"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { highlights, profile } from "@/data/resume";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".hero-eyebrow", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo(
          ".hero-title span",
          { autoAlpha: 0, y: 40, rotateX: -30 },
          { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          ".hero-copy",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4",
        )
        .fromTo(
          ".hero-stat",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          ".hero-photo",
          { autoAlpha: 0, y: 24, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
          "-=1.1",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const titleWords = profile.name.split(" ");

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[160px]" />
      <div className="absolute bottom-[-10rem] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent-2/8 blur-[160px]" />

      <div className="absolute inset-0 z-0 opacity-60">
        <HeroScene />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              {profile.role} · {profile.location}
            </p>

            <h1 className="hero-title display-huge mt-6 text-[clamp(2.75rem,7vw,6rem)] text-foreground">
              {titleWords.map((word, i) => (
                <span key={i} className="mr-3 inline-block">
                  {i === titleWords.length - 1 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p className="hero-copy mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <span className="hero-cta">
                <Button href="#projects" variant="primary">
                  View Projects
                </Button>
              </span>
              <span className="hero-cta">
                <Button href={profile.resumeFile} variant="ghost" download>
                  Download Resume
                </Button>
              </span>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="hero-stat">
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-photo relative flex-none">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent-2/20 to-accent/15 blur-3xl" />
            <div className="glass relative w-64 overflow-hidden rounded-[2rem] p-2 sm:w-72">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 640px) 18rem, 16rem"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
