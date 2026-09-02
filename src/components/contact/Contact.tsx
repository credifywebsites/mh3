"use client";

import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { sendContactEmail } from "@/app/actions/contact";
import siteConfig from "@/config/site";

const cx = (...classes: (string | boolean | undefined | null)[]) => 
  classes.filter(Boolean).join(" ");

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Handle initial scroll if hash is present
    if (window.location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        // Small delay to ensure everything is rendered
        const timer = setTimeout(() => {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        // Smooth scroll to form section top
        const element = document.getElementById("contact-form");
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* ... Hero section remains same ... */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.heroEyebrow}>
              <span className={styles.liveDot}></span> We Run Your Practice
            </div>
            <h1>Let&apos;s talk about<br /><em>taking it all off<br />your plate.</em></h1>
            <p className={styles.heroSub}>
              We run the operations behind your practice — CFO-level analytics, billing, credentialing, 
              scheduling, and KPI&apos;s and clinical reporting — so you can stay fully focused on your clients. 
              Reach out, and we&apos;ll show you exactly how it works.
            </p>
            <div className={styles.heroBadges}>
              <div className={styles.heroBadge}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4 7l2.5 2.5 4-4" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Response within 1 hour
              </div>
              <div className={styles.heroBadge}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4 7l2.5 2.5 4-4" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                No obligation
              </div>
              <div className={styles.heroBadge}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#3dbd94" strokeWidth="1.3"/><path d="M4 7l2.5 2.5 4-4" stroke="#3dbd94" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Expert support included
              </div>
            </div>
          </div>

          <div className={styles.heroContactCard}>
            <div className={styles.heroContactCardHeader}>
              <div className={styles.heroContactLabel}>Get in touch</div>
              <div className={styles.heroContactBadge}>
                <span className={styles.liveDot}></span> Available now
              </div>
            </div>
            <div className={styles.heroContactBody}>
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 3.5c0 6.351 5.149 11.5 11.5 11.5h1a1 1 0 001-1v-2.382a1 1 0 00-.724-.962l-2.618-.742a1 1 0 00-1.09.38l-.764 1.1a9.037 9.037 0 01-4.198-4.198l1.1-.764a1 1 0 00.38-1.09l-.742-2.618A1 1 0 006.882 2H4.5a1 1 0 00-1 1v.5z" stroke="#3dbd94" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className={styles.contactMethodLabel}>Phone</div>
                  <div className={styles.contactMethodVal}><a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a></div>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="4" width="13" height="9" rx="2" stroke="#3dbd94" strokeWidth="1.3"/><path d="M2 6l6.5 4.5L15 6" stroke="#3dbd94" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className={styles.contactMethodLabel}>Email</div>
                  <div className={styles.contactMethodVal}>
                    {siteConfig.emails.map((e, i) => (
                      <React.Fragment key={e.address}>
                        {i > 0 && <br />}
                        <a href={`mailto:${e.address}`}>{e.address}</a>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.heroContactDivider}></div>
              <div className={styles.contactMethod}>
                <div className={styles.contactMethodIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 2C5.74 2 3.5 4.24 3.5 7c0 3.938 5 8 5 8s5-4.063 5-8c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#3dbd94" strokeWidth="1.3"/></svg>
                </div>
                <div>
                  <div className={styles.contactMethodLabel}>Headquarters</div>
                  <div className={styles.contactMethodVal} style={{ fontSize: "12.5px", fontWeight: 500 }}>
                    {siteConfig.hqAddress}
                  </div>
                </div>
              </div>
              <div className={styles.heroContactResponse}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#4ade80" strokeWidth="1.2"/><path d="M7 4v3.5l2.5 1.5" stroke="#4ade80" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                We&apos;ll usually reply within one hour during business hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className={styles.trustBar}>
        {[
          { icon: <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z" stroke="#1a8a66" strokeWidth="1.3" strokeLinejoin="round"/>, label: "Trustpilot", val: "TrustScore 4 ★★★★" },
          { icon: <path d="M15.5 8.2c0-.5-.1-1-.2-1.5H8v2.8h4.1c-.2.9-.7 1.7-1.5 2.2v1.8h2.4c1.4-1.3 2.2-3.2 2.2-5.3h-.7z" fill="#4285F4"/>, label: "Google Reviews", val: "5 Stars ★★★★★", isGoogle: true },
          { icon: <><rect x="3" y="7" width="10" height="8" rx="1.5" stroke="#1a8a66" strokeWidth="1.3"/><path d="M5.5 7V5.5a2.5 2.5 0 015 0V7" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round"/></>, label: "Compliance", val: "HIPAA + BAA Signed" },
          { icon: <><rect x="2" y="2" width="12" height="12" rx="2" stroke="#1a8a66" strokeWidth="1.3"/><path d="M5 8h6M8 5v6" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round"/></>, label: "Collection Rate", val: "97%+ Avg. Collection" },
          { icon: <><circle cx="8" cy="8" r="6.5" stroke="#1a8a66" strokeWidth="1.3"/><path d="M5 8l2.5 2.5 4-4" stroke="#1a8a66" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></>, label: "Payer Coverage", val: "1,126 Payers · All 50 States" }
        ].map((item, i, arr) => (
          <React.Fragment key={i}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {item.isGoogle ? (
                    <path d="M15.5 8.2c0-.5-.1-1-.2-1.5H8v2.8h4.1c-.2.9-.7 1.7-1.5 2.2v1.8h2.4c1.4-1.3 2.2-3.2 2.2-5.3h-.7z" fill="#4285F4"/>
                  ) : null}
                  {!item.isGoogle ? item.icon : (
                    <>
                      <path d="M8 16c2 0 3.7-.6 4.9-1.7l-2.4-1.8c-.6.4-1.5.7-2.5.7-1.9 0-3.5-1.3-4.1-3H1.4v1.9C2.7 14.5 5.2 16 8 16z" fill="#34A853"/>
                      <path d="M3.9 9.5c-.2-.5-.3-.9-.3-1.5s.1-1 .3-1.5V4.7H1.4A7.2 7.2 0 000 8c0 1.2.3 2.2.8 3.3l3.1-1.8z" fill="#FBBC05"/>
                      <path d="M8 3.2c1.1 0 2 .4 2.7 1.1l2-2C11.3 1.3 9.8.5 8 .5 5.2.5 2.7 2 1.4 4.3l3.1 1.8C5.1 4.5 6.8 3.2 8 3.2z" fill="#EA4335"/>
                    </>
                  )}
                </svg>
              </div>
              <div>
                <div className={styles.trustTextLabel}>{item.label}</div>
                <div className={styles.trustTextVal}>{item.val}</div>
              </div>
            </div>
            {i < arr.length - 1 && <div className={styles.trustDivider}></div>}
          </React.Fragment>
        ))}
      </div>

      <div className={styles.contactMain} id="contact-form">
        <div className={styles.formSection}>
          {!isSubmitted ? (
            <>
              <div className={styles.formEyebrow}>Book a free consultation</div>
              <h2>We&apos;ll get back to you<br />within the hour.</h2>
              <p>Tell us a little about your practice and we&apos;ll reach out to schedule a demo — no commitment, no pressure.</p>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fname">First Name *</label>
                    <input type="text" id="fname" name="fname" placeholder="Jane" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lname">Last Name *</label>
                    <input type="text" id="lname" name="lname" placeholder="Smith" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="business">Business / Agency Name *</label>
                  <input type="text" id="business" name="business" placeholder="Your behavioral health agency" required />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" placeholder="jane@yourpractice.com" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">What can we help with?</label>
                  <select id="service" name="service" defaultValue="all">
                    <option value="">Select a service…</option>
                    <option value="all" style={{ fontWeight: 700 }}>⭐ Full Practice Operations — We Run Everything</option>
                    <option value="rcm">RCM / Billing</option>
                    <option value="credentialing">Credentialing & Enrollment</option>
                    <option value="both">Both RCM & Credentialing</option>
                    <option value="ai">AI Services (Scheduling / Reminders)</option>
                    <option value="ehr">EHR Enhancement</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Anything else you&apos;d like us to know?</label>
                  <textarea id="message" name="message" placeholder="Monthly collections, number of providers, current challenges…"></textarea>
                </div>
                <div className={styles.consentSection}>
                  <div className={styles.consentItem}>
                    <div className={styles.consentCheck}>
                      <input type="checkbox" id="smsConsent" name="smsConsent" />
                      <label htmlFor="smsConsent">SMS Consent (optional)</label>
                    </div>
                    <div className={styles.consentText}>
                      I agree to receive SMS messages from Credify regarding appointment reminders, billing updates, and practice support communications. By checking this box, you agree to receive text messages from Credify at the number provided. Message frequency may vary. Standard message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. We will not share your mobile number with third parties for promotional or marketing purposes. View our <a href="/privacy-policy">Privacy Policy</a>.
                    </div>
                  </div>

                  <div className={styles.consentItem}>
                    <div className={styles.consentCheck}>
                      <input type="checkbox" id="emailConsent" name="emailConsent" />
                      <label htmlFor="emailConsent">Email & Other Communications (optional)</label>
                    </div>
                    <div className={styles.consentText}>
                      I agree to be contacted by email, mail, and automated tools including AI and chatbots in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
                    </div>
                  </div>
                </div>
                
                {error && <div className={styles.formError}>{error}</div>}
                
                <button type="submit" className={styles.btnSubmit} disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send message"}
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 7.5h11M8.5 3l4 4.5-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </form>
            </>
          ) : (
            <div className={styles.formSuccess}>
              <div className={styles.formSuccessIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Message sent!</h3>
              <p>Thank you — we&apos;ll be in touch within the hour during business hours. If it&apos;s urgent, call us directly at <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "var(--brand600)", fontWeight: 600 }}>{siteConfig.phoneDisplay}</a>.</p>
            </div>
          )}
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardTitle}>Our offices</div>
            {siteConfig.offices.map((office) => (
              <div key={office.city} className={styles.officeItem}>
                <div className={styles.officeIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 2C5.74 2 3.5 4.24 3.5 7c0 3.938 5 8 5 8s5-4.063 5-8c0-2.76-2.24-5-5-5zm0 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#1a8a66" strokeWidth="1.3"/></svg>
                </div>
                <div>
                  <div className={styles.officeCity}>{office.city}</div>
                  <div className={styles.officeAddr} dangerouslySetInnerHTML={{ __html: office.address.replace(/\n/g, '<br />') }} />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardTitle}>Direct contact</div>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetailRow}>
                <div className={styles.contactDetailIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 3.5c0 6.351 5.149 11.5 11.5 11.5h1a1 1 0 001-1v-2.382a1 1 0 00-.724-.962l-2.618-.742a1 1 0 00-1.09.38l-.764 1.1a9.037 9.037 0 01-4.198-4.198l1.1-.764a1 1 0 00.38-1.09l-.742-2.618A1 1 0 006.882 2H4.5a1 1 0 00-1 1v.5z" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className={styles.contactDetailLabel}>Phone & Fax</div>
                  <div className={styles.contactDetailVal}><a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a></div>
                </div>
              </div>
              <div className={styles.contactDetailRow}>
                <div className={styles.contactDetailIcon}>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="4" width="13" height="9" rx="2" stroke="#1a8a66" strokeWidth="1.3"/><path d="M2 6l6.5 4.5L15 6" stroke="#1a8a66" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className={styles.contactDetailLabel}>Email</div>
                  <div className={styles.contactDetailVal}>
                    {siteConfig.emails.map((e, i) => (
                      <React.Fragment key={e.address}>
                        {i > 0 && <br />}
                        <a href={`mailto:${e.address}`}>{e.address}</a>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoCardTitle}>What happens after you reach out</div>
            <div className={styles.whatHappens}>
              {[
                { num: 1, title: "We reply within the hour", desc: "A real person from our team will reach out — not an automated sequence." },
                { num: 2, title: "Detailed practice walkthrough", desc: "We review your current setup, identify gaps, and show you exactly what we'd change." },
                { num: 3, title: "Custom proposal — no templates", desc: "You get a clear picture of pricing, timeline, and what getting started actually looks like." },
                { num: 4, title: "You decide — zero pressure", desc: "We don't do hard closes. If we're a fit, great. If not, we'll tell you honestly." }
              ].map(step => (
                <div key={step.num} className={styles.whatStep}>
                  <div className={styles.whatStepNum}>{step.num}</div>
                  <div>
                    <div className={styles.whatStepTitle}>{step.title}</div>
                    <div className={styles.whatStepDesc}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className={styles.valuePropBanner}>
        <div className={styles.valuePropInner}>
          <div className={styles.valuePropEyebrow}>Our commitment to you</div>
          <h2 className={styles.valuePropH2}>
            We run your practice so you can focus<br /><em style={{ color: "var(--brand400)", fontStyle: "italic" }}>entirely on seeing clients.</em>
          </h2>
          <p className={styles.valuePropSub}>
            We handle practice management, CFO-level reporting & analytics, billing, credentialing, 
            scheduling, and the day-to-day operational complexity — so the only thing on your plate is 
            the work that actually matters. In return, we expect to be paid a proportionate share of what we contribute. No more. No less.
          </p>
          <div className={styles.valuePropGrid}>
            <div className={styles.valuePropCard}>
              <div className={styles.valuePropCardTag}>You do</div>
              <div className={styles.valuePropCardTitle}>See clients. Grow your agency.</div>
              <div className={styles.valuePropCardDesc}>Clinical work, client relationships, and building the care team you believe in.</div>
            </div>
            <div className={cx(styles.valuePropCard, styles.valuePropCardFeatured)}>
              <div className={styles.valuePropCardTag}>We do</div>
              <div className={styles.valuePropCardTitle}>Run everything else.</div>
              <div className={styles.valuePropCardDesc}>Practice management, CFO reporting & analytics, billing, credentialing, scheduling, payer follow-up, and operational infrastructure.</div>
            </div>
            <div className={styles.valuePropCard}>
              <div className={styles.valuePropCardTag}>Our deal</div>
              <div className={styles.valuePropCardTitle}>Proportionate. Aligned. Fair.</div>
              <div className={styles.valuePropCardDesc}>We earn based on what we contribute. Our success is tied directly to yours. No more. No less.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqHeader}>
            <div className={styles.sectionTag}>Common questions</div>
            <h2 className={styles.sectionH2}>Answered before you ask.</h2>
          </div>
          <div className={styles.faqGrid}>
            {[
              { q: "Why are your rates so inexpensive compared to other vendors?", a: "We leverage AI and advanced automation to significantly reduce labor costs — and pass those savings directly to you without compromising on collection rates." },
              { q: "How many health insurance plans do you support?", a: "We support over 1,126 plans, including Medicaid, Medicare, and their MCOs and ACOs across all 50 states." },
              { q: "What states do you serve?", a: "We serve all 50 states and do not provide services outside of the United States." },
              { q: "How long does the credentialing process take?", a: "Most payers take 45–90 days. Our team works to shorten that window with aggressive follow-up at every stage." },
              { q: "Can you help if I've already started the credentialing process?", a: "Absolutely. We can pick up exactly where you left off, or restart if needed — whichever gets your providers enrolled faster." },
              { q: "Do you work with Medicaid and Medicare?", a: "Yes. We handle both commercial and government payer enrollments, including Medicaid, Medicare, and their managed care organizations." },
              { q: "What if my provider is missing documents?", a: "We'll identify exactly what's needed and reach out directly to your providers to gather the information — you don't have to chase it yourself." },
              { q: "Is your platform HIPAA-compliant?", a: "Yes. We use HIPAA-compliant data security with triple-redundant backups. A BAA is signed with every client." },
              { q: "Do you perform primary source verification?", a: "Yes. We verify licenses, certifications, education, DEA registration, malpractice coverage, and more — so you always know what's current." },
              { q: "Do you credential medical specialties, CCBHCs, and FQHCs?", a: "Except primary care, we do not. We focus exclusively on behavioral health agencies — which is what makes us so effective at it." },
              { q: "Will I get status updates?", a: "Yes. We keep you updated at every step via email, text, or phone — whichever you prefer. No black boxes, no silence." },
              { q: "What collection rates do you achieve?", a: "Our clients consistently achieve 97%+ collection rates — delivered by 80+ specialists using AI-assisted billing and denial management." }
            ].map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <div className={styles.faqQ}>{faq.q}</div>
                <div className={styles.faqA} dangerouslySetInnerHTML={{ __html: faq.a.replace(/(\d+[^ ]*|all 50 states| commercial and government payer enrollments| Medicaid, Medicare| HIPAA-compliant data security| 97%\+ collection rates)/gi, "<strong>$1</strong>") }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaTag}>We Run Your Practice</div>
        <h2>Ready to hand it over<br />and just focus on care?</h2>
        <p>Call us now or fill out the form above. We respond within the hour — and we&apos;ll show you exactly what getting started looks like.</p>
        <div className={styles.finalBtns}>
          <button className={styles.btnWhite} onClick={() => window.location.href=`tel:${siteConfig.phoneRaw}`}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 3c0 5.523 4.477 10 10 10h.5a1 1 0 001-1v-2a1 1 0 00-.724-.962l-2.276-.65a1 1 0 00-1.09.38l-.666.96A7.56 7.56 0 015.272 6.25l.96-.666a1 1 0 00.38-1.09l-.65-2.276A1 1 0 005 1.5H3a1 1 0 00-1 1V3z" stroke="#0f5540" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Call {siteConfig.phoneDisplay}
          </button>
          <a href="#contact-form" className={styles.btnGhost}>
            Fill out the form →
          </a>
        </div>
      </section>
    </div>
  );
}
