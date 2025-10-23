import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./i18n.js");

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  devIndicators: false
};

export default withNextIntl(nextConfig);
