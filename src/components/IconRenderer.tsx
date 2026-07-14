'use client';

import {
  Home,
  Building2,
  Warehouse,
  ClipboardCheck,
  Ruler,
  HardHat,
  Wrench,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Award,
  Shield,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Warehouse,
  ClipboardCheck,
  Ruler,
  HardHat,
  Wrench,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Award,
  Shield,
  ClipboardList,
};

export default function IconRenderer({
  name,
  className = 'w-5 h-5',
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] || Home;
  return <Icon className={className} aria-hidden="true" />;
}
