"use client";

import Image from "next/image";

export function HeroBackground({ translateY = 10 }: { translateY?: number }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden md:-translate-y-${translateY}`}
    >
      <picture className="absolute inset-0">
        <source
          media="(max-width: 767px)"
          srcSet="/assets/images/hero/Mobile%20Background.png"
        />
        <Image
          src="/assets/images/hero/hero-vector.png"
          alt=""
          fill
          sizes="100vw"
          fetchPriority="high"
          className="object-cover object-center md:object-fill md:object-top md:-translate-y-9"
        />
      </picture>
    </div>
  );
}
