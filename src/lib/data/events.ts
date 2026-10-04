import type { Event } from "@/lib/types";

export const events: Event[] = [
  {
    id: 1,
    slug: "speaking-about-transformation",
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
    mainSkillIds: ["risikomanagement"],
    shortDescription:
      "Ein Praxistag für klare Entscheidungen und wirksame Steuerung in Transformationsprogrammen.",
    description:
      "Transformationen bringen neue Prioritäten, viele Beteiligte und oft widersprüchliche Erwartungen mit sich. In diesem eintägigen Praxisworkshop lernen die Teilnehmenden, komplexe Vorhaben klarer zu steuern und auch in dynamischen Situationen handlungsfähig zu bleiben.\n\nGemeinsam betrachten wir, wie Rollen und Verantwortlichkeiten geklärt, Stakeholder sinnvoll eingebunden und Entscheidungen transparent vorbereitet werden. Anhand konkreter Fälle aus dem Arbeitsalltag erarbeiten die Teilnehmenden nächste Schritte für ihre eigenen Transformationsprojekte.\n\nDer Tag richtet sich an Projektverantwortliche, Führungskräfte und Change-Teams, die Veränderung nicht nur planen, sondern nachhaltig in die Umsetzung bringen möchten.",
    ticketPrice: 189,
    minGuests: 12,
    maxGuests: 40,
    previewImage: "https://picsum.photos/seed/event-transformation/400/400",
    detailImage: "https://picsum.photos/seed/event-transformation-detail/1200/675",
  },
  {
    id: 2,
    slug: "agile-coaching-lab",
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
    shortDescription:
      "Zwei interaktive Tage mit Live-Coaching und praktischen Methoden für agile Produktteams.",
    description:
      "Im Agile Coaching Lab arbeiten Product Owner und Scrum Master an Situationen, die sie aus ihrem Teamalltag kennen. Statt fertiger Rezepte stehen gemeinsames Ausprobieren, Beobachten und Lernen im Mittelpunkt.\n\nAn zwei halben Tagen wechseln sich kurze Impulse mit Live-Coaching, Fallarbeit und Übungen ab. Die Gruppe erkundet, wie sie hilfreiche Teamrituale gestaltet, Gespräche über Zusammenarbeit eröffnet und typische Hindernisse in der Produktentwicklung bearbeitet.\n\nDie Teilnehmenden nehmen konkrete Interventionen und einen individuellen nächsten Schritt mit zurück in ihr Team. Das Lab eignet sich sowohl für erfahrene Agile Coaches als auch für Menschen, die Coaching stärker in ihre Rolle integrieren möchten.",
    ticketPrice: 149,
    minGuests: 8,
    maxGuests: 30,
    previewImage: "https://picsum.photos/seed/event-agile-lab/400/400",
    detailImage: "https://picsum.photos/seed/event-agile-lab-detail/1200/675",
  },
  {
    id: 3,
    slug: "design-thinking-intensive",
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
    shortDescription:
      "Ein kompakter Design-Thinking-Workshop vom ersten Problemverständnis bis zum getesteten Prototyp.",
    description:
      "Gute Lösungen beginnen mit einem geteilten Verständnis des Problems. In diesem eintägigen Intensive durchlaufen gemischte Produktteams den Design-Thinking-Prozess und übersetzen Erkenntnisse aus der Nutzerperspektive in konkrete Ideen.\n\nDie Teilnehmenden üben, Annahmen sichtbar zu machen, passende Interviewfragen zu entwickeln und Beobachtungen in klare Bedürfnisse zu übersetzen. Darauf aufbauend entstehen einfache Prototypen, die direkt mit potenziellen Nutzerinnen und Nutzern getestet werden.\n\nDer Workshop verbindet kurze Methodeninputs mit viel gemeinsamer Arbeit. Am Ende stehen ein getesteter Lösungsansatz und ein nachvollziehbarer Plan für die nächsten Entwicklungsschritte.",
    ticketPrice: 219,
    minGuests: 10,
    maxGuests: 24,
    previewImage: "https://picsum.photos/seed/event-design-thinking/400/400",
    detailImage: "https://picsum.photos/seed/event-design-thinking-detail/1200/675",
  },
  {
    id: 4,
    slug: "ux-systems-day",
    authorId: "tobias-brandt",
    name: "UX Systems Day",
    startDate: "2026-12-03",
    endDate: "2026-12-03",
    startTime: "13:00",
    endTime: "18:00",
    location: {
      type: "online",
      link: "https://meet.skillflash.de/ux-systems-day",
    },
    mainSkillIds: ["design-tokens"],
    shortDescription:
      "Ein Nachmittag über Design-Systeme, klare Entscheidungen und bessere Zusammenarbeit mit Engineering.",
    description:
      "Der UX Systems Day richtet sich an Design- und Engineering-Teams, die ein gemeinsames Verständnis für ihr Design System entwickeln möchten. Im Mittelpunkt stehen nicht nur Tokens und Komponenten, sondern auch die Entscheidungen und Zusammenarbeit, die ein System im Alltag tragfähig machen.\n\nIn Impulsen und praktischen Arbeitsphasen betrachten wir, wie Verantwortlichkeiten geklärt, Beiträge aus verschiedenen Teams integriert und Änderungen verständlich dokumentiert werden. Die Teilnehmenden bringen eigene Fragestellungen ein und tauschen Erfahrungen aus unterschiedlichen Organisationskontexten aus.\n\nDer Nachmittag bietet konkrete Ansätze, um Design-System-Arbeit besser in bestehende Produktabläufe einzubetten und die Zusammenarbeit zwischen Design und Engineering nachhaltig zu stärken.",
    ticketPrice: 99,
    minGuests: 15,
    maxGuests: 80,
    previewImage: "https://picsum.photos/seed/event-ux-systems/400/400",
    detailImage: "https://picsum.photos/seed/event-ux-systems-detail/1200/675",
  },
];
