"use client";

import React, { useState, useEffect, useRef } from "react";
import "./EhrBillingForm.css";

const EhrBillingTheme: React.FC = () => {
  const [isEhrCalloutVisible, setIsEhrCalloutVisible] = useState(true);
  const [isCredifyModalVisible, setIsCredifyModalVisible] = useState(false);
  const [isMarketingCalloutVisible, setIsMarketingCalloutVisible] = useState(true);
  const [codeType, setCodeType] = useState<"cpt" | "other">("cpt");
  const [tierMode, setTierMode] = useState<"dollar" | "time">("dollar");
  const pulseBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.body.style.animationPlayState = document.hidden ? "paused" : "running";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCredifyModalVisible(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isCredifyModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCredifyModalVisible]);

  useEffect(() => {
    const jiggleBtn = () => {
      const btn = pulseBtnRef.current;
      if (!btn) return;
      btn.classList.remove("btn-jiggle-active");
      // Force reflow
      void btn.offsetWidth;
      btn.classList.add("btn-jiggle-active");
    };

    // First jiggle
    jiggleBtn();

    // Second jiggle after 5 seconds
    const timer = setTimeout(() => {
      jiggleBtn();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const dismissEhrCallout = () => setIsEhrCalloutVisible(false);
  const dismissMarketingCallout = () => setIsMarketingCalloutVisible(false);
  const openCredifyForm = () => setIsCredifyModalVisible(true);
  const closeCredifyForm = () => setIsCredifyModalVisible(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCredifyForm();
    }
  };

  return (
    <>
      {/* ========== EHR BACKGROUND ========== */}
      <div className="ehr-wrapper">
        {/* EHR PAGE MARKETING CALLOUT */}
        {isEhrCalloutVisible && (
          <div className="ehr-callout marketing-callout" id="ehrCallout">
            <div className="callout-badge">
              <span className="callout-sparkle">&#10022;</span>
              <span>CREDIFY ADVANTAGE</span>
            </div>
            <button
              className="callout-dismiss"
              onClick={dismissEhrCallout}
              aria-label="Dismiss"
            >
              &times;
            </button>
            <p className="callout-body"> Are you missing functionality to bill any type of service? </p>
            <p className="callout-body">
              <strong>No problem. </strong> We design custom, fully automated
              chargemasters&mdash;with unlimited permutations&mdash;seamlessly
              integrated into your existing workflow. No disruption required.
            </p>
            <div className="callout-arrow"></div>
          </div>
        )}

        <h1 className="ehr-title">Services</h1>
        <p className="ehr-subtitle">Manage services and set rates</p>

        <div className="service-list">
          <div className="service-item">
            <div className="service-code">00000</div>
            <div>
              <div className="service-name">Initial Consultation - No Charge</div>
              <div className="service-detail">15 minutes at $0</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-code">90791</div>
            <div>
              <div className="service-name">Psychiatric Diagnostic Evaluation</div>
              <div className="service-detail">50 minutes at $100</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-code">90837</div>
            <div className="service-expanded">
              <div className="service-header-row">
                <div>
                  <div className="service-name">Psychotherapy, 60 min</div>
                  <div className="service-detail">60 minutes at $100</div>
                </div>
                <div className="cta-hint">
                  <span className="cta-hint-arrow">&darr;</span>
                  <span className="cta-hint-text">Click to see missing fields</span>
                </div>
                <button
                  ref={pulseBtnRef}
                  className="btn-credify-pulse"
                  onClick={openCredifyForm}
                >
                  <span className="pulse-ring"></span>
                  <span className="btn-credify-icon-lg">C</span>
                  <span className="btn-credify-text">
                    <span className="btn-credify-cta">Click Here</span>
                    <span className="btn-credify-sub">Open Credify Billing Form</span>
                  </span>
                </button>
              </div>

              <label>Description</label>
              <input
                type="text"
                className="input-full"
                defaultValue="Psychotherapy, 60 min"
              />

              <div className="rate-row">
                <div className="rate-group">
                  <label>Rate</label>
                  <input type="text" className="input-small" defaultValue="$100" />
                </div>
                <div className="rate-group">
                  <label>
                    Default Duration <span className="qicon">?</span>
                  </label>
                  <div className="duration-group">
                    <input type="text" className="input-small" defaultValue="60" />
                    <span>min</span>
                  </div>
                </div>
                <div className="active-badge">
                  <span className="active-checkbox">&#10003;</span>
                  <span>Active</span>
                </div>
              </div>

              <div className="checkbox-row">
                <div className="checkbox-item">
                  <span className="empty-checkbox"></span>
                  <span>Make this the default service</span>
                </div>
                <div className="checkbox-item">
                  <span className="empty-checkbox"></span>
                  <span>
                    Bill this code in units <span className="qicon">?</span>
                  </span>
                </div>
              </div>

              <div className="booking-section">
                <div className="booking-title">Booking Options</div>
                <div className="checkbox-item">
                  <span className="empty-checkbox"></span>
                  <span>Available for online appointment requests</span>
                </div>
                <div className="booking-line">
                  <span>Block off</span>
                  <input
                    type="text"
                    defaultValue="0"
                    style={{ width: "48px", textAlign: "center" }}
                  />
                  <span>minutes before and</span>
                  <input
                    type="text"
                    defaultValue="0"
                    style={{ width: "48px", textAlign: "center" }}
                  />
                  <span>minutes after the appointment</span>
                </div>
              </div>

              <div className="actions-row">
                <button className="btn-ehr btn-cancel">Cancel</button>
                <button className="btn-ehr btn-save">Save</button>
                <button className="btn-delete">Delete Service</button>
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-code">90846</div>
            <div>
              <div className="service-name">
                Family Psychotherapy without patient present
              </div>
              <div className="service-detail">50 minutes at $0</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-code">90847</div>
            <div>
              <div className="service-name">
                Family psychotherapy, conjoint psychotherapy with the patient present
              </div>
              <div className="service-detail">50 minutes at $100</div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== CREDIFY FORM MODAL ========== */}
      <div
        className={`modal-overlay ${isCredifyModalVisible ? "" : "hidden"}`}
        id="credifyModal"
        onClick={handleBackdropClick}
      >
        <div className="modal-watermark">Sample Billing UI</div>
        <div className="form-container">
          {/* MARKETING CALLOUT OVERLAY */}
          {isMarketingCalloutVisible && (
            <div className="marketing-callout" id="marketingCallout">
              <div className="callout-badge">
                <span className="callout-sparkle">&#10022;</span>
                <span>CREDIFY ADVANTAGE</span>
              </div>
              <button
                className="callout-dismiss"
                onClick={dismissMarketingCallout}
                aria-label="Dismiss"
              >
                &times;
              </button>
              <p className="callout-headline">
                Most EHR chargemasters aren&rsquo;t fully automated.
              </p>
              <p className="callout-body">
                <strong>No problem&mdash;we fix that. </strong> Whether you bill by CPT
                codes, units, time-based increments (minute or 15-minute), EAPs,
                school-based or county contracts&mdash;whatever workarounds
                you&rsquo;re using today&mdash;we eliminate them. Our chargemaster
                supports unlimited computations, fully automated and seamlessly
                integrated into your EHR.
              </p>
              <div className="callout-arrow"></div>
            </div>
          )}

          <div className="form-header">
            <div className="form-header-text">
              <h1>Billing Entry Form</h1>
              <p>Service 90837 &mdash; Psychotherapy, 60 min</p>
            </div>
            <div className="close-btn-wrapper">
              <button
                className="close-btn"
                aria-label="Close"
                onClick={closeCredifyForm}
              >
                &times;
              </button>
              <span className="close-btn-label">Click to Close</span>
            </div>
          </div>

          <div className="auto-populated-notice">
            <strong>Auto-populated from your EHR:</strong> Service name, CPT code, and
            billed amount have been pre-filled. Please verify and complete the
            remaining fields.
          </div>

          <div className="form-body">
            {/* Service Details */}
            <div className="section">
              <div className="section-title">Service Details</div>

              <div className="field field-full" style={{ marginBottom: "14px" }}>
                <label>
                  Service Name <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    className="auto-filled"
                    defaultValue="Psychotherapy, 60 min"
                  />
                  <span className="auto-tag">Auto</span>
                </div>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label>
                  Code Type <span className="required">*</span>
                </label>
                <div className="code-toggle">
                  <button
                    type="button"
                    id="btn-cpt"
                    className={codeType === "cpt" ? "active" : ""}
                    onClick={() => setCodeType("cpt")}
                  >
                    CPT Code
                  </button>
                  <button
                    type="button"
                    id="btn-other"
                    className={`credify-new ${codeType === "other" ? "active" : ""}`}
                    onClick={() => setCodeType("other")}
                  >
                    Other Code (EAP)<span className="credify-new-tag">Added by Credify</span>
                  </button>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label id="code-label">
                    {codeType === "cpt" ? "CPT Code" : "EAP / Other Code"}{" "}
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="code-value"
                      className={codeType === "cpt" ? "auto-filled" : ""}
                      value={codeType === "cpt" ? "90837" : ""}
                      placeholder={codeType === "cpt" ? "e.g., 90837" : "e.g., EAP-001"}
                      readOnly={codeType === "cpt"}
                    />
                    {codeType === "cpt" && (
                      <span className="auto-tag" id="code-auto-tag">
                        Auto
                      </span>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label>Description</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      className="auto-filled"
                      defaultValue="60-min psychotherapy"
                    />
                    <span className="auto-tag">Auto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Amounts */}
            <div className="section">
              <div className="section-title">Billing Amounts</div>

              <div className="field-row">
                <div className="field">
                  <label>
                    Billed Amount <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <div className="currency-symbol auto-filled-wrap">
                      <input
                        type="number"
                        className="auto-filled"
                        defaultValue="100.00"
                        step="0.01"
                      />
                    </div>
                    <span className="auto-tag">Auto</span>
                  </div>
                </div>
                <div className="field">
                  <label>
                    Allowed Amount <span className="required">*</span>
                  </label>
                  <div className="currency-symbol">
                    <input type="number" step="0.01" placeholder="0.00" />
                  </div>
                </div>
              </div>
            </div>

            {/* Unit Conversion Tiers */}
            <div
              className="section credify-new"
              style={{ padding: "12px", borderRadius: "12px" }}
            >
              <div className="section-title">
                Unit Conversion Tiers
                <span className="credify-new-tag">Added by Credify</span>
              </div>
              <p className="section-subtitle">
                Define how dollar amounts or time durations convert into billable units.
              </p>

              <div className="tier-mode-toggle">
                <label>
                  <input
                    type="radio"
                    name="tier-mode"
                    value="dollar"
                    checked={tierMode === "dollar"}
                    onChange={() => setTierMode("dollar")}
                  />
                  Dollar-based tiers
                </label>
                <label>
                  <input
                    type="radio"
                    name="tier-mode"
                    value="time"
                    checked={tierMode === "time"}
                    onChange={() => setTierMode("time")}
                  />
                  Time-based tiers
                </label>
              </div>

              {/* DOLLAR TIERS */}
              <div
                id="dollar-tiers"
                className="tier-table"
                style={{ display: tierMode === "dollar" ? "" : "none" }}
              >
                <div className="tier-header">
                  <div>#</div>
                  <div>From ($)</div>
                  <div>To ($)</div>
                  <div style={{ textAlign: "right" }}>Units</div>
                </div>
                {[
                  { from: "25.00", to: "50.00", units: "1" },
                  { from: "51.00", to: "100.00", units: "2" },
                  { from: "101.00", to: "150.00", units: "3" },
                  { from: "151.00", to: "200.00", units: "4" },
                  { from: "201.00", to: "250.00", units: "5" },
                  { from: "251.00", to: "300.00", units: "6" },
                ].map((tier, idx) => (
                  <div className="tier-row" key={idx}>
                    <div className="tier-number">{idx + 1}</div>
                    <div className="currency-symbol">
                      <input type="number" step="0.01" placeholder={tier.from} />
                    </div>
                    <div className="currency-symbol">
                      <input type="number" step="0.01" placeholder={tier.to} />
                    </div>
                    <div className="tier-unit">
                      <input type="number" placeholder={tier.units} />
                      <span>units</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* TIME TIERS */}
              <div
                id="time-tiers"
                className="tier-table time-tiers"
                style={{ display: tierMode === "time" ? "" : "none" }}
              >
                <div className="tier-header">
                  <div>#</div>
                  <div>From (min)</div>
                  <div>To (min)</div>
                  <div style={{ textAlign: "right" }}>Units</div>
                </div>
                {[
                  { from: "1", to: "10", units: "1" },
                  { from: "11", to: "25", units: "2" },
                  { from: "26", to: "40", units: "3" },
                  { from: "41", to: "55", units: "4" },
                  { from: "56", to: "70", units: "5" },
                  { from: "71", to: "90", units: "6" },
                ].map((tier, idx) => (
                  <div className="tier-row" key={idx}>
                    <div className="tier-number">{idx + 1}</div>
                    <div>
                      <input type="number" placeholder={tier.from} />
                    </div>
                    <div>
                      <input type="number" placeholder={tier.to} />
                    </div>
                    <div className="tier-unit">
                      <input type="number" placeholder={tier.units} />
                      <span>units</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-actions">
            <div className="security-note">
              <span>🔒</span>
              <span>HIPAA-secured &middot; Encrypted transmission</span>
            </div>
            <div className="action-buttons">
              <button className="btn btn-secondary" onClick={closeCredifyForm}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EhrBillingTheme;
