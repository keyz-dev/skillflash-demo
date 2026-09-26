"use client";

import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden md:-translate-y-20">
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
