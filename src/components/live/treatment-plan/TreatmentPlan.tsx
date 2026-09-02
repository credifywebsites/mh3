import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function TreatmentPlan() {
  return <LiveModuleFrame html={readModuleSource("treatment-plan")} title="Treatment Plan Builder" />;
}
