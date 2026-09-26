"use client";

import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-hero-radial">
      <Image
        src="/assets/images/hero/hero-vector.png"
        alt=""
        fill
        priority
        className="object-cover object-top"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage: "url('/assets/images/hero/dot-pattern.png')",
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />
    </div>
  );
}
