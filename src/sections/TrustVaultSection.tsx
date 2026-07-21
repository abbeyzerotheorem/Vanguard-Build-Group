import { constructionConfig } from "@/data/construction";
import TrustVault from "@/components/TrustVault";

export default function TrustVaultSection() {
  const { trustCredentials } = constructionConfig;

  return (
    <section
      id="trust"
      aria-label="Trust credentials and certifications"
      className="section-padding bg-paper"
    >
      <div className="container-site">
        <div className="mb-10 text-center sm:mb-14">
          <p className="eyebrow justify-center">/ 06 — Credentials</p>
          <h2 className="mt-3 section-title text-balance">Trust &amp; credentials</h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-ink-500">
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
