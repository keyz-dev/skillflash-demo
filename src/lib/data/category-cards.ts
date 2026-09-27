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
    href: "/search?category=projektmanagement",
  },
  {
    id: "ux-design",
    categoryKey: "uxDesign",
    imageUrl: "https://picsum.photos/seed/skillflash-ux-design/608/408",
    excerpt:
      "UX & Design verbindet Forschung, visuelle Gestaltung und nutzerorientierte Entscheidungsfindung.",
    skillTags: ["UX Research", "Design Systems"],
    resultCount: 24,
    href: "/search?category=ux-design",
  },
  {
    id: "leadership",
    categoryKey: "leadership",
    imageUrl: "https://picsum.photos/seed/skillflash-leadership/608/408",
    excerpt:
      "Führung bedeutet, Menschen Orientierung zu geben und gemeinsames Handeln zu ermöglichen.",
    skillTags: ["Coaching", "Kommunikation"],
    resultCount: 24,
    href: "/search?category=leadership",
  },
  {
    id: "marketing",
    categoryKey: "marketing",
    imageUrl: "https://picsum.photos/seed/skillflash-marketing/608/408",
    excerpt:
      "Marketing verbindet Strategie, Kommunikation und wirksame Zielgruppenansprache über verschiedene Kanäle.",
    skillTags: ["Content Strategie", "Performance Marketing"],
    resultCount: 24,
    href: "/search?category=marketing",
  },
] satisfies readonly CategoryCard[];

export async function getCategoryCards(): Promise<readonly CategoryCard[]> {
  return mockCategoryCards;
}
