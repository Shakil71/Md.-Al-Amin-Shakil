import { Fragment, ReactNode } from "react";

export function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <Fragment key={i}>
            <span className="mx-6 flex flex-none items-center gap-3 font-display text-2xl font-semibold uppercase tracking-tight text-foreground/80 sm:text-3xl">
              {item}
              <span className="h-2 w-2 flex-none rounded-full bg-accent-2" />
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
