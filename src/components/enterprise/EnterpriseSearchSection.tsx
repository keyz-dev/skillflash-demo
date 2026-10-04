import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { EnterpriseSearchArrowIcon } from "@/components/ui/icons";
import { EnterpriseExpertCard } from "./EnterpriseExpertCard";

export async function EnterpriseSearchSection() {
  const t = await getTranslations("enterpriseLanding.search");

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 md:flex-row md:items-stretch md:px-8 md:py-20">
      <div className="flex w-full min-w-0 flex-1 flex-col items-center">
        <div className="mx-auto w-full max-w-85.5 self-end">
          <Image
            src="/assets/images/enterprise/Rectangle.png"
            alt={t("phoneAlt")}
            width={400}
            height={790}
            sizes="(max-width: 767px) 260px, 326px"
            className="h-auto w-full"
          />
        </div>
        <EnterpriseSearchArrowIcon className="-mt-2 h-48 w-48 self-center  md:h-70 md:w-70" />
      </div>

      <div className="w-full min-w-0 flex-1 pb-16 md:pt-2 flex flex-col justify-between max-w-100">
        <div className="">
          <h2 className="font-heading text-3xl font-bold text-gradient-fade md:text-h3">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-xl font-body text-lg leading-relaxed text-foreground md:text-body-lg">
            {t("description")}
          </p>
        </div>
        <div className="mt-12 md:mt-20">
          <EnterpriseExpertCard />
        </div>
      </div>
    </section>
  );
}
