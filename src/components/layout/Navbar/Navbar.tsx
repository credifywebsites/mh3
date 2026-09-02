"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "../LogoMark";
import { ChevronDown } from "@/components/icons/ChevronDown";
import siteConfig from "@/config/site";
import type { NavLink } from "@/config/site";

import styles from "./Navbar.module.css";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isActive(pathname: string, activePaths: string[]) {
  return activePaths.some((path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  });
}

function isParentActive(pathname: string, link: NavLink) {
  return (
    isActive(pathname, link.activePaths) ||
    Boolean(link.children?.some((child) => isActive(pathname, child.activePaths)))
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  const phoneHref = `tel:${siteConfig.phoneRaw}`;
  const phoneText = `${siteConfig.phoneLabel}: ${siteConfig.phoneDisplay}`;

  return (
    <>
      <header className={styles.header}>
        {/* <div className={styles.phoneBar}>
          {siteConfig.phoneLabel}: <a href={phoneHref}>{siteConfig.phoneDisplay}</a>
        </div> */}

        <nav
          className={cx(styles.nav, siteConfig.navLogoPath && styles.navWithLogo)}
          aria-label="Primary navigation"
        >
          <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} home`} onClick={() => setActiveDropdown(null)}>
            {siteConfig.navLogoPath ? (
              <Image
                src={siteConfig.navLogoPath}
                alt={`${siteConfig.name} logo`}
                width={280}
                height={99}
                priority
                className={styles.logoImage}
              />
            ) : (
              <>
                <LogoMark className={styles.logoMark} />
                <span>{siteConfig.name}</span>
              </>
            )}
          </Link>

          <div className={styles.navLinks}>
            {siteConfig.navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isOpen = activeDropdown === link.label;

              if (hasChildren) {
                return (
                  <div
                    key={`${link.href}-${link.label}`}
                    className={cx(styles.dropdown, isOpen && styles.dropdownOpen)}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cx(
                        styles.navLink,
                        styles.dropdownTrigger,
                        isParentActive(pathname, link) && styles.active
                      )}
                      onClick={() => setActiveDropdown(null)}
                      target={link.target}
                      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      <ChevronDown className={styles.dropdownChevron} size={16} />

                    </Link>

                    <div className={styles.dropdownMenu}>
                      {link.children?.map((child) => (
                        <Link
                          key={`${link.href}-${child.href}-${child.label}`}
                          href={child.href}
                          className={cx(
                            styles.dropdownItem,
                            child.description && styles.dropdownItemStacked,
                            isActive(pathname, child.activePaths) && styles.dropdownItemActive
                          )}
                          onClick={() => setActiveDropdown(null)}
                          target={child.target}
                          rel={child.target === "_blank" ? "noopener noreferrer" : undefined}
                        >
                          <span className={styles.dropdownItemLabel}>{child.label}</span>
                          {child.description && (
                            <span className={styles.dropdownItemDesc}>{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className={cx(styles.navLink, isActive(pathname, link.activePaths) && styles.active)}
                  onClick={() => setActiveDropdown(null)}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className={styles.navRight}>
            {siteConfig.name === "Credify" && (
              <a href="https://login.credifyfast.com" className={styles.navSignIn} onClick={() => setActiveDropdown(null)} target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            )}
            <a href={phoneHref} className={styles.navCta} onClick={() => setActiveDropdown(null)}>
              {phoneText}
            </a>
          </div>

          <button
            type="button"
            className={cx(styles.mobileMenuBtn, isMobileOpen && styles.mobileMenuBtnOpen)}
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Menu"
            aria-controls="mobileNav"
            aria-expanded={isMobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        id="mobileNav"
        className={cx(styles.mobileNav, isMobileOpen && styles.mobileNavOpen)}
        aria-hidden={!isMobileOpen}
      >
        {siteConfig.navLinks.map((link) => {
          const hasChildren = Boolean(link.children?.length);
          const isMobileOpen = activeMobileDropdown === link.label;

          return (
            <div key={`mobile-${link.href}-${link.label}`} className={styles.mobileNavGroup}>
              {hasChildren ? (
                <button
                  type="button"
                  className={cx(
                    styles.mobileNavLink,
                    styles.mobileNavToggle,
                    isParentActive(pathname, link) && styles.mobileActive
                  )}
                  onClick={() => toggleMobileDropdown(link.label)}
                >
                  {link.label}
                  <ChevronDown className={cx(styles.mobileChevron, isMobileOpen && styles.mobileChevronRotated)} size={18} />

                </button>
              ) : (
                <Link
                  href={link.href}
                   className={cx(
                    styles.mobileNavLink,
                    isParentActive(pathname, link) && styles.mobileActive
                  )}
                  onClick={() => {
                    setIsMobileOpen(false);
                    setActiveMobileDropdown(null);
                  }}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              )}

              {hasChildren && (
                <div className={cx(styles.mobileSubNav, isMobileOpen && styles.mobileSubNavOpen)}>
                  {link.children?.map((child) => (
                    <Link
                      key={`mobile-${link.href}-${child.href}-${child.label}`}
                      href={child.href}
                       className={cx(
                        styles.mobileSubNavLink,
                        isActive(pathname, child.activePaths) && styles.mobileActive
                      )}
                      onClick={() => {
                        setIsMobileOpen(false);
                        setActiveMobileDropdown(null);
                      }}
                      target={child.target}
                      rel={child.target === "_blank" ? "noopener noreferrer" : undefined}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {siteConfig.name === "Credify" && (
          <a href="https://login.credifyfast.com" className={styles.navSignInMobile} onClick={() => {
            setIsMobileOpen(false);
            setActiveMobileDropdown(null);
          }} target="_blank" rel="noopener noreferrer">
            Sign In
          </a>
        )}
        <a href={phoneHref} className={styles.navCtaMobile} onClick={() => {
          setIsMobileOpen(false);
          setActiveMobileDropdown(null);
        }}>
          {phoneText}
        </a>
      </div>
    </>
  );
}