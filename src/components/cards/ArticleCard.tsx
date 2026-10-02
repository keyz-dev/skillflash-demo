import Image from "next/image";
import type { Article } from "@/lib/types/article";
import type { Skill } from "@/lib/types/skill";
import { cn, entityAccentClasses } from "@/lib/utils";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function ArticleCard({
  article,
  skills,
}: {
  article: Article;
  skills: Skill[];
}) {
  const accent = entityAccentClasses.article;

  return (
    <Card>
      <CardFloatingActions />
      <div className="flex h-full flex-col">
        <div className="relative px-4 pt-4">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
            <Image
              src="https://picsum.photos/seed/article-author/200/200"
              alt="author"
              fill
              className="relative object-cover"
              sizes="40px"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 pt-5">
          <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-3 font-body text-p text-foreground/70">
            {article.excerpt}
          </p>

          <span className="mt-2 w-fit font-body text-p text-primary-blue underline underline-offset-2 transition-colors hover:text-primary-lila">
            Mehr anzeigen
          </span>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
          <ul className="flex min-w-0 items-center gap-2 overflow-hidden">
            {article.skills
              .slice(0, 2)
              .map((skillId) => getSkillName(skillId, skills))
              .map((tag) => (
                <li
                  key={tag}
                  className={cn(
                    "shrink-0 rounded-full border-2 bg-background px-3 py-1 font-body text-p",
                    accent.tagBorder,
                    accent.tagText,
                  )}
                >
                  {tag}
                </li>
              ))}
          </ul>
          <span className={cn("shrink-0 font-heading text-p", accent.count)}>
            24..
          </span>
        </div>
      </div>
    </Card>
  );
}
