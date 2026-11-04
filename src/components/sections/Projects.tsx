import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag, TagList } from "@/components/ui/Tag";
import { projectLinks, projects } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { ImageAsset, Project } from "@/types/content";

function PendingLink({ label }: { label: string }) {
  return (
    <span className="inline-flex h-11 items-center rounded-full border border-dashed border-[#3a3a3f] px-[18px] text-sm text-muted-foreground">
      {label}
    </span>
  );
}

/** Up to three phone screenshots; with three, the outer two fan out behind the centre one. */
function PhoneFan({ images }: { images: ImageAsset[] }) {
  const shots = images.slice(0, 3);
  const fanned = shots.length === 3;
  return (
    <div className="glow-feature relative flex min-h-[300px] items-center justify-center overflow-hidden border-t border-line py-10 sm:min-h-[460px] lg:border-t-0 lg:border-l">
      {shots.map((img, i) => {
        const centre = fanned ? i === 1 : true;
        return (
          <div
            key={img.src}
            className={cn(
              "relative shrink-0 overflow-hidden",
              centre
                ? "z-10 h-[247px] w-[122px] rounded-[20px] border-4 border-[#262626] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] sm:h-[385px] sm:w-[190px] sm:rounded-[28px] sm:border-[5px]"
                : "h-[223px] w-[110px] rounded-[18px] border-4 border-[#1e1e1e] opacity-85 sm:h-[345px] sm:w-[170px] sm:rounded-[26px] sm:border-[5px]",
              fanned && i === 0 && "translate-x-[22px] translate-y-4 -rotate-8 sm:translate-x-[30px] sm:translate-y-6",
              fanned && i === 2 && "-translate-x-[22px] translate-y-4 rotate-8 sm:-translate-x-[30px] sm:translate-y-6",
              !fanned && i > 0 && "ml-4",
            )}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 190px, 122px" className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const links = projectLinks(project);
  return (
    <Reveal
      as="article"
      className="lift grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
    >
      <div className="flex flex-col gap-[18px] p-6 sm:p-10">
        {project.status ? (
          <ul>
            <Tag variant="status">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {project.status}
            </Tag>
          </ul>
        ) : null}
        <h3 className="text-2xl leading-tight font-semibold tracking-[-0.02em] sm:text-[32px]">{project.name}</h3>
        <p className="text-[15px] leading-[1.65] text-muted-foreground sm:text-base">{project.description}</p>
        <TagList items={project.tech} />
        <div className="mt-auto flex flex-wrap gap-2.5 pt-3">
          {links.length
            ? links.map((link, i) => (
                <ButtonLink key={link.key} href={link.href} variant={i === 0 ? "primary" : "secondary"}>
                  {link.label}
                  <Icon name="arrow-up-right" size={14} />
                </ButtonLink>
              ))
            : project.pendingLinkLabel && <PendingLink label={project.pendingLinkLabel} />}
        </div>
      </div>
      {project.images?.length ? <PhoneFan images={project.images} /> : null}
    </Reveal>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [link] = projectLinks(project);
  const thumb = project.images?.[0];
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <span className="pt-1.5 font-mono text-[13px] text-subtle transition-colors group-hover:text-accent">{number}</span>
      <span className="flex min-w-0 flex-col gap-1.5">
        <span className="text-lg font-semibold tracking-[-0.01em] sm:text-[22px]">{project.name}</span>
        <span className="text-[15px] leading-normal text-muted-foreground">{project.description}</span>
        {project.tech?.length ? (
          <span className="font-mono text-xs leading-[1.7] text-subtle md:hidden">{project.tech.join(" · ")}</span>
        ) : null}
      </span>
      <span className="hidden font-mono text-xs leading-[1.7] text-subtle md:block">{project.tech?.join(" · ")}</span>
      <span className="col-start-2 flex items-center md:col-start-auto md:justify-end">
        {link ? (
          <span className="relative flex h-[76px] w-[120px] items-center justify-end">
            <Icon
              name="arrow-up-right"
              size={20}
              className={cn("text-subtle transition-opacity", thumb && "md:group-hover:opacity-0")}
            />
            {thumb ? (
              <Image
                src={thumb.src}
                alt=""
                width={120}
                height={76}
                className="absolute inset-0 hidden size-full rounded-[10px] border border-line-strong object-cover opacity-0 transition-opacity md:block md:group-hover:opacity-100"
              />
            ) : null}
          </span>
        ) : project.pendingLinkLabel ? (
          <span className="font-mono text-xs whitespace-nowrap text-subtle">{project.pendingLinkLabel}</span>
        ) : null}
      </span>
    </>
  );

  const rowClass =
    "group grid grid-cols-[40px_minmax(0,1fr)] items-start gap-x-4 gap-y-3 py-6 md:grid-cols-[56px_minmax(0,1.3fr)_minmax(0,1fr)_140px] md:items-center md:gap-6 md:rounded-[14px] md:px-5 md:-mx-5 md:transition-colors";

  return (
    <Reveal as="li" delay={index * 60} className="border-b border-line">
      {link ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} — ${link.label}`}
          className={cn(rowClass, "md:hover:bg-surface")}
        >
          {content}
        </a>
      ) : (
        <div className={rowClass}>{content}</div>
      )}
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.items.filter((p) => p.featured);
  const rest = projects.items.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-line-soft">
      <Container className="flex flex-col gap-12 py-24 sm:py-32">
        <SectionHeading id="work" title={projects.title} titleId="work-title" />
        {featured.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}
        {rest.length ? (
          <ol className="border-t border-line">
            {rest.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </ol>
        ) : null}
      </Container>
    </section>
  );
}
