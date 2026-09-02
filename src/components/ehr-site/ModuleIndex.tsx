"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { c } from "./cx";
import { moduleCount, stages } from "./solutionsData";

function stageOf(moduleId: string | undefined) {
  if (!moduleId) return undefined;
  return stages.find((stage) => stage.modules.some((module) => module.id === moduleId));
}

/**
 * The "jump to any module" index. Arriving from a homepage feature card
 * (/solutions?m=<module>) spotlights that module's pill and centres its stage
 * row; the spotlight clears on the next click anywhere, exactly as the inline
 * script in task/credify-solutions.html does it.
 */
export function ModuleIndex({ spotlight }: { spotlight?: string }) {
  const rowRefs = useRef(new Map<string, HTMLDivElement | null>());

  // Reset the spotlight whenever a new ?m= arrives, without an effect round
  // trip: https://react.dev/learn/you-might-not-need-an-effect
  const [state, setState] = useState({ from: spotlight, focused: spotlight });
  if (state.from !== spotlight) {
    setState({ from: spotlight, focused: spotlight });
  }

  useEffect(() => {
    const stage = stageOf(spotlight);
    if (!stage) return;

    // rAF so the row has been laid out before we centre it, matching the source.
    const frame = window.requestAnimationFrame(() => {
      rowRefs.current.get(stage.id)?.scrollIntoView({ block: "center" });
    });

    const clear = () => setState((current) => ({ ...current, focused: undefined }));
    document.addEventListener("click", clear, { once: true, capture: true });

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("click", clear, { capture: true });
    };
  }, [spotlight]);

  return (
    <section className={c("modindex")} id="cf-allmodules">
      <div className={c("wrap")}>
        <div className={c("head")}>
          <span className={c("pill")}>Every module</span>
          <h2>Jump to any module.</h2>
          <p className={c("lede")}>All {moduleCount} of them, in the order the work happens.</p>
        </div>

        {stages.map((stage) => (
          <div
            key={stage.id}
            className={c("mi-group")}
            ref={(node) => {
              rowRefs.current.set(stage.id, node);
            }}
          >
            <div className={c("mi-label")}>
              {stage.num}
              <b>{stage.title}</b>
            </div>
            <div className={c("mi-chips")}>
              {stage.modules.map((module) => (
                <a
                  key={module.id}
                  className={c(
                    state.focused === module.id ? "mi-chip mi-chip--focus" : "mi-chip",
                  )}
                  href={`#${module.id}`}
                >
                  {module.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Reads the ?m=<module> a homepage feature card arrives with. It lives in its
 * own component so the Suspense boundary around it in SolutionsLanding keeps
 * the rest of the page — and the fallback copy of this index, links and all —
 * statically prerendered.
 */
export function ModuleIndexFromQuery() {
  const spotlight = useSearchParams().get("m") ?? undefined;
  return <ModuleIndex spotlight={spotlight} />;
}
