'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Badge from './Badge';
import type { FAQItem } from '@/types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

const categoryLabels: Record<string, string> = {
  legal: 'Legal',
  financial: 'Financial',
  process: 'Process',
  technical: 'Technical',
};

const categoryVariants: Record<string, 'default' | 'accent' | 'outline'> = {
  legal: 'outline',
  financial: 'accent',
  process: 'default',
  technical: 'outline',
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
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={cn('divide-y divide-zinc-200 rounded-xl border border-zinc-200', className)}>
      {faqs.map((faq) => {
        const isOpen = openIds.has(faq.id);

        return (
          <div key={faq.id}>
            <button
              type="button"
              onClick={() => toggleItem(faq.id)}
              className={cn(
                'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-zinc-50',
                isOpen && 'bg-zinc-50'
              )}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <span className="flex-1 text-sm font-medium text-zinc-900">
                {faq.question}
              </span>
              <div className="flex items-center gap-3">
                <Badge
                  variant={categoryVariants[faq.category] || 'default'}
                  className="hidden sm:inline-flex"
                >
                  {categoryLabels[faq.category] || faq.category}
                </Badge>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${faq.id}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {faq.answer}
                    </p>
                    <Badge
                      variant={categoryVariants[faq.category] || 'default'}
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
