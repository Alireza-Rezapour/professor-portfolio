"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

const buttonBase =
  "h-11 w-full rounded-[10px] px-7 text-[15px] transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 sm:w-auto";

export function Hero({ background }: { background?: React.ReactNode }) {
  const c = heroContent;

  return (
    // reducedMotion="user": transform animations are skipped for users who prefer less motion
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="hero-name"
        className="relative isolate flex overflow-hidden md:min-h-[680px] lg:min-h-[760px] lg:items-center"
      >
        {background}
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[55fr_45fr] md:gap-8 md:pb-20 md:pt-32 lg:gap-16 lg:px-12 lg:pb-24 lg:pt-36">
          {/* Content: first in source order, so it sits on the right in RTL */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            <motion.p
              variants={rise}
              className="order-1 text-sm text-muted-foreground"
            >
              {c.eyebrow}
            </motion.p>

            <motion.h1
              id="hero-name"
              variants={rise}
              className="order-2 mt-4 text-4xl font-semibold leading-[1.35] sm:text-5xl md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]"
            >
              {c.name}
            </motion.h1>

            <motion.p
              variants={rise}
              className="order-4 mt-5 text-lg text-primary md:order-3 md:mt-3"
            >
              {c.position}
            </motion.p>

            <motion.p
              variants={fade}
              className="order-5 mt-6 max-w-xl text-[17px] leading-8 text-muted-foreground sm:text-lg sm:leading-9 md:mt-8"
            >
              {c.description}
            </motion.p>

            <motion.div
              variants={fade}
              className="order-6 mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10"
            >
              <Button asChild className={buttonBase}>
                <Link href={c.primaryCta.href}>{c.primaryCta.label}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`${buttonBase} bg-transparent`}
              >
                <Link href={c.secondaryCta.href}>{c.secondaryCta.label}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image: left in RTL on md and up, last on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mx-auto w-[min(82vw,320px)] md:mx-0 md:w-full md:max-w-[430px] md:justify-self-center lg:justify-self-end"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted ring-1 ring-border">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 430px, (min-width: 768px) 40vw, 320px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
