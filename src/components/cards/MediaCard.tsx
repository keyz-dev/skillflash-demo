"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Media } from "@/lib/types/media";
import type { Skill } from "@/lib/types/skill";
import { cn, entityAccentClasses } from "@/lib/utils";
import { experts } from "@/lib/data/experts";
import { Card } from "./Card/Card";
import { CardActions } from "./Card/CardActions";

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
  const author = experts.find((expert) => expert.id === media.authorId);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasVideoSources = Boolean(media.videoSources?.length);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => setIsPlaying(false));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasVideoSources]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <Card>
      <CardActions groupClassName="md:group-hover:pointer-events-auto md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100" />
      <div className="flex h-full flex-col">
        <div className="relative flex h-50 shrink-0 items-center justify-center bg-background pt-16">
          {hasVideoSources ? (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster={media.posterUrl}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 size-full object-cover"
            >
              {media.videoSources?.map((source) => (
                <source key={source.src} src={source.src} type={source.type} />
              ))}
            </video>
          ) : media.posterUrl ? (
            <Image
              src={media.posterUrl}
              alt=""
              fill
              className="object-cover"
              sizes="280px"
            />
          ) : null}

          {author?.avatarUrl ? (
            <div className="absolute left-4 top-8 size-14 overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
              <Image
                src={author.avatarUrl}
                alt={author.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
          ) : null}

          <button
            type="button"
            aria-label={
              hasVideoSources
                ? isPlaying
                  ? "Pause video"
                  : "Play video"
                : "Video preview unavailable"
            }
            disabled={!hasVideoSources}
            onClick={togglePlayback}
            className="relative flex size-22 items-center justify-center rounded-full border-2 border-neutral-black text-neutral-black disabled:cursor-default"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-11 fill-none"
              aria-hidden="true"
            >
              {isPlaying ? (
                <path
                  d="M9 6v12m6-12v12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M8 5v14l11-7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-4 pt-2">
          <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
            {media.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-p text-foreground">
            {media.description}
          </p>
        </div>

        <footer className="flex h-18 shrink-0 items-center justify-between gap-2 bg-background px-4">
          <ul className="flex min-w-0 flex-1 items-center gap-2">
            {media.skills
              .slice(0, 2)
              .map((skillId) => getSkillName(skillId, skills))
              .map((tag) => (
                <li
                  key={tag}
                  className={cn(
                    "min-w-0 rounded-full border-2 bg-background px-3 py-1 font-body text-p font-bold shadow-skill-tag",
                    accent.tagBorder,
                    accent.tagText,
                  )}
                >
                  <span className="block truncate">{tag}</span>
                </li>
              ))}
          </ul>
          <span
            className={cn(
              "shrink-0 font-heading text-p font-bold",
              accent.count,
            )}
          >
            24..
          </span>
        </footer>
      </div>
    </Card>
  );
}
