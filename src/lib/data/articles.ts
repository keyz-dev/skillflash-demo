import type { Article } from "@/lib/types";

export const articles: Article[] = [
  {
    id: "roadmap-ohne-theater",
    authorId: "lena-hoffmann",
    title: "Roadmaps ohne Theater",
    excerpt:
      "Wie du Prioritäten sichtbar machst, ohne dass das Board zur politischen Bühne wird.",
    skills: ["projektmanagement"],
  },
  {
    id: "retros-die-etwas-bewegen",
    authorId: "jonas-weber",
    title: "Retros, die etwas bewegen",
    excerpt:
      "Facilitation-Muster für Teams, die aus Wiederholungen echte Veränderungen ziehen wollen.",
    skills: ["agile-coaching"],
  },
  {
    id: "problemraum-erst-spaeter-loesen",
    authorId: "mira-khalil",
    title: "Erst den Problemraum, dann die Lösung",
    excerpt:
      "Warum frühe Prototypen oft die falsche Frage beantworten — und wie Interviews das ändern.",
    skills: ["design-thinking"],
  },
  {
    id: "interface-als-vertrag",
    authorId: "tobias-brandt",
    title: "Das Interface als Vertrag",
    excerpt:
      "UX-Entscheidungen, die Engineering und Produkt denselben Rahmen geben.",
    skills: ["ux-ui-design"],
  },
];
