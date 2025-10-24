// app/(site)/chemical-use-situation/page.js
import { Row, Col } from "antd";
import AccidentTable from "./components/AccidentTable";
import ChemicalLeakChart from "./components/ChemicalLeakChart";
import Top10HazardChart from "./components/Top10HazardChart";
import Top10HazardExportChart from "./components/Top10HazardExportChart";
import Top10ProvinceChart from "./components/Top10ProvinceChart";
import Titile from "@/components/Titile";

export default function ChemicalUseSituation() {
  const dataLeft = [
    { name: "Sodium nitrite", value: 11.27 },
    { name: "Calcium dihydroxide", value: 12.0 },
    { name: "Hydrochloric acid 35%", value: 13.08 },
    { name: "Ammonia, anhydrous", value: 19.58 },
    { name: "Naphtha (petroleum)", value: 40.0 },
    { name: "Docosyl(trimethyl)ammonium methyl sulfate", value: 71.2 },
    { name: "Methanol", value: 234.97 },
    { name: "Toluene", value: 620.74 },
    { name: "Butanone", value: 631.0 },
    { name: "Ethyl acetate", value: 892.24 },
  ];

  const dataRight = [
    { name: "Methanol", value: 228.33 },
    { name: "Nitrogen", value: 357.73 },
    { name: "Butanone", value: 406.52 },
    { name: "Toluene", value: 590.74 },
    { name: "Hydrochloric acid 35%", value: 632.23 },
    { name: "Ethyl acetate", value: 854.1 },
    { name: "Distillates (petroleum)", value: 2532.4 },
    { name: "Naphtha (petroleum)", value: 2937.87 },
    { name: "Ammonia, anhydrous", value: 19145.29 },
    { name: "Ammonium hydroxide", value: 59463.32 },
  ];
  return (
    <div className="gradient-bg">
      <div className="container mx-auto px-6 py-4">
        <Titile title="สถานการณ์การใช้สารเคมี" />

        {/* Title */}
        <div className="contentHeader">
          <img src="/icons/flame.svg" alt="flame" className="contentIcon" />
          <h2 className="TitleContent">อุบัติเหตุในประเทศไทย</h2>
        </div>

        {/* Content Section */}
        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <Row gutter={[12, 12]}>
            <Col span={24} lg={12}>
              <AccidentTable />
            </Col>
            <Col span={24} lg={12}>
              <ChemicalLeakChart />
            </Col>
          </Row>
        </section>
        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <h3 className="titleH3 mb-2">
            Top 10 รายการวัตถุอันตรายตามบัญชี 5.1 (รายชื่อสารควบคุม)
            ปริมาณการนำเข้า รวม 4 ปี (ค.ศ. 2020–2023) ของประเทศไทย
          </h3>
          <Top10HazardChart />
        </section>
        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <h3 className="titleH3 mb-2">
            Top 10 รายการวัตถุอันตรายตามบัญชี 5.1 (รายชื่อสารควบคุม)
            ปริมาณการส่งออกรวม 4 ปี (ค.ศ. 2020–2023) ประเทศไทย
          </h3>
          <Top10HazardExportChart />
        </section>
        <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4">
          <h3 className="titleH3 mb-2">จังหวัดฉะเชิงเทรา</h3>
          <Row gutter={[12, 12]}>
            <Col span={24} xl={12}>
              <Top10ProvinceChart
                title="Top 10 ปริมาณการจัดเก็บสูงสุด (พ.ศ. 2566)"
                data={dataLeft}
              />
            </Col>
            <Col span={24} xl={12}>
              <Top10ProvinceChart
                title="Top 10 ปริมาณการจัดเก็บสูงสุด (พ.ศ. 2566)"
                data={dataRight}
              />
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
}
