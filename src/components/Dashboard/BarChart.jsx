import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const chartData = {
    series: [
      {
        name: 'Sales',
        data: [50, 40, 30, 20, 10, 200, 250, 300],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    },
  };

  return (
    <div className="App">
      <Chart options={chartData.options} series={chartData.series} type="bar" height={350} width={500} />
    </div>
  );
};

export default BarChart;
