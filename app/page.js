import Link from "next/link";

export default async function WelcomeScreen() {
  return (
    <main className="welcome">
      <div className="welcome__card">
        <div className="welcome__logos">
          <img src="/logo.svg" alt="logo" className="logo" />
        </div>

        <h1 className="welcome__title">
          โครงการศึกษาและพัฒนาการจัดการความปลอดภัยในกระบวนการทางเคมีและการใช้เคมีภัณฑ์ในภาคอุตสาหกรรม
          อย่างยั่งยืน (Sustainable
          Chemistry)เพื่อส่งเสริมการปกป้องสภาพภูมิอากาศ ในเขตพื้นที่ EEC
        </h1>

        <Link href="/home" className="button">
          เข้าสู่เว็บไซต์
          <img src="/icons/arrow.svg" alt="arrow" className="logo" />
        </Link>
      </div>
    </main>
  );
}
