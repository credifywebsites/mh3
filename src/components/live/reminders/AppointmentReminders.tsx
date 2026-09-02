import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function AppointmentReminders() {
  return <LiveModuleFrame html={readModuleSource("reminders")} title="Appointment Reminders" />;
}
