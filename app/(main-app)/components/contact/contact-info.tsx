import { ContactPageData } from "@/data/contact";
import { cn } from "@/lib/utils";

/** Editorial definition list: label above value, hairline between rows. */
export function ContactInfo({ data }: { data: ContactPageData["info"] }) {
  return (
    <section aria-labelledby="contact-info-heading">
      <h2
        id="contact-info-heading"
        className="text-xl font-semibold leading-8 lg:text-2xl"
      >
        {data.title}
      </h2>
      <dl className="mt-6 border-b border-border">
        {data.items.map((item) => (
          <div key={item.id} className="border-t border-border py-5">
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="mt-1 text-lg">
              {item.href ? (
                <a
                  href={item.href}
                  dir={item.ltr ? "ltr" : undefined}
                  className={cn(
                    "inline-block rounded-sm outline-none transition-colors [overflow-wrap:anywhere] hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  )}
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
    </section>
  );
}
