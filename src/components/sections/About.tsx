"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/resume";

const focusAreas = [
  {
    title: "Enterprise Systems",
    body: "Exadata, SPARC/X-Series and Private Cloud Appliance (PCA) support for banking and telecom clients, with structured incident handling.",
  },
  {
    title: "Storage & Networking",
    body: "LVM, RAID, and Multipath storage; bonding, VLAN, and DNS networking; SSL/TLS and security hardening across production estates.",
  },
  {
    title: "Virtualization",
    body: "Solaris Zones, LDOMs, and hypervisors including VMware ESXi, Oracle VM, KVM/libvirt, and Microsoft Hyper-V.",
  },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad relative">
      <Container>
        <div ref={ref}>
          <SectionHeading
            eyebrow="About"
            title="Reliable infrastructure, calm under pressure."
            description={profile.summary}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <GlassCard key={area.title} className="reveal">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
