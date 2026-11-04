import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SideHeading } from "@/components/ui/SectionHeading";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-t border-line-soft">
      <Container className="grid gap-10 py-24 sm:py-32 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
        <SideHeading id="education" title={education.title} titleId="education-title" />
        <ol className="border-t border-line">
          {education.items.map((item, i) => {
            const dates = [item.start, item.end].filter(Boolean).join(" — ");
            const place = [item.institution, item.location].filter(Boolean).join(" · ");
            return (
              <Reveal
                as="li"
                key={`${item.title}-${item.institution}`}
                delay={i * 80}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-2 border-b border-line py-7"
              >
                <h3 className="text-xl font-semibold tracking-[-0.01em] sm:text-[22px]">{item.title}</h3>
                <p className="font-mono text-[13px] whitespace-nowrap text-muted-foreground">{dates}</p>
                <p className="col-span-2 text-[15px] text-muted-foreground">
                  {item.kind === "Certificate" ? `${item.kind} · ` : null}
                  {place}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
