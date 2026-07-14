'use client';

import { cn } from '@/lib/utils';
import IconRenderer from './IconRenderer';
import type { TrustCredential } from '@/types';

interface TrustVaultProps {
  credentials: TrustCredential[];
  className?: string;
}

export default function TrustVault({
  credentials,
  className,
}: TrustVaultProps) {
  return (
    <div className={cn('', className)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {credentials.map((cred) => (
          <div
            key={cred.id}
            className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-amber-200 hover:shadow-md"
          >
            {/* Premium accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />

            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                <IconRenderer name={cred.icon} className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-zinc-900">
                  {cred.title}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500">
                  Issued by {cred.issuer}
                </p>

                {/* Credential ID badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-50 px-2.5 py-1 ring-1 ring-inset ring-zinc-200">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                    ID:
                  </span>
                  <span className="text-xs font-mono font-medium text-zinc-700">
                    {cred.credentialId}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {cred.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
