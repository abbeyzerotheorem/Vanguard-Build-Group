"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { constructionConfig } from "@/data/construction";

export default function SafetyBanner() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (
    !mounted ||
    !visible ||
    !constructionConfig.promotional.bannerVisible
  ) {
    return null;
  }

  const { bannerMessage } = constructionConfig.promotional;
  // Duplicate for seamless marquee loop
  const marqueeText = `${bannerMessage}  •  ${bannerMessage}  •  `;

  return (
    <div
      role="banner"
      aria-label="Licensing and credentials notice"
      className="relative z-30 overflow-hidden border-b border-bone-50/10 bg-ink text-bone-50"
    >
      <div className="flex items-center">
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent" />
          <div className="flex w-max animate-marquee whitespace-nowrap py-2.5 will-change-transform">
            <span className="px-6 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-50/75">
              {marqueeText}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-bone-50/70 transition-colors hover:text-brass-300"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
