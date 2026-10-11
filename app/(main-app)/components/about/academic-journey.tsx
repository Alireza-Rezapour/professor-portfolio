import type { CareerData } from "@/data/about";
import { cn } from "@/lib/utils";
import { AboutSection } from "./about-section";

export function AcademicJourney({ data }: { data: CareerData }) {
  return (
    <AboutSection id="academic-journey" title={data.title}>
      <ol>
        {data.items.map((item) => (
          <li
            key={item.id}
            className="relative grid gap-1 pb-12 ps-9 before:absolute before:bottom-[-0.5rem] before:start-[0.3125rem] before:top-[1.25rem] before:w-px before:bg-border last:pb-0 last:before:hidden md:grid-cols-[9rem_minmax(0,1fr)] md:gap-x-6"
          >
            <span
              aria-hidden
              className={cn(
                "absolute start-0 top-[0.55rem] size-[0.625rem] rounded-full border border-primary",
                item.current ? "bg-primary" : "bg-background",
              )}
            />
            <p className="text-sm font-medium text-muted-foreground md:pt-1.5">
              {item.period}
            </p>
            <div>
              <h3 className="text-lg font-semibold leading-8">{item.title}</h3>
              <p className="text-muted-foreground">{item.organization}</p>
              {item.description && (
                <p className="mt-3 max-w-xl text-[15px] leading-8 text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </AboutSection>
  );
}
