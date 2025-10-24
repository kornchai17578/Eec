"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChemicalLeakChart() {
  const data = [
    { year: 2562, value: 5 },
    { year: 2563, value: 1 },
    { year: 2564, value: 5 },
    { year: 2565, value: 17 },
    { year: 2566, value: 13 },
    { year: 2567, value: 20 },
    { year: 2568, value: 9 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 h-full">
      <h3 className="text-[#1173A9] text-lg font-semibold mb-2">
        สารเคมีรั่วไหล
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          <CartesianGrid stroke="#E0E0E0" strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            stroke="#888888"
            tick={{ fontSize: 12 }}
            domain={["dataMin", "dataMax"]}
          />
          <YAxis
            stroke="#888888"
            tick={{ fontSize: 12 }}
            allowDecimals={false}
            domain={[0, 25]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3CA4DE" // ✅ เส้นกราฟสีตามรูป
            strokeWidth={3}
            dot={{ r: 4, fill: "#3CA4DE" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
