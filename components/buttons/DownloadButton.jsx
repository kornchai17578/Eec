"use client";
import Icons from "@/components/Icons";
import styles from "./Button.module.css";

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
