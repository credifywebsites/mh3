import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function ClientPortal() {
  return <LiveModuleFrame html={readModuleSource("client-portal")} title="Client Portal" />;
}
