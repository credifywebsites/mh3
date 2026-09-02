"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./Rcm.module.css";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const gainCheck = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Rcm() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const items = root.querySelectorAll<HTMLElement>(`.${styles.rv}`);
    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 5, 4) * 55}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main} ref={rootRef}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={cx(styles.wrap, styles.heroGrid)}>
          <div className={styles.rv}>
            <span className={cx(styles.pill, styles.onDark)}>Revenue Cycle Management</span>
            <h1>
              Billing, eligibility &amp; credentialing. <em>All handled.</em>
            </h1>
            <p className={styles.lead}>
              Powered by people, enhanced by AI. We manage the full revenue cycle — before and after the claim — and work
              with every EHR, so your team never has to think about it.
            </p>
            <p className={styles.pricetag}>
              <b>From 3.49% of collections</b> — billing, eligibility &amp; credentialing included. ✓ Free trial
            </p>
            <div className={styles.ctaRow}>
              <Link className={cx(styles.btn, styles.btnOnDark)} href="/rcm-pricing">
                Explore RCM services
              </Link>
              <Link
                className={cx(styles.btn, styles.btnGhostDark)}
                href="/contact#contact-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </Link>
            </div>
            <div className={styles.chips}>
              <span className={styles.chip}>{check}Mid-to-high 90% collections</span>
              <span className={styles.chip}>{check}HIPAA-aligned · BAA</span>
            </div>
          </div>
          <div className={styles.rv}>
            <div className={styles.preview}>
              <div className={styles.ph}>
                <span className={styles.pt}>Revenue cycle — this month</span>
                <span className={styles.sample}>Sample</span>
              </div>
              <div className={styles.kpis}>
                <div className={styles.kpi}>
                  <div className={styles.v}>$84K</div>
                  <div className={styles.l}>Revenue recovered</div>
                </div>
                <div className={styles.kpi}>
                  <div className={styles.v}>97%</div>
                  <div className={styles.l}>Clean-claim rate</div>
                </div>
                <div className={styles.kpi}>
                  <div className={styles.v}>+15%</div>
                  <div className={styles.l}>Collections lift</div>
                </div>
              </div>
              <div className={styles.bars}>
                <div className={styles.bt}>Provider profitability by payer</div>
                <div className={styles.bar}>
                  <span className={styles.n}>Aetna</span>
                  <span className={styles.track}>
                    <span className={styles.fill} style={{ width: "82%" }} />
                  </span>
                  <span className={styles.p}>82%</span>
                </div>
                <div className={styles.bar}>
                  <span className={styles.n}>BCBS</span>
                  <span className={styles.track}>
                    <span className={styles.fill} style={{ width: "74%" }} />
                  </span>
                  <span className={styles.p}>74%</span>
                </div>
                <div className={styles.bar}>
                  <span className={styles.n}>UHC</span>
                  <span className={styles.track}>
                    <span className={styles.fill} style={{ width: "91%" }} />
                  </span>
                  <span className={styles.p}>91%</span>
                </div>
                <div className={styles.bar}>
                  <span className={styles.n}>Medicaid</span>
                  <span className={styles.track}>
                    <span className={styles.fill} style={{ width: "47%" }} />
                  </span>
                  <span className={styles.p}>47%</span>
                </div>
              </div>
              <div className={styles.pcap}>Illustrative dashboard preview — replace with product screenshot</div>
            </div>
          </div>
        </div>
      </section>

      {/* EHR strip */}
      <div className={styles.ehr}>
        <div className={styles.wrap}>
          <div className={styles.lab}>Works with any EHR — bill from yours, or let us handle it</div>
          <div className={styles.row}>
            <span>EHRYourWay</span>
            <span>TherapyNotes</span>
            <span>SimplePractice</span>
            <span>Credible</span>
            <span>AdvanceMD</span>
            <span>TheraNest</span>
            <span>Qualifacts</span>
            <span>Valant</span>
            <span>InSync</span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className={styles.bgSmoke}>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.rv)}>
            <span className={styles.pill}>Services</span>
            <h2>The full revenue cycle, managed for you.</h2>
            <p>All handled, all included — so your team can stay focused on care.</p>
          </div>
          <div className={styles.grid}>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 13h6M9 17h4" />
                </svg>
              </div>
              <div>
                <h3>AI-Assisted Billing</h3>
                <p>
                  Automated claim scrubs, code validation, and denial-pattern detection to submit clean claims the first
                  time.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </div>
              <div>
                <h3>Eligibility Verification</h3>
                <p>Real-time checks and batch runs to prevent front-end denials before they ever happen.</p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 3v18h18" />
                  <path d="m7 14 4-4 3 3 5-6" />
                </svg>
              </div>
              <div>
                <h3>Denial &amp; A/R Follow-up</h3>
                <p>
                  Claims submitted promptly and denials pursued systematically until outstanding balances are collected.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20M6 15h4" />
                </svg>
              </div>
              <div>
                <h3>Payment Posting</h3>
                <p>ERA/EFT posting and reconciliation with daily visibility into exactly where your money is.</p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12a9 9 0 1 1-6.2-8.6" />
                </svg>
              </div>
              <div>
                <h3>Credentialing Included</h3>
                <p>
                  CAQH refresh, payer enrollment, and panel management — handled for every provider, in every plan.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 3v18h18" />
                  <rect x="7" y="10" width="3" height="7" />
                  <rect x="13" y="6" width="3" height="11" />
                </svg>
              </div>
              <div>
                <h3>Transparent Reporting</h3>
                <p>
                  Daily claim status, ERA/EFT posting, and month-end summaries — plus profit by provider, location &amp;
                  payer.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div>
                <h3>Works With Every EHR</h3>
                <p>Bill from your EHR or let us handle it in our platform. No migration, no disruption.</p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3>HIPAA-Aligned &amp; BAA</h3>
                <p>Compliance-first workflows with full audit trails. BAA signed at onboarding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.rv)}>
            <span className={styles.pill}>How it works</span>
            <h2>Clean claims in. Faster cash out.</h2>
          </div>
          <div className={styles.steps}>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 01</div>
              <h3>Verify eligibility</h3>
              <p>Real-time and batch checks stop front-end denials before any claim goes out.</p>
            </div>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 02</div>
              <h3>Scrub &amp; submit</h3>
              <p>AI-assisted claim scrubs and code validation submit clean claims the first time.</p>
            </div>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 03</div>
              <h3>Post &amp; reconcile</h3>
              <p>ERA/EFT posting with daily claim-status visibility — you always know where the money is.</p>
            </div>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 04</div>
              <h3>Pursue denials &amp; A/R</h3>
              <p>Denial patterns are detected and worked systematically until balances are collected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.bgMint}>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.center, styles.rv)}>
            <span className={styles.pill}>Proof</span>
            <h2>Results across Credify practices.</h2>
          </div>
          <div className={styles.stats}>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>+15%</div>
              <div className={styles.l}>Avg increase in monthly collections</div>
            </div>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>90s%</div>
              <div className={styles.l}>Collection rates, mid-to-high range</div>
            </div>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>$42M+</div>
              <div className={styles.l}>Revenue recovered across practices</div>
            </div>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>30+</div>
              <div className={styles.l}>RCM &amp; credentialing experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* REPORTING (split with report-style preview) */}
      <section>
        <div className={cx(styles.wrap, styles.split)}>
          <div className={styles.rv}>
            <span className={styles.pill}>Reporting</span>
            <h2 style={{ marginTop: "16px" }}>Visibility you can act on.</h2>
            <p style={{ color: "var(--muted)", fontSize: "16px", marginTop: "12px" }}>
              16+ executive reports built for behavioral-health leadership — filtered by provider, location, payer, or date
              range, inside a full Power BI dashboard.
            </p>
            <ul className={styles.gains}>
              <li>
                <span className={styles.ck}>{gainCheck}</span>Know true profit by provider, location, and payer
              </li>
              <li>
                <span className={styles.ck}>{gainCheck}</span>Daily claim status and ERA/EFT posting
              </li>
              <li>
                <span className={styles.ck}>{gainCheck}</span>Month-end summaries you can actually act on
              </li>
            </ul>
          </div>
          <div className={styles.rv}>
            <div className={styles.preview}>
              <div className={styles.ph}>
                <span className={styles.pt}>Executive report suite</span>
                <span className={styles.sample}>Sample</span>
              </div>
              <div className={styles.reportlist}>
                <div className={styles.rrow}>
                  <div>
                    <div className={styles.rt}>Provider Financial Analysis</div>
                    <div className={styles.rm}>Profitability, collections by payer</div>
                  </div>
                  <span className={styles.tagn}>Provider</span>
                </div>
                <div className={styles.rrow}>
                  <div>
                    <div className={styles.rt}>Location Revenue Overview</div>
                    <div className={styles.rm}>Billed vs collected by site</div>
                  </div>
                  <span className={styles.tagn}>Location</span>
                </div>
                <div className={styles.rrow}>
                  <div>
                    <div className={styles.rt}>Payor Mix by Location</div>
                    <div className={styles.rm}>Commercial · Medicaid · Medicare</div>
                  </div>
                  <span className={styles.tagn}>Financial</span>
                </div>
                <div className={styles.rrow}>
                  <div>
                    <div className={styles.rt}>Appointment Analysis</div>
                    <div className={styles.rm}>No-shows &amp; revenue loss</div>
                  </div>
                  <span className={styles.tagn}>Operations</span>
                </div>
              </div>
              <div className={styles.pcap}>Illustrative report preview — replace with live dashboard screenshot</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY (dark split) */}
      <section className={styles.bgDark}>
        <div className={cx(styles.wrap, styles.split)}>
          <div className={styles.rv}>
            <span className={cx(styles.pill, styles.onDark)}>Why Credify RCM</span>
            <h2 style={{ color: "#fff", marginTop: "16px" }}>Billing alone doesn&apos;t fix revenue.</h2>
            <p className={styles.darkLead}>
              Most agencies don&apos;t have a demand problem — they have a systems problem. Our managers oversee 30+
              credentialing and RCM experts who pair AI with team accountability to consistently hit mid-to-high 90%
              collection rates, at below-market pricing.
            </p>
            <div className={styles.whystats}>
              <div>
                <div className={styles.v}>90s%</div>
                <div className={styles.l}>collection rates, mid-to-high</div>
              </div>
              <div>
                <div className={styles.v}>+15%</div>
                <div className={styles.l}>avg monthly collections increase</div>
              </div>
              <div>
                <div className={styles.v}>$42M+</div>
                <div className={styles.l}>revenue recovered</div>
              </div>
            </div>
          </div>
          <div className={styles.rv}>
            <div className={styles.placeholder} style={{ minHeight: "240px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L7 20" />
              </svg>
              RCM dashboard screenshot
              <br />
              or operations team photo
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.bgSmoke}>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.rv)}>
            <span className={styles.pill}>Testimonials</span>
            <h2>Billing, a lot less stressful.</h2>
          </div>
          <div className={styles.quotes}>
            <div className={cx(styles.quote, styles.rv)}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                &quot;Their billing team submits claims promptly and systematically pursues denials, and their weekly
                reporting gives us transparent insight into collections and next steps.&quot;
              </p>
              <div className={styles.who}>
                <div className={styles.av}>P</div>
                <div>
                  <div className={styles.nm}>Verified Client</div>
                  <div className={styles.rl}>Behavioral health provider</div>
                </div>
              </div>
            </div>
            <div className={cx(styles.quote, styles.rv)}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                &quot;They provide clear reporting, so it&apos;s easy to see what&apos;s going on without having to dig or
                ask. Overall, they&apos;ve made billing a lot less stressful.&quot;
              </p>
              <div className={styles.who}>
                <div className={styles.av}>A</div>
                <div>
                  <div className={styles.nm}>Angela M.</div>
                  <div className={styles.rl}>Billing &amp; Credentialing · OH</div>
                </div>
              </div>
            </div>
            <div className={cx(styles.quote, styles.rv)}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                &quot;We&apos;ve had a good experience with Credify RCM. Claims move faster, problems get fixed, and
                we&apos;re not constantly chasing updates anymore.&quot;
              </p>
              <div className={styles.who}>
                <div className={styles.av}>R</div>
                <div>
                  <div className={styles.nm}>Verified Client</div>
                  <div className={styles.rl}>Outpatient practice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.center, styles.rv)}>
            <span className={styles.pill}>Pricing &amp; model</span>
            <h2>You pay us when we deliver.</h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Three models. You choose how we&apos;re accountable — every option is tied to what gets delivered.
            </p>
          </div>
          <div className={styles.pricing}>
            <div className={cx(styles.ptier, styles.feat, styles.rv)}>
              <span className={styles.tag}>Most popular</span>
              <div className={styles.k}>Pay from results</div>
              <h3>Percentage of collections</h3>
              <p>A share of the revenue we recover. Zero collections growth means zero fee. From 3.49%, all-inclusive.</p>
            </div>
            <div className={cx(styles.ptier, styles.rv)}>
              <div className={styles.k}>Pay for progress</div>
              <h3>Performance-based</h3>
              <p>Incentives kick in only when metrics move — utilization, reactivation, collections, profitability.</p>
            </div>
            <div className={cx(styles.ptier, styles.rv)}>
              <div className={styles.k}>Pay for what you need</div>
              <h3>Flexible service mix</h3>
              <p>Subscribe to the services where your practice has the biggest gaps. Scale up or down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.bgMint}>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.rv)}>
            <span className={styles.pill}>Common questions</span>
            <h2>What you might be thinking.</h2>
          </div>
          <div className={styles.faq}>
            <details className={styles.rv}>
              <summary>
                &quot;We already have billing.&quot;<span className={styles.x}>+</span>
              </summary>
              <p>
                Billing alone doesn&apos;t fill schedules, cut no-shows, or improve utilization. We close the gaps before
                and after billing — eligibility, clean-claim submission, denial follow-up, and reporting — so revenue stops
                leaking.
              </p>
            </details>
            <details className={styles.rv}>
              <summary>
                Do we have to switch EHRs?<span className={styles.x}>+</span>
              </summary>
              <p>
                No. We work with every EHR — bill from your EHR or let us handle it in our platform. No migration, no
                disruption.
              </p>
            </details>
            <details className={styles.rv}>
              <summary>
                Is credentialing really included?<span className={styles.x}>+</span>
              </summary>
              <p>
                Yes. CAQH refresh, payer enrollment, and panel management are handled for every provider and included in
                every plan.
              </p>
            </details>
            <details className={styles.rv}>
              <summary>
                How are you compliant with PHI?<span className={styles.x}>+</span>
              </summary>
              <p>Our workflows are compliance-first with full audit trails, and a BAA is signed at onboarding.</p>
            </details>
            <details className={styles.rv}>
              <summary>
                What does it cost?<span className={styles.x}>+</span>
              </summary>
              <p>
                Plans start from 3.49% of collections with billing, eligibility, and credentialing included, plus a free
                trial. Performance-based and à-la-carte models are also available.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={cx(styles.bgDark, styles.final)}>
        <div className={cx(styles.wrap, styles.rv)}>
          <h2>See exactly where your practice is losing revenue.</h2>
          <p>
            We&apos;ll show you where revenue is leaking and what your true profitability looks like — by payer and
            provider.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={cx(styles.btn, styles.btnOnDark)}
              href="/contact#contact-form"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </Link>
            <a className={cx(styles.btn, styles.btnGhostDark)} href={`tel:${siteConfig.phoneRaw}`}>
              {siteConfig.phoneLabel}: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
