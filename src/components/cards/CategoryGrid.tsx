import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { articles } from "@/lib/data/articles";
import { cn } from "@/lib/utils";

const CATEGORY_SKILLS = [
  {
    id: "projektmanagement",
    nameKey: "projektmanagement",
  },
  {
    id: "agile-coaching",
    nameKey: "agileCoaching",
  },
  {
    id: "design-thinking",
    nameKey: "designThinking",
  },
  {
    id: "ux-ui-design",
    nameKey: "uxUiDesign",
  },
] as const;

export async function CategoryGrid() {
  const t = await getTranslations("categories");

  return (
    <section className="relative z-20 mx-auto -mt-16 grid w-full max-w-6xl grid-cols-1 gap-6 px-4 pb-16 sm:grid-cols-2 md:-mt-24 lg:grid-cols-4 md:px-8">
      {CATEGORY_SKILLS.map((skill) => {
        const article = articles.find((item) => item.skills.includes(skill.id));
        const name = t(skill.nameKey);

        return (
          <article
            key={skill.id}
            className="overflow-hidden rounded-card bg-surface shadow-card"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={`https://picsum.photos/seed/${skill.id}/400/300`}
                alt={t("imageAlt", { skill: name })}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-neutral-black px-3 py-1 font-body text-p text-white">
                {name}
              </span>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <p className="font-body text-p text-foreground">
                {article?.excerpt}
              </p>
              <Link
                href={`/search?skill=${skill.id}`}
                className={cn("font-body text-p text-primary-blue")}
              >
                {t("showMore")}
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}
