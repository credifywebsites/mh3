import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function AlertsHub() {
  return <LiveModuleFrame html={readModuleSource("alerts-hub")} title="Alerts Hub" />;
}
