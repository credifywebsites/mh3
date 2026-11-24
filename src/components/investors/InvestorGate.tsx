"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { unlockInvestors } from "@/app/actions/investors";
import styles from "./InvestorGate.module.css";

export function InvestorGate() {
  const router = useRouter();
  const [login, setLogin] = useState("");
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
      const result = await unlockInvestors(login, password);
      if (result.success) {
        router.refresh();
        return;
      }
      setError("That login or password is not correct.");
      setPassword("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.gate}>
      <div className={styles.card}>
        <div className={styles.watermark}>CREDIFY</div>
        <h1 className={styles.title}>Investor Pro Forma</h1>
        <p className={styles.lede}>Enter your investor access credentials to continue.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="investor-login">Login</label>
          <input className={styles.input} id="investor-login" name="login" value={login} onChange={(event) => setLogin(event.target.value)} autoComplete="username" autoFocus required />
          <label className={styles.label} htmlFor="investor-password">Password</label>
          <div className={styles.passwordField}>
            <input className={styles.input} id="investor-password" name="password" type={isPasswordVisible ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
            <button className={styles.passwordToggle} type="button" onClick={() => setIsPasswordVisible((visible) => !visible)} aria-label={isPasswordVisible ? "Hide password" : "Show password"} aria-pressed={isPasswordVisible}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.75" />
                {isPasswordVisible && <path d="m4 4 16 16" />}
              </svg>
            </button>
          </div>
          <button className={styles.submit} type="submit" disabled={isSubmitting}>{isSubmitting ? "Checking…" : "View pro forma"}</button>
          <p className={styles.error} role="alert">{error}</p>
        </form>
        <div className={styles.foot}>Credify · Push It, Inc.</div>
      </div>
    </main>
  );
}
