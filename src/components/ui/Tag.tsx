import { cn } from "@/lib/utils";

type Variant = "tech" | "skill" | "learning" | "status";

const VARIANTS: Record<Variant, string> = {
  tech: "rounded-full border border-[#262626] px-[11px] py-[5px] font-mono text-xs text-body",
  skill: "rounded-lg border border-[#242424] bg-[#191919] px-[11px] py-1.5 text-sm text-[#e4e4e7]",
  learning: "rounded-lg border border-dashed border-[#3a3a3f] px-[11px] py-1.5 text-sm text-muted-foreground",
  status:
    "inline-flex items-center gap-2 rounded-full bg-accent/12 px-[11px] py-[5px] font-mono text-xs text-accent",
};

export function Tag({
  variant = "tech",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return <li className={cn(VARIANTS[variant], className)}>{children}</li>;
}

/** A wrapping list of tags. Renders nothing for an empty list. */
export function TagList({
  items,
  variant = "tech",
  className,
}: {
  items?: string[];
  variant?: Variant;
  className?: string;
}) {
  if (!items?.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <Tag key={item} variant={variant}>
          {item}
        </Tag>
      ))}
    </ul>
  );
}
