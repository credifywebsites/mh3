"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { availableLiveSlugs } from "@/config/liveModules";
import {
  deckDownload,
  footerCopy,
  heroCopy,
  navItems,
  problemStats,
  stages,
  summary,
  type Capability,
  type PartnerGridModule,
  type PartnerModule,
} from "./partnersData";
import styles from "./PartnersDeck.module.css";

const THUMB_W = 1000;
const THUMB_H = 388;
const SLIDE_11_W = 966;
const SLIDE_11_H = 562;
const SLIDE_12_W = 1172;
const SLIDE_12_H = 827;
const SLIDE_15_W = 1200;
const SLIDE_15_H = 465;
const SLIDE_16_W = 1600;
const SLIDE_16_H = 775;
const SLIDE_17_W = 1600;
const SLIDE_17_H = 764;
const SLIDE_27_W = 1600;
const SLIDE_27_H = 809;
const SLIDE_28_W = 1790;
const SLIDE_28_H = 879;

const thumbVersion = (slide: number) => {
  if (slide === 11 || slide === 12) return 3;
  if (slide === 16 || slide === 17 || slide === 27 || slide === 28) return 2;
  return null;
};

const thumbSrc = (slide: number) => {
  const version = thumbVersion(slide);
  return `/partners/thumbs/slide-${slide}.jpg${version ? `?v=${version}` : ""}`;
};

const thumbDimensions = (slide: number) =>
  slide === 11
    ? { width: SLIDE_11_W, height: SLIDE_11_H }
    : slide === 12
    ? { width: SLIDE_12_W, height: SLIDE_12_H }
    : slide === 15
    ? { width: SLIDE_15_W, height: SLIDE_15_H }
    : slide === 16
    ? { width: SLIDE_16_W, height: SLIDE_16_H }
    : slide === 17
    ? { width: SLIDE_17_W, height: SLIDE_17_H }
    : slide === 27
    ? { width: SLIDE_27_W, height: SLIDE_27_H }
    : slide === 28
    ? { width: SLIDE_28_W, height: SLIDE_28_H }
    : { width: THUMB_W, height: THUMB_H };

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 1.5v8.5" />
      <path d="M4.5 7 8 10.5 11.5 7" />
      <path d="M2 12.5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1" />
    </svg>
  );
}

function CapCard({ cap }: { cap: Capability }) {
  return (
    <div className={styles.cap}>
      <span className={styles.capNum}>{cap.n}</span>
      <div>
        <h4 className={styles.capTitle}>{cap.title}</h4>
        <p className={styles.capBody}>{cap.body}</p>
      </div>
    </div>
  );
}

function ModuleActions({ module }: { module: PartnerModule }) {
  if (module.inDevelopment) {
    return <span className={styles.devChip}>In development — design preview</span>;
  }

  if (module.liveSlug && availableLiveSlugs.has(module.liveSlug)) {
    return (
      <a
        className={`${styles.liveCta} ${styles.jiggle}`}
        href={`/live/${module.liveSlug}`}
        target="_blank"
        rel="noopener"
      >
        <span className={styles.liveDot} />
        Explore this module live
        <span className={styles.liveArrow}>&rarr;</span>
      </a>
    );
  }

  return <span className={styles.soonChip}>Live preview coming soon</span>;
}

const livePreviewModules = stages.flatMap((stage) => {
  const modules: (PartnerModule | PartnerGridModule)[] = stage.gridModule
    ? [...stage.modules, stage.gridModule]
    : stage.modules;

  return modules.filter(
    (module): module is PartnerModule =>
      "liveSlug" in module &&
      Boolean(module.liveSlug) &&
      availableLiveSlugs.has(module.liveSlug as string),
  );
});

