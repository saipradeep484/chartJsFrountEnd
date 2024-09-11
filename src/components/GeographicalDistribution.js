
// components/GeographicalDistribution.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const demoData = {
  labels: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  datasets: [
    {
      data: [300, 250, 200, 150, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
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
      text: 'Geographical Distribution of Customers',
    },
  },
};

function GeographicalDistribution() {
  return (
    <div>
      <h2>Geographical Distribution of Customers</h2>
      <Pie options={options} data={demoData} />
    </div>
  );
}

export default GeographicalDistribution;
