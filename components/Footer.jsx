// app/components/Footer.js
// ✅ Server Component (ไม่มี "use client")

import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* 1) โลโก้ */}
        <div className={styles.col1}>
          <div className={styles.logos}>
            <Image src="/logo.svg" alt="logo" width={96} height={48} />
          </div>
        </div>

        {/* 2) เนื้อหา + ติดต่อ */}
        <div className={styles.col2}>
          <p className={styles.lead}>
            โครงการศึกษาและพัฒนาการจัดการความปลอดภัยในกระบวนการทางเคมี
            และการใช้เคมีภัณฑ์ในภาคอุตสาหกรรม อย่างยั่งยืน (Sustainable
            Chemistry) เพื่อส่งเสริมการปกป้องสภาพภูมิอากาศ ในเขตพื้นที่ EEC
          </p>

          <div className={styles.contact}>
            <p>
              โปรดติดต่อ กลุ่มความปลอดภัยสารเคมี
              กองส่งเสริมเทคโนโลยีความปลอดภัยโรงงาน
            </p>
            <p>โทร 0 2430 6314 ต่อ 2309</p>
            <p>หรือ อีเมลสอบถาม facchem@diw.mail.go.th</p>
          </div>
        </div>

        {/* 3) เมนูลิงก์ (ไม่ต้อง locale-aware) */}
        <nav className={styles.col3} aria-label="Footer">
          <h2 className={styles.title}>แนวทางเคมียั่งยืน</h2>
          <ul className={styles.links}>
            <li>
              <Link href="/chemical-use-situation">สถานการณ์การใช้สารเคมี</Link>
            </li>
            <li>
              <Link href="/sustainable-chemistry-guidelines">
                แนวทางเคมียั่งยืน
              </Link>
            </li>
            <li>
              <Link href="/case-studies">กรณีตัวอย่าง</Link>
            </li>
            <li>
              <Link href="/related-technologies">เทคโนโลยีที่เกี่ยวข้อง</Link>
            </li>
            <li>
              <Link href="/local-network-info">ข้อมูลเครือข่ายในพื้นที่</Link>
            </li>
            <li>
              <Link href="/safety-inspection-guide">
                คู่มือการตรวจสอบและมาตรการความปลอดภัย
              </Link>
            </li>
            <li>
              <Link href="/about-us">
              เกี่ยวกับเรา
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
