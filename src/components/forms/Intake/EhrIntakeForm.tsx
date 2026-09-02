"use client";

import React, { useState, useEffect, useRef } from "react";
import "./EhrIntakeForm.css";

const EhrIntakeForm: React.FC = () => {
  // Modal & Callout States
  const [isCredifyModalVisible, setIsCredifyModalVisible] = useState(false);
  const [isEhrCalloutVisible, setIsEhrCalloutVisible] = useState(true);
  const [isMarketingCalloutVisible, setIsMarketingCalloutVisible] = useState(true);
  
  // Dropdown States
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // PHQ-9 Calculation State
  const [phq9Scores, setPhq9Scores] = useState<Record<string, number>>({});
  const [phqDifficulty, setPhqDifficulty] = useState<string | null>(null);

  // Refs for Animations
  const pulseBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Button Jiggle Logic
    const jiggleBtn = () => {
      if (pulseBtnRef.current) {
        pulseBtnRef.current.classList.remove("btn-jiggle-active");
        void pulseBtnRef.current.offsetWidth; // Force reflow
        pulseBtnRef.current.classList.add("btn-jiggle-active");
      }
    };

    // Trigger jiggle on load and after 5 seconds
    const timer1 = setTimeout(jiggleBtn, 100);
    const timer2 = setTimeout(jiggleBtn, 5100);

    // Visibility Change Listener
    const handleVisibilityChange = () => {
      document.body.style.animationPlayState = document.hidden ? "paused" : "running";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Global Key Listener (Escape)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCredifyForm();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handlers
  const openCredifyForm = () => {
    setIsCredifyModalVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closeCredifyForm = () => {
    setIsCredifyModalVisible(false);
    document.body.style.overflow = "";
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handlePhqScore = (name: string, value: string) => {
    setPhq9Scores((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  const calculatePhqTotal = () => {
    return Object.values(phq9Scores).reduce((a, b) => a + b, 0);
  };

  const getPhqSeverity = (score: number) => {
    if (Object.keys(phq9Scores).length === 0) return "Answer questions to calculate";
    if (score <= 4) return "Minimal depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };

  const getPhqSeverityClass = (score: number) => {
    if (Object.keys(phq9Scores).length === 0) return "";
    if (score <= 4) return "minimal";
    if (score <= 9) return "mild";
    if (score <= 14) return "moderate";
    if (score <= 19) return "moderately-severe";
    return "severe";
  };

  return (
    <div className="intake-page-wrapper">
      <div className="form-container">
        {/* Form Header */}
        <div className="form-header">
          <h1>Adly&apos;s Form Source — Client Intake</h1>
          <div className="cta-hint">
            <span className="cta-hint-arrow">&darr;</span>
            <span className="cta-hint-text">Click to see missing fields</span>
          </div>
          <button 
            className="btn-credify-pulse" 
            ref={pulseBtnRef}
            onClick={openCredifyForm}
          >
            <span className="pulse-ring"></span>
            <span className="btn-credify-icon-lg">C</span>
            <span className="btn-credify-text">
              <span className="btn-credify-cta">Click Here</span>
              <span className="btn-credify-sub">Complete Credify Intake</span>
            </span>
          </button>
        </div>

        <div className="form-body">
          {/* Row 1: Date + First Name + Last Name */}
          <div className="section">
            <div className="row-3">
              <div className="field">
                <label>Today&apos;s Date <span className="required">*</span></label>
                <input type="date" id="today-date" />
              </div>
              <div className="field">
                <label>First Name <span className="required">*</span></label>
                <input type="text" id="first-name" placeholder="Enter first name" />
              </div>
              <div className="field">
                <label>Last Name <span className="required">*</span></label>
                <input type="text" id="last-name" placeholder="Enter last name" />
              </div>
            </div>
          </div>

          {/* Services + Referral */}
          <div className="section">
            <div className="row-2">
              <div className="field">
                <label>Which services are you interested in? <span className="required">*</span></label>
                <div className={`multi-select ${activeDropdown === "ms-services" ? "open" : ""}`} id="ms-services">
                  <div className="multi-select-trigger" onClick={() => toggleDropdown("ms-services")}>
                    <span className="multi-select-placeholder">Select one or more services</span>
                    <span className="multi-select-arrow">&#9662;</span>
                  </div>
                  <div className="multi-select-dropdown">
                    <div className="multi-select-option">
                      <input type="checkbox" id="svc-individual" value="Individual therapy" />
                      <label htmlFor="svc-individual">Individual therapy</label>
                    </div>
                    <div className="multi-select-option">
                      <input type="checkbox" id="svc-group" value="Group sessions" />
                      <label htmlFor="svc-group">Group sessions</label>
                    </div>
                    <div className="multi-select-option">
                      <input type="checkbox" id="svc-med" value="Medication management" />
                      <label htmlFor="svc-med">Medication management</label>
                    </div>
                    <div className="multi-select-option">
                      <input type="checkbox" id="svc-tele" value="Telehealth / virtual care" />
                      <label htmlFor="svc-tele">Telehealth / virtual care</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label>How did you hear about us? <span className="required">*</span></label>
                <div className={`multi-select ${activeDropdown === "ms-referral" ? "open" : ""}`} id="ms-referral">
                  <div className="multi-select-trigger" onClick={() => toggleDropdown("ms-referral")}>
                    <span className="multi-select-placeholder">Select one or more sources</span>
                    <span className="multi-select-arrow">&#9662;</span>
                  </div>
                  <div className="multi-select-dropdown">
                    {[
                      { id: "ref-google", val: "Google / web search" },
                      { id: "ref-friend", val: "Friend or family referral" },
                      { id: "ref-doctor", val: "Doctor / healthcare provider" },
                      { id: "ref-insurance", val: "Insurance directory" },
                      { id: "ref-social", val: "Social media" },
                      { id: "ref-psyctoday", val: "Psychology Today" },
                      { id: "ref-other", val: "Other" }
                    ].map(ref => (
                      <div className="multi-select-option" key={ref.id}>
                        <input type="checkbox" id={ref.id} value={ref.val} />
                        <label htmlFor={ref.id}>{ref.val}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GAD-7 Section */}
          <div className="section">
            <div className="section-title">Over the last two weeks, how often have you been bothered by the following problems?</div>
            <div className="rating-header">
              <div></div>
              <div className="rating-header-label">Not at all</div>
              <div className="rating-header-label">Several days</div>
              <div className="rating-header-label">More than half</div>
              <div className="rating-header-label">Nearly every day</div>
            </div>
            {[
              "Feeling nervous, anxious, or on edge",
              "Not being able to stop or control worrying",
              "Worrying too much about different things",
              "Trouble relaxing",
              "Being so restless that it is hard to sit still",
              "Becoming easily annoyed or irritable",
              "Feeling afraid as if something awful might happen"
            ].map((q, i) => (
              <div className="row-4-rating" key={i}>
                <div className="rating-question">{q}</div>
                {[0, 1, 2, 3].map(v => (
                  <div className="rating-option" key={v}>
                    <input type="radio" name={`q${i + 1}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Additional comments */}
          <div className="section">
            <div className="field">
              <label>Anything else you&apos;d like us to know?</label>
              <textarea placeholder="Share any additional information..."></textarea>
            </div>
          </div>

          {/* Signature + consent */}
          <div className="section">
            <label>Please sign below</label>
            <div className="signature-box">Click or tap to sign</div>
            <div className="consent-row">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">I consent to sharing information provided here.</label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-secondary">Save draft</button>
        </div>
      </div>

      {/* EHR Marketing Callout */}
      {isEhrCalloutVisible && (
        <div className="ehr-callout marketing-callout" id="ehrCallout">
          <div className="callout-badge">
            <span className="callout-sparkle">&#10022;</span>
            <span>CREDIFY ADVANTAGE</span>
          </div>
          <button className="callout-dismiss" onClick={() => setIsEhrCalloutVisible(false)} aria-label="Dismiss">&times;</button>
          <p className="callout-headline">Missing fields or forms in your EHR?</p>
          <p className="callout-body">
            <strong>No problem. </strong> We design and seamlessly integrate them into your existing workflow&mdash;no disruption required.
          </p>
          <div className="callout-arrow"></div>
        </div>
      )}

      {/* CREDIFY SUPPLEMENTAL INTAKE MODAL */}
      <div className={`modal-overlay ${isCredifyModalVisible ? "" : "hidden"}`} onClick={(e) => e.target === e.currentTarget && closeCredifyForm()}>
        <div className="modal-watermark">Sample Form</div>
        <div className="credify-container" onClick={(e) => e.stopPropagation()}>
          
          {/* Internal Marketing Callout */}
          {isMarketingCalloutVisible && (
            <div className="marketing-callout" id="marketingCallout">
              <div className="callout-badge">
                <span className="callout-sparkle">&#10022;</span>
                <span>CREDIFY ADVANTAGE</span>
              </div>
              <button className="callout-dismiss" onClick={() => setIsMarketingCalloutVisible(false)} aria-label="Dismiss">&times;</button>
              <p className="callout-headline">Need custom fields or forms?</p>
              <p className="callout-body">
                <strong>We&apos;ve got you covered.</strong> Whatever your practice needs for compliance, billing, reporting, or clinical workflows&mdash;we design and integrate it, no disruption to your EHR.
              </p>
              <div className="callout-arrow"></div>
            </div>
          )}

          <div className="credify-header">
            <div>
              <h1>Credify Supplemental Intake</h1>
              <p>Additional screening questions &mdash; auto-linked to client record</p>
            </div>
            <div className="close-btn-wrapper">
              <button className="close-btn" aria-label="Close" onClick={closeCredifyForm}>&times;</button>
              <span className="close-btn-label">Click to Close</span>
            </div>
          </div>

          <div className="credify-notice">
            <strong>Auto-populated from the intake form:</strong> Client name and date have been pre-filled. Please complete the supplemental questions below.
          </div>

          <div className="credify-body">
            {/* Client Record */}
            <div className="credify-section">
              <div className="credify-section-title">Client Record</div>
              <div className="row-2">
                <div className="field">
                  <label>Client Name</label>
                  <div className="field-with-tag">
                    <input type="text" className="auto-filled" id="credify-client-name" defaultValue="" />
                    <span className="auto-tag">Auto</span>
                  </div>
                </div>
                <div className="field">
                  <label>Intake Date</label>
                  <div className="field-with-tag">
                    <input type="date" className="auto-filled" id="credify-intake-date" />
                    <span className="auto-tag">Auto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Contact Information<span className="credify-new-tag">Added by Credify</span></div>
              <div className="row-2">
                <div className="field">
                  <label>Email Address <span className="required">*</span></label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label>Mobile Phone <span className="required">*</span></label>
                  <input type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
            </div>

            {/* Stress Level Scale */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Question 1 of 5 &mdash; Rate your current stress level<span className="credify-new-tag">Added by Credify</span></div>
              <div className="radio-scale">
                {[
                  "0 - None", "1", "2", "3", "4", "5 - Moderate", "6", "7", "8", "9", "10 - Severe"
                ].map((label, idx) => (
                  <label key={idx}>
                    <input type="radio" name="stress-level" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              <label style={{ fontWeight: 400, color: "#527060", fontSize: "13px", marginTop: "4px" }}>
                On a scale of 0 to 10, how would you rate your stress over the past week?
              </label>
            </div>

            {/* Symptoms Grid */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Question 2 of 5 &mdash; Current symptoms (select all that apply)<span className="credify-new-tag">Added by Credify</span></div>
              <div className="checkbox-grid">
                {[
                  { id: "sym-sleep", label: "Sleep difficulties" },
                  { id: "sym-appetite", label: "Appetite changes" },
                  { id: "sym-concentration", label: "Trouble concentrating" },
                  { id: "sym-fatigue", label: "Persistent fatigue" },
                  { id: "sym-panic", label: "Panic attacks" },
                  { id: "sym-mood", label: "Mood swings" },
                  { id: "sym-social", label: "Social withdrawal" },
                  { id: "sym-physical", label: "Physical aches/pains" },
                  { id: "sym-none", label: "None of the above" }
                ].map(sym => (
                  <div className="checkbox-card" key={sym.id}>
                    <input type="checkbox" id={sym.id} />
                    <label htmlFor={sym.id}>{sym.label}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Medication Info */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Question 3 of 5 &mdash; Medication history<span className="credify-new-tag">Added by Credify</span></div>
              <div className="row-2">
                <div className="field">
                  <label>Have you taken psychiatric medication before?</label>
                  <select>
                    <option value="">-- Please select --</option>
                    <option>No, never</option>
                    <option>Yes, currently taking</option>
                    <option>Yes, in the past</option>
                    <option>Prefer not to answer</option>
                  </select>
                </div>
                <div className="field">
                  <label>If yes, how many years total?</label>
                  <input type="number" min="0" max="99" step="1" placeholder="e.g., 3" />
                </div>
              </div>
            </div>

            {/* Goal Commitment Slider */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Question 4 of 5 &mdash; Goal commitment<span className="credify-new-tag">Added by Credify</span></div>
              <label>
                How committed are you to completing a treatment plan?
                <span className="scale-value" id="commitment-value">5</span>
              </label>
              <input type="range" min="1" max="10" defaultValue="5" id="commitment-slider" onInput={(e) => {
                const val = (e.target as HTMLInputElement).value;
                const display = document.getElementById('commitment-value');
                if (display) display.textContent = val;
              }} />
              <div className="scale-labels">
                <span>1 - Not at all</span>
                <span>5 - Moderately</span>
                <span>10 - Fully committed</span>
              </div>
            </div>

            {/* Emergency Contact Toggles */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Question 5 of 5 &mdash; Emergency contact<span className="credify-new-tag">Added by Credify</span></div>
              <div className="row-2">
                <div className="field">
                  <label>Do you have an emergency contact you&apos;d like on file?</label>
                  <div className="toggle-group">
                    {["Yes", "No", "Prefer not to say"].map((opt) => (
                      <button 
                        key={opt}
                        className={`toggle-btn ${opt === "Yes" ? "active" : ""}`} 
                        onClick={(e) => {
                          const btns = e.currentTarget.parentElement?.querySelectorAll('.toggle-btn');
                          btns?.forEach(b => b.classList.remove('active'));
                          e.currentTarget.classList.add('active');
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label>Emergency contact phone</label>
                  <input type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
            </div>

            {/* PHQ-9 Depression Screening */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">PHQ-9 Depression Screening<span className="credify-new-tag">Added by Credify</span></div>
              <p style={{ fontSize: "13px", color: "#527060", marginBottom: "14px", marginTop: "-6px" }}>
                Over the last two weeks, how often have you been bothered by any of the following problems?
              </p>

              <div className="rating-header" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}>
                <div></div>
                <div className="rating-header-label">Not at all</div>
                <div className="rating-header-label">Several days</div>
                <div className="rating-header-label">More than half the days</div>
                <div className="rating-header-label">Nearly every day</div>
              </div>

              {[
                "1. Little interest or pleasure in doing things",
                "2. Feeling down, depressed, or hopeless",
                "3. Trouble falling or staying asleep, or sleeping too much",
                "4. Feeling tired or having little energy",
                "5. Poor appetite or overeating",
                "6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
                "7. Trouble concentrating on things, such as reading the newspaper or watching television",
                "8. Moving or speaking so slowly that other people could have noticed, or being so fidgety or restless that you have been moving around a lot more than usual",
                "9. Thoughts that you would be better off dead, or of hurting yourself in some way"
              ].map((q, i) => (
                <div className="row-4-rating" key={i}>
                  <div className="rating-question">{q}</div>
                  {[0, 1, 2, 3].map(v => (
                    <div className="rating-option" key={v}>
                      <input 
                        type="radio" 
                        name={`phq${i + 1}`} 
                        value={v} 
                        onChange={(e) => handlePhqScore(`phq${i + 1}`, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              ))}

              <div style={{ marginTop: "16px", padding: "14px", background: "#edfaf4", borderRadius: "8px", border: "1px solid #edfaf4" }}>
                <label style={{ marginBottom: "10px" }}>
                  If you checked off <em>any</em> problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?
                </label>
                <div className="toggle-group" style={{ flexWrap: "wrap" }}>
                  {["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"].map(opt => (
                    <button 
                      key={opt}
                      className={`toggle-btn ${phqDifficulty === opt ? "active" : ""}`} 
                      onClick={() => setPhqDifficulty(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="phq-score-box" id="phq-score-box">
                <div className="phq-score-label">Calculated PHQ-9 Score</div>
                <div className="phq-score-value">
                  <span id="phq-score-number">{calculatePhqTotal()}</span>
                  <span className="phq-score-max">/ 27</span>
                </div>
                <div className={`phq-score-severity ${getPhqSeverityClass(calculatePhqTotal())}`} id="phq-score-severity">
                  {getPhqSeverity(calculatePhqTotal())}
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="credify-section credify-new">
              <div className="credify-section-title">Electronic Signature<span className="credify-new-tag">Added by Credify</span></div>
              <div className="row-2" style={{ marginBottom: "12px" }}>
                <div className="field">
                  <label>Full Legal Name <span className="required">*</span></label>
                  <input type="text" placeholder="Type your full legal name" />
                </div>
                <div className="field">
                  <label>Date Signed <span className="required">*</span></label>
                  <div className="field-with-tag">
                    <input type="date" className="auto-filled" id="credify-sign-date" />
                    <span className="auto-tag">Auto</span>
                  </div>
                </div>
              </div>

              <label>Signature <span className="required">*</span></label>
              <div 
                className="signature-pad" 
                onClick={(e) => {
                  e.currentTarget.classList.add('signed');
                  const placeholder = e.currentTarget.querySelector('.sig-placeholder') as HTMLElement;
                  const mark = e.currentTarget.querySelector('.sig-mark') as HTMLElement;
                  if (placeholder) placeholder.style.display = 'none';
                  if (mark) mark.style.display = 'flex';
                }}
              >
                <span className="sig-placeholder">Click or tap here to sign</span>
                <span className="sig-mark">
                  <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 28 C 18 8, 28 32, 40 22 S 60 12, 72 26 S 96 10, 112 24 S 138 14, 156 20 S 172 24, 176 22"
                      stroke="#1a8a66" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              <div className="consent-row" style={{ background: "#edfaf4", marginTop: "14px" }}>
                <input type="checkbox" id="credify-consent" />
                <label htmlFor="credify-consent">
                  I attest that the information provided above is accurate to the best of my knowledge, and I consent to the secure sharing of this information with my care team through the Credify platform.
                </label>
              </div>
            </div>
          </div>

          <div className="credify-actions">
            <div className="security-note">
              <span>🔒</span>
              <span>HIPAA-secured &middot; Encrypted transmission</span>
            </div>
            <div className="action-buttons">
              <button className="btn-credify-secondary" onClick={closeCredifyForm}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EhrIntakeForm;
