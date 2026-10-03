import Image from "next/image";

export type DetailHeroVariant = "expert" | "event";

type DetailHeroBackgroundProps = {
  variant?: DetailHeroVariant;
};

const VARIANT_DESKTOP: Record<DetailHeroVariant, string> = {
  expert: "/assets/images/hero/Background-expert.png",
  event: "/assets/images/hero/hero-vector.png",
};

export function DetailHeroBackground({
  variant = "expert",
}: DetailHeroBackgroundProps) {
  const desktopSrc = VARIANT_DESKTOP[variant];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <picture className="absolute inset-0">
        <source
          media="(max-width: 767px)"
          srcSet="/assets/images/hero/Mobile%20Background.png"
        />
        <Image
          src={desktopSrc}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover object-center md:object-fill md:object-top"
        />
      </picture>
    </div>
  );
}
