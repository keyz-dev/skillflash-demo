import type { Skill } from "@/lib/types/skill";

export const skills: Skill[] = [
  {
    id: "projektmanagement",
    name: "Projektmanagement",
    level: "category",
    parentId: null,
  },
  {
    id: "klassisch",
    name: "Klassisch",
    level: "hauptskill",
    parentId: "projektmanagement",
  },
  {
    id: "agil",
    name: "Agil",
    level: "hauptskill",
    parentId: "projektmanagement",
  },
  {
    id: "risikomanagement",
    name: "Risikomanagement",
    level: "subskill",
    parentId: "klassisch",
  },
  {
    id: "terminplanung",
    name: "Terminplanung",
    level: "subskill",
    parentId: "klassisch",
  },
  {
    id: "scrum",
    name: "Scrum",
    level: "subskill",
    parentId: "agil",
  },
  {
    id: "kanban",
    name: "Kanban",
    level: "subskill",
    parentId: "agil",
  },

  {
    id: "ux-design",
    name: "UX & Design",
    level: "category",
    parentId: null,
  },
  {
    id: "ux-research",
    name: "UX Research",
    level: "hauptskill",
    parentId: "ux-design",
  },
  {
    id: "design-systems",
    name: "Design Systems",
    level: "hauptskill",
    parentId: "ux-design",
  },
  {
    id: "user-interviews",
    name: "User Interviews",
    level: "subskill",
    parentId: "ux-research",
  },
  {
    id: "wireframing",
    name: "Wireframing",
    level: "subskill",
    parentId: "ux-research",
  },
  {
    id: "design-tokens",
    name: "Design Tokens",
    level: "subskill",
    parentId: "design-systems",
  },
  {
    id: "ui-audit",
    name: "UI Audit",
    level: "subskill",
    parentId: "design-systems",
  },

  {
    id: "leadership",
    name: "Leadership",
    level: "category",
    parentId: null,
  },
  {
    id: "coaching",
    name: "Coaching",
    level: "hauptskill",
    parentId: "leadership",
  },
  {
    id: "kommunikation",
    name: "Kommunikation",
    level: "hauptskill",
    parentId: "leadership",
  },
  {
    id: "feedback",
    name: "Feedback",
    level: "subskill",
    parentId: "coaching",
  },
  {
    id: "team-facilitation",
    name: "Team Facilitation",
    level: "subskill",
    parentId: "coaching",
  },
  {
    id: "stakeholder-management",
    name: "Stakeholder Management",
    level: "subskill",
    parentId: "kommunikation",
  },
  {
    id: "conflict-resolution",
    name: "Conflict Resolution",
    level: "subskill",
    parentId: "kommunikation",
  },

  {
    id: "marketing",
    name: "Marketing",
    level: "category",
    parentId: null,
  },
  {
    id: "content-strategie",
    name: "Content Strategie",
    level: "hauptskill",
    parentId: "marketing",
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    level: "hauptskill",
    parentId: "marketing",
  },
  {
    id: "content-planning",
    name: "Content Planning",
    level: "subskill",
    parentId: "content-strategie",
  },
  {
    id: "storytelling",
    name: "Storytelling",
    level: "subskill",
    parentId: "content-strategie",
  },
  {
    id: "seo",
    name: "SEO",
    level: "subskill",
    parentId: "performance-marketing",
  },
  {
    id: "ads-management",
    name: "Ads Management",
    level: "subskill",
    parentId: "performance-marketing",
  },
];
