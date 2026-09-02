import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function Ehr() {
  return <LiveModuleFrame html={readModuleSource("ehr")} title="EHR" />;
}
