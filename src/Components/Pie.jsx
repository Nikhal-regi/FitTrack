import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import supabase from "../Config/Client";

Chart.register(...registerables);

const PieChart = () => {
  const [wellfareData, setWellfareData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Pie Chart Example",
        fontSize: 16,
        padding: 20,
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  useEffect(() => {
    const fetchWellfareData = async () => {
      try {
        const { data, error } = await supabase.from("Wellfare").select();

        if (error) {
          throw new Error("Could not fetch the Wellfare");
        }

        setWellfareData(data);
      } catch (error) {
        setFetchError(error.message);
      }
    };

    fetchWellfareData();
  }, []);

  const getChartData = () => {
    if (!wellfareData || wellfareData.length === 0) return null; // Return null if wellfareData is undefined or empty

    const labels = ["Work", "Workout", "Sleep", "Leisure", "Miscell."];
    const backgroundColors = [
      "rgb(255, 99, 132)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
    ];

    const wellfare = wellfareData[wellfareData.length - 1]; // Assuming you only expect one row of data

    const [d1, d2, d3, d4, d5, d6, d7] = Object.values(wellfare);
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Wellness",
          backgroundColor: backgroundColors,
          borderColor: "rgb(0, 0, 0)",
          data: [
            d3 ? d3 : 10,
            d4 ? d4 : 10,
            d5 ? d5 : 10,
            d6 ? d6 : 10,
            d7 ? d7 : 10,
          ],
        },
      ],
    };

    return data;
  };

  const data = getChartData();

  if (!data) {
    return <div>Loading...</div>; // Render a loading indicator if data is not yet available
  }

  return <Pie data={data} options={options} />;
};

export default PieChart;
