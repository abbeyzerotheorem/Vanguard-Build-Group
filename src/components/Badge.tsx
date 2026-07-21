'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-bone-100 text-ink-700 ring-1 ring-inset ring-border hover:bg-bone-200 focus-visible:ring-brass-500',
        accent:
          'bg-brass-50 text-brass-600 ring-1 ring-inset ring-brass-300/50 hover:bg-brass-100 focus-visible:ring-brass-500',
        outline:
          'bg-transparent text-ink-500 ring-1 ring-inset ring-border-strong hover:bg-bone-100 hover:text-ink focus-visible:ring-brass-500',
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
