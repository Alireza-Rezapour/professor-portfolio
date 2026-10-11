"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, professorName } from "@/data/content";
import { cn } from "@/lib/utils";

const focusRing =
  "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding] duration-300",
        scrolled ? "pt-3" : "pt-0",
      )}
    >
      {/* Same container metrics as the hero so content aligns at the top of the page */}
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-12">
        {/* Floating surface: invisible at the top, fades in on scroll */}
        <span
          aria-hidden
          className={cn(
            "absolute -inset-x-3 inset-y-0 -z-10 rounded-2xl border transition-all duration-300",
            scrolled
              ? "border-border bg-background/80 backdrop-blur-md"
              : "border-transparent bg-transparent",
          )}
        />

        <Link
          href="/"
          className={cn("text-base font-semibold lg:text-lg", focusRing)}
        >
          {professorName}
        </Link>

        {/* Desktop */}
        <nav aria-label="ناوبری اصلی" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block px-3 py-2 text-sm transition-colors hover:text-foreground",
                      focusRing,
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="باز کردن منو"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85%] max-w-xs gap-0 p-0">
            <div className="border-b border-border px-6 py-5">
              <SheetTitle className="text-base font-semibold">
                {professorName}
              </SheetTitle>
              <SheetDescription className="sr-only">
                منوی ناوبری سایت
              </SheetDescription>
            </div>
            <nav aria-label="ناوبری موبایل" className="px-6 py-2">
              <ul>
                {navLinks.map((link) => {
                  const active = pathname.startsWith(link.href);
                  return (
                    <li
                      key={link.href}
                      className="border-b border-border last:border-0"
                    >
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block py-4 text-lg transition-colors",
                            focusRing,
                            active
                              ? "font-medium text-primary"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
