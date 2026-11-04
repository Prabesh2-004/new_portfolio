import aboutData from "@/data/about.json";
import contactData from "@/data/contact.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import navigationData from "@/data/navigation.json";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import siteData from "@/data/site.json";
import skillsData from "@/data/skills.json";
import socialsData from "@/data/socials.json";
import type {
  About,
  Contact,
  Education,
  Experience,
  Navigation,
  Profile,
  Project,
  ProjectLinks,
  Projects,
  SectionId,
  Site,
  Skills,
  SocialLink,
} from "@/types/content";

// Every piece of portfolio content comes from src/data/*.json.
// The casts give the JSON its shape; components never hardcode content.
export const profile = profileData as Profile;
export const about = aboutData as About;
export const skills = skillsData as Skills;
export const experience = experienceData as Experience;
export const projects = projectsData as Projects;
export const education = educationData as Education;
export const socials = socialsData.items as SocialLink[];
export const contact = contactData as Contact;
export const navigation = navigationData as Navigation;
export const site = siteData as Site;

/** A section with no content is hidden, along with its nav link. */
export function isSectionVisible(id: SectionId): boolean {
  switch (id) {
    case "about":
      return about.paragraphs.length > 0 || Boolean(about.focus) || (about.areas?.length ?? 0) > 0;
    case "experience":
      return experience.items.length > 0;
    case "work":
      return projects.items.length > 0;
    case "skills":
      return skills.groups.some((g) => g.items.length > 0);
    case "education":
      return education.items.length > 0;
    case "contact":
      return Boolean(contact.email) || (contact.channels?.length ?? 0) > 0;
  }
}

export const visibleSections = navigation.sections.filter((s) => isSectionVisible(s.id));

/** "01", "02"… in page order, counting only visible sections. */
export function sectionNumber(id: SectionId): string {
  const index = visibleSections.findIndex((s) => s.id === id);
  return String(index + 1).padStart(2, "0");
}

export function sectionLabel(id: SectionId): string {
  return navigation.sections.find((s) => s.id === id)?.label ?? id;
}

export const currentJob = experience.items.find((item) => !item.end);

export const primaryEducation = education.items[0];

export function socialsFor(place: "hero" | "contact" | "footer"): SocialLink[] {
  return socials.filter((s) => s.showIn?.includes(place));
}

const LINK_LABELS: Record<keyof ProjectLinks, string> = {
  store: "Google Play",
  live: "Live demo",
  source: "Source code",
};

export function projectLinks(project: Project) {
  const links = project.links ?? {};
  return (Object.keys(LINK_LABELS) as Array<keyof ProjectLinks>)
    .filter((key) => Boolean(links[key]?.trim()))
    .map((key) => ({ key, label: LINK_LABELS[key], href: links[key] as string }));
}

export const siteHost = new URL(site.url).hostname.replace(/^www\./, "");
