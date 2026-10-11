import type { TeachingData } from "@/data/about";
import { ArrowLink } from "./arrow-link";
import { AboutSection } from "./about-section";

export function Teaching({ data }: { data: TeachingData }) {
  return (
    <AboutSection id="teaching" title={data.title}>
      <ul className="grid gap-x-12 md:grid-cols-2">
        {data.courses.map((course) => (
          <li
            key={course.id}
            className="flex items-baseline justify-between gap-4 border-t border-border py-4 text-[17px]"
          >
            <span>{course.title}</span>
            <span className="shrink-0 text-sm text-muted-foreground">
              {course.level}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ArrowLink href={data.link.href} className="text-[15px]">
          {data.link.label}
        </ArrowLink>
      </div>
    </AboutSection>
  );
}
