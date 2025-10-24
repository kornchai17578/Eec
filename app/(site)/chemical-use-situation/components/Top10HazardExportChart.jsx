"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";

export default function Top10HazardExportChart() {
  const data = [
    { name: "อีพิคคลอโรไฮดริน (epichlorohydrin)", value: 415.61 },
    { name: "เมทิลเมทาคริเลต (methyl methacrylate)", value: 433.92 },
    { name: "ไฮโดรเจนเปอร์ออกไซด์ (hydrogen peroxide)", value: 561.26 },
    { name: "โซเดียมไฮดรอกไซด์ (sodium hydroxide)", value: 578.46 },
    { name: "โพรพิลีนออกไซด์ (propylene oxide)", value: 606.86 },
    { name: "อะซีโตน (acetone)", value: 799.25 },
    { name: "ฟีนอล (phenol)", value: 832.0 },
    { name: "กรดซัลฟิวริก (sulfuric acid)", value: 849.6 },
    { name: "โทลูอีน (toluene)", value: 1051.07 },
    { name: "เบนซีน (benzene)", value: 2809.96 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 40, left: 20, bottom: 10 }}
        >
          <CartesianGrid stroke="#E0E0E0" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 3000]}
            ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
            stroke="#37352F"
            opacity={0.5}
            tick={{ fontSize: 14, fill: "#37352F", opacity: 0.5 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{
              fontSize: 11,
              fill: "#37352F",
              opacity: 0.5,
            }}
            width={280}
          />
          <Tooltip
            formatter={(value) => `${value.toLocaleString()} พันตัน`}
            labelStyle={{ color: "#1173A9" }}
          />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="square"
            iconSize={12}
            wrapperStyle={{
              paddingTop: "12px",
              fontSize: "14px",
              color: "#37352F",
            }}
          />
          <Bar
            name="ปริมาณ: พันตัน"
            dataKey="value"
            fill="#F4B183" // ✅ สีกราฟ
            stroke="none" // ✅ ไม่มีเส้นขอบแท่ง
            barSize={18}
            radius={[4, 4, 4, 4]} // ✅ ขอบโค้งมนทุกด้าน
          >
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v) => v.toLocaleString()}
              style={{
                fill: "#37352F",
                fontSize: 12,
                opacity: 0.5,
                fontWeight: 400,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
