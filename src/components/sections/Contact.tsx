"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/resume";

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk infrastructure."
            description="Open to junior/mid system engineering roles, on-call support work, and infrastructure projects. Reach out any time."
            align="center"
          />

          <GlassCard className="reveal mx-auto mt-12 max-w-2xl text-center">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent-2">Email</p>
                <p className="mt-2 break-all text-sm text-foreground/90">{profile.email}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent-2">Phone</p>
                <p className="mt-2 text-sm text-foreground/90">{profile.phone}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent-2">
                  Location
                </p>
                <p className="mt-2 text-sm text-foreground/90">{profile.location}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary">
                Send an Email
              </Button>
              <Button href={profile.linkedin} variant="ghost" target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:border-accent-2/60 hover:text-accent-2"
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
