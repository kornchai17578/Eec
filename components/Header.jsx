"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./styles/Header.module.css";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);

  const isActive = (path) => pathname === path;

  const dropdownItems = [
    {
      title: "1. การป้องกันของเสีย (Prevention)",
      companies: [
        { name: "Merck & Co. Inc.", component: "MerckCO" },
        {
          name: "Pro Farm Group, Inc., a Subsidiary of Bioceres Crop Solutions",
          component: "ProFarmGroup",
        },
        { name: "PhoSul®", component: "PhoSul" },
        { name: "Solugen", component: "Solugen" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "The Clorox Company", component: "TheCloroxCompany" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "Amgen", component: "Amgen" },
        {
          name: "Professor Song Lin (Cornell University)",
          component: "SongLin",
        },
        { name: "Provivi", component: "Provivi" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title: "2. เศรษฐศาสตร์ของอะตอม (Atom Economy)",
      companies: [
        { name: "Viridis Chemical Company", component: "ViridisChemical" },
        {
          name: "University of Delaware, Professor Dionisios G. Vlachos",
          component: "DionisiosG",
        },
        { name: "Solugen", component: "Solugen" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "Modern Meadow", component: "ModernMeadow" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Amgen", component: "Amgen" },
        { name: "Merck & Co. Inc.", component: "MerckCO" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title: "3. การสังเคราะห์ที่มีอันตรายน้อยลง (Less hazardous synthesis)",
      companies: [
        {
          name: "Pro Farm Group, Inc., a Subsidiary of Bioceres Crop Solutions",
          component: "ProFarmGroup",
        },
        { name: "Viridis Chemical Company", component: "ViridisChemical" },
        {
          name: "University of Delaware, Professor Dionisios G. Vlachos",
          component: "DionisiosG",
        },
        { name: "PhoSul®", component: "PhoSul" },
        { name: "Solugen", component: "Solugen" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "The Clorox Company", component: "TheCloroxCompany" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "Amgen", component: "Amgen" },
        { name: "Merck & Company, Inc.", component: "Merck" },
        {
          name: "Professor Song Lin (Cornell University)",
          component: "SongLin",
        },
        { name: "Provivi", component: "Provivi" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title: "4. การออกแบบสารเคมีที่ปลอดภัยขึ้น (Safer chemicals)",
      companies: [
        {
          name: "Pro Farm Group, Inc., a Subsidiary of Bioceres Crop Solutions",
          component: "ProFarmGroup",
        },
        {
          name: "University of Delaware, Professor Dionisios G. Vlachos",
          component: "DionisiosG",
        },
        { name: "PhoSul®", component: "PhoSul" },
        { name: "Solugen", component: "Solugen" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "The Clorox Company", component: "TheCloroxCompany" },
        { name: "Modern Meadow", component: "ModernMeadow" },
        {
          name: "Professor Song Lin (Cornell University)",
          component: "SongLin",
        },
        { name: "Provivi", component: "Provivi" },
      ],
    },
    {
      title:
        "5. การใช้ตัวทำละลายและสารช่วยที่ปลอดภัย (Safer Solvents and Auxiliaries)",
      companies: [
        { name: "Merck & Co. Inc.", component: "MerckCO" },
        { name: "The Clorox Company", component: "TheCloroxCompany" },
        { name: "Modern Meadow", component: "ModernMeadow" },
        { name: "Provivi", component: "Provivi" },
      ],
    },
    {
      title:
        "6. การใช้พลังงานอย่างมีประสิทธิภาพ (Design for Energy Efficiency)",
      companies: [
        { name: "Merck & Co. Inc.", component: "MerckCO" },
        {
          name: "Pro Farm Group, Inc., a Subsidiary of Bioceres Crop Solutions",
          component: "ProFarmGroup",
        },
        { name: "Viridis Chemical Company", component: "ViridisChemical" },
        {
          name: "University of Delaware, Professor Dionisios G. Vlachos",
          component: "DionisiosG",
        },
        { name: "Solugen", component: "Solugen" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "The Clorox Company", component: "TheCloroxCompany" },
        { name: "Modern Meadow", component: "ModernMeadow" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "Amgen", component: "Amgen" },
        { name: "Merck & Company, Inc.", component: "Merck" },
        {
          name: "Professor Song Lin (Cornell University)",
          component: "SongLin",
        },
        { name: "Provivi", component: "Provivi" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title: "7. การใช้วัตถุดิบที่หมุนเวียนได้ (Use of Renewable Feedstocks)",
      companies: [
        { name: "Merck & Co. Inc.", component: "MerckCO" },
        {
          name: "Pro Farm Group, Inc., a Subsidiary of Bioceres Crop Solutions",
          component: "ProFarmGroup",
        },
        { name: "Viridis Chemical Company", component: "ViridisChemical" },
        {
          name: "University of Delaware, Professor Dionisios G. Vlachos",
          component: "DionisiosG",
        },
        { name: "PhoSul®", component: "PhoSul" },
        { name: "Solugen", component: "Solugen" },
        { name: "Modern Meadow", component: "ModernMeadow" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "Provivi", component: "Provivi" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title:
        "8. การออกแบบให้เกิดผลิตภัณฑ์ที่มีประสิทธิภาพสูง (Reduce Derivatives)",
      companies: [
        { name: "Amgen", component: "Amgen" },
        { name: "Merck & Company, Inc.", component: "Merck" },
        { name: "Provivi", component: "Provivi" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title: "9. การใช้ตัวเร่งปฏิกิริยา (Catalysis)",
      companies: [
        { name: "Viridis Chemical Company", component: "ViridisChemical" },
        {
          name: "University of Delaware, Professor Dionisios G. Vlachos",
          component: "DionisiosG",
        },
        { name: "Solugen", component: "Solugen" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "Merck & Company, Inc.", component: "Merck" },
        {
          name: "Professor Song Lin (Cornell University)",
          component: "SongLin",
        },
      ],
    },
    {
      title: "10. การออกแบบให้ย่อยสลายได้ (Design for Degradation)",
      companies: [
        {
          name: "Pro Farm Group, Inc., a Subsidiary of Bioceres Crop Solutions",
          component: "ProFarmGroup",
        },
        { name: "PhoSul®", component: "PhoSul" },
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "Modern Meadow", component: "ModernMeadow" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
    {
      title:
        "11. การตรวจสอบแบบเรียลไทม์เพื่อป้องกันมลพิษ (Real-time Analysis for Pollution Prevention)",
      companies: [
        { name: "Merck & Co. Inc.", component: "MerckCO" },
        { name: "Solugen", component: "Solugen" },
      ],
    },
    {
      title: "12. การป้องกันอุบัติเหตุทางเคมี (Inherently Safer Chemistry)",
      companies: [
        { name: "Captis Aire LLC", component: "CaptisAireLLC" },
        { name: "The Clorox Company", component: "TheCloroxCompany" },
        {
          name: "Professor Richard Laine (University of Michigan)",
          component: "RichardLaine",
        },
        { name: "Air Company", component: "AirCompany" },
        { name: "Amgen", component: "Amgen" },
        { name: "Merck & Company, Inc.", component: "Merck" },
        {
          name: "Professor Song Lin (Cornell University)",
          component: "SongLin",
        },
        { name: "University of California Davis", component: "UCDevis" },
      ],
    },
  ];

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
        className={`${styles.header__nav} ${open ? styles.open : ""}`}
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

          {/* ✅ Dropdown 2 ชั้น */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => {
              setDropdownOpen(false);
              setSubOpen(null);
            }}
          >
            <button
              type="button"
              className={`${styles.nav__link} ${
                isActive("/case-studies") ? styles.isActive : ""
              }`}
            >
              กรณีตัวอย่าง ▾
            </button>

            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    className={styles.subDropdown}
                    onMouseEnter={() => setSubOpen(index)}
                    onMouseLeave={() => setSubOpen(null)}
                  >
                    <span className={styles.dropdownItem}>{item.title} ▸</span>

                    {subOpen === index && (
                      <ul className={styles.subMenu}>
                        {item.companies.map((company, i) => (
                          <li key={i}>
                            <Link
                              href={`/case-studies?index=${index}&company=${encodeURIComponent(
                                company.component
                              )}`}
                              className={`${styles.subItem} ${
                                pathname.includes(company.component)
                                  ? styles.isActive
                                  : ""
                              }`}
                            >
                              {company.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
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

          <li>
            <Link
              href="/whats-new"
              className={`${styles.nav__link} ${
                isActive("/whats-new") ? styles.isActive : ""
              }`}
            >
              What's New?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
