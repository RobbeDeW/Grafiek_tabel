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
import { financialData } from "./data";

const ProfitBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={financialData}
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
