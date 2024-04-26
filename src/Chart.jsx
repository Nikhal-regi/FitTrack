import React from "react";
import BarChart from "./Components/Bar.jsx";
import LineChart from "./Components/Line.jsx";
import PieChart from "./Components/Pie.jsx";
import Profile from "./Components/Profile.jsx";

const Chart = () => {
  return (
    <div className="container mx-auto bg-slate-200 p-8 rounded-3xl mt-8">
      <h1 className="text-2xl font-bold mb-4 mt-8">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div
          className="bg-white rounded-lg shadow-md p-4"
          style={{ height: "350px" }}
        >
          <Profile />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Day-to-Day Chart</h2>
          <PieChart />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Workout Chart</h2>
          <LineChart />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Nutrition Chart</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;
