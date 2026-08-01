import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2/60";

const variants = {
  primary:
    "bg-gradient-to-r from-accent-2 to-accent text-white shadow-[0_0_24px_-10px_rgba(52,104,224,0.8)] hover:brightness-110 hover:shadow-[0_0_30px_-8px_rgba(52,104,224,0.9)]",
  ghost:
    "border border-border text-foreground/90 hover:border-accent-2/60 hover:text-accent-2",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: CommonProps & { href?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
