import { professorName } from "@/data/content";
import { courseSlugs, getCourseBySlug } from "@/data/course-details";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHero } from "../../components/teaching/course-hero";
import { CourseOverview } from "../../components/teaching/course-overview";
import { CourseChapters } from "../../components/teaching/course-chapters";
import { CourseBackLink } from "../../components/teaching/course-back-link";

type CoursePageProps = { params: Promise<{ slug: string }> };

// All course pages are generated from one dynamic route; later this list comes from the database.
export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = getCourseBySlug(slug);
  if (!found) return { title: `درس پیدا نشد | ${professorName}` };

  return {
    title: `${found.course.title} | ${professorName}`,
    description: found.detail.summary,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const found = getCourseBySlug(slug);
  if (!found) notFound();

  const { course, detail } = found;

  return (
    <>
      <CourseHero course={course} summary={detail.summary} />
      <CourseOverview paragraphs={detail.overview} />
      <CourseChapters chapters={detail.chapters} />

      <div className="pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="border-t border-border pt-6">
            <CourseBackLink />
          </div>
        </div>
      </div>
    </>
  );
}
