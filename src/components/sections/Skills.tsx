import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { skills } from "@/lib/content";

export default function Skills() {
  const groups = skills.groups.filter((g) => g.items.length > 0);
  const hasLearning = groups.some((g) => g.learning);

  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line-soft">
      <Container className="flex flex-col gap-12 py-24 sm:py-32">
        <SectionHeading id="skills" title={skills.title} titleId="skills-title" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal
              as="article"
              key={group.name}
              delay={(i % 3) * 80}
              className="lift flex flex-col gap-4 rounded-card border border-line bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[17px] font-semibold">{group.name}</h3>
                <span className="font-mono text-xs text-subtle">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <TagList items={group.items} variant={group.learning ? "learning" : "skill"} />
            </Reveal>
          ))}
        </div>
        {hasLearning && skills.learningNote ? (
          <p className="-mt-4 font-mono text-xs text-subtle">{skills.learningNote}</p>
        ) : null}
      </Container>
    </section>
  );
}
