"use client";

import { useId } from "react";

type FlowArrowIconProps = {
  className?: string;
};

export function FlowArrowIcon({ className }: FlowArrowIconProps) {
  const id = useId().replaceAll(":", "");
  const clipPathId = `${id}-clip`;
  const firstGradientId = `${id}-gradient-1`;
  const secondGradientId = `${id}-gradient-2`;

  return (
    <svg
      width="232"
      height="232"
      viewBox="0 0 232 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M117.575 8.85911C164.149 71.3703 141.703 146.802 96.6368 203.916C95.8646 204.899 96.0303 206.326 97.0127 207.098C97.9952 207.87 99.4222 207.705 100.194 206.722C146.526 148.011 169.085 70.4121 121.205 6.15039C120.461 5.14775 119.042 4.94161 118.036 5.68954C117.033 6.43343 116.827 7.85243 117.575 8.85911Z"
          fill={`url(#${firstGradientId})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.2612 204.248C99.8717 200.314 100.692 195.386 100.769 194.824C102.851 179.595 102.459 164.858 99.9 149.669C99.6938 148.436 98.5213 147.603 97.2882 147.809C96.0551 148.016 95.2225 149.188 95.4286 150.421C97.915 165.149 98.2991 179.441 96.2777 194.214C96.1604 195.075 94.3087 206.152 94.1025 208.42C94.0135 209.35 94.2522 209.904 94.3209 210.029C94.6605 210.709 95.1618 211.008 95.5903 211.161C96.0755 211.331 96.9446 211.416 97.9473 210.899C98.9944 210.353 100.878 208.695 101.388 208.315C109.09 202.603 117.188 195.556 125.989 190.571C134.382 185.817 143.426 182.934 153.424 185.283C154.641 185.57 155.862 184.81 156.149 183.593C156.436 182.376 155.676 181.155 154.459 180.868C143.28 178.244 133.137 181.313 123.757 186.625C115.008 191.582 106.931 198.511 99.2612 204.248Z"
          fill={`url(#${secondGradientId})`}
        />
      </g>
      <defs>
        <linearGradient
          id={firstGradientId}
          x1="33.7043"
          y1="223.758"
          x2="64.6129"
          y2="-128.317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF006E" />
          <stop offset="0.0001" stopColor="#FF006E" />
          <stop offset="0.0885417" stopColor="#FF006E" />
          <stop offset="0.536458" stopColor="#FB5607" />
          <stop offset="1" stopColor="#FB5607" />
        </linearGradient>
        <linearGradient
          id={secondGradientId}
          x1="83.2782"
          y1="231.1"
          x2="116.391"
          y2="79.5778"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF006E" />
          <stop offset="0.0001" stopColor="#FF006E" />
          <stop offset="0.0885417" stopColor="#FF006E" />
          <stop offset="0.536458" stopColor="#FB5607" />
          <stop offset="1" stopColor="#FB5607" />
        </linearGradient>
        <clipPath id={clipPathId}>
          <rect
            width="164.049"
            height="164.049"
            fill="white"
            transform="translate(0 116) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
