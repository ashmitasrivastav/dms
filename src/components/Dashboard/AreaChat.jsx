// AreaChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    chart: {
      type: 'area',
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
      name: 'Revenue',
      data: [31, 40, 28, 51, 42, 109, 100, 91, 125, 130, 140, 150],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="area" height={200} />
    </div>
  );
};

export default AreaChart;
