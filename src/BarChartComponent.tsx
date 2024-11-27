import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Data voor bedrijfswinsten
const data = [
  { year: "2019", profit: 4.2, expenses: 1.8 },
  { year: "2020", profit: 3.5, expenses: 2.0 },
  { year: "2021", profit: 5.0, expenses: 2.3 },
  { year: "2022", profit: 6.2, expenses: 2.5 },
  { year: "2023", profit: 7.1, expenses: 2.8 }
];

const ProfitBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          label={{ value: "Jaar", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{ value: "Miljoenen (€)", angle: -90, position: "insideLeft" }}
        />
        <Tooltip formatter={(value: number) => `€${value}M`} />
        <Legend />
        <Bar dataKey="profit" name="Winst" fill="#4caf50" />
        <Bar dataKey="expenses" name="Uitgaven" fill="#f44336" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProfitBarChart;
