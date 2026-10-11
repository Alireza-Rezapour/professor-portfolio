import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface AboutSectionProps {
  id: string;
  title: string;
  tone?: "default" | "muted";
  children: React.ReactNode;
}

export function AboutSection({
  id,
  title,
  tone = "default",
  children,
}: AboutSectionProps) {
  const muted = tone === "muted";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        muted
          ? "mb-16 bg-muted py-16 md:mb-24 md:py-24 lg:mb-28 lg:py-28"
          : "pb-16 md:pb-24 lg:pb-28",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal
          className={cn(
            "grid gap-8 md:grid-cols-12 md:gap-10 lg:gap-x-12",
            !muted && "border-t border-border pt-12 md:pt-16 lg:pt-20",
          )}
        >
          <div className="md:col-span-3 md:self-start md:sticky md:top-28">
            <h2
              id={`${id}-heading`}
              className="text-xl font-semibold leading-8 lg:text-2xl lg:leading-9"
            >
              {title}
            </h2>
          </div>
          <div className="md:col-span-9 lg:col-span-8 lg:col-start-5">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
