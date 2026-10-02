import Image from "next/image";
import type { Team } from "@/lib/types/team";
import type { Skill } from "@/lib/types/skill";
import { cn, entityAccentClasses } from "@/lib/utils";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function TeamCard({ team, skills }: { team: Team; skills: Skill[] }) {
  const accent = entityAccentClasses.team;
  const displayAvatars = team.memberAvatarUrls.slice(0, 6);

  return (
    <Card>
      <CardFloatingActions />
      <div className="flex h-full flex-col items-center px-4 pb-4 pt-6">
        <div className="relative mb-5 flex size-32 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-card">
          <Image
            src={
              team.memberAvatarUrls[0] ??
              "https://picsum.photos/seed/team-default/400/400"
            }
            alt={team.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        <div className="text-center">
          <h3 className="font-heading text-h6 text-foreground">{team.name}</h3>

          <div className="mt-4 flex items-center justify-center">
            <ul className="flex -space-x-3">
              {displayAvatars.map((avatarUrl, idx) => (
                <li
                  key={`${avatarUrl}-${idx}`}
                  className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-card"
                >
                  <Image
                    src={avatarUrl}
                    alt={`${team.name} member ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto flex w-full items-center justify-between gap-2 border-t border-border pt-4">
          <ul className="flex min-w-0 items-center gap-2 overflow-hidden">
            {team.skills
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
