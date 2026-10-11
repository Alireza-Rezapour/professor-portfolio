import type { AboutCtaData } from "@/data/about";
import { ArrowLink } from "./arrow-link";
import { Reveal } from "./reveal";

export function AboutCta({ data }: { data: AboutCtaData }) {
  return (
    <section
      id="collaborate"
      aria-labelledby="collaborate-heading"
      className="pb-24 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="border-t border-border pt-14 lg:pt-20">
          <h2
            id="collaborate-heading"
            className="max-w-3xl text-balance text-3xl font-semibold leading-[1.6] sm:text-4xl lg:text-5xl lg:leading-[1.5]"
          >
            {data.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            {data.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            <ArrowLink href={data.primary.href} variant="primary" className="text-lg">
              {data.primary.label}
            </ArrowLink>
            <ArrowLink href={data.secondary.href} className="text-lg text-muted-foreground">
              {data.secondary.label}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
