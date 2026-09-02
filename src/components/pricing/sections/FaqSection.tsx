"use client";

import React from "react";
import styles from "../Pricing.module.css";

interface FaqSectionProps {
  title?: string;
}

export function FaqSection({ title = "Answered clearly." }: FaqSectionProps) {
  return (
    <section className={styles.faq}>
      <div className={styles.sectionTag}>Common questions</div>
      <h2 className={styles.sectionH2}>{title}</h2>
      <p className={styles.sectionSub}>No vague answers. If you don&apos;t see what you need, call us.</p>

      <div className={styles.faqGrid}>
        {[
          { q: "What does \"from 3.49%\" actually mean?", a: "Your final rate depends on volume, specialty mix, and the services you select. <strong>Practices with higher claim volume typically land at the lower end of the range.</strong> We give you an exact rate during the discovery call — before you sign anything." },
          { q: "Is credentialing really included, or is it an add-on?", a: "Credentialing is included in the Percentage and Performance-Based plans at no additional cost. <strong>CAQH refresh, payer enrollment, and panel management are all handled.</strong> For the Flexible plan, credentialing can be added as a module." },
          { q: "What if my state doesn't allow percentage billing?", a: "Several states restrict or prohibit percentage-based billing for medical services. <strong>We offer flat monthly rates in all restricted states</strong> — structured to be equivalent in value. Ask us which model applies to your state during the consultation." },
          { q: "Do I have to switch my EHR?", a: "No. We work with every major behavioral health EHR — EHRYourWay, TherapyNotes, SimplePractice, Credible, AdvanceMD, TheraNest, Qualifacts, Valant, InSync, and others. <strong>Zero migration required.</strong>" },
          { q: "How long is the contract?", a: "We don't require long-term contracts. <strong>Most clients stay because results are consistent, not because they're locked in.</strong> Ask about our free trial option — you can see real collections impact before making a long-term commitment." },
          { q: "What's included in the free trial?", a: "The free trial gives you access to the full billing and eligibility workflow on a subset of your claims. <strong>You see real results on real claims</strong> — denial rates, collection speed, and clean claim percentages — before paying anything." },
          { q: "How fast can you get us live?", a: "Onboarding typically takes 5–7 business days. We connect to your EHR, sign the BAA, complete credentialing setup, and begin submitting clean claims. <strong>Most practices see their first collections improvement within the first billing cycle.</strong>" },
          { q: "What makes you different from our current billing company?", a: "Most billing companies submit claims and wait. We combine AI claim scrubbing, real-time eligibility, proactive denial management, and 20 daily executive reports — plus growth tools that most billing companies don't offer at all. <strong>We're not just billing. We're a growth engine.</strong>" }
        ].map((faq, i) => (
          <div key={i} className={styles.faqItem}>
            <div className={styles.faqQ}>{faq.q}</div>
            <div className={styles.faqA} dangerouslySetInnerHTML={{ __html: faq.a }} />
          </div>
        ))}
      </div>
    </section>
  );
}
