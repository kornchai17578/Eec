// app/(site)/safety-inspection-guide/page.js
import DownloadButton from "@/components/buttons/DownloadButton";
import Titile from "@/components/Titile";
import { Row, Col } from "antd";

export default function SafetyInspectionGuide() {
  return (
    <div className="gradient-bg">
      <div className="container mx-auto px-6 py-4">
        <Titile title="คู่มือการตรวจสอบความปลอดภัยสารเคมีและมาตรการความปลอดภัย " />

        <Row gutter={[12, 12]} align="stretch">
          <Col span={24} md={12}>
            <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4 h-full flex flex-col">
              <div className="contentHeader">
                <img
                  src="/icons/file.svg"
                  alt="flame"
                  className="contentIcon"
                />
                <h3 className="titleH3 mb-2">
                  คู่มือการตรวจสอบความปลอดภัยสารเคมี
                </h3>
              </div>

              <div className="Content my-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>

              <div className="mt-auto pt-4">
                <DownloadButton
                  href="/docs/guideline.pdf"
                  label="คู่มือการตรวจสอบความปลอดภัยสารเคมี"
                />
              </div>
            </section>
          </Col>
          <Col span={24} md={12}>
            <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4 h-full flex flex-col">
              <div className="contentHeader">
                <img
                  src="/icons/file.svg"
                  alt="flame"
                  className="contentIcon"
                />
                <h3 className="titleH3 mb-2">แบบตรวจประเมินการจัดการสารเคมี</h3>
              </div>

              <div className="Content my-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>

              <div className="mt-auto pt-4">
                <DownloadButton
                  href="/docs/guideline.pdf"
                  label="แบบตรวจประเมินการจัดการสารเคมี"
                />
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
}
