import { ArrowUpLeft } from "lucide-react";

import { ResearchSection } from "./research-section";
import { Publication, ResearchPageData } from "@/data/research";
import { Reveal } from "../about/reveal";
import { professorName } from "@/data/content";

function publicationLinks(pub: Publication) {
  return [
    pub.articleUrl && { label: "مشاهده مقاله", href: pub.articleUrl },
    pub.doi && { label: "DOI", href: pub.doi },
    pub.pdfUrl && { label: "دانلود PDF", href: pub.pdfUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link));
}

export function Publications({
  data,
}: {
  data: ResearchPageData["publications"];
}) {
  // Newest first, regardless of the order in the data
  const items = [...data.items].sort((a, b) => b.year - a.year);

  return (
    <ResearchSection
      id="publications"
      label={data.label}
      title={data.title}
      description={data.description}
      layout="stacked"
    >
      <ol className="border-b border-border">
        {items.map((pub) => {
          const links = publicationLinks(pub);
          return (
            <li key={pub.id} className="border-t border-border">
              <Reveal>
                <article className="grid gap-y-4 py-9 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-x-6 md:py-11 lg:grid-cols-[7rem_minmax(0,1fr)_11rem] lg:gap-x-10">
                  {/* Year is the visual anchor */}
                  <p className="text-2xl font-semibold text-primary md:pt-0.5">
                    {pub.year}
                  </p>

                  <div>
                    {/* English titles stay left-to-right but keep the page's right alignment */}
                    <h3
                      dir="ltr"
                      className="text-right text-xl font-semibold leading-snug sm:text-[1.375rem] lg:text-2xl lg:leading-[1.45]"
                    >
                      {pub.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                      {pub.authors.map((author, i) => (
                        <span key={`${author}-${i}`}>
                          {i > 0 && " · "}
                          <span
                            className={
                              professorName.includes(author)
                                ? "font-medium text-foreground"
                                : undefined
                            }
                          >
                            {author}
                          </span>
                        </span>
                      ))}
                    </p>
                    <p
                      dir="ltr"
                      className="mt-1 text-right text-[15px] text-muted-foreground"
                    >
                      {pub.journal}
                    </p>
                  </div>

                  {links.length > 0 && (
                    <ul className="flex flex-wrap gap-x-6 gap-y-1 md:col-start-2 lg:col-start-3 lg:row-start-1 lg:flex-col lg:items-start lg:gap-y-2">
                      {links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            {...(link.href !== "#"
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="inline-flex min-h-9 items-center gap-1.5 rounded-sm border-b border-border text-[15px] outline-none transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            {link.label}
                            <ArrowUpLeft
                              aria-hidden
                              className="size-3.5 text-muted-foreground"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </ResearchSection>
  );
}
