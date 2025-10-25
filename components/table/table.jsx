export default function Table({ header = [], data = [] }) {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-[#1173A9] text-white">
            {header.map((col, index) => (
              <th
                key={index}
                className={`py-3 px-4 border-white ${
                  index === 0
                    ? "rounded-tl-lg border-r"
                    : index === header.length - 1
                    ? "rounded-tr-lg"
                    : "border-r"
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-[#E2EEF5]" : "bg-white"}>
              {header.map((col, j) => (
                <td
                  key={j}
                  className={`py-3 px-4 text-[#1173A9] ${
                    j !== 0 ? "border-l border-[#1173A9]" : ""
                  } font-medium`}
                >
                  {row[col] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
