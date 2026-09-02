/**
 * The six stages of the client journey and the 24 modules under them,
 * transcribed from task/credify-solutions.html. Stage ids, module ids, aspect
 * ratios and copy are exactly as they appear there — the ids are what the
 * homepage feature cards link to as ?m=<id>, and what the pill spotlight and
 * the floating Sections control jump to.
 */
export type SolutionModule = {
  id: string;
  title: string;
  body: string;
  /** Renders the "We handle it" tag — a managed service rather than software. */
  managed: boolean;
  /** Caption under the copy when the screenshot is a mock-up, not a real view. */
  illus: string | null;
  /** Intrinsic aspect ratio of the screenshot, so the frame never reflows. */
  aspect: number;
};

export type SolutionStage = {
  id: string;
  /** Two-digit label shown in the stage header and the Sections menu. */
  num: string;
  title: string;
  lede: string;
  /** Alternating band: mint background rather than white. */
  surface: boolean;
  modules: SolutionModule[];
};

export const stages: SolutionStage[] = [
  {
    id: "acquire",
    num: "01",
    title: "Acquire",
    lede: "A referral comes in and somebody answers it, the same day.",
    surface: false,
    modules: [
      {
        id: "website",
        title: "Website and lead gen",
        body: "We build the practice site, run the lead capture, and put live chat on it. Everything a prospective client fills in lands in the CRM as a real record, not an email nobody opens.",
        managed: true,
        illus: null,
        aspect: 1.6638,
      },
      {
        id: "crm",
        title: "CRM",
        body: "Hospitals, school districts, and referring groups in one pipeline, each with a status and a next action, so nobody waits three days for a call back. Built into the record rather than bolted alongside it.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "frontdesk",
        title: "AI front desk",
        body: "The phone gets answered on the first ring, in English or Spanish, at 2pm and at 2am. The agent screens the referral, checks benefits, books against the real calendar, and writes it all to the same record your clinicians use.",
        managed: true,
        illus: "Illustration of a typical view.",
        aspect: 1.6334,
      },
      {
        id: "outreach",
        title: "Email and SMS outreach",
        body: "Build an audience out of live client data, pick a template, and send. Opt-outs and suppression are honored automatically.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "leadfollowup",
        title: "Human lead follow-up",
        body: "When a lead needs a person rather than an agent, our team makes the call and logs it. Inbound and outbound, every attempt written back to the contact record.",
        managed: true,
        illus: null,
        aspect: 2.7476,
      },
    ],
  },
  {
    id: "intake",
    num: "02",
    title: "Intake",
    lede: "The client gets consented, documented, and booked without a paper chase.",
    surface: true,
    modules: [
      {
        id: "portal",
        title: "Client Portal",
        body: "Intake packets, consents, appointment confirmations, and secure messages, on the client phone before they arrive.",
        managed: false,
        illus: null,
        aspect: 2.1654,
      },
      {
        id: "formshub",
        title: "Forms Hub",
        body: "One queue for every assigned form. Who owes it, when it is due, and who has to sign it.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "formbuilder",
        title: "Form Builder",
        body: "Build any assessment or consent yourself, with scoring, weighting, and conditional logic. No ticket to support.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
    ],
  },
  {
    id: "schedule",
    num: "03",
    title: "Schedule",
    lede: "The calendar fills and the confirmations chase themselves.",
    surface: false,
    modules: [
      {
        id: "calendar",
        title: "Calendar",
        body: "Multi-provider scheduling that shows caseload, confirmation status, telehealth, and no-show risk on the same screen.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "reminders",
        title: "Appointment reminders",
        body: "SMS, email, and AI phone calls in English and Spanish, with escalation rules for anyone who has not confirmed.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
    ],
  },
  {
    id: "treat",
    num: "04",
    title: "Treat",
    lede: "The clinical work gets documented once, by the person who did it.",
    surface: true,
    modules: [
      {
        id: "ehr",
        title: "EHR",
        body: "A clinical record built for behavioral health rather than a medical chart bent into shape. Notes, screeners, meds, and tasks in one place, with thirteen tabs inside every client record.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "treatment",
        title: "Treatment Plan Builder",
        body: "Problems, goals, objectives, and interventions that come out accreditation ready, signed, and audit traceable.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "ainotes",
        title: "AI note taking",
        body: "The session is transcribed and drafted into a DAP note while it happens. The clinician reads, edits, and signs. The note is done before the next client sits down.",
        managed: false,
        illus: null,
        aspect: 2.2899,
      },
      {
        id: "messaging",
        title: "Secure messaging",
        body: "Encrypted messaging across the care team and out to clients, attached to the record instead of a personal phone.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
    ],
  },
  {
    id: "get-paid",
    num: "05",
    title: "Get paid",
    lede: "The claim goes out clean and comes back paid.",
    surface: false,
    modules: [
      {
        id: "rcm",
        title: "Revenue cycle",
        body: "Opens on what is bleeding: what is outstanding, what is past 90 days, the denial rate against target, and the exact claims to work next. Run it yourself, or hand the whole worklist to our billers.",
        managed: true,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "credentialing",
        title: "Credentialing",
        body: "Payer enrollment, re-credentialing, and every expirable on one clock, run by our team against the same provider records your schedule and your claims already use. You get a scheduled update report showing every provider, every payer, and exactly where each application stands.",
        managed: true,
        illus: null,
        aspect: 1.0816,
      },
      {
        id: "county",
        title: "EHR to county",
        body: "County encounter files built from the record you already wrote, mapped to your county format and validated before they go out. Errors get caught on our side rather than on rejection.",
        managed: true,
        illus: "Illustration of a typical view.",
        aspect: 2.8571,
      },
    ],
  },
  {
    id: "run-the-business",
    num: "06",
    title: "Run the business",
    lede: "You see the whole practice without asking anyone for a report.",
    surface: true,
    modules: [
      {
        id: "reports",
        title: "Reports",
        body: "Forty-seven measures against targets on one screen, plus a builder for anything the library does not already cover.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "alerts",
        title: "Alerts Hub",
        body: "Risk flags, expiring authorizations, overdue notes, and credentialing deadlines in a single feed with escalation routing.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "rights",
        title: "User rights",
        body: "Role based visibility down to the individual list and field, with per-user overrides and a full decision log.",
        managed: false,
        illus: null,
        aspect: 1.6,
      },
      {
        id: "compliance",
        title: "Compliance",
        body: "Policies, training, incident logs, and audit readiness maintained by us, with the current status visible to you at any time.",
        managed: true,
        illus: null,
        aspect: 2.2029,
      },
      {
        id: "hr",
        title: "HR",
        body: "Onboarding and offboarding, payroll coordination, benefits, employee records, and PTO. Every new provider set up, supported, and properly recorded.",
        managed: true,
        illus: null,
        aspect: 2.1401,
      },
      {
        id: "accounting",
        title: "Accounting",
        body: "Bookkeeping, monthly statements, payables and receivables, and support for your accountant at tax time. Your financials stop being a fire drill.",
        managed: true,
        illus: null,
        aspect: 2.422,
      },
      {
        id: "recruiting",
        title: "Recruiting",
        body: "Provider and supervisor recruiting, sourced and screened against your caseload needs and your payer panels rather than against a job board.",
        managed: true,
        illus: null,
        aspect: 2.8333,
      },
    ],
  },
];

export const moduleCount = stages.reduce((total, stage) => total + stage.modules.length, 0);
