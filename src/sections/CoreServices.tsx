"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { constructionConfig } from "@/data/construction";
import IconRenderer from "@/components/IconRenderer";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function CoreServices() {
  const { services } = constructionConfig;

  return (
    <section
      id="services"
      aria-label="Core services"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">/ 03 — Capabilities</p>
            <h2 className="mt-3 section-title">Core services</h2>
            <p className="mt-4 text-base sm:text-lg text-ink-500">
              Master-level construction services engineered to SANS 10400
              standards with 10-year structural warranties on every project.
            </p>
          </div>
          <a
            href="#estimate"
            className="group hidden items-center gap-2 self-end text-sm font-semibold text-ink hover:text-brass-500 sm:inline-flex"
          >
            Start a project brief
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper p-7 sm:p-9 transition-all duration-500 ease-out-quint hover:-translate-y-1 hover:border-brass-300/60 hover:shadow-structural-lg sm:p-10"
            >
              {/* Decorative number */}
              <span className="absolute right-7 top-7 font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-400">
                / {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon block */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-brass-300/40 bg-brass-50 text-brass-500 transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
                <IconRenderer name={service.icon} className="h-7 w-7" />
              </div>

              {/* Title + summary */}
              <h3 className="text-display-xs font-display font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ink-500 leading-relaxed">
                {service.summary}
              </p>

              {/* Features list */}
              <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-7">
                {service.deepDiveFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass-50 text-brass-500">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Footer metadata */}
              <div className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
                <div>
                  <p className="numeric-mark text-ink-400">Timeline</p>
                  <p className="mt-1 font-semibold text-ink">
                    {service.averageTimeline}
                  </p>
                </div>
                <div>
                  <p className="numeric-mark text-ink-400">Min. Budget</p>
                  <p className="mt-1 font-semibold text-ink">
                    {service.minBudget}
                  </p>
                </div>
                <div className="col-span-2 mt-2">
                  <p className="text-[0.7rem] italic text-ink-500">
                    {service.engineeringStandards}
                  </p>
                </div>
              </div>

              {/* Hover brass gradient ring */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-brass-300/40"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
