'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import type { PortfolioItem } from '@/types';

const categories = ['All', 'Residential', 'Commercial', 'Institutional'] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function PortfolioShowcase() {
  const { portfolio } = constructionConfig;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === 'All') return portfolio;
    return portfolio.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory, portfolio]);

  // Featured item (first in filtered list) gets the before/after slider
  const featured = filteredPortfolio[0];
  const rest = filteredPortfolio.slice(1);

  return (
    <section
      id="portfolio"
      aria-label="Portfolio showcase"
      className="section-padding bg-white"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle mx-auto">
            From conception to completion — explore the structures that define us.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
                'min-h-[48px] min-w-[48px]',
                activeCategory === cat
                  ? 'bg-accent text-white shadow-structural-lg'
                  : 'bg-background text-structural-slate border border-border hover:border-accent/50 hover:text-accent'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Item with Before/After Slider */}
        {featured && (
          <div className="mb-12">
            <div className="card-hover overflow-hidden rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Before/After Slider */}
                <div className="lg:col-span-3 relative min-h-[320px]">
                  <BeforeAfterSlider
                    imageBefore={featured.imageBefore}
                    imageAfter={featured.imageAfter}
                    title={featured.title}
                  />
                </div>

                {/* Featured Info Panel */}
                <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-center bg-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="tag-pill bg-accent/10 text-accent border-accent/20">
                      {featured.category}
                    </span>
                    <span className="tag-pill">{featured.completedYear}</span>
                  </div>

                  <h3 className="text-display-xs font-display font-bold text-foreground mb-2">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-structural-slate mb-4">
                    {featured.location}
                  </p>

                  <p className="text-sm text-structural-gray italic border-l-2 border-accent/40 pl-4 mb-4">
                    &ldquo;{featured.testimonialExcerpt}&rdquo;
                    <span className="block mt-1 not-italic text-xs font-semibold text-foreground">
                      — {featured.clientName}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
                    <span className="text-structural-slate">
                      <span className="font-semibold text-foreground">Budget:</span>{' '}
                      {featured.budgetRange}
                    </span>
                    <span className="text-structural-slate">
                      <span className="font-semibold text-foreground">Timeline:</span>{' '}
                      {featured.timelineMonths} months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Rest of Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="card-hover overflow-hidden group"
              >
                {/* Image Preview */}
                <div className="aspect-container aspect-[4/3] bg-structural-slate/10">
                  <img
                    src={item.imageAfter}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-structural-blue/0 group-hover:bg-structural-blue/20 transition-colors duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="tag-pill bg-accent/10 text-accent border-accent/20">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-structural-slate mb-3">{item.location}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="tag-pill text-[10px]">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="tag-pill text-[10px] text-structural-gray">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-16">
            <p className="text-structural-gray text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
