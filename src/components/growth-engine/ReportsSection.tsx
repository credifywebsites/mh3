"use client";

import React, { useState, useEffect, useMemo } from "react";
import styles from "./ReportsSection.module.css";
import { reportModalData } from "./reportsData";

const cx = (...classes: (string | boolean | undefined | null)[]) => 
  classes.filter(Boolean).join(" ");

const REPORTS_PER_PAGE = 8;

const ReportThumb = ({ report, loaded }: { report: any, loaded: boolean }) => {
  const getThumbContent = () => {
    switch (report.num) {
      case "01":
        return (
          <>
            <div className={styles.miniBars}>
              <div className={styles.miniBar}></div>
              <div className={styles.miniBar}></div>
              <div className={styles.miniBar}></div>
              <div className={styles.miniBar}></div>
              <div className={styles.miniBar}></div>
              <div className={styles.miniBar}></div>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>Utilization Rate</div>
          </>
        );
      case "02":
        return (
          <>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#3dbd94", fontFamily: "var(--serif)" }}>$123K</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Provider Profit</div>
            <div className={styles.miniTable} style={{ marginTop: 8 }}>
              <div className={styles.miniRow}>
                <div className={styles.miniRowLine} style={{ width: "90%" }}></div>
                <div className={styles.miniRowVal}>74%</div>
              </div>
              <div className={styles.miniRow}>
                <div className={styles.miniRowLine} style={{ width: "65%" }}></div>
                <div className={styles.miniRowVal}>51%</div>
              </div>
              <div className={styles.miniRow}>
                <div className={styles.miniRowLine} style={{ width: "78%" }}></div>
                <div className={styles.miniRowVal}>64%</div>
              </div>
            </div>
          </>
        );
      case "03":
        return (
          <>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Avg ROI</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#fbbf24", fontFamily: "var(--serif)" }}>43.6%</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Intern Acquisition Cost</div>
          </>
        );
      case "04":
        return (
          <>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>Total Collections</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#3dbd94", fontFamily: "var(--serif)" }}>$761M</div>
          </>
        );
      case "05":
        return (
          <>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#3dbd94", fontFamily: "var(--serif)" }}>70.7%</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Utilization Rate</div>
          </>
        );
      case "06":
        return (
          <>
            <svg height="50" viewBox="0 0 90 50" width="90">
              <ellipse cx="45" cy="25" fill="none" rx="42" ry="22" stroke="rgba(61,189,148,0.3)" strokeWidth="1"></ellipse>
              <circle cx="20" cy="28" fill="rgba(37,99,235,0.7)" r="4"></circle>
              <circle cx="32" cy="30" fill="rgba(37,99,235,0.8)" r="5"></circle>
              <circle cx="50" cy="26" fill="rgba(37,99,235,0.6)" r="3"></circle>
              <circle cx="60" cy="32" fill="rgba(37,99,235,0.9)" r="6"></circle>
            </svg>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Collection by State</div>
          </>
        );
      case "08":
        return (
          <>
            <div className={styles.miniDonut} style={{ borderColor: "#3b82f6", borderRightColor: "#a78bfa", borderBottomColor: "#f59e0b" }}></div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>Commercial · Gov · Medicaid</div>
          </>
        );
      case "12":
        return (
          <div className={styles.miniLine}>
            <svg height="50" viewBox="0 0 100 50" width="100">
              <polyline fill="none" points="0,45 15,40 30,30 45,35 60,20 75,38 90,15 100,10" stroke="rgba(61,189,148,0.7)" strokeWidth="2"></polyline>
              <polyline fill="none" points="0,30 15,42 30,38 45,25 60,32 75,18 90,28 100,38" stroke="rgba(167,139,250,0.7)" strokeWidth="2"></polyline>
            </svg>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>Notes Signed On-Time %</div>
          </div>
        );
      case "18":
        return (
          <div className={styles.miniLine}>
            <svg height="44" viewBox="0 0 100 44" width="100">
              <polyline fill="none" points="0,38 18,28 36,20 54,24 72,14 90,10 100,8" stroke="rgba(167,139,250,0.8)" strokeWidth="2.2"></polyline>
              <circle cx="0" cy="38" fill="#a78bfa" r="3"></circle>
              <circle cx="36" cy="20" fill="#a78bfa" r="3"></circle>
              <circle cx="72" cy="14" fill="#a78bfa" r="3"></circle>
              <circle cx="100" cy="8" fill="#a78bfa" r="3"></circle>
            </svg>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>Clinical Outcomes Trend</div>
          </div>
        );
      case "15":
        return (
          <>
            <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 11, color: "#60a5fa", fontWeight: 600 }}>Mental Health</span>
              <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 600 }}>Psychiatry</span>
            </div>
            <div className={styles.miniBars} style={{ marginTop: 8 }}>
              <div className={styles.miniBar} style={{ background: "rgba(96,165,250,0.6)" }}></div>
              <div className={styles.miniBar} style={{ background: "rgba(96,165,250,0.6)" }}></div>
              <div className={styles.miniBar} style={{ background: "rgba(96,165,250,0.5)" }}></div>
              <div className={styles.miniBar} style={{ background: "rgba(96,165,250,0.5)" }}></div>
              <div className={styles.miniBar} style={{ background: "rgba(96,165,250,0.4)" }}></div>
            </div>
          </>
        );
      case "19":
        return (
          <div className={styles.miniTable} style={{ marginTop: 4 }}>
            <div className={styles.miniRow}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", width: 40, flexShrink: 0 }}>Aetna</span>
              <div className={styles.miniRowLine} style={{ width: "85%" }}></div>
              <div className={styles.miniRowVal}>92%</div>
            </div>
            <div className={styles.miniRow}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", width: 40, flexShrink: 0 }}>BCBS</span>
              <div className={styles.miniRowLine} style={{ width: "74%" }}></div>
              <div className={styles.miniRowVal}>78%</div>
            </div>
            <div className={styles.miniRow}>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", width: 40, flexShrink: 0 }}>Medi-Cal</span>
              <div className={styles.miniRowLine} style={{ width: "47%", background: "rgba(251,191,36,0.5)" }}></div>
              <div className={styles.miniRowVal} style={{ color: "#fbbf24" }}>49%</div>
            </div>
          </div>
        );
      case "20":
        return (
          <>
            <div className={styles.miniBars} style={{ gap: 4 }}>
              <div className={styles.miniBar} style={{ height: "100%", background: "rgba(167,139,250,0.7)" }}></div>
              <div className={styles.miniBar} style={{ height: "70%", background: "rgba(61,189,148,0.7)" }}></div>
              <div className={styles.miniBar} style={{ height: "90%", background: "rgba(167,139,250,0.7)" }}></div>
              <div className={styles.miniBar} style={{ height: "65%", background: "rgba(61,189,148,0.7)" }}></div>
              <div className={styles.miniBar} style={{ height: "85%", background: "rgba(167,139,250,0.7)" }}></div>
              <div className={styles.miniBar} style={{ height: "60%", background: "rgba(61,189,148,0.7)" }}></div>
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 5, display: "flex", gap: 10, justifyContent: "center" }}>
              <span style={{ color: "rgba(167,139,250,0.9)" }}>● Telehealth</span>
              <span style={{ color: "rgba(61,189,148,0.9)" }}>● In-Person</span>
            </div>
          </>
        );
      default:
        const getValue = () => {
          if (report.num === "07" || report.num === "17") return "$752M";
          if (report.num === "09") return "$342K";
          if (report.num === "10") return "$37.8K";
          if (report.num === "16") return "$125K";
          if (report.num === "14") return "1,500";
          if (report.num === "03") return "43.6%";
          if (report.num === "11") return "76.2%";
          if (report.num === "13") return "90.2%";
          return report.cat === "financial" ? "$123K" : "87%";
        };
        const getLabel = () => {
          if (report.num === "07" || report.num === "17") return "Net Profit";
          if (report.num === "09") return "Revenue Loss";
          if (report.num === "10") return "Net Compensation";
          if (report.num === "14") return "Total Sessions";
          return "";
        };
        const getSubLabel = () => {
          if (report.num === "09") return "No-shows + Cancellations";
          if (report.num === "10") return "Bi-Weekly · Monthly · Weekly";
          if (report.num === "14") return "Net Profit by Session Type";
          return "";
        }
        return (
          <>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#3dbd94", fontFamily: "var(--serif)" }}>{getValue()}</div>
            {getLabel() && <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{getLabel()}</div>}
            {getSubLabel() && <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{getSubLabel()}</div>}
          </>
        );
    }
  };

  return (
    <div className={styles.reportThumbPlaceholder}>
      {getThumbContent()}
    </div>
  );
};

