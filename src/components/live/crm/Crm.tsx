import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function Crm() {
  return <LiveModuleFrame html={readModuleSource("crm")} title="CRM" />;
}
