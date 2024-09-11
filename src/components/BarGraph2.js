import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { processCustomerData } from './BarGraph2Subsection'; // Assuming processCustomerData is in this file

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarGraph2() {
    const [chartData, setChartData] = useState({
        labels: [], // Initialize empty labels array
        datasets: [] // Initialize empty datasets array
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8089/endpoint/customers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const processedData = processCustomerData(data);

                const labels = Object.keys(processedData);
                const cities = Array.from(new Set(
                    Object.values(processedData).flatMap(monthData => Object.keys(monthData))
                ));

                const datasets = cities.map(city => ({
                    label: city,
                    data: labels.map(month => processedData[month][city] || 0),
                    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`,
                }));

                // Ensure chartData is updated correctly
                setChartData({
                    labels: labels,
                    datasets: datasets.length > 0 ? datasets : [] // Ensure datasets are not empty
                });
            })
            .catch(error => {
                setError(error.message);
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Customer Distribution by City and Month</h1>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                // Only render the chart when data is available
                chartData && chartData.labels.length > 0 && chartData.datasets.length > 0 ? (
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
                                    text: 'Number of Customers per City by Month',
                                },
                            },
                        }}
                    />
                ) : (
                    <p>Loading chart...</p>
                )
            )}
        </div>
    );
}

export default BarGraph2;
