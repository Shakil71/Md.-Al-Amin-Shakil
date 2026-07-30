"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(".reveal");
    const elements = targets.length ? Array.from(targets) : [root];

    const ctx = gsap.context(() => {
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 6) * 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return ref;
}
