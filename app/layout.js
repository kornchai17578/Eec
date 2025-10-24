// app/layout.js
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./globals.css";
import { Inter, Noto_Sans_Thai } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const noto = Noto_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans antialiased">
        <ConfigProvider
          theme={{
            token: {
              // ให้ antd ใช้ฟอนต์จาก next/font ที่ประกาศเป็น CSS var
              fontFamily:
                'var(--font-noto), var(--font-inter), system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
