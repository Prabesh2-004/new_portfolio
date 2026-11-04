import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { profile, siteHost, socialsFor } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = socialsFor("footer");

  return (
    <footer className="relative overflow-hidden border-t border-line-soft">
      <Container className="flex flex-col gap-4 pt-7 text-sm text-subtle sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name} · {siteHost}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#top"
              className="inline-flex min-h-11 items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top
              <Icon name="arrow-up" size={14} />
            </a>
          </li>
        </ul>
      </Container>
      <p
        aria-hidden="true"
        className="wordmark pt-6 text-center text-[27vw] leading-[0.85] font-bold tracking-[-0.06em] select-none lg:pt-8 lg:text-[250px]"
      >
        {profile.shortName}
      </p>
    </footer>
  );
}
