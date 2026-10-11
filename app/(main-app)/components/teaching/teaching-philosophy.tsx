import { TeachingPageData } from "@/data/teaching";
import { Reveal } from "../about/reveal";

/** A typographic statement with a few paragraphs: no cards. */
export function TeachingPhilosophy({
  data,
}: {
  data: TeachingPageData["philosophy"];
}) {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="scroll-mt-24 pb-20 md:pb-24 lg:scroll-mt-28 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 border-t border-border pt-14 md:grid-cols-12 md:gap-10 md:pt-20 lg:gap-x-12 lg:pt-28">
          <div className="md:sticky md:top-28 md:col-span-3 md:self-start">
            <p className="text-sm font-medium text-muted-foreground md:text-[0.9rem]">
              {data.label}
            </p>
          </div>
          <div className="md:col-span-9 lg:col-span-8 lg:col-start-4">
            <h2
              id="philosophy-heading"
              className="text-balance text-[1.75rem] font-semibold leading-[1.65] sm:text-3xl lg:text-4xl lg:leading-[1.6]"
            >
              {data.title}
            </h2>
            <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-muted-foreground lg:mt-10 lg:text-lg lg:leading-9">
              {data.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
