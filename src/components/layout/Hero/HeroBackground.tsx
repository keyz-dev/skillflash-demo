"use client";

import Image from "next/image";

export function HeroBackground({ translateY = 20 }: { translateY?: number }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden md:-translate-y-${translateY}`}
    >
      <Image
        src="/assets/images/hero/hero-vector.png"
        alt=""
        fill
        priority
        className="object-fit object-top md:-translate-y-10"
      />
    </div>
  );
}
