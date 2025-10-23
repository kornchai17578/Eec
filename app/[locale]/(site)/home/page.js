import Link from "next/link";
import styles from "./Home.module.css";
import { Row, Col } from "antd";
import dynamic from "next/dynamic";
const Icons = dynamic(() => import("@/components/Icons"));
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HOME" });

  const withLocale = (path) =>
    `/${locale}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <div className={styles.hero}>
      <Row align="stretch">
        <Col span={24} md={18}>
          <div className={styles.heroBg}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>{t("HERO_TITLE")}</h1>
            </div>
          </div>
        </Col>

        <Col span={24} md={6}>
          <div className={styles.sideCol}>
            <Link
              href={withLocale("/chemical-use-situation")}
              className={`${styles.panel} ${styles.panelBrand}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">
                  {t("PANELS.CHEMICAL_USE_LINE1")}
                  <br />
                  {t("PANELS.CHEMICAL_USE_LINE2")}
                </div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" />
                </div>
              </div>
            </Link>

            <Link
              href={withLocale("/sustainable-chemistry-guidelines")}
              className={`${styles.panel} ${styles.panelLight}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">{t("PANELS.GUIDELINES")}</div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" color="#1173A9" />
                </div>
              </div>
            </Link>

            <Link
              href={withLocale("/safety-inspection-guide")}
              className={`${styles.panel} ${styles.panelBrand}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">{t("PANELS.SAFETY_GUIDE")}</div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" />
                </div>
              </div>
            </Link>

            <Link
              href={withLocale("/related-technologies")}
              className={`${styles.panel} ${styles.panelLight}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">{t("PANELS.RELATED_TECH")}</div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" color="#1173A9" />
                </div>
              </div>
            </Link>
          </div>
        </Col>
      </Row>

      {/* BACKGROUND */}
      <Row
        gutter={[24, 32]}
        className={`${styles.contentRow} bg-[#F6F7F9]`}
        justify="center"
        align="middle"
      >
        <Col span={20} md={20} lg={10}>
          <div className={styles.contentHeader}>
            <img
              src="/icons/hourglass.svg"
              alt={t("ALTS.HOURGLASS")}
              className={styles.contentIcon}
            />
            <h2 className={styles.TitleContent}>{t("SECTIONS.BACKGROUND")}</h2>
          </div>

          <div className={styles.Content}>
            <p>{t("BACKGROUND.P1")}</p>
            <p>{t("BACKGROUND.P2")}</p>
            <p>
              {t.rich("BACKGROUND.P3", {
                c1: 67,
                c2: 199,
                c3: 125,
                num: (chunks) => <span className={styles.num}>{chunks}</span>,
              })}
            </p>
            <p>
              {t.rich("BACKGROUND.P4", {
                invest: "55,777",
                workers: "17,363",
                num: (chunks) => <span className={styles.num}>{chunks}</span>,
              })}
            </p>
            <p>{t("BACKGROUND.P5")}</p>
            <ul>
              <li>{t("BACKGROUND.BULLETS.1")}</li>
              <li>{t("BACKGROUND.BULLETS.2")}</li>
            </ul>
          </div>
        </Col>

        <Col span={20} md={20} lg={10}>
          <div className={styles.aboutImageBox}>
            <img
              src="/images/about.png"
              alt={t("ALTS.FACTORY")}
              className={styles.aboutImg}
            />
          </div>
        </Col>
      </Row>

      {/* OBJECTIVES */}
      <Row
        gutter={[24, 32]}
        className={`${styles.contentRow}`}
        justify="center"
        align="middle"
      >
        <Col
          span={20}
          md={20}
          className="rounded md:rounded-xl bg-[#F6F7F9] p-4"
        >
          <div className={styles.contentHeader}>
            <img
              src="/icons/marker.svg"
              alt={t("ALTS.MARKER")}
              className={styles.contentIcon}
            />
            <h2 className={styles.TitleContent}>{t("SECTIONS.OBJECTIVES")}</h2>
          </div>

          <div className={styles.Content}>
            <ol className={styles.numList}>
              <li>{t("OBJECTIVES.1")}</li>
              <li>{t("OBJECTIVES.2")}</li>
              <li>{t("OBJECTIVES.3")}</li>
              <li>{t("OBJECTIVES.4")}</li>
            </ol>
          </div>
        </Col>
      </Row>
    </div>
  );
}
