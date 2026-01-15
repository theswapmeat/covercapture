import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MarketingBackground({
  children,
  image = "/background/bg1.jpg",
}: {
  children: ReactNode;
  image?: string;
}) {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-background">
      {/* Background image (washed) */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center opacity-80",
          "[filter:brightness(1.15)_saturate(0.9)]"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Light wash */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(45deg,rgba(255,255,255,0.90)_0%,rgba(250,250,252,0.75)_45%,rgba(255,255,255,0.88)_100%)]"
        )}
      />

      {/* Page content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col">{children}</div>
    </div>
  );
}
