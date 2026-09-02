"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./EhrToCountySyncHowItWorks.module.css";

const FIELDS = [
  { id: "clientName", label: "Client Name", value: "Jamie Henderson", delay: 300 },
  { id: "dob", label: "Date of Birth", value: "05/12/1988", delay: 500 },
  { id: "diagnosis", label: "Primary Diagnosis", value: "F33.1 - MDD, Recurrent, Moderate", delay: 800 },
  { id: "note", label: "Clinical Note", value: "Client presented with increased symptoms of anxiety... Progressing well with CBT interventions.", isTextarea: true, delay: 1200 },
];

export function EhrToCountySyncHowItWorks() {
  const [syncStatus, setSyncStatus] = useState("idle"); // idle, syncing, done
  const [filledFields, setFilledFields] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const startSync = () => {
    if (syncStatus === "syncing" || syncStatus === "done") return;
    
    setSyncStatus("syncing");
    setFilledFields([]);
    setProgress(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      if (currentProgress >= 100) clearInterval(interval);
    }, 50);

    FIELDS.forEach((field) => {
      setTimeout(() => {
        setFilledFields((prev) => [...prev, field.id]);
      }, field.delay);
    });

    setTimeout(() => {
      setSyncStatus("done");
      clearInterval(interval);
      setProgress(100);
    }, 1800);
  };

  const resetSync = () => {
    setSyncStatus("idle");
    setFilledFields([]);
    setProgress(0);
  };

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <div className={styles.container}>
          <div className={styles.pill}>
            <span className={styles.pillDot}></span>
            Interactive Demo
          </div>
          <h1 className={styles.title}>
            See how the <em>EHR to County</em> works in real-time.
          </h1>
          <p className={styles.sub}>
            Experience the power of zero double-entry. Watch how Credify automatically maps and pushes clinical data from your EHR directly into the County system.
          </p>
        </div>
      </header>

      <section className={styles.explainer}>
        <div className={styles.container}>
          <div className={styles.explainerGrid}>
            <div className={styles.explainerStep}>
              <div className={styles.explainerNum}>1</div>
              <div className={styles.explainerText}>
                <strong>Finalize in your EHR</strong>
                <span>Document the session exactly how you normally do.</span>
              </div>
            </div>
            <div className={styles.explainerStep}>
              <div className={styles.explainerNum}>2</div>
              <div className={styles.explainerText}>
                <strong>AI Mapping</strong>
                <span>Credify maps fields & codes to County portal requirements.</span>
              </div>
            </div>
            <div className={styles.explainerStep}>
              <div className={styles.explainerNum}>3</div>
              <div className={styles.explainerText}>
                <strong>Instant Sync</strong>
                <span>One click pushes everything. No re-typing required.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.demoStage}>
        <div className={styles.container}>
          <div className={styles.demoControls}>
            <button 
              className={`${styles.btn} ${styles.btnPrimary} ${syncStatus === "idle" ? styles.jiggle : ""}`}
              onClick={startSync}
              disabled={syncStatus === "syncing"}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1.5v12M1.5 7.5h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              {syncStatus === "idle" ? "Start Sync Simulation" : syncStatus === "syncing" ? "Syncing..." : "Sync Complete"}
            </button>
            <button className={`${styles.btn} ${styles.btnGhost}`} onClick={resetSync}>
              Reset Demo
            </button>
          </div>

          <div className={styles.split}>
            {/* EHR SIDE */}
            <div className={`${styles.system} ${styles.ehr}`}>
              <div className={styles.sysTop}>
                <div className={styles.sysTopLeft}>
                  <div className={`${styles.sysIcon} ${styles.green}`}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h14v14H3zM3 7h14M7 3v14" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className={styles.sysName}>Internal EHR</div>
                    <div className={styles.sysSub}>Source System</div>
                  </div>
                </div>
                <div className={`${styles.sysTag} ${styles.green}`}>Finalized</div>
              </div>
              <div className={styles.sysBody}>
                <div className={styles.formSectionTitle}>Clinical Documentation</div>
                {FIELDS.map((field) => (
                  <div className={styles.field} key={field.id}>
                    <label className={styles.fieldLabel}>{field.label}</label>
                    <div className={`${styles.fieldValue} ${field.isTextarea ? styles.textarea : ""} ${styles.ehrFilled}`}>
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BRIDGE */}
            <div className={`${styles.bridge} ${syncStatus === "syncing" ? styles.active : ""}`}>
              <div className={styles.bridgeLine}></div>
              <div className={styles.aiCore}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.aiLabel}>AI Mapping Engine</div>
            </div>

            {/* COUNTY SIDE */}
            <div className={`${styles.system} ${styles.county}`}>
              <div className={styles.sysTop}>
                <div className={styles.sysTopLeft}>
                  <div className={`${styles.sysIcon} ${styles.amber}`}>
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h14v14H3zM3 7h14M7 3v14" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className={styles.sysName}>County Portal</div>
                    <div className={styles.sysSub}>Avatar / Cerner</div>
                  </div>
                </div>
                <div className={`${styles.sysTag} ${syncStatus === "done" ? styles.green : syncStatus === "syncing" ? styles.amber : styles.red}`}>
                  {syncStatus === "done" ? "Synced" : syncStatus === "syncing" ? "In Progress" : "Pending Sync"}
                </div>
              </div>
              <div className={styles.sysBody}>
                <div className={styles.formSectionTitle}>Billing Portal Requirements</div>
                {FIELDS.map((field) => (
                  <div className={styles.field} key={field.id}>
                    <label className={styles.fieldLabel}>{field.label}</label>
                    <div className={`${styles.fieldValue} ${field.isTextarea ? styles.textarea : ""} ${filledFields.includes(field.id) ? styles.filled : styles.empty}`}>
                      {filledFields.includes(field.id) ? field.value : "Waiting for sync..."}
                      {filledFields.includes(field.id) && (
                        <div className={styles.syncTick}>
                          <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.statusBannerWrap}>
            {syncStatus === "syncing" && (
              <div className={`${styles.statusBanner} ${styles.syncing}`}>
                <strong>Syncing data...</strong> AI Mapping in progress ({progress}%)
              </div>
            )}
            {syncStatus === "done" && (
              <div className={`${styles.statusBanner} ${styles.done}`}>
                <strong>Success!</strong> All 4 fields synchronized to County Portal successfully.
              </div>
            )}
            {syncStatus === "idle" && (
              <button className={styles.statusBanner} onClick={startSync}>
                <strong>Click "Start Sync"</strong> to begin the automation simulation.
              </button>
            )}
          </div>

          <div className={styles.legend}>
            <h3>How Credify <em>Closes the Gap.</em></h3>
            <div className={styles.legendGrid}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendSwatch} ${styles.ehrSwatch}`}></div>
                <div className={styles.legendText}>
                  <strong>Source System (EHR)</strong>
                  <span>Where clinicians do their actual work. Fast and familiar.</span>
                </div>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendSwatch} ${styles.syncedSwatch}`}></div>
                <div className={styles.legendText}>
                  <strong>Credentialed Data</strong>
                  <span>AI-mapped fields verified for County portal compliance.</span>
                </div>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendSwatch} ${styles.emptySwatch}`}></div>
                <div className={styles.legendText}>
                  <strong>The "Old Way"</strong>
                  <span>Hours spent re-typing empty fields manually.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.insight}>
            <div className={styles.insightIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2L2 7l12 5 12-5-12-5zM2 17l12 5 12-5M2 12l12 5 12-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4>Credify is <em>Universal.</em></h4>
              <p>Our sync engine works with any EHR and any County portal. We don't need a formal API from the County. Our AI handles the login, the navigation, and the data entry exactly like a human would — only faster and without mistakes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Ready to eliminate double-entry?</h2>
          <p>Book a live demo with your specific EHR and County portal today.</p>
          <div className={styles.finalBtns}>
            <Link href="/contact#contact-form" className={`${styles.btn} ${styles.btnWhite}`} target="_blank" rel="noopener noreferrer">Book a free demo</Link>
            {/* <Link href="/ehr-to-county" className={`${styles.btn} ${styles.btnGhost}`}>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(180deg)" }}>
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
              Back to Landing Page
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
