"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "./IconRenderer";
import type { Milestone } from "@/types";

interface MilestoneTrackerProps {
  milestones: Milestone[];
  className?: string;
}

export default function MilestoneTracker({
  milestones,
  className,
}: MilestoneTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll-driven line progress (desktop horizontal)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const desktopLineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Mobile (vertical) — use same progress scaled to the height
  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Desktop: horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Background rail */}
          <div
            className="absolute left-0 right-0 top-[34px] h-px bg-border"
            aria-hidden="true"
          />
          {/* Animated progress line */}
          {!prefersReducedMotion && (
            <motion.div
              className="absolute left-0 top-[34px] h-px origin-left bg-brass-500"
              style={{ width: desktopLineWidth }}
              aria-hidden="true"
            />
          )}

          <ol className="relative grid grid-cols-7 gap-2">
            {milestones.map((milestone, idx) => (
              <li
                key={milestone.id}
                className="relative flex flex-col items-center text-center"
              >
                {/* Index + node */}
                <span className="mb-3 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400">
                  / {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-border bg-paper text-ink-500 shadow-soft transition-all duration-500">
                  <IconRenderer name={milestone.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-sm font-semibold text-ink">
                  {milestone.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                  {milestone.description}
                </p>
                <span className="mt-3 inline-flex items-center rounded-full border border-brass-300/50 bg-brass-50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-brass-600">
                  {milestone.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile & tablet: vertical timeline */}
      <div className="lg:hidden">
        <div className="relative pl-12 sm:pl-16">
          {/* Background rail */}
          <div
            className="absolute bottom-2 left-5 top-2 w-px bg-border sm:left-7"
            aria-hidden="true"
          />
          {/* Animated progress line */}
          {!prefersReducedMotion && (
            <motion.div
              className="absolute left-5 top-2 w-px origin-top bg-brass-500 sm:left-7"
              style={{ height: mobileLineHeight }}
              aria-hidden="true"
            />
          )}

          <ol className="space-y-10">
            {milestones.map((milestone, idx) => (
              <li key={milestone.id} className="relative">
                <span className="absolute -left-12 top-1 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400 sm:-left-16">
                  / {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="absolute -left-[34px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-paper text-ink-500 shadow-soft sm:-left-[46px]">
                  <IconRenderer name={milestone.icon} className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {milestone.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  {milestone.description}
                </p>
                <span className="mt-2 inline-flex items-center rounded-full border border-brass-300/50 bg-brass-50 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-brass-600">
                  {milestone.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
