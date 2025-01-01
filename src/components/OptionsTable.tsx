import React from "react";

const OptionsTable: React.FC = () => {
  const positiveValues = [
    { value: "+20%", shade: "#18e582" },
    { value: "+10%", shade: "#28f087" },
    { value: "+5%", shade: "#3bfa8f" },
    { value: "+3%", shade: "#50ffa4" },
    { value: "+1%", shade: "#71ffb8" },
    { value: "+0.5%", shade: "#91ffd2" },
    { value: "+0.25%", shade: "#c5ffe6" },
  ];

  const negativeValues = [
    { value: "-0.25%", shade: "#ff8080" },
    { value: "-0.5%", shade: "#ff6666" },
    { value: "-1%", shade: "#ff4d4d" },
    { value: "-3%", shade: "#ff3333" },
    { value: "-5%", shade: "#ff1a1a" },
    { value: "-10%", shade: "#ff0000" },
    { value: "-20%", shade: "#ce0404" },
  ];

  const timeLabels = [
    { time: "10m", shade: "#80e4ff" },
    { time: "30m", shade: "#67d6f9" },
    { time: "1h", shade: "#4fc9f3" },
    { time: "2h", shade: "#39bdeb" },
    { time: "4h", shade: "#28b2e5" },
    { time: "6h", shade: "#1aa6df" },
    { time: "12h", shade: "#0f97d9" },
    { time: "1d", shade: "#087cc2" },
    { time: "3d", shade: "#056fb2" },
    { time: "7d", shade: "#046aac" },
  ];

  return (
    <div className="overflow-auto w-full h-full p-2">
      <table className="table-fixed border-collapse border border-gray-700 text-white w-full h-full">
        <tbody>
          {positiveValues.map((row, index) => (
            <tr key={index}>
              <td
                className="border border-gray-700 text-black text-center"
                style={{ backgroundColor: row.shade, width: "10%" }}
              >
                <span className="value-text">{row.value}</span>
              </td>
              {Array(10)
                .fill(null)
                .map((_, colIndex) => (
                  <td key={colIndex} className="border border-gray-700"></td>
                ))}
            </tr>
          ))}
          <tr>
            <td
              className="border border-gray-700 bg-black text-white text-center"
              style={{ width: "10%" }}
            >
              Ethereum
            </td>
            {timeLabels.map((label, index) => (
              <td
                key={index}
                className="border border-gray-700 text-center"
                style={{ backgroundColor: label.shade }}
              >
                <span style={{ color: "#000" }}>{label.time}</span>
              </td>
            ))}
          </tr>
          {negativeValues.map((row, index) => (
            <tr key={index}>
              <td
                className="border border-gray-700 text-black text-center"
                style={{ backgroundColor: row.shade, width: "10%" }}
              >
                <span className="value-text">{row.value}</span>
              </td>
              {Array(10)
                .fill(null)
                .map((_, colIndex) => (
                  <td key={colIndex} className="border border-gray-700"></td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionsTable;

