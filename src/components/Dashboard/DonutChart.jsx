import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
        toolbar: {
          show: true,
        },
      },
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            tooltip: {
              enabled: true,
            },
            menu: {
              enabled: true,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Chart options={chartData.options} series={chartData.series} type="donut" width="350" height={210} />
    </div>
  );
};

export default DonutChart;
