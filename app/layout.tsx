import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "medaurion AIOS | Patient intelligence for your clinic",
  description:
    "Know what changed before the patient sits down. Patient briefs, results comparison and follow-up intelligence for clinics.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
