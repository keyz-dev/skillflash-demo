import type { Expert } from "@/lib/types";

export const experts: Expert[] = [
  {
    id: "lena-hoffmann",
    name: "Lena Hoffmann",
    handle: "lena.hoffmann",
    bio: "Begleitet Organisationen dabei, komplexe Vorhaben klar zu strukturieren und Teams in unsicheren Phasen handlungsfähig zu halten.",
    location: "Berlin",
    skills: ["projektmanagement", "agile-coaching"],
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/lena-hoffmann" },
      { platform: "instagram", url: "https://www.instagram.com/lena.hoffmann" },
    ],
    yearsExperience: 12,
    avatarUrl: "https://picsum.photos/seed/lena-hoffmann/400/400",
  },
  {
    id: "jonas-weber",
    name: "Jonas Weber",
    handle: "jonasweber",
    bio: "Agile Coach mit Fokus auf Produktteams, die Delivery und Lernschleifen besser zusammenbringen wollen.",
    location: "München",
    skills: ["agile-coaching", "design-thinking"],
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/jonas-weber" },
      { platform: "youtube", url: "https://www.youtube.com/@jonasweber" },
      { platform: "github", url: "https://github.com/jonasweber" },
    ],
    yearsExperience: 9,
    avatarUrl: "https://picsum.photos/seed/jonas-weber/400/400",
  },
  {
    id: "mira-khalil",
    name: "Mira Khalil",
    handle: "mira.khalil",
    bio: "Facilitatorin für Design Thinking und nutzerzentrierte Produktentwicklung in interdisziplinären Teams.",
    location: "Hamburg",
    skills: ["design-thinking", "ux-ui-design"],
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/mira.khalil" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/mira-khalil" },
    ],
    yearsExperience: 8,
    avatarUrl: "https://picsum.photos/seed/mira-khalil/400/400",
  },
  {
    id: "tobias-brandt",
    name: "Tobias Brandt",
    handle: "tobiasbrandt",
    bio: "Product Designer, der Schnittstellen zwischen Strategie, UX und Umsetzung in digitalen Plattformen gestaltet.",
    location: "Köln",
    skills: ["ux-ui-design", "projektmanagement"],
    socials: [{ platform: "github", url: "https://github.com/tobiasbrandt" }],
    yearsExperience: 11,
    avatarUrl: "https://picsum.photos/seed/tobias-brandt/400/400",
  },
];
