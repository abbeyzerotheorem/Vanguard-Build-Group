"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "./IconRenderer";
import type { TrustCredential } from "@/types";

interface TrustVaultProps {
  credentials: TrustCredential[];
  className?: string;
}

export default function TrustVault({
  credentials,
  className,
}: TrustVaultProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {/* Marquee row 1 */}
      <div className="relative flex overflow-hidden py-4">
        <motion.div
          className="flex shrink-0 gap-6 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...credentials, ...credentials].map((cred, idx) => (
            <div
              key={`${cred.id}-${idx}`}
              className="group flex shrink-0 items-center gap-5 rounded-2xl border border-border bg-paper px-6 py-4 shadow-soft transition-all duration-300 hover:border-brass-300/50 hover:shadow-structural-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brass-300/30 bg-brass-50 text-brass-500 transition-colors group-hover:bg-brass-500 group-hover:text-bone-50">
                <IconRenderer name={cred.icon} className="h-5 w-5" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold text-ink">{cred.title}</p>
                <p className="text-xs text-ink-500">Issued by {cred.issuer}</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-md border border-border bg-bone-50 px-2.5 py-1.5">
                <span className="text-[0.55rem] font-semibold uppercase tracking-widest text-ink-400">
                  ID
                </span>
                <span className="font-mono text-[0.65rem] font-medium text-ink-700">
                  {cred.credentialId}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 (reverse for visual interest) */}
      <div className="relative flex overflow-hidden py-4">
        <motion.div
          className="flex shrink-0 gap-6 pr-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {[...credentials, ...credentials].map((cred, idx) => (
            <div
              key={`${cred.id}-rev-${idx}`}
              className="group flex shrink-0 items-center gap-5 rounded-2xl border border-border bg-paper px-6 py-4 shadow-soft transition-all duration-300 hover:border-brass-300/50 hover:shadow-structural-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brass-300/30 bg-brass-50 text-brass-500 transition-colors group-hover:bg-brass-500 group-hover:text-bone-50">
                <IconRenderer name={cred.icon} className="h-5 w-5" />
              </div>
              <div className="whitespace-nowrap">
                <p className="text-sm font-semibold text-ink">{cred.title}</p>
                <p className="text-xs text-ink-500">{cred.description.slice(0, 60)}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
