import { brand, demoMailto, telHref } from "./brand";
import { c } from "./cx";

/**
 * The closing "Book a demo" band. Identical markup on both pages, and the
 * target of every `#demo` link in the nav, the module cards and the hero.
 */
export function DemoCta() {
  return (
    <section className={c("cta")} id="demo">
      <div className={c("wrap")}>
        <span className={c("pill")}>Book a demo</span>
        <h2 style={{ marginTop: "16px" }}>See it running on your practice.</h2>
        <p className={c("lede")}>
          Thirty minutes, start to finish. We walk a referral from the first phone call through to
          the paid claim, using the modules above.
        </p>
        <div className={c("cta-row")}>
          <a className={c("btn btn-primary")} href={demoMailto}>
            Book a demo
          </a>
          <a className={c("btn btn-ghost")} href={telHref}>
            Call {brand.phoneDisplay}
          </a>
        </div>
        <p className={c("tel")} style={{ marginTop: "18px" }}>
          {/* Brands with one shared inbox (Keep Your EHR) get one mention, not
              the same address printed twice. */}
          {brand.salesEmail === brand.supportEmail
            ? `${brand.salesEmail} for sales and support`
            : `${brand.salesEmail} for sales, ${brand.supportEmail} for support`}
        </p>
      </div>
    </section>
  );
}
