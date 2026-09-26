import type { CategoryCard } from "@/lib/types/category-card";

const mockCategoryCards = [
  {
    id: "projektmanagement",
    categoryKey: "projektmanagement",
    imageUrl: "https://picsum.photos/seed/skillflash-projectmanagement/608/408",
    excerpt:
      "Als Projektmanagement wird das Initiieren, Planen, Steuern und Abschliessen von Projekten bezeichnet.",
    skillTags: ["Klassisch", "Agil"],
    resultCount: 24,
    href: "/search?skill=projektmanagement",
  },
  {
    id: "frontend-development",
    categoryKey: "frontendDevelopment",
    imageUrl: "https://picsum.photos/seed/skillflash-frontend/608/408",
    excerpt:
      "Frontend Development verbindet Gestaltung, technische Umsetzung und eine klare Nutzererfahrung.",
    skillTags: ["Javascript", "Bootstrap"],
    resultCount: 24,
    href: "/search?skill=frontend-development",
  },
  {
    id: "graphic-design",
    categoryKey: "graphicDesign",
    imageUrl: "https://picsum.photos/seed/skillflash-graphic-design/608/408",
    excerpt:
      "Grafikdesign oder Kommunikationsdesign verbindet visuelle Sprache, Gestaltung und Information.",
    skillTags: ["Photoshop", "Subskill"],
    resultCount: 24,
    href: "/search?skill=graphic-design",
  },
  {
    id: "training",
    categoryKey: "training",
    imageUrl: "https://picsum.photos/seed/skillflash-training/608/408",
    excerpt:
      "Training ist die planmässige und systematische Entwicklung von Wissen und Fähigkeiten.",
    skillTags: ["Personal", "Keynote"],
    resultCount: 24,
    href: "/search?skill=training",
  },
  {
    id: "foreign-language",
    categoryKey: "foreignLanguage",
    imageUrl: "https://picsum.photos/seed/skillflash-languages/608/408",
    excerpt:
      "Eine Fremdsprache erweitert den Austausch über die eigene Muttersprache hinaus.",
    skillTags: ["English", "Spanish"],
    resultCount: 24,
    href: "/search?skill=foreign-language",
  },
  {
    id: "drawing",
    categoryKey: "drawing",
    imageUrl: "https://picsum.photos/seed/skillflash-drawing/608/408",
    excerpt:
      "Zeichnen macht Gedanken sichtbar und hilft, Ideen schnell und verständlich zu vermitteln.",
    skillTags: ["Flipchart", "Cartoon"],
    resultCount: 24,
    href: "/search?skill=drawing",
  },
  {
    id: "leadership",
    categoryKey: "leadership",
    imageUrl: "https://picsum.photos/seed/skillflash-leadership/608/408",
    excerpt:
      "Führung bedeutet, Menschen Orientierung zu geben und gemeinsames Handeln zu ermöglichen.",
    skillTags: ["Leadership", "Coaching"],
    resultCount: 24,
    href: "/search?skill=leadership",
  },
  {
    id: "design-thinking",
    categoryKey: "designThinking",
    imageUrl: "https://picsum.photos/seed/skillflash-design-thinking/608/408",
    excerpt:
      "Design Thinking ist ein nutzerzentrierter Ansatz, um Probleme zu verstehen und Lösungen zu testen.",
    skillTags: ["Prototype", "Research"],
    resultCount: 24,
    href: "/search?skill=design-thinking",
  },
] satisfies readonly CategoryCard[];

export async function getCategoryCards(): Promise<readonly CategoryCard[]> {
  return mockCategoryCards;
}
