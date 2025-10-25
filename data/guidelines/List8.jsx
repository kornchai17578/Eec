import T from "@/components/T";
import Table from "@/components/table/table";

const header = [
  "หัวข้อ",
  "Covalent Derivatization",
  "Non-Covalent Derivatization",
];

const data = [
  {
    หัวข้อ: "ประเภทของพันธะ",
    "Covalent Derivatization": "พันธะโควาเลนต์ที่แข็งแรงและถาวร",
    "Non-Covalent Derivatization": "ปฏิสัมพันธ์ระหว่างโมเลกุลที่อ่อนกว่า",
  },
  {
    หัวข้อ: "การใช้พลังงาน",
    "Covalent Derivatization": "ต้องใช้พลังงานสูงในการสร้างและทำลายพันธะ",
    "Non-Covalent Derivatization": "ใช้พลังงานต่ำกว่า",
  },
  {
    หัวข้อ: "การใช้สารเคมี",
    "Covalent Derivatization": "ต้องใช้สารเคมีเพิ่มเติมเพื่อทำปฏิกิริยา",
    "Non-Covalent Derivatization": "ลดการใช้สารเคมี",
  },
  {
    หัวข้อ: "ผลกระทบต่อสิ่งแวดล้อม",
    "Covalent Derivatization": "อาจก่อให้เกิดของเสียจากปฏิกิริยาเคมี",
    "Non-Covalent Derivatization": "ลดของเสียและเป็นมิตรต่อสิ่งแวดล้อม",
  },
  {
    หัวข้อ: "ความง่ายในการควบคุม",
    "Covalent Derivatization": "ต้องใช้ตัวเร่งปฏิกิริยาหรือสภาวะเฉพาะ",
    "Non-Covalent Derivatization":
      "ควบคุมได้ง่ายผ่านการเปลี่ยนแปลงสภาวะแวดล้อม (เช่น pH)",
  },
];

