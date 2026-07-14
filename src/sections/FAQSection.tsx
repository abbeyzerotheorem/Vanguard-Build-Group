import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import FAQAccordion from '@/components/FAQAccordion';

export default function FAQSection() {
  const { faqs } = constructionConfig;

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="section-padding bg-white"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about working with Vanguard Build Group —
            from budgeting and timelines to compliance and warranties.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
