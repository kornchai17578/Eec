"use client";
import dynamic from "next/dynamic";
import styles from "./Button.module.css";

const Icons = dynamic(() => import("@/components/Icons"));

export default function DownloadButton({
  label = "ดาวน์โหลดเอกสารแนวทาง",
  href = "#",
}) {
  return (
    <a href={href} className={styles.button} download>
      <span>{label}</span>
      <Icons
        name="download"
        color="currentColor"
        size="18px"
        className={styles.icon}
      />
    </a>
  );
}
