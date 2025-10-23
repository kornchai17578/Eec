"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
const Icons = dynamic(() => import("@/components/Icons"));
import styles from "./styles/Header.module.css";
import { useLocale } from "next-intl";

export default function Header() {
  const locale = useLocale(); // "en" | "th"
  const pathname = usePathname() || "/";

  // สร้าง helper ให้ลิงก์เป็น locale-aware
  const withLocale = (path) => {
    const p = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${p}`;
  };

  // เช็ค active โดยตัด prefix locale ออกจาก pathname ปัจจุบันก่อนเปรียบเทียบ
  const normalized = useMemo(
    () => pathname.replace(/^\/(en|th)(?=\/|$)/, ""),
    [pathname]
  );
  const isActive = (path) => {
    const p = path.startsWith("/") ? path : `/${path}`;
    return normalized === p || normalized.startsWith(p + "/");
  };

  // ปุ่มสลับภาษา: คง path เดิม แต่เปลี่ยน locale
  const altLocale = locale === "th" ? "en" : "th";
  const toggleLocaleHref = `/${altLocale}${normalized || "/"}`;

  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo → /{locale}/home */}
      <Link
        href={withLocale("/home")}
        className={styles.header__logo}
        aria-label="Go to Home"
      >
        <Image src="/logo.svg" alt="Logo" width={100} height={40} priority />
      </Link>

      {/* ปุ่มเมนู (มือถือ) */}
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.menuIcon} aria-hidden>
          ☰
        </span>
        {/* <span className="sr-only">Toggle menu</span> */}
      </button>

      {/* Nav */}
      <nav
        id="primary-nav"
        aria-label="Primary"
        className={`${styles.header__nav} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
      >
        <ul className={styles.nav__list}>
          <li>
            <Link
              href={withLocale("/chemical-use-situation")}
              className={`${styles.nav__link} ${
                isActive("/chemical-use-situation") ? styles.isActive : ""
              }`}
            >
              สถานการณ์การใช้สารเคมี
            </Link>
          </li>

          <li>
            <Link
              href={withLocale("/sustainable-chemistry-guidelines")}
              className={`${styles.nav__link} ${
                isActive("/sustainable-chemistry-guidelines")
                  ? styles.isActive
                  : ""
              }`}
            >
              แนวทางเคมียั่งยืน
            </Link>
          </li>

          <li>
            <Link
              href={withLocale("/case-studies")}
              className={`${styles.nav__link} ${
                isActive("/case-studies") ? styles.isActive : ""
              }`}
            >
              กรณีตัวอย่าง
            </Link>
          </li>

          <li>
            <Link
              href={withLocale("/related-technologies")}
              className={`${styles.nav__link} ${
                isActive("/related-technologies") ? styles.isActive : ""
              }`}
            >
              เทคโนโลยีที่เกี่ยวข้อง
            </Link>
          </li>

          <li>
            <Link
              href={withLocale("/local-network-info")}
              className={`${styles.nav__link} ${
                isActive("/local-network-info") ? styles.isActive : ""
              }`}
            >
              ข้อมูลเครือข่ายในพื้นที่
            </Link>
          </li>

          <li>
            <Link
              href={withLocale("/safety-inspection-guide")}
              className={`${styles.nav__link} ${
                isActive("/safety-inspection-guide") ? styles.isActive : ""
              }`}
            >
              คู่มือการตรวจสอบและมาตรการความปลอดภัย
            </Link>
          </li>

          <li>
            {/* Toggle locale: คง path เดิม */}
            <Link href={toggleLocaleHref} aria-label="Switch language">
              <Icons name="globe" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
