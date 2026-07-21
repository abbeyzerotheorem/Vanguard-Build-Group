"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { constructionConfig } from "@/data/construction";
import IconRenderer from "@/components/IconRenderer";
import { cn } from "@/lib/utils";

export default function CoreServices() {
  const { services } = constructionConfig;
  const [openId, setOpenId] = useState<string | null>(services[0]?.id ?? null);

  const toggleService = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      aria-label="Core services"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        {/* Sticky 2-column split layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Sticky section title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">/ 03 — Capabilities</p>
            <h2 className="mt-4 section-title text-balance">Core services</h2>
            <p className="mt-5 text-base sm:text-lg text-ink-600 leading-relaxed">
              Master-level construction services engineered to SANS 10400
              standards with 10-year structural warranties on every project.
            </p>
            <div className="mt-8 hidden lg:block">
              <a
                href="#estimate"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brass-500"
              >
                Start a project brief
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Active service indicator nav */}
            <div className="mt-10 hidden space-y-3 lg:block">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Currently viewing
              </p>
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={cn(
                    "block w-full text-left rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300",
                    openId === s.id
                      ? "border-brass-400 bg-brass-50 text-ink shadow-sm"
                      : "border-transparent text-ink-500 hover:border-border hover:text-ink",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-lg text-xs transition-colors",
                        openId === s.id
                          ? "bg-brass-500 text-bone-50"
                          : "bg-bone-100 text-ink-500",
                      )}
                    >
                      {String(services.indexOf(s) + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Right: Accordion-style service details */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {services.map((service, idx) => {
                const isOpen = openId === service.id;
                return (
                  <div
                    key={service.id}
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-500 ease-out-quint",
                      isOpen
                        ? "border-brass-300/60 bg-paper shadow-structural-lg"
                        : "border-border bg-paper/60 hover:border-brass-300/30",
                    )}
                  >
                    {/* Accordion trigger */}
                    <button
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className="flex w-full items-center gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brass-300/40 bg-brass-50 text-brass-500 transition-all duration-500">
                        <IconRenderer name={service.icon} className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[0.65rem] font-medium uppercase tracking-widest text-ink-400">
                            / {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-display-xs font-display font-bold text-ink truncate">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-ink-500 line-clamp-1">
                          {service.summary}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "rotate-45 border-ink bg-ink text-bone-50"
                            : "border-border text-ink-500",
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border px-6 pb-6 sm:px-8 sm:pb-8">
                            <p className="mt-5 text-sm sm:text-base text-ink-600 leading-relaxed">
                              {service.summary}
                            </p>

                            {/* Features */}
                            <ul className="mt-6 space-y-3">
                              {service.deepDiveFeatures.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-3 text-sm text-ink-700"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass-50 text-brass-500">
                                    <Check className="h-3 w-3" strokeWidth={3} />
                                  </span>
                                  <span className="leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Meta footer */}
                            <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-5 text-sm">
                              <div>
                                <span className="numeric-mark text-ink-400">Timeline</span>
                                <p className="mt-1 font-semibold text-ink">
                                  {service.averageTimeline}
                                </p>
                              </div>
                              <div>
                                <span className="numeric-mark text-ink-400">Min. Budget</span>
                                <p className="mt-1 font-semibold text-ink">
                                  {service.minBudget}
                                </p>
                              </div>
                              <div className="w-full">
                                <p className="text-[0.7rem] italic text-ink-500">
                                  {service.engineeringStandards}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
