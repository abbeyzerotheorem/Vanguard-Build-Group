"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Star } from "lucide-react";
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
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-bone-50 lg:items-center"
    >
      {/* Background image (CSS gradient stand-in — no real asset means no LCP penalty) */}
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
        className="absolute -top-32 -right-24 -z-10 h-[600px] w-[600px] rounded-full bg-brass-500/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-brass-400/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Subtle horizontal accent line */}
      <div
        className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-bone-50/15 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-site relative z-10 pb-24 pt-32 lg:pb-32 lg:pt-40"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Primary content */}
          <div className="lg:col-span-8">
            {/* Eyebrow tag */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brass-300/40 bg-brass-500/10 px-3.5 py-1.5 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.18em] text-brass-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass-300 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass-300" />
                </span>
                {headquarters} &middot; Est. {new Date().getFullYear() - yearsInBusiness}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-display-xl sm:text-display-2xl font-display font-bold leading-[0.98] tracking-tight text-bone-50"
            >
              {tagline.split(".").map((phrase, idx, arr) => (
                <span key={idx} className="block">
                  {phrase.trim()}
                  {idx < arr.length - 1 ? "." : ""}
                </span>
              ))}
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-base sm:text-lg text-bone-50/75 leading-relaxed"
            >
              {shortDescription}
            </motion.p>

            {/* Coverage regions */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-bone-50/60"
            >
              <MapPin
                className="h-4 w-4 text-brass-300"
                aria-hidden="true"
              />
              <span className="font-medium text-bone-50/80">Serving</span>
              {coverageRegions.map((region) => (
                <span
                  key={region}
                  className="inline-flex rounded-full border border-bone-50/15 bg-bone-50/5 px-2.5 py-0.5 text-xs text-bone-50/75 backdrop-blur"
                >
                  {region}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#estimate" className="btn-brass text-sm sm:text-[0.95rem]">
                Request a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-bone-50/25 bg-bone-50/5 px-7 py-3.5 text-sm sm:text-[0.95rem] font-semibold text-bone-50 backdrop-blur transition-all duration-300 hover:border-bone-50 hover:bg-bone-50 hover:text-ink"
                style={{ minHeight: 48 }}
              >
                View Active Sites
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Side trust stack */}
          <motion.aside
            variants={itemVariants}
            className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-bone-50/10"
          >
            <div className="flex flex-col gap-5">
              <div>
                <p className="numeric-mark text-brass-300">/ 01 — Trust</p>
                <p className="mt-3 font-display text-2xl font-semibold text-bone-50">
                  Three lines of defence
                </p>
                <p className="mt-2 text-sm text-bone-50/65">
                  Every project is bonded, insured, and warrantied from the
                  first day of breaking ground.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  { label: "NHBRC Registered", meta: "BG-100527-2021" },
                  { label: "CIDB Grade 9", meta: "9GB / 9CE" },
                  { label: "Construction All-Risk", meta: "R50M Cover" },
                ].map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-bone-50/10 bg-bone-50/5 px-4 py-3 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck
                        className="h-4 w-4 text-brass-300"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-bone-50">
                        {row.label}
                      </span>
                    </div>
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-bone-50/55">
                      {row.meta}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 rounded-xl border border-brass-300/20 bg-brass-500/5 px-4 py-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brass-300 text-brass-300"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="text-xs leading-tight text-bone-50/80">
                  <span className="font-semibold text-bone-50">5.0 / 5.0</span>{" "}
                  from 47 verified project owners
                </div>
              </div>
            </div>
          </motion.aside>
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
