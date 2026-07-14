'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-zinc-100 text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-200 focus-visible:ring-zinc-500',
        accent:
          'bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-300 hover:bg-amber-100 focus-visible:ring-amber-500',
        outline:
          'bg-transparent text-zinc-700 ring-1 ring-inset ring-zinc-400 hover:bg-zinc-50 focus-visible:ring-zinc-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
