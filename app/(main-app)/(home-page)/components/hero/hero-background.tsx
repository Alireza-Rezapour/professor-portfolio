import { contoursA, contoursB } from "./hero-contours";
import { HeroDots } from "./hero-dots";

/**
 * Calm, "alive" hero background: faint contour lines of an optimization
 * landscape, drifting very slowly.
 *
 * Performance notes:
 * - Server component, static inline SVG: no JS, no canvas, no images to fetch.
 * - Animation is transform-only on promoted layers (compositor thread, no repaint).
 * - No blur filters, no grain/feTurbulence, no scroll or mouse listeners.
 * - Second layer is hidden on small screens; both stop for prefers-reduced-motion.
 * - Colors come from semantic tokens (currentColor = text-primary, var(--background)).
 */
function Contours({ paths }: { paths: string[] }) {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="size-full"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden contain-[paint]"
    >
      <HeroDots />
      {/* Soft tonal wash behind the portrait (left in RTL) */}
      <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_22%_45%,color-mix(in_oklab,var(--primary)_9%,transparent),transparent_70%)]" />

      {/* Contour layers */}
      <div className="absolute inset-[-6%] text-primary/[0.14] will-change-transform animate-drift-a motion-reduce:animate-none">
        <Contours paths={contoursA} />
      </div>
      <div className="absolute inset-[-6%] hidden text-primary/9 will-change-transform animate-drift-b motion-reduce:animate-none md:block">
        <Contours paths={contoursB} />
      </div>

      {/* Keep text readable: lines fade out under the text column (right in RTL) */}
      <div className="absolute inset-0 bg-background/60 md:bg-[linear-gradient(to_left,var(--background)_0%,color-mix(in_oklab,var(--background)_75%,transparent)_38%,transparent_70%)]" />

      {/* Blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
    </div>
  );
}
