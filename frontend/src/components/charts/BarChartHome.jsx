import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "AYUSH Startup Applications",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "#8a5cf6e4",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly AYUSH Startup Applications",
    },
  },
};

const BarChartHome = () => {
  return (
    <div className="w-[60rem] mx-auto bg-white p-6">
      <h2 className="text-3xl font-semibold text-center mb-4">
        AYUSH Startup Application Report 2024
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartHome;
