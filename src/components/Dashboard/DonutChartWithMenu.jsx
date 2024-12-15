import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const DonutChartWithMenu = () => {
  const fullData = {
    CategoryA: [40, 20, 30, 10], // Example values
    CategoryB: [15, 25, 35, 25],
    CategoryC: [20, 30, 40, 10],
  };

  const categories = Object.keys(fullData); // ["CategoryA", "CategoryB", "CategoryC"]

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const chartData = fullData[selectedCategory];
  const chartOptions = {
    chart: {
      type: "donut",
      toolbar: {
        show: true,
        tools : {
          download : true
        },
      },
    },
    labels: ["Option 1", "Option 2", "Option 3", "Option 4"], // Label the segments
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Donut Chart with Menu</h1>

      {/* Dropdown Menu */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="category-select">Select Category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Donut Chart */}
      <ReactApexChart
        options={chartOptions}
        series={chartData}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutChartWithMenu;
