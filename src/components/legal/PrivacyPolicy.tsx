"use client";

import React from "react";
import siteConfig from "@/config/site";
import styles from "./PrivacyPolicy.module.css";

export function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <span className={styles.eyebrow}>Compliance & Transparency</span>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>1.</span> Introduction</h2>
          <p>
            {siteConfig.domain} is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information in accordance with applicable U.S. and international privacy laws, including the General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>2.</span> Information We Collect</h2>
          <p>
            We may collect personal data that you voluntarily provide, such as your name, email address, phone number, and professional credentials. We also automatically collect certain information through cookies and analytics tools, including IP address, browser type, and usage data.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>3.</span> How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and manage our services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Improve website functionality and user experience</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>4.</span> Legal Basis for Processing (GDPR)</h2>
          <p>
            If you are located in the EEA, we process your personal data only when we have a lawful basis, including:
          </p>
          <ul>
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Compliance with legal obligations</li>
            <li>Legitimate interests</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>5.</span> Sharing of Information</h2>
          <p>
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
          <div className={styles.notice}>
            <p>
              By providing a telephone number and submitting this form you are consenting to be contacted by SMS/text message. Message & data rates may apply and message frequency may vary. Reply Help for more information. You can reply STOP to opt-out of further messaging.
            </p>
            <p>
              You also consent to be contacted by email, mail, and automated tools including AI and chatbots.
            </p>
            <p>
              Your information will be handled in accordance with our Privacy Policy.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>6.</span> Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>7.</span> Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access to your data</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your data</li>
            <li>Objection to processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>8.</span> Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience and analyze site usage. You may control cookie settings through your browser.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>9.</span> Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or destruction.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>10.</span> Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className={styles.section}>
          <h2><span className={styles.sectionNum}>11.</span> Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
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
