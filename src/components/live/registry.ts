import type { ComponentType } from "react";
import { AlertsHub } from "./alerts-hub/AlertsHub";
import { Calendar } from "./calendar/Calendar";
import { ClientPortal } from "./client-portal/ClientPortal";
import { ClusterEmail } from "./cluster-email/ClusterEmail";
import { Crm } from "./crm/Crm";
import { Ehr } from "./ehr/Ehr";
import { EhrTasks } from "./ehr-tasks/EhrTasks";
import { AppointmentReminders } from "./reminders/AppointmentReminders";
import { Rcm } from "./rcm/Rcm";
import { Reports } from "./reports/Reports";
import { TherapistMatch } from "./therapist-match/TherapistMatch";
import { TreatmentPlan } from "./treatment-plan/TreatmentPlan";

/**
 * slug -> component for every module with a source.html on disk.
 *
 * `/live/rcm` currently runs RCM_08-07-V100 (src/components/live/rcm/source.html),
 * not the newer RCM_08-10-V101_PARTNER patched copy — that file still hasn't
 * been dropped in. Swap source.html for the patched version when it lands;
 * no other change needed here.
 */
export const liveModuleRegistry: Record<string, ComponentType> = {
  crm: Crm,
  "cluster-email": ClusterEmail,
  "client-portal": ClientPortal,
  "therapist-match": TherapistMatch,
  calendar: Calendar,
  reminders: AppointmentReminders,
  ehr: Ehr,
  "ehr-tasks": EhrTasks,
  "treatment-plan": TreatmentPlan,
  rcm: Rcm,
  "alerts-hub": AlertsHub,
  reports: Reports,
};
