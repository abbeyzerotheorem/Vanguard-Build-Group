"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { constructionConfig } from "@/data/construction";
import { cn } from "@/lib/utils";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import type { PortfolioItem } from "@/types";

const categories = ["All", "Residential", "Commercial", "Institutional"] as const;
type Category = (typeof categories)[number];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

function ProjectCard({ item, layout }: { item: PortfolioItem; layout?: "wide" | "tall" | "square" }) {
  const aspectClass =
    layout === "wide" ? "aspect-[16/9]" : layout === "tall" ? "aspect-[4/5]" : "aspect-[4/3]";

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper transition-all duration-500 ease-out-quint hover:-translate-y-1 hover:border-brass-300/60 hover:shadow-structural-lg"
    >
      <div className={`aspect-container ${aspectClass} bg-bone-100`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(14,17,22,0) 40%, rgba(14,17,22,0.65) 100%), url('${item.imageAfter}')`,
          }}
          role="img"
          aria-label={item.title}
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-brass-500/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-bone-50 backdrop-blur">
            {item.category}
          </span>
          <span className="rounded-full border border-bone-50/30 bg-ink/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-bone-50 backdrop-blur">
            {item.completedYear}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bone-50 text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-base sm:text-lg font-bold text-ink">
          {item.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink-500">{item.location}</p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4 text-sm">
          <span className="text-ink-500">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">
              Budget
            </span>
            <br />
            <span className="font-semibold text-ink">{item.budgetRange}</span>
          </span>
          <span className="text-right text-ink-500">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">
              Timeline
            </span>
            <br />
            <span className="font-semibold text-ink">{item.timelineMonths} months</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function FeaturedCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 overflow-hidden rounded-3xl border border-border bg-paper shadow-structural-lg transition-all duration-500 hover:shadow-structural-xl lg:mb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Before/After slider — spans more columns for visual weight */}
        <div className="relative lg:col-span-7">
          <div className="aspect-[4/3] h-full lg:aspect-auto lg:min-h-[520px]">
            <BeforeAfterSlider
              imageBefore={item.imageBefore}
              imageAfter={item.imageAfter}
              title={item.title}
            />
          </div>
        </div>

        {/* Featured info panel — matches height exactly */}
        <div className="flex flex-col justify-center gap-5 p-7 sm:p-10 lg:col-span-5 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-brass-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-bone-50">
              Featured Project
            </span>
            <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400">
              / {item.completedYear}
            </span>
          </div>

          <div>
            <h3 className="text-display-xs sm:text-display-sm font-display font-bold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-ink-500">{item.location}</p>
          </div>

          <blockquote className="border-l-2 border-brass-400 pl-4 text-sm italic leading-relaxed text-ink-700">
            &ldquo;{item.testimonialExcerpt}&rdquo;
            <span className="mt-1 block text-xs font-semibold not-italic text-ink">
              — {item.clientName}
            </span>
          </blockquote>

          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-bone-50 px-2.5 py-1 text-[0.65rem] font-medium text-ink-500">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">Budget</p>
              <p className="mt-1 font-semibold text-ink">{item.budgetRange}</p>
            </div>
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-400">Timeline</p>
              <p className="mt-1 font-semibold text-ink">{item.timelineMonths} months</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const { portfolio } = constructionConfig;
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === "All") return portfolio;
    return portfolio.filter((item) => item.category === activeCategory);
  }, [activeCategory, portfolio]);

  const featured = filteredPortfolio[0];
  const rest = filteredPortfolio.slice(1);

  return (
    <section
      id="portfolio"
      aria-label="Portfolio showcase"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">/ 04 — Portfolio</p>
            <h2 className="mt-3 section-title">Selected works</h2>
            <p className="mt-4 text-base sm:text-lg text-ink-500">
              From conception to completion — explore the structures that
              define us.
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div
          className="mb-12 flex flex-wrap items-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "border-ink bg-ink text-bone-50 shadow-structural"
                    : "border-border bg-paper text-ink-500 hover:border-ink hover:text-ink",
                )}
                style={{ minHeight: 48 }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured item with before/after */}
        <AnimatePresence mode="wait">
          {featured ? (
            <FeaturedCard key={featured.id} item={featured} />
          ) : null}
        </AnimatePresence>

        {/* Rest of portfolio — clean 2-column asymmetrical masonry on desktop */}
        {rest.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
            >
              {/* Cohesive 2-column layout: first item spans full width as hero card, rest alternate */}
              {rest.map((item, idx) => {
                // First item is a wide hero card spanning both columns
                // Then items alternate: left-column square, right-column tall, etc.
                const isFirst = idx === 0;
                const isWide = isFirst;
                const isTall = !isFirst && idx % 3 === 0;
                const isSquare = !isFirst && idx % 3 === 1;
                // Every third item from the rest starts a new visual row
                return (
                  <div
                    key={item.id}
                    className={
                      isWide
                        ? "sm:col-span-2"
                        : ""
                    }
                  >
                    <ProjectCard
                      item={item}
                      layout={isWide ? "wide" : isTall ? "tall" : "square"}
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        ) : null}

        {/* Empty state */}
        {filteredPortfolio.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-ink-500">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}