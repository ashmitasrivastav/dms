import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const chartData = {
    series: [
      {
        name: 'Sales',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        title: {
          text: 'Sales trends',
          align: 'left'
        }
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Chart options={chartData.options} series={chartData.series} type="line" height={200} />
    </div>
  );
};

export default LineChart;
