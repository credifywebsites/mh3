"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { ZohoChatTrigger } from "@/components/utils/ZohoChatTrigger";
import { EHR_SITE_ROUTES, usesEhrSite } from "@/config/ehrSite";
import siteConfig from "@/config/site";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/**
 * Routes that ship their own full-page chrome/consent context — the partner
 * deck has its own sticky stage nav and footer, and the live module previews
 * are each a fully isolated third-party-style document embedded in an
 * iframe. Neither should get the marketing navbar/footer, the sales chat
 * widget, or ad/analytics tracking scripts.
 */
const STANDALONE_PREFIXES = ["/partners", "/live"];

function isStandalone(pathname: string) {
  return STANDALONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

/**
 * The home and Solutions pages of the Credify EHR design ship the dark footer
 * that belongs to that design, so the shared one would be a second footer on
 * the same page. They use the shared Navbar like every other page. Unlike the
 * standalone routes above these are still public marketing pages, so they keep
 * the chat widget and every tracking script.
 */
function hasOwnFooter(pathname: string) {
  return usesEhrSite && EHR_SITE_ROUTES.includes(pathname);
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (isStandalone(pathname)) {
    return <>{children}</>;
  }

  const ownFooter = hasOwnFooter(pathname);

  return (
    <>
      <ZohoChatTrigger />
      <Script
        id="zoho-salesiq"
        src={`https://salesiq.zohopublic.com/widget?wc=${siteConfig.zohoWidgetCode}`}
        strategy="afterInteractive"
      />
      {/* Meta Pixel (Facebook) */}
      {siteConfig.fbPixelId && (
        <>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${siteConfig.fbPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${siteConfig.fbPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
      {/* Microsoft Tag (Bing) */}
      {siteConfig.msTagId && (
        <Script
          id="ms-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"${siteConfig.msTagId}", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
            `,
          }}
        />
      )}
      {/* Google Tag (gtag.js) */}
      {siteConfig.googleTagId && (
        <>
          <Script
            id="google-tag-base"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleTagId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-tag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleTagId}');
              `,
            }}
          />
        </>
      )}
      {/* AdRoll Tag */}
      {siteConfig.adrollAdvId && siteConfig.adrollPixId && (
        <Script
          id="adroll-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              adroll_adv_id = "${siteConfig.adrollAdvId}";
              adroll_pix_id = "${siteConfig.adrollPixId}";
              adroll_version = "2.0";

              (function(w, d, e, o, a) {
                  w.__adroll_loaded = true;
                  w.adroll = w.adroll || [];
                  w.adroll.f = [ 'setProperties', 'identify', 'track', 'identify_email', 'get_cookie' ];
                  var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                          + "/roundtrip.js";
                  for (a = 0; a < w.adroll.f.length; a++) {
                      w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                          return function() {
                              w.adroll.push([ n, arguments ])
                          }
                      })(w.adroll.f[a])
                  }

                  e = d.createElement('script');
                  o = d.getElementsByTagName('script')[0];
                  e.async = 1;
                  e.src = roundtripUrl;
                  o.parentNode.insertBefore(e, o);
              })(window, document);
              adroll.track("pageView");
            `,
          }}
        />
      )}
      <Navbar />
      <main>{children}</main>
      {!ownFooter && <Footer />}
    </>
  );
}
