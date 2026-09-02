import { Suspense } from "react";
import { DemoCta } from "./DemoCta";
import { ModuleIndex, ModuleIndexFromQuery } from "./ModuleIndex";
import { SectionsJump } from "./SectionsJump";
import { SiteFooter } from "./SiteFooter";
import { StageSections } from "./StageSections";
import { c } from "./cx";
import { stages } from "./solutionsData";

/**
 * Solutions page, transcribed from task/credify-solutions.html: the dark hero
 * with the stage jump row, the index of all 24 modules, the six stage bands,
 * and the demo band.
 */
export function SolutionsLanding() {
  return (
    <div className={c("cf-site")}>
      <section className={c("hero hero-pad")}>
        <div className={c("wrap")}>
          <div className={c("hero-in solo")}>
            <span className={c("pill")}>Solutions</span>
            <h1 style={{ fontSize: "clamp(34px,4.4vw,52px)" }}>
              Every system a practice runs on,
              <br />
              <em>in one place.</em>
            </h1>
            <p className={c("lede")}>
              Twenty-four modules and managed services, laid out in the order the work actually
              happens. The software you use is marked as software. The work our team does for you
              is marked as ours.
            </p>
            <nav className={c("jump")}>
              {stages.map((stage) => (
                <a key={stage.id} href={`#${stage.id}`}>
                  {stage.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* The un-spotlit index is the prerendered fallback, so the static HTML
          still carries all 24 module links. */}
      <Suspense fallback={<ModuleIndex />}>
        <ModuleIndexFromQuery />
      </Suspense>
      <StageSections />

      <DemoCta />
      <SiteFooter />
      <SectionsJump />
    </div>
  );
}
