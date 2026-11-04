import { sectionLabel, sectionNumber } from "@/lib/content";
import type { SectionId } from "@/types/content";
import { cn } from "@/lib/utils";

/** "03 — Work" mono label, derived from navigation.json order. */
export function SectionLabel({ id, className }: { id: SectionId; className?: string }) {
  return (
    <p className={cn("font-mono text-[13px] text-accent", className)}>
      {sectionNumber(id)} — {sectionLabel(id)}
    </p>
  );
}

/** Stacked label + title, for the left column of a two-column section. */
export function SideHeading({ id, title, titleId }: { id: SectionId; title: string; titleId: string }) {
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel id={id} />
      <h2 id={titleId} className="text-[28px] leading-tight font-semibold tracking-[-0.02em] text-balance sm:text-[32px]">
        {title}
      </h2>
    </div>
  );
}

/** Two-column header: label on the left, title (and optional body) on the right. */
export function SectionHeading({
  id,
  title,
  titleId,
  size = "lg",
  children,
}: {
  id: SectionId;
  title: string;
  titleId: string;
  size?: "md" | "lg";
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
      <SectionLabel id={id} className="lg:pt-3" />
      <div className="flex flex-col gap-5">
        <h2
          id={titleId}
          className={cn(
            "max-w-[760px] font-semibold text-balance",
            size === "lg"
              ? "text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[44px] sm:leading-[1.08]"
              : "text-[28px] tracking-[-0.02em] sm:text-[32px]",
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
