import { Reveal } from "../about/reveal";

/** A few short paragraphs, no cards. */
export function CourseOverview({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="scroll-mt-24 pb-20 md:pb-24 lg:scroll-mt-28 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 border-t border-border pt-12 md:grid-cols-12 md:gap-10 md:pt-16 lg:gap-x-12 lg:pt-20">
          <div className="md:sticky md:top-28 md:col-span-3 md:self-start">
            <p className="text-sm font-medium text-muted-foreground md:text-[0.9rem]">
              درباره درس
            </p>
          </div>
          <div className="md:col-span-9 lg:col-span-8 lg:col-start-4">
            <h2
              id="overview-heading"
              className="text-2xl font-semibold leading-[1.6] sm:text-3xl lg:text-4xl"
            >
              درباره این درس
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground lg:mt-8 lg:text-lg lg:leading-9">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
