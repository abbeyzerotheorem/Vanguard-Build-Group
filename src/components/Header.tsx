"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { constructionConfig } from "@/data/construction";
import { cn } from "@/lib/utils";

const SECTION_IDS = [
  "services",
  "portfolio",
  "milestones",
  "trust",
  "testimonials",
  "faq",
  "about",
];

export default function Header() {
  const { brand, contact, navigation } = constructionConfig;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio as number) - (a.intersectionRatio as number),
          )[0];
        if (visible) {
          setActiveSection((visible.target as HTMLElement).id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.5, 0.9] },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-quint",
          scrolled
            ? "border-b border-border bg-paper/85 backdrop-blur-xl py-2"
            : "border-b border-transparent bg-transparent py-4 lg:py-5",
        )}
      >
        <div className="container-site flex items-center justify-between gap-6">
          {/* Brand mark */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5"
            aria-label={`${brand.name} home`}
          >
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-md border transition-all duration-300",
                scrolled
                  ? "border-ink bg-ink text-bone-50"
                  : "border-bone-50/30 bg-bone-50/10 text-bone-50 group-hover:border-brass-300 group-hover:bg-brass-500",
              )}
            >
              <span className="font-display text-base font-black leading-none">
                V
              </span>
            </span>
            <span
              className={cn(
                "flex flex-col leading-none transition-colors duration-300",
                scrolled ? "text-ink" : "text-bone-50",
              )}
            >
              <span className="font-display text-base font-bold tracking-tight">
                Vanguard
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
                  scrolled ? "text-brass-500" : "text-brass-300",
                )}
              >
                Build Group
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
            {navigation.primary.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    scrolled
                      ? isActive
                        ? "text-ink"
                        : "text-ink-500 hover:text-ink"
                      : isActive
                        ? "text-bone-50"
                        : "text-bone-50/75 hover:text-bone-50",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brass-400 transition-all duration-300",
                      isActive ? "w-6" : "w-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                scrolled
                  ? "text-ink-700 hover:text-brass-500"
                  : "text-bone-50/80 hover:text-bone-50",
              )}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {contact.phone}
            </a>
            <a
              href="#estimate"
              className="btn-brass group text-sm"
              aria-label="Request an estimate"
            >
              Request Estimate
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "lg:hidden flex h-11 w-11 items-center justify-center rounded-full border transition-all",
              scrolled
                ? "border-ink/15 bg-paper text-ink hover:border-ink"
                : "border-bone-50/30 bg-bone-50/10 text-bone-50 hover:bg-bone-50 hover:text-ink",
            )}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-paper shadow-structural-xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-display text-base font-bold text-ink">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink hover:border-ink"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <nav
                className="flex-1 overflow-y-auto px-2 py-4"
                aria-label="Mobile primary"
              >
                <ul className="space-y-1">
                  {navigation.primary.map((link, idx) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-bone-100"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          className="h-4 w-4 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="px-4 text-[0.65rem] font-semibold uppercase tracking-widest text-ink-400">
                    More
                  </p>
                  <ul className="mt-2 space-y-1">
                    {navigation.utility.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-ink-500 hover:bg-bone-100 hover:text-ink"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="border-t border-border p-4 space-y-3">
                <a href="#estimate" onClick={() => setOpen(false)} className="btn-brass w-full">
                  Request Estimate
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-ink"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {contact.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
