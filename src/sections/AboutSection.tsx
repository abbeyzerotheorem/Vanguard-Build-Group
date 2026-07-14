import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import { ShieldCheck, Award, HardHat, FileCheck } from 'lucide-react';

export default function AboutSection() {
  const { team, brand } = constructionConfig;

  return (
    <section
      id="about"
      aria-label="About Vanguard Build Group"
      className="section-padding bg-white"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Built on Craftsmanship &amp; Integrity</h2>
          <p className="section-subtitle mx-auto">
            For over {brand.yearsInBusiness} years, Vanguard Build Group has stood
            as a pillar of structural excellence across South Africa — merging
            time-honoured craftsmanship with modern engineering precision.
          </p>
        </div>

        {/* Standards & Credentials Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-5 text-center">
            <ShieldCheck className="w-8 h-8 text-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-structural-slate">
              NHBRC Registered
            </span>
            <span className="text-xs text-structural-gray">{brand.licenseNumber}</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-5 text-center">
            <Award className="w-8 h-8 text-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-structural-slate">
              CIDB Grade 9GB/9CE
            </span>
            <span className="text-xs text-structural-gray">R130M Unlimited</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-5 text-center">
            <HardHat className="w-8 h-8 text-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-structural-slate">
              OHSAS 18001 Certified
            </span>
            <span className="text-xs text-structural-gray">Zero Fatal Incidents</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-5 text-center">
            <FileCheck className="w-8 h-8 text-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-structural-slate">
              ISO 9001:2015
            </span>
            <span className="text-xs text-structural-gray">Quality Management</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-12">
          <h3 className="text-display-xs font-display font-bold text-foreground text-center mb-10">
            Leadership &amp; Master Craftsmen
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member) => (
              <article
                key={member.id}
                className="card-hover overflow-hidden"
              >
                {/* Avatar */}
                <div className="aspect-container aspect-[4/3] bg-structural-slate/10">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h4 className="text-lg font-display font-bold text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm text-accent font-semibold mb-3">
                    {member.role}
                  </p>

                  {/* Credentials */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {member.credentials.map((cred) => (
                      <span key={cred} className="tag-pill text-[10px]">
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-structural-gray leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Green Building & Sustainability Note */}
        <div className="rounded-xl border border-border bg-background p-6 sm:p-8 text-center">
          <p className="text-sm sm:text-base text-structural-gray max-w-3xl mx-auto">
            <span className="font-semibold text-foreground">Sustainability Commitment:</span>{' '}
            Every Vanguard project incorporates passive energy design principles,
            water-efficient plumbing systems, and locally sourced materials wherever
            feasible. We are proud signatories of the Green Building Council South
            Africa&rsquo;s material stewardship pledge.
          </p>
        </div>
      </div>
    </section>
  );
}
