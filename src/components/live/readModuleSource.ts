import fs from "node:fs";
import path from "node:path";

/** Reads a module's co-located `source.html` — the untouched prototype document. */
export function readModuleSource(slug: string): string {
  const file = path.join(process.cwd(), "src/components/live", slug, "source.html");
  return fs.readFileSync(file, "utf-8");
}
