// components/SalesGrowth.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const demoData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales Growth Rate (%)',
      data: [5, 8, -2, 12, 3, 7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sales Growth Rate Over Time',
    },
  },
};

function SalesGrowth() {
  return (
    <div>
      <h2>Sales Growth Rate Over Time</h2>
      <Bar options={options} data={demoData} />
    </div>
  );
}

export default SalesGrowth;