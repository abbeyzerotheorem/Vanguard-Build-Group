import { constructionConfig } from "@/data/construction";
import StatsGrid from "@/components/StatsGrid";

export default function MetricsBoard() {
  const { stats, promotional } = constructionConfig;

  // Deduplicate by label — promotional counters overlap with stats
  const seen = new Set<string>();
  const allStats = [...stats, ...promotional.safetyMilestoneCounters].filter(
    (s) => {
      if (seen.has(s.label)) return false;
      seen.add(s.label);
      return true;
    },
  );

  return (
    <section
      id="metrics"
      aria-label="Company metrics"
      className="section-padding-sm bg-bone-50"
    >
      <div className="container-site">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">/ 02 — Proof</p>
            <h2 className="mt-3 text-display-md sm:text-display-lg font-display font-bold text-ink">
              By the numbers
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-ink-500">
            Two decades of structural mastery, delivered across every major
            province in South Africa.
          </p>
        </div>

        <StatsGrid stats={allStats} />
      </div>
    </section>
  );
}
