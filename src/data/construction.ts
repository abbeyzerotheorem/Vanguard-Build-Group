import type { ConstructionConfig } from "@/types";

export const constructionConfig: ConstructionConfig = {
  // ─── Brand Metadata ───────────────────────────────────────────────
  brand: {
    name: "Vanguard Build Group",
    tagline: "Building the Future. Restoring the Past.",
    shortDescription:
      "Premier residential and commercial construction group delivering masterfully engineered structures across South Africa. From luxury custom homes to large-scale commercial developments, we bring architectural visions to life with unwavering structural integrity and craftsmanship.",
    licenseNumber: "NHBRC REG: BG-100527-2021",
    insuranceCoverValue: "R50,000,000",
    insuranceProvider: "Old Mutual Insure | Construction All-Risk Policy #POL-87421-CR",
    workersCompPolicy: "Compensation Fund #WCA-4432-2025",
    oshaCertified: true,
    nhbrcRegistered: true,
    yearsInBusiness: 26,
    headquarters: "Johannesburg, Gauteng",
    coverageRegions: [
      "Gauteng",
      "Western Cape",
      "KwaZulu-Natal",
      "Eastern Cape",
      "Mpumalanga",
    ],
  },

  // ─── Contact & Locations ──────────────────────────────────────────
  contact: {
    phone: "010 592 7834",
    email: "projects@vanguardbuild.co.za",
    emergencyDispatch: "082 441 9987",
    headquartersAddress: {
      street: "127 Rivonia Road, Sandton",
      city: "Johannesburg",
      state: "Gauteng",
      zip: "2196",
      label: "Head Office",
    },
    regionalOffices: [
      {
        street: "15 Bree Street, Foreshore",
        city: "Cape Town",
        state: "Western Cape",
        zip: "8001",
        label: "Western Cape Regional Office",
      },
      {
        street: "88 Mahatma Gandhi Road, Point",
        city: "Durban",
        state: "KwaZulu-Natal",
        zip: "4001",
        label: "KZN Regional Office",
      },
    ],
    coordinates: { lat: -26.1076, lng: 28.0567 },
  },

  // ─── Services ─────────────────────────────────────────────────────
  services: [
    {
      id: "custom-home-builds",
      title: "Custom Home Builds",
      icon: "Home",
      summary:
        "Bespoke residential construction from architectural concept through final handover. Every square metre built to SANS 10400 structural code compliance with a 10-year latent defects warranty.",
      deepDiveFeatures: [
        "Architectural design & structural engineering coordination",
        "Full building plan approval & permit management",
        "Reinforced concrete & steel frame superstructures",
        "Premium interior fit-out: joinery, stone, glazing, wet services",
        "Landscaping & boundary wall construction",
        "Smart home pre-wiring & automation infrastructure",
      ],
      averageTimeline: "8 – 16 months",
      engineeringStandards: "SANS 10400, NHBRC Home Building Manual, SABS 1200",
      minBudget: "R1,500,000",
    },
    {
      id: "structural-renovations",
      title: "Structural Renovations",
      icon: "Building2",
      summary:
        "Major structural alterations, heritage restorations, and vertical extensions engineered to integrate seamlessly with existing fabric while upgrading to current safety standards.",
      deepDiveFeatures: [
        "Structural load assessment & foundation reinforcement",
        "Vertical & horizontal extensions with match-existing finishes",
        "Heritage restoration compliant with NHRC guidelines",
        "Roof replacement & structural steel installations",
        "Underpinning & basement excavation",
        "Waterproofing & damp remediation systems",
      ],
      averageTimeline: "4 – 10 months",
      engineeringStandards: "SANS 10400 Part B (Structural Design), NHBRC retrofit code",
      minBudget: "R450,000",
    },
    {
      id: "commercial-contracting",
      title: "Commercial Contracting",
      icon: "Warehouse",
      summary:
        "End-to-end commercial construction for office parks, retail centres, mixed-use developments, and industrial facilities. Proven delivery within budget for private and public sector clients.",
      deepDiveFeatures: [
        "Greenfield commercial development & site preparation",
        "Steel portal frame & reinforced concrete structures",
        "Retail fit-outs: shopping centres, showrooms, restaurants",
        "Office precincts: A-grade finishes, HVAC, access control",
        "Industrial warehouses: mezzanine floors, dock levellers",
        "Public sector: schools, clinics, community centres",
      ],
      averageTimeline: "10 – 24 months",
      engineeringStandards: "SANS 10400, CIDB Grading 7GB/7CE, ISO 9001:2015",
      minBudget: "R5,000,000",
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: "ClipboardCheck",
      summary:
        "Professional construction project management and owner's representation services. We protect your timeline, budget, and quality standards from feasibility through defect liability period.",
      deepDiveFeatures: [
        "Feasibility studies & budget estimation",
        "Tender documentation & contractor procurement",
        "Programme management: critical path & milestone tracking",
        "Quality assurance: site inspections & materials testing",
        "Contract administration: JBCC & NEC3 suite",
        "Occupancy certification & defect liability management",
      ],
      averageTimeline: "Project-dependent",
      engineeringStandards: "JBCC Principal Building Agreement, NEC3, CIDB best practice",
      minBudget: "R250,000 (fee-based)",
    },
  ],
  // ─── Portfolio ────────────────────────────────────────────────────
  portfolio: [
    {
      id: "sandton-penthouse",
      title: "Sandton Sky Residence",
      location: "Sandton, Gauteng",
      category: "Residential",
      completedYear: 2025,
      testimonialExcerpt:
        "Vanguard delivered our penthouse three weeks ahead of schedule and under budget. The attention to structural detail is extraordinary.",
      clientName: "Michael & Sarah Denoon",
      imageBefore: "/before.jpeg",
      imageAfter: "/after.jpeg",
      tags: ["Luxury Residence", "High-Rise", "Steel Frame", "Smart Home"],
      budgetRange: "R8.5M – R9.2M",
      timelineMonths: 14,
    },
    {
      id: "centurion-commercial-park",
      title: "Centurion Gate Office Park",
      location: "Centurion, Gauteng",
      category: "Commercial",
      completedYear: 2024,
      testimonialExcerpt:
        "A 12 000 m² precinct delivered in 17 months with zero safety incidents. Vanguard's project management is world-class.",
      clientName: "Atterbury Property Group",
      imageBefore: "/CenturionOfficePark.jpeg",
      imageAfter: "/CenturionOfficePark.jpeg",
      tags: ["Office Park", "Green Building", "Steel Frame", "5-Star Rating"],
      budgetRange: "R120M – R135M",
      timelineMonths: 17,
    },
    {
      id: "umhlanga-lifestyle-estate",
      title: "Umhlanga Ridge Estate Residence",
      location: "Umhlanga, KwaZulu-Natal",
      category: "Residential",
      completedYear: 2025,
      testimonialExcerpt:
        "Our coastal home required specialised salt-air corrosion protection. Vanguard engineered every specification with precision.",
      clientName: "David & Lisa Marais",
      imageBefore: "/UmhlangaRidge.jpeg",
      imageAfter: "/UmhlangaRidge.jpeg",
      tags: ["Coastal Residence", "Smart Home", "Reinforced Concrete", "Green Roof"],
      budgetRange: "R6.2M – R7.0M",
      timelineMonths: 12,
    },
    {
      id: "stirling-primary-school",
      title: "Stirling Primary School Campus",
      location: "East London, Eastern Cape",
      category: "Institutional",
      completedYear: 2023,
      testimonialExcerpt:
        "Vanguard built three new classroom blocks, a 600-seat hall, and sports facilities within a tight 11-month deadline.",
      clientName: "Stirling Primary School Board",
      imageBefore: "/stirling.jpeg",
      imageAfter: "/stirling.jpeg",
      tags: ["Education", "Community", "Steel Frame", "Multi-Phase"],
      budgetRange: "R45M – R52M",
      timelineMonths: 11,
    },
    {
      id: "waterkloof-heritage",
      title: "Waterkloof Heritage Villa",
      location: "Waterkloof, Pretoria",
      category: "Residential",
      completedYear: 2024,
      testimonialExcerpt:
        "Restoring a 1928 heritage property required specialist skills. Vanguard navigated SAHRA approvals and matched original craftsmanship.",
      clientName: "Dr. Pieter Venter",
      imageBefore: "/waterkloof.jpeg",
      imageAfter: "/waterkloof.jpeg",
      tags: ["Heritage", "Restoration", "Period Features", "Extension"],
      budgetRange: "R3.8M – R4.5M",
      timelineMonths: 10,
    },
    {
      id: "midrand-logistics-hub",
      title: "Midrand Logistics & Distribution Hub",
      location: "Midrand, Gauteng",
      category: "Commercial",
      completedYear: 2024,
      testimonialExcerpt:
        "A 22 000 m² distribution centre with 16-meter clear heights, delivered in 14 months. Vanguard's coordination was exceptional.",
      clientName: "Imperial Logistics",
      imageBefore: "/LogisticsDistribution.jpeg",
      imageAfter: "/LogisticsDistribution.jpeg",
      tags: ["Industrial", "Warehouse", "Steel Portal Frame", "Logistics"],
      budgetRange: "R95M – R108M",
      timelineMonths: 14,
    },
  ],
  // ─── Team ─────────────────────────────────────────────────────────
  team: [
    {
      id: "jd-van-der-merwe",
      name: "J.D. van der Merwe",
      role: "Founder & Managing Director",
      credentials: ["Pr.CM (SACPCMP)", "MBA (GIBS)", "CIDB 9GB/9CE"],
      bio: "Over 26 years leading flagship construction projects across Africa. J.D. founded Vanguard in 2000 with a single bakkie and a commitment to structural excellence.",
      imageSrc: "/Merwe.jpeg",
    },
    {
      id: "susan-khumalo",
      name: "Susan Khumalo",
      role: "Director of Operations",
      credentials: ["Pr.Eng (ECSA)", "M.Sc. Structural Eng (Wits)", "PMP"],
      bio: "Susan oversees all project delivery, quality assurance, and safety compliance. She has directed over 500 000 m² of completed commercial and residential construction.",
      imageSrc: "/susan.jpeg",
    },
    {
      id: "thabo-ntuli",
      name: "Abiodun Aina",
      role: "Commercial Director",
      credentials: ["B.Com (Hons) UCT", "MCIOB", "MBA (Cum Laude)"],
      bio: "Thabo leads commercial strategy, supply chain optimisation, and client contract management. He ensures every project achieves target margin without compromising quality.",
      imageSrc: "/aina.jpeg",
    },
    {
      id: "amanda-coetzee",
      name: "Amanda Coetzee",
      role: "Head of Design & Estimating",
      credentials: ["B.Arch (UP)", "SACAP Registered", "Green Star SA Accredited"],
      bio: "Amanda brings architectural precision to every estimate. Her detailed 3D-modelled quantity takeoffs have maintained Vanguard's 96% budget accuracy rate.",
      imageSrc: "/amanda.jpeg",
    },
  ],

  // ─── Stats ─────────────────────────────────────────────────────────
  stats: [
    { value: "150", label: "Projects Handed Over", suffix: "+" },
    { value: "0", label: "On-Site Injuries (3 Years)", prefix: "Zero " },
    { value: "26", label: "Years of Mastery", suffix: "+" },
    { value: "500000", label: "M\u00b2 Completed", suffix: " m\u00b2" },
    { value: "98", label: "Budget Accuracy Rate", suffix: "%" },
    { value: "92", label: "Repeat Client Rate", suffix: "%" },
  ],

  // ─── FAQ ──────────────────────────────────────────────────────────
  faqs: [
    {
      id: "insurance-coverage",
      question: "Are you fully insured for construction liability?",
      answer:
        "Absolutely. Vanguard Build Group carries R50 million in construction all-risk insurance through Old Mutual Insure (Policy #POL-87421-CR). This covers public liability, property damage, professional indemnity, and latent defects for a full 10-year period. Our workers' compensation policy (WCA-4432-2025) is fully compliant with the Compensation for Occupational Injuries and Diseases Act.",
      category: "legal",
    },
    {
      id: "building-permits",
      question: "How do you handle building permits and municipal approvals?",
      answer:
        "We manage the entire approval lifecycle. Our in-house team prepares and submits full building plan sets to the relevant municipality, liaises with structural engineers for SANS 10400 compliance certifications, and tracks permit progress. We factor permit lead times (typically 4\u20138 weeks) into every project programme.",
      category: "process",
    },
    {
      id: "payment-structure",
      question: "What is your typical payment structure?",
      answer:
        "We follow JBCC-compliant staged payment schedules aligned to physical progress milestones. A typical structure is: 10% deposit on contract signature, 15% on site establishment and foundation excavation, 25% on structural frame completion, 25% on roof and external envelope completion, 20% on internal fit-out and services, and 5% on practical completion and handover.",
      category: "financial",
    },
    {
      id: "timeline-accuracy",
      question: "How accurate are your project timeline estimates?",
      answer:
        "Our feasibility-phase estimates are \u00b115% accurate. Once detailed design and structural engineering are complete, our construction programme is \u00b15% accurate. We use MS Project critical-path scheduling with fortnightly progress reviews. Weather buffers are built into every programme (15% for structural works, 10% for finishes).",
      category: "process",
    },
    {
      id: "green-building",
      question: "Do you offer green building and sustainable construction options?",
      answer:
        "Yes. We are Green Star SA Accredited Professionals and offer a full sustainable construction suite: solar-ready structural provisions, rainwater harvesting integration, energy-efficient glazing and insulation specifications, recycled-content concrete and steel sourcing, and green roof and passive ventilation design.",
      category: "technical",
    },
    {
      id: "nhbrc-warranty",
      question: "What warranty do you provide on new home builds?",
      answer:
        "All new residential homes are enrolled with the National Home Builders Registration Council (NHBRC) and carry the statutory 5-year structural warranty. Additionally, we provide a Vanguard-backed 10-year latent defects warranty covering major structural elements including foundations, load-bearing walls, roof structures, and concrete slabs.",
      category: "legal",
    },
  ],

  // ─── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      id: "test-sandton",
      clientName: "Michael & Sarah Denoon",
      projectName: "Sandton Sky Residence",
      role: "Homeowners",
      quote:
        "Vanguard delivered our penthouse three weeks ahead of schedule and under budget. The attention to structural detail is extraordinary \u2014 every steel beam, every joinery line, flawless.",
      rating: 5,
      projectBudget: "R8.2M",
      projectTimeline: "14 months",
      avatarInitials: "MD",
    },
    {
      id: "test-atterbury",
      clientName: "Mark Patterson",
      projectName: "Centurion Gate Office Park",
      role: "Development Director, Atterbury Property Group",
      quote:
        "A 12 000 m\u00b2 precinct delivered in 17 months with zero safety incidents. Vanguard's project management infrastructure and site safety culture are world-class.",
      rating: 5,
      projectBudget: "R128M",
      projectTimeline: "17 months",
      avatarInitials: "MP",
    },
    {
      id: "test-stirling",
      clientName: "Elizabeth Ndlovu",
      projectName: "Stirling Primary School Campus",
      role: "School Principal",
      quote:
        "Building three new classroom blocks and a 600-seat hall while school was in session required extraordinary coordination. Vanguard's site separation and noise management were impeccable.",
      rating: 5,
      projectBudget: "R48M",
      projectTimeline: "11 months",
      avatarInitials: "EN",
    },
  ],

  // ─── Milestones ───────────────────────────────────────────────────
  milestones: [
    {
      id: "consultation",
      title: "Consultation & Feasibility",
      description:
        "Initial site assessment, client brief development, budget feasibility study, and preliminary structural review.",
      icon: "ClipboardList",
      duration: "1 \u2013 2 weeks",
    },
    {
      id: "3d-modeling",
      title: "3D Modeling & Design",
      description:
        "Architectural concept development, structural engineering coordination, 3D BIM modelling, and council submission pack preparation.",
      icon: "Ruler",
      duration: "4 \u2013 8 weeks",
    },
    {
      id: "permitting",
      title: "Permitting & Approvals",
      description:
        "Full building plan submission, municipal approvals, NHBRC enrolment, and statutory compliance certifications.",
      icon: "FileCheck",
      duration: "4 \u2013 10 weeks",
    },
    {
      id: "foundation",
      title: "Site Prep & Foundation",
      description:
        "Site establishment, geotechnical investigation, bulk earthworks, reinforced concrete foundation construction, and underground service installation.",
      icon: "HardHat",
      duration: "4 \u2013 8 weeks",
    },
    {
      id: "structural-build",
      title: "Structural Frame & Shell",
      description:
        "Steel or reinforced concrete superstructure erection, roofing, external cladding, glazing installation, and waterproofing.",
      icon: "Building2",
      duration: "8 \u2013 20 weeks",
    },
    {
      id: "fit-out",
      title: "Internal Fit-Out & Services",
      description:
        "Plumbing, electrical, HVAC, fire protection, ceilings, wall finishes, flooring, joinery, and smart home automation integration.",
      icon: "Wrench",
      duration: "8 \u2013 16 weeks",
    },
    {
      id: "handover",
      title: "Handover & Occupancy",
      description:
        "Final inspections, snag list resolution, occupancy certification, client training on building systems, and defect liability commencement.",
      icon: "CheckCircle2",
      duration: "2 \u2013 4 weeks",
    },
  ],

  // ─── Trust Credentials ────────────────────────────────────────────
  trustCredentials: [
    {
      id: "nhbrc-registration",
      title: "NHBRC Registered Builder",
      issuer: "National Home Builders Registration Council",
      credentialId: "BG-100527-2021",
      icon: "ShieldCheck",
      description:
        "Fully compliant with the Housing Consumers Protection Measures Act. All residential projects enrolled for statutory structural warranty.",
    },
    {
      id: "cidb-grading",
      title: "CIDB Grade 9GB / 9CE",
      issuer: "Construction Industry Development Board",
      credentialId: "CIDB-9GB-441782",
      icon: "Award",
      description:
        "Highest CIDB grading for general building and civil engineering works, authorised for projects up to R130 million unlimited.",
    },
    {
      id: "osha-certified",
      title: "OHSAS 18001 Certified",
      issuer: "Dept. of Employment & Labour",
      credentialId: "OHS-18001-2025-4432",
      icon: "HardHat",
      description:
        "Occupational health and safety management system certified. Zero fatal incidents in over 500 000 hours worked.",
    },
    {
      id: "iso-9001",
      title: "ISO 9001:2015 Quality Management",
      issuer: "SABS Certification",
      credentialId: "QMS-9001-87543",
      icon: "FileCheck",
      description:
        "Internationally certified quality management system ensuring consistent project delivery and continuous improvement protocols.",
    },
    {
      id: "insurance",
      title: "R50M Construction All-Risk Cover",
      issuer: "Old Mutual Insure",
      credentialId: "POL-87421-CR",
      icon: "Shield",
      description:
        "Comprehensive construction all-risk insurance including public liability, professional indemnity, and 10-year latent defects coverage.",
    },
    {
      id: "safcb",
      title: "Master Builders Association",
      issuer: "SA Federation of Civil Engineering Contractors",
      credentialId: "SAFCEC-MEM-22147",
      icon: "Award",
      description:
        "Active member in good standing with SAFCEC, adhering to the industry's highest ethical and quality standards.",
    },
  ],

  // ─── Social Links ─────────────────────────────────────────────────
  socialLinks: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    houzz: "#",
  },

  // ─── Promotional State ────────────────────────────────────────────
  promotional: {
    bannerVisible: true,
    bannerMessage:
      "NHBRC BG-100527-2021 | CIDB 9GB/9CE | R50M Insurance Cover | Serving Gauteng, Western Cape, KZN, Eastern Cape & Mpumalanga",
    safetyMilestoneCounters: [
      { value: "150", label: "Projects Handed Over", suffix: "+" },
      { value: "0", label: "On-Site Injuries (3 Years)", prefix: "Zero " },
      { value: "26", label: "Years of Mastery", suffix: "+" },
    ],
  },

  // ─── Navigation ─────────────────────────────────────────────────
  navigation: {
    primary: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#milestones" },
      { label: "Credentials", href: "#trust" },
      { label: "FAQ", href: "#faq" },
    ],
    utility: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#footer" },
    ],
  },

  // ─── Estimate Builder Selections ─────────────────────────────────
  estimate: {
    projectTypes: [
      {
        value: "residential",
        label: "Residential Construction",
        description: "Custom homes, estates, multi-unit developments",
      },
      {
        value: "commercial",
        label: "Commercial Construction",
        description: "Offices, retail, hospitality, mixed-use precincts",
      },
      {
        value: "institutional",
        label: "Institutional / Public",
        description: "Schools, clinics, civic facilities",
      },
      {
        value: "renovation",
        label: "Renovation & Remodeling",
        description: "Heritage restoration, vertical extensions, fit-outs",
      },
      {
        value: "infrastructure",
        label: "Infrastructure & Civil",
        description: "Warehousing, logistics, civil engineering works",
      },
    ],
    projectSizes: [
      { value: "small", label: "Small", description: "Under 500 m²" },
      { value: "medium", label: "Medium", description: "500 – 2 000 m²" },
      { value: "large", label: "Large", description: "2 000 – 10 000 m²" },
      { value: "xlarge", label: "Extra Large", description: "10 000 m² and up" },
    ],
    budgetRanges: [
      {
        value: "under500k",
        label: "Under R500,000",
        description: "Renovations & specialist scopes",
      },
      {
        value: "500k-2m",
        label: "R500,000 – R2M",
        description: "Boutique residential & small commercial",
      },
      {
        value: "2m-10m",
        label: "R2M – R10M",
        description: "Custom homes, fit-outs, mid-scale commercial",
      },
      {
        value: "10m-50m",
        label: "R10M – R50M",
        description: "Premium estates, office precincts",
      },
      {
        value: "over50m",
        label: "Over R50M",
        description: "Mixed-use, institutional, large industrial",
      },
    ],
    timelineOptions: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-3months", label: "1 – 3 months" },
      { value: "3-6months", label: "3 – 6 months" },
      { value: "6-12months", label: "6 – 12 months" },
      { value: "planning", label: "Still planning" },
    ],
  },

  // ─── Estimate Math Tiers ─────────────────────────────────────────
  // Each tier has a min/max rand envelope. The calculator picks a tier
  // from (project type × project size) and animates a live total.
  estimateTiers: [
    {
      id: "residential-small",
      label: "Boutique residential build",
      min: 1_500_000,
      max: 3_200_000,
      months: { small: 6, medium: 9, large: 12, xlarge: 16 },
    },
    {
      id: "residential-medium",
      label: "Custom family home",
      min: 3_500_000,
      max: 8_500_000,
      months: { small: 8, medium: 12, large: 16, xlarge: 22 },
    },
    {
      id: "residential-large",
      label: "Luxury estate or multi-residence",
      min: 9_000_000,
      max: 22_000_000,
      months: { small: 10, medium: 14, large: 18, xlarge: 24 },
    },
    {
      id: "commercial-small",
      label: "Commercial fit-out",
      min: 1_200_000,
      max: 4_500_000,
      months: { small: 4, medium: 7, large: 10, xlarge: 14 },
    },
    {
      id: "commercial-medium",
      label: "Office or retail precinct",
      min: 5_000_000,
      max: 28_000_000,
      months: { small: 6, medium: 10, large: 14, xlarge: 20 },
    },
    {
      id: "commercial-large",
      label: "Large commercial development",
      min: 30_000_000,
      max: 130_000_000,
      months: { small: 9, medium: 14, large: 20, xlarge: 28 },
    },
    {
      id: "institutional-small",
      label: "Boutique institutional facility",
      min: 4_000_000,
      max: 12_000_000,
      months: { small: 8, medium: 12, large: 16, xlarge: 20 },
    },
    {
      id: "institutional-large",
      label: "Major institutional project",
      min: 18_000_000,
      max: 75_000_000,
      months: { small: 10, medium: 14, large: 18, xlarge: 24 },
    },
    {
      id: "renovation-small",
      label: "Boutique renovation",
      min: 450_000,
      max: 1_500_000,
      months: { small: 3, medium: 5, large: 8, xlarge: 12 },
    },
    {
      id: "renovation-large",
      label: "Major structural renovation",
      min: 1_800_000,
      max: 6_500_000,
      months: { small: 5, medium: 8, large: 12, xlarge: 18 },
    },
    {
      id: "infrastructure-medium",
      label: "Industrial / civil works",
      min: 8_000_000,
      max: 45_000_000,
      months: { small: 6, medium: 10, large: 16, xlarge: 22 },
    },
    {
      id: "infrastructure-large",
      label: "Major infrastructure",
      min: 50_000_000,
      max: 180_000_000,
      months: { small: 10, medium: 16, large: 22, xlarge: 30 },
    },
  ],
};
