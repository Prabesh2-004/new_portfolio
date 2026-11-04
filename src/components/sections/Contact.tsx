import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import CopyButton from "@/components/ui/CopyButton";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { contact, socialsFor } from "@/lib/content";

export default function Contact() {
  const cards = [
    ...(contact.channels ?? []).map((c) => ({ key: c.id, label: c.label, value: c.value, href: c.href })),
    ...socialsFor("contact").map((s) => ({ key: s.id, label: s.label, value: s.handle ?? s.label, href: s.url })),
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative border-t border-line-soft">
      <div className="glow-contact pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-7 pt-28 pb-20 text-center sm:pt-36 sm:pb-24">
        <SectionLabel id="contact" />
        <h2
          id="contact-title"
          className="text-5xl leading-none font-semibold tracking-[-0.045em] whitespace-pre-line sm:text-7xl lg:text-[88px] lg:leading-[0.98]"
        >
          {contact.title}
        </h2>
        {contact.description ? (
          <p className="max-w-[520px] text-base leading-relaxed text-muted-foreground sm:text-lg">{contact.description}</p>
        ) : null}

        {contact.email ? (
          <div className="flex w-full flex-wrap justify-center gap-2.5 pt-2">
            <ButtonLink
              href={`mailto:${contact.email}`}
              variant="accent"
              className="h-14 min-w-0 px-6 text-[15px] max-sm:w-full sm:px-[26px] sm:text-[17px]"
            >
              <span className="truncate">{contact.email}</span>
              <Icon name="arrow-up-right" size={16} />
            </ButtonLink>
            <CopyButton value={contact.email} label="Copy email address" />
          </div>
        ) : null}

        {cards.length ? (
          <ul className="grid w-full max-w-[900px] grid-cols-1 gap-3 pt-8 text-left min-[420px]:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => {
              const external = /^https?:\/\//.test(card.href);
              return (
                <Reveal as="li" key={card.key} delay={i * 60}>
                  <a
                    href={card.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="lift flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-surface px-5 py-[18px]"
                  >
                    <span className="font-mono text-xs text-subtle">{card.label}</span>
                    <span className="truncate text-[15px]">{card.value}</span>
                  </a>
                </Reveal>
              );
            })}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