function ModuleDirectory({ isFrozen }: { isFrozen: boolean }) {

  return (
    <nav
      className={`${styles.moduleDirectory} ${isFrozen ? styles.moduleDirectoryFrozen : ""}`}
      aria-label="Live module demos"
    >
      <div className={styles.moduleDirectoryInner}>
        <span className={styles.moduleDirectoryLabel}>Modules</span>
        <div className={styles.moduleDirectoryCallout}>
          <span className={styles.moduleDirectoryCalloutText}>Click here to see live module</span>
        </div>
        <div className={styles.moduleDirectoryLinks}>
          {livePreviewModules.map((module) => (
            <a
              className={styles.moduleDirectoryLink}
              href={`/live/${module.liveSlug}`}
              key={module.id}
              target="_blank"
              rel="noopener"
            >
              {module.title}
              <span aria-hidden="true">&nbsp;→</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function PartnersDeck() {
  const [deckOpen, setDeckOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [moduleDirectoryFrozen, setModuleDirectoryFrozen] = useState(false);
  const moduleDirectorySentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deckOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDeckOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [deckOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-stage]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStage(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sentinel = moduleDirectorySentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setModuleDirectoryFrozen(!entry.isIntersecting && entry.boundingClientRect.top <= 51);
      },
      { rootMargin: "-51px 0px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.deck}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroWatermark}>{heroCopy.watermark}</div>
          <h1 className={styles.heroTitle}>
            {heroCopy.titleLine1}
            <br />
            {heroCopy.titleLine2}
          </h1>
          <p className={styles.heroLede}>{heroCopy.lede}</p>
          <div className={styles.heroActions}>
            <a className={styles.deckDl} href={deckDownload.href} download={deckDownload.filename}>
              <DownloadIcon className={styles.deckDlIcon} />
              {deckDownload.label}
              <span className={styles.deckDlMeta}>{deckDownload.meta}</span>
            </a>
          </div>
          <div className={styles.heroMeta}>{heroCopy.meta}</div>
        </div>
      </section>

      <div className={styles.problem}>
        <div className={styles.problemInner}>
          {problemStats.map((item) => (
            <div className={styles.problemItem} key={item.stat}>
              <div className={styles.problemStat}>{item.stat}</div>
              <div className={styles.problemDesc}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      <nav className={styles.stageNav}>
        <div className={styles.stageNavInner}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                activeStage === item.href.slice(1) ? styles.navLinkActive : ""
              }`}
            >
              <span className={styles.navNum}>{item.n}</span>
              {item.label}
            </a>
          ))}
          <a className={styles.navDl} href={deckDownload.href} download={deckDownload.filename}>
            <DownloadIcon className={styles.deckDlIcon} />
            Deck
          </a>
        </div>
      </nav>

      {stages.map((stage) => (
        <section key={stage.id} id={stage.id} data-stage>
          <div className={styles.stageHeader}>
            <div className={styles.stageHeaderInner}>
              <div className={styles.stageLabel}>{stage.label}</div>
              <h2 className={styles.stageTitle}>{stage.title}</h2>
              <p className={styles.stageBlurb}>{stage.blurb}</p>
            </div>
          </div>

          {stage.id === "credify-ai" ? (
            <>
              <div className={styles.moduleDirectorySentinel} ref={moduleDirectorySentinelRef} />
              <ModuleDirectory isFrozen={moduleDirectoryFrozen} />
            </>
          ) : null}

          {stage.modules.map((module) => (
            <article className={styles.module} id={module.id} key={module.id}>
              <div className={styles.band}>
                <span className={styles.badge}>{module.badge}</span>
                <div className={styles.bandText}>
                  <div className={styles.eyebrow}>{module.eyebrow}</div>
                  <h3 className={styles.bandTitle}>{module.title}</h3>
                </div>
                <p className={styles.bandSub}>{module.sub}</p>
              </div>

              <div className={styles.moduleBody}>
                <button
                  className={styles.shotBtn}
                  onClick={() => setDeckOpen(true)}
                  aria-label="View in deck"
                >
                  <Image
                    className={styles.shotImg}
                    src={thumbSrc(module.slide)}
                    alt={module.thumbAlt}
                    width={thumbDimensions(module.slide).width}
                    height={thumbDimensions(module.slide).height}
                    sizes="(max-width: 1180px) 100vw, 1088px"
                  />
                  <span className={styles.viewSlide}>View in deck &rarr;</span>
                </button>

                <div className={styles.moduleActions}>
                  <ModuleActions module={module} />
                  <button className={styles.slideBtn} onClick={() => setDeckOpen(true)}>
                    View in deck
                  </button>
                </div>

                <div className={styles.caps}>
                  {module.capabilities.map((cap) => (
                    <CapCard cap={cap} key={cap.n} />
                  ))}
                </div>
              </div>
            </article>
          ))}

          {stage.gridModule && (
            <article className={styles.module} id={stage.gridModule.id}>
              <div className={styles.band}>
                <span className={styles.badge}>{stage.gridModule.badge}</span>
                <div className={styles.bandText}>
                  <div className={styles.eyebrow}>{stage.gridModule.eyebrow}</div>
                  <h3 className={styles.bandTitle}>{stage.gridModule.title}</h3>
                </div>
                <p className={styles.bandSub}>{stage.gridModule.sub}</p>
              </div>

              <div className={styles.moduleBody}>
                <div className={styles.buildGrid}>
                  {stage.gridModule.grid.map((item) => (
                    <div className={styles.buildCard} key={item.n}>
                      <span className={styles.buildNum}>{item.n}</span>
                      <div>
                        <h4 className={styles.buildTitle}>{item.title}</h4>
                        <p className={styles.buildBody}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className={styles.slideLink} onClick={() => setDeckOpen(true)}>
                  View in deck &rarr;
                </button>
              </div>
            </article>
          )}
        </section>
      ))}

      <section className={styles.summary}>
        <div className={styles.summaryContent}>
          <h2 className={styles.summaryTitle}>{summary.title}</h2>
          <p className={styles.summarySub}>{summary.sub}</p>
          <div className={styles.summaryGrid}>
            {summary.items.map((item) => (
              <div className={styles.summaryItem} key={item.n}>
                <div className={styles.summaryNum}>{item.n}</div>
                <div className={styles.summaryName}>{item.name}</div>
                <div className={styles.summaryModules}>{item.modules}</div>
              </div>
            ))}
          </div>
          <div className={styles.summaryFoot}>{summary.foot}</div>
        </div>
      </section>

      <footer className={styles.deckFooter}>
        <p className={styles.deckFooterText}>{footerCopy}</p>
      </footer>

      {deckOpen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={() => setDeckOpen(false)}
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setDeckOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <div className={styles.deckViewer} onClick={(event) => event.stopPropagation()}>
            {/* This modal only ever mounts after a client click, so window is safe to read here. */}
            <iframe
              className={styles.deckViewerFrame}
              src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                `${window.location.origin}${deckDownload.href}`,
              )}`}
              title="Credify Partner Deck"
            />
          </div>
          <div className={styles.lightboxNote}>
            Not loading?{" "}
            <a href={deckDownload.href} download={deckDownload.filename} onClick={(e) => e.stopPropagation()}>
              Download overview
            </a>{" "}
            instead.
          </div>
        </div>
      )}
    </div>
  );
}
