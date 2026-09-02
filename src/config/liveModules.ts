/**
 * Live module previews served at /live/<slug>.
 *
 * Each module is a self-contained prototype (inline CSS + vanilla JS) rendered
 * by a React component at `src/components/live/<slug>/`, which reads its
 * co-located `source.html` and mounts it verbatim inside an iframe — see
 * `src/components/live/LiveModuleFrame.tsx`. The route itself lives at
 * `src/app/live/[slug]/page.tsx`, looked up via `src/components/live/registry.ts`.
 * This file is metadata only (kept import-safe for client components like the
 * partner deck, which only need to know which slugs currently resolve).
 *
 * `available: false` means the source prototype hasn't been supplied yet (no
 * `source.html`, no registry entry) — the module still appears in the deck,
 * but its "Explore this module live" CTA renders as a disabled chip instead
 * of a dead link.
 */
export type LiveModule = {
  /** Path segment under /live. */
  slug: string;
  /** Human label, used in the pending-module chip. */
  label: string;
  /** Whether src/components/live/<slug>/source.html + a registry entry exist. */
  available: boolean;
  /** Original filename this copy came from, for traceability on re-drops. */
  source: string;
};

export const liveModules: LiveModule[] = [
  { slug: "crm", label: "CRM", available: true, source: "CRM_07-09-26" },
  {
    slug: "cluster-email",
    label: "Email / SMS Outreach",
    available: true,
    source: "CLUSTER_EMAIL_07-11-V1",
  },
  {
    slug: "client-portal",
    label: "Client Portal",
    available: true,
    source: "CLIENT_PORTAL_07-16-2026_V1",
  },
  {
    slug: "therapist-match",
    label: "Therapist Match",
    available: true,
    source: "THERAPIST_MATCH-07_26-7_12pm-NOT_MERGED",
  },
  { slug: "calendar", label: "Calendar", available: true, source: "CALENDAR_07-30-V133" },
  {
    slug: "reminders",
    label: "Appointment Reminders",
    available: true,
    source: "APPOINTMENT_REMINDERS_08-05-26_V31",
  },
  { slug: "ehr", label: "EHR", available: true, source: "EHR-7-25-V7" },
  { slug: "ehr-tasks", label: "EHR · Tasks", available: true, source: "EHR_TASKS_08-08-V34" },
  {
    slug: "treatment-plan",
    label: "Treatment Plan Builder",
    available: true,
    source: "TREATMENT_PLAN_BUILDER_V476",
  },
  {
    slug: "rcm",
    label: "Revenue Cycle Management",
    available: true,
    // Running the older V100 build — swap for RCM_08-10-V101_PARTNER (the
    // patched copy) once it's dropped into src/components/live/rcm/.
    source: "RCM_08-07-V100",
  },
  { slug: "alerts-hub", label: "Alerts Hub", available: true, source: "alerts-hub.html" },
  { slug: "reports", label: "Reports", available: true, source: "REPORTS-08-12-V22" },
];

/** Slugs that currently resolve, for quick membership checks in the deck. */
export const availableLiveSlugs = new Set(
  liveModules.filter((module) => module.available).map((module) => module.slug),
);
