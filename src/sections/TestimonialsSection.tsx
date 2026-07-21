import { constructionConfig } from "@/data/construction";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function TestimonialsSection() {
  const { testimonials } = constructionConfig;

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="section-padding bg-bone-100/40"
    >
      <div className="container-site">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">/ 08 — Reputation</p>
            <h2 className="mt-3 section-title">What our clients say</h2>
          </div>
          <p className="max-w-md text-base text-ink-500">
            Real words from the homeowners, developers, and institutions who
            trust us with their most important structures.
          </p>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
