import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const data = [
  { month: "January", value: 400 },
  { month: "February", value: 300 },
  { month: "March", value: 200 },
  { month: "April", value: 278 },
  { month: "May", value: 189 },
  { month: "June", value: 239 },
  { month: "July", value: 349 },
  { month: "August", value: 450 },
  { month: "September", value: 320 },
  { month: "October", value: 200 },
  { month: "November", value: 300 },
  { month: "December", value: 400 },
];

const AreaChartWithFilter = () => {

  const [selectedMonths, setSelectedMonths] = useState(
    data.map(d => d.month) // Initially select all months
  );

  const handleMonthChange = (event) => {
    const { value, checked } = event.target;
    setSelectedMonths(prev =>
      checked ? [...prev, value] : prev.filter(month => month !== value)
    );
  };

  const filteredData = data.filter(d => selectedMonths.includes(d.month));
  const chartCategories = filteredData.length
    ? filteredData.map(d => d.month)
    : ["No Data"];
  const chartValues = filteredData.length
    ? filteredData.map(d => d.value)
    : [0];

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: chartCategories,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
     type:"gradient",
      gradient: {
        shadeIntensity: 1,
        type : "vertical",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    tooltip: {
      enabled: true,
    },
    noData: {
      text: "No data to display",
      align: "center",
      verticalAlign: "middle",
      style : {
        color : "#888",
        fontSize: "16px",
      },
    },
  };

  const chartSeries=[
    {
      name:"Values",
      data:chartValues,
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Area Chart with Month Filter</h1>
      <div>
        <h3>Select Month</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {data.map(d => (
            <label key={d.month} style={{ display: "inline-block" }}>
              <input
                type="checkbox"
                value={d.month}
                checked={selectedMonths.includes(d.month)}
                onChange={handleMonthChange}
              />
              {d.month}
            </label>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <ReactApexChart
          options={chartOptions}
          series={[{ name: "Values", data: chartValues }]}
          type="area"
          height={400}
        />
      </div>
    </div>
  );
};

export default AreaChartWithFilter;
