import Image from "next/image";
import styles from "./Button.module.css";

export default function DownloadButton({
  label = "ดาวน์โหลดเอกสารแนวทาง",
  href = "#",
}) {
  return (
    <a href={href} className={styles.button} download>
      <span>{label}</span>
      <Image
        src="/icons/download.svg"
        alt="download"
        width={18}
        height={18}
        className={styles.icon}
      />
    </a>
  );
}
