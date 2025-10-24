export default function AccidentTable() {
  const data = [
    { year: "2562", fire: 68, explode: 4, leak: 5, machine: 6, other: 6 },
    { year: "2563", fire: 41, explode: 2, leak: 1, machine: 3, other: 6 },
    { year: "2564", fire: 92, explode: 3, leak: 5, machine: 4, other: 8 },
    { year: "2565", fire: 81, explode: 1, leak: 17, machine: 6, other: 2 },
    { year: "2566", fire: 109, explode: 4, leak: 13, machine: 11, other: 3 },
    { year: "2567", fire: 108, explode: 5, leak: 20, machine: 8, other: 4 },
    {
      year: "ม.ค.-พ.ค. 2568",
      fire: 57,
      explode: 0,
      leak: 9,
      machine: 7,
      other: 3,
    },
  ];

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-[#1173A9] text-white">
            <th className="py-3 px-4 rounded-tl-lg border-r border-white">
              ปี พ.ศ.
            </th>
            <th className="py-3 px-4 border-r border-white">อัคคีภัย</th>
            <th className="py-3 px-4 border-r border-white">ระเบิด</th>
            <th className="py-3 px-4 border-r border-white text-[#004972] bg-[#79BBDF] font-semibold">
              สารเคมีหกรั่วไหล
            </th>
            <th className="py-3 px-4 border-r border-white">
              อุบัติเหตุจากเครื่องจักร
            </th>
            <th className="py-3 px-4 rounded-tr-lg">อื่นๆ</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-[#E2EEF5]" : "bg-white"}>
              <td className="py-3 px-4 text-[#1173A9] font-medium">
                {item.year}
              </td>
              <td className="py-3 px-4 text-[#1173A9] border-l border-[#1173A9]">
                {item.fire}
              </td>
              <td className="py-3 px-4 text-[#1173A9] border-l border-[#1173A9]">
                {item.explode}
              </td>
              <td
                className={`py-3 px-4 text-white border-l border-[#1173A9] ${
                  i % 2 === 0 ? "bg-[#2673A0]" : "bg-[#4091BF]"
                }`}
              >
                {item.leak}
              </td>
              <td className="py-3 px-4 text-[#1173A9] border-l border-[#1173A9]">
                {item.machine}
              </td>
              <td className="py-3 px-4 text-[#1173A9] border-l border-[#1173A9]">
                {item.other}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
