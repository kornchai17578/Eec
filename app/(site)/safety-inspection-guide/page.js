// app/(site)/safety-inspection-guide/page.js
import DownloadButton from "@/components/buttons/DownloadButton";
import Titile from "@/components/Titile";
import { Row, Col } from "antd";
import Icons from "@/components/Icons";

export default function SafetyInspectionGuide() {
  return (
    <div className="gradient-bg">
      <div className="container mx-auto px-6 py-4">
        <Titile title="คู่มือการตรวจสอบความปลอดภัยสารเคมีและมาตรการความปลอดภัย " />

        <Row gutter={[12, 12]} align="stretch">
          <Col span={24} md={12}>
            <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4 h-full flex flex-col">
              <div className="contentHeader">
                <Icons
                  name="file"
                  color="#1173A9"
                  size="24px"
                  className="contentIcon"
                />
                <h3 className="titleH3 mb-2">
                  คู่มือการตรวจสอบความปลอดภัยสารเคมี
                </h3>
              </div>

              <div className="Content my-auto">
                คู่มือการตรวจสอบความปลอดภัยสารเคมี
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
                <Icons
                  name="file"
                  color="#1173A9"
                  size="24px"
                  className="contentIcon"
                />
                <h3 className="titleH3 mb-2">แบบตรวจประเมินการจัดการสารเคมี</h3>
              </div>

              <div className="Content my-auto">
                แบบตรวจประเมินการจัดการสารเคมี
              </div>

              <div className="mt-auto pt-4">
                <DownloadButton
                  href="/docs/แบบตรวจประเมินความปลอดภัยในการจัดการสารเคมี.pdf"
                  label="แบบตรวจประเมินการจัดการสารเคมี"
                />
              </div>
            </section>
          </Col>
          <Col span={24} md={12}>
            <section className="rounded md:rounded-xl bg-[#F6F7F9] p-4 mb-4 h-full flex flex-col">
              <div className="contentHeader">
                <Icons
                  name="file"
                  color="#1173A9"
                  size="24px"
                  className="contentIcon"
                />
                <h3 className="titleH3 mb-2">
                  แบบตรวจประเมินเคมียั่งยืน (Sustainable Chemistry)
                </h3>
              </div>

              <div className="Content my-auto">แบบตรวจประเมินเคมียั่งยืน</div>

              <div className="mt-auto pt-4">
                <DownloadButton
                  href="/docs/แบบตรวจประเมิน Sustainable Chemistry.pdf"
                  label="แบบตรวจประเมินเคมียั่งยืน"
                />
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
}
