import { ResearchPageData } from "@/data/research";
import { Reveal } from "../about/reveal";

export function ResearchStatistics({
  data,
}: {
  data: ResearchPageData["statistics"];
}) {
  return (
    <section
      id="research-stats"
      aria-labelledby="research-stats-heading"
      className="scroll-mt-24 pb-20 md:pb-24 lg:scroll-mt-28 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Plain figures between two hairlines: no cards, no color */}
        <Reveal className="border-y border-border py-12 md:py-16">
          <h2
            id="research-stats-heading"
            className="text-sm font-medium text-muted-foreground md:text-[0.9rem]"
          >
            {data.title}
          </h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {data.items.map((stat) => (
              <div key={stat.id} className="flex flex-col-reverse">
                <dt className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </dt>
                {/* dir="ltr" keeps "XX+" from flipping to "+XX" in RTL */}
                <dd
                  dir="ltr"
                  className="text-start text-4xl font-semibold tabular-nums lg:text-5xl"
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
