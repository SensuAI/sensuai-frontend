import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format, parseISO, endOfWeek, eachDayOfInterval } from "date-fns";

const TransactionsBarChart = ({data}) => {
// Transformar las fechas a objetos Date
const formattedData = data.map((entry) => {
    const dateParts = entry.last_visited.split("/");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    return {
      time: parseInt(entry.time),
      last_visited: parseISO(formattedDate),
    };
  });
  
  // Encontrar la fecha de inicio y fin de los datos
  const startDate = formattedData.reduce((min, entry) =>
    entry.last_visited < min ? entry.last_visited : min, formattedData[0].last_visited);
  const endDate = formattedData.reduce((max, entry) =>
    entry.last_visited > max ? entry.last_visited : max, formattedData[0].last_visited);
  
  // Generar las fechas de inicio de semana
  const weekStartDates = eachDayOfInterval({ start: startDate, end: endDate }).filter((date) =>
    date.getDay() === 0
  );
  
  // Agrupar los datos por semana y calcular el promedio
  const groupedData = weekStartDates.map((weekStartDate, index) => {
    const weekEndDate = endOfWeek(weekStartDate);
    const weekData = formattedData.filter((entry) => {
      return (
        entry.last_visited >= weekStartDate && entry.last_visited <= weekEndDate
      );
    });
  
    const totalTransactions = weekData.length;
  
    return {
      week: format(weekStartDate, "dd/MM/yyyy"),
      totalTransactions: totalTransactions,
    };
  });
  
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart width={730} height={250} data={groupedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalTransactions" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionsBarChart;
