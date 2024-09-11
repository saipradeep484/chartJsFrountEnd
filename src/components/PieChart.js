import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8089/endpoint/products')
      .then((response) => {
        const apiData = response.data;

        // Extract labels and data values from the API response
        const labels = apiData.map((item) => item.title);
        const values = apiData.map((item) => item.price);

        // Set chart data for the pie chart
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Category Distribution',
              data: values,
              backgroundColor: [
                'rgba(2, 99, 12, 0.60)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 100, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
              borderColor: [
                'rgba(200, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
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
    <div style={{ width: '1350px', height: '600px' }} justification="center">
      <h2>Category Distribution Pie Chart</h2>
      <Pie 
        data={chartData} 
        options={{
          maintainAspectRatio: false, // Allows resizing based on container size
        }}
      />
    </div>
  );
};

export default PieChart;
