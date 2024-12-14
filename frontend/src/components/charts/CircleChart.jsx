/* eslint-disable react/prop-types */
// ProgressCircleChart.js
// import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressCircleChart = ({ percentage, className }) => {
  // Define the data for the chart with completed and remaining segments
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Completion Status",
        data: [percentage, 100 - percentage], // Completed and remaining
        backgroundColor: ["#4CAF50", "#E0E0E0"], // Green for completed, grey for remaining
        hoverBackgroundColor: ["#45A049", "#D6D6D6"],
        borderWidth: 0, // No border for cleaner look
        cutout: "70%", // Cutout for doughnut style
      },
    ],
  };

  // Customize chart options for accurate representation
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend for simplicity
      },
      tooltip: {
        enabled: false, // Disable tooltips to focus on visual representation
      },
    },
    rotation: -90, // Start from the top (12 o'clock)
    circumference: 360, // Full circle to correctly represent the percentage
  };

  return (
    <div
      style={{
        position: "relative",
        width: "250px",
        height: "250px",
      }}
      className={className}
    >
      <Doughnut data={data} options={options} />
      {/* Center text to display the percentage */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressCircleChart;
