'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
}: {
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  const target = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const duration = 1800;
    const steps = Math.min(target, 60);
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <AnimatedSection className={cn('', className)}>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-xl border border-border bg-white p-6 text-center shadow-card"
          >
            <span className="text-3xl font-bold text-accent md:text-4xl">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </span>
            <span className="mt-2 text-sm font-medium text-structural-gray">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
