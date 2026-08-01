"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      registered = true;
    }

    const root = rootRef.current;
    const titleEl = titleRef.current;
    if (!root || !titleEl) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(titleEl, { type: "words", wordsClass: "inline-block" });

      gsap.fromTo(
        split.words,
        { autoAlpha: 0, y: "110%" },
        {
          autoAlpha: 1,
          y: "0%",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: root, start: "top 85%" },
        },
      );

      gsap.fromTo(
        [".sh-eyebrow", ".sh-index", ".sh-description"],
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: root, start: "top 85%" },
        },
      );

      return () => split.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`relative ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="sh-index section-index pointer-events-none absolute -top-8 right-0 -z-10 select-none sm:-top-10">
        {index}
      </span>

      <span className="sh-eyebrow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-2">
        <span className="h-px w-6 bg-accent-2/70" />
        {eyebrow}
      </span>

      <h2
        ref={titleRef}
        className="display-huge mt-4 max-w-2xl text-3xl text-foreground sm:text-5xl"
      >
        {title}
      </h2>

      {description ? (
        <p className="sh-description mt-5 max-w-xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
