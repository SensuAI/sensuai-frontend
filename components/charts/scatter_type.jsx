import React from "react";
import { CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

const data01 = [
    {
      "x": 50,
      "y": 1000
    },
    {
      "x": 45,
      "y": 904
    },
    {
      "x": 20,
      "y": 420
    },
    {
      "x": 24,
      "y": 504
    },
    {
      "x": 40,
      "y": 920
    },
    {
      "x": 10,
      "y": 210
    }
  ];
  const data02 = [
    {
      "x": 30,
      "y": 690
    },
    {
      "x": 20,
      "y": 480
    },
    {
      "x": 40,
      "y": 960
    },
    {
      "x": 50,
      "y": 1175
    },
    {
      "x": 80,
      "y": 1840
    },
    {
      "x": 26,
      "y": 624
    }
  ];

  const data03 = [
    {
      "x": 26,
      "y": 650
    },
    {
      "x": 20,
      "y": 500
    },
    {
      "x": 40,
      "y": 1040
    },
    {
      "x": 51,
      "y": 1326
    }
  ];
const ScatterTypeChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <ScatterChart
        width={730}
        height={250}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" name="litros" unit="lt" />
        <YAxis dataKey="y" type="number" name="precio" unit="mxn" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="Regular" data={data01} fill="#8884d8" />
        <Scatter name="Premium" data={data02} fill="#82ca9d" />
        <Scatter name="Diesel" data={data03} fill="#ff0000" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterTypeChart;
