import React, { useEffect, useState } from "react";
import supabase from "./Config/Client";

const Overview = () => {
  const [WorkoutData, setWorkoutData] = useState([]);
  const [NutritionData, setNutritionData] = useState([]);
  const [WellfareData, setWellfareData] = useState([]);
  // Add more states for other tables as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const WorkoutResult = await supabase
          .from("Workout")
          .select("date,squats,pushup,benchPresses,dumbbellLifts,cardio");
        setWorkoutData(WorkoutResult.data || []);

        const NutritionResult = await supabase
          .from("Nutrition")
          .select("date,Calories,Fat,Protein,B12");
        setNutritionData(NutritionResult.data || []);

        const WellfareResult = await supabase
          .from("Wellfare")
          .select("created_at,Work,Workout,Sleep,Leisure,Miscell");
        setWellfareData(WellfareResult.data || []);
        // Fetch data for other tables and set state accordingly
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 font-serif flex justify-center">
      <div className="fade-in flex flex-col w-100">
        <div className="mr-8 flex-1 my-8">
          <h2 className="text-white text-3xl font-bold mb-4">Workout Table</h2>
          <table className="fade-in active w-full border-collapse text-base text-black bg-gray-800 rounded-lg p-4 table">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-12 py-4 text-left">Date</th>
                <th className="p-4 text-left">Squats</th>
                <th className="p-4 text-left">Push-up</th>
                <th className="p-4 text-left">Bench Presses</th>
                <th className="p-4 text-left">Dumbbell Lifts</th>
                <th className="p-4 text-left">Cardio</th>
              </tr>
            </thead>
            <tbody>
              {WorkoutData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-gray-900 hover" : "bg-gray-800 hover"
                  }
                >
                  <td className="p-4 text-left text-white">{item.date}</td>
                  <td className="p-4 text-left text-white">{item.squats}</td>
                  <td className="p-4 text-left text-white">{item["pushup"]}</td>
                  <td className="p-4 text-left text-white">
                    {item["benchPresses"]}
                  </td>
                  <td className="p-4 text-left text-white">
                    {item.dumbbellLifts}
                  </td>
                  <td className="p-4 text-left text-white">{item.cardio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mr-8 flex-1 mt-8">
          <h2 className="text-white text-3xl font-bold mb-4">
            Nutrition Table
          </h2>
          <table className="fade-in active w-full border-collapse text-base text-black bg-gray-800 rounded-lg p-4 table">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-12 py-4 text-left">Date</th>
                <th className="p-4 text-left">Calories</th>
                <th className="p-4 text-left">Fat</th>
                <th className="p-4 text-left">Protein</th>
                <th className="p-4 text-left">B12</th>
              </tr>
            </thead>
            <tbody>
              {NutritionData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-gray-900 hover" : "bg-gray-800 hover"
                  }
                >
                  <td className="p-4 text-left text-white">{item.date}</td>
                  <td className="p-4 text-left text-white">{item.Calories}</td>
                  <td className="p-4 text-left text-white">{item.Fat}</td>
                  <td className="p-4 text-left text-white">{item.Protein}</td>
                  <td className="p-4 text-left text-white">{item.B12}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mr-8 flex-1 mt-8">
          <h2 className="text-white text-3xl font-bold mb-4">Wellfare Table</h2>
          <table className="fade-in active w-full border-collapse text-base text-black bg-gray-800 rounded-lg p-4 table">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-16 py-4 text-left">Date</th>
                <th className="p-4 text-left">Work</th>
                <th className="p-4 text-left">Workout</th>
                <th className="p-4 text-left">Sleep</th>
                <th className="p-4 text-left">Leisure</th>
                <th className="p-4 text-left">Miscellaneous</th>
              </tr>
            </thead>
            <tbody>
              {WellfareData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-gray-900 hover" : "bg-gray-800 hover"
                  }
                >
                  <td className="p-4 text-left text-white">
                    {item.created_at}
                  </td>
                  <td className="p-4 text-left text-white">{item.Work}</td>
                  <td className="p-4 text-left text-white">{item.Workout}</td>
                  <td className="p-4 text-left text-white">{item.Sleep}</td>
                  <td className="p-4 text-left text-white">{item.Leisure}</td>
                  <td className="p-4 text-left text-white">
                    {item["Miscell"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add similar divs for other tables */}
      </div>
    </div>
  );
};

export default Overview;
