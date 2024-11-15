import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const TChart = () => {
  // Sample data
  const dates = ["06:05 May 11", "06:06 May 11", "06:07 May 11", "06:10 May 11", "06:12 May 11", "06:13 May 11","06:10 May 11", "06:12 May 11", "06:13 May 11"];
  const temperatureData = [29.60, 29.52, 29.56, 29.64, 29.66, 29.60, 29.52, 29.56, 29.64];
  const turbidityData = [15, 13, 15, 14, 16, 15, 10, 5, 2];
  const batteryData = [90, 89, 88, 87, 86, 85, 60, 71, 98];

  // State to manage which parameters are visible
  const [showTemperature, setShowTemperature] = useState(true);
  const [showTurbidity, setShowTurbidity] = useState(false);
  const [showBattery, setShowBattery] = useState(false);

  // Define datasets based on visibility state
  const datasets = [
    showTemperature && {
      label: "Temperature",
      data: temperatureData,
      borderColor: "red",
      backgroundColor: "red",
      borderWidth: 1,
      pointRadius: 4,
      pointBackgroundColor: "red",
      fill: false,
    },
    showTurbidity && {
      label: "Turbidity",
      data: turbidityData,
      borderColor: "blue",
      backgroundColor: "blue",
      borderWidth: 1,
      pointRadius: 4,
      pointBackgroundColor: "blue",
      fill: false,
    },
    showBattery && {
      label: "Battery",
      data: batteryData,
      borderColor: "green",
      backgroundColor: "green",
      borderWidth: 1,
      pointRadius: 4,
      pointBackgroundColor: "green",
      fill: false,
    },
  ].filter(Boolean);

  // Chart data configuration
  const data = {
    labels: dates,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#666",
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
          color: "#666",
        },
        ticks: {
          color: "#666",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend (parameters are displayed to the right)
      },
    },
    layout: {
      backgroundColor: "#fff", // White background for the chart
    },
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", marginLeft: "30px", marginRight:"40px" }}>
      <div style={{ width: "90%", height: "250px" }}>
        <Line data={data} options={options} />
      </div>
      <div style={{ marginLeft: "20px", marginTop: "-10px" }}> {/* Raised the toggles to align higher */}
        <h4 style={{ fontSize: "14px", color: "#333", marginBottom: "10px" }}>Parameters</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#333", marginBottom: "5px" }}>
            <input
              type="checkbox"
              checked={showTemperature}
              onChange={() => setShowTemperature(!showTemperature)}
              style={{ marginRight: "5px" }}
            />
            Temperature
          </label>
          <label style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#333", marginBottom: "5px" }}>
            <input
              type="checkbox"
              checked={showTurbidity}
              onChange={() => setShowTurbidity(!showTurbidity)}
              style={{ marginRight: "5px" }}
            />
            Turbidity
          </label>
          <label style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#333", marginBottom: "5px" }}>
            <input
              type="checkbox"
              checked={showBattery}
              onChange={() => setShowBattery(!showBattery)}
              style={{ marginRight: "5px" }}
            />
            Battery
          </label>
        </div>
      </div>
    </div>
  );
};

export default TChart;
