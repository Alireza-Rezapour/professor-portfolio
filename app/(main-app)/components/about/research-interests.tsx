import type { ResearchInterestsData } from "@/data/about";
import { toFa } from "@/lib/format";
import { AboutSection } from "./about-section";

export function ResearchInterests({ data }: { data: ResearchInterestsData }) {
  return (
    <AboutSection id="research-interests" title={data.title}>
      <ol className="border-b border-border">
        {data.items.map((item, i) => (
          <li
            key={item.title}
            className="group relative grid grid-cols-[2.25rem_1fr] gap-x-3 gap-y-2 border-t border-border py-7 after:absolute after:inset-x-0 after:-top-px after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 hover:after:scale-x-100 motion-reduce:after:transition-none md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.25fr)] md:gap-x-6 md:py-9"
          >
            <span
              aria-hidden
              className="pt-1 text-sm text-muted-foreground/60 transition-colors group-hover:text-primary md:pt-2"
            >
              {toFa(i + 1, 2)}
            </span>
            <h3 className="text-lg font-semibold leading-8 transition-colors group-hover:text-primary md:text-xl">
              {item.title}
            </h3>
            <p className="col-start-2 text-base leading-8 text-muted-foreground md:col-start-3 md:text-[17px]">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </AboutSection>
  );
}
