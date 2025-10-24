"use client";
import { useEffect, useState } from "react";
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

export default function Top10HazardChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { name: "อะซีโตน (acetone)", value: 278.69 },
    { name: "เมทิลไอโซบิวทิลคีโตน (methyl isobutyl ketone)", value: 365.1 },
    { name: "อะคริโลไนไตรล์ (acrylonitrile)", value: 373.24 },
    { name: "กรดอะซิติก (acetic acid)", value: 453.57 },
    { name: "โพแทสเซียมไฮดรอกไซด์ (potassium hydroxide)", value: 498.87 },
    { name: "เอทิลีนไดคลอไรด์ (ethylene dichloride)", value: 758.81 },
    { name: "เมทานอล (methanol)", value: 1468.96 },
    { name: "กรดซัลฟิวริก (sulfuric acid)", value: 2109.14 },
    { name: "เมทิลอะซีเตต (methyl acetate)", value: 2837.41 },
    { name: "กรดไนตริก (nitric acid)", value: 3132.92 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <ResponsiveContainer width="100%" height={isMobile ? 600 : 420}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 10,
            right: isMobile ? 10 : 40,
            left: isMobile ? 10 : 20,
            bottom: 10,
          }}
        >
          <CartesianGrid stroke="#E0E0E0" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 3500]}
            ticks={[0, 500, 1000, 1500, 2000, 2500, 3000, 3500]}
            tick={{
              fontSize: isMobile ? 10 : 14,
              fill: "#37352F",
              opacity: 0.5,
            }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{
              fontSize: isMobile ? 9 : 11,
              fill: "#37352F",
              opacity: 0.5,
            }}
            width={isMobile ? 200 : 280}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="square"
            iconSize={10}
            wrapperStyle={{
              paddingTop: "8px",
              fontSize: isMobile ? "12px" : "14px",
              color: "#37352F",
            }}
          />
          <Bar
            name="ปริมาณ: พันตัน"
            dataKey="value"
            fill="#1A5162"
            stroke="none"
            barSize={isMobile ? 14 : 18}
            radius={[0, 4, 4, 0]}
          >
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v) => v.toLocaleString()}
              style={{
                fill: "#37352F",
                fontSize: isMobile ? 10 : 12,
                opacity: 0.5,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
