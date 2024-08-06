import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import data from '../../data.json';
import './index.css'

const MyLineChart = () => {
  const chartData = data.map((item) => ({
    name: moment(item.time).format('YYYY-MM-DD'),
    value: item.value
  }));

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" tickCount={10} tick={{ fontSize: 12, fontWeight: 'bold' }} />
          <YAxis type="number" domain={['dataMin', 'dataMax']} tick={{ fontSize: 12, fontWeight: 'bold' }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend
            wrapperStyle={{
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;