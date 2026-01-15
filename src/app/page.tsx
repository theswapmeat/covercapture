"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Added Variants type
import { PlayCircle } from "lucide-react"; 
import HeadlineRotator from "@/components/shared/HeadlineRotator";
import { MarketingBackground } from "@/components/shared/MarketingBackground";
import { ContactModal } from "@/components/shared/ContactModal";

// Explicitly typing the variants object fixes the "string is not assignable" error
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100 
    } 
  }
};

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <MarketingBackground>
      <div className="flex h-screen flex-col overflow-hidden">
        
        <header className="flex items-center px-8 py-10 sm:px-20">
          <Image src="/brand/logo.png" alt="Logo" width={310} height={69} priority className="object-contain dark:hidden" />
          <Image src="/brand/logo-darkmode.png" alt="Logo" width={310} height={69} priority className="hidden object-contain dark:block" />
        </header>

        <main className="flex flex-1 flex-col justify-center px-8 pb-32 sm:px-20">
          <motion.section 
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-5xl space-y-8"
          >
            <motion.h1 variants={FADE_UP} className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              Modernize your <br className="hidden sm:block" />
              <HeadlineRotator />
            </motion.h1>

            <motion.p variants={FADE_UP} className="max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Our platform simplifies the complex lifecycle of commercial
              coverage, transforming fragmented insurance workstreams into a
              unified, data-driven engine for business resilience.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col gap-4 pt-6 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
                className="flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-bold text-primary-foreground transition-all cursor-pointer"
              >
                Contact
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-10 text-base font-bold text-foreground transition-all cursor-pointer"
              >
                <PlayCircle className="h-5 w-5 text-primary" />
                Watch Demo
              </motion.button> */}
            </motion.div>
          </motion.section> {/* Fixed: Added the correct closing tag */}
        </main>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </MarketingBackground>
  );
}