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

// Group 6 milestones into 3 macro phases
function groupIntoPhases(milestones: Milestone[]) {
  const phases = [
    { title: "Planning & Design", icon: "FileText", color: "brass" },
    { title: "Construction & Execution", icon: "HardHat", color: "ink" },
    { title: "Completion & Handover", icon: "Award", color: "brass" },
  ];

  const itemsPerPhase = Math.ceil(milestones.length / 3);
  return phases.map((phase, idx) => ({
    ...phase,
    milestones: milestones.slice(idx * itemsPerPhase, (idx + 1) * itemsPerPhase),
    phaseIndex: idx,
  }));
}

export default function MilestoneTracker({
  milestones,
  className,
}: MilestoneTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const phases = groupIntoPhases(milestones);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Vertical timeline */}
      <div className="relative pl-14 sm:pl-20">
        {/* Background rail */}
        <div
          className="absolute bottom-4 left-6 top-4 w-0.5 bg-border sm:left-9"
          aria-hidden="true"
        />
        {/* Animated progress line */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute left-6 top-4 w-0.5 origin-top bg-brass-500 sm:left-9"
            style={{ height: lineHeight }}
            aria-hidden="true"
          />
        )}

        <ol className="space-y-14">
          {phases.map((phase, phaseIdx) => (
            <li key={phase.title} className="relative">
              {/* Phase node */}
              <div className="absolute -left-14 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brass-400 bg-paper text-brass-500 shadow-soft sm:-left-20 sm:h-16 sm:w-16">
                <IconRenderer
                  name={phase.icon}
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>

              {/* Phase number */}
              <span className="absolute -left-[68px] top-4 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400 sm:-left-[96px]">
                / {String(phase.phaseIndex + 1).padStart(2, "0")}
              </span>

              {/* Phase header */}
              <div className="mb-6">
                <h3 className="text-display-xs font-display font-bold text-ink">
                  {phase.title}
                </h3>
              </div>

              {/* Sub-milestones within phase */}
              <div className="space-y-5">
                {phase.milestones.map((ms, msIdx) => (
                  <div
                    key={ms.id}
                    className="group rounded-2xl border border-border bg-paper p-5 sm:p-6 transition-all duration-300 hover:border-brass-300/40 hover:shadow-structural-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brass-50 text-brass-500 transition-colors group-hover:bg-brass-500 group-hover:text-bone-50">
                        <IconRenderer name={ms.icon} className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-widest text-ink-400">
                            Step {phase.phaseIndex * phase.milestones.length + msIdx + 1}
                          </span>
                          <span className="rounded-full border border-brass-300/40 bg-brass-50 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wider text-brass-600">
                            {ms.duration}
                          </span>
                        </div>
                        <h4 className="mt-1 font-display text-base font-semibold text-ink">
                          {ms.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-ink-500">
                          {ms.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phase connector arrow (not last) */}
              {phaseIdx < phases.length - 1 && (
                <div className="ml-5 mt-6 h-8 w-px bg-gradient-to-b from-brass-400/40 to-transparent sm:ml-8" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
