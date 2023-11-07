import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const data = [
  { month: "Enero", Regular: 21.27, Premium: 21.96, Diesel: 23.23 },
  { month: "Febrero", Regular: 22.01, Premium: 22.56, Diesel: 24.02 },
  { month: "Marzo", Regular: 21.60, Premium: 21.86, Diesel: 22.12 },
  { month: "Abril", Regular: 21.70, Premium: 22.20, Diesel: 22.80 },
  { month: "Mayo", Regular: 21.92, Premium: 21.99, Diesel: 23.12 },
  { month: "Junio", Regular: 21.67, Premium: 21.87, Diesel: 23.01 },
  { month: "Julio", Regular: 21.69, Premium: 21.99, Diesel: 23.05 },
  { month: "Agosto", Regular: 21.84, Premium: 22.09, Diesel: 23.45 },
  { month: "Septiembre", Regular: 21.87, Premium: 22.11, Diesel: 23.24},
  { month: "Octubre", Regular: 21.93, Premium: 22.15, Diesel: 23.31 },
  { month: "Noviembre", Regular: 22.01, Premium: 22.25, Diesel: 23.40 }
];

const LineGasChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Regular" stroke="#008f39" />
        <Line type="monotone" dataKey="Premium" stroke="#FF0000" />
        <Line type="monotone" dataKey="Diesel" stroke="#FFFF00" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGasChart;
