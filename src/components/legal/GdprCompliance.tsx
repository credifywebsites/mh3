"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./GdprCompliance.module.css";

export function GdprCompliance() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Legal Disclaimer</span>
          <h1 className={styles.title}>GDPR Compliance</h1>
          <p className={styles.effectiveDate}>Effective Date: 1/01/25</p>
        </div>

        <p className={styles.intro}>
          Welcome to {siteConfig.domain} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By using this website, you agree to the terms outlined in this Disclaimer.
        </p>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>1.</span> General Information</h2>
          <p>
            The content on this website is provided for general informational purposes only. We make no guarantees regarding the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>2.</span> Data Protection (GDPR Compliance)</h2>
          <p>
            We are committed to protecting your privacy and ensuring that your personal data is handled in accordance with the General Data Protection Regulation (EU) 2016/679 (“GDPR”) and other applicable privacy laws.
          </p>
          <p>
            When you visit our site, submit forms, or interact with us, we may collect and process personal data such as:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>IP address</li>
            <li>Other information voluntarily provided</li>
          </ul>
          <p>
            We collect personal data only for specified, explicit, and legitimate purposes and do not process data beyond what is necessary for those purposes.
          </p>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (“right to be forgotten”)</li>
            <li>Object to processing or request data portability</li>
          </ul>
          <p>
            For full details about how we collect, use, and protect your personal data, please review our <Link href="/privacy-policy" style={{ color: "var(--primary)", textDecoration: "underline" }}>Privacy Policy</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>3.</span> External Links</h2>
          <p>
            This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites and are not responsible for their privacy practices.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>4.</span> Limitation of Liability</h2>
          <p>
            In no event will we be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, arising from the use of this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>5.</span> Changes to This Disclaimer</h2>
          <p>
            We reserve the right to modify or update this Disclaimer at any time without prior notice. Your continued use of the website following the posting of changes will mean you accept those changes.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>6.</span> Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer or how we handle your personal data, please contact us at:
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> {siteConfig.emails.find(e => e.label === "Support")?.address ?? siteConfig.emails[0].address}</p>
            <p><strong>Address:</strong> {siteConfig.legalAddress}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
