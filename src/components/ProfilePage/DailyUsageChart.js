import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ChartWrapper = styled.div`
  background: #4b00ff;
  border-radius: 20px; /* Rende i bordi più tondeggianti */
  padding: 1rem 2rem;
  width: calc(100% - 4rem);
  max-width: 900px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem; /* Ridotto la dimensione del font */
  align-self: flex-start; /* Allinea il titolo a sinistra */
`;

const data = [
  { name: '6 am', usage: 30 },
  { name: '7 am', usage: 50 },
  { name: '8 am', usage: 60 },
  { name: '9 am', usage: 40 },
  { name: '10 am', usage: 35 },
  { name: '11 am', usage: 50 },
  { name: '12 pm', usage: 70 },
  { name: '1 pm', usage: 60 },
  { name: '2 pm', usage: 30 },
  { name: '3 pm', usage: 40 },
  { name: '4 pm', usage: 50 },
  { name: '5 pm', usage: 65 },
  { name: '6 pm', usage: 80 },
  { name: '7 pm', usage: 70 },
  { name: '8 pm', usage: 60 },
  { name: '9 pm', usage: 50 },
  { name: '10 pm', usage: 40 },
  { name: '11 pm', usage: 30 },
  { name: '12 am', usage: 20 },
  { name: '1 am', usage: 10 },
];

const DailyUsageChart = () => (
  <ChartWrapper>
    <Title>DAILY WAF USAGE</Title>
    <ResponsiveContainer width="100%" height={120}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" tick={{ fill: 'white' }} />
        <Tooltip />
        <Bar dataKey="usage" fill="#fff" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </ChartWrapper>
);

export default DailyUsageChart;
