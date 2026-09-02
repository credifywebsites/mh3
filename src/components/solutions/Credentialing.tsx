"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./Credentialing.module.css";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function Credentialing() {
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
            <span className={cx(styles.pill, styles.onDark)}>Credentialing &amp; Payer Enrollment</span>
            <h1>
              Done right, <em>from start to finish.</em>
            </h1>
            <p className={styles.lead}>
              We manage the entire credentialing lifecycle — initial applications through re-credentialing — so providers
              enroll faster, stay eligible across every payer, and start billing sooner.
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
              <Link className={cx(styles.btn, styles.btnGhostDark)} href="/credentialing-pricing">
                See credentialing pricing
              </Link>
            </div>
            <div className={styles.chips}>
              <span className={styles.chip}>{check}45–90 day enrollment</span>
              <span className={styles.chip}>{check}Commercial &amp; government</span>
              <span className={styles.chip}>{check}All 50 states</span>
            </div>
          </div>
          <div className={styles.rv}>
            <div className={styles.preview}>
              <div className={styles.ph}>
                <span className={styles.pt}>Enrollment pipeline</span>
                <span className={styles.sample}>Sample</span>
              </div>
              <div className={cx(styles.prow, styles.done)}>
                <div className={styles.st}>✓</div>
                <div>
                  <div className={styles.pl}>CAQH profile built &amp; attested</div>
                  <div className={styles.pm}>Document checklist complete</div>
                </div>
                <span className={cx(styles.pstat, styles.psDone)}>Done</span>
              </div>
              <div className={cx(styles.prow, styles.done)}>
                <div className={styles.st}>✓</div>
                <div>
                  <div className={styles.pl}>Optum &amp; HealthPartners submitted</div>
                  <div className={styles.pm}>Commercial panels</div>
                </div>
                <span className={cx(styles.pstat, styles.psDone)}>Done</span>
              </div>
              <div className={styles.prow}>
                <div className={styles.st}>3</div>
                <div>
                  <div className={styles.pl}>State Medicaid enrollment</div>
                  <div className={styles.pm}>Aggressive follow-up in progress</div>
                </div>
                <span className={cx(styles.pstat, styles.psProg)}>In review</span>
              </div>
              <div className={styles.prow}>
                <div className={styles.st}>4</div>
                <div>
                  <div className={styles.pl}>Panel approval &amp; billing-ready</div>
                  <div className={styles.pm}>Re-attestation scheduled · 120 days</div>
                </div>
                <span className={cx(styles.pstat, styles.psProg)}>Queued</span>
              </div>
              <div className={styles.pcap}>Illustrative dashboard preview — replace with product screenshot</div>
            </div>
          </div>
        </div>
      </section>

      {/* EHR strip */}
      <div className={styles.ehr}>
        <div className={styles.wrap}>
          <div className={styles.lab}>Works with your existing EHR — no migration</div>
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
            <h2>Everything credentialing, handled for every provider.</h2>
            <p>No dental, no vision, no fluff. We&apos;re experts in behavioral-health credentialing — period.</p>
          </div>
          <div className={styles.grid}>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3>CAQH Setup &amp; Refresh</h3>
                <p>
                  We build, maintain, and re-attest CAQH profiles every 120 days so nothing lapses and payers always see
                  current data.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <div>
                <h3>Payer Enrollment</h3>
                <p>
                  Commercial and government enrollments — including Medicaid, Medicare, and their managed care
                  organizations — tracked to approval.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div>
                <h3>Primary Source Verification</h3>
                <p>
                  We verify multiple sources so you know exactly which licenses, education, DEA, malpractice, and
                  certifications are current.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <div>
                <h3>Panel Management</h3>
                <p>
                  Ongoing recredentialing, revalidation, and updates keep panels active and providers continuously
                  billable.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 12a9 9 0 1 1-6.2-8.6" />
                  <path d="M22 4 12 14.01l-3-3" />
                </svg>
              </div>
              <div>
                <h3>Problem Resolution</h3>
                <p>
                  Missing NPI? Expired license? Payer ghosting you? We actively track down missing info and reach out to
                  providers directly.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2 2 7l10 5 10-5-10-5z" />
                  <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3>Two-Layer Quality Control</h3>
                <p>
                  Every submission passes a two-layer QC review, catching the errors others miss before they cause delays
                  or denials.
                </p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M9 11l3 3L22 4" />
                </svg>
              </div>
              <div>
                <h3>Status Transparency</h3>
                <p>Clear checklists and step-by-step updates via email, text, or phone. No black boxes, no silence.</p>
              </div>
            </div>
            <div className={cx(styles.card, styles.rv)}>
              <div className={styles.ic}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3>AI-Accelerated Workflow</h3>
                <p>
                  AI and automation cut labor and turnaround — credentialing that&apos;s more affordable than a full-time
                  hire, without the risk.
                </p>
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
            <h2>From paperwork to billing-ready.</h2>
          </div>
          <div className={styles.steps}>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 01</div>
              <h3>Pre-screen &amp; collect</h3>
              <p>
                Clear checklist; we verify NPIs, licenses, and eligibility up front — and gather what&apos;s missing for
                you.
              </p>
            </div>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 02</div>
              <h3>Build &amp; attest CAQH</h3>
              <p>Profiles completed, verified through primary sources, and attested so payers never reject on stale data.</p>
            </div>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 03</div>
              <h3>Enroll &amp; follow up</h3>
              <p>
                Submit to every required payer and pursue each application with aggressive follow-up until panels approve.
              </p>
            </div>
            <div className={cx(styles.step, styles.rv)}>
              <div className={styles.n}>STEP 04</div>
              <h3>Maintain &amp; recredential</h3>
              <p>Re-attestation and revalidation scheduled ahead of deadlines so coverage never lapses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.bgMint}>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.center, styles.rv)}>
            <span className={styles.pill}>Proof</span>
            <h2>Faster enrollment. Faster billing. Healthier revenue.</h2>
          </div>
          <div className={styles.stats}>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>45–90</div>
              <div className={styles.l}>Days to enroll most payers</div>
            </div>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>30+</div>
              <div className={styles.l}>Credentialing &amp; RCM experts</div>
            </div>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>~175</div>
              <div className={styles.l}>Years of combined experience</div>
            </div>
            <div className={cx(styles.stat, styles.rv)}>
              <div className={styles.v}>2-layer</div>
              <div className={styles.l}>QC on every submission</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GAIN */}
      <section>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.rv)}>
            <span className={styles.pill}>What you gain</span>
            <h2>Every day a provider isn&apos;t credentialed is lost revenue.</h2>
            <p>We work with urgency to get your team enrolled and billing as quickly as possible.</p>
          </div>
          <ul className={styles.gains}>
            <li className={styles.rv}>
              <span className={styles.ck}>{check}</span>Shorter time-to-panel with aggressive follow-up at every stage
            </li>
            <li className={styles.rv}>
              <span className={styles.ck}>{check}</span>Fewer denials from lapsed, missing, or inaccurate data
            </li>
            <li className={styles.rv}>
              <span className={styles.ck}>{check}</span>Airtight, audit-ready provider records maintained continuously
            </li>
            <li className={styles.rv}>
              <span className={styles.ck}>{check}</span>Credentialing off your plate — more affordable than in-house
            </li>
          </ul>
        </div>
      </section>

      {/* WHY (dark split) */}
      <section className={styles.bgDark}>
        <div className={cx(styles.wrap, styles.split)}>
          <div className={styles.rv}>
            <span className={cx(styles.pill, styles.onDark)}>Why Credify</span>
            <h2 style={{ color: "#fff", marginTop: "16px" }}>Built for behavioral health — and only behavioral health.</h2>
            <p className={styles.darkLead}>
              By specializing in behavioral health agencies, CCBHCs, and FQHCs, we run a highly efficient operation — not a
              generic, do-everything shop. We use HIPAA-compliant data security with triple-redundancy backups to keep your
              information protected.
            </p>
            <div className={styles.whystats}>
              <div>
                <div className={styles.v}>30+</div>
                <div className={styles.l}>credentialing &amp; RCM experts</div>
              </div>
              <div>
                <div className={styles.v}>~175 yrs</div>
                <div className={styles.l}>combined behavioral-health experience</div>
              </div>
              <div>
                <div className={styles.v}>50</div>
                <div className={styles.l}>states served</div>
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
              Team / operations photo
              <br />
              or credentialing dashboard screenshot
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.bgSmoke}>
        <div className={styles.wrap}>
          <div className={cx(styles.secHead, styles.rv)}>
            <span className={styles.pill}>Testimonials</span>
            <h2>Credentialing, finally off their shoulders.</h2>
          </div>
          <div className={styles.quotes}>
            <div className={cx(styles.quote, styles.rv)}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                &quot;We were drowning in credentialing paperwork until we found Credify. Our providers got enrolled faster
                than ever, and we finally started seeing revenue flow in.&quot;
              </p>
              <div className={styles.who}>
                <div className={styles.av}>M</div>
                <div>
                  <div className={styles.nm}>Malik J.</div>
                  <div className={styles.rl}>Behavioral Health Intern · NJ</div>
                </div>
              </div>
            </div>
            <div className={cx(styles.quote, styles.rv)}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                &quot;Streamlined, consistent, and completely off our plate. Best of all, it&apos;s more affordable than a
                full-time employee — with none of the risk.&quot;
              </p>
              <div className={styles.who}>
                <div className={styles.av}>C</div>
                <div>
                  <div className={styles.nm}>Cynthia R.</div>
                  <div className={styles.rl}>Agency Owner · TX</div>
                </div>
              </div>
            </div>
            <div className={cx(styles.quote, styles.rv)}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                &quot;They handle every detail with care. I never have to wonder where we&apos;re at with payer enrollments.
                They just get it done.&quot;
              </p>
              <div className={styles.who}>
                <div className={styles.av}>M</div>
                <div>
                  <div className={styles.nm}>Dr. Melissa K.</div>
                  <div className={styles.rl}>Clinical Director</div>
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
            <h2>Below-market pricing, aligned to results.</h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Choose how we&apos;re accountable. Every model is tied to what actually gets delivered.
            </p>
          </div>
          <div className={styles.pricing}>
            <div className={cx(styles.ptier, styles.rv)}>
              <div className={styles.k}>Pay from results</div>
              <h3>Percentage of collections</h3>
              <p>Our fee is a share of the revenue we help unlock. Faster enrollment means faster billing.</p>
            </div>
            <div className={cx(styles.ptier, styles.feat, styles.rv)}>
              <span className={styles.tag}>Most popular</span>
              <div className={styles.k}>Pay for progress</div>
              <h3>Performance-based</h3>
              <p>Incentives kick in only when metrics move — time-to-panel, approvals, and collections.</p>
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
            <span className={styles.pill}>FAQ</span>
            <h2>Credentialing questions, answered.</h2>
          </div>
          <div className={styles.faq}>
            <details className={styles.rv}>
              <summary>
                How long does enrollment take?<span className={styles.x}>+</span>
              </summary>
              <p>
                It depends on the payer, but most take 45–90 days. Our team works to shorten that window with aggressive
                payer follow-up at every stage.
              </p>
            </details>
            <details className={styles.rv}>
              <summary>
                Do you handle both commercial and government payers?<span className={styles.x}>+</span>
              </summary>
              <p>Yes — including Medicaid, Medicare, and their managed care organizations.</p>
            </details>
            <details className={styles.rv}>
              <summary>
                Can you pick up a process we&apos;ve already started?<span className={styles.x}>+</span>
              </summary>
              <p>
                Absolutely. We can pick up exactly where you left off, or restart from the beginning if needed — whichever
                gets your providers enrolled faster.
              </p>
            </details>
            <details className={styles.rv}>
              <summary>
                What if information is missing?<span className={styles.x}>+</span>
              </summary>
              <p>
                We&apos;ll identify exactly what&apos;s missing and reach out directly to your providers to gather it — you
                don&apos;t have to chase anything.
              </p>
            </details>
            <details className={styles.rv}>
              <summary>
                Do you credential other medical specialties?<span className={styles.x}>+</span>
              </summary>
              <p>
                We focus exclusively on behavioral health agencies (aside from primary care), which lets us run a highly
                efficient operation.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={cx(styles.bgDark, styles.final)}>
        <div className={cx(styles.wrap, styles.rv)}>
          <h2>Stop losing revenue to enrollment delays.</h2>
          <p>Let&apos;s get your providers credentialed, enrolled, and billing — done right, from start to finish.</p>
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
