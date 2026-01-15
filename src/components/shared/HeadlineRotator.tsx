"use client";

import { useEffect, useState } from "react";

const phrases = [
  "coverage lifecycle.",
  "broker management.",
  "claims processing.",
  "risk assessment.",
  "compliance workstream.",
];

export default function HeadlineRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const t = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 400);
      return () => clearTimeout(t);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    // Changed to 'grid' instead of 'inline-grid' to ensure it takes up full width on mobile
    // This makes the vertical height much more stable.
    <div className="grid text-primary">
      {/* GHOST ELEMENT:
          We use the longest phrase to set the "footprint".
          'invisible' keeps it hidden but keeps its space. */}
      <div
        className="invisible row-start-1 col-start-1 opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        compliance workstream.
      </div>

      {/* ANIMATED ELEMENT:
          'row-start-1 col-start-1' stacks this exactly on top of the ghost. */}
      <div
        className={`row-start-1 col-start-1 transition-all duration-400 ease-in-out ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {phrases[index]}
      </div>
    </div>
  );
}