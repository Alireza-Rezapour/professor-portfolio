import { Reveal } from "../about/reveal";

/** Ruled list row with a thin accent line that sweeps over the top rule on hover (CSS only). */
export const ruledRow =
  "group relative border-t border-border after:absolute after:inset-x-0 after:-top-px after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 hover:after:scale-x-100 motion-reduce:after:transition-none";

interface ResearchSectionProps {
  id: string;
  /** Small question-style label, e.g. "چه چیزی پژوهش می‌کنم؟" */
  label: string;
  title: string;
  description?: string;
  /** split: sticky intro beside the content. stacked: header on top, content full width. */
  layout?: "split" | "stacked";
  children: React.ReactNode;
}

export function ResearchSection({
  id,
  label,
  title,
  description,
  layout = "split",
  children,
}: ResearchSectionProps) {
  const heading = (
    <>
      <p className="text-sm font-medium text-muted-foreground md:text-[0.9rem]">
        {label}
      </p>
      <h2
        id={`${id}-heading`}
        className="mt-4 text-[1.875rem] font-semibold leading-[1.5] sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
    </>
  );

  const descriptionClass =
    "text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 pb-20 md:pb-24 lg:scroll-mt-28 lg:pb-36"
    >
      {/* Same container metrics and top hairline as Home and About */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {layout === "split" ? (
          <div className="grid gap-12 border-t border-border pt-14 md:gap-14 md:pt-20 lg:grid-cols-12 lg:gap-x-16 lg:pt-28">
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <Reveal>
                {heading}
                {description && (
                  <p className={`mt-6 max-w-xl ${descriptionClass}`}>
                    {description}
                  </p>
                )}
              </Reveal>
            </div>
            <div className="lg:col-span-8">{children}</div>
          </div>
        ) : (
          <div className="border-t border-border pt-14 md:pt-20 lg:pt-28">
            <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-16">
              <div className="lg:col-span-7">{heading}</div>
              {description && (
                <p
                  className={`max-w-xl lg:col-span-4 lg:col-start-9 ${descriptionClass}`}
                >
                  {description}
                </p>
              )}
            </Reveal>
            <div className="mt-12 md:mt-16">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
