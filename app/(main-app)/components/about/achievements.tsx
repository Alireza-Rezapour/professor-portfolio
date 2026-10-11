import type { AchievementsData } from "@/data/about";
import { AboutSection } from "./about-section";

export function Achievements({ data }: { data: AchievementsData }) {
  return (
    <AboutSection id="achievements" title={data.title}>
      <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {data.stats.map((stat) => (
          <div key={stat.id} className="border-t border-border pt-5">
            <dd
              dir="ltr"
              className="text-start text-4xl font-semibold tabular-nums lg:text-5xl"
            >
              {stat.value}
            </dd>
            <dt className="mt-2 text-sm text-muted-foreground">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <h3 className="mb-6 mt-16 text-sm font-medium text-muted-foreground">
        {data.highlightsTitle}
      </h3>
      <ul className="grid gap-x-12 md:grid-cols-2">
        {data.highlights.map((item) => (
          <li key={item.id} className="border-t border-border py-5">
            <p className="font-semibold">{item.title}</p>
            <p className="mt-1 text-[15px] leading-7 text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </AboutSection>
  );
}
