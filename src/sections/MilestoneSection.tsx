import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import MilestoneTracker from '@/components/MilestoneTracker';

export default function MilestoneSection() {
  const { milestones } = constructionConfig;

  return (
    <section
      id="milestones"
      aria-label="Project milestones"
      className="section-padding bg-background"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Your Project Journey</h2>
          <p className="section-subtitle mx-auto">
            Every Vanguard project follows a proven, transparent milestone
            framework — from initial site analysis through to your final walkthrough.
          </p>
        </div>

        {/* Milestone Tracker */}
        <MilestoneTracker milestones={milestones} />
      </div>
    </section>
  );
}
