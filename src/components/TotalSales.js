import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Total Sales Over Time',
    },
  },
};

function TotalSales() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Sales',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    fetch('http://localhost:8081/fun/good')
      .then(response => response.json())
      .then(data => {
        // Assuming the response is in the format: { labels: [...], data: [...] }
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Total Sales',
              data: data.data,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Total Sales Over Time</h2>
      <Line options={options} data={chartData} />
    </div>
  );
}

export default TotalSales;
