import { useId } from "react";
import Image from "next/image";

export function BrandMark({ size = 40 }: { size?: number }) {
  const gradientId = `brand-mark-orange-${useId().replaceAll(":", "")}`;

  return (
    <svg
      aria-hidden="true"
      height={size * 0.8}
      viewBox="0 0 100 80"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={gradientId}
          x1="56"
          x2="94"
          y1="6"
          y2="66"
        >
          <stop stopColor="#D9573F" />
          <stop offset="1" stopColor="#EE8A34" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinejoin="round" transform="translate(0,4)">
        <path d="M6 6 H44 V66 L6 30 Z" stroke="#0F6A8E" strokeWidth="12" />
        <path d="M6 6 H44 V66 L6 30 Z" stroke="#fff" strokeWidth="4" />
        <path d="M56 6 H94 V30 L56 66 Z" stroke={`url(#${gradientId})`} strokeWidth="12" />
        <path d="M56 6 H94 V30 L56 66 Z" stroke="#fff" strokeWidth="4" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  width = 176,
  priority = false,
}: {
  width?: number;
  priority?: boolean;
}) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className="brand__logo"
      height={Math.round(80 * (width / 448))}
      priority={priority}
      src="/medaurion-logo.svg"
      width={width}
    />
  );
}
