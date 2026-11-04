import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SideHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line-soft">
      <Container className="grid gap-10 py-24 sm:py-32 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
        <SideHeading id="experience" title={experience.title} titleId="experience-title" />
        <ol className="flex flex-col gap-6">
          {experience.items.map((job, i) => {
            const current = !job.end;
            return (
              <Reveal
                as="li"
                key={`${job.company}-${job.role}`}
                delay={i * 80}
                className="grid grid-cols-[20px_minmax(0,1fr)] gap-4 sm:grid-cols-[28px_minmax(0,1fr)] sm:gap-5"
              >
                <div className="flex flex-col items-center pt-8" aria-hidden="true">
                  <span
                    className={
                      current ? "animate-pulse-dot size-3 rounded-full bg-accent" : "size-3 rounded-full bg-line-strong"
                    }
                  />
                  <span className="mt-2 w-px grow bg-gradient-to-b from-line-strong to-transparent" />
                </div>
                <article className="lift flex flex-col gap-3 rounded-card border border-line bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-[-0.01em] sm:text-[22px]">{job.role}</h3>
                    <p className="font-mono text-[13px] text-muted-foreground">
                      {job.start} — {current ? <span className="text-accent">Present</span> : job.end}
                    </p>
                  </div>
                  <p className="text-base text-body">{job.company}</p>
                  {job.description ? (
                    <p className="max-w-[620px] text-[15px] leading-relaxed text-muted-foreground">{job.description}</p>
                  ) : null}
                  <TagList items={job.tech} className="mt-1" />
                </article>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
