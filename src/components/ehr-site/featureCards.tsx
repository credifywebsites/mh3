import type { ReactElement } from "react";

import { c } from "./cx";

/**
 * The sixteen "what we handle" cards from task/credify-index.html, in source
 * order. Each one deep-links to the Solutions module index at its own pill:
 * /solutions?m=<id> spotlights that pill and centres its stage row.
 */
export const featureCards: { id: string; name: string; icon: ReactElement }[] = [
  {
    id: "website",
    name: "Website and lead gen",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
  },
  {
    id: "crm",
    name: "CRM",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
  },
  {
    id: "frontdesk",
    name: "AI front desk",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    ),
  },
  {
    id: "portal",
    name: "Client Portal",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /><line x1="9" y1="6" x2="15" y2="6" /><line x1="9" y1="10" x2="15" y2="10" /></svg>
    ),
  },
  {
    id: "formshub",
    name: "Forms Hub",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="13" y2="16" /></svg>
    ),
  },
  {
    id: "calendar",
    name: "Calendar",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 15h.01M12 15h.01M16 15h.01" /></svg>
    ),
  },
  {
    id: "reminders",
    name: "Appointment reminders",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
    ),
  },
  {
    id: "ehr",
    name: "EHR",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" /></svg>
    ),
  },
  {
    id: "treatment",
    name: "Treatment Plan Builder",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    id: "ainotes",
    name: "AI note taking",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
    ),
  },
  {
    id: "messaging",
    name: "Secure messaging",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none" /><circle cx="12" cy="10" r="0.8" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    id: "rcm",
    name: "Revenue cycle",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    ),
  },
  {
    id: "credentialing",
    name: "Credentialing",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25 5.25-1.1 9-6 9-11.25V7L12 2z" /><polyline points="9 12 11 14 15 10" /></svg>
    ),
  },
  {
    id: "reports",
    name: "Reports",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="3" y1="21" x2="21" y2="21" /></svg>
    ),
  },
  {
    id: "hr",
    name: "HR",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>
    ),
  },
  {
    id: "accounting",
    name: "Accounting",
    icon: (
      <svg className={c("feature-icon")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" /><rect x="8" y="6" width="8" height="3" rx="0.5" /><circle cx="9" cy="13" r="0.8" fill="currentColor" stroke="none" /><circle cx="12" cy="13" r="0.8" fill="currentColor" stroke="none" /><circle cx="15" cy="13" r="0.8" fill="currentColor" stroke="none" /><circle cx="9" cy="17" r="0.8" fill="currentColor" stroke="none" /><circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" /><circle cx="15" cy="17" r="0.8" fill="currentColor" stroke="none" /></svg>
    ),
  },
];
