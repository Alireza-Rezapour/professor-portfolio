import { courseMeta, type Course } from "@/data/teaching";
import { CourseBackLink } from "./course-back-link";
import { Reveal } from "../about/reveal";

/** Minimal course header: eyebrow, title, English title, summary, subtle metadata. */
export function CourseHero({
  course,
  summary,
}: {
  course: Course;
  summary: string;
}) {
  return (
    <section
      aria-labelledby="course-hero-heading"
      className="pb-14 pt-24 md:pb-16 md:pt-32 lg:pb-20 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal immediate>
          <CourseBackLink className="-ms-0 mb-6 md:mb-8" />
          <p className="text-sm text-muted-foreground">درس</p>
          <h1
            id="course-hero-heading"
            className="mt-4 max-w-4xl text-balance text-[2.125rem] font-semibold leading-[1.5] sm:text-5xl lg:text-6xl lg:leading-[1.45]"
          >
            {course.title}
          </h1>
          <p
            dir="ltr"
            className="mt-3 text-right text-lg font-medium text-muted-foreground sm:text-xl lg:text-2xl"
          >
            {course.titleEn}
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
            {summary}
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            {courseMeta(course)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
