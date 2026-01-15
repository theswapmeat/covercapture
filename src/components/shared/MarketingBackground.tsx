import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // See below to create this file

export function MarketingBackground({
  children,
  image = "/background/bg1.jpg",
}: {
  children: ReactNode;
  image?: string;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* LIGHT MODE background (washed) */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center opacity-80 dark:hidden",
          "filter-[brightness(1.15)_saturate(0.9)]"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* LIGHT MODE wash */}
      <div
        className={cn(
          "absolute inset-0 dark:hidden",
          "bg-[linear-gradient(45deg,rgba(255,255,255,0.90)_0%,rgba(250,250,252,0.75)_45%,rgba(255,255,255,0.88)_100%)]"
        )}
      />

      {/* DARK MODE background (original image, darkened for readability) */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center hidden dark:block",
          "filter-[brightness(0.25)_contrast(1.1)_saturate(0.9)]"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  );
}