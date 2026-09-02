import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "../LogoMark";
import siteConfig from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column 1: Logo + Description */}
        <div className={styles.footerCol}>
          <Link href="/" className={styles.footerLogo}>
            {siteConfig.footerLogoPath ? (
              <Image
                src={siteConfig.footerLogoPath}
                alt={`${siteConfig.name} logo`}
                width={280}
                height={99}
                className={styles.logoImage}
              />
            ) : (
              <>
                <LogoMark variant="footer" />
                <span>{siteConfig.name}</span>
              </>
            )}
          </Link>
          <p className={styles.footerDesc}>
            {siteConfig.footerDescription}
          </p>
        </div>

        {/* Dynamic footer columns from config */}
        {siteConfig.footerColumns.map((col) => (
          <div key={col.title} className={styles.footerCol}>
            <h4 className={styles.colTitle}>{col.title}</h4>
            <nav className={styles.footerList}>
              {col.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className={styles.footerBottom}>
        <a
          href="https://elevenlabs.io"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.poweredBy}
        >
          <span className={styles.poweredByLabel}>Powered by ElevenLabs</span>
        </a>
        <div className={styles.footerCopy}>
          Push It, Inc. dba Credify
        </div>
        <div className={styles.poweredBySpacer} />
      </div>
    </footer>
  );
}
