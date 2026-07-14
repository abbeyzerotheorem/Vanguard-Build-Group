'use client';

import { useRef, useState, useCallback, type MouseEvent, type TouchEvent } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  imageBefore: string;
  imageAfter: string;
  title?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  imageBefore,
  imageAfter,
  title,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(100, x));
    setSliderPos(x);
  }, []);

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className={cn('w-full', className)}>
      {title && (
        <h3 className="mb-3 text-lg font-semibold text-zinc-900">{title}</h3>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            setSliderPos((prev) => Math.min(100, prev + 2));
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            setSliderPos((prev) => Math.max(0, prev - 2));
          }
        }}
      >
        {/* After image (base layer) */}
        <img
          src={imageAfter}
          alt="After"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped layer) */}
        <div
          className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={imageBefore}
            alt="Before"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ width: `${100 / (sliderPos / 100)}%` }}
            draggable={false}
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize bg-white shadow-md"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-amber-600 shadow-lg transition-transform active:scale-95">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white">
          Before
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white">
          After
        </span>
      </div>
    </div>
  );
}
