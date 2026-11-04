import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-white/85",
  secondary: "border border-line-strong bg-surface text-foreground hover:border-[#3a3a3f] hover:bg-surface-raised",
  accent: "bg-accent text-accent-ink hover:brightness-110",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-[18px] text-sm",
  lg: "h-12 px-[22px] text-[15px]",
};

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
}

/** A link styled as a pill button. External links open in a new tab. */
export default function ButtonLink({
  href,
  variant = "secondary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,filter] duration-200",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
