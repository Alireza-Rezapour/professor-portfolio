import type { Metadata } from "next";

import { professorName } from "@/data/content";
import { ResearchHero } from "../components/research/research-hero";
import { ResearchAreas } from "../components/research/research-areas";
import { ResearchProjects } from "../components/research/research-projects";
import { Publications } from "../components/research/publications";
import { ResearchStatistics } from "../components/research/research-statistics";
import { AboutCta } from "../components/about/about-cta";
import { researchData } from "@/data/research";

export const metadata: Metadata = {
  title: `پژوهش و مقالات | ${professorName}`,
  description: researchData.hero.description,
};

export default function ResearchPage() {
  // Later: replace `researchData` with data loaded from the database; components only take props.
  const data = researchData;

  return (
    <>
      <ResearchHero data={data.hero} />
      <ResearchAreas data={data.areas} />
      <ResearchProjects data={data.projects} />
      <Publications data={data.publications} />
      <ResearchStatistics data={data.statistics} />
      {/* Same closing block as /about (shared component) */}
      <AboutCta data={data.cta} />
    </>
  );
}
