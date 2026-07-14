'use client';

import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';

export default function SafetyBanner() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !visible || !constructionConfig.promotional.bannerVisible) {
    return null;
  }

  const { bannerMessage } = constructionConfig.promotional;

  return (
    <div
      role="banner"
      aria-label="Licensing and credentials notice"
      className="relative bg-structural-blue text-white"
    >
      {/* Mobile: scrollable text container */}
      <div className="flex items-center lg:justify-center overflow-hidden">
        <div
          ref={scrollRef}
          className="flex-1 overflow-x-auto whitespace-nowrap py-2 px-4 scrollbar-hide lg:overflow-visible lg:whitespace-normal lg:text-center lg:px-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <span className="inline-block text-xs sm:text-sm font-body font-medium tracking-wide">
            {bannerMessage}
          </span>
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 text-white/80 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
