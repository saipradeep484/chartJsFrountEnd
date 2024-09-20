import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Fetch the data from the API
    axios.get('http://localhost:8089/products')
      .then((response) => {
        const apiData = response.data;

        // Extract labels and data values from the API response
        const labels = apiData.map((item) => item.title);
        const values = apiData.map((item) => item.price);

        // Set the chart data for the bar graph
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Sales per Month',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  return (
    <div>
      <h2>Sales Bar Graph</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Total Sales by Month',
            },
          },
        }}
      />
    </div>
  );
};

export default BarGraph;
