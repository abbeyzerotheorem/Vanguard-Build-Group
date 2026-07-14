'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HeroSection() {
  const { tagline, shortDescription, coverageRegions, headquarters } =
    constructionConfig.brand;

  const truncatedDescription =
    shortDescription.length > 180
      ? shortDescription.slice(0, 177) + '...'
      : shortDescription;

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-structural-blue"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none"
        aria-hidden="true"
      />

      {/* Dark gradient overlay for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-structural-blue/90 via-structural-blue/80 to-structural-blue/95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle radial glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-site relative z-10 py-20 sm:py-28"
      >
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent-light mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {headquarters}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display-lg sm:text-display-xl font-display font-bold text-white leading-[1.05] tracking-tight"
          >
            {tagline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-gray-300 font-body leading-relaxed max-w-2xl"
          >
            {truncatedDescription}
          </motion.p>

          {/* Coverage regions */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400"
          >
            <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Serving:</span>
            {coverageRegions.map((region) => (
              <span
                key={region}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
              >
                {region}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#estimate"
              className="btn-primary text-base px-8 py-4"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#portfolio"
              className="btn-secondary border-white/30 text-white hover:bg-white hover:text-structural-blue text-base px-8 py-4"
            >
              View Active Sites
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
