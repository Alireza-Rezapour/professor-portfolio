import type { SnapshotData } from "@/data/about";
import { AboutSection } from "./about-section";

export function AcademicSnapshot({ data }: { data: SnapshotData }) {
  return (
    <AboutSection id="snapshot" title={data.title}>
      <dl className="grid gap-x-12 md:grid-cols-2">
        {data.items.map((item) => (
          <div key={item.id} className="border-t border-border py-5">
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="mt-1 text-lg">
              {item.href ? (
                <a
                  href={item.href}
                  dir="ltr"
                  className="inline-block rounded-sm outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </AboutSection>
  );
}
