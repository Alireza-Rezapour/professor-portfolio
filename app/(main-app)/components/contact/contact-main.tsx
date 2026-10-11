import { ContactPageData } from "@/data/contact";
import { AcademicProfiles } from "./academic-profiles";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { Reveal } from "../about/reveal";

/**
 * Two-column contact area: information and profiles (right in RTL), form (left).
 * On mobile the order is information, profiles, form.
 */
export function ContactMain({ data }: { data: ContactPageData }) {
  return (
    <div className="pb-20 md:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 border-t border-border pt-14 md:pt-20 lg:grid-cols-12 lg:gap-x-16 lg:pt-24">
          <div className="space-y-14 lg:col-span-5">
            <Reveal>
              <ContactInfo data={data.info} />
            </Reveal>
            <Reveal delay={0.08}>
              <AcademicProfiles data={data.profiles} />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
