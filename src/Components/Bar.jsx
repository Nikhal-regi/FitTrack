import React, { useEffect, useState, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import supabase from "../Config/Client";
Chart.register(...registerables);

const BarChart = () => {
  const [wellfareData, setWellfareData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchWellfareData = async () => {
      try {
        const { data, error } = await supabase.from("Nutrition").select();

        if (error) {
          throw new Error("Could not fetch the Welfare data");
        }

        setWellfareData(data);
      } catch (error) {
        setFetchError(error.message);
      }
    };

    fetchWellfareData();
  }, []);

  const getChartData = useMemo(() => {
    if (!wellfareData || wellfareData.length === 0) return null;

    const labels = Object.keys(wellfareData[0]).filter((key) => key !== "id");

    const datasets = wellfareData.map((entry, index) => ({
      label: entry.date,
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.7)`,
      borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 1)`,
      borderWidth: 0.5,
      hoverBackgroundColor: `rgba(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255}, 0.9)`,
      hoverBorderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 1)`,
      data: Object.values(entry).slice(1), // Assuming first value is ID
    }));

    return { labels, datasets };
  }, [wellfareData]);

  if (!wellfareData) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError}</div>;
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bar Chart Example",
        fontSize: 16,
        padding: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return <Bar data={getChartData} options={options} />;
};

export default BarChart;
