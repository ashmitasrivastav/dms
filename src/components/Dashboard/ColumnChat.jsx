// ColumnChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 130, 140, 150],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default ColumnChart;
