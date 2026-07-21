import { ShieldCheck, Award, HardHat, FileCheck } from "lucide-react";
import { constructionConfig } from "@/data/construction";

const credentials = [
  { icon: ShieldCheck, label: "NHBRC Registered", meta: "BG-100527-2021" },
  { icon: Award, label: "CIDB Grade 9GB/9CE", meta: "R130M Unlimited" },
  { icon: HardHat, label: "OHSAS 18001 Certified", meta: "Zero Fatal Incidents" },
  { icon: FileCheck, label: "ISO 9001:2015", meta: "Quality Management" },
];

export default function AboutSection() {
  const { team, brand } = constructionConfig;

  return (
    <section
      id="about"
      aria-label="About Vanguard Build Group"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 sm:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">/ 05 — Practice</p>
            <h2 className="mt-3 text-display-md sm:text-display-lg font-display font-bold text-ink text-balance">
              Built on craftsmanship &amp; integrity
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-ink-500 text-pretty">
              For over {brand.yearsInBusiness} years, Vanguard Build Group has
              stood as a pillar of structural excellence across South Africa —
              merging time-honoured craftsmanship with modern engineering
              precision.
            </p>
          </div>
        </div>

        {/* Credentials bar */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft sm:grid-cols-4">
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.label}
                className="flex flex-col items-center gap-2 bg-paper p-5 sm:p-6 text-center transition-colors hover:bg-bone-50"
              >
                <Icon
                  className="h-7 w-7 text-brass-500"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-semibold text-ink">
                  {c.label}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-500">
                  {c.meta}
                </span>
              </div>
            );
          })}
        </div>

        {/* Team */}
        <div className="mb-14">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h3 className="text-display-xs sm:text-display-sm font-display font-bold text-ink">
              Leadership &amp; master craftsmen
            </h3>
            <p className="hidden text-sm text-ink-500 sm:block">
              {team.length} directors &middot; 50+ specialists
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <article
                key={member.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-paper transition-all duration-500 ease-out-quint hover:-translate-y-1 hover:border-brass-300/60 hover:shadow-structural-lg"
              >
                {/* Avatar / headshot */}
                <div className="team-avatar aspect-[4/5] bg-bone-100">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(14,17,22,0.65) 100%), url('${member.imageSrc}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={member.name}
                  />
                  <span className="absolute right-4 top-4 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-bone-50/90 drop-shadow-md">
                    / {String(idx + 1).padStart(2, "0")}
                  </span>
                  {/* Brass overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-brass-500/0 via-transparent to-transparent transition-all duration-500 group-hover:from-brass-500/20" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="font-display text-lg font-bold text-ink">
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold text-brass-500">
                    {member.role}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {member.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="tag-pill text-[0.6rem]"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-500">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sustainability */}
        <div className="relative overflow-hidden rounded-2xl border border-brass-300/40 bg-brass-50/60 p-7 sm:p-10">
          <span className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brass-300/30 blur-3xl" />
          <p className="relative text-sm sm:text-base text-ink-700 sm:max-w-3xl">
            <span className="font-display text-lg font-semibold text-ink">
              Sustainability commitment —
            </span>{" "}
            every Vanguard project incorporates passive energy design
            principles, water-efficient plumbing systems, and locally sourced
            materials wherever feasible. We are proud signatories of the Green
            Building Council South Africa&rsquo;s material stewardship pledge.
          </p>
        </div>
      </div>
    </section>
  );
}
