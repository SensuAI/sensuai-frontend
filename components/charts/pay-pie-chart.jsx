import React from "react";
import {Cell, Label, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

// Gráfica de pastel para mostrar el porcentaje de pagos por tipo
const COLORS = ["#004e89", "#429ea6", "#FFBB28"];
const PaymentPieChart = (props) => {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart width={730} height={350}>
          <Pie data={props.data01} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {props.data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    );
  };

export default PaymentPieChart;