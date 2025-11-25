import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./i18n.js");

// กำหนด basePath สำหรับ deployment
// ถ้า deploy บน subdirectory ให้ตั้งค่า BASE_PATH environment variable
// เช่น: BASE_PATH=/html npm run build
// หรือแก้ไขค่า default ด้านล่างตรงนี้
const basePath = process?.env?.BASE_PATH || "/html";

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true, // แก้ปัญหา reload บน server
  images: { unoptimized: true },
  devIndicators: false,
};

export default withNextIntl(nextConfig);
