// app/(site)/layout.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
