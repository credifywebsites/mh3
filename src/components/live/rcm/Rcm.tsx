import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function Rcm() {
  return <LiveModuleFrame html={readModuleSource("rcm")} title="Revenue Cycle Management" />;
}
