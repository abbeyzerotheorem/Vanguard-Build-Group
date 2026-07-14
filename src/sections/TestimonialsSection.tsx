import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function TestimonialsSection() {
  const { testimonials } = constructionConfig;

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="section-padding bg-background"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Real words from the homeowners, developers, and institutions who trust
            us with their most important structures.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
