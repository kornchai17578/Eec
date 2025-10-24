"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./styles/Header.module.css";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const isActive = (path) => {
    const p = path.startsWith("/") ? path : `/${path}`;
    return pathname === p;
  };

  return (
    <header className={styles.header}>
      <Link
        href="/home"
        className={styles.header__logo}
        aria-label="Go to Home"
      >
        <Image src="/logo.svg" alt="Logo" width={100} height={40} priority />
      </Link>

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
      </button>

      <nav
        id="primary-nav"
        aria-label="Primary"
        className={`${styles.header__nav} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
      >
        <ul className={styles.nav__list}>
          <li>
            <Link
              href="/chemical-use-situation"
              className={`${styles.nav__link} ${
                isActive("/chemical-use-situation") ? styles.isActive : ""
              }`}
            >
              สถานการณ์การใช้สารเคมี
            </Link>
          </li>
          <li>
            <Link
              href="/sustainable-chemistry-guidelines"
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
              href="/case-studies"
              className={`${styles.nav__link} ${
                isActive("/case-studies") ? styles.isActive : ""
              }`}
            >
              กรณีตัวอย่าง
            </Link>
          </li>
          <li>
            <Link
              href="/related-technologies"
              className={`${styles.nav__link} ${
                isActive("/related-technologies") ? styles.isActive : ""
              }`}
            >
              เทคโนโลยีที่เกี่ยวข้อง
            </Link>
          </li>
          <li>
            <Link
              href="/local-network-info"
              className={`${styles.nav__link} ${
                isActive("/local-network-info") ? styles.isActive : ""
              }`}
            >
              ข้อมูลเครือข่ายในพื้นที่
            </Link>
          </li>
          <li>
            <Link
              href="/safety-inspection-guide"
              className={`${styles.nav__link} ${
                isActive("/safety-inspection-guide") ? styles.isActive : ""
              }`}
            >
              คู่มือการตรวจสอบและมาตรการความปลอดภัย
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
