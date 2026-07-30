import { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass glow-border relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
