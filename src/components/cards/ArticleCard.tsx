import type { Article } from "@/lib/types/article";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardActions } from "./Card/CardActions";
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
      <CardActions groupClassName="md:group-hover:pointer-events-auto md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100" />
      <CardLayoutB
        variant="article"
        entityType="article"
        imageUrl={article.previewImage}
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
