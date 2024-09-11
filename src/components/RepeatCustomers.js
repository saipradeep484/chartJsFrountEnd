
// components/RepeatCustomers.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const demoData = {
  labels: ['Daily', 'Monthly', 'Quarterly', 'Yearly'],
  datasets: [
    {
      label: 'Repeat Customers',
      data: [10, 50, 150, 500],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
      text: 'Number of Repeat Customers',
    },
  },
};

function RepeatCustomers() {
  return (
    <div>
      <h2>Number of Repeat Customers</h2>
      <Bar options={options} data={demoData} />
    </div>
  );
}

export default RepeatCustomers;
