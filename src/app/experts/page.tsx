import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/ui/ComingSoon";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("comingSoon.experts");

  return {
    title: `${t("eyebrow")} | Skillflash`,
    description: t("description"),
  };
}

export default function ExpertsPage() {
  return <ComingSoon audience="experts" />;
}
