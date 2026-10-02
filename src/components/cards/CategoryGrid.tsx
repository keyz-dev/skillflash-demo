import { getTranslations } from "next-intl/server";
import { getCategoryCards } from "@/lib/data/category-cards";
import { SkillCard } from "./SkillCard";

export async function CategoryGrid() {
  const t = await getTranslations("categories");
  const cards = await getCategoryCards();

  return (
    <section className="relative z-20 mx-auto w-full max-w-7xl px-2 pb-16">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const categoryLabel = t(card.categoryKey);

          return (
            <SkillCard
              key={card.id}
              card={card}
              categoryLabel={categoryLabel}
              imageAlt={t("imageAlt", { skill: categoryLabel })}
              showMoreLabel={t("showMore")}
            />
          );
        })}
      </div>
    </section>
  );
}
