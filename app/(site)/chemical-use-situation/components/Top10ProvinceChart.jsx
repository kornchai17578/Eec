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

export default function Top10ProvinceChart({ data, title }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="titleH3 mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid stroke="#E0E0E0" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, "dataMax + 500"]}
            tick={{ fontSize: 13, fill: "#37352F", opacity: 0.5 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11, fill: "#37352F", opacity: 0.5 }}
            width={260}
          />
          <Tooltip formatter={(value) => `${value.toLocaleString()} พันตัน`} />
          <Legend
            verticalAlign="bottom"
            align="left"
            iconType="square"
            iconSize={10}
            wrapperStyle={{
              paddingTop: "8px",
              fontSize: "13px",
              color: "#37352F",
            }}
          />
          <Bar
            name="ปริมาณ: พันตัน"
            dataKey="value"
            fill="#8FABDD" // ✅ สีฟ้าตามภาพ
            stroke="none"
            barSize={18}
            radius={[4, 4, 4, 4]} // ✅ มุมโค้งมน
          >
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v) => v.toLocaleString()}
              style={{
                fill: "#37352F",
                fontSize: 12,
                opacity: 0.5,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
