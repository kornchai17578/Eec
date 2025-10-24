// app/(site)/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-[60%]">{children}</main>
      <Footer />
    </>
  );
}
