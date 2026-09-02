"use client";

import React from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import styles from "./Disclaimer.module.css";

export function Disclaimer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Legal Terms</span>
          <h1 className={styles.title}>Website Disclaimer</h1>
        </div>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>1.</span> General Information</h2>
          <p>
            The information provided on {siteConfig.domain} is for general informational and educational purposes only. All content is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, reliability, or completeness of any information on the site.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>2.</span> Not Medical or Legal Advice</h2>
          <p>
            The content on this website does not constitute medical, legal, or professional advice. You should not rely on the information presented as a substitute for consultation with licensed professionals. Always seek the advice of qualified providers or legal counsel for any specific questions.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>3.</span> No Warranties</h2>
          <p>
            While we strive to maintain up-to-date and accurate information, {siteConfig.domain} makes no warranties or guarantees, express or implied, regarding the availability, accuracy, or reliability of the site or its content. We reserve the right to modify or remove content at any time without notice.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>4.</span> Limitation of Liability</h2>
          <p>
            Under no circumstances shall {siteConfig.domain}, its affiliates, or its employees be held liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of, or inability to use, this website or its contents.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>5.</span> Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites or services. These are provided for your convenience only. We do not control and are not responsible for the content, privacy policies, or practices of any third-party websites.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>6.</span> Data Protection</h2>
          <p>
            {siteConfig.domain} complies with applicable data protection laws, including the General Data Protection Regulation (GDPR) for users in the European Economic Area (EEA) and relevant U.S. privacy laws.
          </p>
          <ul>
            <li>Any personal data collected will be processed fairly, lawfully, and transparently.</li>
            <li>Users have the right to access, correct, or delete their personal information.</li>
            <li>We use industry-standard measures to protect data security.</li>
          </ul>
          <p>
            For more details, please refer to our <Link href="/privacy-policy" style={{ color: "var(--primary)", textDecoration: "underline" }}>Privacy Policy</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>7.</span> Copyright & Intellectual Property</h2>
          <p>
            All content, logos, images, and materials on this site are the property of {siteConfig.domain} unless otherwise stated and may not be reproduced without prior written consent.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>8.</span> Jurisdiction</h2>
          <p>
            This website is operated from the United States. Any disputes arising from the use of this website shall be governed by the laws of the State of California, without regard to its conflict of law principles. For EU residents, local data protection rights under GDPR will still apply.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>9.</span> Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this disclaimer, please contact us at:
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
