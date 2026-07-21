"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "./IconRenderer";
import type { TrustCredential } from "@/types";

interface TrustVaultProps {
  credentials: TrustCredential[];
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export default function TrustVault({
  credentials,
  className,
}: TrustVaultProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={containerVariants}
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {credentials.map((cred) => (
        <motion.article
          key={cred.id}
          variants={cardVariants}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper p-7 transition-all duration-500 ease-out-quint hover:-translate-y-1 hover:border-brass-300/60 hover:shadow-structural-lg"
        >
          {/* Hairline top accent */}
          <span
            className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-brass-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brass-300/40 bg-brass-50 text-brass-500">
              <IconRenderer name={cred.icon} className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                {cred.title}
              </h3>
              <p className="mt-0.5 text-sm text-ink-500">Issued by {cred.issuer}</p>
            </div>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 self-start rounded-md border border-border bg-bone-50 px-2.5 py-1.5 font-mono text-[0.7rem] text-ink-700">
            <span className="text-[0.6rem] font-medium uppercase tracking-widest text-ink-400">
              ID
            </span>
            <span className="font-medium">{cred.credentialId}</span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-ink-500">
            {cred.description}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
