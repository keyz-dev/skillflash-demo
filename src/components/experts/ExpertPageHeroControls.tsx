"use client";

import { useRouter } from "next/navigation";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function ExpertPageHeroControls() {
  const router = useRouter();
  const { headerHeight } = useHeaderScroll();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-2 pb-2 pt-28 md:pt-40">
      <button
        type="button"
        aria-label="Back"
        onClick={() => router.back()}
        style={{ top: headerHeight + 2 }}
        className="absolute left-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[3px] border-white/90 bg-transparent font-bold text-white shadow-card transition-transform hover:scale-[1.02]"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
      </button>
    </div>
  );
}
