'use client';

import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={cn(
            'text-base',
            star <= rating ? 'text-amber-400' : 'text-zinc-200'
          )}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 ring-2 ring-white">
      {initials}
    </div>
  );
}

export default function TestimonialsCarousel({
  testimonials,
  className,
}: TestimonialsCarouselProps) {
  return (
    <div className={cn('', className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-amber-200 hover:shadow-md"
          >
            {/* Rating */}
            <RatingStars rating={item.rating} />

            {/* Quote */}
            <blockquote className="mt-4 flex-1">
              <p className="text-sm leading-relaxed text-zinc-600 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author / Project Info */}
            <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4">
              <Avatar initials={item.avatarInitials} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-zinc-900">
                  {item.clientName}
                </p>
                <p className="text-xs text-zinc-500">
                  {item.role} &middot; {item.projectName}
                </p>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1">
                <span className="font-medium text-zinc-700">Budget:</span>{' '}
                {item.projectBudget}
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="font-medium text-zinc-700">Timeline:</span>{' '}
                {item.projectTimeline}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
