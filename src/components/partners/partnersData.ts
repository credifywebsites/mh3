/**
 * Content for the partner overview deck at /partners.
 *
 * Transcribed from CREDIFY_PARTNERS_SITE_08-10-26_0428PM-PDT_V3_SUPPORT.html.
 * Slide numbers match the PowerPoint deck: `slide` drives both the thumbnail
 * (/partners/thumbs/slide-N.jpg) and the lightbox image
 * (/partners/slides/slide-N.jpg), which were extracted from the same source.
 */

export type Capability = {
  /** Two-digit ordinal shown in the badge. */
  n: string;
  title: string;
  body: string;
};

export type PartnerModule = {
  id: string;
  /** Circle badge on the module band — a stage number, or "AI". */
  badge: string;
  eyebrow: string;
  title: string;
  /** Italic line on the right of the band. */
  sub: string;
  /** Deck slide this module screenshots. */
  slide: number;
  /** Alt text carried over from the source markup. */
  thumbAlt: string;
  /** Slug in `liveModules` — omitted for modules with no live preview. */
  liveSlug?: string;
  /** Shows the "In development" chip instead of a live CTA. */
  inDevelopment?: boolean;
  capabilities: Capability[];
};

/** The one module that renders a 3×3 capability grid instead of a screenshot. */
export type PartnerGridModule = {
  id: string;
  badge: string;
  eyebrow: string;
  title: string;
  sub: string;
  grid: Capability[];
};

export type PartnerStage = {
  id: string;
  label: string;
  title: string;
  blurb: string;
  modules: PartnerModule[];
  gridModule?: PartnerGridModule;
};

export const heroCopy = {
  watermark: "CREDIFY",
  titleLine1: "The Complete Operating System",
  titleLine2: "for Behavioral Health",
  lede: "From first referral to final payment — one platform for the full client journey.",
  meta: "Practice Partner Overview · 2026",
};

export const problemStats = [
  {
    stat: "4–7 Tools",
    body: "The average practice runs four or more disconnected platforms — EHR, billing, CRM, scheduling, email, and reporting.",
  },
  {
    stat: "5-10% of net revenue",
    body: "Unchallenged denials, aging claims, and unbilled sessions cost practices significant recoverable revenue monthly.",
  },
  {
    stat: "No Unified Record",
    body: "Client data fragments across systems. Every handoff is a gap — in care, compliance, and billing.",
  },
  {
    stat: "Outcomes Hidden",
    body: "Accreditation reporting and payer audits are assembled from spreadsheets — not live systems.",
  },
];

export const navItems = [
  { href: "#credify-ai", n: "AI", label: "Credify AI" },
  { href: "#acquire", n: "1", label: "Acquire" },
  { href: "#intake", n: "2", label: "Intake" },
  { href: "#schedule", n: "3", label: "Schedule" },
  { href: "#treat", n: "4", label: "Treat" },
  { href: "#get-paid", n: "5", label: "Get Paid" },
  { href: "#operate", n: "6", label: "Operate" },
];

