import type { Metadata } from "next";

import { professorName } from "@/data/content";
import { teachingData } from "@/data/teaching";
import { TeachingHero } from "../components/teaching/teaching-hero";
import { TeachingPhilosophy } from "../components/teaching/teaching-philosophy";
import { Courses } from "../components/teaching/courses";
import { TeachingApproach } from "../components/teaching/teaching-approach";
import { AboutCta } from "../components/about/about-cta";

export const metadata: Metadata = {
  title: `تدریس | ${professorName}`,
  description: teachingData.hero.description,
};

export default function TeachingPage() {
  // Later: replace `teachingData` with data loaded from the database; components only take props.
  const data = teachingData;

  return (
    <>
      <TeachingHero data={data.hero} />
      <TeachingPhilosophy data={data.philosophy} />
      <Courses data={data.courses} />
      <TeachingApproach data={data.approach} />
      <AboutCta data={data.cta} />
    </>
  );
}
