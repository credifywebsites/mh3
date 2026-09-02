import styles from "./ReportsSection.module.css";

export const reportModalData = [
  {
    num: "01",
    cat: "provider",
    catClass: styles["cat-provider"],
    badgeClass: styles["badge-provider"],
    title: "Provider Utilization Analysis",
    desc: "Scheduled vs completed hours, utilization rate, and no-show trends by provider and location.",
    metrics: ["Utilization %", "No-shows", "Hours"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=1c73891c337a4de00445"
  },
  {
    num: "02",
    cat: "provider",
    catClass: styles["cat-provider"],
    badgeClass: styles["badge-provider"],
    title: "Provider Financial Analysis",
    desc: "Profitability %, overtime cost, incentives, and collections by commercial vs government payer.",
    metrics: ["Profitability", "Collections"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=ec8241d73701c16dc571"
  },
  {
    num: "03",
    cat: "provider",
    catClass: styles["cat-provider"],
    badgeClass: styles["badge-provider"],
    title: "Provider Performance by Location",
    desc: "Avg collection per hour, session, and provider. Geographic map of total collections by state.",
    metrics: ["Per hour", "Map"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=6cdd2d61ab390e902ee2"
  },
  {
    num: "04",
    cat: "location",
    catClass: styles["cat-location"],
    badgeClass: styles["badge-location"],
    title: "Location Productivity",
    desc: "Billed vs scheduled hours and completed vs scheduled sessions by location.",
    metrics: ["Utilization", "Sessions"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=5f76b2b08e6c9900b265"
  },
  {
    num: "05",
    cat: "location",
    catClass: styles["cat-location"],
    badgeClass: styles["badge-location"],
    title: "Location Revenue Overview",
    desc: "Revenue per location ranked by collections, patient vs payer breakdown, total billed vs collected.",
    metrics: ["Revenue", "Collections"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=791de67c8b6e88a22300"
  },
  {
    num: "06",
    cat: "location",
    catClass: styles["cat-location"],
    badgeClass: styles["badge-location"],
    title: "Location Profitability",
    desc: "Net profit by location with overhead cost and provider payable breakdown per site.",
    metrics: ["Net profit", "Overhead"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=dba9a90f2c326c020440"
  },
  {
    num: "07",
    cat: "operations",
    catClass: styles["cat-operations"],
    badgeClass: styles["badge-operations"],
    title: "Appointment Analysis",
    desc: "Rescheduled, no-show, and cancelled appointments by provider with dollar cost of each.",
    metrics: ["No-shows", "Revenue loss"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=f27bb6b74fae0cfc552c"
  },
  {
    num: "08",
    cat: "financial",
    catClass: styles["cat-financial"],
    badgeClass: styles["badge-financial"],
    title: "Payor Mix by Location",
    desc: "Collections by payer type across all locations — commercial, Medicaid, Medicare, government.",
    metrics: ["Payer mix", "Collections"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=aa4fd1d47d4781762629"
  },
  {
    num: "09",
    cat: "operations",
    catClass: styles["cat-operations"],
    badgeClass: styles["badge-operations"],
    title: "Session Analysis",
    desc: "Net profit/loss by provider and session type — group, individual, family, medication management.",
    metrics: ["Sessions", "Profit/loss"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=d82b7330ac62e9157ebc"
  },
  {
    num: "10",
    cat: "operations",
    catClass: styles["cat-operations"],
    badgeClass: styles["badge-operations"],
    title: "Notes Signed Off Analysis",
    desc: "Total notes signed and % signed on-time by provider — documentation compliance tracking.",
    metrics: ["Compliance", "On-time %"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=183c71eb33e7f59d6b69"
  },
  {
    num: "11",
    cat: "financial",
    catClass: styles["cat-financial"],
    badgeClass: styles["badge-financial"],
    title: "Staff Compensation Analysis",
    desc: "Basic vs net compensation, overtime, and incentives by staff role across payroll periods.",
    metrics: ["Payroll", "Overtime"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=1cdd16fa5eeb2ab0e500"
  },
  {
    num: "12",
    cat: "operations",
    catClass: styles["cat-operations"],
    badgeClass: styles["badge-operations"],
    title: "Service Line Analysis",
    desc: "Profitability split across Mental Health and Psychiatry service lines by location.",
    metrics: ["Mental Health", "Psychiatry"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=e75201cc1f02424ddb08"
  },
  {
    num: "13",
    cat: "marketing",
    catClass: styles["cat-marketing"],
    badgeClass: styles["badge-marketing"],
    title: "Paid Marketing Analysis",
    desc: "Leads, clients, sessions, cost, and ROI by paid channel — Psychology Today, Google, Meta, and more.",
    metrics: ["ROI %", "Cost/lead"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=c556a7d2e4f2e75df6c2"
  },
  {
    num: "14",
    cat: "marketing",
    catClass: styles["cat-marketing"],
    badgeClass: styles["badge-marketing"],
    title: "Non-Paid Referrals Analysis",
    desc: "Gross profit by referral source — PCPs, schools, courts, churches, and community partners.",
    metrics: ["ROI %", "Source"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=1a26ad85b11dd812712a"
  },
  {
    num: "15",
    cat: "financial",
    catClass: styles["cat-financial"],
    badgeClass: styles["badge-financial"],
    title: "Off-Hours Financial Analysis",
    desc: "Revenue and profit from sessions delivered outside 8-5 business hours by payer.",
    metrics: ["Off-hours", "Profit"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=67871d245babe653c556"
  },
  {
    num: "16",
    cat: "financial",
    catClass: styles["cat-financial"],
    badgeClass: styles["badge-financial"],
    title: "Intern Financial Analysis",
    desc: "ROI, acquisition cost, cumulative hours, and profit/loss by intern type and payer mix.",
    metrics: ["ROI %", "Costs"],
    link: "https://app.powerbi.com/view?r=eyJrIjoiZWJlZjk2NDgtYTdjZi00ZjczLWEwNzEtMjA4ODVjNDZlMjFkIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9"
  },
];
