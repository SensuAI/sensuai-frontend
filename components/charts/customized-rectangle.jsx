import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Customized,
  Rectangle,
} from 'recharts';

// Gráfica para mostrar el monto de ganancias mínimo y máximo por mes
const data = [
  {
    name: 'Jul 2023',
    minProfit: 30000,
    maxProfit: 70000,
  },
  {
    name: 'Ago 2023',
    minProfit: 35000,
    maxProfit: 75000,
  },
  {
    name: 'Sep 2023',
    minProfit: 32000,
    maxProfit: 68000,
  },
  {
    name: 'Oct 2023',
    minProfit: 38000,
    maxProfit: 80000,
  },
  {
    name: 'Nov 2023',
    minProfit: 40000,
    maxProfit: 85000,
  },
  {
    name: 'Dic 2023',
    minProfit: 37000,
    maxProfit: 78000,
  },
];

const CustomizedRectangle = (props) => {
  const { formattedGraphicalItems } = props;
  const firstSeries = formattedGraphicalItems[0];
  const secondSeries = formattedGraphicalItems[1];

  return firstSeries?.props?.points.map((firstSeriesPoint, index) => {
    const secondSeriesPoint = secondSeries?.props?.points[index];
    const yDifference = firstSeriesPoint.y - secondSeriesPoint.y;

    return (
      <Rectangle
        key={firstSeriesPoint.payload.name}
        width={10}
        height={yDifference}
        x={secondSeriesPoint.x - 5}
        y={secondSeriesPoint.y}
        fill={yDifference > 0 ? 'green' : yDifference < 0 ? 'red' : 'none'}
      />
    );
  });
};

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="minProfit" stroke="#8884d8" name="Monto Mínimo de Ganancias" />
        <Line type="monotone" dataKey="maxProfit" stroke="#82ca9d" name="Monto Máximo de Ganancias" />
        <Customized component={CustomizedRectangle} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Example;
