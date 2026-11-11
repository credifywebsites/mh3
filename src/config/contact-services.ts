// Services a visitor can pick on the contact form.
// `value` is what gets submitted; `label` is what the visitor sees and what appears in the email.
export const CONTACT_SERVICES = [
  { value: "all", label: "Full Practice Operations — We Run Everything" },
  { value: "rcm", label: "RCM / Billing" },
  { value: "credentialing", label: "Credentialing & Enrollment" },
  { value: "ai", label: "AI Services (Scheduling / Reminders)" },
  { value: "ehr", label: "EHR Enhancement" },
  { value: "other", label: "Something else" },
] as const;
