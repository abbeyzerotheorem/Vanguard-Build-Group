"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { constructionConfig } from "@/data/construction";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const { tagline, shortDescription, coverageRegions, headquarters, yearsInBusiness } =
    constructionConfig.brand;

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-bone-50"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, #1A1F26 0%, #0E1116 55%, #050608 100%)",
        }}
        aria-hidden="true"
      />

      {/* Editorial grid pattern */}
      <div
        className="absolute inset-0 -z-10 bg-grid-pattern opacity-[0.07]"
        aria-hidden="true"
      />

      {/* Brass radial glow */}
      <div
        className="absolute -top-32 -right-24 -z-10 h-[600px] w-[600px] rounded-full bg-brass-400/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-brass-400/10 blur-[120px]"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-site relative z-10 pb-16 pt-32 lg:pb-24 lg:pt-40"
      >
        <div className="max-w-4xl">
          {/* Eyebrow tag */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-brass-300/30 bg-brass-500/10 px-4 py-2 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.18em] text-brass-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass-300 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass-300" />
              </span>
              {headquarters} &middot; Est. {new Date().getFullYear() - yearsInBusiness}
            </span>
          </motion.div>

          {/* Headline — high-impact value proposition */}
          <motion.h1
            variants={itemVariants}
            className="text-display-xl sm:text-display-2xl font-display font-bold leading-[0.96] tracking-tight text-bone-50"
          >
            {tagline.split(".").map((phrase, idx, arr) => (
              <span key={idx} className="block">
                {phrase.trim()}
                {idx < arr.length - 1 && "."}
              </span>
            ))}
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-bone-50/70"
          >
            {shortDescription.slice(0, 160)}...
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#estimate"
              className="btn-primary group text-base"
              style={{ minHeight: 52, paddingLeft: "2rem", paddingRight: "2rem" }}
            >
              Request Proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-bone-50/20 bg-bone-50/5 px-7 py-3.5 text-sm sm:text-[0.95rem] font-semibold text-bone-50 backdrop-blur transition-all duration-300 hover:border-bone-50 hover:bg-bone-50 hover:text-ink"
              style={{ minHeight: 52 }}
            >
              View Selected Works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Coverage regions hint */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-2 text-xs text-bone-50/50"
          >
            <MapPin className="h-3.5 w-3.5 text-brass-300" aria-hidden="true" />
            <span className="font-medium uppercase tracking-wider">Serving</span>
            {coverageRegions.slice(0, 3).map((region) => (
              <span
                key={region}
                className="rounded-full border border-bone-50/10 bg-bone-50/5 px-2.5 py-1 text-[0.65rem] font-medium backdrop-blur"
              >
                {region}
              </span>
            ))}
            <span className="text-bone-50/40">+{coverageRegions.length - 3} more</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-bone-50/55">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-bone-50/40 to-transparent" />
      </div>
    </section>
  );
}
