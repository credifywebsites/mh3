"use client";

/**
 * Mounts a legacy module prototype (a full, self-contained HTML document —
 * its own <html>/<head>/<body>, inline CSS, inline vanilla-JS app) inside the
 * current page as a real React component.
 *
 * Why an iframe and not dangerouslySetInnerHTML: these prototypes are whole
 * documents, not fragments, and <script> tags inserted via innerHTML never
 * execute (a WHATWG rule, not a bug) — every module here depends on its
 * script running. `srcDoc` hands the string to the browser as a real
 * document, so it parses, styles, and executes exactly as authored, fully
 * isolated from the host page's CSS and globals. That isolation is also what
 * keeps the render pixel-perfect: nothing from the Credify site can bleed in.
 */
export function LiveModuleFrame({ html, title }: { html: string; title: string }) {
  return (
    <iframe
      srcDoc={html}
      title={title}
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
