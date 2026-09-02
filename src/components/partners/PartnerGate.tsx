"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { unlockPartners } from "@/app/actions/partners";
import styles from "./PartnerGate.module.css";

export function PartnerGate() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await unlockPartners(password);
      if (result.success) {
        // The page re-reads the access cookie on the server.
        router.refresh();
        return;
      }
      setError("That password is not correct.");
      setPassword("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.gate}>
      <div className={styles.card}>
        <div className={styles.watermark}>CREDIFY</div>
        <h1 className={styles.title}>Partner Overview</h1>
        <p className={styles.lede}>
          This overview is shared with practice partners. Enter the access password to continue.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="partner-password">
            Access password
          </label>
          <div className={styles.passwordField}>
            <input
              id="partner-password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              className={styles.input}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              autoFocus
              required
            />
            <button
              className={styles.passwordToggle}
              type="button"
              onClick={() => setIsPasswordVisible((visible) => !visible)}
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              aria-pressed={isPasswordVisible}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.75" />
                {isPasswordVisible && <path d="m4 4 16 16" />}
              </svg>
            </button>
          </div>
          <button className={styles.submit} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Checking…" : "Unlock overview"}
          </button>
          <p className={styles.error} role="alert">
            {error}
          </p>
        </form>

        <div className={styles.foot}>Credify · Push It, Inc.</div>
      </div>
    </div>
  );
}
