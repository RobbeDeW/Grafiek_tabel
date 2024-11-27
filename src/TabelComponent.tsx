import React from "react";

const TabelComponent: React.FC = () => {
  // Definieer de kolommen en data binnen het component
  const columns = [
    { key: "year", label: "Jaar" },
    { key: "profit", label: "Winst (€Miljoen)" },
    { key: "expenses", label: "Uitgaven (€Miljoen)" }
  ];

  const data = [
    { year: "2019", profit: 4.2, expenses: 1.8 },
    { year: "2020", profit: 3.5, expenses: 2.0 },
    { year: "2021", profit: 5.0, expenses: 2.3 },
    { year: "2022", profit: 6.2, expenses: 2.5 },
    { year: "2023", profit: 7.1, expenses: 2.8 }
  ];

  return (
    <div style={{ overflowX: "auto", padding: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                  textAlign: "left"
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px"
                  }}
                >
                  {row[column.key as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelComponent;
