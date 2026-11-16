"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CredentialingPromoPopup.module.css";

const DELAY_MS = 6000; // show after this long on the page
const SCROLL_SHOW = 0.4; // or after this share of the page is scrolled (phones)
const SEEN_KEY = "cfp_seen_v1"; // once per browser-tab session
const PHONE_HREF = "tel:+18582277895";
const CONTACT_HREF = "/contact";

/* eslint-disable @typescript-eslint/no-explicit-any */
function track(name: string) {
  try {
    const w = window as any;
    (w.dataLayer = w.dataLayer || []).push({ event: name });
    if (name === "cfp_chat" || name === "cfp_call") w.fbq?.("track", "Contact");
  } catch {
    // tracking must never break the popup
  }
}

/** Opens the Zoho SalesIQ chat window; returns false if the widget isn't ready. */
function openZohoChat(): boolean {
  try {
    const siq = (window as any).$zoho?.salesiq;
    if (typeof siq?.chatwindow?.visible === "function") {
      siq.chatwindow.visible("show");
      return true;
    }
    const floatBtn = document.getElementById("zsiq_float");
    if (floatBtn) {
      floatBtn.click();
      return true;
    }
  } catch {
    // fall through
  }
  return false;
}

/** Zoho's own auto-open (ZohoChatTrigger) skips this route, so only this popup shows. */
export function CredentialingPromoPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // drives the fade-in
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const chatBtnRef = useRef<HTMLButtonElement>(null);
  const downOnBackdrop = useRef(false);
  const lastFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setVisible(false);
    setOpen(false);
  }, []);

  // Triggers: timer, scroll depth, exit intent (desktop). Fires once.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY) === "1") return;
    } catch {
      // storage blocked: treat as fresh
    }
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      cleanup();
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // ignore
      }
      lastFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
      track("cfp_view");
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_SHOW) show();
    };
    const onExit = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) show();
    };
    const timer = setTimeout(show, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    const hasMouse = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    if (hasMouse) document.addEventListener("mouseout", onExit);
    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onExit);
    }
    return cleanup;
  }, []);

  // While open: fade in, lock page scroll, focus the chat button, handle keys.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevGutter = root.style.scrollbarGutter;
    if (window.innerWidth > root.clientWidth) root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";

    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    const focusTimer = setTimeout(() => chatBtnRef.current?.focus({ preventScroll: true }), 30);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        track("cfp_close");
        close();
        return;
      }
      if (e.key !== "Tab" || !cardRef.current) return;
      const f = Array.from(cardRef.current.querySelectorAll<HTMLElement>("a[href],button")).filter(
        (el) => el.getClientRects().length > 0,
      );
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (!cardRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      root.style.scrollbarGutter = prevGutter;
      try {
        lastFocus.current?.focus({ preventScroll: true });
      } catch {
        // ignore
      }
    };
  }, [open, close]);

  const onChat = () => {
    track("cfp_chat");
    close();
    setTimeout(() => {
      if (openZohoChat()) return;
      window.location.href = window.matchMedia("(pointer:coarse)").matches ? PHONE_HREF : CONTACT_HREF;
    }, 60);
  };

  return (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${open ? styles.show : ""} ${visible ? styles.in : ""}`}
      aria-hidden={!open}
      // Backdrop closes only when the press also started on it (no close on text-select drags)
      onMouseDown={(e) => {
        downOnBackdrop.current = e.target === overlayRef.current;
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current && downOnBackdrop.current) {
          track("cfp_close");
          close();
        }
        downOnBackdrop.current = false;
      }}
    >
      <div
        ref={cardRef}
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cfp-title"
        aria-describedby="cfp-body"
      >
        <button
          className={styles.close}
          type="button"
          aria-label="Close"
          onClick={() => {
            track("cfp_close");
            close();
          }}
        >
          &times;
        </button>
        <p className={styles.eyebrow}>Free credentialing</p>
        <h2 className={styles.title} id="cfp-title">
          Your first 5 applications<em>are on us.</em>
        </h2>
        <div className={styles.save}>Save $745 at the Essential rate</div>
        <p className={styles.body} id="cfp-body">
          CAQH setup, payor enrollment and panel management, all handled by our team. Chat with us
          now to claim your 5 free applications.
        </p>
        <div className={styles.btns}>
          <a className={`${styles.btn} ${styles.call}`} href={PHONE_HREF} onClick={() => track("cfp_call")}>
            <span className={styles.long}>Call 858.227.7895</span>
            <span className={styles.short}>Call us</span>
          </a>
          <button ref={chatBtnRef} className={`${styles.btn} ${styles.chat}`} type="button" onClick={onChat}>
            Chat with us
          </button>
        </div>
        <p className={styles.fine}>New clients only. Limited time.</p>
      </div>
    </div>
  );
}
