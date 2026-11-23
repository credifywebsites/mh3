"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { submitConsultantApplication } from "@/app/actions/partnerPrograms";
import { CALC_NOTE, EarningsCalculator } from "./EarningsCalculator";
import { CREDIFY_RATE, money, payoutSchedule } from "./payout";
import "./partner-programs.css";

const US_STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
const BASE_FOCUS = ["EHR selection or implementation","Clinical workflow design","Billing or RCM","Compliance and licensing","Addiction treatment","Nonprofit operations","Practice management"];
const YEARS = [
  { value: "Under 5 years", label: "< 5 years" },
  { value: "5-10 years", label: "5-10 years" },
  { value: "11-20 years", label: "11-20 years" },
  { value: "20+ years", label: "20+ years" },
];

/** Worked example shown above the payout lane: 5 clinicians collecting $38,900 a month. */
const EXAMPLE = { clinicians: 5, monthlyCollections: 38900 };

const ROLE_ITEMS = [
  "Evaluate the agency's current EHR and operational systems",
  "Find the bottlenecks in clinical and administrative workflows",
  "Decide which forms, assessments and reports the agency needs",
  "Recommend the right mix of EHR and operational services",
  "Translate client needs into clear requirements for our team",
  "Guide implementation and adoption, and stay the trusted advisor throughout",
];

const FIT_ITEMS = [
  "Behavioral health or human services",
  "Addiction treatment",
  "Nonprofit agency operations",
  "EHR selection or implementation",
  "Clinical workflow design",
  "Billing or revenue cycle management",
  "Compliance, licensing or reporting",
  "Practice management or organizational consulting",
];

type FieldName = "fullName" | "email" | "phone" | "yearsExperience" | "states" | "focusAreas" | "clientsServed";

const FOCUS_TARGET: Record<FieldName, string> = {
  fullName: "#fullName",
  email: "#email",
  phone: "#phone",
  yearsExperience: "#yearsExperience",
  states: "#stateMsBtn",
  focusAreas: "#focusChips .chip",
  clientsServed: "#clientsServed",
};

