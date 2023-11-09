import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const data = [
  { time: "0", income: 2000 },
  { time: "1", income: 1000 },
  { time: "2", income: 2000 },
  { time: "3", income: 1000 },
  { time: "4", income: 500 },
  { time: "5", income: 620 },
  { time: "6", income: 740 },
  { time: "7", income: 1200 },
  { time: "8", income: 3000 },
  { time: "9", income: 3200 },
  { time: "10", income: 3400 },
  { time: "11", income: 2500 },
  { time: "12", income: 2100 },
  { time: "13", income: 4000 },
  { time: "14", income: 3800 },
  { time: "15", income: 3400 },
  { time: "16", income: 4100 },
  { time: "17", income: 3700 },
  { time: "18", income: 3400 },
  { time: "19", income: 3200 },
  { time: "20", income: 3000 },
  { time: "21", income: 2100 },
  { time: "22", income: 1200 },
  { time: "23", income: 1000 },
];

const IncomeDayChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default IncomeDayChart;