import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toFa } from "@/lib/format";
import { courseHref, courseMeta, TeachingPageData } from "@/data/teaching";
import { ResearchSection, ruledRow } from "../research/research-section";
import { Reveal } from "../about/reveal";

/** Complete course list: one wide editorial row per course, the whole row links to /teaching/[slug]. */
export function Courses({ data }: { data: TeachingPageData["courses"] }) {
  return (
    <ResearchSection
      id="courses"
      label={data.label}
      title={data.title}
      description={data.description}
      layout="stacked"
    >
      <ol className="border-b border-border">
        {data.items.map((course, i) => (
          <li key={course.id} className={ruledRow}>
            <Reveal delay={Math.min(i * 0.07, 0.3)}>
              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 gap-y-5 py-9 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-6 md:py-11 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_11rem] lg:gap-x-10 lg:py-14">
                <span
                  aria-hidden
                  className="pt-1 text-sm text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary md:pt-2"
                >
                  {toFa(i + 1, 2)}
                </span>

                <div className="col-start-2">
                  <h3 className="text-xl font-semibold leading-[1.6] sm:text-[1.375rem] lg:text-[1.75rem]">
                    <Link
                      href={courseHref(course)}
                      className="outline-none transition-colors duration-300 after:absolute after:inset-0 group-hover:text-primary focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-ring/60"
                    >
                      {course.title}
                    </Link>
                  </h3>
                  <p
                    dir="ltr"
                    className="mt-1 text-right text-[15px] text-muted-foreground"
                  >
                    {course.titleEn}
                  </p>
                </div>

                <p className="col-start-2 max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-base lg:col-start-3 lg:row-start-1 lg:text-[17px]">
                  {course.description}
                </p>

                <div className="col-start-2 flex flex-col gap-3 lg:col-start-4 lg:row-start-1">
                  <span className="text-sm text-muted-foreground">
                    {courseMeta(course)}
                  </span>
                  <span
                    aria-hidden
                    className="inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 group-hover:text-primary"
                  >
                    مشاهده درس
                    <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                  </span>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </ResearchSection>
  );
}
