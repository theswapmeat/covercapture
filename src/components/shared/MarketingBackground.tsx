import { ReactNode } from "react";

export function MarketingBackground({
  children,
  image = "/background/bg1.jpg",
}: {
  children: ReactNode;
  image?: string;
}) {
  return (
    // 'isolate' creates a new stacking context so z-0 inside doesn't fight with z-index outside
    <div className="relative min-h-[100dvh] w-full bg-white isolate overflow-x-hidden">
      
      {/* Layer 0: The Image (Fixed so it doesn't move on scroll) */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          filter: 'brightness(1.15) saturate(0.9)',
          opacity: 0.8
        }}
      />

      {/* Layer 1: The Gradient Wash */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.90) 0%, rgba(250,250,252,0.75) 45%, rgba(255,255,255,0.88) 100%)'
        }}
      />

      {/* Layer 2: The Actual Content */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col">
        {children}
      </div>
    </div>
  );
}