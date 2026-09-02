import Link from "next/link";
import { DemoCta } from "./DemoCta";
import { SiteFooter } from "./SiteFooter";
import { brand, telHref } from "./brand";
import { c } from "./cx";
import { featureCards } from "./featureCards";
import { moduleCount, stages } from "./solutionsData";

/**
 * Homepage, transcribed from task/credify-index.html: the light hero band with
 * the live stat card, then the sixteen-card "what we handle" grid, the
 * "and 8 more" bar, and the demo band.
 *
 * The stat card numbers ($84K, 87%, 7%, +18 leads, +$320) come from the live
 * site by way of HOMEPAGE_D and are carried over unchanged — see the file
 * lineage comment at the top of credify-index.html.
 */

/** The 8 modules that do not get their own card, listed in the "and 8 more" bar. */
const overflowModules = stages
  .flatMap((stage) => stage.modules)
  .filter((module) => !featureCards.some((card) => card.id === module.id))
  .map((module) => module.title);

function overflowSentence(titles: string[]) {
  if (titles.length < 2) return titles.join("");
  return `${titles.slice(0, -1).join(", ")}, and ${titles[titles.length - 1]}`;
}

export function HomeLanding() {
  return (
    <div className={c("cf-site")}>
      <section className={c("hero hero-pad")}>
        <div className={c("wrap")}>
          <div className={c("hero-in d")}>
            <div className={c("hero-copy")}>
              <span className={c("pill")}>The EHR for behavioral health</span>
              <h1>
                We run the operation.
                <br />
                <em>You focus on the care.</em>
              </h1>
              <p className={c("lede")}>
                {brand.name} is the record, the schedule, the billing engine, the front desk, and
                the credentialing team. One system for a small behavioral health practice, with the
                back office work handled by people who do it every day.
              </p>
              <div className={c("cta-row")}>
                <a className={c("btn btn-primary")} href="#demo">
                  Book a demo
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    style={{
                      width: "15px",
                      height: "15px",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      fill: "none",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  >
                    <path d="M2 8h11M9 3.5L13.5 8L9 12.5" />
                  </svg>
                </a>
                <span className={c("tel")}>
                  or call <a href={telHref}>{brand.phoneDisplay}</a>
                </span>
              </div>
              <ul className={c("trust-list")}>
                {["Every module in one login", "Built for behavioral health", "Performance-based pricing"].map(
                  (claim) => (
                    <li key={claim}>
                      <svg viewBox="0 0 15 15" aria-hidden="true">
                        <path d="M2.5 8L6 11.5L12.5 4" />
                      </svg>
                      {claim}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <div className={c("stat-card")}>
                <div className={c("stat-card-head")}>
                  <span className={c("stat-card-title")}>
                    <span className={c("dot")} />
                    Daily Practice Updates
                  </span>
                  <span className={c("live-badge")}>Live</span>
                </div>
                <div className={c("stat-row")}>
                  <div>
                    <div className={c("stat-num")}>$84K</div>
                    <div className={c("stat-label")}>Revenue recovered</div>
                  </div>
                  <span className={c("stat-delta")}>&#8593; +10.8% vs last month</span>
                </div>
                <div className={c("stat-row")}>
                  <div>
                    <div className={c("stat-num")}>87%</div>
                    <div className={c("stat-label")}>Provider utilization</div>
                  </div>
                  <span className={c("stat-delta")}>&#8593; from 61%</span>
                </div>
                <div className={c("stat-row")}>
                  <div>
                    <div className={c("stat-num")}>7%</div>
                    <div className={c("stat-label")}>No-show rate</div>
                  </div>
                  <span className={c("stat-delta")}>&#8595; from 22%</span>
                </div>
                <div className={c("activity-head")}>Today&apos;s activity</div>
                <div className={c("activity-row")}>
                  <span className={c("a-label")}>Lead follow-up sent</span>
                  <span className={c("a-value")}>+18 leads</span>
                </div>
                <div className={c("activity-row")}>
                  <span className={c("a-label")}>No-show rebooked</span>
                  <span className={c("a-value")}>+$320</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={c("features")} aria-label="Platform features">
        <div className={c("wrap")}>
          <div className={c("head")}>
            <span className={c("pill")}>What we handle</span>
            <h2>Everything except the clinical hour.</h2>
            <p className={c("lede")}>
              These are the ones practices ask about first. Every one of them is included, and all
              of them run on the same record.
            </p>
          </div>

          <div className={c("features-grid")} role="list">
            {featureCards.map((card) => (
              <Link
                key={card.id}
                className={c("feature-card")}
                href={`/solutions?m=${card.id}`}
                role="listitem"
              >
                <span className={c("icon-wrap")}>{card.icon}</span>
                <span className={c("feature-name")}>{card.name}</span>
              </Link>
            ))}
          </div>

          <Link className={c("more-bar")} href="/solutions">
            <span className={c("mb-count")}>and {overflowModules.length} more</span>
            <span className={c("mb-list")}>{overflowSentence(overflowModules)}</span>
            <span className={c("mb-link")}>See all {moduleCount} modules &rarr;</span>
          </Link>
        </div>
      </section>

      <DemoCta />
      <SiteFooter />
    </div>
  );
}