export function ReportsSection() {
  const [loaded, setLoaded] = useState(false);
  const [reportCategory, setReportCategory] = useState("all");
  const [reportPage, setReportPage] = useState(1);
  const [selectedReport, setSelectedReport] = useState<typeof reportModalData[0] | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const filteredReports = useMemo(() => {
    return reportModalData.filter(report => reportCategory === "all" || report.cat === reportCategory);
  }, [reportCategory]);

  const totalPages = Math.ceil(filteredReports.length / REPORTS_PER_PAGE);
  const paginatedReports = useMemo(() => {
    const start = (reportPage - 1) * REPORTS_PER_PAGE;
    return filteredReports.slice(start, start + REPORTS_PER_PAGE);
  }, [filteredReports, reportPage]);

  useEffect(() => {
    setReportPage(1);
  }, [reportCategory]);

  const openModal = (report: typeof reportModalData[0]) => {
    setSelectedReport(report);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedReport(null);
    document.body.style.overflow = "";
  };

  return (
    <section className={styles.reportsSection} id="reports-grid">
      <div className={styles.reportsHeader}>
        <div>
          <div className={styles.sectionTag}>Executive Report Suite</div>
          <h2 className={styles.sectionH2}>16 reports built for<br />behavioral health leadership.</h2>
          <p className={styles.sectionSub}>Built around decisions EDs, CFOs, and clinical directors actually make — filtered by provider, location, payer, or date range.</p>
        </div>
        <button className={styles.viewLiveBtn} onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=1c73891c337a4de00445', '_blank')}>
          <div className={styles.liveDotG}></div>View live sample reports
        </button>
      </div>

      <div className={styles.catFilters}>
        {["all", "provider", "location", "financial", "operations", "marketing"].map(cat => (
          <button
            key={cat}
            className={cx(styles.catBtn, reportCategory === cat && styles.active)}
            onClick={() => setReportCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)} {cat === "all" ? reportModalData.length : ""}
          </button>
        ))}
        <span className={styles.resultsCount}>
          Showing {Math.min((reportPage - 1) * REPORTS_PER_PAGE + 1, filteredReports.length)}–{Math.min(reportPage * REPORTS_PER_PAGE, filteredReports.length)} of {filteredReports.length}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6.5" stroke="#8aaa9a" strokeWidth="1" /><path d="M7 6v4M7 4.5v.5" stroke="#8aaa9a" strokeLinecap="round" strokeWidth="1.4" /></svg>
        <span style={{ fontSize: 12, color: "var(--ink4)" }}>Click any report to see what&apos;s inside</span>
      </div>

      <div className={styles.reportsGrid}>
        {paginatedReports.map((report) => (
          <div key={report.num} className={styles.reportCard} onClick={() => openModal(report)}>
            <div className={styles.reportThumb} style={{ background: report.cat === 'provider' ? '#0a2a4a' : report.cat === 'financial' ? '#2d1b00' : report.cat === 'location' ? '#003320' : report.cat === 'operations' ? '#1a0a2e' : '#2d0014' }}>
              <span className={cx(styles.reportCatBadge, report.badgeClass)}>{report.cat.charAt(0).toUpperCase() + report.cat.slice(1)}</span>
              <ReportThumb report={report} loaded={loaded} />
            </div>
            <div className={styles.reportBody}>
              <div className={styles.reportNum}>Report {report.num}</div>
              <div className={styles.reportTitle}>{report.title}</div>
              <div className={styles.reportDesc}>{report.desc}</div>
              <div className={styles.reportMetrics}>
                {report.metrics.slice(0, 3).map(m => (
                  <span key={m} className={cx(styles.reportMetric, report.catClass)}>{m}</span>
                ))}
              </div>
            </div>
            <div className={styles.reportHoverOverlay}>
              <div className={styles.reportHoverCta}>View report details</div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={cx(styles.pageBtn, styles.navBtn)}
            disabled={reportPage === 1}
            onClick={() => { setReportPage(p => p - 1); document.getElementById('reports-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            ← Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={cx(styles.pageBtn, reportPage === i + 1 && styles.active)}
              onClick={() => { setReportPage(i + 1); document.getElementById('reports-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={cx(styles.pageBtn, styles.navBtn)}
            disabled={reportPage === totalPages}
            onClick={() => { setReportPage(p => p + 1); document.getElementById('reports-grid')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Next →
          </button>
        </div>
      )}

      {/* MODAL */}
      <div className={cx(styles.modalOverlay, selectedReport && styles.open)} onClick={closeModal}>
        {selectedReport && (
          <div className={styles.rmodal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{selectedReport.title}</span>
              <button className={styles.modalClose} onClick={closeModal}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalLeft}>
                <div className={styles.modalRnum}>Report {selectedReport.num} of 16</div>
                <div className={cx(styles.modalCatBadge, (styles as any)["modal-badge-" + selectedReport.cat])}>
                  {selectedReport.cat}
                </div>
                <h2 className={styles.modalH2}>{selectedReport.title}</h2>
                <p className={styles.modalDesc}>{selectedReport.desc}</p>
                <div className={styles.modalMetricsTitle}>Key metrics in this report</div>
                <div className={styles.modalMetricsGrid}>
                  {selectedReport.metrics.map(metric => (
                    <div key={metric} className={styles.modalMetricChip}>{metric}</div>
                  ))}
                </div>
              </div>
              <div className={styles.modalRight}>
                <div className={styles.modalPreview}>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '0 16px' }}>
                    Live report available in the full dashboard
                  </div>
                </div>
                <button className={styles.modalOpenBtn} onClick={() => window.open((selectedReport as any).link || 'https://app.powerbi.com/view?r=eyJrIjoiYWRmZmU0OGQtYzE2ZS00NjIzLWI0ODAtMzM0YzJlZmFlYjgyIiwidCI6IjIyNjQ0ZTMwLTA5ZTgtNDg2OC1iZTRjLTFkOGFhOTljOTdkZCIsImMiOjZ9&pageName=1c73891c337a4de00445', '_blank')}>
                  <div className={styles.liveDotG}></div>View live sample report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
