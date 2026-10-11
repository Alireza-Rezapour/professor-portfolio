import { ArrowLeft } from "lucide-react";

import { toFa } from "@/lib/format";
import { ResearchSection } from "../research/research-section";
import { CourseChapter } from "@/data/course-details";
import { Reveal } from "../about/reveal";

/** The core of the page: one quiet row per chapter, with its lecture notes. */
export function CourseChapters({ chapters }: { chapters: CourseChapter[] }) {
  return (
    <ResearchSection
      id="chapters"
      label="سرفصل‌ها"
      title="فصل‌های درس"
      description="جزوه و مطالب آموزشی هر فصل را می‌توانید از بخش مربوط به همان فصل دریافت کنید."
      layout="stacked"
    >
      <ol className="border-b border-border">
        {chapters.map((chapter) => (
          <li key={chapter.id} className="border-t border-border">
            <Reveal>
              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-5 py-8 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-6 md:py-10 lg:grid-cols-[4rem_minmax(0,1fr)_12rem] lg:gap-x-10">
                <span
                  aria-hidden
                  className="pt-1 text-sm text-muted-foreground/60 md:pt-1.5"
                >
                  {toFa(chapter.number, 2)}
                </span>

                <div>
                  <h3 className="text-lg font-semibold leading-[1.7] sm:text-xl lg:text-[1.375rem]">
                    {chapter.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-base">
                    {chapter.description}
                  </p>
                </div>

                <div className="col-start-2 lg:col-start-3 lg:row-start-1 lg:pt-1">
                  {chapter.materialUrl ? (
                    <a
                      href={chapter.materialUrl}
                      {...(chapter.materialUrl !== "#"
                        ? { download: true }
                        : {})}
                      className="group inline-flex min-h-10 items-center gap-2 rounded-sm border-b border-border pb-1 text-[15px] font-medium outline-none transition-colors hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    >
                      دانلود جزوه
                      <span className="sr-only">: {chapter.title}</span>
                      <ArrowLeft
                        aria-hidden
                        className="size-4 transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                      />
                    </a>
                  ) : (
                    // Honest empty state instead of a dead link
                    <span className="text-sm text-muted-foreground">
                      جزوه این فصل هنوز بارگذاری نشده است.
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </ResearchSection>
  );
}
