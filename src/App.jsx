import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Import your navbar component
import Home from "./Home"; // Import your home component
import Chart from "./Chart"; // Import your chart component
import Tables from "./Tables";
// import AddDataForm from "./Components/AddDataForm";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bar" element={<Chart />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
