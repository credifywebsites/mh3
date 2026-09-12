"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CredentialingOffer79.module.css";

const OFFER_WINDOW_MS = 48 * 60 * 60 * 1000;
const STORAGE_KEY = "credify_ppc_deadline";

function pad(n: number) {
  return n < 10 ? "0" + n : String(n);
}

export function CredentialingOffer79() {
  const [timeLeft, setTimeLeft] = useState({ hours: "48", minutes: "00", seconds: "00" });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // ignore
    }

    const now = Date.now();
    let deadline = parseInt(stored || "", 10);
    if (isNaN(deadline) || deadline <= 0) {
      deadline = now + OFFER_WINDOW_MS;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(deadline));
      } catch {
        // ignore
      }
    }

    function tick() {
      const remaining = deadline - Date.now();
      const diff = Math.max(0, remaining);
      const hours = pad(Math.floor(diff / 3600000));
      const minutes = pad(Math.floor((diff % 3600000) / 60000));
      const seconds = pad(Math.floor((diff % 60000) / 1000));
      const expired = diff === 0;

      setTimeLeft({ hours, minutes, seconds });
      if (expired) {
        setIsExpired(true);
      }
    }

    tick();
    const timer = setInterval(() => {
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        clearInterval(timer);
        setIsExpired(true);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      } else {
        tick();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.pricing} aria-labelledby="pricing-headline">
        <div className={styles.container}>
          <p className={styles.overline}>Credentialing &amp; enrollment pricing</p>
          <h1 className={styles.headline} id="pricing-headline">
            Credentialing that actually <br className={styles.headlineBr} />
            <em>gets providers enrolled.</em>
          </h1>
          <p className={styles.subhead}>
            Per-application pricing with volume discounts. CAQH setup, payer enrollment, and panel management: all handled.
          </p>

          <article
            className={`${styles.featured} ${isExpired ? styles.isExpired : ""}`}
            id="offer-card"
            data-tier="volume"
            data-offer-price="79"
            data-standard-price="99"
          >
            <div className={styles.featuredInner}>
              <div className={styles.featuredPrice}>
                <p className={styles.tierLabel}>Volume</p>
                {!isExpired && <p className={styles.priceWas} id="offer-was">Normally $99</p>}
                <div className={styles.priceRow}>
                  <span className={styles.priceDollar}>$</span>
                  <span className={styles.priceAmount} id="offer-price">
                    {isExpired ? "99" : "79"}
                  </span>
                </div>
                <p className={styles.pricePer}>per application</p>
                <p className={styles.tierRange}>
                  {!isExpired ? (
                    <>
                      <span className={styles.strike}>21+ applications</span>{" "}
                      <span className={styles.anySize}>Any practice size</span>
                    </>
                  ) : (
                    <span style={{ textDecoration: "none", color: "#fff", fontWeight: 600 }}>21+ applications</span>
                  )}
                </p>
                <span className={`${styles.tag} ${styles.tagGreen}`} id="offer-savings">
                  {isExpired ? "Save $50/app vs Essential" : "Save $70/app vs Essential"}
                </span>
              </div>
              <div className={styles.featuredDetail}>
                <span className={`${styles.tag} ${styles.tagGold}`} id="offer-tag">
                  {isExpired ? "Offer ended" : "Limited time offer"}
                </span>
                {!isExpired && (
                  <>
                    <p className={styles.countdownLabel}>Offer ends in</p>
                    <div className={styles.countdown} id="countdown" role="timer" aria-live="off" aria-label="Time remaining on this offer">
                      <div className={styles.countdownUnit}>
                        <div className={styles.countdownValue} id="countdown-hours">{timeLeft.hours}</div>
                        <div className={styles.countdownName}>hrs</div>
                      </div>
                      <span className={styles.countdownSep} aria-hidden="true">:</span>
                      <div className={styles.countdownUnit}>
                        <div className={styles.countdownValue} id="countdown-minutes">{timeLeft.minutes}</div>
                        <div className={styles.countdownName}>min</div>
                      </div>
                      <span className={styles.countdownSep} aria-hidden="true">:</span>
                      <div className={styles.countdownUnit}>
                        <div className={styles.countdownValue} id="countdown-seconds">{timeLeft.seconds}</div>
                        <div className={styles.countdownName}>sec</div>
                      </div>
                    </div>
                  </>
                )}
                <p className={styles.tierDesc} id="offer-desc">
                  {isExpired
                    ? "Our standard Volume rate for multi-location groups and high-volume practices. Discounted rate kicks in automatically at 21 applications."
                    : "Our deepest per-application rate, open to every practice for the next 48 hours. No minimum application count required."}
                </p>
                <Link
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  id="cta-volume"
                  data-cta={isExpired ? "volume-99" : "volume-79"}
                  href="/contact#contact-form"
                >
                  Get started
                </Link>
              </div>
            </div>
          </article>

          <div className={styles.tiers}>
            <article className={styles.tier} data-tier="essential">
              <p className={styles.tierLabel}>Essential</p>
              <div className={styles.priceRow}>
                <span className={styles.priceDollar}>$</span>
                <span className={styles.priceAmount}>149</span>
              </div>
              <p className={styles.pricePer}>per application</p>
              <p className={styles.tierRange}>1-10 applications</p>
              <p className={styles.tierDesc}>
                Ideal for single-provider or small practices getting started. Full-service credentialing on a per-application basis.
              </p>
              <Link className={`${styles.btn} ${styles.btnOutline}`} id="cta-essential" data-cta="essential" href="/contact#contact-form">
                Get started
              </Link>
            </article>

            <article className={styles.tier} data-tier="growth">
              <p className={styles.tierLabel}>Growth</p>
              <div className={styles.priceRow}>
                <span className={styles.priceDollar}>$</span>
                <span className={styles.priceAmount}>129</span>
              </div>
              <p className={styles.pricePer}>per application</p>
              <p className={styles.tierRange}>11-20 applications</p>
              <span className={`${styles.tag} ${styles.tagGreen}`}>Save $20/app vs Essential</span>
              <p className={styles.tierDesc}>
                For growing practices adding providers. Discounted rate kicks in automatically at 11 applications.
              </p>
              <Link className={`${styles.btn} ${styles.btnOutline}`} id="cta-growth" data-cta="growth" href="/contact#contact-form">
                Get started
              </Link>
            </article>

            <article className={styles.tier} data-tier="enterprise">
              <p className={styles.tierLabel}>Enterprise</p>
              <p className={styles.enterprisePct}>50%</p>
              <p className={styles.pricePer}>of in-house resource cost</p>
              <p className={styles.tierRange}>2+ dedicated resources</p>
              <p className={styles.tierDesc}>
                Two or more dedicated credentialing specialists embedded in your team at half the cost of hiring in-house. Custom quote based on scope.
              </p>
              <Link className={`${styles.btn} ${styles.btnOutline}`} id="cta-enterprise" data-cta="enterprise" href="/contact#contact-form">
                Contact us
              </Link>
            </article>
          </div>

          <div className={styles.features} aria-label="What is included">
            <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <div className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M7 16h10"/></svg>
                </div>
                <div>
                  <p className={styles.featureName}>CAQH setup &amp; refresh</p>
                  <p className={styles.featureDesc}>Full CAQH profile creation, attestation, and ongoing maintenance.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M12 9v4M10 11h4"/><path d="M9 21v-4h6v4"/></svg>
                </div>
                <div>
                  <p className={styles.featureName}>Payer enrollment</p>
                  <p className={styles.featureDesc}>Submitted to all relevant payers: commercial, Medicaid, Medicare, and government.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4"/><path d="M20 12a8 8 0 0 1-14 5.3"/><path d="M6 21v-4h4"/></svg>
                </div>
                <div>
                  <p className={styles.featureName}>Panel management</p>
                  <p className={styles.featureDesc}>Ongoing tracking of panel status and re-credentialing deadlines for every provider.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 19h16"/><path d="M4 15l4-4 4 3 4-6 4 3"/></svg>
                </div>
                <div>
                  <p className={styles.featureName}>Status tracking</p>
                  <p className={styles.featureDesc}>Real-time updates on every application. No chasing payers yourself.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
                </div>
                <div>
                  <p className={styles.featureName}>BH specialization only</p>
                  <p className={styles.featureDesc}>We credential behavioral health providers exclusively. Faster approvals, fewer errors.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>
                </div>
                <div>
                  <p className={styles.featureName}>First provider free</p>
                  <p className={styles.featureDesc}>Zero cost, zero risk. See our work quality before any commitment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
