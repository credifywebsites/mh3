"use client";

import { useEffect, useRef, useState } from "react";
import { c } from "./cx";
import { stages } from "./solutionsData";

/**
 * The floating "Sections" control. It fades in once the module index has
 * scrolled off the top, jumps to any of the six stages or back to the index,
 * closes on Escape or an outside click, and collapses to an icon on narrow
 * screens — matching the inline script in task/credify-solutions.html.
 *
 * One deviation from the source: the wrapper there carries a static
 * aria-hidden="true", which would hide these focusable buttons from assistive
 * technology for good. It is dropped here; nothing visual depends on it.
 */
export function SectionsJump() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Fade in once the module index is past the top of the viewport.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const index = document.getElementById("cf-allmodules");
      const shown = !index || index.getBoundingClientRect().bottom < 0;
      setIsVisible(shown);
      if (!shown) setIsOpen(false);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Close on Escape or a click outside the control.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const onDocumentClick = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onDocumentClick);
    };
  }, [isOpen]);

  // Three seconds after the visitor's first pill click, nudge the button once
  // so they notice it. Fires once per visit; reduced-motion is handled in CSS.
  useEffect(() => {
    let nudged = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const onClick = (event: MouseEvent) => {
      if (nudged) return;
      const target = event.target as HTMLElement | null;
      if (!target?.closest(`.${c("mi-chip")}`)) return;

      nudged = true;
      timer = setTimeout(() => {
        const button = buttonRef.current;
        if (!button || !wrapRef.current?.classList.contains(c("cf-jump--show"))) return;
        button.classList.remove(c("cf-jump-jiggle"));
        void button.offsetWidth;
        button.classList.add(c("cf-jump-jiggle"));
      }, 3000);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const jumpTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView();
    setIsOpen(false);
  };

  return (
    <div
      id="cf-jump"
      ref={wrapRef}
      className={c(isVisible ? "cf-jump cf-jump--show" : "cf-jump")}
    >
      <div
        id="cf-jump-menu"
        className={c("cf-jump-menu")}
        role="menu"
        aria-label="Jump to a section"
        hidden={!isOpen}
      >
        {stages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            className={c("cf-jump-item")}
            role="menuitem"
            data-target={`#${stage.id}`}
            onClick={() => jumpTo(`#${stage.id}`)}
          >
            <span className={c("n")}>{stage.num}</span>
            {stage.title}
          </button>
        ))}
        <div className={c("cf-jump-sep")} />
        <button
          type="button"
          className={c("cf-jump-item cf-jump-all")}
          role="menuitem"
          data-target="__modindex__"
          onClick={() => jumpTo("#cf-allmodules")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          All modules
        </button>
      </div>

      <button
        id="cf-jump-btn"
        ref={buttonRef}
        type="button"
        className={c("cf-jump-btn")}
        aria-expanded={isOpen}
        aria-controls="cf-jump-menu"
        aria-label="Jump to a section"
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen((open) => !open);
        }}
        onAnimationEnd={(event) => event.currentTarget.classList.remove(c("cf-jump-jiggle"))}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        <span className={c("cf-jump-btn-txt")}>Sections</span>
      </button>
    </div>
  );
}
