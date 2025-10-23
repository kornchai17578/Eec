// app/[locale]/layout.js
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ConfigProvider } from "antd";
import { Inter, Noto_Sans_Thai } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}

export const dynamicParams = false;

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans antialiased">
        <ConfigProvider
          theme={{
            token: {
              fontFamily:
                'var(--font-noto), var(--font-inter), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            },
          }}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
