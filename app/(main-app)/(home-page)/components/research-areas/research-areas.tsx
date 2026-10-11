import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { ResearchAreasContent } from "@/data/content";
import { toFa } from "@/lib/format";
import { ArrowLink } from "@/app/(main-app)/components/about/arrow-link";
import { Reveal } from "@/app/(main-app)/components/about/reveal";

export function ResearchAreas({ content }: { content: ResearchAreasContent }) {
  const { label, title, description, link, areas } = content;

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="pb-20 md:pb-24 lg:pb-36"
    >
      {/* Same container metrics and top hairline as Short About */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-t border-border pt-14 md:gap-14 md:pt-20 lg:grid-cols-12 lg:gap-x-16 lg:pt-28">
          {/* Introduction: right in RTL, sticky on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="text-sm font-medium text-muted-foreground md:text-[0.9rem]">
                {label}
              </p>
              <h2
                id="research-heading"
                className="mt-4 text-[1.875rem] font-semibold leading-[1.5] sm:text-4xl lg:text-[2.75rem]"
              >
                {title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9">
                {description}
              </p>
              <div className="mt-8">
                <ArrowLink href={link.href} className="text-[15px]">
                  {link.label}
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          {/* Research list: substantial editorial rows, not cards */}
          <ol className="border-b border-border lg:col-span-8">
            {areas.map((area, i) => (
              <li
                key={area.id}
                // Hover: a thin accent line sweeps across the row's top rule (CSS only)
                className="group relative border-t border-border after:absolute after:inset-x-0 after:-top-px after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 hover:after:scale-x-100 motion-reduce:after:transition-none"
              >
                <Reveal delay={Math.min(i * 0.07, 0.3)}>
                  <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-start gap-x-3 py-8 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-x-6 md:py-10 lg:py-12">
                    <span
                      aria-hidden
                      className="pt-1 text-sm text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary md:pt-1.5"
                    >
                      {toFa(i + 1, 2)}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold leading-[1.6] sm:text-[1.375rem] lg:text-[1.75rem]">
                        {/* Stretched link: the whole row is clickable, the accessible name stays short */}
                        <Link
                          href={area.href}
                          className="outline-none transition-colors duration-300 after:absolute after:inset-0 group-hover:text-primary focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-ring/60"
                        >
                          {area.title}
                        </Link>
                      </h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-8 text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base lg:text-[17px]">
                        {area.description}
                      </p>
                    </div>

                    {/* Points left: "forward" in RTL */}
                    <ArrowLeft
                      aria-hidden
                      className="mt-1.5 size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-x-1.5 group-hover:text-primary motion-reduce:transition-colors motion-reduce:group-hover:translate-x-0 md:mt-2.5"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
