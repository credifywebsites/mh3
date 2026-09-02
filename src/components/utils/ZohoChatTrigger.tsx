'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Automatically triggers the Zoho SalesIQ chat window after:
 * 1. 60 seconds have passed
 * 2. User has scrolled more than 100px
 * Only runs on the home page and once per session.
 */
export function ZohoChatTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    const SESSION_KEY = "zoho_chat_triggered_once";
    const DELAY_MS = 60000; // 60 seconds

    // Run only on main/home page
    const isHomePage = pathname === "/" || pathname === "/index.php";
    if (!isHomePage) return;

    // Run only once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let timePassed = false;
    let hasScrolled = false;
    let isTriggered = false;

    function openZohoChat() {
      if (isTriggered) return;
      
      const floatBtn = document.getElementById("zsiq_float");

      if (floatBtn) {
        floatBtn.click();
        sessionStorage.setItem(SESSION_KEY, "true");
        isTriggered = true;
        console.log("Zoho chat opened once this session.");
      } else {
        // If the button isn't there yet (script still loading), try again
        setTimeout(openZohoChat, 500);
      }
    }

    function checkTriggerConditions() {
      if (timePassed && hasScrolled) {
        openZohoChat();
      }
    }

    function onScroll() {
      if (window.scrollY > 100) {
        hasScrolled = true;
        checkTriggerConditions();
        // Remove scroll listener once scrolled
        window.removeEventListener("scroll", onScroll);
      }
    }

    const timer = setTimeout(() => {
      timePassed = true;
      checkTriggerConditions();
    }, DELAY_MS);

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
