"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MotionConfig, motion, type Variants } from "framer-motion";

import type { ShortAboutContent } from "@/data/content";
import { ExperienceMarquee } from "./exprience-marquee";

// Same easing and variant pattern as the Hero, so motion feels consistent.
const ease = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

/** Split the title into plain text and emphasised words. */
function splitTitle(title: string, highlights: string[]) {
  if (!highlights.length) return [{ text: title, highlight: false }];
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  return title
    .split(new RegExp(`(${escaped.join("|")})`))
    .filter(Boolean)
    .map((text) => ({ text, highlight: highlights.includes(text) }));
}

export function ShortAbout({ content }: { content: ShortAboutContent }) {
  const {
    label,
    title,
    highlights,
    description,
    experienceLabel,
    experiences,
    linkLabel,
    linkHref,
  } = content;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        aria-labelledby="about-heading"
        className="pb-20 md:pb-24 lg:pb-36"
      >
        {/* Same container metrics as the Hero so edges line up */}
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 border-t border-border pt-14 md:grid-cols-12 md:gap-10 md:pt-20 lg:gap-x-12 lg:pt-28"
          >
            {/* Label: first in source order, so it sits on the right in RTL */}
            <div className="md:col-span-3 lg:col-span-2">
              <motion.p
                variants={fade}
                className="text-sm font-medium text-muted-foreground md:text-[0.9rem]"
              >
                {label}
              </motion.p>
            </div>

            <div className="md:col-span-9 lg:col-span-8">
              <motion.h2
                id="about-heading"
                variants={rise}
                className="max-w-2xl text-balance text-[1.875rem] font-semibold leading-[1.6] sm:text-4xl sm:leading-[1.55] lg:text-[2.5rem] lg:leading-[1.55] xl:text-[2.75rem]"
              >
                {splitTitle(title, highlights).map((part, i) =>
                  part.highlight ? (
                    <span
                      key={i}
                      className="text-primary underline decoration-border decoration-1 underline-offset-[0.4em]"
                    >
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </motion.h2>

              <motion.p
                variants={fade}
                className="mt-6 max-w-160 text-base leading-8 text-muted-foreground sm:text-[17px] sm:leading-9 lg:mt-8 lg:text-lg"
              >
                {description}
              </motion.p>

              <motion.div variants={fade} className="mt-10 lg:mt-12">
                <Link
                  href={linkHref}
                  className="group inline-flex items-center gap-2 rounded-sm border-b border-border pb-1.5 text-[15px] font-medium text-foreground outline-none transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {linkLabel}
                  {/* Points left: the "forward" direction in RTL */}
                  <ArrowLeft
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-24 lg:mt-28">
          <ExperienceMarquee label={experienceLabel} items={experiences} />
        </div>
      </section>
    </MotionConfig>
  );
}
