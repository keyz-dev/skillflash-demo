"use client";

import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function EnterpriseFeedbackControls({
  labels,
}: {
  labels: { positive: string; negative: string; email: string };
}) {
  const [rating, setRating] = useState<"positive" | "negative" | null>(null);

  return (
    <div className="mt-6 flex flex-col items-center">
      <div className="flex gap-3">
        <button
          type="button"
          aria-label={labels.positive}
          aria-pressed={rating === "positive"}
          onClick={() =>
            setRating((current) =>
              current === "positive" ? null : "positive",
            )
          }
          className={cn(
            "flex size-12 items-center justify-center rounded-control shadow-card transition-colors",
            rating === "positive"
              ? "bg-primary-lila text-white"
              : "bg-background text-primary-lila hover:bg-primary-lila/10",
          )}
        >
          <ThumbsUp aria-hidden="true" className="size-5 fill-current" />
        </button>
        <button
          type="button"
          aria-label={labels.negative}
          aria-pressed={rating === "negative"}
          onClick={() =>
            setRating((current) =>
              current === "negative" ? null : "negative",
            )
          }
          className={cn(
            "flex size-12 items-center justify-center rounded-control shadow-card transition-colors",
            rating === "negative"
              ? "bg-primary-lila text-white"
              : "bg-background text-primary-lila hover:bg-primary-lila/10",
          )}
        >
          <ThumbsDown aria-hidden="true" className="size-5 fill-current" />
        </button>
      </div>

      <label className="mt-6 block w-full max-w-sm rounded-control bg-background p-2 text-left text-xs text-primary-lila shadow-card">
        {labels.email}
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email..."
          className="mt-1 w-full rounded-control border border-border px-3 py-2 font-body text-sm text-foreground placeholder:text-muted focus-visible:outline-2 focus-visible:outline-primary-blue"
        />
      </label>
    </div>
  );
}
