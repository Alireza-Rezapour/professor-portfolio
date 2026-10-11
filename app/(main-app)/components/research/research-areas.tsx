import { toFa } from "@/lib/format";
import { ResearchSection, ruledRow } from "./research-section";
import { Reveal } from "../about/reveal";
import { ResearchPageData } from "@/data/research";

export function ResearchAreas({ data }: { data: ResearchPageData["areas"] }) {
  return (
    <ResearchSection
      id="research-areas"
      label={data.label}
      title={data.title}
      description={data.description}
      layout="stacked"
    >
      <ol className="border-b border-border">
        {data.items.map((area, i) => (
          <li key={area.id} className={ruledRow}>
            <Reveal delay={Math.min(i * 0.07, 0.3)}>
              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-4 py-9 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-6 md:py-11 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-x-10 lg:py-14">
                <span
                  aria-hidden
                  className="pt-1 text-sm text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary md:pt-2"
                >
                  {toFa(i + 1, 2)}
                </span>

                <h3 className="col-start-2 text-xl font-semibold leading-[1.6] transition-colors duration-300 group-hover:text-primary sm:text-[1.375rem] lg:text-[1.75rem]">
                  {area.title}
                </h3>

                <div className="col-start-2 lg:col-start-3 lg:row-start-1">
                  <p className="max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-base lg:text-[17px]">
                    {area.description}
                  </p>
                  {/* English keywords: each term stays left-to-right inside the RTL row */}
                  <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {area.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        dir="ltr"
                        className="after:ms-3 after:content-['·'] last:after:content-none"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </ResearchSection>
  );
}
