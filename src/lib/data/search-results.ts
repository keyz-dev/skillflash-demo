import type { ResultItem } from "@/lib/types";
import { articles } from "./articles";
import { events } from "./events";
import { media } from "./media";

export const searchResults: ResultItem[] = [
  {
    type: "expert",
    data: {
      id: "lena-hoffmann",
      slug: "lena-hoffmann",
      name: "Lena Hoffmann",
      handle: "lena.hoffmann",
      bio: "Begleitet Organisationen dabei, komplexe Vorhaben klar zu strukturieren und Teams in unsicheren Phasen handlungsfähig zu halten.",
      location: "Berlin",
      skills: ["risikomanagement", "scrum"],
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/lena-hoffmann",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/lena.hoffmann",
        },
      ],
      yearsExperience: 12,
      avatarUrl: "https://picsum.photos/seed/lena-hoffmann/400/400",
    },
  },
  {
    type: "expert",
    data: {
      id: "jonas-weber",
      slug: "jonas-weber",
      name: "Jonas Weber",
      handle: "jonasweber",
      bio: "Agile Coach mit Fokus auf Produktteams, die Delivery und Lernschleifen besser zusammenbringen wollen.",
      location: "München",
      skills: ["scrum", "user-interviews"],
      socials: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/jonas-weber",
        },
        {
          platform: "youtube",
          url: "https://www.youtube.com/@jonasweber",
        },
        {
          platform: "github",
          url: "https://github.com/jonasweber",
        },
      ],
      yearsExperience: 9,
      avatarUrl: "https://picsum.photos/seed/jonas-weber/400/400",
    },
  },
  {
    type: "expert",
    data: {
      id: "mira-khalil",
      slug: "mira-khalil",
      name: "Mira Khalil",
      handle: "mira.khalil",
      bio: "Facilitatorin für Design Thinking und nutzerzentrierte Produktentwicklung in interdisziplinären Teams.",
      location: "Hamburg",
      skills: ["design-tokens", "team-facilitation"],
      socials: [
        {
          platform: "instagram",
          url: "https://www.instagram.com/mira.khalil",
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/mira-khalil",
        },
      ],
      yearsExperience: 8,
      avatarUrl: "https://picsum.photos/seed/mira-khalil/400/400",
    },
  },
  ...events.slice(0, 3).map((event) => ({
    type: "event" as const,
    data: event,
  })),
  ...articles.slice(0, 3).map((article) => ({
    type: "article" as const,
    data: article,
  })),
  ...media.slice(0, 3).map((item) => ({
    type: "media" as const,
    data: item,
  })),
  {
    type: "team",
    data: {
      id: "nordlicht-delivery",
      name: "Nordlicht Delivery",
      memberAvatarUrls: [
        "https://picsum.photos/seed/team-nordlicht-1/400/400",
        "https://picsum.photos/seed/team-nordlicht-2/400/400",
        "https://picsum.photos/seed/team-nordlicht-3/400/400",
      ],
      skills: ["risikomanagement"],
    },
  },
  {
    type: "team",
    data: {
      id: "flow-collective",
      name: "Flow Collective",
      memberAvatarUrls: [
        "https://picsum.photos/seed/team-flow-1/400/400",
        "https://picsum.photos/seed/team-flow-2/400/400",
      ],
      skills: ["team-facilitation"],
    },
  },
  {
    type: "team",
    data: {
      id: "atelier-impuls",
      name: "Atelier Impuls",
      memberAvatarUrls: [
        "https://picsum.photos/seed/team-impuls-1/400/400",
        "https://picsum.photos/seed/team-impuls-2/400/400",
        "https://picsum.photos/seed/team-impuls-3/400/400",
        "https://picsum.photos/seed/team-impuls-4/400/400",
      ],
      skills: ["design-tokens"],
    },
  },
];
