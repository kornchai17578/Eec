import Titile from "@/components/Titile";
export default function WhatsNew() {
  return (
    <div className="gradient-bg">
      <div className="container mx-auto px-6 py-4">
        <Titile title="What's New?" />

        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <div className="contentHeader">
            <h2 className="TitleContent">ข่าวสารอัพเดท เกี่ยวกับเคมียั่งยืน</h2>
          </div>
          <div className="Content">
            โปรดติดต่อ กลุ่มความปลอดภัยสารเคมี
            <br />
            กองส่งเสริมเทคโนโลยีความปลอดภัยโรงงาน
            <br /> กรมโรงงานอุตสาหกรรม โทร 0 2430 6314 ต่อ 2309 <br />
            หรือ อีเมล์สอบถาม Facchem@diw.mail.go.th
          </div>
        </section>
      </div>
    </div>
  );
}
