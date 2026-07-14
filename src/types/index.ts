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
}
