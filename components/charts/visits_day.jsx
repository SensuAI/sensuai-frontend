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
  { time: "0", visits: 1 },
  { time: "1", visits: 1 },
  { time: "2", visits: 2 },
  { time: "3", visits: 1 },
  { time: "4", visits: 1 },
  { time: "5", visits: 1 },
  { time: "6", visits: 4 },
  { time: "7", visits: 5 },
  { time: "8", visits: 10 },
  { time: "9", visits: 11 },
  { time: "10", visits: 8 },
  { time: "11", visits: 15 },
  { time: "12", visits: 20 },
  { time: "13", visits: 30 },
  { time: "14", visits: 50 },
  { time: "15", visits: 35 },
  { time: "16", visits: 40 },
  { time: "17", visits: 20 },
  { time: "18", visits: 12 },
  { time: "19", visits: 11 },
  { time: "20", visits: 14 },
  { time: "21", visits: 8 },
  { time: "22", visits: 5 },
  { time: "23", visits: 3 },
];

const VisitsDayChart = () => {
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
        <Line type="monotone" dataKey="visits" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VisitsDayChart;
