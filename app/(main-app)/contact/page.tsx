import type { Metadata } from "next";

import { professorName } from "@/data/content";
import { contactData } from "@/data/contact";
import { ContactHero } from "../components/contact/contact-hero";
import { ContactMain } from "../components/contact/contact-main";
import { CollaborationTopics } from "../components/contact/collaboration-topics";
import { ContactNote } from "../components/contact/contact-note";

export const metadata: Metadata = {
  title: `تماس | ${professorName}`,
  description: contactData.hero.description,
};

export default function ContactPage() {
  // Later: replace `contactData` with data loaded from the database; components only take props.
  const data = contactData;

  return (
    <>
      <ContactHero data={data.hero} />
      <ContactMain data={data} />
      <CollaborationTopics data={data.topics} />
      <ContactNote data={data.note} />
    </>
  );
}
