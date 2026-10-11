import { Hero } from "./components/hero/hero";
import { HeroBackground } from "./components/hero/hero-background";
import { ShortAbout } from "./components/short-about/short-about";
import { ResearchAreas } from "./components/research-areas/research-areas";
import { contactCta, researchAreas, shortAbout } from "@/data/content";
import { ContactCta } from "./components/contact/contact-cta";
import { TeachingPreview } from "./components/teaching/teaching-preview";
import { featuredCourses, teachingPreview } from "@/data/teaching";

export default function HomePage() {
  return (
    <>
      <Hero background={<HeroBackground />} />
      <ShortAbout content={shortAbout} />
      <ResearchAreas content={researchAreas} />
      <TeachingPreview content={teachingPreview} courses={featuredCourses} />
      <ContactCta content={contactCta} />
    </>
  );
}
