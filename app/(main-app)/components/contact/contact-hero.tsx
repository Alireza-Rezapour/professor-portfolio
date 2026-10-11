import { ContactHeroData } from "@/data/contact";
import { Reveal } from "../about/reveal";

/** Minimal header: it only states the purpose of the page. */
export function ContactHero({ data }: { data: ContactHeroData }) {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="pb-16 pt-28 md:pb-20 md:pt-36 lg:pb-24 lg:pt-44"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal immediate>
          <p className="text-sm text-muted-foreground">{data.eyebrow}</p>
          <h1
            id="contact-hero-heading"
            className="mt-5 text-[2.125rem] font-semibold leading-[1.5] sm:text-5xl lg:text-6xl lg:leading-[1.45]"
          >
            {data.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
            {data.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
