'use client';

import { cn } from '@/lib/utils';
import IconRenderer from './IconRenderer';
import type { Milestone } from '@/types';

interface MilestoneTrackerProps {
  milestones: Milestone[];
  className?: string;
}

export default function MilestoneTracker({
  milestones,
  className,
}: MilestoneTrackerProps) {
  return (
    <div className={cn('', className)}>
      {/* Desktop: Horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative flex items-start justify-between">
          {/* Background connector line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-zinc-200" />

          <div className="relative flex w-full justify-between">
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="flex flex-col items-center text-center" style={{ flex: '1 1 0%' }}>
                {/* Icon circle */}
                <div
                  className={cn(
                    'relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 transition-colors',
                    idx === 0
                      ? 'border-amber-600 bg-amber-50 text-amber-700'
                      : 'border-zinc-300 bg-white text-zinc-500'
                  )}
                >
                  <IconRenderer name={milestone.icon} className="h-7 w-7" />
                  {/* Completion check */}
                  {idx === 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white">
                      ✓
                    </span>
                  )}
                </div>

                {/* Connector line after this node */}
                {idx < milestones.length - 1 && (
                  <div
                    className={cn(
                      'absolute top-8 h-0.5',
                      idx === 0 ? 'bg-amber-600' : 'bg-zinc-200'
                    )}
                    style={{
                      left: '50%',
                      width: '100%',
                      zIndex: 0,
                    }}
                  />
                )}

                {/* Content */}
                <div className="mt-4 px-2">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500">
                    {milestone.description}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                    {milestone.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-zinc-200" />

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="relative flex gap-6">
                {/* Icon circle */}
                <div
                  className={cn(
                    'relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                    idx === 0
                      ? 'border-amber-600 bg-amber-50 text-amber-700'
                      : 'border-zinc-300 bg-white text-zinc-500'
                  )}
                >
                  <IconRenderer name={milestone.icon} className="h-7 w-7" />
                  {idx === 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] text-white">
                      ✓
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-3">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {milestone.description}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                    {milestone.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
