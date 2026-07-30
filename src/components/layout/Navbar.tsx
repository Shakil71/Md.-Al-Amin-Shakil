"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, profile } from "@/data/resume";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_4px_30px_-15px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="relative h-9 w-9 flex-none overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="2.25rem"
              className="object-cover"
            />
          </span>
          <span className="hidden text-sm font-medium text-muted sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="!px-5 !py-2.5 text-sm">
            Let&apos;s talk
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="glass border-t border-border px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-accent-2"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="mt-2 w-full text-sm" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
