/* eslint-disable @next/next/no-img-element */
import { c } from "./cx";

const sites = [
  { title: "FL Primary Care", url: "flprimarycare.com" },
  { title: "Houston Mental Health", url: "houstonmh.com" },
  { title: "Thrive Therapy NY", url: "thrivetherapyny.us" },
  { title: "Wellness Bridge", url: "wellnessbridge.us" },
];

/** Button that jumps to the carousel below the module. */
export function SampleWebsitesButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className={c("btn btn-primary sample-btn")}
      aria-expanded={open}
      aria-controls="sample-websites"
      onClick={onToggle}
    >
      {open ? "Hide sample websites" : "Sample websites"}
    </button>
  );
}

/** The four practice sites we have built, as cards that open the real site in a new tab. */
export function SampleWebsitesCards({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <div id="sample-websites" className={c("samples")} aria-label="Sample websites">
      <div className={c("samples-track")}>
        {sites.map((site) => (
          <a
            key={site.url}
            className={c("sample")}
            href={`https://${site.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={c("sample-frame")} aria-hidden="true">
              <span className={c("sample-bar")}><i /><i /><i /></span>
              <img src={`/images/sample-sites/${site.url}.jpg`} alt="" loading="lazy" />
            </span>
            <strong>{site.title}</strong>
            <span className={c("sample-url")}>{site.url}</span>
            <span className={c("sample-visit")}>Visit site &rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}
