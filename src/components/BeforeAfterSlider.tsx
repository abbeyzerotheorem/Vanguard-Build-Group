"use client";

import {
  useRef,
  useState,
  useCallback,
  type MouseEvent,
  type TouchEvent,
  type KeyboardEvent,
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const [loaded, setLoaded] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  }, []);

  const handlePointerDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition],
  );

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  const handleTouchStart = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition],
  );

  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  const handleKey = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setSliderPos((p) => Math.min(100, p + 2));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setSliderPos((p) => Math.max(0, p - 2));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  }, []);

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3 className="mb-3 font-display text-lg font-semibold text-ink">
          {title}
        </h3>
      )}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border bg-bone-100"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPos)}
        aria-valuetext={`${Math.round(sliderPos)}% revealing the after image`}
        tabIndex={0}
        onKeyDown={handleKey}
      >
        {/* Skeleton while loading */}
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-r from-bone-200 via-bone-100 to-bone-200"
            style={{ backgroundSize: "200% 100%" }}
            aria-hidden="true"
          />
        )}

        {/* After image (base layer) */}
        <img
          src={imageAfter}
          alt="After construction"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />

        {/* Before image (clipped layer) */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={imageBefore}
            alt="Before construction"
            className="pointer-events-none absolute inset-0 h-full object-cover"
            style={{ width: `${100 / (Math.max(sliderPos, 0.01) / 100)}%` }}
            draggable={false}
          />
        </div>

        {/* Slider handle */}
        <motion.div
          className="absolute top-0 bottom-0 z-10 w-0.5 -translate-x-1/2 bg-bone-50 shadow-structural"
          style={{ left: `${sliderPos}%` }}
          aria-hidden="true"
          animate={{ scale: isDragging ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div
            className={cn(
              "absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-bone-50 bg-brass-500 text-bone-50 shadow-brass transition-transform",
              isDragging ? "scale-95" : "hover:scale-105",
            )}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7l-4 5 4 5M16 7l4 5-4 5"
              />
            </svg>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-bone-50 backdrop-blur">
          Before
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-bone-50 backdrop-blur">
          After
        </div>
      </div>
    </div>
  );
}
