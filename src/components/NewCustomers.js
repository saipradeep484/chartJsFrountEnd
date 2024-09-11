
// components/NewCustomers.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const demoData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'New Customers',
      data: [50, 65, 45, 80, 70, 90],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
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
      text: 'New Customers Added Over Time',
    },
  },
};

function NewCustomers() {
  return (
    <div>
      <h2>New Customers Added Over Time</h2>
      <Line options={options} data={demoData} />
    </div>
  );
}

export default NewCustomers;