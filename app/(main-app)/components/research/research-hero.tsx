import { ResearchHeroData } from "@/data/research";
import { ArrowDown } from "lucide-react";
import { Reveal } from "../about/reveal";

/** Deliberately minimal: label, statement, description, and a quiet in-page index. */
export function ResearchHero({ data }: { data: ResearchHeroData }) {
  return (
    <section
      aria-labelledby="research-hero-heading"
      className="pb-16 pt-28 md:pb-20 md:pt-36 lg:pb-24 lg:pt-44"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal immediate>
          <p className="text-sm text-muted-foreground">{data.label}</p>
          <h1
            id="research-hero-heading"
            className="mt-5 max-w-4xl text-balance text-[2.125rem] font-semibold leading-[1.5] sm:text-5xl lg:text-6xl lg:leading-[1.45]"
          >
            {data.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
            {data.description}
          </p>
        </Reveal>

        <Reveal immediate delay={0.12}>
          <nav aria-label="بخش‌های این صفحه">
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-1 border-t border-border pt-5">
              {data.index.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-[15px] outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.label}
                    <ArrowDown
                      aria-hidden
                      className="size-3.5 text-muted-foreground"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
