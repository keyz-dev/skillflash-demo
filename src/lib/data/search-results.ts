import type { ResultItem } from "@/lib/types";

export const searchResults: ResultItem[] = [
  {
    type: "expert",
    data: {
      id: "lena-hoffmann",
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
  {
    type: "event",
    data: {
      id: 1,
      authorId: "lena-hoffmann",
      name: "Speaking about Transformation",
      startDate: "2026-10-14",
      endDate: "2026-10-14",
      startTime: "09:00",
      endTime: "17:00",
      location: {
        type: "offline",
        address: "Impact Hub Berlin, Rollbergstraße 28a, 12053 Berlin",
      },
      mainSkillIds: ["terminplanung"],
      description:
        "Ein Praxistag zu Steuerung, Stakeholder-Klarheit und Entscheidungen in Transformationsprogrammen.",
      ticketPrice: 189,
      minGuests: 12,
      maxGuests: 40,
      previewImage: "https://picsum.photos/seed/event-transformation/400/400",
    },
  },
  {
    type: "event",
    data: {
      id: 2,
      authorId: "jonas-weber",
      name: "Agile Coaching Lab",
      startDate: "2026-11-05",
      endDate: "2026-11-06",
      startTime: "10:00",
      endTime: "16:00",
      location: {
        type: "online",
        link: "https://meet.skillflash.de/agile-coaching-lab",
      },
      mainSkillIds: ["scrum"],
      description:
        "Zwei halbe Tage mit Live-Coaching, Fallarbeit und Ritualen für Product Owner und Scrum Master.",
      ticketPrice: 149,
      minGuests: 8,
      maxGuests: 30,
      previewImage: "https://picsum.photos/seed/event-agile-lab/400/400",
    },
  },
  {
    type: "event",
    data: {
      id: 3,
      authorId: "mira-khalil",
      name: "Design Thinking Intensive",
      startDate: "2026-11-21",
      endDate: "2026-11-21",
      startTime: "09:30",
      endTime: "18:00",
      location: {
        type: "offline",
        address: "Design Offices Hamburg, Domstraße 10, 20095 Hamburg",
      },
      mainSkillIds: ["user-interviews"],
      description:
        "Vom Problemraum zum getesteten Prototyp — ein kompakter Workshop für gemischte Produktteams.",
      ticketPrice: 219,
      minGuests: 10,
      maxGuests: 24,
      previewImage: "https://picsum.photos/seed/event-design-thinking/400/400",
    },
  },
  {
    type: "article",
    data: {
      id: "roadmaps-ohne-theater",
      authorId: "lena-hoffmann",
      title: "Roadmaps ohne Theater",
      excerpt:
        "Wie du Prioritäten sichtbar machst, ohne dass das Board zur politischen Bühne wird.",
      skills: ["terminplanung"],
    },
  },
  {
    type: "article",
    data: {
      id: "retros-die-etwas-bewegen",
      authorId: "jonas-weber",
      title: "Retros, die etwas bewegen",
      excerpt:
        "Facilitation-Muster für Teams, die aus Wiederholungen echte Veränderungen ziehen wollen.",
      skills: ["scrum"],
    },
  },
  {
    type: "article",
    data: {
      id: "problemraum-erst-spaeter-loesen",
      authorId: "mira-khalil",
      title: "Erst den Problemraum, dann die Lösung",
      excerpt:
        "Warum frühe Prototypen oft die falsche Frage beantworten — und wie Interviews das ändern.",
      skills: ["user-interviews"],
    },
  },
  {
    type: "media",
    data: {
      id: "steuerung-im-wandel",
      authorId: "lena-hoffmann",
      title: "Steuerung im Wandel",
      description:
        "Kurzimpuls zu Meilensteinen, Risiken und dem Umgang mit unklaren Auftraggebern.",
      videoUrl: "https://picsum.photos/seed/media-steuerung/400/400",
      skills: ["risikomanagement"],
    },
  },
  {
    type: "media",
    data: {
      id: "coaching-im-sprint",
      authorId: "jonas-weber",
      title: "Coaching im Sprint",
      description:
        "Wie du als Agile Coach im Alltag intervenierst, ohne das Team zu übersteuern.",
      videoUrl: "https://picsum.photos/seed/media-coaching-sprint/400/400",
      skills: ["scrum"],
    },
  },
  {
    type: "media",
    data: {
      id: "ideation-unter-zeitdruck",
      authorId: "mira-khalil",
      title: "Ideation unter Zeitdruck",
      description:
        "Ein 20-Minuten-Format, das divergentes Denken in Workshops wirklich öffnet.",
      videoUrl: "https://picsum.photos/seed/media-ideation/400/400",
      skills: ["user-interviews"],
    },
  },
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
