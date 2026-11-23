/**
 * Referral payout model shared by the Affiliates and Consultants pages.
 *
 * Partners earn a share of Credify's fee (4.99% of the referred practice's
 * monthly collections). Nothing is paid during the referral's free 90 days;
 * after that the share is 20% for the rest of year 1, 10% in year 2 and 5% in
 * year 3, then payouts end.
 */
export const CREDIFY_RATE = 0.0499;

/** SimplePractice pays affiliates $100 per new paid account (checked November 2026). */
export const SIMPLEPRACTICE_PER_REFERRAL = 100;

export type PayoutStage = {
  id: "trial" | "y1" | "y2" | "y3";
  period: string;
  detail: string;
  laneLabel: string;
  laneNote: string;
  pct: number;
  months: number;
};

export const PAYOUT_STAGES: PayoutStage[] = [
  { id: "trial", period: "Months 1 to 3", detail: "Free trial", laneLabel: "Months 1-3", laneNote: "Client's free trial", pct: 0, months: 3 },
  { id: "y1", period: "Year 1", detail: "Months 4 to 12", laneLabel: "Months 4-12", laneNote: "of Credify's fee", pct: 0.2, months: 9 },
  { id: "y2", period: "Year 2", detail: "Months 13 to 24", laneLabel: "Year 2", laneNote: "of Credify's fee", pct: 0.1, months: 12 },
  { id: "y3", period: "Year 3", detail: "Months 25 to 36", laneLabel: "Year 3", laneNote: "of Credify's fee", pct: 0.05, months: 12 },
];

export type PayoutRow = PayoutStage & { monthly: number; total: number };

/** Payouts for `referrals` practices that each collect `monthlyCollections` a month. */
export function payoutSchedule(monthlyCollections: number, referrals = 1) {
  const fee = monthlyCollections * CREDIFY_RATE;
  const rows: PayoutRow[] = PAYOUT_STAGES.map((stage) => {
    const monthly = fee * stage.pct * referrals;
    return { ...stage, monthly, total: monthly * stage.months };
  });
  const total = rows.reduce((sum, row) => sum + row.total, 0);
  return { fee, rows, total, simplePractice: SIMPLEPRACTICE_PER_REFERRAL * referrals };
}

export function money(value: number) {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}
