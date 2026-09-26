import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/ui/ComingSoon";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("comingSoon.enterprise");

  return {
    title: `${t("eyebrow")} | Skillflash`,
    description: t("description"),
  };
}

export default function EnterprisePage() {
  return <ComingSoon audience="enterprise" />;
}
