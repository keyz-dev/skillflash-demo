export type CategoryCardKey =
  | "projektmanagement"
  | "uxDesign"
  | "leadership"
  | "marketing"
  | "frontendDevelopment"
  | "graphicDesign"
  | "training"
  | "foreignLanguage"
  | "drawing"
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
