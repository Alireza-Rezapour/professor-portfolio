import { ArrowLink } from "@/app/(main-app)/components/about/arrow-link";
import { Reveal } from "@/app/(main-app)/components/about/reveal";
import type { ContactCtaContent } from "@/data/content";

/** Final Home section: one heading, one sentence, one link. Quiet tonal band, no decoration. */
export function ContactCta({ content }: { content: ContactCtaContent }) {
  const { eyebrow, title, description, link } = content;

  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="border-t border-border bg-muted py-20 md:py-24 lg:py-36"
    >
      {/* Same container metrics as the other Home sections */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-sm font-medium text-muted-foreground md:text-[0.9rem]">
            {eyebrow}
          </p>
          <h2
            id="contact-cta-heading"
            className="mt-5 max-w-3xl text-balance text-[1.875rem] font-semibold leading-[1.55] sm:text-4xl lg:text-5xl lg:leading-[1.5] xl:text-[3.25rem]"
          >
            {title}
          </h2>

          {/* Description at the start, the single link at the far end (left in RTL) */}
          <div className="mt-8 flex flex-col gap-10 lg:mt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              {description}
            </p>
            <ArrowLink
              href={link.href}
              variant="primary"
              className="self-start pb-2.5 pt-2 text-lg lg:self-auto"
            >
              {link.label}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
