import type { Team } from "@/lib/types";

export const teams: Team[] = [
  {
    id: "nordlicht-delivery",
    name: "Nordlicht Delivery",
    memberAvatarUrls: [
      "https://picsum.photos/seed/team-nordlicht-1/400/400",
      "https://picsum.photos/seed/team-nordlicht-2/400/400",
      "https://picsum.photos/seed/team-nordlicht-3/400/400",
    ],
    skills: ["risikomanagement"],
  },
  {
    id: "flow-collective",
    name: "Flow Collective",
    memberAvatarUrls: [
      "https://picsum.photos/seed/team-flow-1/400/400",
      "https://picsum.photos/seed/team-flow-2/400/400",
    ],
    skills: ["team-facilitation"],
  },
  {
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
  {
    id: "pixelbrücke",
    name: "Pixelbrücke",
    memberAvatarUrls: [
      "https://picsum.photos/seed/team-pixel-1/400/400",
      "https://picsum.photos/seed/team-pixel-2/400/400",
    ],
    skills: ["ui-audit"],
  },
];
