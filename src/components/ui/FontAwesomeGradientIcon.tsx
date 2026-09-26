import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useId } from "react";

export function FontAwesomeGradientIcon({
  icon,
  gradient = false,
  className,
}: {
  icon: IconDefinition;
  gradient?: boolean;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const [width, height, , , pathData] = icon.icon;
  const paths = typeof pathData === "string" ? [pathData] : pathData;
  const fill = gradient ? `url(#${id})` : "currentColor";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {gradient ? (
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff006e" />
            <stop offset="100%" stopColor="#fb5607" />
          </linearGradient>
        </defs>
      ) : null}
      {paths.map((path, index) => (
        <path key={index} d={path} fill={fill} />
      ))}
    </svg>
  );
}
