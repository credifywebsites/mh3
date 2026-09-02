import styles from "./EhrSite.module.css";

/**
 * Maps a space-separated class string taken straight out of the source HTML
 * onto its hashed CSS-module name, so the JSX in this folder can stay a literal
 * transcription of task/credify-index.html and task/credify-solutions.html.
 * Anything the stylesheet does not define passes through untouched.
 */
export function c(names: string) {
  return names
    .split(" ")
    .filter(Boolean)
    .map((name) => styles[name] ?? name)
    .join(" ");
}
