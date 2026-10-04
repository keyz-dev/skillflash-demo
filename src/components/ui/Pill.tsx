import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-neutral-black px-4 py-2 font-body text-sm font-bold text-neutral-white shadow-skill-tag",
        className,
      )}
    >
      {children}
    </span>
  );
}
