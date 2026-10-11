import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "quiet";
  className?: string;
}

export function ArrowLink({
  href,
  children,
  variant = "quiet",
  className,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-sm border-b pb-1.5 font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        variant === "primary"
          ? "border-primary text-primary hover:border-foreground hover:text-foreground"
          : "border-border text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
      <ArrowLeft
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      />
    </Link>
  );
}
