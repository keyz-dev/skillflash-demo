export type CategoryCardKey =
  | "projektmanagement"
  | "frontendDevelopment"
  | "graphicDesign"
  | "training"
  | "foreignLanguage"
  | "drawing"
  | "leadership"
  | "designThinking";

export interface CategoryCard {
  id: string;
  categoryKey: CategoryCardKey;
  imageUrl: string;
  excerpt: string;
  skillTags: string[];
  resultCount: number;
  href: string;
}
