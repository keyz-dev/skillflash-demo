import type { ResultItem } from "@/lib/types";
import type { Skill } from "@/lib/types/skill";
import { ArticleCard } from "../cards/ArticleCard";
import { EventCard } from "../cards/EventCard";
import { ExpertCard } from "../cards/ExpertCard";
import { MediaCard } from "../cards/MediaCard";
import { TeamCard } from "../cards/TeamCard";

export function SearchResultCard({
  item,
  skills,
}: {
  item: ResultItem;
  skills: Skill[];
}) {
  switch (item.type) {
    case "expert":
      return <ExpertCard expert={item.data} skills={skills} />;
    case "team":
      return <TeamCard team={item.data} skills={skills} />;
    case "event":
      return <EventCard event={item.data} skills={skills} />;
    case "media":
      return <MediaCard media={item.data} skills={skills} />;
    case "article":
      return <ArticleCard article={item.data} skills={skills} />;
    default:
      return null;
  }
}
