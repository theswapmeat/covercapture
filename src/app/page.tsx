"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HeadlineRotator from "@/components/shared/HeadlineRotator";
import { MarketingBackground } from "@/components/shared/MarketingBackground";
import { ContactModal } from "@/components/shared/ContactModal";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <MarketingBackground>
      <div className="flex min-h-[100dvh] flex-col">
        <header className="flex items-center px-6 py-6 sm:px-20 sm:py-10">
          <Image
            src="/brand/logo.png"
            alt="Logo"
            width={310}
            height={69}
            priority
            className="object-contain"
          />
        </header>

        {/* ✅ Key fix: no vertical-centering on mobile (prevents bounce) */}
        <main className="flex flex-1 flex-col justify-start px-6 pt-10 pb-8 sm:justify-center sm:px-20 sm:pt-0 sm:pb-24">
          <motion.section
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-5xl"
          >
            {/* HEADLINE BOX: 
        Forces a height of 180px on small screens. 
        This is the "Solid Thick Red Border" you requested. */}
            <div
              style={{
                minHeight: "90px",
                marginBottom: "20px",
                display: "block",
              }}
              className="sm:min-h-0 sm:border-none sm:mb-8"
            >
              <motion.h1
                variants={FADE_UP}
                className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl"
              >
                Modernize your <br className="hidden sm:block" />
                <HeadlineRotator />
              </motion.h1>
            </div>

            {/* DESCRIPTION BOX:
        This is now in a completely separate block so it cannot move. */}
            <div className="relative block">
              <motion.p
                variants={FADE_UP}
                className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-2xl"
              >
                Our platform simplifies the complex lifecycle of commercial
                coverage, transforming fragmented insurance workstreams into a
                unified, data-driven engine for business resilience.
              </motion.p>

              <motion.div variants={FADE_UP} className="pt-8">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="h-12 bg-primary px-8 rounded-xl font-bold text-white"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </MarketingBackground>
  );
}
