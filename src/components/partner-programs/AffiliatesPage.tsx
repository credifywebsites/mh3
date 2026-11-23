"use client";

import { useRef, useState, type FormEvent } from "react";
import { submitAffiliateSignup } from "@/app/actions/partnerPrograms";
import { CALC_NOTE, EarningsCalculator } from "./EarningsCalculator";
import "./partner-programs.css";

const ROLES = ["Credify customer", "Therapist or clinician", "Practice owner", "Association or educator", "Other"];
const VOLUMES = ["1 to 3", "4 to 11", "12+"];

type Field = "name" | "email" | "role" | "volume";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function ChipGroup({
  label,
  labelId,
  options,
  value,
  onPick,
  missing,
}: {
  label: string;
  labelId: string;
  options: string[];
  value: string;
  onPick: (v: string) => void;
  missing: boolean;
}) {
  return (
    <div className={`fld${missing ? " missing" : ""}`} data-field={labelId}>
      <div className="lbl" id={labelId}>{label}</div>
      <div className="chips" role="group" aria-labelledby={labelId}>
        {options.map((o) => (
          <button key={o} type="button" className="chip" aria-pressed={value === o} onClick={() => onPick(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Affiliate program page, from AFFILIATES_PAGE_11-09-V9.html. */
export function AffiliatesPage() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", site: "", role: "", volume: "" });
  const [missing, setMissing] = useState<Field[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);

  const set = (key: keyof typeof values, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setMissing((prev) => prev.filter((f) => f !== key));
  };

  const validate = (): Field[] => {
    const bad: Field[] = [];
    if (!values.name.trim()) bad.push("name");
    if (!EMAIL_RE.test(values.email.trim())) bad.push("email");
    if (!values.role) bad.push("role");
    if (!values.volume) bad.push("volume");
    return bad;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const bad = validate();
    setMissing(bad);
    if (bad.length) {
      const selector: Record<Field, string> = {
        name: "#f-name",
        email: "#f-email",
        role: '[data-field="l-role"] .chip',
        volume: '[data-field="l-volume"] .chip',
      };
      formRef.current?.querySelector<HTMLElement>(selector[bad[0]])?.focus();
      return;
    }
    setStatus("sending");
    const res = await submitAffiliateSignup(values);
    if (res.success) {
      setStatus("done");
      requestAnimationFrame(() => doneRef.current?.focus());
    } else {
      setStatus("error");
    }
  };

  const errText =
    missing.length === 1
      ? "Fill in the field in red."
      : missing.length > 1
        ? `Fill in the ${missing.length} fields in red.`
        : status === "error"
          ? "We could not send your signup. Try again in a moment."
          : "";

  const firstName = values.name.trim().split(/\s+/)[0] ?? "";

  return (
    <div className="pp aff">
      <section className="hero">
        <div className="wrap in">
          <div>
            <h1>
              Know an agency buried in paperwork?
              <br />
              <em>Send them our way.</em>
            </h1>
            <p className="lede">
              Introduce behavioral health practices and agencies to Credify. They get a free 90-day trial of everything
              we do. You earn on every one that becomes a customer.
            </p>
          </div>
          <div className="form-card" id="signup">
            {status !== "done" ? (
              <form ref={formRef} noValidate aria-labelledby="signup-title" onSubmit={onSubmit}>
                <h3 id="signup-title">Join the affiliate program</h3>
                <div className="sub">Free to join. Takes about a minute.</div>
                <div className="two">
                  <div className={`fld${missing.includes("name") ? " missing" : ""}`} data-field="name">
                    <label className="lbl" htmlFor="f-name">Full name</label>
                    <input id="f-name" type="text" autoComplete="name" aria-required="true" aria-invalid={missing.includes("name") || undefined} placeholder="First and last name" value={values.name} onChange={(e) => set("name", e.target.value)} />
                  </div>
                  <div className={`fld${missing.includes("email") ? " missing" : ""}`} data-field="email">
                    <label className="lbl" htmlFor="f-email">Email</label>
                    <input id="f-email" type="email" autoComplete="email" inputMode="email" aria-required="true" aria-invalid={missing.includes("email") || undefined} placeholder="you@example.com" value={values.email} onChange={(e) => set("email", e.target.value)} />
                  </div>
                </div>
                <div className="two">
                  <div className="fld">
                    <label className="lbl" htmlFor="f-phone">Phone (optional)</label>
                    <input id="f-phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(555) 555-5555" value={values.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                  <div className="fld">
                    <label className="lbl" htmlFor="f-site">Website or social profile (optional)</label>
                    <input id="f-site" type="text" autoComplete="url" inputMode="url" placeholder="Link" value={values.site} onChange={(e) => set("site", e.target.value)} />
                  </div>
                </div>
                <ChipGroup label="I am a" labelId="l-role" options={ROLES} value={values.role} onPick={(v) => set("role", v)} missing={missing.includes("role")} />
                <ChipGroup label="Agencies I could introduce in a year" labelId="l-volume" options={VOLUMES} value={values.volume} onPick={(v) => set("volume", v)} missing={missing.includes("volume")} />
                <div className="form-actions">
                  <p className="form-err" role="alert">{errText}</p>
                  <button type="submit" className="btn" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Join the affiliate program"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="done">
                <h3 ref={doneRef} tabIndex={-1}>You&rsquo;re in{firstName ? `, ${firstName}` : ""}.</h3>
                <p>We&rsquo;ll email you your referral link. Share it with any practice or agency that&rsquo;s buried in paperwork.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="h-how">
        <div className="wrap">
          <h2 id="h-how">Three steps. No selling required.</h2>
          <ol className="steps">
            <li><span className="num" aria-hidden="true">1</span><div className="card"><h3>Share your link</h3><p>Send it to colleagues, post it, or put it in your newsletter.</p></div></li>
            <li><span className="num" aria-hidden="true">2</span><div className="card"><h3>They book a 30-minute demo</h3><p>We walk them through Your Custom EHR by Credify and start their free 90-day trial.</p></div></li>
            <li><span className="num" aria-hidden="true">3</span><div className="card"><h3>You earn</h3><p>When they become a paying customer, you get paid.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="surface" aria-labelledby="h-earn">
        <div className="wrap">
          <h2 id="h-earn">Paid every month for 3 years.</h2>
          <p className="lede earn-lede">
            You earn a share of Credify&rsquo;s 4.99% fee on every practice you refer, starting in month 4, after their
            free 90 days.
          </p>
          <EarningsCalculator noun={["practice", "practices"]} labelledBy="h-earn" />
          <p className="calc-note">{CALC_NOTE}</p>
        </div>
      </section>

      <section className="mint" aria-labelledby="h-cust">
        <div className="wrap split">
          <div>
            <p className="lead-in">Already a customer?</p>
            <h2 id="h-cust">Your first five referrals cover your free 90 days.</h2>
          </div>
          <div>
            <p className="lede">
              Every Credify customer refers five peers or colleagues in their first 12 months. Sign up above and use
              your link. The first five colleagues who book a 30-minute demo count toward your five and are not paid.
              From the sixth on, you earn the same as any affiliate.
            </p>
            <a className="btn" href="#signup">Join the affiliate program</a>
          </div>
        </div>
      </section>
    </div>
  );
}
