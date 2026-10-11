import { TeachingPageData } from "@/data/teaching";
import { ResearchSection } from "../research/research-section";
import { Reveal } from "../about/reveal";

/** Short principle blocks on hairlines (two columns on wider screens), not cards. */
export function TeachingApproach({
  data,
}: {
  data: TeachingPageData["approach"];
}) {
  return (
    <ResearchSection
      id="teaching-approach"
      label={data.label}
      title={data.title}
      description={data.description}
    >
      <ul className="grid gap-x-12 md:grid-cols-2">
        {data.items.map((item, i) => (
          <li key={item.id} className="border-t border-border pb-10 pt-6">
            <Reveal delay={Math.min((i % 2) * 0.07, 0.15)}>
              <h3 className="text-lg font-semibold leading-8 lg:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </ResearchSection>
  );
}
