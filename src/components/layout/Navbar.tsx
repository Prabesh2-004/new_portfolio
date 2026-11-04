"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  number: string;
}

interface NavbarProps {
  initials: string;
  shortName: string;
  fullName: string;
  items: NavItem[];
  /** Every section id to watch for the active state, in page order. */
  watchIds: string[];
  cta?: { label: string; target: string };
  resume?: { label: string; href: string };
}

export default function Navbar({ initials, shortName, fullName, items, watchIds, cta, resume }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  // Highlight the nav link for the section in the middle of the viewport.
  useEffect(() => {
    const sections = watchIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [watchIds]);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) menuButton.current?.focus();
  }, []);

  // Mobile menu: Esc closes, focus moves into the menu, and close it if the viewport grows.
  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const desktop = window.matchMedia("(min-width: 900px)");
    const onResize = () => desktop.matches && close(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[820px] items-center justify-between gap-4 rounded-full border border-[#222] bg-surface/80 pr-1.5 pl-2 backdrop-blur-md sm:pr-2 sm:pl-2.5"
      >
        <a href="#top" className="inline-flex items-center gap-2.5 rounded-full px-1.5 py-1" aria-label={`${fullName}, back to top`}>
          <span className="inline-flex size-[34px] items-center justify-center rounded-full bg-foreground font-mono text-xs font-medium text-background">
            {initials}
          </span>
          <span className="text-sm font-semibold">{shortName}</span>
        </a>

        <ul className="hidden items-center gap-0.5 text-sm min-[900px]:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "block rounded-full px-3 py-2 transition-colors",
                  active === item.id ? "bg-[#1e1e1e] text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          {cta ? (
            <a
              href={`#${cta.target}`}
              className="hidden h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-ink transition hover:brightness-110 min-[480px]:inline-flex"
            >
              {cta.label}
            </a>
          ) : null}
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-surface-raised min-[900px]:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-[820px] rounded-3xl border border-[#222] bg-surface/95 p-3 backdrop-blur-md min-[900px]:hidden"
      >
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={item.id} className="border-b border-line-soft last:border-b-0">
              <a
                ref={i === 0 ? firstLink : undefined}
                href={`#${item.id}`}
                onClick={() => close(false)}
                aria-current={active === item.id ? "location" : undefined}
                className={cn(
                  "flex items-baseline gap-3.5 px-2 py-4 text-2xl font-semibold tracking-[-0.02em]",
                  active === item.id ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <span className={cn("font-mono text-xs font-normal", active === item.id ? "text-accent" : "text-subtle")}>
                  {item.number}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {cta ? (
            <a
              href={`#${cta.target}`}
              onClick={() => close(false)}
              className="flex h-12 items-center justify-center rounded-full bg-foreground text-[15px] font-medium text-background"
            >
              {cta.label}
            </a>
          ) : null}
          {resume ? (
            <a
              href={resume.href}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface text-[15px]"
            >
              <Icon name="download" size={16} />
              {resume.label}
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
