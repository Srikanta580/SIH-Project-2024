// import React from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const SectorPerformanceChart = () => {
  const data = {
    labels: [
      "Ayurveda",
      "Yoga",
      "Naturopathy",
      "Unani",
      "Siddha",
      "Homoeopathy",
    ],
    datasets: [
      {
        label: "Applications Approved",
        data: [45, 35, 25, 15, 30, 20],
        backgroundColor: "#4caf50",
      },
      {
        label: "Applications Pending",
        data: [15, 20, 10, 5, 12, 8],
        backgroundColor: "#f44336",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sector Performance Metrics",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export const SectorGrowthPatternChart = () => {
  // Sample data for sector growth patterns
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"], // Years as X-axis labels
    datasets: [
      {
        label: "Ayurveda",
        data: [20, 30, 50, 70, 90], // Growth data for Ayurveda
        borderColor: "#ff9800", // Orange line
        backgroundColor: "rgba(255, 152, 0, 0.5)",
        fill: true,
      },
      {
        label: "Yoga",
        data: [10, 25, 35, 60, 80], // Growth data for Yoga
        borderColor: "#2196f3", // Blue line
        backgroundColor: "rgba(33, 150, 243, 0.5)",
        fill: true,
      },
      {
        label: "Naturopathy",
        data: [15, 20, 30, 50, 65], // Growth data for Naturopathy
        borderColor: "#9c27b0", // Purple line
        backgroundColor: "rgba(156, 39, 176, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sector Growth Patterns Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Growth Index",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export const ComplianceStatusDoughnut = () => {
  const data = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        data: [10, 5, 2], // Example data: number of pending, approved, rejected checks
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
      },
    },
    layout: {
      padding: {
        top: 0,
        bottom: 30,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export const ComplianceTypeBarChart = () => {
  const data = {
    labels: ["Financial", "Regulatory", "Identity", "Health", "Environmental"],
    datasets: [
      {
        label: "Compliance Checks",
        data: [3, 5, 2, 4, 1], // Example data: number of checks by type
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export const ComplianceTrendLineChart = () => {
  const data = {
    labels: ["Aug 1", "Aug 5", "Aug 10", "Aug 15", "Aug 20"],
    datasets: [
      {
        label: "Compliance Reviews Over Time",
        data: [2, 4, 3, 5, 1], // Example data: trend of compliance reviews
        fill: false,
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Number of Reviews",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
