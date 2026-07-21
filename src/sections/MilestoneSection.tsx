import { constructionConfig } from "@/data/construction";
import MilestoneTracker from "@/components/MilestoneTracker";

export default function MilestoneSection() {
  const { milestones } = constructionConfig;

  return (
    <section
      id="milestones"
      aria-label="Project milestones"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">/ 07 — Process</p>
            <h2 className="mt-3 section-title">Your project journey</h2>
          </div>
          <p className="max-w-md text-base text-ink-500">
            Every Vanguard project follows a proven, transparent milestone
            framework — from initial site analysis through to your final
            walkthrough.
          </p>
        </div>

        <MilestoneTracker milestones={milestones} />
      </div>
    </section>
  );
}
