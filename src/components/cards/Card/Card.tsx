import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const cardClassName = cn(
    "group relative h-[404px] w-full max-w-[304px] overflow-hidden rounded-card bg-background shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card-hover",
    className,
  );

  const content = <article className={cardClassName}>{children}</article>;

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block focus-within:z-10 hover:z-10">
      {content}
    </Link>
  );
}
