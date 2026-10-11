import type { CareerData } from "@/data/about";
import { AboutSection } from "./about-section";

export function AcademicExperience({ data }: { data: CareerData }) {
  return (
    <AboutSection id="academic-experience" title={data.title}>
      <ul className="border-b border-border">
        {data.items.map((item) => (
          <li
            key={item.id}
            className="grid gap-2 border-t border-border py-7 md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-x-6"
          >
            <p className="text-sm font-medium text-muted-foreground md:pt-1.5">
              {item.period}
            </p>
            <div>
              <h3 className="text-lg font-semibold leading-8">{item.title}</h3>
              <p className="text-muted-foreground">{item.organization}</p>
            </div>
            {item.description && (
              <p className="text-[15px] leading-8 text-muted-foreground md:pt-0.5">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </AboutSection>
  );
}
