import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import StatsGrid from '@/components/StatsGrid';

export default function MetricsBoard() {
  const { stats, promotional } = constructionConfig;

  const allStats = [...stats, ...promotional.safetyMilestoneCounters];

  return (
    <section
      id="metrics"
      aria-label="Company metrics"
      className="section-padding bg-background"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">By the Numbers</h2>
          <p className="section-subtitle mx-auto">
            Over two decades of structural mastery, delivered across every major
            province in South Africa.
          </p>
        </div>

        {/* Stats Grid */}
        <StatsGrid stats={allStats} />
      </div>
    </section>
  );
}
