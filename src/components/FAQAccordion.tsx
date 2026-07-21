"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  faqs: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

const categoryLabels: Record<string, string> = {
  legal: "Legal",
  financial: "Financial",
  process: "Process",
  technical: "Technical",
};

const categoryVariants: Record<string, "default" | "accent" | "outline"> = {
  legal: "outline",
  financial: "accent",
  process: "default",
  technical: "outline",
};

export default function FAQAccordion({
  faqs,
  allowMultiple = false,
  className,
}: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-paper shadow-soft",
        className,
      )}
    >
      {faqs.map((faq, idx) => {
        const isOpen = openIds.has(faq.id);
        return (
          <div
            key={faq.id}
            className={cn(
              "border-b border-border last:border-b-0",
              isOpen && "bg-bone-50/40",
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(faq.id)}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-bone-50 focus-visible:outline-2 focus-visible:outline-brass-500 focus-visible:outline-offset-[-2px] focus-visible:rounded-none sm:px-7 sm:py-6"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <div className="flex flex-1 items-start gap-4">
                <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400 sm:mt-1">
                  / {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                    {faq.question}
                  </h3>
                  <Badge
                    variant={categoryVariants[faq.category] || "default"}
                    className="mt-2 hidden sm:inline-flex"
                  >
                    {categoryLabels[faq.category] || faq.category}
                  </Badge>
                </div>
              </div>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-45 border-ink bg-ink text-bone-50"
                    : "border-border text-ink-500 group-hover:border-ink",
                )}
                aria-hidden="true"
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${faq.id}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 pl-12 sm:px-7 sm:pl-16">
                    <p className="max-w-prose text-sm leading-relaxed text-ink-500 sm:text-base">
                      {faq.answer}
                    </p>
                    <Badge
                      variant={categoryVariants[faq.category] || "default"}
                      className="mt-3 sm:hidden"
                    >
                      {categoryLabels[faq.category] || faq.category}
                    </Badge>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