function Check() {
  return (
    <span className="dot" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7" fill="none" stroke="#14704f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

function PayoutLane() {
  const plan = payoutSchedule(EXAMPLE.monthlyCollections);
  return (
    <div className="payout" role="group" aria-labelledby="payoutTitle">
      <div className="po-head">
        <h3 id="payoutTitle">Referral payouts</h3>
        <span className="po-ex">
          Example: {EXAMPLE.clinicians} clinicians, {money(EXAMPLE.monthlyCollections)}/mo collected &times;{" "}
          {(CREDIFY_RATE * 100).toFixed(2)}% = {money(plan.fee)}/mo to Credify
        </span>
      </div>
      <ol className="po-lane">
        {plan.rows.map((r) => (
          <li key={r.id} className={r.pct === 0 ? "trial" : undefined}>
            <span className="sk">{r.laneLabel}</span>
            <span className="node" aria-hidden="true" />
            <span className="pct">{Math.round(r.pct * 100)}%</span>
            <span className="of">{r.laneNote}</span>
            <span className="amt">{money(r.monthly)}/mo</span>
            <span className="tot">{money(r.total)} total</span>
          </li>
        ))}
      </ol>
      <div className="po-foot">
        <p className="po-total"><b>About {money(plan.total)}</b> per agency over 3 years</p>
        <p className="po-end">Payouts end after year 3.</p>
      </div>
    </div>
  );
}

function StatesPicker({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (next: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const visible = US_STATES.filter((s) => s.toLowerCase().includes(query.trim().toLowerCase()));
  const visibleOn = visible.filter((s) => selected.includes(s)).length;
  const allOn = visible.length > 0 && visibleOn === visible.length;
  const someOn = visibleOn > 0 && !allOn;

  const allRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (allRef.current) allRef.current.indeterminate = someOn;
  }, [someOn, open]);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function close(refocus: boolean) {
    setOpen(false);
    setQuery("");
    if (refocus) btnRef.current?.focus();
  }

  const toggle = (s: string) =>
    onChange(selected.includes(s) ? selected.filter((x) => x !== s) : US_STATES.filter((x) => x === s || selected.includes(x)));

  const toggleAll = () => {
    const next = allOn ? selected.filter((s) => !visible.includes(s)) : US_STATES.filter((s) => selected.includes(s) || visible.includes(s));
    onChange(next);
  };

  const n = selected.length;
  return (
    <div ref={rootRef}>
      <div className="ms">
        <button
          type="button"
          ref={btnRef}
          id="stateMsBtn"
          className={`ms-btn${n === 0 ? " empty" : ""}`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls="stateMsPanel"
          onClick={() => (open ? close(false) : setOpen(true))}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" && !open) {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          {n === 0 ? "Select states" : n === 1 ? "1 state selected" : `${n} states selected`}
        </button>
        {open && (
          <div
            className="ms-panel"
            id="stateMsPanel"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                close(true);
              }
            }}
          >
            <div className="ms-top">
              <input
                ref={searchRef}
                type="text"
                aria-label="Search states"
                placeholder="Search states"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (visible.length === 1) toggle(visible[0]);
                  }
                }}
              />
              <label className="ms-opt ms-all">
                <input ref={allRef} type="checkbox" checked={allOn} onChange={toggleAll} /> Select all
              </label>
            </div>
            <div className="ms-opts" role="group" aria-label="States">
              {visible.map((s) => (
                <label key={s} className="ms-opt">
                  <input type="checkbox" checked={selected.includes(s)} onChange={() => toggle(s)} /> {s}
                </label>
              ))}
            </div>
            {visible.length === 0 && <div className="ms-empty">No states match.</div>}
            <div className="ms-foot">
              <button type="button" className="btn sm" onClick={() => close(true)}>Done</button>
            </div>
          </div>
        )}
      </div>
      <div className="tags" aria-live="polite" style={{ marginTop: selected.length ? 8 : 0 }}>
        {selected.map((s) => (
          <span key={s} className="tag">
            {s}
            <button type="button" aria-label={`Remove ${s}`} onClick={() => { onChange(selected.filter((x) => x !== s)); btnRef.current?.focus(); }}>
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

function FocusChips({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (next: string[]) => void;
}) {
  const [custom, setCustom] = useState<string[]>([]);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");
  const addOpenRef = useRef<HTMLButtonElement>(null);
  const all = [...BASE_FOCUS, ...custom];

  const toggle = (name: string) =>
    onChange(selected.includes(name) ? selected.filter((x) => x !== name) : [...selected, name]);

  const add = () => {
    const v = draft.trim();
    if (!v) return;
    const existing = all.find((x) => x.toLowerCase() === v.toLowerCase());
    const name = existing ?? v;
    if (!existing) setCustom((c) => [...c, v]);
    if (!selected.includes(name)) onChange([...selected, name]);
    setAdding(false);
    setDraft("");
  };

  const discard = () => {
    setAdding(false);
    setDraft("");
    addOpenRef.current?.focus();
  };

  return (
    <>
      <div className="chips" id="focusChips" role="group" aria-labelledby="focusLabel">
        {all.map((name) => (
          <button key={name} type="button" className="chip" aria-pressed={selected.includes(name)} onClick={() => toggle(name)}>
            {name}
          </button>
        ))}
        <button ref={addOpenRef} type="button" className="chip add" onClick={() => setAdding(true)}>
          + Add another
        </button>
      </div>
      {adding && (
        <div className="addcard">
          <input
            type="text"
            autoFocus
            aria-label="New focus area"
            placeholder="Type a focus area"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { e.preventDefault(); add(); }
              else if (e.key === "Escape") { e.preventDefault(); discard(); }
            }}
          />
          <button type="button" className="btn secondary sm" onClick={discard}>Discard</button>
          <button type="button" className="btn sm" onClick={add}>Add</button>
        </div>
      )}
    </>
  );
}

/** Consultant partner recruiting page, from CONSULTANT_PARTNERS_11-09-V8.html. */
export function ConsultantsPage() {
  const [v, setV] = useState({
    fullName: "", email: "", phone: "", yearsExperience: "", metro: "", website: "", ehrExperience: "", clientsServed: "",
  });
  const [states, setStates] = useState<string[]>([]);
  const [focusAreas, setFocusAreas] = useState<string[]>([]);
  const [invalid, setInvalid] = useState<FieldName[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);

  const clear = (name: FieldName) => setInvalid((prev) => prev.filter((f) => f !== name));
  const set = (key: keyof typeof v, value: string) => {
    setV((prev) => ({ ...prev, [key]: value }));
    clear(key as FieldName);
  };

  const validate = () => {
    const bad: FieldName[] = [];
    if (!v.fullName.trim()) bad.push("fullName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) bad.push("email");
    if (v.phone.replace(/\D/g, "").length < 10) bad.push("phone");
    if (!v.yearsExperience) bad.push("yearsExperience");
    if (!states.length) bad.push("states");
    if (!focusAreas.length) bad.push("focusAreas");
    if (!v.clientsServed.trim()) bad.push("clientsServed");
    return bad;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const bad = validate();
    setInvalid(bad);
    if (bad.length) {
      formRef.current?.querySelector<HTMLElement>(FOCUS_TARGET[bad[0]])?.focus();
      return;
    }
    setStatus("sending");
    const res = await submitConsultantApplication({ ...v, states, focusAreas });
    if (res.success) {
      setStatus("done");
      requestAnimationFrame(() => thanksRef.current?.focus());
    } else {
      setStatus("error");
    }
  };

  const cls = (name: FieldName, extra = "") => `fld${extra ? ` ${extra}` : ""}${invalid.includes(name) ? " missing" : ""}`;
  const inv = (name: FieldName) => invalid.includes(name) || undefined;
  const errText = invalid.length
    ? invalid.length === 1 ? "Fill in the 1 field in red." : `Fill in the ${invalid.length} fields in red.`
    : status === "error" ? "We could not send your application. Try again in a moment." : "";
  const firstName = v.fullName.trim().split(/\s+/)[0] ?? "";

  return (
    <div className="pp cpp">
      <section className="hero" aria-labelledby="heroTitle">
        <div className="wrap">
          <div className="top">
            <h1 id="heroTitle">Help behavioral health agencies <em>build the systems they actually need</em></h1>
            <p className="hero-lede">
              Credify is looking for experienced consultants in all 50 states to help agencies evaluate their
              operations, design better workflows and implement Your Custom EHR by Credify in months, not years.
            </p>
          </div>
          <div className="foot-row">
            <p className="proof">
              Custom forms and workflows often built in under 10 days. Implementation in months. A form engine 16 years
              in the making.
            </p>
            <div className="btn-row">
              <a className="btn ghost" href="#role">See your role</a>
              <a className="btn" href="#apply">Apply to partner</a>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="problemTitle">
        <div className="wrap">
          <div className="band-card">
            <h2 id="problemTitle">Your clients should not have to wait years for the right system</h2>
            <div>
              <p>
                Many agencies on Netsmart, Credible, Valant or another established platform still cannot get the system
                set up around how they actually work. Implementations stall for months or years, reporting stays
                incomplete and staff work around the software instead of with it.
              </p>
              <p>
                Credify gives you another option to bring to the table. When an agency needs a specialized form, a
                state-specific workflow, an approval process, an assessment or a report, our team can often design and
                build it in under 10 days, while the need is still current.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="productTitle">
        <div className="wrap">
          <div className="sec-head"><h2 id="productTitle">What Credify brings to your clients</h2></div>
          <div className="cards">
            <div className="card"><h3>Workflows built around the agency</h3><p>Support the processes an agency already uses, or design better ones. Intake, clinical work, supervision, billing, compliance and discharge can all follow the organization&rsquo;s requirements.</p></div>
            <div className="card"><h3>Implementation in months</h3><p>A lean build and rollout model gets agencies running in months, then keeps refining the system as their needs become clearer.</p></div>
            <div className="card"><h3>A form engine built for analytics</h3><p>First developed 16 years ago for data-driven applications, it now runs behavioral health forms and assessments with scoring, weighting, branching, calculations and reporting, from daily operations to outcome measurement and program evaluation.</p></div>
            <div className="card"><h3>Standalone or end to end</h3><p>Use Credify as a standalone EHR, or add billing, revenue cycle management, credentialing and implementation services. You help the client choose the mix that fits its goals and budget.</p></div>
          </div>
        </div>
      </section>

      <section className="alt" id="role" aria-labelledby="roleTitle">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="roleTitle">Your role as a Credify consultant</h2>
            <p>You are not here to sell software. You help agency leadership see where their systems create friction and decide what should change.</p>
          </div>
          <div className="role-grid">
            <ul className="checklist" aria-label="What you will do">
              {ROLE_ITEMS.map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
            <div className="split">
              <div className="card"><h3>You bring</h3><ul><li>Experience and judgment</li><li>Relationships with agency leadership</li><li>Knowledge of your local behavioral health landscape</li></ul></div>
              <div className="card us"><h3>Credify brings</h3><ul><li>Product, engineering and AI</li><li>Implementation support</li><li>Pre-sales and demo support</li><li>Direct access to our product team</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      <section className="greenband" aria-labelledby="fitTitle">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="fitTitle">Who we are looking for</h2>
            <p>Experienced operators and advisors who can talk with executive directors, clinical leaders, administrators, billing teams and frontline staff, and see how their needs connect.</p>
          </div>
          <ul className="fit-grid" aria-label="Experience areas">
            {FIT_ITEMS.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="note">We are especially interested in consultants with established relationships in their state or metro area who can support agencies through implementation.</p>
        </div>
      </section>

      <section id="partnership" aria-labelledby="partnershipTitle">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="partnershipTitle">How the partnership works</h2>
            <p>Partners earn a share of Credify&rsquo;s fee for every agency they bring in. Payouts start once the agency&rsquo;s 90-day free trial ends.</p>
          </div>
          <PayoutLane />
          <h3 className="calc-title" id="calcTitle">Estimate your payouts</h3>
          <EarningsCalculator noun={["agency", "agencies"]} defaultCollections={38900} collectionsStep={100} labelledBy="calcTitle" />
          <p className="calc-note">{CALC_NOTE}</p>
          <div className="offer">
            <div className="num" aria-hidden="true">12+ mo</div>
            <div>
              <h3>For agencies stalled 12 months or more</h3>
              <p>Agencies that have spent a year or more stalled with another EHR or implementation partner may qualify for their first year of Credify services at no charge, under a defined transition agreement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="apply" aria-labelledby="applyTitle">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="applyTitle">Apply to become a consultant partner</h2>
            <p>Tell us where you work and who you serve. We will follow up to set up an intro call.</p>
          </div>
          <div className="apply-card">
            {status !== "done" ? (
              <form ref={formRef} noValidate onSubmit={onSubmit}>
                <div className="fgrid">
                  <div className={cls("fullName")}><label className="lbl" htmlFor="fullName">Full name</label><input type="text" id="fullName" autoComplete="name" aria-invalid={inv("fullName")} value={v.fullName} onChange={(e) => set("fullName", e.target.value)} /></div>
                  <div className={cls("email")}><label className="lbl" htmlFor="email">Email</label><input type="email" id="email" autoComplete="email" aria-invalid={inv("email")} value={v.email} onChange={(e) => set("email", e.target.value)} /></div>
                  <div className={cls("phone")}><label className="lbl" htmlFor="phone">Phone</label><input type="tel" id="phone" autoComplete="tel" placeholder="(555) 555-5555" aria-invalid={inv("phone")} value={v.phone} onChange={(e) => set("phone", e.target.value)} /></div>
                  <div className={cls("yearsExperience")}>
                    <label className="lbl" htmlFor="yearsExperience">Years in behavioral health</label>
                    <select id="yearsExperience" className={v.yearsExperience ? undefined : "empty"} aria-invalid={inv("yearsExperience")} value={v.yearsExperience} onChange={(e) => set("yearsExperience", e.target.value)}>
                      <option value="">Select years</option>
                      {YEARS.map((y) => <option key={y.value} value={y.value}>{y.label}</option>)}
                    </select>
                  </div>
                  <div className={cls("states", "full")}>
                    <label className="lbl" htmlFor="stateMsBtn">States you serve</label>
                    <StatesPicker selected={states} onChange={(next) => { setStates(next); clear("states"); }} />
                  </div>
                  <div className="fld"><label className="lbl" htmlFor="metro">Metro area <span className="opt">(optional)</span></label><input type="text" id="metro" placeholder="e.g. Greater Phoenix" value={v.metro} onChange={(e) => set("metro", e.target.value)} /></div>
                  <div className="fld"><label className="lbl" htmlFor="website">LinkedIn or website <span className="opt">(optional)</span></label><input type="url" id="website" autoComplete="url" placeholder="https://" value={v.website} onChange={(e) => set("website", e.target.value)} /></div>
                  <div className={cls("focusAreas", "full")}>
                    <span className="lbl" id="focusLabel">Current consulting focus</span>
                    <FocusChips selected={focusAreas} onChange={(next) => { setFocusAreas(next); clear("focusAreas"); }} />
                  </div>
                  <div className="fld full"><label className="lbl" htmlFor="ehrExperience">EHR or implementation experience <span className="opt">(optional)</span></label><textarea id="ehrExperience" rows={2} placeholder="Systems you have selected, implemented or supported" value={v.ehrExperience} onChange={(e) => set("ehrExperience", e.target.value)} /></div>
                  <div className={cls("clientsServed", "full")}><label className="lbl" htmlFor="clientsServed">Organizations and clients you typically serve</label><textarea id="clientsServed" rows={2} placeholder="Agency types, sizes and programs" aria-invalid={inv("clientsServed")} value={v.clientsServed} onChange={(e) => set("clientsServed", e.target.value)} /></div>
                </div>
                <div className="form-actions">
                  <p className="form-err" role="alert">{errText}</p>
                  <button type="submit" className="btn" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Submit application"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="thanks" role="status">
                <h3 ref={thanksRef} tabIndex={-1}>Application received</h3>
                <p>Thanks{firstName ? `, ${firstName}` : ""}. Our team will review it and reach out to set up an intro call.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
