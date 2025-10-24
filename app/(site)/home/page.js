import Link from "next/link";
import styles from "./Home.module.css";
import { Row, Col } from "antd";
import dynamic from "next/dynamic";
const Icons = dynamic(() => import("@/components/Icons"));

export default function Home() {
  return (
    <div className={styles.hero}>
      <Row align="stretch">
        <Col span={24} md={18}>
          <div className={styles.heroBg}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.heroTitle}>
                โครงการศึกษาและพัฒนาการจัดการความปลอดภัยในกระบวนการทางเคมีและการใช้เคมีภัณฑ์ในภาคอุตสาหกรรม
                อย่างยั่งยืน (Sustainable Chemistry)
                เพื่อส่งเสริมการปกป้องสภาพภูมิอากาศ ในเขตพื้นที่ EEC
              </h1>
            </div>
          </div>
        </Col>

        <Col span={24} md={6}>
          <div className={styles.sideCol}>
            <Link
              href="/chemical-use-situation"
              className={`${styles.panel} ${styles.panelBrand}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">
                  สถานการณ์
                  <br />
                  การใช้สารเคมี
                </div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" />
                </div>
              </div>
            </Link>

            <Link
              href="/sustainable-chemistry-guidelines"
              className={`${styles.panel} ${styles.panelLight}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">แนวทางเคมียั่งยืน</div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" color="#1173A9" />
                </div>
              </div>
            </Link>

            <Link
              href="/safety-inspection-guide"
              className={`${styles.panel} ${styles.panelBrand}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">
                  คู่มือการตรวจสอบและ มาตรการความปลอดภัย
                </div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" />
                </div>
              </div>
            </Link>

            <Link
              href="/related-technologies"
              className={`${styles.panel} ${styles.panelLight}`}
            >
              <div className="flex items-center w-full">
                <div className="w-[80%]">เทคโนโลยีที่เกี่ยวข้อง</div>
                <div className={`ms-auto ${styles.icon}`}>
                  <Icons name="arrow" color="#1173A9" />
                </div>
              </div>
            </Link>
          </div>
        </Col>
      </Row>

      {/* BACKGROUND */}
      <Row
        gutter={[24, 32]}
        className={`${styles.contentRow} bg-[#F6F7F9]`}
        justify="center"
        align="middle"
      >
        <Col span={20} md={20} lg={10}>
          <div className="contentHeader">
            <img
              src="/icons/hourglass.svg"
              alt="hourglass"
              className="contentIcon"
            />
            <h2 className="TitleContent">ความเป็นมา</h2>
          </div>

          <div className="Content">
            <p>
              โรงงานอุตสาหกรรมในพื้นที่เขตเศรษฐกิจพิเศษภาคตะวันออก (Eastern
              Economic Corridor: EEC) มีจํานวน 10,246 โรงงาน
              มูลค่าเงินลงทุนรวมมากกว่า 3 ล้านล้านบาท และมีคนงานรวมมากกว่า
              650,000 คน ซึ่งเป็นประเภทอุตสาหกรรมที่มี การใช้สารเคมีอันตราย
              ประมาณ 2,400 โรงงาน
            </p>
            <p>
              โดยในช่วง มกราคม ถึง พฤศจิกายน 2566
              มีการอนุญาตประกอบกิจการโรงงานใหม่ในพื้นที่เขตพัฒนาพิเศษภาคตะวันออก
              รวม 391 โรงงาน อยู่ใน
            </p>
            <p>
              จังหวัดฉะเชิงเทรา จํานวน <span className="num">67</span>{" "} โรงงาน <br/> 
              จังหวัดชลบุรี จํานวน{" "}<span className="num">199</span> โรงงาน <br/>
              และจังหวัดระยอง จํานวน <span className="num"> 125 </span> โรงงาน <br/>
            </p>
            <p>
              มูลค่าเงินลงทุนรวม <span className="num">55,777</span>{" "}
              ล้านบาท จํานวนคนงานรวม <span className="num">17,363</span>{" "}
              คน
            </p>
            <p>
              การนําแนวคิดการจัดการเคมียั่งยืน (Sustainable Chemistry)
              มาศึกษาความเหมาะสมและความเป็นไปได้ในการส่งเสริมเขตพัฒนาพิเศษภาคตะวันออก
              ที่คํานึงถึงความปลอดภัยในการใช้สารเคมีเป็นอันดับแรก
            </p>
            <ul>
              <li>
                การใช้สารเคมีจะต้องไม่เป็นพิษหรือก่อให้เกิดอันตรายต่อผู้ที่เกี่ยวข้องในกระบวนการผลิตน้อยที่สุด
              </li>
              <li>
                รวมทั้งคํานึงถึงการป้องกันหรือลดการปล่อยสารเคมีที่เป็นพิษออกสู่สิ่งแวดล้อม
                ซึ่งในกระบวนการผลิตหรือกิจกรรมต่าง ๆ
                ในกระบวนการทางอุตสาหกรรมล้วนนําสารเคมีมาใช้ทั้งสิ้น
              </li>
            </ul>
          </div>
        </Col>

        <Col span={20} md={20} lg={10}>
          <div className="aboutImageBox">
            <img
              src="/images/about.png"
              alt="about"
              className="aboutImg"
            />
          </div>
        </Col>
      </Row>

      {/* OBJECTIVES */}
      <Row
        gutter={[24, 32]}
        className={`${styles.contentRow}`}
        justify="center"
        align="middle"
      >
        <Col
          span={20}
          md={20}
          className="rounded md:rounded-xl bg-[#F6F7F9] p-4"
        >
          <div className="contentHeader">
            <img
              src="/icons/marker.svg"
              alt="marker"
              className="contentIcon"
            />
            <h2 className="TitleContent">วัตถุประสงค์</h2>
          </div>

          <div className="Content">
            <ol className="numList">
              <li>
                เพื่อส่งเสริมการขับเคลื่อนการลงทุนอุตสาหกรรมที่เป็นมิตรต่อสิ่งแวดล้อมด้วยการสร้างความตระหนักในเรื่องพัฒนาการจัดการความปลอดภัยสารเคมีในกระบวนการทางเคมีและการใช้เคมีภัณฑ์อย่างยั่งยืน
                (Sustainable Chemistry)
                ในภาคอุตสาหกรรมในเขตพื้นที่เศรษฐกิจพิเศษภาคตะวันออก
              </li>
              <li>
                เพื่อส่งเสริมการบรรลุเป้าหมายความเป็นกลางทางคาร์บอน (Carbon
                Neutrality)
                รวมถึงการบรรลุเป้าหมายการปล่อยก๊าซเรือนกระจกสุทธิเป็นศูนย์ (Net
                Zero Greenhouse Gas Emission)
                ในเขตพื้นที่เศรษฐกิจพิเศษภาคตะวันออก
              </li>
              <li>
                เพื่อส่งเสริมมาตรการความปลอดภัยในพื้นที่และสร้างการรับรู้ในเลือกการใช้สารเคมีที่มีอันตรายน้อยกว่า
                เพื่อสร้างความเชื่อมั่นให้กับนักลงทุน
                รวมถึงเพิ่มมูลค่าในห่วงโซ่อุปทาน (Valued supply chain)
              </li>
              <li>
                เพื่อส่งเสริมศักยภาพผู้ประกอบกิจการโรงงาน ผู้ปฏิบัติงานในโรงงาน
                หน่วยงานเครือข่ายด้านกํากับดูแลโรงงาน และหน่วยงานที่เกี่ยวข้อง
                ให้มีความรู้ ความเข้าใจ
                และมีความพร้อมในการปฏิบัติงานที่เกี่ยวข้องกับสารเคมีทั้งในสภาวะปกติและเมื่อเกิดเหตุฉุกเฉิน
              </li>
            </ol>
          </div>
        </Col>
      </Row>
    </div>
  );
}
