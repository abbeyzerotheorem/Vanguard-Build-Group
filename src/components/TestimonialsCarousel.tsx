"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
  autoPlayInterval?: number;
}

function Avatar({ initials, imageSrc }: { initials: string; imageSrc?: string }) {
  if (imageSrc) {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-brass-400/50 shadow-structural-lg transition-all duration-300 hover:border-brass-500 hover:shadow-brass">
        <img
          src={imageSrc}
          alt={initials}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brass-300 to-brass-500 font-display text-sm font-bold text-bone-50 shadow-structural transition-all duration-300 hover:shadow-brass">
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel({
  testimonials,
  className,
  autoPlayInterval = 6000,
}: TestimonialsCarouselProps) {
  const [[activeIndex, direction], setActive] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      setActive(([current]) => {
        const next = (current + dir + total) % total;
        return [next, dir];
      });
    },
    [total],
  );

  // Autoplay
  useEffect(() => {
    if (isPaused || total < 2) return;
    const id = window.setInterval(() => go(1), autoPlayInterval);
    return () => window.clearInterval(id);
  }, [go, isPaused, total, autoPlayInterval]);

  // Pause on hover
  const onEnter = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -60 || info.velocity.x < -300) go(1);
    else if (info.offset.x > 60 || info.velocity.x > 300) go(-1);
  };

  const active = testimonials[activeIndex];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Stage */}
      <div className="relative mx-auto max-w-3xl overflow-hidden">
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <motion.figure
            key={active.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="relative flex flex-col gap-6 rounded-3xl border border-border bg-paper p-7 shadow-soft sm:p-10"
          >
            {/* Big quote glyph */}
            <span
              className="font-display text-7xl leading-none text-brass-300 sm:text-8xl"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Rating */}
            <div
              className="flex items-center gap-1"
              aria-label={`${active.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < active.rating
                      ? "fill-brass-400 text-brass-400"
                      : "text-border",
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="text-display-xs sm:text-display-sm font-display font-medium leading-snug text-ink text-balance">
              {active.quote}
            </blockquote>

            <figcaption className="mt-2 flex flex-wrap items-center gap-4 border-t border-border pt-6">
              <Avatar initials={active.avatarInitials} imageSrc={(active as any).imageSrc} />
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {active.clientName}
                </p>
                <p className="text-sm text-ink-500">
                  {active.role} &middot; {active.projectName}
                </p>
              </div>
              <div className="ml-auto flex flex-wrap items-center gap-4 text-xs text-ink-500 sm:gap-6 sm:text-sm">
                <span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400">
                    Budget
                  </span>
                  <br />
                  <span className="font-semibold text-ink">
                    {active.projectBudget}
                  </span>
                </span>
                <span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400">
                    Timeline
                  </span>
                  <br />
                  <span className="font-semibold text-ink">
                    {active.projectTimeline}
                  </span>
                </span>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-paper text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-bone-50 focus-visible:outline-2 focus-visible:outline-brass-500"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-paper text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-bone-50 focus-visible:outline-2 focus-visible:outline-brass-500"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(([, d]) => [i, i > activeIndex ? 1 : -1])}
              className="group h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 32 : 8,
                background: i === activeIndex ? "#B9872A" : "#E7DFCF",
              }}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>

        <p className="hidden font-mono text-xs text-ink-400 sm:block">
          {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
