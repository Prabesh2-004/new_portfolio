import ApiConsole from "@/components/ui/ApiConsole";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Icon, { hasIcon } from "@/components/ui/Icon";
import { currentJob, primaryEducation, profile, siteHost, skills, socialsFor, visibleSections } from "@/lib/content";

export default function Hero() {
  const socials = socialsFor("hero");
  const firstSection = visibleSections.find((s) => s.id === "work") ?? visibleSections[0];
  const statusLine = currentJob ? `${currentJob.role} at ${currentJob.company}` : profile.role;

  const consoleBody = {
    name: profile.name,
    role: profile.role,
    company: currentJob?.company,
    ...profile.stack,
    Education: primaryEducation ? `${primaryEducation.title} @ ${primaryEducation.institution}` : undefined,
    location: profile.location.short,
  };

  return (
    <section aria-labelledby="hero-title" className="relative -mt-[72px]">
      <div className="bg-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative grid items-center gap-12 pt-36 pb-16 sm:pt-44 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:pt-[200px] lg:pb-24">
        <div className="flex flex-col gap-6 sm:gap-7">
          <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#222] bg-[#0e0e0e] py-1.5 pr-3 pl-2.5 text-xs text-body sm:text-[13px]">
            <span className="animate-pulse-dot size-2 rounded-full bg-accent" aria-hidden="true" />
            {statusLine}
          </p>

          <h1
            id="hero-title"
            className="text-[44px] leading-none font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[72px]"
          >
            {profile.headline.before}
            <span className="text-accent">{profile.headline.highlight}</span>
            {profile.headline.after}
          </h1>

          <p className="max-w-[540px] text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.summary}</p>

          <div className="flex flex-wrap items-center gap-3">
            {firstSection ? (
              <ButtonLink href={`#${firstSection.id}`} variant="primary" size="lg" className="max-sm:flex-1">
                See my work
                <Icon name="arrow-right" size={16} />
              </ButtonLink>
            ) : null}
            {profile.resume ? (
              <ButtonLink href={profile.resume.href} size="lg" className="max-sm:flex-1" download>
                <Icon name="download" size={16} />
                {profile.resume.label}
              </ButtonLink>
            ) : null}
            {socials.length ? (
              <>
                <span className="mx-1 hidden h-7 w-px bg-[#222] sm:block" aria-hidden="true" />
                <ul className="flex items-center gap-1 max-sm:w-full">
                  {socials.map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                      >
                        {hasIcon(s.id) ? <Icon name={s.id} size={19} /> : s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <ApiConsole
          path={`/api/v1/developer/${profile.shortName.toLowerCase()}`}
          body={consoleBody}
          caption={siteHost}
        />
      </Container>

      {skills.highlights?.length ? (
        <div className="relative border-y border-line-soft">
          <Container>
            <ul
              aria-label="Main technologies"
              className="flex flex-wrap justify-between gap-x-6 gap-y-3 py-5 font-mono text-[13px] text-subtle"
            >
              {skills.highlights.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Container>
        </div>
      ) : null}
    </section>
  );
}
