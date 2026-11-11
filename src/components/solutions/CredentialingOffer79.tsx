import Link from "next/link";
import styles from "./CredentialingOffer79.module.css";

export function CredentialingOffer79() {
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
            Per-application pricing with volume discounts. CAQH setup, payor enrollment, and panel management: all handled.
          </p>

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

            <article className={styles.tier} data-tier="volume">
              <p className={styles.tierLabel}>Volume</p>
              <div className={styles.priceRow}>
                <span className={styles.priceDollar}>$</span>
                <span className={styles.priceAmount}>99</span>
              </div>
              <p className={styles.pricePer}>per application</p>
              <p className={styles.tierRange}>21+ applications</p>
              <span className={`${styles.tag} ${styles.tagGreen}`}>Save $50/app vs Essential</span>
              <p className={styles.tierDesc}>
                Our standard Volume rate for multi-location groups and high-volume practices. Discounted rate kicks in automatically at 21 applications.
              </p>
              <Link className={`${styles.btn} ${styles.btnOutline}`} id="cta-volume" data-cta="volume" href="/contact#contact-form">
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
                  <p className={styles.featureName}>Payor enrollment</p>
                  <p className={styles.featureDesc}>Submitted to all relevant payors: commercial, Medicaid, Medicare, and government.</p>
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
                  <p className={styles.featureDesc}>Real-time updates on every application. No chasing payors yourself.</p>
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
