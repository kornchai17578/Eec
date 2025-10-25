import Titile from "@/components/Titile";
import ChemicalConverter from "./components/ChemicalConverter";
import { chemicalOptions } from "@/data/chemicalOptions";

export default async function RelatedTechnologies() {
  return (
    <div className="gradient-bg">
      <div className="container mx-auto py-4">
        <Titile title="เทคโนโลยีที่เกี่ยวข้อง" />

        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <div className="contentHeader">
            <img src="/icons/file.svg" alt="flame" className="contentIcon" />
            <h2 className="TitleContent">
              Chemical Converter - แปลงสารเคมีเป็นสารเคมียั่งยืน
            </h2>
          </div>
          <ChemicalConverter options={chemicalOptions} />
        </section>
        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <div className="Content">
            <h3 className="titleH3 mb-2">Why this alternative?</h3>
            <p>
              Ethanol เป็นทางเลือกที่ดีกว่า Methanol อย่างมาก เนื่องจากมีค่า VHR
              ต่ำกว่า 74% และมีความปลอดภัยต่อสุขภาพมากกว่า แนะนำให้ใช้ Ethanol
              แทน Methanol ในกระบวนการผลิต
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
