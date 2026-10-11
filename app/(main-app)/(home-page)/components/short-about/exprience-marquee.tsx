"use client";

import { motion, type Variants } from "framer-motion";

import type { ExperienceItem } from "@/data/content";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// Pixels per second the strip travels (kept slow and readable)
const SPEED = 24;
const CARD_STEP = 300; // average card width + gap, for sizing only
const MAX_VIEWPORT = 3440; // widest screen we want to fill without gaps

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <li
      className={cn(
        "flex min-h-40 w-66 shrink-0 flex-col justify-between rounded-xl border bg-card p-6 transition-colors duration-300 hover:border-primary/40 sm:w-72 lg:w-80",
        item.current ? "border-primary/30" : "border-border",
      )}
    >
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{item.period}</span>
        {item.current && (
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
        )}
      </div>
      <div>
        <p className="text-base font-semibold leading-7 text-foreground">
          {item.role}
        </p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {item.organization}
        </p>
      </div>
    </li>
  );
}

export function ExperienceMarquee({
  label,
  items,
}: {
  label: string;
  items: ExperienceItem[];
}) {
  // Enough identical groups to fill any screen; only the first is exposed to assistive tech.
  const groups = Math.max(
    2,
    Math.ceil(MAX_VIEWPORT / (items.length * CARD_STEP)) + 1,
  );
  const duration = (items.length * CARD_STEP) / SPEED;

  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-5 px-5 sm:px-8 lg:px-12">
        <h3 className="shrink-0 text-sm font-medium text-muted-foreground md:text-[0.9rem]">
          {label}
        </h3>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>

      {/* Full-bleed strip with soft edges. Hover pauses it; reduced motion turns it into a scrollable row. */}
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto motion-reduce:px-5 motion-reduce:sm:px-8">
        <div
          className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={
            {
              animationDuration: `${duration}s`,
              "--marquee-shift": `${100 / groups}%`,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: groups }, (_, g) => (
            <ul
              key={g}
              aria-hidden={g > 0 ? true : undefined}
              className={cn(
                "flex shrink-0 gap-4 pe-4",
                g > 0 && "motion-reduce:hidden",
              )}
            >
              {items.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
