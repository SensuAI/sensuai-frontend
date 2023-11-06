import React from "react";
import {
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const data = [
    {
      "Tipo": "Camion",
      "Cantidad": 107,
      "fullMark": 150
    },
    {
      "Tipo": "Moto",
      "Cantidad": 121,
      "fullMark": 150
    },
    {
      "Tipo": "Trailer",
      "Cantidad": 90,
      "fullMark": 150
    },
    {
      "Tipo": "Auto",
      "Cantidad": 136,
      "fullMark": 150
    },
    {
        "Tipo": "Camioneta",
        "Cantidad": 118,
        "fullMark": 150
    }
  ]

const CarsTypeChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="Tipo" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="N# de vehiculos"
          dataKey="Cantidad"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CarsTypeChart;
