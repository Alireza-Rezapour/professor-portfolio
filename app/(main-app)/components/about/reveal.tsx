"use client";

import { MotionConfig, motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const variants: Record<"rise" | "fade" | "scale", Variants> = {
  rise: { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  scale: {
    hidden: { opacity: 0, scale: 0.985 },
    show: { opacity: 1, scale: 1 },
  },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "rise" | "fade" | "scale";
  delay?: number;
  immediate?: boolean;
}

export function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
  immediate = false,
}: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={cn(className)}
        variants={variants[variant]}
        initial="hidden"
        transition={{ duration: 0.6, ease, delay }}
        {...(immediate
          ? { animate: "show" }
          : { whileInView: "show", viewport: { once: true, margin: "-80px" } })}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
