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
      <div className="flex min-h-[100dvh] flex-col overflow-hidden">
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

        <main className="flex flex-1 flex-col justify-center px-6 pb-8 sm:px-20 sm:pb-24">
          <motion.section
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="max-w-5xl space-y-6 sm:space-y-8"
          >
            <motion.h1
              variants={FADE_UP}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-7xl"
            >
              Modernize your <br className="hidden sm:block" />
              <HeadlineRotator />
            </motion.h1>

            <motion.p
              variants={FADE_UP}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-2xl"
            >
              Our platform simplifies the complex lifecycle of commercial
              coverage, transforming fragmented insurance workstreams into a
              unified, data-driven engine for business resilience.
            </motion.p>

            <motion.div
              variants={FADE_UP}
              className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 sm:pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
                className="flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground transition-all"
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.section>
        </main>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </MarketingBackground>
  );
}
