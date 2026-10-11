import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  courseHref,
  courseMeta,
  type Course,
  type TeachingPreviewData,
} from "@/data/teaching";
import { toFa } from "@/lib/format";
import { Reveal } from "@/app/(main-app)/components/about/reveal";
import { ArrowLink } from "@/app/(main-app)/components/about/arrow-link";
import { ruledRow } from "@/app/(main-app)/components/research/research-section";

interface TeachingPreviewProps {
  content: TeachingPreviewData;
  courses: Course[];
}

export function TeachingPreview({ content, courses }: TeachingPreviewProps) {
  const { eyebrow, title, description, link } = content;

  return (
    <section
      id="teaching"
      aria-labelledby="teaching-heading"
      className="pb-20 md:pb-24 lg:pb-36"
    >
      {/* Same container metrics and top hairline as the other Home sections */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-t border-border pt-14 md:gap-14 md:pt-20 lg:grid-cols-12 lg:gap-x-16 lg:pt-28">
          {/* Introduction: right in RTL, sticky on desktop (about 40%) */}
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <Reveal>
              <p className="text-sm font-medium text-muted-foreground md:text-[0.9rem]">
                {eyebrow}
              </p>
              <h2
                id="teaching-heading"
                className="mt-4 text-balance text-[1.875rem] font-semibold leading-[1.5] sm:text-4xl lg:text-[2.75rem]"
              >
                {title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9">
                {description}
              </p>
              <div className="mt-8">
                <ArrowLink href={link.href} className="text-[15px]">
                  {link.label}
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          {/* Course list: each row is one link to the future course page */}
          <ol className="border-b border-border lg:col-span-7">
            {courses.map((course, i) => (
              <li key={course.id} className={ruledRow}>
                <Reveal delay={Math.min(i * 0.07, 0.3)}>
                  <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 py-8 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-x-6 md:py-10 lg:py-12">
                    <span
                      aria-hidden
                      className="pt-1 text-sm text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary md:pt-1.5"
                    >
                      {toFa(i + 1, 2)}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold leading-[1.6] sm:text-[1.375rem] lg:text-[1.625rem]">
                        {/* Stretched link: the whole row is clickable */}
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
                      <p className="mt-4 max-w-xl text-[15px] leading-8 text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                        {course.description}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                        <span className="text-sm text-muted-foreground">
                          {courseMeta(course)}
                        </span>
                        {/* Visible affordance (not hover-only); the real link is the title */}
                        <span
                          aria-hidden
                          className="inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 group-hover:text-primary"
                        >
                          مشاهده درس
                          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
