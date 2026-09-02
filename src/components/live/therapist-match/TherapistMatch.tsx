import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function TherapistMatch() {
  return <LiveModuleFrame html={readModuleSource("therapist-match")} title="Therapist Match" />;
}