export const stages: PartnerStage[] = [
  {
    id: "credify-ai",
    label: "Stage AI",
    title: "Credify AI",
    blurb:
      "AI across the whole journey — not bolted onto one screen. Currently in development.",
    modules: [
      {
        id: "session-assist",
        badge: "AI",
        eyebrow: "Stage AI · Credify AI",
        title: "Session Assist",
        sub: "The AI listens so the clinician can stay present.",
        slide: 5,
        thumbAlt: "Session Assist",
        inDevelopment: true,
        capabilities: [
          {
            n: "01",
            title: "Live Question Hints",
            body: "Surfaces unasked assessment items, unaddressed goals, and risk disclosures as they happen",
          },
          {
            n: "02",
            title: "Code Support Tracking",
            body: "Watches session time against the billed code so documentation matches the claim",
          },
          {
            n: "03",
            title: "Clinician Selects",
            body: "Nothing is auto-filed — the provider chooses what carries into the record",
          },
        ],
      },
      {
        id: "session-to-treatment-plan",
        badge: "AI",
        eyebrow: "Stage AI · Credify AI",
        title: "Session to Treatment Plan",
        sub: "What surfaced in session flows into the plan — for review, not automatically.",
        slide: 6,
        thumbAlt: "Session to Treatment Plan",
        inDevelopment: true,
        capabilities: [
          {
            n: "01",
            title: "Traceable Every Time",
            body: "Each drafted change links to a timestamped moment in the session transcript",
          },
          {
            n: "02",
            title: "Drafts, Never Files",
            body: "AI proposes objective updates; the plan stays unsigned until the clinician signs",
          },
          {
            n: "03",
            title: "Closes the Loop",
            body: "Goals discussed in session update instead of waiting for chart review",
          },
        ],
      },
      {
        id: "ai-claim-scrub",
        badge: "AI",
        eyebrow: "Stage AI · Credify AI",
        title: "AI Claim Scrub",
        sub: "Catch the denial before the claim leaves the building.",
        slide: 7,
        thumbAlt: "AI Claim Scrub",
        inDevelopment: true,
        capabilities: [
          {
            n: "01",
            title: "Note-to-Claim Check",
            body: "Reads the progress note and verifies it supports the billed code and time",
          },
          {
            n: "02",
            title: "Learned Payer Patterns",
            body: "Denial risk scored from your own history with that payer, code, and diagnosis",
          },
          {
            n: "03",
            title: "Coding & Appeals",
            body: "Suggests CPT and modifier corrections, and drafts the appeal when needed",
          },
        ],
      },
      {
        id: "natural-language-navigation",
        badge: "AI",
        eyebrow: "Stage AI · Credify AI",
        title: "Natural-Language Navigation",
        sub: "Ask for anything. Land on it — in any module.",
        slide: 8,
        thumbAlt: "Natural-Language Navigation",
        inDevelopment: true,
        capabilities: [
          {
            n: "01",
            title: "Plain Language",
            body: "Ask in your own words instead of clicking through four menus",
          },
          {
            n: "02",
            title: "Answers, Then Routes",
            body: "Summarizes what it found before sending you where you were going",
          },
          {
            n: "03",
            title: "Crosses Every Module",
            body: "One command bar spans clinical, scheduling, and billing",
          },
        ],
      },
    ],
  },
  {
    id: "acquire",
    label: "Stage 1",
    title: "Acquire",
    blurb: "Build your referral network. Turn inquiries into active clients.",
    modules: [
      {
        id: "crm",
        badge: "1",
        eyebrow: "Stage 1 · Acquire",
        title: "CRM",
        sub: "Your entire referral network — organized and moving.",
        slide: 10,
        thumbAlt: "CRM",
        liveSlug: "crm",
        capabilities: [
          {
            n: "01",
            title: "Unified Pipeline",
            body: "Agencies, therapists, and referral sources with per-source status and custom types",
          },
          {
            n: "02",
            title: "Full Relationship Record",
            body: "Per-contact activity log, notes, documents, and complete touch history",
          },
          {
            n: "03",
            title: "Automated Cadence",
            body: "Touch Rules fire follow-ups by pipeline stage, source type, and days since contact",
          },
        ],
      },
      {
        id: "crm-touches",
        badge: "1",
        eyebrow: "Stage 1 · Acquire",
        title: "CRM · Touches",
        sub: "A structured daily queue so no referral opportunity falls through.",
        slide: 11,
        thumbAlt: "CRM · Touches",
        liveSlug: "crm",
        capabilities: [
          {
            n: "01",
            title: "Daily Action Queue",
            body: "Every contact due for outreach surfaced automatically — no manual list-building",
          },
          {
            n: "02",
            title: "One-Click Logging",
            body: "Log calls, emails, and visits with instant status updates from the queue",
          },
          {
            n: "03",
            title: "Prospective Client Outreach",
            body: "Customize outreach cadences and track progress",
          },
        ],
      },
      {
        id: "cluster-email",
        badge: "1",
        eyebrow: "Stage 1 · Acquire",
        title: "Email / SMS Outreach",
        sub: "Segmented outreach at scale, built for practice growth.",
        slide: 12,
        thumbAlt: "Email / SMS Outreach",
        liveSlug: "cluster-email",
        capabilities: [
          {
            n: "01",
            title: "CRM-Native Segments",
            body: "Build audiences by source type, pipeline stage, and last touch date",
          },
          {
            n: "02",
            title: "Compliance Built In",
            body: "Open tracking, unsubscribe handling, and a full send audit log",
          },
          {
            n: "03",
            title: "No Third-Party Vendor",
            body: "Scheduled send, live preview, and send simulation inside the platform",
          },
        ],
      },
    ],
  },
  {
    id: "intake",
    label: "Stage 2",
    title: "Intake",
    blurb: "A branded front door that converts inquiries into active clients.",
    modules: [
      {
        id: "client-portal",
        badge: "2",
        eyebrow: "Stage 2 · Intake",
        title: "Client Portal",
        sub: "Intake completed before session one — every time.",
        slide: 14,
        thumbAlt: "Client Portal",
        liveSlug: "client-portal",
        capabilities: [
          {
            n: "01",
            title: "Pre-Visit Intake",
            body: "Clients complete packets, sign consents, and confirm appointments before arriving",
          },
          {
            n: "02",
            title: "Pending Items Dashboard",
            body: "Each client sees what needs attention — staff see what is outstanding",
          },
          {
            n: "03",
            title: "Full Client Experience",
            body: "Secure messaging, appointment history, records, and billing in one login",
          },
        ],
      },
      {
        id: "therapist-match",
        badge: "2",
        eyebrow: "Stage 2 · Intake",
        title: "Therapist Match",
        sub: "Match each client to the right clinician, not just an available one.",
        slide: 15,
        thumbAlt: "Therapist Match",
        liveSlug: "therapist-match",
        capabilities: [
          {
            n: "01",
            title: "85 Questions, 10 Domains",
            body: "Demographics, clinical, cultural, lived experience, style, logistics, and philosophy",
          },
          {
            n: "02",
            title: "Weighted Scoring",
            body: "Every domain carries a point weight, so match strength is measured rather than guessed",
          },
          {
            n: "03",
            title: "Beyond Credentials",
            body: "Cultural competence and therapeutic philosophy that a directory listing cannot capture",
          },
        ],
      },
    ],
  },
  {
    id: "schedule",
    label: "Stage 3",
    title: "Schedule",
    blurb: "Every provider, every location, every session — in one view.",
    modules: [
      {
        id: "calendar",
        badge: "3",
        eyebrow: "Stage 3 · Schedule",
        title: "Calendar",
        sub: "Every provider, every location, every session — in one view.",
        slide: 16,
        thumbAlt: "Calendar",
        liveSlug: "calendar",
        capabilities: [
          {
            n: "01",
            title: "Multi-Provider Views",
            body: "Week and month views across the full practice roster and every location",
          },
          {
            n: "02",
            title: "Smart Scheduling",
            body: "Find Slot automation, drag-to-reschedule, group sessions, and ICS sync",
          },
          {
            n: "03",
            title: "Mobile-First",
            body: "Providers check and manage their schedules from anywhere",
          },
        ],
      },
      {
        id: "appointment-reminders",
        badge: "3",
        eyebrow: "Stage 3 · Schedule",
        title: "Appointment Reminders",
        sub: "Reduce no-shows without lifting a finger.",
        slide: 17,
        thumbAlt: "Appointment Reminders",
        liveSlug: "reminders",
        capabilities: [
          {
            n: "01",
            title: "Multi-Channel",
            body: "SMS, email, and voice reminders with bilingual EN/ES support built in",
          },
          {
            n: "02",
            title: "Conditional Triggers",
            body: "Merge fields and trigger conditions per appointment and provider type",
          },
          {
            n: "03",
            title: "Ready to Activate",
            body: "Prebuilt templates cut setup time from weeks to minutes",
          },
        ],
      },
    ],
  },
  {
    id: "treat",
    label: "Stage 4",
    title: "Treat",
    blurb: "A full behavioral health EHR — native, purpose-built, not bolted on.",
    modules: [
      {
        id: "ehr",
        badge: "4",
        eyebrow: "Stage 4 · Treat",
        title: "EHR",
        sub: "A full behavioral health EHR — native, not adapted from primary care.",
        slide: 19,
        thumbAlt: "EHR",
        liveSlug: "ehr",
        capabilities: [
          {
            n: "01",
            title: "Clinical Dashboard",
            body: "KPIs, upcoming sessions, recent notes, forms hub, and care team at a glance",
          },
          {
            n: "02",
            title: "One Client Record",
            body: "Progress notes, demographics, and treatment history unified in one place",
          },
          {
            n: "03",
            title: "Purpose-Built",
            body: "Documentation workflows designed for behavioral health, not ported from med/surg",
          },
        ],
      },
      {
        id: "ehr-tasks",
        badge: "4",
        eyebrow: "Stage 4 · Treat",
        title: "EHR · Tasks",
        sub: "Every clinical to-do tracked, assigned, and resolved — per client.",
        slide: 20,
        thumbAlt: "EHR · Tasks",
        liveSlug: "ehr-tasks",
        capabilities: [
          {
            n: "01",
            title: "Per-Client Task Board",
            body: "Checklists and subtasks for complex multi-provider care coordination",
          },
          {
            n: "02",
            title: "Date Enforcement",
            body: "Mandatory due dates and recurring tasks for compliance-critical workflows",
          },
          {
            n: "03",
            title: "Team Visibility",
            body: "Assignee tracking, attachment panels, and full status audit trail",
          },
        ],
      },
      {
        id: "treatment-plan-builder",
        badge: "4",
        eyebrow: "Stage 4 · Treat",
        title: "Treatment Plan Builder",
        sub: "Compliant treatment plans — built faster, audited easier.",
        slide: 21,
        thumbAlt: "Treatment Plan Builder",
        liveSlug: "treatment-plan",
        capabilities: [
          {
            n: "01",
            title: "Co-Authored Plans",
            body: "Client and care team collaborate on goals, objectives, and GAS scale",
          },
          {
            n: "02",
            title: "Level-of-Care Modes",
            body: "Documentation modes for outpatient, IOP, and residential programs",
          },
          {
            n: "03",
            title: "Audit-Ready",
            body: "Version history, clinician signoff, and export that satisfies payer review",
          },
        ],
      },
    ],
  },
  {
    id: "get-paid",
    label: "Stage 5",
    title: "Get Paid",
    blurb: "Revenue that doesn't leak — from first claim to final payment.",
    modules: [
      {
        id: "revenue-cycle-management",
        badge: "5",
        eyebrow: "Stage 5 · Get Paid",
        title: "Revenue Cycle Management",
        sub: "Revenue that doesn't leak — from first claim to final payment.",
        slide: 23,
        thumbAlt: "Revenue Cycle Management",
        liveSlug: "rcm",
        capabilities: [
          {
            n: "01",
            title: "Denial Management",
            body: "Underpayments and rejections surfaced before write-off, with payer and reason code",
          },
          {
            n: "02",
            title: "Native EDI",
            body: "835 parsing, ERA reconciliation, corrected claims, and COB — no clearinghouse workaround",
          },
          {
            n: "03",
            title: "Recovered Revenue",
            body: "[YOUR METRIC] recovered per [period] across client practices",
          },
        ],
      },
      {
        id: "chargemaster-and-claims",
        badge: "5",
        eyebrow: "Stage 5 · Get Paid",
        title: "Chargemaster & Claims",
        sub: "Billing infrastructure behavioral health practices actually need.",
        slide: 24,
        thumbAlt: "Chargemaster & Claims",
        liveSlug: "rcm",
        capabilities: [
          {
            n: "01",
            title: "Super Chargemaster",
            body: "100+ CPT codes with contracted payer rates, modifiers, and locality fee schedules",
          },
          {
            n: "02",
            title: "Live Claims Board",
            body: "Real-time payer status, billed amount, and unposted balance per claim",
          },
          {
            n: "03",
            title: "End-to-End Cycle",
            body: "Patient Statements, Biller Queue, 277CA, and clearinghouse wizard",
          },
        ],
      },
    ],
  },
  {
    id: "operate",
    label: "Stage 6",
    title: "Operate",
    blurb: "Visibility across every module — know before it becomes a problem.",
    modules: [
      {
        id: "alerts-hub",
        badge: "6",
        eyebrow: "Stage 6 · Operate",
        title: "Alerts Hub",
        sub: "Know before it becomes a problem.",
        slide: 26,
        thumbAlt: "Alerts Hub",
        liveSlug: "alerts-hub",
        capabilities: [
          {
            n: "01",
            title: "Cross-Module Feed",
            body: "No-shows, denials, document gaps, and credential expirations in one stream",
          },
          {
            n: "02",
            title: "Escalation Routing",
            body: "Per-user channel preferences across desktop, email, and in-app delivery",
          },
          {
            n: "03",
            title: "Nothing Slips",
            body: "Read, snooze, and dismiss tracking ensures no critical alert is missed",
          },
        ],
      },
      {
        id: "reports",
        badge: "6",
        eyebrow: "Stage 6 · Operate",
        title: "Reports",
        sub: "Reporting that satisfies payers, leadership, and accreditation.",
        slide: 27,
        thumbAlt: "Reports",
        liveSlug: "reports",
        capabilities: [
          {
            n: "01",
            title: "BH KPI Library",
            body: "Clinical, operational, and financial measures built in and ready to run",
          },
          {
            n: "02",
            title: "Configurable Templates",
            body: "Monthly leadership reviews, payer reports, and accreditation docs",
          },
          {
            n: "03",
            title: "Filter Any Dimension",
            body: "Date range, provider, location, and service type — export-ready output",
          },
        ],
      },
      {
        id: "reports-measures",
        badge: "6",
        eyebrow: "Stage 6 · Operate",
        title: "Reports · Measures",
        sub: "Drill into any metric — any dimension, any time frame.",
        slide: 28,
        thumbAlt: "Reports · Measures",
        liveSlug: "reports",
        capabilities: [
          {
            n: "01",
            title: "Any Permutation",
            body: "Measurement over time, percentage-of-goal, weighted scoring, composite indices",
          },
          {
            n: "02",
            title: "Not a Ceiling",
            body: "Standard measures are a starting point — build custom KPIs from any data point",
          },
          {
            n: "03",
            title: "Comparative Analysis",
            body: "Cohort comparison, provider benchmarks, and payer performance",
          },
        ],
      },
    ],
    gridModule: {
      id: "build-anything",
      badge: "6",
      eyebrow: "Stage 6 · Operate",
      title: "Reports · Build Anything",
      sub: "A data analyst’s dream — on a unified data model.",
      grid: [
        {
          n: "01",
          title: "Measurement Over Time",
          body: "Trend any metric across weeks, months, or quarters with visual comparison",
        },
        {
          n: "02",
          title: "Percentage & Ratio",
          body: "Goal attainment, no-show rate, denial rate, and collection percentage",
        },
        {
          n: "03",
          title: "Weighted Scoring",
          body: "Apply custom weights to composite outcome indices from any measures",
        },
        {
          n: "04",
          title: "Cohort Analysis",
          body: "Compare client groups by diagnosis, payer, provider, or program",
        },
        {
          n: "05",
          title: "Provider Benchmarks",
          body: "Side-by-side performance metrics across every member of the care team",
        },
        {
          n: "06",
          title: "Payer Comparison",
          body: "Reimbursement rates, denial patterns, and collection performance by payer",
        },
        {
          n: "07",
          title: "Program Outcomes",
          body: "IOP, outpatient, and residential KPIs — clinical and operational together",
        },
        {
          n: "08",
          title: "Accreditation Reports",
          body: "Pre-formatted for CARF, TJC, and NCQA requirements — export-ready",
        },
        {
          n: "09",
          title: "Custom KPIs",
          body: "Build from any data point captured across the entire Credify platform",
        },
      ],
    },
  },
];

export const summary = {
  title: "One platform replaces the stack.",
  sub: "",
  items: [
    { n: "01", name: "Acquire", modules: "CRM + Email / SMS Outreach" },
    { n: "02", name: "Intake", modules: "Client Portal + Therapist Match" },
    { n: "03", name: "Schedule", modules: "Calendar + Reminders" },
    { n: "04", name: "Treat", modules: "EHR · Tasks · Treatment Plan" },
    { n: "05", name: "Get Paid", modules: "Revenue Cycle Management" },
    { n: "06", name: "Operate", modules: "Alerts Hub + Reports" },
  ],
  foot: "credifyfast.com",
};

export const footerCopy = "Credify · Push It, Inc. · Practice Partner Overview · 2026";

/** Deck download offered in the hero and the sticky stage nav. */
export const deckDownload = {
  href: "/partners/credify-partners-deck.pptx",
  filename: "Credify-Partners-Deck.pptx",
  label: "Download overview",
  meta: "PowerPoint · 2.4 MB",
};
