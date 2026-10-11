import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";

import type { AboutProfile } from "@/data/about";
import { Reveal } from "./reveal";

export function AboutHero({ profile }: { profile: AboutProfile }) {
  const { eyebrow, name, position, university, statement, image, links } =
    profile;

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 md:gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-12 lg:px-12">
        <div className="lg:col-span-8">
          <Reveal immediate>
            <p className="text-sm text-muted-foreground">{eyebrow}</p>
            <h1
              id="about-hero-heading"
              className="mt-4 text-4xl font-semibold leading-[1.35] sm:text-5xl lg:text-6xl xl:text-[4rem]"
            >
              {name}
            </h1>
            <p className="mt-5 text-xl font-medium text-primary">{position}</p>
            <p className="mt-1 text-lg text-muted-foreground">{university}</p>
            <p className="mt-8 max-w-xl text-lg leading-9 text-muted-foreground sm:text-xl sm:leading-10">
              {statement}
            </p>
          </Reveal>

          <Reveal immediate delay={0.12}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-1 border-t border-border pt-5">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    {...(link.external && link.href !== "#"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-[15px] text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.label}
                    {link.external && (
                      <ArrowUpLeft
                        aria-hidden
                        className="size-3.5 text-muted-foreground"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="order-first w-40 sm:w-52 lg:order-none lg:col-span-4 lg:w-full lg:max-w-[22rem] lg:justify-self-end">
          <Reveal variant="scale" immediate delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 352px, (min-width: 640px) 208px, 160px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
