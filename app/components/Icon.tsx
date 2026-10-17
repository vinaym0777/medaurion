import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "arrow-up"
  | "brief"
  | "calendar"
  | "check"
  | "chevron"
  | "close"
  | "file"
  | "heart"
  | "lock"
  | "menu"
  | "message"
  | "note"
  | "prescription"
  | "shield"
  | "sparkle"
  | "trend"
  | "upload"
  | "users"
  | "clock"
  | "kidney"
  | "thyroid"
  | "lungs"
  | "droplet"
  | "activity"
  | "plus"
  | "play";

const icons: Record<IconName, ReactNode> = {
  arrow: <path d="M4.5 12h14m-6-6 6 6-6 6" />,
  "arrow-up": <path d="M12 19V5m-6 6 6-6 6 6" />,
  brief: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5M8.5 9h7M8.5 12h7M8.5 15h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M7.5 3v4M16.5 3v4M4 9h16m-11 4 2 2 4-4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  chevron: <path d="m7 10 5 5 5-5" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  file: (
    <>
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M14 3.5V8h4M9 12h6m-6 3h6" />
    </>
  ),
  heart: <path d="M20.5 8.7c0 4.5-8.5 10.2-8.5 10.2S3.5 13.2 3.5 8.7A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 8.5 1.5Z" />,
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-3.5 2v-5.2A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 11h8m-8 3h5" />
    </>
  ),
  note: (
    <>
      <path d="M5 4.5h14v15H5zM8 9h8m-8 4h8m-8 4h5" />
      <path d="m15 4.5 4 4" />
    </>
  ),
  prescription: (
    <>
      <path d="M5 3.5h10l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V3.5Z" />
      <path d="M15 3.5V8h4M8 12h8m-4-4v8m-4-4h8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 20 6v5c0 5.1-3.4 8.4-8 10-4.6-1.6-8-4.9-8-10V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </>
  ),
  trend: (
    <>
      <path d="M4 18.5h16M5.5 15 10 10l3 3 5.5-6" />
      <path d="M14.5 7H19v4.5" />
    </>
  ),
  upload: (
    <>
      <path d="M12 15V4m-4 4 4-4 4 4" />
      <path d="M5 14v5a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20v-1.5A5.5 5.5 0 0 1 9 13h.5a5.5 5.5 0 0 1 5.5 5.5V20m-1-9.5a3.2 3.2 0 1 0 0-6.4m2 9.2a5.4 5.4 0 0 1 4.5 5.3V20" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  kidney: (
    <>
      <path d="M9.6 4.2C5.5 3 3 6.2 3 10.2c0 4.4 2.6 8.4 6.1 8.4 2.3 0 3.4-1.8 3.4-4.1V8.8c0-2.2-1-4-2.9-4.6Zm4.8 0c4.1-1.2 6.6 2 6.6 6 0 4.4-2.6 8.4-6.1 8.4" />
      <path d="M12.5 9.5c-1.1 1-1.6 2-1.6 3.2" />
    </>
  ),
  thyroid: (
    <>
      <path d="M12 4v6m-1.6 1.7C8.7 9 5.1 8 4 10c-1.4 2.5.1 7.2 3.3 8.4 2.2.8 4.7-.5 4.7-3.1m1.6-2.6c1.7-3.7 5.3-4.7 6.4-2.7 1.4 2.5-.1 7.2-3.3 8.4-2.2.8-4.7-.5-4.7-3.1" />
    </>
  ),
  lungs: (
    <>
      <path d="M12 5v9m0-4c-1.8-2.5-2.5-4.3-4-4-2.1.4-3.5 5.1-4 8.8-.5 3.7 1.5 5.4 4.1 5.1 2.8-.3 3.9-2.9 3.9-5.9m0-4c1.8-2.5 2.5-4.3 4-4 2.1.4 3.5 5.1 4 8.8.5 3.7-1.5 5.4-4.1 5.1-2.8-.3-3.9-2.9-3.9-5.9" />
    </>
  ),
  droplet: <path d="M12 3s6.5 7.1 6.5 11.7a6.5 6.5 0 1 1-13 0C5.5 10.1 12 3 12 3Z" />,
  activity: (
    <>
      <path d="M3 12h4l2.2-5.5 4.2 11 2.3-5.5H21" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  play: <path d="m9 6 10 6-10 6V6Z" />,
};

export function Icon({
  name,
  size = 20,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      width={size}
    >
      {icons[name]}
    </svg>
  );
}
