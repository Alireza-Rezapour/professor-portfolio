import { toFa } from "@/lib/format";
import { AboutSection } from "../about/about-section";
import { ContactPageData } from "@/data/contact";

export function CollaborationTopics({
  data,
}: {
  data: ContactPageData["topics"];
}) {
  return (
    <AboutSection id="collaboration-topics" title={data.title}>
      <ol className="border-b border-border">
        {data.items.map((topic, i) => (
          <li
            key={topic.id}
            className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 border-t border-border py-6 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-x-6 md:py-7"
          >
            <span
              aria-hidden
              className="pt-0.5 text-sm text-muted-foreground/60 md:pt-1.5"
            >
              {toFa(i + 1, 2)}
            </span>
            <h3 className="text-lg font-semibold leading-8 md:text-xl">
              {topic.title}
            </h3>
            <p className="col-start-2 text-[15px] leading-8 text-muted-foreground md:col-start-3 md:pt-0.5">
              {topic.description}
            </p>
          </li>
        ))}
      </ol>
    </AboutSection>
  );
}
