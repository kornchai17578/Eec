
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function WelcomeScreen({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "WELCOME" });

  return (
    <main className="welcome">
      <div className="welcome__card">
        <div className="welcome__logos">
          <img src="/logo.svg" alt="logo" className="logo" />
        </div>

        <h1 className="welcome__title">{t("TITLE")}</h1>

        <Link href={`/${locale}/home`} className="button">
          {t("ENTER")}{" "}
          <img src="/icons/arrow.svg" alt="arrow" className="logo" />
        </Link>
      </div>
    </main>
  );
}
