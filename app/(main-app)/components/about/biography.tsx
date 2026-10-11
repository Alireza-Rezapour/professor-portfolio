import type { BiographyData } from "@/data/about";
import { AboutSection } from "./about-section";

export function Biography({ data }: { data: BiographyData }) {
  const [lead, ...rest] = data.paragraphs;

  return (
    <AboutSection id="biography" title={data.title}>
      <div className="max-w-2xl">
        <p className="text-xl font-medium leading-9 md:text-2xl md:leading-[2.75rem]">
          {lead}
        </p>
        <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground md:text-[17px] md:leading-9 lg:text-lg">
          {rest.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </AboutSection>
  );
}
