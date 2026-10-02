import Image from "next/image";
import type { Media } from "@/lib/types/media";
import type { Skill } from "@/lib/types/skill";
import { cn, entityAccentClasses } from "@/lib/utils";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function MediaCard({
  media,
  skills,
}: {
  media: Media;
  skills: Skill[];
}) {
  const accent = entityAccentClasses.media;

  return (
    <Card>
      <CardFloatingActions />
      <div className="flex h-full flex-col">
        <div className="relative h-[130px] shrink-0 px-4 pt-4">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
            <Image
              src="https://picsum.photos/seed/media-author/200/200"
              alt="author"
              fill
              className="relative object-cover"
              sizes="40px"
            />
          </div>

          <div className="absolute right-6 top-4 flex size-24 items-center justify-center">
            <div className="relative flex size-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-neutral-black" />
              <svg
                className="relative size-10 translate-x-1 fill-neutral-black"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4">
          <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
            {media.title}
          </h3>
          <p className="mt-2 line-clamp-3 font-body text-p text-foreground/70">
            {media.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
          <ul className="flex min-w-0 items-center gap-2 overflow-hidden">
            {media.skills
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
