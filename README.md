# Portfolio — Prabesh Lamichhane

Single-page developer portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Editing content

All personal content lives in `src/data/*.json`. Components only read from these files, so you can
add, edit or remove items without touching any component code.

| File | What it controls |
| --- | --- |
| `profile.json` | Name, initials, role, location, languages, hero headline and summary, résumé link, and the stack shown in the hero's API card |
| `about.json` | About section: title, paragraphs, the "Backend APIs" tile (endpoints, tech) and the extra focus tiles |
| `experience.json` | Jobs and internships. `"end": null` marks the current job (shows "Present" and the hero status line) |
| `projects.json` | Projects. `"featured": true` gives the large card; the rest appear as a numbered list |
| `skills.json` | Skill groups (`"learning": true` = dashed outline) and the tech strip under the hero |
| `education.json` | Degrees and certificates |
| `socials.json` | Social profiles; `showIn` picks where each appears: `hero`, `contact`, `footer` |
| `contact.json` | Contact heading, email, WhatsApp and phone |
| `navigation.json` | Section order and nav labels. Section numbers (01, 02…) follow this order |
| `site.json` | SEO: site URL, title, description, keywords (also used for the link-preview image, sitemap and robots.txt) |

Rules of thumb:

- **Hidden when empty.** A section with no items (for example `"items": []` in `experience.json`) disappears along with its nav link.
- **Project links.** Fill in `links.store`, `links.live` or `links.source` in `projects.json` and the matching buttons appear. While all are empty, `pendingLinkLabel` is shown instead.
- **Project images.** Put files in `public/projects/<slug>/` and list them in the project's `images` array (`src` + `alt`). The featured card shows up to three phone screenshots.

Design tokens (colours, radii, the accent `#7dd3a8`) are in `src/app/globals.css`, separate from content.

## Other routes

- `/privacy/color-quest` — privacy policy for the Android game (linked from its Play Store listing).
- `/opengraph-image`, `/sitemap.xml`, `/robots.txt` — generated from `src/data`.
