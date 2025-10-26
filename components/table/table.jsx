export default function Table({ header = [], subHeader = null, data = [] }) {
  const hasSubHeader = Array.isArray(subHeader) && subHeader.length > 0;

  return (
    <div className="overflow-x-auto rounded-md mb-4">
      <table className="w-full border-collapse text-center">
        <thead>
          {hasSubHeader ? (
            <>
              <tr className="bg-[#1173A9] text-white">
                {header.map((h, i) => (
                  <th
                    key={i}
                    colSpan={h.colspan || 1}
                    className={`py-3 px-4 border-white ${
                      i === 0
                        ? "rounded-tl-lg border-r"
                        : i === header.length - 1
                        ? "rounded-tr-lg"
                        : "border-r"
                    }`}
                  >
                    {h.label}
                  </th>
                ))}
              </tr>

              <tr className="bg-[#1173A9] text-white">
                <th
                  className={`py-3 px-4 border-r border-white ${
                    header[0]?.label === "" ? "text-[#1173A9]" : ""
                  }`}
                >
                  หัวข้อ
                </th>
                {subHeader.map((col, i) => (
                  <th
                    key={i}
                    className={`py-3 px-4 ${
                      i === subHeader.length - 1
                        ? "border-t border-white"
                        : "border-r border-t border-white"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </>
          ) : (
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
          )}
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-[#E2EEF5]" : "bg-white"}>
              {(hasSubHeader ? ["หัวข้อ", ...subHeader] : header).map(
                (col, j) => (
                  <td
                    key={j}
                    className={`py-3 px-4 text-[#1173A9] ${
                      j !== 0 ? "border-l border-[#1173A9]" : ""
                    } font-medium`}
                  >
                    {row[col] ?? "-"}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
