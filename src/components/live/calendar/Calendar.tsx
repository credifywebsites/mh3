import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function Calendar() {
  return <LiveModuleFrame html={readModuleSource("calendar")} title="Calendar" />;
}
