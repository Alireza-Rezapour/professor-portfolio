import type { Metadata } from "next";

import { aboutData } from "@/data/about";
import { AboutHero } from "@/app/(main-app)/components/about/about-hero";
import { Biography } from "@/app/(main-app)/components/about/biography";
import { ResearchInterests } from "@/app/(main-app)/components/about/research-interests";
import { AcademicJourney } from "@/app/(main-app)/components/about/academic-journey";
import { ResearchApproach } from "@/app/(main-app)/components/about/research-approach";
import { AcademicExperience } from "@/app/(main-app)/components/about/academic-experience";
import { Teaching } from "@/app/(main-app)/components/about/teaching";
import { Achievements } from "@/app/(main-app)/components/about/achievements";
import { AcademicSnapshot } from "@/app/(main-app)/components/about/academic-snapshot";
import { AboutCta } from "@/app/(main-app)/components/about/about-cta";

export const metadata: Metadata = {
  title: `درباره من | ${aboutData.profile.name}`,
  description: `${aboutData.profile.name}، ${aboutData.profile.position} ${aboutData.profile.university}؛ ${aboutData.profile.statement}.`,
};

export default function AboutPage() {
  const data = aboutData;

  return (
    <>
      <AboutHero profile={data.profile} />
      <Biography data={data.biography} />
      <ResearchInterests data={data.researchInterests} />
      <AcademicJourney data={data.education} />
      <ResearchApproach data={data.approach} />
      <AcademicExperience data={data.experience} />
      <Teaching data={data.teaching} />
      <Achievements data={data.achievements} />
      <AcademicSnapshot data={data.snapshot} />
      <AboutCta data={data.cta} />
    </>
  );
}
