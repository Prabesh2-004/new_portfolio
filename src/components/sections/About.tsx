import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { about, primaryEducation, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

const tile = "lift rounded-tile border border-line bg-surface";

export default function About() {
  const facts = [
    { label: "Based in", value: profile.location.full },
    primaryEducation
      ? {
          label: "Studying",
          value: `${primaryEducation.title}, ${primaryEducation.shortInstitution ?? primaryEducation.institution}`,
        }
      : null,
    profile.languages.length ? { label: "Speaks", value: profile.languages.join(", ") } : null,
  ].filter((f): f is { label: string; value: string } => f !== null);

  const { focus, areas = [] } = about;

  return (
    <section id="about" aria-labelledby="about-title">
      <Container className="flex flex-col gap-14 py-24 sm:py-32">
        <SectionHeading id="about" title={about.title} titleId="about-title">
          {about.paragraphs.map((p) => (
            <p key={p} className="max-w-[680px] text-base leading-[1.7] text-muted-foreground sm:text-lg">
              {p}
            </p>
          ))}
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {focus ? (
            <Reveal as="article" className={cn(tile, "flex flex-col gap-6 p-6 sm:p-8 md:col-span-2")}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  {focus.label ? <p className="font-mono text-xs text-accent">{focus.label}</p> : null}
                  <h3 className="text-[22px] font-semibold tracking-[-0.02em] sm:text-[26px]">{focus.title}</h3>
                  <p className="max-w-[440px] text-[15px] leading-relaxed text-muted-foreground">{focus.description}</p>
                </div>
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#262626] text-accent">
                  <Icon name="server" size={20} />
                </span>
              </div>
              {focus.endpoints?.length ? (
                <ul className="overflow-hidden rounded-xl border border-line bg-[#0b0b0b] font-mono text-[12px] sm:text-[13px]">
                  {focus.endpoints.map((e, i) => (
                    <li
                      key={`${e.method} ${e.path}`}
                      className="grid grid-cols-[56px_minmax(0,1fr)_auto] gap-3 border-b border-line-soft px-4 py-3 last:border-b-0 sm:grid-cols-[64px_minmax(0,1fr)_auto]"
                    >
                      <span className={i === 0 ? "text-accent" : "text-muted-foreground"}>{e.method}</span>
                      <span className="truncate">{e.path}</span>
                      <span className="text-subtle">{e.note}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <TagList items={focus.tech} />
            </Reveal>
          ) : null}

          {areas.map((area, i) => (
            <Reveal
              key={area.id}
              as="article"
              delay={(i + 1) * 80}
              className={cn(
                tile,
                "flex flex-col gap-2.5 overflow-hidden p-6 sm:p-8",
                area.image && "pb-0 sm:pb-0 md:row-span-2",
              )}
            >
              {area.label ? <p className="font-mono text-xs text-subtle">{area.label}</p> : null}
              <h3 className="text-[22px] font-semibold tracking-[-0.01em]">{area.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{area.description}</p>
              {area.image ? (
                <div className="mt-auto flex justify-center pt-6">
                  <div className="relative h-[300px] w-[200px] overflow-hidden rounded-t-[28px] border-[6px] border-b-0 border-[#1e1e1e]">
                    <Image
                      src={area.image.src}
                      alt={area.image.alt}
                      fill
                      sizes="200px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ) : null}
            </Reveal>
          ))}

          {facts.length ? (
            <Reveal as="article" delay={(areas.length + 1) * 80} className={cn(tile, "px-6 py-4 sm:px-8 sm:py-6")}>
              <dl className="flex flex-col">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex justify-between gap-3 border-b border-line-soft py-2.5 text-sm last:border-b-0"
                  >
                    <dt className="text-subtle">{f.label}</dt>
                    <dd className="text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
