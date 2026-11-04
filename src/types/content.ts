export type SectionId = "about" | "experience" | "work" | "skills" | "education" | "contact";

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  location: { full: string; short: string };
  languages: string[];
  headline: { before: string; highlight: string; after: string };
  summary: string;
  resume?: { label: string; href: string };
  stack: Record<string, string[]>;
}

export interface Endpoint {
  method: string;
  path: string;
  note?: string;
}

export interface FocusArea {
  id: string;
  label?: string;
  title: string;
  description: string;
  image?: ImageAsset;
}

export interface About {
  title: string;
  paragraphs: string[];
  focus?: {
    label?: string;
    title: string;
    description: string;
    endpoints?: Endpoint[];
    tech?: string[];
  };
  areas?: FocusArea[];
}

export interface SkillGroup {
  name: string;
  items: string[];
  learning?: boolean;
}

export interface Skills {
  title: string;
  highlights?: string[];
  groups: SkillGroup[];
  learningNote?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  /** null or missing = current position */
  end?: string | null;
  description?: string;
  tech?: string[];
}

export interface Experience {
  title: string;
  items: ExperienceItem[];
}

export interface ProjectLinks {
  store?: string;
  source?: string;
  live?: string;
}

export interface Project {
  slug: string;
  name: string;
  featured?: boolean;
  status?: string;
  description: string;
  tech?: string[];
  images?: ImageAsset[];
  links?: ProjectLinks;
  /** Shown instead of link buttons while no URL is set. */
  pendingLinkLabel?: string;
}

export interface Projects {
  title: string;
  items: Project[];
}

export interface EducationItem {
  kind: string;
  title: string;
  institution: string;
  shortInstitution?: string;
  location?: string;
  start?: string;
  end?: string;
}

export interface Education {
  title: string;
  items: EducationItem[];
}

export interface SocialLink {
  id: string;
  label: string;
  handle?: string;
  url: string;
  showIn?: Array<"hero" | "contact" | "footer">;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
}

export interface Contact {
  title: string;
  description?: string;
  email: string;
  channels?: ContactChannel[];
}

export interface NavSection {
  id: SectionId;
  label: string;
  inNav?: boolean;
}

export interface Navigation {
  sections: NavSection[];
  cta?: { label: string; target: SectionId };
}

export interface Site {
  url: string;
  title: string;
  description: string;
  locale: string;
  twitterHandle?: string;
  keywords?: string[];
}
