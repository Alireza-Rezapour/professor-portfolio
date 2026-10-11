import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Back link to the course list. In RTL, "back" points right. */
export function CourseBackLink({ className }: { className?: string }) {
  return (
    <Link
      href="/teaching"
      className={cn(
        "group inline-flex min-h-11 items-center gap-2 rounded-sm text-[15px] text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      />
      همه درس‌ها
    </Link>
  );
}
