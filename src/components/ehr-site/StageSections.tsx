"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Lightbox, type Zoomed } from "./Lightbox";
import { brand } from "./brand";
import { c } from "./cx";
import { stages } from "./solutionsData";

function ZoomCue() {
  return (
    <span className={c("zoomcue")}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>{" "}
      Click the screenshot to open it full size.
    </span>
  );
}

/**
 * The six stage bands and the 24 module cards under them, from
 * task/credify-solutions.html. Each screenshot opens full size in the
 * lightbox, which all the cards share.
 */
export function StageSections() {
  const [zoomed, setZoomed] = useState<Zoomed | null>(null);
  const closeZoom = useCallback(() => setZoomed(null), []);

  return (
    <>
      {stages.map((stage) => (
        <section
          key={stage.id}
          className={c(stage.surface ? "stagesec bg-surface" : "stagesec")}
          id={stage.id}
        >
          <div className={c("wrap")}>
            <div className={c("stagehd")}>
              <span className={c("stagenum")}>{stage.num}</span>
              <h2>{stage.title}</h2>
            </div>
            <p className={c("lede")}>{stage.lede}</p>

            <div className={c("mods")}>
              {stage.modules.map((module) => {
                const src = `/images/solutions/${module.id}.jpg`;
                const alt = `${module.title}, shown in ${brand.name}`;

                return (
                  <article key={module.id} className={c("mod")} id={module.id}>
                    <div className={c("mod-copy")}>
                      {module.managed && <span className={c("tag-managed")}>We handle it</span>}
                      <h3>{module.title}</h3>
                      <p>{module.body}</p>
                      <a className={c("mod-link")} href="#demo">
                        See it in a demo &rarr;
                      </a>
                      {module.illus && <p className={c("illus")}>{module.illus}</p>}
                    </div>
                    <div
                      className={c("mod-shot")}
                      style={{ aspectRatio: module.aspect }}
                      onClick={() => setZoomed({ src, alt })}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 1170px"
                      />
                    </div>
                    <ZoomCue />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <Lightbox zoomed={zoomed} onClose={closeZoom} />
    </>
  );
}
