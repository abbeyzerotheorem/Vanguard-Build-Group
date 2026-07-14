'use client';

import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import IconRenderer from '@/components/IconRenderer';

export default function CoreServices() {
  const { services } = constructionConfig;

  return (
    <section
      id="services"
      aria-label="Core services"
      className="section-padding bg-background"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Core Services</h2>
          <p className="section-subtitle mx-auto">
            Master-level construction services engineered to SANS 10400 standards
            with 10-year structural warranties on every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="card-hover flex flex-col p-6 sm:p-8"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5">
                <IconRenderer
                  name={service.icon}
                  className="w-7 h-7"
                />
              </div>

              {/* Title */}
              <h3 className="text-display-xs font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-structural-gray leading-relaxed mb-5">
                {service.summary}
              </p>

              {/* Features List */}
              <div className="mb-5 flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-structural-slate mb-3">
                  Scope &amp; Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {service.deepDiveFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-structural-gray">
                      <span
                        className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta Info */}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-structural-slate font-medium">Timeline</span>
                  <span className="text-foreground font-semibold">
                    {service.averageTimeline}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-structural-slate font-medium">Min. Budget</span>
                  <span className="text-foreground font-semibold">
                    {service.minBudget}
                  </span>
                </div>
                <div className="pt-2">
                  <span className="text-xs text-structural-gray italic">
                    {service.engineeringStandards}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
