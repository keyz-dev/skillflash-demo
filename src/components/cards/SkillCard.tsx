import Image from "next/image";
import Link from "next/link";
import type { CategoryCard } from "@/lib/types/category-card";
import { CardActions } from "./Card/CardActions";

export function SkillCard({
  card,
  categoryLabel,
  imageAlt,
  showMoreLabel,
}: {
  card: CategoryCard;
  categoryLabel: string;
  imageAlt: string;
  showMoreLabel: string;
}) {
  return (
    <Link
      href={card.href}
      className="group/card block px-2 md:px-0 h-[404px] w-full md:max-w-[304px] cursor-pointer hover:z-10 focus-within:z-10"
      aria-label={`Open ${categoryLabel} search results`}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-card bg-background shadow-card transition-[transform,box-shadow] duration-200 ease-out group-hover/card:-translate-y-0.5 group-hover/card:shadow-card-hover group-focus-within/card:-translate-y-0.5 group-focus-within/card:shadow-card-hover motion-reduce:transition-none">
        <div className="relative h-[204px] shrink-0">
          <Image
            src={card.imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 304px, (min-width: 640px) 50vw, 100vw"
            className="object-cover border border-transparent"
          />

          {/* Card fade overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-card-fade"
          />

          <span className="absolute bottom-2 left-4 z-10 cursor-pointer rounded-full bg-neutral-black px-4 py-2 font-body text-p text-neutral-white shadow-card transition-colors duration-200 hover:bg-neutral-black/80">
            {categoryLabel}
          </span>
          <CardActions groupClassName="md:group-hover/card:pointer-events-auto md:group-hover/card:translate-x-0 md:group-hover/card:opacity-100 md:group-focus-within/card:pointer-events-auto md:group-focus-within/card:translate-x-0 md:group-focus-within/card:opacity-100" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-4 pt-8">
          <p className="line-clamp-2 min-h-12 font-body text-p text-foreground">
            {card.excerpt}
          </p>
          <span className="mt-1 w-fit font-body text-p text-primary-blue underline underline-offset-2 transition-colors hover:text-primary-lila">
            {showMoreLabel}
          </span>
        </div>

        <footer className="flex h-[72px] shrink-0 items-center justify-between gap-2 px-4">
          <ul className="flex min-w-0 flex-1 items-center gap-2">
            {card.skillTags.slice(0, 2).map((tag) => (
              <li
                key={tag}
                className="min-w-0 cursor-pointer rounded-full border-2 border-neutral-black bg-background px-3 py-1 font-body text-p font-bold text-foreground shadow-skill-tag transition-colors duration-200 hover:bg-neutral-grey/40"
              >
                <span className="block truncate">{tag}</span>
              </li>
            ))}
          </ul>
          <span className="shrink-0 font-heading text-p font-bold text-foreground">
            {card.resultCount}..
          </span>
        </footer>
      </div>
      {/* <article className="relative z-0 h-full w-full"></article>ss */}
    </Link>
  );
}
