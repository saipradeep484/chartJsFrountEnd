
// components/CustomerLifetimeValue.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const demoData = {
  labels: ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023'],
  datasets: [
    {
      label: 'Customer Lifetime Value',
      data: [500, 600, 550, 700, 650, 800],
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
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
      text: 'Customer Lifetime Value by Cohorts',
    },
  },
};

function CustomerLifetimeValue() {
  return (
    <div>
      <h2>Customer Lifetime Value by Cohorts</h2>
      <Bar options={options} data={demoData} />
    </div>
  );
}

export default CustomerLifetimeValue;