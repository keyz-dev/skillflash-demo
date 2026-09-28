import type { Article } from "@/lib/types/article";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";
import { CardLayoutB } from "./Card/CardLayoutB";

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
  return (
    <Card>
      <CardFloatingActions />
      <CardLayoutB
        variant="article"
        imageUrl="https://picsum.photos/seed/article-skillflash/400/400"
        title={article.title}
        description={article.excerpt}
        skillTags={article.skills
          .slice(0, 2)
          .map((skillId) => getSkillName(skillId, skills))}
        authorAvatarUrl="https://picsum.photos/seed/article-author/200/200"
        showMoreLabel="Mehr anzeigen"
        resultCount={24}
      />
    </Card>
  );
}
