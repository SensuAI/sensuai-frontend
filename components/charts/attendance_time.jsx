import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";

const data = [
    { month: "Enero", time: 2 },
    { month: "Febrero", time: 3 },
    { month: "Marzo", time: 2.6 },
    { month: "Abril", time: 4.6 },
    { month: "Mayo", time: 5 },
    { month: "Junio", time: 2.8 },
    { month: "Julio", time: 3.1 },
    { month: "Agosto", time: 3.4 },
    { month: "Septiembre", time: 3.8 },
    { month: "Octubre", time: 4.1 },
    { month: "Noviembre", time: 3.2 },
    { month: "Diciembre", time: 2.9 },
];

const AttendanceBarChart = ({data}) => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="time" fill="#3f7081" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default AttendanceBarChart;