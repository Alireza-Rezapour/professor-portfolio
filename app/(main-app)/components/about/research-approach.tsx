import type { ResearchApproachData } from "@/data/about";
import { AboutSection } from "./about-section";

export function ResearchApproach({ data }: { data: ResearchApproachData }) {
  return (
    <AboutSection id="research-approach" title={data.title} tone="muted">
      <p className="text-balance text-[1.75rem] font-semibold leading-[1.65] sm:text-3xl lg:text-4xl lg:leading-[1.6]">
        {data.statement}
      </p>
      <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9">
        {data.paragraph}
      </p>
      <ul className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
        {data.principles.map((principle) => (
          <li key={principle.title}>
            <h3 className="text-base font-semibold">{principle.title}</h3>
            <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
              {principle.description}
            </p>
          </li>
        ))}
      </ul>
    </AboutSection>
  );
}
