import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import {
  contact,
  currentJob,
  education,
  navigation,
  profile,
  sectionNumber,
  site,
  skills,
  socials,
  visibleSections,
} from "@/lib/content";
import type { SectionId } from "@/types/content";

const SECTIONS: Record<SectionId, () => React.JSX.Element> = {
  about: About,
  experience: Experience,
  work: Projects,
  skills: Skills,
  education: Education,
  contact: Contact,
};

function personJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: site.url,
    email: `mailto:${contact.email}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location.full, addressCountry: "NP" },
    worksFor: currentJob ? { "@type": "Organization", name: currentJob.company } : undefined,
    alumniOf: education.items
      .filter((e) => e.kind === "Degree")
      .map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
    knowsAbout: skills.groups.filter((g) => !g.learning).flatMap((g) => g.items),
    knowsLanguage: profile.languages,
    sameAs: socials.map((s) => s.url),
  };
  // Escape "<" so content can never close the script tag.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function HomePage() {
  const navItems = visibleSections
    .filter((s) => s.inNav !== false)
    .map((s) => ({ id: s.id, label: s.label, number: sectionNumber(s.id) }));
  const cta =
    navigation.cta && visibleSections.some((s) => s.id === navigation.cta?.target) ? navigation.cta : undefined;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div id="top" className="overflow-x-clip">
        <Navbar
          initials={profile.initials}
          shortName={profile.shortName}
          fullName={profile.name}
          items={navItems}
          watchIds={visibleSections.map((s) => s.id)}
          cta={cta}
          resume={profile.resume}
        />
        <main id="main">
          <Hero />
          {visibleSections.map((s) => {
            const Section = SECTIONS[s.id];
            return <Section key={s.id} />;
          })}
        </main>
        <Footer />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd() }} />
    </>
  );
}
