import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function EhrTasks() {
  return <LiveModuleFrame html={readModuleSource("ehr-tasks")} title="EHR · Tasks" />;
}
