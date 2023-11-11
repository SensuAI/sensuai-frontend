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
    },
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
    },
    {
      "x": 35,
      "y": 850
    },
    {
      "x": 30,
      "y": 700
    },
    {
      "x": 55,
      "y": 1100
    },
    {
      "x": 28,
      "y": 590
    },
    {
      "x": 15,
      "y": 305
    },
    {
      "x": 52,
      "y": 1020
    },
    {
      "x": 48,
      "y": 960
    },
    {
      "x": 25,
      "y": 550
    },
    {
      "x": 42,
      "y": 840
    },
    {
      "x": 33,
      "y": 660
    },
    {
      "x": 22,
      "y": 440
    },
    {
      "x": 38,
      "y": 760
    },
    {
      "x": 18,
      "y": 360
    },
    {
      "x": 57,
      "y": 1140
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
    },
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
    },
    {
      "x": 35,
      "y": 805
    },
    {
      "x": 45,
      "y": 1080
    },
    {
      "x": 60,
      "y": 1380
    },
    {
      "x": 33,
      "y": 715
    },
    {
      "x": 27,
      "y": 648
    },
    {
      "x": 42,
      "y": 1008
    },
    {
      "x": 48,
      "y": 1152
    },
    {
      "x": 55,
      "y": 1265
    },
    {
      "x": 37,
      "y": 777
    },
    {
      "x": 22,
      "y": 528
    },
    {
      "x": 52,
      "y": 1248
    },
    {
      "x": 31,
      "y": 713
    },
    {
      "x": 23,
      "y": 552
    },
    {
      "x": 39,
      "y": 936
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
    },
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
    },
    {
      "x": 30,
      "y": 700
    },
    {
      "x": 15,
      "y": 450
    },
    {
      "x": 35,
      "y": 920
    },
    {
      "x": 45,
      "y": 1180
    },
    {
      "x": 33,
      "y": 850
    },
    {
      "x": 28,
      "y": 720
    },
    {
      "x": 22,
      "y": 530
    },
    {
      "x": 48,
      "y": 1000
    },
    {
      "x": 60,
      "y": 1500
    },
    {
      "x": 25,
      "y": 600
    },
    {
      "x": 38,
      "y": 980
    },
    {
      "x": 42,
      "y": 1100
    },
    {
      "x": 55,
      "y": 1400
    },
    {
      "x": 27,
      "y": 670
    },
    {
      "x": 29,
      "y": 750
    },
    {
      "x": 23,
      "y": 550
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
        <Scatter name="Regular" data={data01} fill="#429ea6" />
        <Scatter name="Premium" data={data02} fill="#c5283d" />
        <Scatter name="Diesel" data={data03} fill="#000000" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterTypeChart;
