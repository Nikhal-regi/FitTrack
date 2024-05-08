import React, { useState } from "react";
import supabase from "../Config/Client";

const AddDataForm = ({ table }) => {
  const getInitialFormData = (table) => {
    switch (table) {
      case "Workout":
        return {
          date: "",
          squats: "",
          pushup: "",
          benchPresses: "",
          dumbbellLifts: "",
          cardio: "",
        };
      case "Nutrition":
        return {
          date: "",
          Calories: "",
          Fat: "",
          Protein: "",
          B12: "",
        };
      case "Wellfare":
        return {
          created_at: "",
          Work: "",
          Workout: "",
          Sleep: "",
          Leisure: "",
          Miscell: "",
        };
      default:
        return {};
    }
  };
  const [formData, setFormData] = useState(getInitialFormData(table));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from(table).insert([formData]);
      if (error) {
        throw error;
      }
      console.log("Data inserted successfully:", data);
      setFormData(getInitialFormData(table));
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };

  const getFormFields = (table) => {
    switch (table) {
      case "Workout":
        return [
          { name: "date", label: "Date" },
          { name: "squats", label: "Squats" },
          { name: "pushup", label: "Push-up" },
          { name: "benchPresses", label: "Bench Presses" },
          { name: "dumbbellLifts", label: "Dumbbell Lifts" },
          { name: "cardio", label: "Cardio" },
        ];
      case "Nutrition":
        return [
          { name: "date", label: "Date" },
          { name: "Calories", label: "Calories" },
          { name: "Fat", label: "Fat" },
          { name: "Protein", label: "Protein" },
          { name: "B12", label: "B12" },
        ];
      case "Wellfare":
        return [
          { name: "created_at", label: "Date" },
          { name: "Work", label: "Work" },
          { name: "Workout", label: "Workout" },
          { name: "Sleep", label: "Sleep" },
          { name: "Leisure", label: "Leisure" },
          { name: "Miscell", label: "Miscellaneous" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="p-4 bg-red-600 rounded-md shadow-md w-1/2 mx-auto my-8">
      <h2 className="text-lg font-semibold mb-4 text-white">
        Add {table} Data
      </h2>
      <form onSubmit={handleSubmit}>
        {getFormFields(table).map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block mb-2 text-white">{field.label}:</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDataForm;
