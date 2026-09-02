import { LiveModuleFrame } from "../LiveModuleFrame";
import { readModuleSource } from "../readModuleSource";

export function ClusterEmail() {
  return <LiveModuleFrame html={readModuleSource("cluster-email")} title="Email / SMS Outreach" />;
}
