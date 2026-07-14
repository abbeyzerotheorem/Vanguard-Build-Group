import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import EstimateBuilder from '@/components/EstimateBuilder';

export default function EstimateSection() {
  const { brand } = constructionConfig;

  return (
    <section
      id="estimate"
      aria-label="Request an estimate"
      className="section-padding bg-structural-blue"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-display-xs sm:text-display-sm lg:text-display-md font-display font-bold text-white">
            Get Your Project Estimate
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-300">
            Tell us about your vision. We&rsquo;ll provide a detailed, line-item
            estimate within 48 hours — no obligation, no pressure.
          </p>
        </div>

        {/* Estimate Builder Component */}
        <div className="max-w-3xl mx-auto">
          <EstimateBuilder />
        </div>
      </div>
    </section>
  );
}
