"use client";

import { useId, useState, type CSSProperties } from "react";
import { money, payoutSchedule } from "./payout";

type Props = {
  /** Singular and plural for the thing being referred, e.g. ["practice", "practices"]. */
  noun: [string, string];
  defaultReferrals?: number;
  defaultCollections?: number;
  collectionsStep?: number;
  labelledBy?: string;
};

const MIN_N = 1;
const MAX_N = 50;
const MIN_C = 5000;
const MAX_C = 200000;

function fill(value: number, min: number, max: number) {
  return { "--p": `${((value - min) / (max - min)) * 100}%` } as CSSProperties;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Sliders for referrals and collections, a payout table by year and a comparison with SimplePractice. */
export function EarningsCalculator({
  noun,
  defaultReferrals = 5,
  defaultCollections = 39000,
  collectionsStep = 1000,
  labelledBy,
}: Props) {
  const id = useId();
  const [n, setN] = useState(defaultReferrals);
  const [c, setC] = useState(defaultCollections);
  const plan = payoutSchedule(c, n);
  const spWidth = plan.total ? (plan.simplePractice / plan.total) * 100 : 0;

  return (
    <div className="pp-calc" role="group" aria-labelledby={labelledBy}>
      <div className="pp-sliders">
        <div className="pp-rng">
          <div className="pp-rng-top">
            <label htmlFor={`${id}-n`}>{cap(noun[1])} you refer</label>
            <output htmlFor={`${id}-n`}>{n}</output>
          </div>
          <input
            type="range"
            id={`${id}-n`}
            min={MIN_N}
            max={MAX_N}
            step={1}
            value={n}
            style={fill(n, MIN_N, MAX_N)}
            aria-valuetext={`${n} ${n === 1 ? noun[0] : noun[1]}`}
            onChange={(e) => setN(Number(e.target.value))}
          />
          <div className="pp-rng-ends" aria-hidden="true">
            <span>{MIN_N}</span>
            <span>{MAX_N}</span>
          </div>
        </div>
        <div className="pp-rng">
          <div className="pp-rng-top">
            <label htmlFor={`${id}-c`}>Average monthly collections per {noun[0]}</label>
            <output htmlFor={`${id}-c`}>{money(c)}</output>
          </div>
          <input
            type="range"
            id={`${id}-c`}
            min={MIN_C}
            max={MAX_C}
            step={collectionsStep}
            value={c}
            style={fill(c, MIN_C, MAX_C)}
            aria-valuetext={`${money(c)} a month`}
            onChange={(e) => setC(Number(e.target.value))}
          />
          <div className="pp-rng-ends" aria-hidden="true">
            <span>{money(MIN_C)}</span>
            <span>{money(MAX_C)}</span>
          </div>
        </div>
        <p className="pp-calc-fee">
          Credify&rsquo;s fee per {noun[0]}: <strong>{money(plan.fee)}</strong> a month (4.99% of collections)
        </p>
      </div>

      <div className="pp-pay-wrap">
        <table className="pp-pay">
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col" className="r">Your share</th>
              <th scope="col" className="r">You earn</th>
            </tr>
          </thead>
          <tbody>
            {plan.rows.map((row) => (
              <tr key={row.id} className={row.pct === 0 ? "off" : undefined}>
                <th scope="row">
                  {row.period} <span>{row.detail}</span>
                </th>
                <td className="r">{Math.round(row.pct * 100)}%</td>
                <td className="r">{money(row.total)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>Total over 3 years</th>
              <td className="r">
                <span className="pp-tot">{money(plan.total)}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="pp-vs">
        <h3>The same {n} referrals, compared</h3>
        <div className="pp-vs-row me">
          <span className="pp-vs-name">Credify</span>
          <span className="pp-vs-bar"><i className="me" style={{ width: "100%" }} /></span>
          <span className="pp-vs-amt">{money(plan.total)} over 3 years</span>
        </div>
        <div className="pp-vs-row">
          <span className="pp-vs-name">SimplePractice</span>
          <span className="pp-vs-bar"><i className="them" style={{ width: `${spWidth}%` }} /></span>
          <span className="pp-vs-amt">{money(plan.simplePractice)} once</span>
        </div>
      </div>
    </div>
  );
}

export const CALC_NOTE =
  "Medicare and Medicaid revenue is excluded. Where state law restricts revenue-based referral pay, a flat amount per signup applies instead. SimplePractice pays affiliates $100 per new paid account and gives customers a $200 bill credit after a referred colleague’s third payment (checked November 2026).";
