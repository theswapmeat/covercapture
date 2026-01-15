'use client';

import { useState, useEffect } from 'react';

const phrases = [
  "coverage lifecycle.",
  "broker management.",
  "claims processing.",
  "risk assessment.",
  "compliance workstream."
];

export default function HeadlineRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true); // Start fade in
      }, 500); // Wait for fade out to finish
      
    }, 3700); // Change phrase every 3.7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block text-primary transition-all duration-500 ease-in-out ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      }`}
    >
      {phrases[index]}
    </span>
  );
}