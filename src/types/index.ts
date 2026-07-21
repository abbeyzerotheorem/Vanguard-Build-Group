// ─── Brand & Metadata ───────────────────────────────────────────────
export interface BrandMetadata {
  name: string;
  tagline: string;
  shortDescription: string;
  licenseNumber: string;
  insuranceCoverValue: string;
  insuranceProvider: string;
  workersCompPolicy: string;
  oshaCertified: boolean;
  nhbrcRegistered: boolean;
  yearsInBusiness: number;
  headquarters: string;
  coverageRegions: string[];
}

// ─── Contact & Locations ────────────────────────────────────────────
export interface ContactInfo {
  phone: string;
  email: string;
  emergencyDispatch: string;
  headquartersAddress: Address;
  regionalOffices: Address[];
  coordinates: { lat: number; lng: number };
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  label: string;
}

// ─── Services ───────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  icon: string;
  summary: string;
  deepDiveFeatures: string[];
  averageTimeline: string;
  engineeringStandards: string;
  minBudget: string;
}

// ─── Portfolio ──────────────────────────────────────────────────────
export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Institutional";
  completedYear: number;
  testimonialExcerpt: string;
  clientName: string;
  imageBefore: string;
  imageAfter: string;
  tags: string[];
  budgetRange: string;
  timelineMonths: number;
}

// ─── Team ───────────────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  imageSrc: string;
}

// ─── Stats ──────────────────────────────────────────────────────────
export interface StatMetric {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

// ─── FAQ ────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "legal" | "financial" | "process" | "technical";
}

// ─── Testimonial ────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  clientName: string;
  projectName: string;
  role: string;
  quote: string;
  rating: number;
  projectBudget: string;
  projectTimeline: string;
  avatarInitials: string;
}

// ─── Milestone ──────────────────────────────────────────────────────
export interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

// ─── PromotionalState ───────────────────────────────────────────────
export interface PromotionalState {
  bannerVisible: boolean;
  bannerMessage: string;
  safetyMilestoneCounters: StatMetric[];
}

// ─── Navigation ─────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  primary: NavLink[];
  utility: NavLink[];
}

// ─── Estimate Builder ───────────────────────────────────────────────
export type ProjectTypeValue =
  | "residential"
  | "commercial"
  | "institutional"
  | "renovation"
  | "infrastructure";

export type ProjectSizeValue = "small" | "medium" | "large" | "xlarge";

export type BudgetValue =
  | "under500k"
  | "500k-2m"
  | "2m-10m"
  | "10m-50m"
  | "over50m";

export type TimelineValue =
  | "asap"
  | "1-3months"
  | "3-6months"
  | "6-12months"
  | "planning";

export interface SelectOption<T extends string = string> {
  value: T;
  label: string;
  description?: string;
}

export interface EstimateSelection {
  projectTypes: SelectOption<ProjectTypeValue>[];
  projectSizes: SelectOption<ProjectSizeValue>[];
  budgetRanges: SelectOption<BudgetValue>[];
  timelineOptions: SelectOption<TimelineValue>[];
}

export interface EstimateTier {
  id: string;
  label: string;
  min: number;
  max: number;
  // monthly duration estimate per scope
  months: { small: number; medium: number; large: number; xlarge: number };
}

// ─── Trust Credential ───────────────────────────────────────────────
export interface TrustCredential {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  icon: string;
  description: string;
}

// ─── Root Config ────────────────────────────────────────────────────
export interface ConstructionConfig {
  brand: BrandMetadata;
  contact: ContactInfo;
  services: Service[];
  portfolio: PortfolioItem[];
  team: TeamMember[];
  stats: StatMetric[];
  faqs: FAQItem[];
  testimonials: Testimonial[];
  milestones: Milestone[];
  trustCredentials: TrustCredential[];
  promotional: PromotionalState;
  socialLinks: {
    linkedin: string;
    facebook: string;
    instagram: string;
    houzz: string;
  };
  navigation: NavigationConfig;
  estimate: EstimateSelection;
  estimateTiers: EstimateTier[];
}
