import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';
import TrustVault from '@/components/TrustVault';

export default function TrustVaultSection() {
  const { trustCredentials } = constructionConfig;

  return (
    <section
      id="trust"
      aria-label="Trust credentials and certifications"
      className="section-padding bg-white"
    >
      <div className="container-site">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Trust &amp; Credentials</h2>
          <p className="section-subtitle mx-auto">
            Every certification, accreditation, and insurance policy that backs
            our work — because trust is the foundation of every structure we build.
          </p>
        </div>

        {/* Trust Vault */}
        <TrustVault credentials={trustCredentials} />
      </div>
    </section>
  );
}
