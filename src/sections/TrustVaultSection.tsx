import { constructionConfig } from "@/data/construction";
import TrustVault from "@/components/TrustVault";

export default function TrustVaultSection() {
  const { trustCredentials } = constructionConfig;

  return (
    <section
      id="trust"
      aria-label="Trust credentials and certifications"
      className="section-padding bg-bone-100/40"
    >
      <div className="container-site">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">/ 06 — Credentials</p>
            <h2 className="mt-3 section-title">Trust &amp; credentials</h2>
          </div>
          <p className="max-w-md text-base text-ink-500">
            Every certification, accreditation, and insurance policy that backs
            our work — because trust is the foundation of every structure we
            build.
          </p>
        </div>

        <TrustVault credentials={trustCredentials} />
      </div>
    </section>
  );
}
