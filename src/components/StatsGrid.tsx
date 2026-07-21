"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import type { StatMetric } from "@/types";

interface StatsGridProps {
  stats: StatMetric[];
  className?: string;
}

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(step);
      else setCount(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-ZA")}
      {suffix}
    </span>
  );
}

export default function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft sm:grid-cols-3 lg:grid-cols-6",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative flex flex-col items-center justify-center gap-2 bg-paper p-7 sm:p-8 transition-colors duration-300 hover:bg-bone-50"
        >
          <span className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-[2.75rem]">
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </span>
          <span className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-500 sm:text-xs">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
