import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";

// Gráfica de barras para mostrar las visitas por mes
const data = [
    { month: "Enero", visits: 1200 },
    { month: "Febrero", visits: 1500 },
    { month: "Marzo", visits: 1100 },
    { month: "Abril", visits: 1800 },
    { month: "Mayo", visits: 1300 },
    { month: "Junio", visits: 1600 },
    { month: "Julio", visits: 1400 },
    { month: "Agosto", visits: 1700 },
    { month: "Septiembre", visits: 1900 },
    { month: "Octubre", visits: 2100 },
    { month: "Noviembre", visits: 2000 },
    { month: "Diciembre", visits: 2200 },
];

const VisitsBarChart = (props) => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={props.inData ?? data}>
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visits" fill="#004e64" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default VisitsBarChart;
