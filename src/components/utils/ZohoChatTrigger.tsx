'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SESSION_KEY = 'zoho_chat_triggered_once';
const DELAY_MS = 2000;
const COMPACT_CLASS = 'zsiq-compact';
// The home-screen tagline comes from the Zoho dashboard; we swap it client-side.
const OLD_TAGLINE = /Billing\s*&\s*Credentialing made easy\.?/i;
const NEW_TAGLINE = 'Ask us about your 90-day free trial.';

/** Rewrites the tagline in every text node under `node`. */
function replaceTagline(node: Node) {
  const walker = node.ownerDocument!.createTreeWalker(node, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (n.nodeValue && OLD_TAGLINE.test(n.nodeValue)) {
      n.nodeValue = n.nodeValue.replace(OLD_TAGLINE, NEW_TAGLINE);
    }
  }
}

/**
 * Zoho renders its chat window into a same-origin iframe it writes itself, so
 * we can reach its document and rewrite the tagline whenever it is rendered.
 */
function useZohoTaglineOverride() {
  useEffect(() => {
    const patched = new WeakSet<Document>();
    const observers: MutationObserver[] = [];

    const attach = () => {
      const iframe = document.querySelector<HTMLIFrameElement>('#zsiq_chat_wrap iframe');
      let doc: Document | null = null;
      try {
        doc = iframe?.contentDocument ?? null;
      } catch {
        return; // cross-origin; nothing we can do
      }
      if (!doc?.body || patched.has(doc)) return;
      patched.add(doc);
      replaceTagline(doc.body);
      // Any interaction inside the window (e.g. "Chat with us now") means the
      // visitor is engaging, so leave the compact auto-pop-up size.
      doc.addEventListener('click', () =>
        document.documentElement.classList.remove(COMPACT_CLASS),
      );
      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === 'characterData') replaceTagline(m.target.parentNode ?? m.target);
          m.addedNodes.forEach((added) =>
            added.nodeType === Node.TEXT_NODE
              ? replaceTagline(added.parentNode ?? added)
              : replaceTagline(added),
          );
        }
      });
      observer.observe(doc.body, { childList: true, subtree: true, characterData: true });
      observers.push(observer);
    };

    // The iframe is created lazily (and can be recreated), so check periodically.
    attach();
    const interval = setInterval(attach, 1000);
    return () => {
      clearInterval(interval);
      observers.forEach((o) => o.disconnect());
    };
  }, []);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function getSalesIQ(): any {
  return (window as any).$zoho?.salesiq;
}

/**
 * Auto-opens the Zoho SalesIQ chat window 2 seconds after any page loads.
 *
 * - Opens at most once per browser-tab session (sessionStorage), so moving
 *   between pages won't reopen it. Closing the tab clears sessionStorage, so a
 *   new visit shows it again.
 * - The auto-opened window is shown in a compact size until the visitor starts
 *   a conversation (or closes it), after which Zoho's normal size applies.
 */
export function ZohoChatTrigger() {
  const pathname = usePathname();
  useZohoTaglineOverride();

  useEffect(() => {
    // The promo pop-up owns the first impression on this page; don't stack the chat on it.
    if (pathname === '/credentialing-pricing') return;
    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    const root = document.documentElement;
    const expand = () => root.classList.remove(COMPACT_CLASS);

    let alreadyTriggered = false;
    try {
      alreadyTriggered = !!sessionStorage.getItem(SESSION_KEY);
    } catch {
      // Storage blocked: fall through and treat as a fresh session.
    }
    if (alreadyTriggered) return;

    function openZohoChat(attempt = 0) {
      if (cancelled) return;
      const siq = getSalesIQ();
      const floatBtn = document.getElementById('zsiq_float');
      const apiReady = typeof siq?.chatwindow?.visible === 'function';

      if (!apiReady && !floatBtn) {
        // Widget still loading; keep trying for ~30s.
        if (attempt < 60) retryTimer = setTimeout(() => openZohoChat(attempt + 1), 500);
        return;
      }

      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch {
        // ignore
      }

      root.classList.add(COMPACT_CLASS);
      try {
        // Return to full size once a conversation starts or the window closes.
        siq?.visitor?.chat?.(expand);
        siq?.chat?.close?.(expand);
      } catch {
        // Non-critical customisation; never block the pop-up.
      }

      if (apiReady) {
        siq.chatwindow.visible('show');
      } else {
        floatBtn?.click();
      }
    }

    const delayTimer = setTimeout(() => openZohoChat(), DELAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(delayTimer);
      clearTimeout(retryTimer);
    };
  }, [pathname]);

  return (
    <style>{`
      /* Larger chat window when opened by the visitor (desktop only; mobile is
         already full-screen). Zoho's default is 361px x 640px. */
      @media (min-width: 555px) {
        html:not(.${COMPACT_CLASS}) [data-id="zsalesiq"] .chat-iframe-wrap {
          width: min(440px, max(0px, 100vw - 20px)) !important;
          height: min(760px, 100% - 104px) !important;
          max-height: min(760px, 100% - 104px) !important;
        }
      }
      html.${COMPACT_CLASS} [data-id="zsalesiq"] .chat-iframe-wrap {
        height: min(420px, 100% - 104px) !important;
        max-height: min(420px, 100% - 104px) !important;
        width: min(320px, max(0px, 100vw - 20px)) !important;
        left: auto !important;
        right: 5px !important;
        top: auto !important;
        bottom: calc(var(--zsiqf-float-close-height, 60px) + 20px) !important;
      }
      html.${COMPACT_CLASS} [data-id="zsalesiq"] .chat-iframe-wrap,
      html.${COMPACT_CLASS} [data-id="zsalesiq"] .chat-iframe-wrap iframe {
        border-radius: 18px !important;
      }
    `}</style>
  );
}
