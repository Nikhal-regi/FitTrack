import React from "react";

const Menubar = ({ onSelect }) => {
  const handleSelect = (form) => {
    onSelect(form);
  };

  return (
    <ul className="menu bg-base-200 w-56 rounded-box absolute top-10 left-10">
      <li>
        <details open>
          <summary>Form List</summary>
          <ul>
            <li>
              <a onClick={() => handleSelect("Workout")}>Workout Form</a>
            </li>
            <li>
              <a onClick={() => handleSelect("Nutrition")}>Nutrition Form</a>
            </li>
            <li>
              <a onClick={() => handleSelect("Wellfare")}>Wellfare Form</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Menubar;
