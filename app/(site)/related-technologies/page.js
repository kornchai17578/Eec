import Titile from "@/components/Titile";
import ChemicalConverter from "./components/ChemicalConverter";
import { chemicalOptions } from "@/data/chemicalOptions";
import T from "@/components/T";

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
            <h3 className="titleH3 mb-2">
              อัตราความเสี่ยงจากไอระเหย (Vapor Hazard Ratio: VHR):
            </h3>
            <p>
              เป็นการวัดความเสี่ยงที่เกี่ยวข้องกับการสูดดมไอระเหยของสารเคมี
              โดยเปรียบเทียบความเข้มข้นของไอระเหยกับค่าเกณฑ์จำกัดการสัมผัส
              เพื่อประเมินระดับอันตราย
            </p>
            <p>
              <T />
              เมื่อค่า TLV ทำหน้าที่เป็นเพียง “ดัชนีทางพิษวิทยา” (toxicological
              index) เท่านั้น VHR (Vapor Hazard Ratio)
              จะสะท้อนความน่าจะเป็นในการที่ความเข้มข้นของสารเคมีในอากาศจะเกินค่า
              TLV โดยใน VHR
              จะคำนึงถึงพฤติกรรมของสารเคมีที่แตกต่างกันในสภาวะแวดล้อมการทำงาน
              กล่าวคือ ความสามารถในการระเหยของสารเคมีแต่ละชนิดมีความแตกต่างกัน
              ซึ่งส่งผลโดยตรงต่อ
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
