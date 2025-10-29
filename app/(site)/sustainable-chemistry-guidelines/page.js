// app/(site)/sustainable-chemistry-guidelines/page.js
import Titile from "@/components/Titile";
import DownloadButton from "@/components/buttons/DownloadButton";
import GuidelineAccordion from "./components/GuidelineAccordion";
import "./components/GuidelineAccordion.css";
import T from "@/components/T";

import List1 from "@/data/guidelines/List1";
import List2 from "@/data/guidelines/List2";
import List3 from "@/data/guidelines/List3";
import List4 from "@/data/guidelines/List4";
import List5 from "@/data/guidelines/List5";
import List6 from "@/data/guidelines/List6";
import List7 from "@/data/guidelines/List7";
import List8 from "@/data/guidelines/List8";
import List9 from "@/data/guidelines/List9";
import List10 from "@/data/guidelines/List10";
import List11 from "@/data/guidelines/List11";
import List12 from "@/data/guidelines/List12";
import Other1 from "@/data/guidelines/Other1";
import Other2 from "@/data/guidelines/Other2";
import Other3 from "@/data/guidelines/Other3";
import { Row, Col } from "antd";

export default function SustainableChemistryGuidelines() {
  const principles = [
    {
      title: "การป้องกันการเกิดของเสียสารเคมี (Waste prevention)",
      content: List1,
    },
    {
      title: "เศรษฐศาสตร์ทางอะตอม (Atom economy)",
      content: List2,
    },
    {
      title: "การสังเคราะห์ที่มีอันตรายน้อยลง (Less hazardous synthesis)",
      content: List3,
    },
    {
      title: "การออกแบบสารเคมีที่ปลอดภัยขึ้น (Safer chemicals)",
      content: List4,
    },
    {
      title:
        "ตัวทำละลายและสารช่วยที่ปลอดภัยขึ้น (Safer solvents and auxiliaries)",
      content: List5,
    },
    {
      title:
        "การออกแบบกระบวนการเพื่อใช้พลังงานอย่างมีประสิทธิภาพ (Energy efficiency)",
      content: List6,
    },
    {
      title: "วัสดุเริ่มต้น หรือสารตั้งต้นที่สามารถทดแทนได้",
      content: List7,
    },
    {
      title: "การลดขั้นตอนการทำอนุพันธ์ที่ไม่จำเป็น ในกระบวนการทางเคมี",
      content: List8,
    },
    {
      title:
        "การใช้ตัวเร่งปฏิกิริยาเพื่อเพิ่มประสิทธิภาพและลดของเสียในกระบวนการทางเคมี (Catalysis)",
      content: List9,
    },
    {
      title: "การออกแบบเพื่อการย่อยสลาย (Design for Degradation)",
      content: List10,
    },
    {
      title:
        "การวิเคราะห์แบบเรียลไทม์ (Real-time analysis) เพื่อช่วยป้องกันมลพิษตั้งแต่ต้นทางของกระบวนการทางเคมี",
      content: List11,
    },
    {
      title: "เคมีที่ปลอดภัยตามธรรมชาติสำหรับการป้องกันอุบัติเหตุ",
      content: List12,
    },
  ];
  return (
    <div className="gradient-bg">
      <div className="container mx-auto px-6 py-4">
        <Titile title="แนวทางเคมียั่งยืน" />

        {/* Content Section */}
        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <Row className="mb-3">
            <Col span={24} sm={12}>
              <div className="contentHeader">
                <img
                  src="/icons/file.svg"
                  alt="flame"
                  className="contentIcon"
                />
                <h2 className="TitleContent">แนวคิดของเคมีสีเขียว</h2>
              </div>
            </Col>
            <Col span={24} sm={12}>
              <div className="sm:text-end">
                <DownloadButton
                  href="/docs/แนวทางเคมียั่งยืน Rev.01.pdf"
                  label="ดาวน์โหลดเอกสารแนวทาง"
                />
              </div>
            </Col>
          </Row>
          <div className="Content">
            <p>
              <T />
              เคมีสีเขียว (Green Chemistry) หรือ เคมีเพื่อความยั่งยืน
              (Sustainable Chemistry) 
              เป็นแนวคิดที่ได้รับการพัฒนาและเผยแพร่โดยสำนักงานปกป้องสิ่งแวดล้อมแห่งสหรัฐอเมริกา
              (US Environmental Protection Agency: EPA) ในช่วงทศวรรษ 1990
              โดยมีเป้าหมายสำคัญในการออกแบบสารเคมีและกระบวนการที่ปลอดภัยยิ่งขึ้น
              เพื่อลดผลกระทบเชิงลบต่อสิ่งแวดล้อม
              ขณะเดียวกันยังคงรักษาความคุ้มค่าและความสามารถในการแข่งขันทางเศรษฐกิจอย่างยั่งยืน
              <br />
              <T /> เคมีสีเขียว ถูกนิยามว่าเป็น
              “การออกแบบผลิตภัณฑ์และกระบวนการทางเคมีเพื่อลดหรือขจัดการใช้และการเกิดของสารอันตราย”
              (1,2)  ในช่วงสองทศวรรษที่ผ่านมา
              ได้มีการจัดตั้งโครงการและนโยบายด้านเคมีสีเขียวขึ้นทั่วโลกเป็นจำนวนมาก
              โดยประเทศที่มีบทบาทสำคัญในระยะแรก ได้แก่ สหรัฐอเมริกา
              สหราชอาณาจักร และอิตาลี
              <br /> โครงการสำคัญในระยะเริ่มแรกของเคมีสีเขียว ได้แก่
            </p>
            <ul>
              <li>
                US Presidential Green Chemistry Challenge Awards (1995) –
                รางวัลที่จัดตั้งขึ้นโดยรัฐบาลสหรัฐฯ
                เพื่อส่งเสริมการพัฒนาเทคโนโลยีและกระบวนการทางเคมีที่เป็นมิตรต่อสิ่งแวดล้อม
              </li>
              <li>
                Green Chemistry Institute (1997) –
                องค์กรที่ก่อตั้งขึ้นเพื่อส่งเสริมงานวิจัยและพัฒนาเทคโนโลยีด้านเคมีสีเขียว
              </li>
              <li>
                วารสาร Green Chemistry ของ Royal Society of Chemistry (1999) –
                การตีพิมพ์วารสารทางวิชาการที่มุ่งเน้นการเผยแพร่ผลงานวิจัยด้านเคมีสีเขียว
              </li>
            </ul>
            <p>
              <T />
              การออกแบบ (Design) เป็นองค์ประกอบที่สำคัญที่สุดของหลักเคมีสีเขียว
              เนื่องจากการออกแบบเป็นกระบวนการที่เกิดจากความตั้งใจของมนุษย์
              ซึ่งไม่สามารถเกิดขึ้นได้โดยบังเอิญ การออกแบบมีความเกี่ยวข้องกับ
              ความแปลกใหม่ (Novelty), การวางแผน (Planning), และแนวคิดเชิงระบบ
              (Systematic Conception) หลักการ 12 ประการของเคมีสีเขียว ถือเป็น
              "กฎสำหรับการออกแบบ"
              ที่ช่วยให้นักเคมีสามารถพัฒนากระบวนการทางเคมีที่ยั่งยืนได้อย่างมีเป้าหมาย
              โดยมุ่งเน้นที่ การวางแผนอย่างรอบคอบในการสังเคราะห์สารเคมี
              (Chemical Synthesis)
              และการออกแบบโมเลกุลเพื่อลดผลกระทบที่ไม่พึงประสงค์ (Molecular
              Design to Minimize Adverse Effects)
            </p>
            <p>
              ในปี 1998 Paul Anastas และ John Warner ได้ประมวลหลักการ 12
              ข้อของเคมีสีเขียว
              ซึ่งเป็นกรอบแนวทางที่ชัดเจนสำหรับการออกแบบกระบวนการทางเคมีที่ยั่งยืน
              หลักการดังกล่าวให้ความสำคัญกับ เศรษฐกิจอะตอม (Atom Economy),
              ประสิทธิภาพด้านพลังงาน (Energy Efficiency), การใช้
              วัตถุดิบที่สามารถหมุนเวียนได้ (Renewable Feedstocks)
              และการพัฒนาสารเคมีที่มีความปลอดภัยยิ่งขึ้น (Safer Chemical Design)
              เพื่อรองรับการเปลี่ยนแปลงสู่ความยั่งยืนในอุตสาหกรรมเคมีอย่างเป็นระบบ 
            </p>
            <p>
              หลักการ 12 ประการของเคมีสีเขียวเป็น เกณฑ์หรือแนวทางในการออกแบบ
              ที่ใช้เป็นกรอบสำหรับพัฒนาสารเคมีและกระบวนการทางเคมีที่ปลอดภัยและเป็นมิตรต่อสิ่งแวดล้อม
              หลักการเหล่านี้เป็นแนวทางสำคัญในการลดผลกระทบทางลบที่เกี่ยวข้องกับสารเคมีและกระบวนการผลิต
              <br />
              การลดความเสี่ยงผ่านการออกแบบที่ปลอดภัยยิ่งขึ้น โดยทั่วไปแล้ว
              เคมีมักถูกมองว่าเป็นศาสตร์ที่อันตราย
              และคนโดยทั่วไปมักเชื่อมโยงคำว่า "สารเคมี" (Chemical) กับ "สารพิษ"
              (Toxicity)
              แม้ว่าการป้องกันความเสี่ยงสามารถทำได้โดยใช้มาตรการด้านความปลอดภัย
              เช่น อุปกรณ์ป้องกันส่วนบุคคล (PPE) แต่เมื่อมาตรการเหล่านี้ล้มเหลว
              ความเสี่ยง (Risk) ซึ่งเป็นผลมาจาก "อันตราย (Hazard) × การรับสัมผัส
              (Exposure)" จะเพิ่มขึ้นอย่างมีนัยสำคัญ
              หากอันตรายของสารเคมีสูงและมาตรการควบคุมการได้รับสัมผัสล้มเหลว
              ผลที่ตามมาอาจรุนแรง เช่น อาการบาดเจ็บหรือการเสียชีวิต ดังนั้น
              แนวทางของเคมีสีเขียวจึงมุ่งเน้นไปที่
              การลดอันตรายที่แท้จริงของสารเคมีและกระบวนการผลิต
              แทนที่จะพึ่งพาเฉพาะมาตรการควบคุมการได้รับสัมผัส
            </p>
            <p>
              เป้าหมายหลักของ เคมีสีเขียว คือ การลดอันตราย (Hazard)
              ในทุกขั้นตอนของวัฏจักรชีวิตของสารเคมี
              ซึ่งได้รับการพิสูจน์แล้วว่ามีความคุ้มค่าทางเศรษฐกิจ
              อันตรายในบริบททางเคมีหมายถึง
              ความสามารถในการก่อให้เกิดผลกระทบที่เป็นอันตรายต่อสุขภาพของมนุษย์หรือสิ่งแวดล้อม
              อันตรายของสารเคมีและกระบวนการทางเคมีสามารถถูกออกแบบให้ลดลงได้ในทุกระดับของกระบวนการ
              ไม่ว่าจะเป็น
            </p>
            <p>
              ความเป็นพิษ (Toxicity) ต่อมนุษย์และสิ่งแวดล้อม
              <br />
              อันตรายทางกายภาพ (Physical Hazards) เช่น การระเบิด (Explosion)
              และการติดไฟ (Flammability)
              <br />
              อันตรายระดับโลก (Global Hazards) เช่น
              การทำลายชั้นโอโซนในบรรยากาศสตราโตสเฟียร์ (Stratospheric Ozone
              Depletion) ความเสี่ยง (Risk)
              <br />
              ที่เกี่ยวข้องกับอันตรายเหล่านี้อาจเกิดขึ้นจากลักษณะของวัตถุดิบ
              (Feedstock) และวัตถุดิบตั้งต้น (Raw Materials)
              ที่ใช้ในกระบวนการทางเคมี
              <br />
              คุณสมบัติของผลิตภัณฑ์สุดท้าย (Final Products)
              ที่ได้จากกระบวนการทางเคมี
            </p>
            <p>หลักการทั้ง 12 ข้อ ประกอบไปด้วย</p>
          </div>
          <div className="px-3 mb-3">
            <GuidelineAccordion items={principles} />
          </div>
          <Other1 />
          <Other2 />
          <Other3 />
        </section>
      </div>
    </div>
  );
}
