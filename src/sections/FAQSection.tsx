import { constructionConfig } from "@/data/construction";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQSection() {
  const { faqs } = constructionConfig;

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">/ 09 — Knowledge</p>
            <h2 className="mt-3 section-title text-balance">
              Frequently asked questions
            </h2>
            <p className="mt-5 max-w-md text-base text-ink-500">
              Everything you need to know about working with Vanguard Build
              Group — from budgeting and timelines to compliance and
              warranties.
            </p>
            <a
              href="#estimate"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brass-500"
            >
              Still have questions? Request a consultation →
            </a>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
