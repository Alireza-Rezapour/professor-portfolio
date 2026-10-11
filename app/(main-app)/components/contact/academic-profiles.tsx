import { ContactPageData } from "@/data/contact";
import { ArrowUpLeft } from "lucide-react";

export function AcademicProfiles({
  data,
}: {
  data: ContactPageData["profiles"];
}) {
  return (
    <section aria-labelledby="academic-profiles-heading">
      <h2
        id="academic-profiles-heading"
        className="text-xl font-semibold leading-8 lg:text-2xl"
      >
        {data.title}
      </h2>
      <ul className="mt-4">
        {data.items.map((profile) => (
          <li key={profile.id}>
            <a
              href={profile.href}
              {...(profile.href !== "#"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-[17px] outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span dir="ltr">{profile.name}</span>
              <ArrowUpLeft
                aria-hidden
                className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-primary motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
