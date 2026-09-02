"use client";

import React from "react";
import styles from "../Pricing.module.css";

export function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.hiwInner}>
        <div className={styles.sectionTag}>How it works</div>
        <h2 className={styles.sectionH2}>Up and running in days, not months.</h2>
        <p className={styles.sectionSub}>No EHR migration. No disruption. We plug into your existing system and start recovering revenue within the first billing cycle.</p>

        <div className={styles.hiwSteps}>
          {[
            { num: "01", title: "Discovery Call", desc: "We audit your current billing, payer mix, and denial patterns to show exactly where revenue is leaking before you commit to anything." },
            { num: "02", title: "Custom Quote", desc: "Your rate is based on volume, specialty mix, and the services you need. No surprises — your full fee schedule is agreed before we start." },
            { num: "03", title: "Onboarding & BAA", desc: "We connect to your EHR, sign your BAA, complete credentialing setup, and have clean claims submitting within 5–7 business days." },
            { num: "04", title: "Collections Grow", desc: "Daily reporting, proactive denial management, and eligibility verification run continuously. You see results within the first billing cycle." }
          ].map((step, i) => (
            <div key={i} className={styles.hiwStep}>
              <div className={styles.hiwStepNum}>{step.num}</div>
              <div className={styles.hiwStepTitle}>{step.title}</div>
              <div className={styles.hiwStepDesc}>{step.desc}</div>
              {i < 3 && <div className={styles.hiwConnector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