const List8 = (
  <div className="Content mb-4">
    <p>
      <T />
      การใช้ อนุพันธ์ทางเคมี (derivatization) เช่น กลุ่มป้องกัน (blocking
      groups), การปกป้องและการกำจัดกลุ่มป้องกัน (protection/deprotection),
      และการดัดแปลงทางกายภาพหรือเคมีชั่วคราว ควรหลีกเลี่ยงหากไม่จำเป็น
      เนื่องจากกระบวนการเหล่านี้มักต้องใช้ สารเคมีเพิ่มเติม, ตัวทำละลาย,
      และพลังงาน ซึ่งอาจก่อให้เกิดของเสียและเพิ่มความซับซ้อนของปฏิกิริยา
    </p>
    <p>
      <T />
      การสร้างอนุพันธ์แบบโควาเลนต์ (Covalent Derivatization)
      เป็นเทคนิคที่แพร่หลายในการสังเคราะห์สารอินทรีย์และการวิเคราะห์ทางเคมี
      อย่างไรก็ตาม ในช่วงต้นทศวรรษ 1990 ได้มีการพัฒนาแนวคิดใหม่ ที่เรียกว่า
      การสร้างอนุพันธ์แบบไม่อาศัยพันธะโควาเลนต์ (Non-Covalent Derivatization)
      ซึ่งเป็นกระบวนการปรับเปลี่ยนคุณสมบัติของสารโดยอาศัย
      ปฏิสัมพันธ์ระหว่างโมเลกุล (Intermolecular Interactions)
      แทนการสร้างพันธะโควาเลนต์
    </p>
    <p>
      <T />
      โดยปกติแล้ว ในกระบวนการทางเคมี การเปลี่ยนแปลงคุณสมบัติของสารมักทำโดยการ
      สร้างพันธะโควาเลนต์ (Covalent Bonding)
      ซึ่งหมายถึงการเชื่อมต่ออะตอมเข้าด้วยกันอย่างถาวร เช่น การเพิ่ม หมู่ป้องกัน
      (Protecting Groups)
      หรือการปรับเปลี่ยนโครงสร้างของสารเพื่อนำไปใช้ในกระบวนการทางเคมีหรือวิเคราะห์สาร
      อย่างไรก็ตาม กระบวนการนี้มักต้องใช้ พลังงานสูง และ สารเคมีเพิ่มเติม
      เพื่อสร้างและกำจัดพันธะที่เกิดขึ้น
    </p>
    <p>
      <T />
      ในช่วงต้นทศวรรษ 1990 นักวิทยาศาสตร์ได้เสนอแนวคิดใหม่ที่เรียกว่า
      การสร้างอนุพันธ์แบบไม่อาศัยพันธะโควาเลนต์ (Non-Covalent Derivatization)
      ซึ่งเป็นวิธีที่เปลี่ยนแปลงคุณสมบัติของสารโดย
      อาศัยปฏิสัมพันธ์ระหว่างโมเลกุล (Intermolecular Interactions) เช่น
      แรงแวนเดอร์วาลส์ (Van der Waals Forces), พันธะไฮโดรเจน (Hydrogen Bonding)
      หรือ แรงผลักดูดทางไฟฟ้าสถิต (Electrostatic Interactions)
      แทนการสร้างพันธะเคมีถาวร
    </p>
    <ul>
      <li>ตัวอย่างการใช้ Non-Covalent Derivatization ในฟิล์มโพลารอยด์</li>
    </ul>
    <p>
      <T />
      หนึ่งในตัวอย่างแรก ๆ ที่แสดงถึงประสิทธิภาพของวิธีนี้ คือ
      ควบคุมการแพร่และความสามารถในการละลายของไฮโดรควิโนน (Hydroquinones)
      ในฟิล์มโพลารอยด์ (13–15)
    </p>
    <div className="aboutImageBox p-3 mb-3 max-w-[150px] mx-auto">
      <img
        src="/images/gudelines/List8-1.png"
        alt="List8-1"
        className="aboutImg"
      />
    </div>
    <p>
      ฟิล์มโพลารอยด์มีการใช้ ไฮโดรควิโนน (Hydroquinone) ซึ่งเป็นสารรีดิวซ์
      ทำปฏิกิริยากับ ซิลเวอร์โปรไมด์บนแผ่นฟิล์มที่ได้รับแสงแล้ว
      เปลี่ยนให้เป็นอนุภาคเงินโลหะ (Ag⁰) ซึ่งทำให้เกิดภาพบนฟิล์ม
      แต่ทว่าสารไฮโดรควิโนนสามารถเกิดออกซิเดชันได้ง่ายกลายเป็นเบนโซควิโนน
      (Benzoquinone, C₆H₄O₂) ในสภาวะที่มีออกซิเจนและสารออกซิไดซ์
      ดังนั้นเพื่อป้องกันการออกซิเดชันก่อนเวลาที่ต้องการ วิธีดั้งเดิมจะมีการใช้
      base-labile protecting groups เช่น Tert-butyldimethylsilyl (TBDMS) ether,
      Methoxycarbonyl (MOC) group, Phenyl carbonate protecting group
      ซึ่งหมู่ป้องกันเหล่านี้สามารถถูกกำจัดออกได้ในสภาวะเบส เช่น การใช้ NaOH
      หรือ KOH
    </p>
    <div className="aboutImageBox p-3 mb-3">
      <img
        src="/images/gudelines/List8-2.png"
        alt="List8-2"
        className="aboutImg"
      />
    </div>
    <div className="aboutImageBox p-3 mb-3">
      <img
        src="/images/gudelines/List8-3.png"
        alt="List8-3"
        className="aboutImg"
      />
    </div>
    <p>
      นักวิจัยของ Polaroid ได้คิดค้นวิธีใหม่โดยการ สร้างโคคริสตัล (Co-Crystal)
      ระหว่างไฮโดรควิโนนกับบิส-(N,N-ไดอัลคิล)เทเรฟทาลาไมด์
      (Bis-(N,N-Dialkyl)Terephthalamides)
    </p>
    <ul>
      <li>
        แทนที่จะใช้พันธะโควาเลนต์ที่ต้องใช้พลังงานสูงในการสร้างและทำลาย
        พวกเขาเลือกใช้ แรงยึดเหนี่ยวแบบไม่โควาเลนต์ ในโคคริสตัล
      </li>
      <li>
        เมื่อค่า pH สูงขึ้น โครงสร้างของโคคริสตัลจะถูกทำลาย
        โดยไม่ต้องอาศัยปฏิกิริยาเคมี ส่งผลให้ไฮโดรควิโนนถูกปล่อยออกมาตามต้องการ
      </li>
      <li>
        วิธีนี้ ลดการใช้สารเคมีและพลังงาน
        ทำให้กระบวนการเป็นมิตรต่อสิ่งแวดล้อมมากขึ้น
      </li>
    </ul>
    <div className="aboutImageBox p-3 mb-3 max-w-[350px] mx-auto">
      <img
        src="/images/gudelines/List8-4.png"
        alt="List8-4"
        className="aboutImg "
      />
    </div>
    <p>
      ข้อดีของ Non-Covalent Derivatization เมื่อเทียบกับ Covalent Derivatization
    </p>
    <Table header={header} data={data} />
  </div>
);

export default List8;
