import React, { useState } from "react";
import AddDataForm from "./Components/AddDataForm";
import Menubar from "./Components/Menubar";

const Form = () => {
  const [selectedForm, setSelectedForm] = useState("Workout");

  const handleFormSelect = (form) => {
    setSelectedForm(form);
  };

  return (
    <div>
      <Menubar onSelect={handleFormSelect} />
      {selectedForm === "Workout" && <AddDataForm table="Workout" />}
      {selectedForm === "Nutrition" && <AddDataForm table="Nutrition" />}
      {selectedForm === "Wellfare" && <AddDataForm table="Wellfare" />}
    </div>
  );
};

export default Form;
