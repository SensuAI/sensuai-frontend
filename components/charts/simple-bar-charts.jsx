'use client';

import { Tooltip } from "@radix-ui/themes";
import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
    {name: "Lalo", age: 21, weight: 70},
    {name: "Max", age: 30, weight: 90},
    {name: "Gerardo", age: 11, weight: 50},
    {name: "Victor", age: 24, weight: 85},
    {name: "Jose", age: 38, weight: 100}];
const SimpleBarCharts = () => {
    return(
     <ResponsiveContainer width="100%" aspect={2}>
        <BarChart 
            data={data}
            width={500}
            height={300}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}>
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="weight" fill="#8884d8" />
        <Bar dataKey="age" fill="#82ca9d" />
        </BarChart>


    </ResponsiveContainer>
    )
    };

export default SimpleBarCharts;