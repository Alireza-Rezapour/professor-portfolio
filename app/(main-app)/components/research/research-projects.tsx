import { toFa } from "@/lib/format";
import { ResearchSection, ruledRow } from "./research-section";
import { ResearchPageData } from "@/data/research";
import { Reveal } from "../about/reveal";
import { ArrowLink } from "../about/arrow-link";

export function ResearchProjects({
  data,
}: {
  data: ResearchPageData["projects"];
}) {
  return (
    <ResearchSection
      id="projects"
      label={data.label}
      title={data.title}
      description={data.description}
    >
      <ol className="border-b border-border">
        {data.items.map((project, i) => (
          <li key={project.id} className={ruledRow}>
            <Reveal delay={Math.min(i * 0.07, 0.3)}>
              <div className="py-9 md:py-11">
                <div className="flex items-baseline justify-between gap-4 text-sm text-muted-foreground">
                  <span
                    aria-hidden
                    className="transition-colors duration-300 group-hover:text-primary"
                  >
                    {toFa(i + 1, 2)}
                  </span>
                  <span>
                    {project.startYear} — {project.endYear ?? "اکنون"}
                  </span>
                </div>

                <h3 className="mt-5 max-w-xl text-xl font-semibold leading-[1.6] transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-base lg:text-[17px]">
                  {project.description}
                </p>

                <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-1.5 text-sm">
                  <div className="flex gap-1.5">
                    <dt className="text-muted-foreground">حوزه:</dt>
                    <dd>{project.fields.join(" · ")}</dd>
                  </div>
                  {project.role && (
                    <div className="flex gap-1.5">
                      <dt className="text-muted-foreground">نقش:</dt>
                      <dd>{project.role}</dd>
                    </div>
                  )}
                </dl>

                {/* Only shown once a project detail page exists */}
                {project.href && (
                  <div className="mt-6">
                    <ArrowLink href={project.href} className="text-[15px]">
                      مشاهده پروژه
                    </ArrowLink>
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </ResearchSection>
  );
}
