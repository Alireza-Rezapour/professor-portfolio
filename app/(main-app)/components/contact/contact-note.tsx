import { ContactNoteData } from "@/data/contact";
import { Reveal } from "../about/reveal";
import { professorEmail } from "@/data/content";

/** A smaller, quieter closing note (deliberately unlike the Home CTA band). */
export function ContactNote({ data }: { data: ContactNoteData }) {
  return (
    <section
      id="contact-note"
      aria-labelledby="contact-note-heading"
      className="pb-24 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="border-t border-border pt-12 md:pt-16">
          <h2
            id="contact-note-heading"
            className="max-w-2xl text-balance text-2xl font-semibold leading-[1.6] sm:text-3xl"
          >
            {data.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            {data.description}
          </p>
          <a
            href={`mailto:${professorEmail}`}
            dir="ltr"
            className="mt-6 inline-block rounded-sm border-b border-border pb-1 text-[17px] outline-none transition-colors [overflow-wrap:anywhere] hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            {professorEmail}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
