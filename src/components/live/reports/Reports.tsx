import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function Reports() {
  return <LiveModuleFrame html={readModuleSource("reports")} title="Reports" />;
}
