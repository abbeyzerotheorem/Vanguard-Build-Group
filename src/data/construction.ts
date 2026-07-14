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
      imageBefore: "/images/portfolio/sandton-before.jpg",
      imageAfter: "/images/portfolio/sandton-after.jpg",
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
      imageBefore: "/images/portfolio/centurion-before.jpg",
      imageAfter: "/images/portfolio/centurion-after.jpg",
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
      imageBefore: "/images/portfolio/umhlanga-before.jpg",
      imageAfter: "/images/portfolio/umhlanga-after.jpg",
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
      imageBefore: "/images/portfolio/stirling-before.jpg",
      imageAfter: "/images/portfolio/stirling-after.jpg",
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
      imageBefore: "/images/portfolio/waterkloof-before.jpg",
      imageAfter: "/images/portfolio/waterkloof-after.jpg",
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
      imageBefore: "/images/portfolio/midrand-before.jpg",
      imageAfter: "/images/portfolio/midrand-after.jpg",
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
      imageSrc: "/images/team/jd.jpg",
    },
    {
      id: "susan-khumalo",
      name: "Susan Khumalo",
      role: "Director of Operations",
      credentials: ["Pr.Eng (ECSA)", "M.Sc. Structural Eng (Wits)", "PMP"],
      bio: "Susan oversees all project delivery, quality assurance, and safety compliance. She has directed over 500 000 m² of completed commercial and residential construction.",
      imageSrc: "/images/team/susan.jpg",
    },
    {
      id: "thabo-ntuli",
      name: "Thabo Ntuli",
      role: "Commercial Director",
      credentials: ["B.Com (Hons) UCT", "MCIOB", "MBA (Cum Laude)"],
      bio: "Thabo leads commercial strategy, supply chain optimisation, and client contract management. He ensures every project achieves target margin without compromising quality.",
      imageSrc: "/images/team/thabo.jpg",
    },
    {
      id: "amanda-coetzee",
      name: "Amanda Coetzee",
      role: "Head of Design & Estimating",
      credentials: ["B.Arch (UP)", "SACAP Registered", "Green Star SA Accredited"],
      bio: "Amanda brings architectural precision to every estimate. Her detailed 3D-modelled quantity takeoffs have maintained Vanguard's 96% budget accuracy rate.",
      imageSrc: "/images/team/amanda.jpg",
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
    linkedin: "https://linkedin.com/company/vanguard-build-group",
    facebook: "https://facebook.com/vanguardbuildgroup",
    instagram: "https://instagram.com/vanguardbuildsa",
    houzz: "https://houzz.co.za/pro/vanguardbuildgroup",
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
};
