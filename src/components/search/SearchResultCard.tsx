import Image from "next/image";
import type { ResultItem } from "@/lib/types";
import type { Skill } from "@/lib/types/skill";
import { cn } from "@/lib/utils";

function getItemSkillIds(item: ResultItem): string[] {
  if (item.type === "event") {
    return item.data.mainSkillIds;
  }

  if (item.type === "expert") {
    return item.data.skills;
  }

  if (item.type === "article") {
    return item.data.skills;
  }

  if (item.type === "media") {
    return item.data.skills;
  }

  return item.data.skills;
}

function getSkillName(skillId: string, skills: Skill[]): string {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function SearchResultCard({
  item,
  skills,
}: {
  item: ResultItem;
  skills: Skill[];
}) {
  const tagSkills = getItemSkillIds(item).slice(0, 2);

  const title =
    item.type === "expert"
      ? item.data.name
      : item.type === "event"
        ? item.data.name
        : item.type === "article"
          ? item.data.title
          : item.type === "media"
            ? item.data.title
            : item.data.name;

  const isProfile = item.type === "expert" || item.type === "team";

  const imageUrl =
    item.type === "expert"
      ? item.data.avatarUrl
      : item.type === "event"
        ? item.data.previewImage
        : item.type === "article"
          ? "https://picsum.photos/seed/article-skillflash/400/400"
          : item.type === "media"
            ? item.data.videoUrl
            : (item.data.memberAvatarUrls[0] ??
              "https://picsum.photos/seed/team-default/400/400");

  const subtitle =
    item.type === "expert"
      ? `${item.data.yearsExperience} Jahre Erfahrung`
      : item.type === "team"
        ? `${item.data.memberAvatarUrls.length} Teammitglieder`
        : item.type === "event"
          ? item.data.startDate
          : "";

  return (
    <article
      className={cn(
        "group relative h-[404px] w-full max-w-[304px] overflow-hidden rounded-card bg-background shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
      )}
    >
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
        <button
          type="button"
          aria-label="Auswahl"
          className="flex size-9 items-center justify-center rounded-full bg-white text-primary-lila shadow-card"
        >
          <span className="relative inline-flex size-8 items-center justify-center text-lg font-semibold">
            +
          </span>
        </button>
        <button
          type="button"
          aria-label="Teilen"
          className="flex size-9 items-center justify-center rounded-full bg-white text-primary-lila shadow-card"
        >
          ↗
        </button>
        <button
          type="button"
          aria-label="Merken"
          className="flex size-9 items-center justify-center rounded-full bg-white text-secondary-pink shadow-card"
        >
          ★
        </button>
      </div>

      {isProfile ? (
        <div className="flex h-full flex-col items-center px-4 pb-4 pt-6">
          <div className="relative mb-5 flex size-32 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-card">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>

          <div className="text-center">
            <h3 className="font-heading text-h6 text-foreground">{title}</h3>
            <p className="mt-2 font-body text-p text-foreground/70">
              {subtitle}
            </p>
          </div>

          <div className="mt-auto flex w-full items-center justify-between gap-2 border-t border-border pt-4">
            <div className="flex min-w-0 items-center gap-2 overflow-hidden">
              {tagSkills.map((skillId) => (
                <span
                  key={skillId}
                  className="rounded-full border border-neutral-black bg-background px-2 py-1 font-body text-[11px] text-foreground"
                >
                  {getSkillName(skillId, skills)}
                </span>
              ))}
            </div>
            <span className="shrink-0 font-heading text-p text-foreground">
              24
            </span>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="relative h-[200px] overflow-hidden">
            {item.type === "media" ? (
              <div className="flex h-full items-center justify-center bg-neutral-black/90">
                <div className="flex size-16 items-center justify-center rounded-full border-4 border-white/80 text-2xl text-white">
                  ▶
                </div>
              </div>
            ) : (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="304px"
              />
            )}

            {item.type === "event" ? (
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 font-heading text-p text-foreground shadow-card">
                {new Date(item.data.startDate).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                })}
              </div>
            ) : null}

            {item.type !== "media" ? (
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
                <Image
                  src={
                    item.type === "event"
                      ? "https://picsum.photos/seed/event-author/200/200"
                      : "https://picsum.photos/seed/article-author/200/200"
                  }
                  alt="author"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ) : null}
          </div>

          <div className="flex flex-1 flex-col px-4 pt-4">
            <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
              {title}
            </h3>
            <p className="mt-2 line-clamp-3 font-body text-p text-foreground/70">
              {item.type === "event"
                ? item.data.description
                : item.type === "article"
                  ? item.data.excerpt
                  : item.data.description}
            </p>

            {item.type === "event" || item.type === "article" ? (
              <button
                type="button"
                className="mt-2 text-left font-body text-p text-primary-blue underline underline-offset-2"
              >
                Mehr anzeigen
              </button>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
            <div className="flex min-w-0 items-center gap-2 overflow-hidden">
              {tagSkills.map((skillId) => (
                <span
                  key={skillId}
                  className="rounded-full border border-neutral-black bg-background px-2 py-1 font-body text-[11px] text-foreground"
                >
                  {getSkillName(skillId, skills)}
                </span>
              ))}
            </div>
            <span className="shrink-0 font-heading text-p text-foreground">
              24
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
