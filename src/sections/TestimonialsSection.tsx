import { constructionConfig } from "@/data/construction";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function TestimonialsSection() {
  const { testimonials } = constructionConfig;

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center sm:mb-16">
            <p className="eyebrow justify-center">/ 08 — Reputation</p>
            <h2 className="mt-3 section-title text-balance">
              What our clients say
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-base text-ink-500">
              Real words from the homeowners, developers, and institutions who
              trust us with their most important structures.
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
